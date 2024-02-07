useEffect(() => {
  const handleScroll = (event) => {
    const contentElement = videoRef.current;
    const elementRect = contentElement.getBoundingClientRect();

    const windowHeight = window.innerHeight;
    const elementBottom = elementRect.bottom;
    const elementTop = contentElement.getBoundingClientRect().top;
    const offset = 200;

    const scrollPosition = window.scrollY;
    const maxScroll = 2000; // Adjust as needed
    const minBottom = -5;
    const maxBottom = 300;

    let bottomValue;

    // Check scroll direction
    if (event.deltaY > 0) {
      // Scrolling down
      if (elementTop < windowHeight - offset) {
        setIsPlaying(true);
        console.log('Video started!');
      } else {
        setIsPlaying(false);
      }

      // Calculate bottom value based on scrolling down
      bottomValue = Math.min(maxBottom, Math.max(minBottom, (scrollPosition / maxScroll) * maxBottom));

      // Log the magnitude of the scroll
      console.log('Mouse scrolled down with magnitude:', event.deltaY);
    } else {
      // Scrolling up
      bottomValue = Math.max(minBottom, (scrollPosition / maxScroll) * maxBottom);
    }

    // Apply the calculated bottom value to the text element
    textRef.current.style.bottom = `${bottomValue}%`;

    // Log when the bottom of the element touches the bottom of the viewport
    if (elementBottom <= windowHeight) {
      console.log('Bottom of the element touched the bottom of the viewport!');
      setBottomReached(true);

      // Check scroll direction
      if (event.deltaY > 0) {
        // Scrolling down, disable scrolling
        document.body.style.overflow = 'hidden';
      } else {
        // Scrolling up, enable scrolling
        document.body.style.overflow = 'auto';
      }
    }
  };

  window.addEventListener('wheel', handleScroll);

  return () => {
    window.removeEventListener('wheel', handleScroll);
  };
}, [id, setBottomReached]);
