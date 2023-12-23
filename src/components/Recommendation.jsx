import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { domainName } from "../utils/config";

const Container = styled.div`
	flex: 2;
`;

const Recommendation = ({ tags }) => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const fetchVideos = async () => {
			try {
				const res = await axios.get(
					`${domainName}/api/videos/tags?tags=${tags}`
				); //using express query string to send tags to the server
				setVideos(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchVideos();
	}, [tags]);
	return (
		<Container>
			{videos.map((video) => {
				return <Card type="small" key={video._id} video={video} />;
			})}
		</Container>
	);
};

export default Recommendation;
