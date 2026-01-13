import axios from "axios";
import type { Response } from "express";

const api_key = process.env.TMDB_API_KEY

const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/authentication',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${api_key}` 
    }
}

axios.request(options).then(res => console.log(res.data)).catch(error => console.error(error))