import * as axios from 'axios';
const Api_Key = '8c504f371f79f873f527f460a2521f0e';
const url = 'https://api.themoviedb.org/3/movie/';
export class MoviesApi {
    

    getMovie(id){
         return axios.default.get(url.replace('movie/', `movie/${id}`), {
            params:{
                api_key: Api_Key
            }
        })
    }

    getMovieList(pageNumber){
        return axios.default.get(url.replace('/movie', '/discover/movie'),{
            params:{
                api_key: Api_Key,
                page: pageNumber
            }
        })
    }
}