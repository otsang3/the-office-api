import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SeasonList(props) {

    const [ state, setState ] = useState(null);

    

    const renderSeasonList = () => {
        const seasonsArr = [];

        for (let i=1; i<10; i++) {
            seasonsArr.push(
                <Link className={ props.id == i ? 'season-list-item-active' : 'season-list-item'} key={i} to={{ pathname: `/seasons/${i}` }}><p>Season {i}</p></Link>
            )
        }
        
        return seasonsArr;
    }

    if (!state === null) {
        return(
            <div>
                Loading...
            </div>
        )
    }

    return(
        <div className="season-list-container">
            {renderSeasonList()}
        </div>
    )
}

export default SeasonList;