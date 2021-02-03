import React, { useEffect, useState} from 'react';

function QuotesPage() {

    const [ state, setState ] = useState(null);

    const getQuote = () => {
        fetch(('/api/quotes/random'))
            .then(res => res.json())
            .then(data => setState(data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetch(('/api/quotes/random'))
            .then(res => res.json())
            .then(data => setState(data))
            .catch(error => console.log(error))
    }, [])

    console.log(state);

    return(
        <div>
            <button onClick={getQuote}>Generate new quote</button>
        </div>
    )
}

export default QuotesPage;