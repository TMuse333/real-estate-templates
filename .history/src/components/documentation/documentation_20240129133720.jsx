import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import home1 from '../media/home1.png'
import home2 from '../media/rooftight-2.png'

const Documentation = () => {


const images = [
    {
        original:home1,
        thumbnail:
    }
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

        </div>
    )
}