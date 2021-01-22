import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../constants/deploy.js';
import axios from 'axios';

export default function Details(props) {
    const { characterInfos, close } = props;
    const [details, setDetails] = useState(null);
    console.log('This is what details is', details);

    useEffect(() => {
        axios.get(`${BASE_URL}`)
            .then(res => { setDetails(res.data.results.map(eachDetail => {
                return eachDetail;
            })) })
            .catch(err => { debugger }) // eslint-disable-line
    }, [characterInfos])

    return (
        <div>
            <h2>Details:</h2>
            {
                details &&
                <>

                    <p>{details.name}</p>
                    <h1>Name: {details.name}</h1>
                    <p>Height: {details.height}</p>
                    <p>Mass: {details.mass}</p>
                    <p>Hair Color: {details.hair_color}</p>
                    <p>Skin Color: {details.skin_color}</p>
                    <p>Eye Color: {details.eye_color}</p>
                    <p>Birth Year: {details.birth_year}</p>
                    <p>Gender: {details.gender}</p>
                    <p>Home World: {details.homeworld}</p>
                </>
            }
            <button onClick={close}>Close</button>
        </div>
    )
}
