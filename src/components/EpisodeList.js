import React, { useEffect, useState } from 'react';
import EpisodeListItem from './EpisodeListItem';

function EpisodeList(props) {

    const { location: {state: id}} = props.id;
    const { match: {params: {name: seasonNum}}} = props.id;
    const [ state, setState ] = useState(null)

    useEffect(() => {
        fetch(`http://api.tvmaze.com/seasons/${id}/episodes`)
            .then(res => res.json())
            .then(data => setState(data))
            .catch(err => console.log(err))
    },[]);

    const renderEpisodeList = () => {
        const episodesArr = [];
        state.forEach((episode, index) => {
            episodesArr.push(
                <EpisodeListItem key={index} episode={episode}/>
            )
        })
        return episodesArr;
    }

    if (state === null) {
        return(
            <div>
                Page cannot be loaded
            </div>
        )
    }

    return(
        <div className="episode-list-container">
            <h3>Season {seasonNum}</h3>
            <div className="episode-list">
                {renderEpisodeList()}
            </div>  
        </div>
    )
}

export default EpisodeList;