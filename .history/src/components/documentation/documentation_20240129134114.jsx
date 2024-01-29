import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import home1 from '../../media/home1.png'
import home2 from '../../media/rooftight-2.png'
import ImageGallery from "react-image-gallery";

const Documentation = () => {


const images = [
    {
        original:home1,
        thumbnail:home1,
    },
    {
        original:home2,
        thumbnail:home2,
    },
]

    return (
        <div className="documentation-container">

<ImageGallery style={{
  height:'500px'
}}
          items={images}
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
          onSlide={handleSlide} // This callback is triggered when the slide changes
        />

        <div className="documentation-question">
            <h2>
                What documentation do I need
            </h2>
        </div>

        <div className="documents-list">

        </div>

        </div>
    )
}

export default Documentation