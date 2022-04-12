import axios from "axios";


const movieBD = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params: {
        api_key: "3d5a2e0bf9498b84362b8329760b19ae",
        language: "es-ES"
    }
});


export default movieBD;