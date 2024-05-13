import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (tag) => {
const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag = ${tag}`; /*  API call */
const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const [gif, setGif] = useState('');
const [loading, setLoading] = useState(false);

async function fetchData(tag){
    setLoading(true);
   
    const {data} = await axios.get(tag? tagUrl: randomUrl);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource)
    /* console.log(imageSource) */
    setLoading(false);
}

useEffect(() =>{
fetchData();
}, [])


return {gif, loading, fetchData};
}

export default useGif
