import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import app from '../firebase';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.75);
    z-index: 2;
`;
const Wrapper = styled.div`
    width: 600px;
    height: 600px;
    background-color: ${({ theme }) => theme.bgLighter};
    color: ${({ theme }) => theme.text};
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    position: relative;
`;
const Close = styled.span`
    position: absolute;
    top:1rem;
    right:1rem;
    cursor: pointer;
`;
const Title = styled.div`
    font-size: 1.8rem;
    font-weight: 700;
    text-align: center;
`;
const Label = styled.label`
    font-size: 1.2rem;
    font-weight: 600;
    margin-block: 1rem -0.8rem;
`;
const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.text};
    border-radius: 0.25rem;
    padding: 0.5rem;
    background-color: transparent;
`
const Description = styled.textarea`
    border: 1px solid ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.text};
    border-radius: 0.25rem;
    padding: 0.5rem;
    background-color: transparent;
`
const Button = styled.button`  
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.textSoft};
    border-radius: 0.25rem;
    padding: 0.7rem 1.5rem;
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
    font-weight: 600;
    margin-top: 1rem;
`

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;
const Spinner = styled(AutorenewOutlinedIcon)`
    animation: ${spin} 1s linear infinite;
    font-size: 1.6rem;
        color: ${({ theme }) => theme.textSoft};
`;


const UploadPopup = ({ setIsPopupOpen }) => {

    const [thumbnail, setThumbnail] = useState(null)
    const [video, setVideo] = useState(null)
    const [thumbnailPercentage, setThumbnailPercentage] = useState(0)
    const [videoPercentage, setVideoPercentage] = useState(0)
    const [inputs, setInputs] = useState({})
    const [tags, setTags] = useState([])
    const [isUploading, setIsUploading] = useState(false)

    const navigate = useNavigate()

    // add state variable for button disabled status
    const [disabled, setDisabled] = useState(true);

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });

        // check if all inputs have values
        const hasEmptyFields = Object.values(inputs).some(
            (input) => input === "" || input === null
        );
        setDisabled(hasEmptyFields);
    };

    const handleTags = (e) => {
        setTags(e.target.value.replace(/,\s+/g, ",").split(',')) // split the tags by comma
    }

    const uploadFile = async (file, urlType) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + '_' + file.name;
        const storageRef = ref(storage, fileName);

        const uploadTask = uploadBytesResumable(storageRef, file);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                urlType === 'thumbnailUrl' ? setThumbnailPercentage(Math.round(progress)) : setVideoPercentage(Math.round(progress))
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        break;
                }
            },
            (error) => {
                console.log(error)
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setInputs(prev => ({ ...prev, [urlType]: downloadURL }))
                });
            }
        )
    }
    const uploadVideo = async (file) => {

    }

    useEffect(() => {
        video && uploadFile(video, 'videoUrl');
    }, [video])

    useEffect(() => {
        thumbnail && uploadFile(thumbnail, 'thumbnailUrl')
    }, [thumbnail])

    const handleUpload = async (e) => {
        e.preventDefault();
        setIsUploading(true);
        try {
            const res = await axios.post('/api/videos', { ...inputs, tags })
            setIsUploading(false);
            setIsPopupOpen(false);
            res.status === 200 && navigate(`/video/${res.data._id}`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <Wrapper>
                <Close onClick={() => setIsPopupOpen(false)}>X</Close>
                <Title>Upload a new video</Title>
                <Label>Video</Label>
                {
                    videoPercentage > 0 ? ("Uploading video: " + videoPercentage + "%")
                        :
                        <Input type='file' accept='video/*' onChange={(e) => setVideo(e.target.files[0])} />
                }
                <Input type='text' placeholder="Title" name='videoTitle' onChange={handleChange} />
                <Description placeholder="Description" rows={8} name='description' onChange={handleChange}
                    style={{ resize: "none" }}
                />
                <Input type='text' placeholder="Separate tags with commas" onChange={handleTags} />
                <Label>Thumbnail</Label>
                {
                    thumbnailPercentage > 0 ? ("Uploading thumbnail: " + thumbnailPercentage + "%")
                        :
                        <Input type='file' accept='image/*' onChange={(e) => setThumbnail(e.target.files[0])} />
                }
                <Button disabled={disabled} onClick={handleUpload}>
                    {
                        isUploading
                            ? <span style={{ display: "flex", alignItems: "center" }}>
                                Uploading...
                                <Spinner />
                            </span> : "Upload"
                    }
                </Button>
            </Wrapper>
        </Container>
    )
}

export default UploadPopup