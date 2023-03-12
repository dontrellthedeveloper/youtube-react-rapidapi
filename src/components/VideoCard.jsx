import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import nFormatter from '../utils/nFormatter';


const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
//   const [videoDetail, setVideoDetail] = useState(null);

//     useEffect(() => {
//     fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
//       .then((data) => setVideoDetail(data.items[0]))

//   }, [videoId]);



    // console.log(videoDetail)

//   if(!videoDetail?.snippet) return '<Loader />';

    return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0, backgroundColor: "#000"}}>
        <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
        <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
            sx={{backgroundColor: "#000",  width: { xs: '100%'}, height: 180, borderRadius: '15px' }} 
        />
        </Link>
        <CardContent sx={{ backgroundColor: "#000", height: '106px' }} color="#000">
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } sx={{}} color='#000'>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
            <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
            </Typography>
            {/* <Typography variant="subtitle2" color="gray">
            {nFormatter(videoDetail.statistics.viewCount) || demoChannelTitle} Views
            </Typography> */}
        </Link>
        </CardContent>
    </Card>
    );

}
export default VideoCard