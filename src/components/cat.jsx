import React from 'react'

import queryString from 'query-string';

export default function cat(props) {

    const dimensions = queryString.parse(props.location.search)
    console.log(dimensions)
    const name = props.match.params.name

    return (
        <div>
            <p>Hi my name is {name}</p>
            <img src={`http://placekitten.com/${dimensions.width}/${dimensions.height}`} alt="our cat" />
            <img src={"http://placekitten.com/" + dimensions.width + "/" + dimensions.height} alt="our cat" />
        </div>
    )
}
