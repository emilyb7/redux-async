import React from 'react';

const cats = ({ cats, getCat, }) => {

  const giphyEndpoint = 'http://api.giphy.com/v1/gifs/random?apikey=0d4c89c495714308aca988fc0ab4b494&tag=cat';

  const returnNewCat = () => {
    getCat()
  }

   return (
     <div className="catsComponent">
       <div className="catsArray"></div>
       <div className="buttonContainer">
         <button className="btn" onClick={ getCat }>Get cat</button>
       </div>
     </div>
   )
}

export default cats;
