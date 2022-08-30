import React,{useState} from "react";  // import React (to provide access to TSX)

const ImageSelector = ( props ) => {

    const[photoUrl,setPhotoUrl] = useState('');

    return (
        <div className = "" >
            <h2>Hello World!</h2>
            <img className = "JumboImage" src = { photoUrl } alt="" />
        </div>
    );
}q

export default ImageSelector ;