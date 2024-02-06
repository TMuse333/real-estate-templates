import React from "react";
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

  return (
    <div className="slideshow-container">
        <h1>We make solid art too</h1>
        <p>Playas play playa dont you ever forget it. Focus on the mission</p>
      <ReactImageGallery items={galleryImages} />
    </div>
  );
};

export default Slideshow;
