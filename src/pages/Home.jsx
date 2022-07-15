import styled from "styled-components"
import Card from "../components/card/Card";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Home = () => {
  return (
    <Container>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </Container>
  )
}

export default Home