import React from 'react';

 const Imagen = (props) =>{

    const {largeImageURL, likes, previewURL, tags, views} = props.imagen;

    return(
      <div className="block m-auto">
        <img className="rounded block m-auto" src={previewURL} alt={tags}></img>
        <div className="bg-gray-400 mt-1 text-center p-1 rounded align-middle">
            <div className="">
              <div><span className="font-bold">Likes:&nbsp;</span>{likes}</div>
              <div><span className="font-bold">Views:&nbsp;</span>{views}</div>
              <div><a className="text-blue-600" href={largeImageURL} target="blank">Large Image</a></div>
            </div>
        </div>
      </div>
    )
  }

  export default Imagen;