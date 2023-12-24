import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card.jsx";
import { useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";
import { domainName } from "../utils/config.js";

const Container = styled.div`
    display: grid;
    gap: 1rem;
    padding: 20px 20px 0rem 20px;

    /* apply grid styles directly if more than 2 videos */
    ${(props) =>
        props.numVideos > 3 &&
        `
        grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr ));
    `}

    /* apply styles inside media query if <= 2 videos */
    @media screen and (min-width: 786px) {
        ${(props) =>
            props.numVideos <= 2 &&
            `
            grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 250px ));
        `}
    }
`;

const Home = ({ type }) => {
    const [videos, setVideos] = useState([]);
    const { currentUser } = useSelector((state) => state.user);
    const [prevType, setPrevType] = useState(type);

    useEffect(() => {
        if (type !== prevType || videos.length === 0) {
            const fetchVideos = async () => {
                try {
                    const res = await axios.get(
                        `${domainName}/api/videos/trending`
                    );
                    setVideos(res.data);
                    console.log("Response", res.data);
                } catch (err) {
                    console.log(err);
                    err?.response?.statusText === "Unauthorized" &&
                        setVideos(null);
                }
            };
            // fetchVideos();
            setPrevType(type);
        }
    }, [type]);

    const numVideos = videos !== null && videos?.length;

    return (
        <Container numVideos={numVideos}>
            {type !== "subscriptions" ? (
                videos !== null ? (
                    videos?.map((video) => {
                        return <Card key={video.id} video={video} />;
                    })
                ) : (
                    <p>Please login to access this page</p>
                )
            ) : currentUser !== null ? (
                videos?.map((video) => {
                    return <Card key={video.id} video={video} />;
                })
            ) : (
                <p>Please login to access this page</p>
            )}
        </Container>
    );
};

export default Home;
