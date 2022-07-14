import { useState } from 'react'
import './App.scss'
import { Routes } from 'react-router-dom'
import styled from 'styled-components'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  padding: 1.2rem 1.6rem;
`;
const Wrapper = styled.div``;

function App() {
  return (
    <Container>
      <Sidebar />
      <Main>
        <Navbar />
        <Wrapper>
          Video cards
        </Wrapper>
      </Main>
    </Container>
  )

}

export default App;
