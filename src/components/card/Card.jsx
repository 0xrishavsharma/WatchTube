import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    color: ${({theme}) => theme.text };
`;


const Card = () => {
  return (
    <Container>
        Card
    </Container>
  )
}

export default Card