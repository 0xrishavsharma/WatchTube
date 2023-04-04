import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    height: calc(100vh - 56px);
    color: ${({ theme }) => theme.text};
`
const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    height: calc(100vh - 56px);
    background-color: ${({ theme }) => theme.bgLighter};
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                Login
            </Wrapper>
        </Container>
    )
}

export default Login