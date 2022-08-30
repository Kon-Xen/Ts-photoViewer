import React from "react";  // import React (to provide access to TSX)

const PhotoViewer = ({images}) => {
    return (
        <div className="">
            <h2>Hello World!</h2>
            <div>
                {
                    images.map((url, index) => {
                        return (
                            <div key={index} style={{height: "auto", width: "30%"}}>
                                <div className="">
                                    <img src={url} alt="image"/>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default PhotoViewer;