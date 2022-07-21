import styled from "styled-components";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ReplyIcon from '@mui/icons-material/Reply';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Thumbnail20 from "../assets/img/thumbnails/thumbnail20.jpg";
import Thumbnail2 from "../assets/img/thumbnails/thumbnail2.jpg";
import SortIcon from '@mui/icons-material/Sort';
import CommentSection from "../components/commentSection/CommentSection";
import Card from "../components/card/Card"

const Container = styled.div`
  display: flex;
  padding: 20px 20px 0px 20px;
  gap: 20px;
  color: ${({theme}) => theme.text};
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div`

  iframe{
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 18px;
  margin-top: 1rem;
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.3rem;
`;
const Info = styled.div`
  display: flex;
  gap: 0.4rem;
  color: ${({ theme }) => theme.textSoft};
  font-size: 14px;
`;
const InteractionButtons = styled.div`
  display: flex;
  gap: 1.3rem;
`;
const InteractionBtnSingle = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 0.4rem;
  

  .icon{
    font-size: 22px;
    cursor: pointer;
  }

  .shareIcon{
    transform: rotateY(180deg);
    font-size: 22px;
  }
`;
const Hr = styled.hr`
  border: 0.5px solid ${({theme}) => theme.soft};
`;

const Recommendations = styled.div`
  flex: 2;
`;

const ChannelContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
const ChannelWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;

  .channelDetails{
    margin: 0rem;
  }
  `;
const Logo = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
`;
const ChannelMoreDetails = styled.div`
  margin-left: 64px;
  font-size: 14px;
`;
const ShowMoreBtn = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 0.6rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;
const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ChannelName = styled.div`
  cursor: pointer;
  margin-bottom: 0.5rem;
`;
const ChannelSubscribers = styled.div`
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;
const SubscribeBtn = styled.div`
  padding: 0.7rem 1rem;
  background-color: #d30202;
  font-size: 14px;
  color: white;
  cursor: pointer;
  border-radius: 2px;
`;
const Description = styled.div`

`;




const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe width="100%" height="513" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VideoWrapper>
        <Title> Rick Astley - Never Gonna Give You Up (Official Music Video)</Title>
        <Details>
          <Info>
            <p>123,778 views</p>
            <p> · </p>
            <p>July 16, 2022</p>
          </Info>
          <InteractionButtons>
            <InteractionBtnSingle> <ThumbUpOutlinedIcon className="icon" /> LIKE </InteractionBtnSingle>
            <InteractionBtnSingle> <ThumbDownAltOutlinedIcon className="icon" /> DISLIKE </InteractionBtnSingle>
            <InteractionBtnSingle> <ReplyIcon className="icon shareIcon"/> SHARE </InteractionBtnSingle>
            <InteractionBtnSingle> <ContentCutIcon className="icon" /> CLIP </InteractionBtnSingle>
            <InteractionBtnSingle> <LibraryAddIcon className="icon" /> SAVE </InteractionBtnSingle>
            <InteractionBtnSingle> <MoreHorizIcon className="icon" /> </InteractionBtnSingle>
          </InteractionButtons>
        </Details>
        <Hr />
        <ChannelContainer>
          <ChannelWrapper>
            <Logo src={Thumbnail20}></Logo>
            <ChannelDetails>
              <ChannelName className="channelDetails">Great Sight</ChannelName>
              <ChannelSubscribers className="channelDetails">347K subscribers</ChannelSubscribers>
            </ChannelDetails>
          </ChannelWrapper>
          <SubscribeBtn>SUBSCRIBE</SubscribeBtn>
        </ChannelContainer>
        <ChannelMoreDetails>
          <Description className="channelDetails">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus ullam, quae ea autem repudiandae optio nostrum tempore odio amet dicta ipsum accusantium modi. Aliquam, soluta error? Porro aliquam reprehenderit architecto necessitatibus quae, labore adipisci tenetur aperiam excepturi. Optio, modi officia!</Description>
          <ShowMoreBtn className="channelDetails">SHOW MORE</ShowMoreBtn>
        </ChannelMoreDetails>
        <Hr />
        <CommentSection />
      </Content>

      
      <Recommendations>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
      </Recommendations>
    </Container>
  )
}

export default Video