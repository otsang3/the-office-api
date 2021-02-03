import React, { useEffect, useState } from 'react';
import EpisodeListItem from './EpisodeListItem';
import SeasonList from './SeasonList';

function EpisodeList(props) {

    let id;
    let { match: {params: {name: seasonNum}}} = props.id;
    seasonNum = parseInt(seasonNum);
    const [ state, setState ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    switch (seasonNum) {
        case 1:
            id = 2087;
            break;
        case 2:
            id = 2088;
            break;
        case 3:
            id = 2089;
            break;
        case 4:
            id = 2090;
            break;
        case 5:
            id = 2091;
            break;
        case 6:
            id = 2092;
            break;
        case 7:
            id = 2093;
            break;
        case 8:
            id = 2094;
            break;
        default:
            id = null;
    }

    useEffect(() => {
        fetch(`http://api.tvmaze.com/seasons/${id}/episodes`)
            .then(res => res.json())
            .then(data => {
                setState(data)
                setLoading(false);
            })
            .catch(err => {
                console.log(err)
                setLoading(false);
            })
    }, [seasonNum]);

    const renderEpisodeList = () => {
        const episodesArr = [];
        state.forEach((episode, index) => {
            episodesArr.push(
                <EpisodeListItem key={index} episode={episode}/>
            )
        })
        return episodesArr;
    }

    if (loading) {
        return(
            <div>
                
            </div>
        )
    }

    if (!state && !loading) {
        return(
            <div>
                Error
            </div>
        )
    }

    return(
        <div className="episode-list-container">
            <div>
                <SeasonList id={seasonNum}/>
            </div>
            <h3>Season {seasonNum}</h3>
            <div className="episode-list">
                {renderEpisodeList()}
            </div>  
        </div>
    )
}

export default EpisodeList;