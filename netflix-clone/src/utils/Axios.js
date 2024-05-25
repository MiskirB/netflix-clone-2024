import Axios from 'axios';

const instance = Axios.create({
    baseURL:"http://api.themoviedb.org/3",
});

export default instance;