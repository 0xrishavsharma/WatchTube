import { Link } from "react-router-dom";
import styled from "styled-components"
import { VideoData } from "../utils/database.js";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 30px 30px 0rem 30px;
`;
const Card = styled.div`
    color: ${({ theme }) => theme.text };
    width: 271px;
    margin-bottom: 30px;
`;
const Image = styled.img`
    width: 100%;
    height: 152px;
    background-color: #999;
    cursor: pointer;
`;

const Img = styled.img`
  height:36px;
  width: 36px;
  border-radius: 50%;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  color: ${({theme}) => theme.text};
`;

const ChannelName = styled.div`
  cursor: pointer;
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
const ChannelAndVerified = styled.div`

`;
const Verified = styled.div`

`;
const Views = styled.div`

`;
const UploadDate = styled.div`

`;





const Home = () => {
  return (
    <Container>
        {VideoData.map((data, i) => {
        return (
          <Card key={i}>
            <Link to="/video/test" style={{textDecoration:"none"}}>
              <Image src={data.thumbnail}  />
            </Link>
            <Details>
              <Img src={ data.channelImg }></Img>
              <DetailsInner>
                <Link to="/video/test" style={{textDecoration:"none"}} >
                  <Title>{data.title}</Title>
                </Link>
                <AdditionalInfo className="additionInfo">
                    <ChannelName>{data.channel}</ChannelName>
                  <ViewsTime>
                    <Views>{data.views} </Views>
                    <UploadDate>{ data.uploaded}</UploadDate>
                  </ViewsTime>
                </AdditionalInfo>
              </DetailsInner>
            </Details>
          </Card>
        )
      })}
    </Container>
  )
}

export default Home