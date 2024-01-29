import React,{useState,useEffect} from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import home1 from '../../media/home1.png'
import home2 from '../../media/rooftight-2.png'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import './documentation.css'

const Documentation = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [playing, setPlaying] = useState(true);

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


const handleSlide = (index) => {
    setCurrentIndex(index);
    setPlaying(true); // Reset playing state on slide change
  };

  const handleVideoPause = () => {
    setPlaying(false);
  };

  useEffect(() => {
    setPlaying(true); // Autoplay the first video
  }, []);

    return (
        <div className="documentation-container">

            <div className="gallery-wrapper"
          >

           

<ImageGallery style={{
  height:'500px',

}}
          items={images}
          sh
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
          onSlide={handleSlide} // This callback is triggered when the slide changes
        />
                    </div>

        {/* <div className="documentation-question">
            <h2>
                What documentation do I need?
            </h2>
            <p className="">
            The sale of your home will require a combination of documents unique to its characteristics. 
            </p>

            <p className="">
            I look forward to explaining which documents your listing requires and the purpose each one plays in the successful sale of your home.
            </p>
        </div> */}

        {/* <div className="documents-list">

            <p className="document">
            WORKING WITH THE REAL ESTATE INDUSTRY
 
            </p>

            <div className="line">

            </div>

            <p className="document">
            RESIDENTIAL INPUT FORM

 
            </p>

            <div className="line">
                
            </div>

            <p className="document">
            
SELLER DESIGNATED BROKERAGE AGREEMENT
 
            </p>

            <div className="line">
                
            </div>

            <p className="document">
            EQUIPMENT SCHEDULE
 
            </p>

            <div className="line">
                
            </div>

            <p className="document">
           
PROPERTY DISCLOSURE STATEMENT
 
            </p>

            <div className="line">
                
            </div>

            <p className="document">
            UTILITY STATEMENTS
 
            </p>

            <div className="line">
                
            </div>

            <p className="document">
           COVENANTS
 
            </p>

        </div> */}

        </div>
    )
}

export default Documentation