import axios from "axios";






const baseURL = process.env.NODE_ENV === 'production'
 ? "/api/v1/breeders" 
 : "http://localhost:3001/api/v1/breeders";


export default axios.create({
    baseURL,
});

