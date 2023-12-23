import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUp from "@mui/icons-material/ThumbUp";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbDown from "@mui/icons-material/ThumbDown";
import ReplyIcon from "@mui/icons-material/Reply";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CommentSection from "../components/CommentSection";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
	fetchStart,
	fetchSuccess,
	fetchFailure,
	like,
	dislike,
} from "./../store/videoSlice.js";
import { format } from "timeago.js";
import { subscribe } from "../store/userSlice";
import { channelFetchSuccess } from "../store/channelSlice";
import Card from "../components/Card";
import Recommendation from "../components/Recommendation";
import { domainName } from "../utils/config.js";

const Container = styled.div`
	display: flex;
	padding: 20px 20px 0px 20px;
	gap: 20px;
	color: ${({ theme }) => theme.text};
`;
const Content = styled.div`
	flex: 5;
`;

const VideoWrapper = styled.div``;

const VideoFrame = styled.video`
	max-height: 720px;
	width: 100%;
	object-fit: cover;
`;

const Title = styled.div`
	font-size: 18px;
	margin-top: 1rem;
`;
const Details = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 0.3rem;
	margin-bottom: 0.5rem;
`;
const Info = styled.div`
	display: flex;
	gap: 0.4rem;
	color: ${({ theme }) => theme.textSoft};
	font-size: 14px;

	@media screen and (max-width: 152px) {
		flex-direction: column;
	}
`;
const InteractionButtons = styled.div`
	display: flex;
	gap: 1.3rem;
`;
const InteractionBtnSingle = styled.div`
	display: flex;
	align-items: center;
	font-size: 14px;
	gap: 0.4rem;

	.icon {
		font-size: 22px;
		cursor: ${({ currentUser }) => (currentUser ? "pointer" : "not-allowed")};
	}

	.shareIcon {
		transform: rotateY(180deg);
		font-size: 22px;
		z-index: 1;
	}
`;
const Hr = styled.hr`
	border: 0.5px solid ${({ theme }) => theme.soft};
`;

const ChannelContainer = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: space-between;
	margin-top: 1rem;
	margin-bottom: 1rem;
`;
const ChannelWrapper = styled.div`
	display: flex;
	gap: 1rem;
	width: 100%;

	.channelDetails {
		margin: 0rem;
	}
`;
const Logo = styled.img`
	height: 48px;
	width: 48px;
	border-radius: 50%;
`;
const ChannelMoreDetails = styled.div`
	margin-left: 64px;
	font-size: 14px;
`;
const ShowMoreBtn = styled.div`
	font-size: 12px;
	color: ${({ theme }) => theme.textSoft};
	margin-top: 0.6rem;
	margin-bottom: 1rem;
	cursor: pointer;
`;
const ChannelDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const ChannelName = styled.div`
	cursor: pointer;
	margin-bottom: 0.5rem;
`;
const ChannelSubscribers = styled.div`
	color: ${({ theme }) => theme.textSoft};
	font-size: 12px;
`;
const SubscribeBtn = styled.div`
	padding: 0.7rem 1rem;
	background-color: ${({ isSubscribed }) =>
		isSubscribed ? "gray" : "#d30202"};
	font-size: 14px;
	color: white;
	cursor: ${({ currentUser }) => (currentUser ? "pointer" : "not-allowed")};
	border-radius: 2px;
`;
const Description = styled.div`
	margin-bottom: 1rem;
`;

const Video = () => {
	const { currentUser } = useSelector((state) => state.user);
	const { currentVideo } = useSelector((state) => state.video);
	const { currentChannel } = useSelector((state) => state.channel);
	const dispatch = useDispatch();

	const videoId = useLocation().pathname.split("/")[2];

	// Fetch video and channel data from database
	useEffect(() => {
		const fetchData = async () => {
			try {
				const videoRes = await axios.get(
					`${domainName}/api/videos/find/${videoId}`
				);
				const channelRes = await axios.get(
					`${domainName}/api/users/find/${videoRes.data.userId}`
				);
				dispatch(fetchSuccess(videoRes.data));
				dispatch(channelFetchSuccess(channelRes.data));
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, [videoId, dispatch]);

	const handleLike = async () => {
		if (currentUser) {
			await axios.put(`${domainName}/api/users/like/${currentVideo._id}`);
			dispatch(like(currentUser?._id));
		} else {
			alert("Please login to like a video");
		}
	};
	const handleDislike = async () => {
		if (currentUser) {
			await axios.put(`${domainName}/api/users/dislike/${currentVideo._id}`);
			dispatch(dislike(currentUser?._id));
		} else {
			alert("Please login to dislike a video");
		}
	};

	const subscribeBtnHandler = async () => {
		try {
			currentUser?.subscribedChannels.includes(currentChannel._id)
				? await axios.put(
					`${domainName}/api/users/unsubscribe/${currentChannel._id}`
				)
				: await axios.put(
					`${domainName}/api/users/subscribe/${currentChannel._id}`
				);
			dispatch(subscribe(currentChannel._id));

			const videoRes = await axios.get(
				`${domainName}/api/videos/find/${videoId}`
			);
			const channelRes = await axios.get(
				`${domainName}/api/users/find/${videoRes.data.userId}`
			);
			dispatch(channelFetchSuccess(channelRes.data));
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<Container>
			<Content>
				<VideoWrapper>
					<VideoFrame
						src={
							currentVideo?.videoUrl
								? currentVideo?.videoUrl
								: "https://www.youtube.com/watch?v=DBXH9jJRaDk"
						}
						controls
					/>
				</VideoWrapper>
				<Title> {currentVideo?.videoTitle}</Title>
				<Details>
					<Info>
						<p>{currentVideo?.views} views</p>
						<p> · </p>
						<p>{format(currentVideo?.createdAt)}</p>
					</Info>
					<InteractionButtons>
						<InteractionBtnSingle currentUser={currentUser}>
							{currentUser &&
								currentVideo?.likes?.includes(currentUser?._id) ? (
								<ThumbUp onClick={handleLike} className="icon" />
							) : (
								<ThumbUpOutlinedIcon onClick={handleLike} className="icon" />
							)}
							LIKE {currentVideo?.likes?.length}
						</InteractionBtnSingle>
						<InteractionBtnSingle currentUser={currentUser}>
							{currentVideo?.dislikes?.includes(currentUser?._id) ? (
								<ThumbDown onClick={handleDislike} />
							) : (
								<ThumbDownAltOutlinedIcon
									onClick={handleDislike}
									className="icon"
								/>
							)}
							DISLIKE {currentVideo?.dislikes?.length}
						</InteractionBtnSingle>
						<InteractionBtnSingle currentUser={currentUser}>
							{" "}
							<ReplyIcon className="icon shareIcon" /> SHARE{" "}
						</InteractionBtnSingle>
						<InteractionBtnSingle currentUser={currentUser}>
							{" "}
							<ContentCutIcon className="icon" /> CLIP{" "}
						</InteractionBtnSingle>
						<InteractionBtnSingle currentUser={currentUser}>
							{" "}
							<LibraryAddIcon className="icon" /> SAVE{" "}
						</InteractionBtnSingle>
						<InteractionBtnSingle currentUser={currentUser}>
							{" "}
							<MoreHorizIcon className="icon" />{" "}
						</InteractionBtnSingle>
					</InteractionButtons>
				</Details>
				<Hr />
				<ChannelContainer>
					<ChannelWrapper>
						<Logo src={currentChannel?.imgUrl}></Logo>
						<ChannelDetails>
							<ChannelName className="channelDetails">
								{currentChannel?.name}
							</ChannelName>
							<ChannelSubscribers className="channelDetails">
								{currentChannel?.subscribers === 0
									? "0"
									: currentChannel?.subscribers}{" "}
								subscribers
							</ChannelSubscribers>
						</ChannelDetails>
					</ChannelWrapper>
					<SubscribeBtn
						isSubscribed={currentUser?.subscribedChannels?.includes(
							currentChannel?._id
						)}
						onClick={subscribeBtnHandler}
						currentUser={currentUser}>
						{currentUser?.subscribedChannels?.includes(currentChannel?._id)
							? "SUBSCRIBED"
							: "SUBSCRIBE"}
					</SubscribeBtn>
				</ChannelContainer>
				<ChannelMoreDetails>
					<Description className="channelDetails">
						{currentVideo?.description}
					</Description>
					{/* <ShowMoreBtn className="channelDetails">SHOW MORE</ShowMoreBtn> */}
				</ChannelMoreDetails>
				<Hr />
				<CommentSection videoId={currentVideo?._id} />
			</Content>
			<Recommendation tags={currentVideo?.tags} />
		</Container>
	);
};

export default Video;
