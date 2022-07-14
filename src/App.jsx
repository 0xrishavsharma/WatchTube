import { useState } from 'react'
import './App.scss'
import { Routes } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import { darkTheme, lightTheme } from './utils/Theme'

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text};
`;
const Wrapper = styled.div``;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            Video cards
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  )
}

export default App;
