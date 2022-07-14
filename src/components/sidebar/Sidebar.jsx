import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    background-color: #202020;
    height: 100vh;
    color: white;
`;

const Wrapper = styled.div`
    padding: 1.2rem 1.6rem;
`;

const Sidebar = () => {
  return (
    <Container className='sidebar'>
        <Wrapper>
            Sidebar
        </Wrapper>
    </Container>
  )
}

export default Sidebar