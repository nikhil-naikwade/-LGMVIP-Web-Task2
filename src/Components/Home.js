import React from 'react';
import './Home.css';

export default function Home({ getData }) {
    return (
        <section className="home">
            <div className="content">
                <p>Click the button below to get the users details. <br/><button onClick={getData}>Get Users</button> </p>
                {/* <br/><br/>to get the users details.<br/> */}
            </div>
        </section>
    )
}
