import React from "react";  // import React (to provide access to TSX)

const PhotoViewer = ( props ) => {    
    
    return (   
        
        <div>              
            Hello World!
            <img src= {props.image} alt="" />
        </div>
    );

}

export default PhotoViewer ;