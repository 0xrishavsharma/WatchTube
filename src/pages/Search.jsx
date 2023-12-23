import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
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

const Search = () => {
	const [videos, setVideos] = useState([]);
	const query = useLocation().search;

	useEffect(() => {
		const fetchVideos = async () => {
			try {
				const res = await axios.get(`${domainName}/api/videos/search/${query}`);
				setVideos(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchVideos();
	}, [query]);

	const numVideos = videos.length;

	return (
		<Container numVideos={numVideos}>
			{videos.map((video) => {
				return <Card key={video._id} video={video} />;
			})}
		</Container>
	);
};

export default Search;
