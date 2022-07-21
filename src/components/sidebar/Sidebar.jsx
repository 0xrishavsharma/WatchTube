import styled from "styled-components";
import WatchTubeLogo from "../../assets/img/logo.png";
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
import HistoryIcon from '@mui/icons-material/History';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Link } from "react-router-dom";
import Home from "../../pages/Home";

const Container = styled.div`
    flex: 1.3;
    background-color: ${({theme})=> theme.bgLighter};
    height: 100vh;
    max-height: max-content;
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    position: sticky;
    top: 0;
    left: 0;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`;

const Wrapper = styled.div`
    padding: 1.2rem 0rem;
`;

const LogoWrapper = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 2.5rem;
    padding:0rem 1.6rem;
    #moreHorzIcon{
      cursor: pointer;
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
  color: ${({theme}) => theme.text};
  cursor: pointer;
  &.active{
    background-color: ${({ theme }) => theme.bgHover};
    font-weight: 400;
    &:hover{
    background-color: ${({theme}) => theme.bgHoverLight};
  }
  }
  &:hover{
    background-color: ${({theme}) => theme.bgHover};
  }
  .icon{
    font-weight: 300;
  }
`;
const Title = styled.p`
  color: #aaaaaa;
  font-weight: 600;
  padding:0rem 1.6rem;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.4px solid ${({theme}) => theme.soft};
`;
const Login = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 7.5px 0px;
  max-width: max-content;
  padding:0rem 1.6rem;
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
`;


const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 7.5px 0px;
  cursor:pointer;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  padding:0rem 1.6rem;
  width: 100%;
`;

const themeChange = () => {
  let themeBtn = document.getElementById("themeBtn");
  let themeBtnTxt = document.getElementById("themeBtnTxt");
  if (themeBtnTxt.innerHTML == "Light Mode") {
    themeBtnTxt.innerHTML = "Dark Mode";
  } if (themeBtnTxt.innerHTML == "Light Mode") {
    themeBtnTxt.innerHTML = "Dark Mode";
  } 
}

const sidebarToggle = () => {
  let sidebar = document.getElementById("sidebar");
  if (sidebar.style.position === "sticky") {
    sidebar.style.position = "absolute";
    sidebar.style.left = "-100%"
  } else{
    sidebar.style.position = "sticky";
    sidebar.style.left = "0";
  }
}



const Sidebar = ({ darkMode, setDarkMode }) => {
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
  return (
    <Container id='sidebar'>
      <Wrapper>
        <LogoWrapper>
          <DensityMediumIcon id="moreHorzIcon" onClick={sidebarToggle} />
          <Link to="/" style={{textDecoration:"none"}} >
              <Logo>
                  <Img src={WatchTubeLogo} />
                  WatchTube
              </Logo>
          </Link>
        </LogoWrapper>
        <Items>
          <Link to="/" style={{textDecoration:"none"}}>
            <Item className="active">
              <HomeIcon className="icon" />
                Home
            </Item>
          </Link>
          
          <Item>
            <ExploreOutlinedIcon />
              Explore
          </Item>
          <Item>
            <SubscriptionsOutlinedIcon />
              Subscriptions
          </Item>
          <Hr />
          <Item>
            <VideoLibraryOutlinedIcon />
              Library
          </Item>
          <Item>
            <HistoryIcon />
              History
          </Item>
          <Hr />
          <Login>
              Sign in to access all features
            <Button> <AccountCircleOutlinedIcon /> Sign in</Button>
          </Login>
          <Hr />
          <Title>BEST OF WATCHTUBE</Title>
          {/* <Item>
            <YouTubeIcon />
              WatchTube Premium
          </Item> */}
          <Item>
            <LibraryMusicOutlinedIcon />
              Music
          </Item>
          <Item>
            <SportsBasketballOutlinedIcon />
              Sports
          </Item>
          <Item>
            <SportsEsportsOutlinedIcon />
              Gaming
          </Item>
          <Item>
            <MovieCreationOutlinedIcon />
              Movies
          </Item>
          <Item>
            <ArticleOutlinedIcon />
              News
          </Item>
          <Item>
            <LiveTvIcon />
              Live
          </Item>
          <Hr />
          <Item>
            <SettingsOutlinedIcon />
              Settings
          </Item>
          <Item>
            <FlagOutlinedIcon />
              Report
          </Item>
          <Item>
            <HelpOutlineOutlinedIcon />
              Help
          </Item>
          <ThemeButton onClick={() => { setDarkMode(!darkMode); themeChange();  themeToLocalStorage()}} id="themeBtn">
              <SettingsBrightnessOutlinedIcon id="themeIcon"/>
              <p id="themeBtnTxt">Light Mode</p> 
          </ThemeButton>
        </Items>
        </Wrapper>
    </Container>
  )
}

export default Sidebar