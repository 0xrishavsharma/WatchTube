import { Link } from "react-router-dom";
import styled from "styled-components"
import { VideoData } from "../utils/database.js";
import { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "../components/card/Card.jsx";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    column-gap: 20px;
    /* row-gap: 3rem; */
    padding: 20px 20px 0rem 20px;
`;

const Card = styled.div`
    color: ${({ theme }) => theme.text};
    min-width: 245px;
    max-width: 296px;
    min-height: 138px;
    max-height: 172px;
    flex: 1;
    margin-bottom: 100px;
    @media screen and (max-width: 1265px) {
      min-width: 245px;
      max-width: 330px;
      min-height: 138px;
      max-height: 180px;
    }
    @media screen and (max-width: 954px) {
      min-width: 225px;
      max-width: 330px;
      min-height: 118px;
      max-height: 180px;
    }
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    background-color: #999;
    cursor: pointer;
`;

const Img = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50%;

  @media screen and (max-width: 1362px) {
      justify-content: inherit;
    }
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;
const ViewsTime = styled.div`
  margin-top: 0.3rem;
  display: flex;
  gap: 0.5rem;
`;

const Details = styled.div`
  display: flex;
  gap:10px;
  margin-top: 0.5rem;
`;
const DetailsInner = styled.div`
`;
const AdditionalInfo = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 0.5rem;
`;
const ChannelName = styled.div`
  cursor: pointer;
`;
const Views = styled.div`

`;
const UploadDate = styled.div`

`;


const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`/api/videos/${type}`);
        setVideos(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {/* {VideoData.map((data, i) => {
        return (
          <Card key={i}>
            <Link to="/video/test" style={{ textDecoration: "none" }}>
              <Image src={data.thumbnail} />
            </Link>
            <Details>
              <Img src={data.channelImg}></Img>
              <DetailsInner>
                <Link to="/video/test" style={{ textDecoration: "none" }} >
                  <Title>{data.title}</Title>
                </Link>
                <AdditionalInfo className="additionInfo">
                  <ChannelName>{data.channel}</ChannelName>
                  <ViewsTime>
                    <Views>{data.views} </Views>
                    <UploadDate>{data.uploaded}</UploadDate>
                  </ViewsTime>
                </AdditionalInfo>
              </DetailsInner>
            </Details>
          </Card>
        )
      })} */}
      {
        videos.map(video => {
          return <CardComponent key={video._id} video={video} />
        })
      }
    </Container>
  )
}

export default Home