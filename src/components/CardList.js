import React from 'react';
import Card from './card';




  const CardList = ({robots}) => {


    // Manual error to display functionality of ErrorBoundry compoonent
    
    // if(true) {
    //   throw new Error ('nooo');    
    // }

    return(

      <div>
{
            robots.map((user, i) => {

              return(
                <Card 
                key= {i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email} 
                username={robots[i].username} 
                />
              

          );
          })

}
     
    </div>
  );

  }



export default CardList;
