import React from 'react';
import styled from 'styled-components';

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
const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.text};
    border-radius: 0.25rem;
    padding: 0.5rem;
    background-color: transparent;
`

const UploadPopup = ({ setIsPopupOpen }) => {

    return (
        <Container>
            <Wrapper>
                <Close onClick={() => setIsPopupOpen(false)}>X</Close>
                <Title>Upload a new video</Title>
                <Input placeholder="Title" type='file' accept='video/*' />
            </Wrapper>
        </Container>
    )
}

export default UploadPopup