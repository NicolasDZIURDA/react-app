import React from 'react'

const Movies = ({ movies }) => {
    return (
        <div>
            <center><h1>Movies List</h1></center>
            {movies.map((movie) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">movie name : {movie.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Réalisateur : {movie.realisator}</h6>
                        <p class="card-text">{movie.year}</p>
                        <h6 class="card-title">Actors :</h6>
                        {movie.actors.map(actor => (
                            <p class="card-text">
                                {actor.firstname}
                                <br/>
                                {actor.lastname}</p>
                        ))}
                    </div>


                </div>
            ))}

        </div>
    )
};

export default Movies