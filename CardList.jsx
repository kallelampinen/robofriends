import React from 'react';
import Card from './card';


const CardList = ({robots}) =>{

  const CardComponent = robots.map((user, i) => {

      return(
        <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} username={robots[i].username} />
      )

  });
    return(
        <div>
  {CardComponent}
       
      </div>
    );
}

export default CardList;
