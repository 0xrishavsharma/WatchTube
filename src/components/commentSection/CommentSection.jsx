import React from 'react'
import styled from 'styled-components';
import ProfileImg from "../../assets/img/thumbnails/Thumbnail2.jpg";
import SortIcon from '@mui/icons-material/Sort';
import Comment from '../comment/Comment';


const Container = styled.div`
  margin-top: 1.5rem;
`;
const Wrapper = styled.div`

`;
const Hr = styled.hr`
  border: 0.5px solid ${({theme}) => theme.soft};
`;
const CommentsStats = styled.div`
  display: flex;
  gap: 2rem;
`;
const NewComment = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const SortBy = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  font-size: 14px;
`;
const TotalComments = styled.div`

`;
const UserAvatar = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50%;
`;
const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid ${({theme}) => theme.soft};
  height: 40px;
  width: 100%;
  color: white;
  &:focus{
    border-bottom: 1px solid ${({theme}) => theme.textSoft};
  }
  &::placeholder{
    font-size: 14px;
  }
`;

const CommentSection = () => {
  return (
    <Container>
        <CommentsStats>
            <TotalComments>1,643 Comments</TotalComments>
            <SortBy> <SortIcon /> SORT BY </SortBy>
        </CommentsStats>
        <NewComment>
            <UserAvatar src={ProfileImg}></UserAvatar>
            <Input placeholder="Add a comment..."></Input>
            <Hr />      
        </NewComment>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </Container>
)
}

export default CommentSection