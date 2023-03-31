import React from 'react';
import styled from 'styled-components';
import Thumbnail2 from "../../assets/img/thumbnails/thumbnail2.jpg";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
const Wrapper = styled.div`
    display: flex;
    gap:1rem;
    &:hover #moreInfoIcon{
        opacity: 1;
    }
`;
const UserAvatar = styled.img`
    height: 36px;
    width: 36px;
    border-radius: 50%;
`;
const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
`;
const CommentDetails = styled.div`
  
  p{
    margin: 0px;
  }
`;
const NameAndDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;
const Name = styled.div`
  font-size: 14px;
`;
const PostedDate = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;
const CommentTxt = styled.div`
  font-size: 14px;
  margin-top: 0.4rem;
`;
const InteractionBtns = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.7rem;
  margin-top: 0.8rem;
  .icon{
    font-size: 0.8rem;
  }
`;
const InteractionBtnSingle = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;
const MoreInfoBtn = styled.div`
    cursor: pointer;
    #moreInfoIcon{
        opacity: 0;
    }
`;
const ReportPopUp = styled.div`
    display: flex;
    gap: 0.6rem;
    align-items: center;
    font-size: 14px;
    padding: 0.8rem 1rem ;
    background-color: ${({ theme }) => theme.bgLighter};
    border-radius: 3px;
    opacity: 0;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    .icon{
        font-size: 22px;
    }

    p{
        margin: 0;
    }
`;


const commentMoreInfo = () => {
  let moreInfoIcon = document.getElementById("moreInfoIcon");
  let reportPopUp = document.getElementById("reportPopUp");
  if (reportPopUp.style.opacity === "1") {
    reportPopUp.style.opacity = "0";
  } else {
    reportPopUp.style.opacity = "1";
  }
}


const Comment = () => {
  return (
    <Container>
      <Wrapper>
        <UserAvatar src={Thumbnail2}></UserAvatar>
        <CommentDetails>
          <NameAndDate>
            <Name>John Doe</Name>
            <PostedDate>3 weeks ago</PostedDate>
          </NameAndDate>
          <CommentTxt>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maiores dignissimos nostrum enim quidem, numquam doloribus ab corporis nemo, magni delectus atque vero.</CommentTxt>
          <InteractionBtns>
            <InteractionBtnSingle> <ThumbUpOutlinedIcon className="icon" /> 23 </InteractionBtnSingle>
            <InteractionBtnSingle> <ThumbDownAltOutlinedIcon className="icon" /></InteractionBtnSingle>
            <p>REPLY</p>
          </InteractionBtns>
        </CommentDetails>
        <MoreInfoBtn className='moreInfoBtn' >
          <MoreVertIcon id="moreInfoIcon" onClick={commentMoreInfo} />
          <ReportPopUp id="reportPopUp" className="reportPopUpToggle">
            <EmojiFlagsIcon className='icon' />
            <p>Report</p>
          </ReportPopUp>
        </MoreInfoBtn>
      </Wrapper>
    </Container>
  )
}

export default Comment;