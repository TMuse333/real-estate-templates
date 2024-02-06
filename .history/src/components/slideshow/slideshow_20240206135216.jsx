import React, { useEffect } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";
import './slideshow.css';

const CustomImage = ({ item, onImageLoad }) => {
  // Use a callback to notify the parent component when the image has loaded
  const handleImageLoad = () => {
    if (onImageLoad) {
      onImageLoad(item.original);
    }
  };

  return (
    <img
      src={item.original}
      alt={item.description}
      onLoad={handleImageLoad}
      style={{ objectFit: 'cover', width: '90vw', maxHeight: '50vh' }}
    />
  );
};

const Slideshow = ({ images }) => {
  const galleryImages = images.map((image, index) => ({
    original: image,
    thumbnail: image,
    description: "Image Description",
    id: `image-${index + 1}`,
  }));

  useEffect(() => {
    const firstImage = document.getElementById("image-1");
    if (firstImage) {
      firstImage.style.objectPosition = "75% 75%";
    }
  }, []);

  return (
    <div className="slideshow-container">
      <ReactImageGallery
        items={galleryImages}
        renderItem={(item, onImageLoad) => (
          <CustomImage item={item} onImageLoad={onImageLoad} />
        )}
      />
    </div>
  );
};

export default Slideshow;
