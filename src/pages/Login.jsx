import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux"
import { loginFailure, loginStart, loginSuccess } from '../store/userSlice';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    height: calc(100vh - 56px);
    color: ${({ theme }) => theme.text};
`
const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    background-color: ${({ theme }) => theme.bgLighter};
    border: 1px solid ${({ theme }) => theme.soft};
    padding: 2.2rem 3.1rem;
    gap: 0.625rem
`
const Title = styled.h1`
    font-size:1.5rem;
    margin:0px
`
const SubTitle = styled.h2`
    font-size:1rem;
    font-weight:300;
    margin:0px;
    margin-bottom: 1.4rem;
`
const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.soft};
    border-radius:0.125rem;
    padding:0.625rem;
    background: none;
    width: 100%;
    color:${({ theme }) => theme.text};
`
const Button = styled.button`
    border: none;
    border-radius: 0.125rem;
    padding: 0.625rem 1.25rem;
    background-color: ${({ theme }) => theme.soft} ;
    color: ${({ theme }) => theme.textSoft} ;
    cursor: pointer;
`
const More = styled.div`
    display: flex;
    font-size: 0.7rem;
    gap:3.5rem;
    color: ${({ theme }) => theme.textSoft};
    margin-top: 0.8rem;
`
const Links = styled.div`
    display:flex;
    gap: 1.2rem;
`
const Link = styled.span`

`

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault()
        dispatch(loginStart());

        try {
            const res = await axios.post("/api/auth/signin", { name, password })
            console.log(res.data)
            dispatch(loginSuccess(res.data));

        } catch (err) {
            console.log(err)
            dispatch(loginFailure());
        }
    }
    const handleSignUp = async (e) => {
        e.preventDefault();
        /* dispatch(signupStart()); */
        try {
            const res = await axios.post("/api/auth/signup", {
                name, email, password
            })
            /* dispatch(loginSuccess(res.data)) */
            console.log(res.data)
        } catch (err) {
            /* dispatch(loginFailure()) */
            console.log(err)
        }
    }

    const signInWithGoogle = async () => {
        dispatch(loginStart());
        signInWithPopup(auth, provider)
            .then(async (result) => {
                await axios.post("/api/auth/google", {
                    name: result.user.displayName,
                    email: result.user.email,
                    img: result.user.photoURL
                }).then((res) => {
                    dispatch(loginSuccess(res.data))
                })
            })
            .catch(err =>
                dispatch(loginFailure())
            )
    }

    return (
        <Container>
            <Wrapper>
                <Title>Log in</Title>
                <SubTitle>to continue to WatchTube</SubTitle>
                <Input type='text' placeholder='username' onChange={(e) => setName(e.target.value)} />
                <Input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={handleLogin}>Log in</Button>
                <Title>or</Title>
                <Button onClick={signInWithGoogle}>Log in with Google</Button>
                <Title>or</Title>
                <Input type='username' placeholder='username' onChange={(e) => setName(e.target.value)} />
                <Input type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                <Input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={handleSignUp}>Sign up</Button>
            </Wrapper>
            <More>
                English(US)
                <Links>
                    <Link>Help</Link>
                    <Link>Privacy</Link>
                    <Link>Terms</Link>
                </Links>
            </More>
        </Container>
    )
}

export default Login