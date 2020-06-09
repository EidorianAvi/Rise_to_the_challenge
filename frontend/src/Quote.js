import React from 'react'

export default function Quote(props) {
    const {quote} = props
    return(
        <div>
            <p>{quote.text}</p>
            <p>{quote.author || 'unknown'}</p>
        </div>        
    )
}