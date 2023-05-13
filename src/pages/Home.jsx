import styled from "styled-components"
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card.jsx";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(250px, 90%), 1fr ));
    gap: 1rem;
    padding: 20px 20px 0rem 20px;
`;


const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`/api/videos/${type}`);
        setVideos(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {
        videos.map(video => {
          return <Card key={video._id} video={video} />
        })
      }
    </Container>
  )
}

export default Home