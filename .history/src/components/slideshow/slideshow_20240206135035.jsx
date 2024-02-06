import React, { useEffect } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";
import './slideshow.css';

const Slideshow = ({ images }) => {
  // Map the images array to the format expected by react-image-gallery
  const galleryImages = images.map((image, index) => ({
    original: image, // Original image source
    thumbnail: image, // Thumbnail image source (same as original for simplicity)
    description: "Image Description", // Add a description if needed
    id: `image-${index + 1}`, // Unique ID for each image
  }));

  useEffect(() => {
    // Use useEffect to target the first image by ID and apply styling
    const firstImage = document.getElementById("image-1");
    if (firstImage) {
        console.log('Image detected')
      firstImage.style.objectPosition = "95% 95%";
    }
    else{
        
    }
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div className="slideshow-container">
      <ReactImageGallery items={galleryImages} />
    </div>
  );
};

export default Slideshow;
