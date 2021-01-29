import React from 'react';

function EpisodeListItem(props) {

    const episode = props.episode;

    const removeTags = (str) => {

        return str.replace('<p>', '').replace('</p>', '');

    }

    return(
        <div>
            <p>Episode number: {episode.number}</p>
            <p>Summary: {removeTags(episode.summary)}</p>
        </div>
    )
}

export default EpisodeListItem;