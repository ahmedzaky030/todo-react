import  React, { useEffect, useState } from 'react';
import { MoviesApi } from './MoviesApi'

const  Movies = () =>{
    const [movieId, updateMovieId] = useState(550);
    const [pageNumber, UpdatePageNumber] = useState(1);
    const [myMovie, updateMovie] = useState({
        id: '', 
        genres:
            [{id:'', name:''}],
        title: '',
        vote_average: 0,
        poster_path:''
    })

    const [moviesList , updateMoviesList] = useState([{
        id:'',
        poster_path:'',
        genre_ids: [0],
        original_title:'',
        vote_average:0
    }])
    const api = new MoviesApi();
    useEffect(() => {
        api.getMovie(movieId).then(value => {
        
            console.log(value.data)
            updateMovie(value.data)
        });
    }, [movieId])

    useEffect(() => {
        
        api.getMovieList(pageNumber).then(value => {
            debugger;
            console.log('movies list',value.data.results)
            updateMoviesList(value.data.results)
        });
    }, [pageNumber])
    
    function changeMovie(){
        updateMovieId(movieId + 1);
    }

    function next(){
        UpdatePageNumber(pageNumber + 1);
    }

    function back(){
        UpdatePageNumber(pageNumber - 1);
    }
    
    
    return (
        <div>
            <h1>Top 10 Movies</h1>
            <button onClick={changeMovie}>Change Movie</button>
            <button onClick={next}>Next</button>
            <button onClick={back}>Back</button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Vote Average</th>
                        {/* <th>Genre</th> */}
                        <th>Poster</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{myMovie?.id}</td>
                        <td>{myMovie?.title}</td>
                        <td>{myMovie?.vote_average}</td>
                        <td>{myMovie?.genres?.map(v => v.name).join(',')}</td>
                        <td><img style={{width:'100px'} , {height:'100px'}} src={`https://image.tmdb.org/t/p/w500/${myMovie.poster_path}`} /></td>
                    </tr>
                    {
                        moviesList  && moviesList.map(mov => (
                            <tr>
                                <td>{mov.id}</td>
                                <td>{mov.original_title}</td>
                                <td>{mov.vote_average}</td>
                                <td><img style={{width:'100px'} , {height:'100px'}} src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`} /></td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
    );
}

export default Movies;