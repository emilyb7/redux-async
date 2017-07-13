import React from 'react';
import axios from 'axios';

import CatTile from './cat_tile.js';

const cats = ({ cats, getCat, newCat, isFetching, }) => {

  console.log({cats})

  const giphyEndpoint = 'http://api.giphy.com/v1/gifs/random?apikey=0d4c89c495714308aca988fc0ab4b494&tag=cat';

  const returnNewCat = () => {
    console.log("getting a cat")
    getCat()
    axios.get(giphyEndpoint)
      .then((res) => {
        newCat(makeCatObj(res.data.data))
      })
      .catch((err) => {
        console.log(err);
      })
  }

   const makeCatObj = data => ({
     img: data.fixed_height_downsampled_url,
   })

   const tiles = cats.map(cat => <CatTile cat={ cat } />)

   return (
     <div className="catsComponent">
       <div className="catsArray">
         { tiles }
       </div>
       <div className="buttonContainer">
         <button
           className="btn"
           onClick={ returnNewCat }
           disabled={ isFetching }
         >Get cat</button>
       </div>
     </div>
   )
}

export default cats;
