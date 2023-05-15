import styled from "styled-components";
import WatchTubeLogo from "../assets/img/logo.png";
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import HistoryIcon from '@mui/icons-material/History';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logout } from "../store/userSlice";

const Container = styled.div`
    flex: 1.2;
    background-color: ${({ theme }) => theme.bgLighter};
    height: 100vh;
    max-height: max-content;
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    position: sticky;
    top: 0%;
    left: 0%;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

    @media screen and (max-width: 1066px) {
      flex: 0.38;
    }
    @media screen and (max-width: 1004px) {
      flex: 0.4;
    }
    @media screen and (max-width: 908px) {
      flex: 0.42;
    }
    @media screen and (max-width: 824px) {
      flex: 0.5;
    }
    @media screen and (max-width: 786px) {
      flex: 0.6;
    }
    @media screen and (max-width: 596px) {
      flex: 0.65;
    }
    @media screen and (max-width: 560px) {
      flex: 0.7;
    }
    @media screen and (max-width: 535px) {
      flex: 0.8;
    }
    @media screen and (max-width: 478px) {
      flex: 0.9;
    }
    @media screen and (max-width: 450px) {
      flex: 1;
    }
    @media screen and (max-width: 418px) {
      flex: 1.15;
    }
`;

const Wrapper = styled.div`
    padding: 1.2rem 0rem;
    @media screen and (max-width:458px) {
      padding: 0.8rem 0rem;
      margin-top: 0.8rem;
  }
`;

const LogoWrapper = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 2.5rem;
    padding:0rem 1.6rem;
    #moreHorzIcon{
      cursor: pointer;

      @media screen and (max-width: 1066px) {
        display: none;
        padding: 0rem 0.8rem;
      }
    }
    @media screen and (max-width: 1066px) {
        padding: 0rem 0.8rem;
      }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: -0.4px;
    cursor: pointer;

    p{
      margin: 0px;
      padding: 0px;

      @media screen and (max-width: 1276px){
        display: none;
      }
    }
    
`;

const Img = styled.img`
    height: 25px;
`;

const Items = styled.div`

`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 7.5px 1.6rem;
  font-weight: 300;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  p{
    margin: 0;
    padding: 0;

    @media screen and (max-width: 1066px) {
      font-size: 12px;
      display: none;
      padding: 7.5px 0.8rem;
    }
  }
  &.active{
    background-color: ${({ theme }) => theme.bgHover};
    font-weight: 400;
    &:hover{
    background-color: ${({ theme }) => theme.bgHoverLight};
  }
  }
  &:hover{
    background-color: ${({ theme }) => theme.bgHover};
  }
  .icon{
    font-weight: 300;
  }

  @media screen and (max-width: 1066px) {
    font-size: 12px;
    padding: 7.5px 0.8rem;
  }
`;
const Title = styled.p`
  color: #aaaaaa;
  font-weight: 500;
  padding:0rem 1.6rem;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 1066px) {
      display: none;
    }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.4px solid ${({ theme }) => theme.soft};
`;
const Login = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  /* padding: 7.5px 0px; */
  max-width: max-content;
  padding:0rem 1.6rem;
  p{
    margin: 0;
    padding: 0;
    @media screen and (max-width: 1066px) {
      display: none;
    }
  }

  @media screen and (max-width: 1066px) {
    font-size: 12px;
    display: block;
    min-width: max-content;
    padding:0rem 0.8rem;
  }
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0.3rem 0.6rem;
  max-width: max-content;
  background: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 2px;
  font-weight: 500;
  cursor: pointer;

  @media screen and (max-width: 1066px) {
    padding: 0.1rem 0.2rem;
    gap: 0;
    display: block;
    border: none;
    min-width: max-content;
  }
  p{
    margin: 0;
    padding: 0;

    @media screen and (max-width: 1066px) {
      font-size: 12px;
      display: none;
    }
  }
`;

const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 7.5px 1.6rem;
  /* max-width: max-content; */
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  width: 100%;
  cursor:pointer;
&.logoutIcon{
  display: none;
}
  &:hover{
    background-color: ${({ theme }) => theme.bgHover};
  }
  p{
    margin: 0;
    padding: 0;
    @media screen and (max-width: 1066px) {
      font-size: 12px;
      display: none;
    }
  }

  @media screen and (max-width: 1066px) {
    font-size: 12px;
    padding:0rem 0.8rem;
    margin-top: 5px;
  }
`;

const themeChange = () => {
  let themeBtnTxt = document.getElementById("themeBtnTxt");
  if (themeBtnTxt.innerHTML == "Light Mode") {
    themeBtnTxt.innerHTML = "Dark Mode";
  } if (themeBtnTxt.innerHTML == "Light Mode") {
    themeBtnTxt.innerHTML = "Dark Mode";
  }
}


const Sidebar = ({ darkMode, setDarkMode }) => {
  const currentUser = useSelector((state) => state.user.currentUser)
  const [activeTab, setActiveTab] = useState("home");

  const dispatch = useDispatch();

  const themeToLocalStorage = () => {
    let themeBtnTxt = document.getElementById("themeBtnTxt");
    if (themeBtnTxt.innerHTML == "Dark Mode") {
      localStorage.setItem("theme", "light");
      console.log("Dark mode activated")
    }
    if (themeBtnTxt.innerHTML == "Light Mode") {
      localStorage.setItem("theme", "Dark");
      console.log("Light mode activated")
    }
  }

  // const sidebarToggle = async () => {
  //   let sidebar = document.getElementById("sidebar");
  //   console.log("Got the element Sidebar", sidebar)
  //     if (sidebar.style.position === "sticky") {
  //       sidebar.style.position = "absolute";
  //       sidebar.style.left = "-100%";
  //     } if(sidebar.style.position = "absolute"){
  //       sidebar.style.position = "sticky";
  //       sidebar.style.left = "0%";
  //     }
  //   }

  const changeCurrentTab = (nav) => {
    setActiveTab(nav);
  };

  const handleLogout = async () => {
    try {
      const res = await axios.post("/api/auth/signout")
      removeCookie("access_token")
      console.log("res", res)
    } catch (err) {
      console.log(err)
    }
    dispatch(logout());
    setOptionsOpen(false)
    navigate("/login")
  }


  return (
    <Container id='sidebar'>
      <Wrapper>
        <LogoWrapper>
          {/* <DensityMediumIcon id="moreHorzIcon" /> */}
          <Link to="/" style={{ textDecoration: "none" }} >
            <Logo>
              <Img src={WatchTubeLogo} />
              <p>WatchTube</p>
            </Logo>
          </Link>
        </LogoWrapper>
        <Items>
          <Link to="/" onClick={() => changeCurrentTab("home")}>
            <Item className={activeTab === 'home' ? "active" : ''}>
              <HomeIcon className="icon" />
              <p>Home</p>
            </Item>
          </Link>
          <Link to="/trending" onClick={() => changeCurrentTab("trending")}>
            <Item className={activeTab === 'trending' ? "active" : ''}>
              <ExploreOutlinedIcon />
              <p>Explore</p>
            </Item>
          </Link>
          {
            currentUser &&
            <Link to="/subscriptions" onClick={() => changeCurrentTab("subscriptions")}>
              <Item className={activeTab === 'subscriptions' ? "active" : ''}>
                <SubscriptionsOutlinedIcon />
                <p>Subscriptions</p>
              </Item>
            </Link>
          }

          <Hr />
          <Link to="/">
            <Item>
              <VideoLibraryOutlinedIcon />
              <p>Library</p>
            </Item>
          </Link>
          <Item>
            <HistoryIcon />
            <p>History</p>
          </Item>
          <Hr />
          {
            !currentUser &&
            <>
              <Login>
                <p>Sign in to access all features</p>
                <Link to="/login">
                  <Button> <AccountCircleOutlinedIcon /> <p>Sign in</p> </Button>
                </Link>
              </Login>
              <Hr />
            </>
          }
          <Title>Best of WatchTube</Title>
          {/* <Item>
            <YouTubeIcon />
              WatchTube Premium
          </Item> */}
          <Item>
            <LibraryMusicOutlinedIcon />
            <p>Music</p>
          </Item>
          <Item>
            <SportsBasketballOutlinedIcon />
            <p>Sports</p>
          </Item>
          <Item>
            <SportsEsportsOutlinedIcon />
            <p>Gaming</p>
          </Item>
          <Item>
            <MovieCreationOutlinedIcon />
            <p>Movies</p>
          </Item>
          <Item>
            <LiveTvIcon />
            <p>Live</p>
          </Item>
          <Hr />
          {/* <Item>
            <SettingsOutlinedIcon />
            <p>Settings</p>
          </Item>
          <Item>
            <FlagOutlinedIcon />
            <p>Report</p>
          </Item>
          <Item>
            <HelpOutlineOutlinedIcon />
            <p>Help</p>
          </Item> */}
          <Title>Settings</Title>
          <ThemeButton onClick={() => { setDarkMode(!darkMode); themeChange(); themeToLocalStorage() }} id="themeBtn">
            <SettingsBrightnessOutlinedIcon id="themeIcon" />
            <p id="themeBtnTxt">Light Mode</p>
          </ThemeButton>
          {
            currentUser &&
            <ThemeButton onClick={handleLogout}>
              <LogoutOutlinedIcon className="logoutIcon" />
              Logout
            </ThemeButton>

          }
        </Items>
      </Wrapper>
    </Container >
  )
}

export default Sidebar;