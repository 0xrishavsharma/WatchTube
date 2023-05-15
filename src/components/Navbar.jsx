import styled from "styled-components";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UploadPopup from "./UploadPopup";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/userSlice";
import axios from "axios";
import Cookies from "js-cookie";

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0rem 1.6rem;
  position:relative;
  height: 100%;
  @media screen and (max-width: 778px) {
    
  }
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.3rem 0.8rem;
  border: 1px solid ${({ theme }) => theme.soft};
  position: absolute;
  left: 0;
  right: 0;
  max-width: max-content;
  margin: auto;

  // Search Icon
  .searchIcon{
    font-size: 16px;
    color: ${({ theme }) => theme.text};
    font-size: 20px;
    cursor: ${({ disabled }) => disabled ? 'inherit' : 'pointer'};

    @media screen and (max-width: 778px) {
      font-size: 16px;
    }
    @media screen and (max-width:576px) {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 778px) {
    margin-left: 20px;
  }
  @media screen and (max-width:576px) {
    margin-left: 20px;
  }
`;
const Input = styled.input`
  outline: none;
  border: none;
  background: transparent;
  height: 22px;
  width: 300px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};

  @media screen and (max-width:576px) {
    height: 20px;
    width: 180px;
  }
  @media screen and (max-width:458px) {
    height: 18px;
    width: 140px;
  }
  @media screen and (max-width:398px) {
    width: 100px;
  }
  @media screen and (max-width:340px) {
    height: 16px;
    width: 80px;
  }
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0.3rem 0.6rem;
  max-width: max-content;
  max-height: min-content;
  background: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 2px;
  font-weight: 500;
  cursor: pointer;

  .signInIcon{
    @media screen and (max-width:458px) {
      font-size: 16px;
      
    }
    @media screen and (max-width:340px) {
      font-size: 14px;
    }
  }

  @media screen and (max-width:576px) {
    font-size: 12px;
  }
  @media screen and (max-width:458px) {
    padding: 0.3rem 0.3rem;
  }
  @media screen and (max-width:340px) {
    padding: 0.2rem 0.2rem;
    font-size: 11px;
    gap: 6px;
  }
`;

const User = styled.div`
display: flex;
gap: 0.8rem;
align-items: center;
font-weight: 500;
color: ${({ theme }) => theme.text};

 & > VideoCallOutlinedIcon{
  cursor: pointer;
 }
`
const AvatarContainer = styled.div`
  position: relative;
`
const Avatar = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: #999;
  cursor: pointer;
`

const Options = styled.div`
  position: absolute;
  /* top: 100%; */
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 4px;
  padding: 0.5rem;
  width: max-content;
  z-index: 1;
  & > p{
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
  }
  &:hover{
      background-color: ${({ theme }) => theme.bgLight};
    }
`

const Navbar = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchBtnDisabled, setSearchBtnDisabled] = useState(true);
  const [optionsOpen, setOptionsOpen] = useState(false);


  const navigate = useNavigate()
  const dispatch = useDispatch();

  const { currentUser } = useSelector(state => state.user);

  useEffect(() => {
    if (query.length > 0) {
      setSearchBtnDisabled(false)
    } else {
      setSearchBtnDisabled(true)
    }
  })

  const optionsHandler = () => {
    setOptionsOpen(!optionsOpen)
  }

  const handleLogout = async () => {
    try {
      const res = await axios.post("/api/auth/signout")
      console.log("res", res)
    } catch (err) {
      console.log(err)
    }
    dispatch(logout());
    setOptionsOpen(false)
    navigate("/login")
  }
  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <Input placeholder="Search" onChange={e => setQuery(e.target.value)} />
            <SearchOutlinedIcon disabled={searchBtnDisabled} className="searchIcon" onClick={() => navigate(`/search?q=${query}`)} />
          </Search>
          {
            currentUser ?
              <User>
                <VideoCallOutlinedIcon style={{ cursor: "pointer" }} onClick={() => setIsPopupOpen(!isPopupOpen)} />
                <AvatarContainer>
                  <Avatar src={currentUser.img} onClick={optionsHandler} />
                  {
                    optionsOpen &&
                    <Options>
                      <Button onClick={handleLogout}>
                        <LogoutOutlinedIcon />
                        Logout
                      </Button>
                    </Options>
                  }

                </AvatarContainer>
                {
                  currentUser.name
                }
              </User>
              :
              <Link to="/login">
                <Button> <AccountCircleOutlinedIcon className="signInIcon" /> Sign in</Button>
              </Link>
          }
        </Wrapper >
      </Container >
      {
        isPopupOpen && <UploadPopup setIsPopupOpen={setIsPopupOpen} />
      }
    </>
  )
}

export default Navbar