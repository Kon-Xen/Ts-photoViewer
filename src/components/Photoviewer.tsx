import React from "react";  // import React (to provide access to TSX)

const PhotoViewer = ( props ) => {        
    return (           
        <div className = "centered" > 
            <h1>React Photo Viewer</h1>   
            <h2>Hello World!</h2>
            <img className = "JumboImage" src = { props.image } alt="" />
        </div>
    );
}

export default PhotoViewer ;