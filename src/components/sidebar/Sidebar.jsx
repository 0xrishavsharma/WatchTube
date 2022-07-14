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
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import HistoryIcon from '@mui/icons-material/History';
import LiveTvIcon from '@mui/icons-material/LiveTv';

const Container = styled.div`
    flex: 1.2;
    background-color: ${({theme})=> theme.bgLighter};
    /* height: 100vh; */
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    position: sticky;
    top: 0;
    /* overflow-y: scroll;
    scroll-behavior: smooth; */
    
`;

const Wrapper = styled.div`
    padding: 1.2rem 1.6rem;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 1.5rem;
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: -0.4px;
`;

const Img = styled.img`
    height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 7.5px 0px;
`;
const Title = styled.p`
  color: #aaaaaa;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({theme}) => theme.soft};
`;
const Login = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 7.5px 0px;
  max-width: max-content;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0.2rem 0.6rem;
  max-width: max-content;
  background: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 2px;
  font-weight: 500;
`;

const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 7.5px 0px;
  cursor:pointer;
  background: transparent;
  border: none;
  color: ${({theme}) => theme.text};
`;

const themeChange = () => {
  let themeBtn = document.getElementById("themeBtn");
  let themeBtnTxt = document.getElementById("themeBtnTxt");
  if (themeBtnTxt.innerHTML == "Light Mode") {
    themeBtnTxt.innerHTML = "Dark Mode";
  } else {
    themeBtnTxt.innerHTML = "Light Mode";
  }
}

const Sidebar = ({darkMode, setDarkMode}) => {
  return (
    <Container className='sidebar'>
        <Wrapper>
            <Logo>
                <Img src={WatchTubeLogo} />
                WatchTube
              </Logo>
              <Item>
                <HomeIcon />
                  Home
              </Item>
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
              <Title>Best of WatchTube</Title>
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
              <ThemeButton onClick={()=> {setDarkMode(!darkMode); themeChange()}} id="themeBtn">
                <DarkModeOutlinedIcon id="themeIcon"/>
                  <p id="themeBtnTxt">Light Mode</p> 
              </ThemeButton>
        </Wrapper>
    </Container>
  )
}

export default Sidebar