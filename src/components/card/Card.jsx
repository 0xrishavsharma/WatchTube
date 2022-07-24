import React from 'react'
import styled from 'styled-components';
import { VideoData } from "../../utils/database.js";
import Thumbnail from "../../assets/img/thumbnails/thumbnail1.jpg"

const Container = styled.div`
    color: ${({ theme }) => theme.text };
    width: ${(props) => props.type === "small" ? "100%" : "352px"};
    margin-bottom: ${(props) => props.type === "small" ? "0.8rem" : "2.5rem"};
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    flex-direction: ${(props) => props.type === "small" && "row"};

`;

const Image = styled.img`
    width: 100%;
    height: ${(props) => props.type === "small" ? "94px" : "402px"}; 
    background-color: #999;
    cursor: pointer;
`;

const Img = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: ${(props) => props.type === "small" ? "none" : "block"};
`;

const Title = styled.div`
  cursor: pointer;
  font-size: ${(props) => props.type === "small" ? "12px" : "16px"};
`;

const ChannelName = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.textSoft};
  cursor: pointer;
`;

const Details = styled.div`
  display: flex;
  gap: 1rem;
`;

const VideoStats = styled.div`
  
`;
const VideoReach = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-top: 0.5rem;
  font-size: 10px;
  color: ${({ theme }) => theme.textSoft};
  div{
    display: flex;
    gap: 0.1rem;
  }
  p{
    margin: 0;
  }
`;


const Card = ({type}) => {
  return (
    <Container type={type}>
      <Image src={Thumbnail} type={ type } />
        <Details type={type}>
          <Img src={Thumbnail} type={type}></Img>
          <VideoStats type={type}>
            <Title type={type}>A great video to end your day | Summer Edition</Title>
            <VideoReach>
              <ChannelName>Be grateful</ChannelName>
              <div>
                <p>232K views &nbsp;</p>
                <p>1 week ago</p>
              </div>
            </VideoReach>
          </VideoStats>
        </Details>
    </Container>
  )
}

export default Card