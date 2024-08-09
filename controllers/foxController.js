const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv").config();


const foxController = async (req, res) => {
    const foxUrl = `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=fox&image_type=photo`;
    
    
    try {
        const response = await axios.get(foxUrl);
        const imageUrl = response.data.hits[1].largeImageURL;

        const imageResponse = await axios({
            url: imageUrl,
            responseType: 'stream',
        });


        res.setHeader('Content-Type', imageResponse.headers['content-type']);
        res.setHeader('Content-Length', imageResponse.headers['content-length']);

        imageResponse.data.pipe(res);

    } catch (error) {
        console.error('Error fetching image:', error);
        res.status(500).send('Error fetching image');
    }
}

module.exports = foxController;