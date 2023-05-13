import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import SortIcon from '@mui/icons-material/Sort';
import Comment from './Comment';
import axios from 'axios';
import { useSelector } from 'react-redux';


const Container = styled.div`
  margin-top: 1.5rem;
`;
const Wrapper = styled.div`

`;
const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
`;
const CommentsStats = styled.div`
  display: flex;
  gap: 2rem;
`;
const NewComment = styled.div`
  display: flex;
  flex-direction: column;
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
const InputWrapper = styled.div`
display: flex;
gap: 0.6rem;
justify-content: start;
width: 100%;

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
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  height: 40px;
  width: 100%;
  color: white;
  &:focus{
    border-bottom: 1px solid ${({ theme }) => theme.textSoft};
  }
  &::placeholder{
    font-size: 14px;
  }
`;

const CommentInputOptions = styled.div`
  width: 100%;
  display: none;
  gap: 0.6rem;
  justify-content: end;
`;

const CancelButton = styled.button`
color: white;
height: 33px;
width: 80px;
border-radius: 18px;
font-weight: 500;
outline: none;
border: none;
background-color: transparent;
cursor: pointer;
  &:hover{
    background-color: #ffffff42;
  }
`;

const SubmitButton = styled.button`
  height: 33px;
  width: 80px;
  border-radius: 18px;
  outline: none;
  border: none;
  font-weight: 500;
  cursor: not-allowed;
`;

const CommentSection = ({ videoId }) => {

  const [comments, setComments] = useState([]);
  const inputWrapperRef = useRef()
  const commentInputRef = useRef()
  const commentBtnRef = useRef()

  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const comments = await axios.get(`/api/comments/${currentVideo._id}`)
        setComments(comments.data)

      } catch (err) {
        console.log(err)
      }
    }
    fetchComments()
  }, [videoId])

  const commentInputHandler = () => {
    const inputWrapper = inputWrapperRef.current;
    const inputBtn = commentBtnRef.current;
    const commentInput = commentInputRef.current;

    if (commentInput.value === " " || null) {
      inputWrapper.style.display = "none";
      inputBtn.style.cursor = "not-allowed";
      inputBtn.style.backgroundColor = "#ffffff1f";
      inputBtn.style.color = "#ffffff61";
    } else {
      inputWrapper.style.display = "flex";
      inputBtn.style.cursor = "pointer";
      inputBtn.style.backgroundColor = "#f1f1f19c";
      inputBtn.style.color = "white";
    }
  }

  const commentInputCancelBtn = () => {
    const inputWrapper = inputWrapperRef.current;
    inputWrapper.style.display = "none";
  }


  return (
    <Container>
      <CommentsStats>
        <TotalComments>
          {
            comments.length > 0 ? comments.length : "0"
          }
          &nbsp;Comments
        </TotalComments>
        <SortBy> <SortIcon /> SORT BY </SortBy>
      </CommentsStats>
      <NewComment>
        <InputWrapper>
          <UserAvatar src={currentUser.img}></UserAvatar>
          <Input placeholder="Add a comment..." ref={commentInputRef} onKeyDown={commentInputHandler}></Input>
        </InputWrapper>
        <CommentInputOptions ref={inputWrapperRef}>
          <CancelButton onClick={commentInputCancelBtn}>Cancel</CancelButton>
          <SubmitButton ref={commentBtnRef}>Comment</SubmitButton>
        </CommentInputOptions>
      </NewComment>
      {
        comments.map((comment) => {
          return (
            <Comment key={comment._id} comment={comment} />
          )
        })
      }
    </Container>
  )
}

export default CommentSection