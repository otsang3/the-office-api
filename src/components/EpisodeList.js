import React, { useEffect, useState } from 'react';

function EpisodeList(props) {

    const { location: {state: id}} = props.id;
    const [ state, setState ] = useState(null)

    useEffect(() => {
        fetch(`http://api.tvmaze.com/seasons/${id}/episodes`)
            .then(res => res.json())
            .then(data => setState(data))
            .catch(err => console.log(err))
    },[]);

    console.log(state);

    const renderEpisodeList = () => {

    }

    if (state === null) {
        return(
            <div>
                Page cannot be loaded
            </div>
        )
    }

    return(
        <div>
            {renderEpisodeList()}
        </div>
    )
}

export default EpisodeList;