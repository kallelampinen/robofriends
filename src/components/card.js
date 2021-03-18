import React from 'react';



const Card = ({name, email, username, id}) =>{
    

    return(
       
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='' src={`https://robohash.org/${id}?size=200x200`}></img>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{username}</p>
        </div>
    </div>
)};


export default Card;