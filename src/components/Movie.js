import React, { Component } from 'react';


const DEFAULT_PLACEHOLDER_IMAGE =  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {  
    
    const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
   
    return (   
        <div className="movie">
            <h2>{movie.Title}</h2>
            <div>
                <img width="200" id="imagen"  src={poster}/>
            </div>
            <p>({movie.Year})</p>
            <div id="texto">
                <p>Tipo :{movie.Type}</p>
                <p>ID : {movie.imdbID}</p>
                
            </div>
        </div>
        
    );
};

export default Movie;