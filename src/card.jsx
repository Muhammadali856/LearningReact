// All styles in index.css file
// Most of learning materials are there

import profilePic from './assets/cat-picture-profile.webp';

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" style={{ width: '220px', height: '150px'}}></img>
            <h2 className="card-title">Muhammadali</h2>
            <p className="card-text" >I am studying React from "Bro Code"</p>
        </div>
    );
}

export default Card;