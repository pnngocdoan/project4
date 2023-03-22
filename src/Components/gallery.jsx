import React from "react";

const Gallery = ({images}) => {
    return (
        <div>
            <h2> Past Discoveries </h2>
            <div className="image-container">
                {images && images.length > 0 ? (
                    images.map((pic, index) => (
                            <img
                            key={index}
                            className="gallery-screenshot"
                            src={pic}
                            alt="Undefined screenshot from query"
                            width="50"
                            heught="50"
                            />
                    ))
                ) : (
                <div>
                    <h4>You haven't discovered yet!</h4>
                </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;
