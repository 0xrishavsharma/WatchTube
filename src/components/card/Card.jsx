import React from 'react'
import styled from 'styled-components';
import Thumbnail1 from "../../assets/img/thumbnails/thumbnail1.jpg"

const Container = styled.div`
    color: ${({ theme }) => theme.text };
    width: 360px;
    margin-bottom: 30px;
    cursor: pointer;
`;

const Image = styled.img`
    width: 100%;
    height: 202px;
    background-color: #999;

`;


const Card = () => {
  return (
    <Container>
        <Image src={Thumbnail1} />
    </Container>
  )
}

export default Card