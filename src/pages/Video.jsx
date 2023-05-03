import styled from "styled-components";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUp from '@mui/icons-material/ThumbUp';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbDown from '@mui/icons-material/ThumbDown';
import ReplyIcon from '@mui/icons-material/Reply';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CommentSection from "../components/commentSection/CommentSection";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { fetchStart, fetchSuccess, fetchFailure, like, dislike } from "./../store/videoSlice.js";
import { format } from "timeago.js"
import { subscribe } from "../store/userSlice";


const Container = styled.div`
  display: flex;
  padding: 20px 20px 0px 20px;
  gap: 20px;
  color: ${({ theme }) => theme.text};
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

  @media screen and (max-width:152px){
    flex-direction: column;
  }
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
  border: 0.5px solid ${({ theme }) => theme.soft};
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
  background-color:${({ isSubscribed }) => isSubscribed ? "gray" : "#d30202"};
  font-size: 14px;
  color: white;
  cursor: pointer;
  border-radius: 2px;
`;
const Description = styled.div`

`;


const Video = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  const videoId = useLocation().pathname.split("/")[2];

  const [channel, setChannel] = useState({});


  // Fetch video and channel data from database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/api/videos/find/${videoId}`);
        const channelRes = await axios.get(`/api/users/find/${videoRes.data.userId}`);

        dispatch(fetchSuccess(videoRes.data));
        setChannel(channelRes.data);
      } catch (err) { console.log(err) }
    };
    fetchData();
  }, [videoId, dispatch]);
  const handleLike = async () => {
    await axios.put(`/api/users/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  };
  const handleDislike = async () => {
    await axios.put(`/api/users/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id));
  };

  const subscribeBtnHandler = async () => {
    try {
      console.log("channel id", channel._id)
      currentUser.subscribedChannels.includes(channel._id) ?
        await axios.put(`/api/users/unsubscribe/${channel._id}`) :
        await axios.put(`/api/users/subscribe/${channel._id}`);
      dispatch(subscribe(channel._id))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <Content>
        <Title> {currentVideo?.videoTitle}</Title>
        <Details>
          <Info>
            <p>{currentVideo?.views} views</p>
            <p> · </p>
            <p>{format(currentVideo?.createdAt)}</p>
          </Info>
          <InteractionButtons>
            <InteractionBtnSingle onClick={handleLike}>
              {
                currentUser && currentVideo?.likes?.includes(currentUser._id)
                  ?
                  <ThumbUp className="icon" />
                  :
                  <ThumbUpOutlinedIcon className="icon" />
              }
              LIKE {currentVideo?.likes?.length}
            </InteractionBtnSingle>
            <InteractionBtnSingle onClick={handleDislike}>
              {
                currentVideo?.dislikes?.includes(currentUser._id)
                  ?
                  <ThumbDown />
                  :
                  <ThumbDownAltOutlinedIcon className="icon" />
              }
              DISLIKE {currentVideo?.dislikes?.length}
            </InteractionBtnSingle>
            <InteractionBtnSingle> <ReplyIcon className="icon shareIcon" /> SHARE </InteractionBtnSingle>
            <InteractionBtnSingle> <ContentCutIcon className="icon" /> CLIP </InteractionBtnSingle>
            <InteractionBtnSingle> <LibraryAddIcon className="icon" /> SAVE </InteractionBtnSingle>
            <InteractionBtnSingle> <MoreHorizIcon className="icon" /> </InteractionBtnSingle>
          </InteractionButtons>
        </Details>
        <Hr />
        <ChannelContainer>
          <ChannelWrapper>
            <Logo src={channel.imgUrl}></Logo>
            <ChannelDetails>
              <ChannelName className="channelDetails">{channel.name}</ChannelName>
              <ChannelSubscribers className="channelDetails">
                {channel.subscribers?.length === 0 ? 0 : channel.subscribers} subscribers
              </ChannelSubscribers>
            </ChannelDetails>
          </ChannelWrapper>
          <SubscribeBtn
            isSubscribed={currentUser.subscribedChannels?.includes(channel._id)}
            onClick={subscribeBtnHandler}
          >
            {
              currentUser.subscribedChannels?.includes(channel._id)
                ?
                "SUBSCRIBED"
                :
                "SUBSCRIBE"
            }
          </SubscribeBtn>
        </ChannelContainer>
        <ChannelMoreDetails>
          <Description className="channelDetails">{currentVideo?.description}</Description>
          <ShowMoreBtn className="channelDetails">SHOW MORE</ShowMoreBtn>
        </ChannelMoreDetails>
        <Hr />
        <CommentSection />
      </Content>
      <Recommendations>
        {/* <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" /> */}
      </Recommendations>
    </Container>
  )
}

export default Video