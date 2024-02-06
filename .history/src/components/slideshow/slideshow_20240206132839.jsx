import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";
import './slideshow.css';

const Slideshow = ({ images }) => {
  // Map the images array to the format expected by react-image-gallery
  const galleryImages = images.map(image => ({
    original: image, // Original image source
    thumbnail: image, // Thumbnail image source (same as original for simplicity)
    description: "Image Description", // Add a description if needed
  }));

  return (
    <div className="slideshow-container">
      <ReactImageGallery items={galleryImages} />
    </div>
  );
};

export default Slideshow;
