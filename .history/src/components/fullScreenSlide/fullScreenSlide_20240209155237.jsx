useEffect(() => {
  let initialScrollDone = false;

  const handleWheel = (event) => {
    const contentElement = videoRef.current;
    const elementRect = contentElement.getBoundingClientRect();

    const textElement = textRef.current;
    const textRect = textElement.getBoundingClientRect();

    const windowHeight = window.innerHeight;
    const elementTop = elementRect.top;
    const elementBottom = elementRect.bottom;

    const scrollDirection = event.deltaY > 0 ? 'down' : 'up';
    const scrollMagnitude = Math.abs(event.deltaY);

    // Check if the element is not in the viewport
  }

  document.addEventListener('wheel', handleWheel);

  return () => {
    document.removeEventListener('wheel', handleWheel);
  };
}, [setScrollPower, scrollPower, setTextPosition, setBottomReached, textPosition]);
