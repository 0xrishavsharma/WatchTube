import React from 'react'
import styled from 'styled-components';
import { VideoData } from "../../utils/database.js";
import Thumbnail from "../../assets/img/thumbnails/thumbnail1.jpg"

const Container = styled.div`
    color: ${({ theme }) => theme.text };
    width: 360px;
    margin-bottom: 30px;
    cursor: pointer;
    /* display: flex;
    flex-wrap: wrap; */
    /* justify-content: space-between; */
`;

const Image = styled.img`
    width: 100%;
    height: 202px;
    background-color: #999;
`;

const Img = styled.div`

`;

const Title = styled.div`

`;

const ChannelName = styled.div`

`;

const Details = styled.div`

`;

const ProperCard = styled.div`
  /* display: flex; */
`;


const Card = () => {
  // console.log(VideoData)
  return (
    <Container>
      {VideoData.map((data, i) => {
        return (
          <ProperCard key={i}>
            <Image src={data.img} />
            <Details>
              <Img></Img>
              <div>
                <Title>{data.title}</Title>
                <ChannelName>{data.channel}</ChannelName>
                <div>
                  <p>{data.views}</p>
                  <p>{ data.uploaded}</p>
                </div>
              </div>
            </Details>
          </ProperCard>
        )
      })}
    </Container>
  )
}

export default Card