import styled from "styled-components";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ReplyIcon from '@mui/icons-material/Reply';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Container = styled.div`
  display: flex;
  padding: 30px 30px 0px 30px;
  gap: 2rem;
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
const Buttons = styled.div`
  display: flex;
  gap: 1.3rem;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 0.4rem;

  .icon{
    font-size: 22px;
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
  flex: 1.5;
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
          <Buttons>
            <Button> <ThumbUpOutlinedIcon className="icon" /> LIKE </Button>
            <Button> <ThumbDownAltOutlinedIcon className="icon" /> DISLIKE </Button>
            <Button> <ReplyIcon className="icon shareIcon"/> SHARE </Button>
            <Button> <ContentCutIcon className="icon" /> CLIP </Button>
            <Button> <LibraryAddIcon className="icon" /> SAVE </Button>
            <Button> <MoreHorizIcon className="icon" /> </Button>
          </Buttons>
        </Details>
        <ChannelDetails>
          <Logo></Logo>
          <div>
            <p>Great Sight</p>
            <p></p>
          </div>
        </ChannelDetails>
        <Description>

        </Description>
        <Hr />
      </Content>
      <Recommendations>
        Recommendations
      </Recommendations>
    </Container>
  )
}

export default Video