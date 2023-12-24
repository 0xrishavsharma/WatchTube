import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Thumbnail from "../assets/img/thumbnails/thumbnail1.jpg";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import axios from "axios";
import { domainName } from "../utils/config.js";

const Container = styled.div`
    color: ${({ theme }) => theme.text};
    /* width: ${(props) => (props.type === "small" ? "100%" : "352px")}; */
    margin-bottom: ${(props) => (props.type === "small" ? "0.8rem" : "2.5rem")};
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    flex-direction: ${(props) => props.type === "small" && "row"};
`;

const Image = styled.img`
    max-width: 100%;
    min-width: 100%;
    height: ${(props) => props.type === "small" && "94px"};
    background-color: #999;
    cursor: pointer;
    object-fit: cover;
    max-height: 160px;
`;

const ChannelImage = styled.img`
    height: 36px;
    width: 36px;
    border-radius: 50%;
    cursor: pointer;
    display: ${(props) => (props.type === "small" ? "none" : "block")};
`;

const Title = styled.div`
    cursor: pointer;
    font-size: ${(props) => (props.type === "small" ? "12px" : "16px")};
`;

const ChannelName = styled.div`
    font-size: 10px;
    color: ${({ theme }) => theme.textSoft};
    cursor: pointer;
`;

const Details = styled.div`
    display: flex;
    gap: 1rem;
`;

const VideoStats = styled.div``;
const VideoReach = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    margin-top: 0.5rem;
    font-size: 10px;
    color: ${({ theme }) => theme.textSoft};
    div {
        display: flex;
        gap: 0.1rem;

        @media screen and (max-width: 1252px) {
            flex-direction: column;
        }
    }
    p {
        margin: 0;
    }
`;

const Card = ({ type, video }) => {
    const [channel, setChannel] = useState({});

    const [videoDetails, setVideoDetails] = useState({
        channelName: video?.snippet?.channelTitle,
        videoThumbnail: video?.snippet?.thumbnails?.maxres?.url,
        channelDescription: video?.snippet?.description,
        videoViews: video?.statistics?.viewCount,
        videoTitle: video?.snippet?.title,
        videoCreatedAt: video?.snippet?.publishedAt,
    });

    useEffect(() => {
        const fetchChannel = async () => {
            try {
                const res = await axios.get(
                    `${domainName}/api/users/find/${video.userId}`
                );
                setChannel(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchChannel();
    }, [video.userId]);
    return (
        <Container type={type}>
            <Link to={`/video/${video._id}`}>
                <Image src={videoDetails?.videoThumbnail} type={type} />
            </Link>
            <Details type={type}>
                <ChannelImage src={channel.img} type={type} />
                <VideoStats type={type}>
                    <Title type={type}>{videoDetails?.videoTitle}</Title>
                    <VideoReach>
                        <ChannelName>{videoDetails?.channelName}</ChannelName>
                        <div>
                            <p>{videoDetails?.videoViews} views &nbsp;</p>
                            <p>· {format(videoDetails?.videoCreatedAt)}</p>
                        </div>
                    </VideoReach>
                </VideoStats>
            </Details>
        </Container>
    );
};

export default Card;
