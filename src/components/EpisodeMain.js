import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function EpisodeMain() {

    const [ state, setState ] = useState(null);

    useEffect(() => {
        fetch('http://api.tvmaze.com/shows/526/seasons')
            .then(res => res.json())
            .then(data => setState(data))
    }, []);

    const renderSeasonList = () => {
        const seasonsArr = [];
        state.forEach((season, index) => {
            seasonsArr.push(
                <Link key={index} to={{ pathname: `/seasons/${season.id}` }}>Season {season.number}</Link>
            )
        })
        return seasonsArr;
    }

    if (state === null) {
        return(
            <div>
                Loading...
            </div>
        )
    }

    return(
        <div>
            {renderSeasonList()}
        </div>
    )
}

export default EpisodeMain;