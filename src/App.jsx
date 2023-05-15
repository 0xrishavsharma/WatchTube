import { useState } from 'react';
import './App.scss';
import styled, { ThemeProvider } from 'styled-components';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { darkTheme, lightTheme } from './utils/Theme';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Video from './pages/Video';
import Login from './pages/Login';
import Search from './pages/Search';

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div``;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home type="random" />} />
                  <Route path='trending' element={<Home type="trending" />} />
                  <Route path='subscriptions' element={<Home type="subscriptions" />} />
                  <Route path="search" element={<Search />} />
                  <Route path="login" element={<Login />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  )
}

export default App;
