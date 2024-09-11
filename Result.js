import React from 'react'

function Result({secretNumber,term}) {

    let result;
    if(term)
    {
        if(term >secretNumber )
        {
            result = "Too high";
        }
        else if(term<secretNumber)
        {
            result = "Too low";
        }
        else if(term === secretNumber)
        {
            result="correct!";
        }else{
            result="Invalid input";

        }
        
        
    }
    
        

        
    
  return <h2>You guessed:{result}</h2>
    
  
}

export default Result;