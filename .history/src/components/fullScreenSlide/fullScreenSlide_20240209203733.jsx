useEffect(() => {
  const handleWheel = (event) => {
    const contentElement = videoRef.current;
    const elementRect = contentElement.getBoundingClientRect();

    const textElement = textRef.current;
    const textRect = textElement.getBoundingClientRect();

    const windowHeight = window.innerHeight;
    const elementTop = elementRect.top;

    // Check if 40 percent of the top of the element is in view
    const threshold = elementRect.height * 0.4;
    const is40PercentInView = elementTop < threshold;

    const scrollDirection = event.deltaY > 0 ? 'down' : 'up';
    const scrollMagnitude = Math.abs(event.deltaY);

    // Check if at the top and scrolling up, set scroll power to 0
    if (textAtTop && scrollDirection === 'up') {
      setScrollPower(0);
      document.body.style.overflow = 'auto'; // Set overflow to auto when at the top and scrolling up
    } else {
      // Only apply scroll power if 40 percent is in view
      setScrollPower(is40PercentInView ? (scrollDirection === 'up' ? -scrollMagnitude : scrollMagnitude) : 0);
    }

    setTextPosition((prevTextPosition) => {
      // Calculate the new text position without clamping
      let newTextPosition = prevTextPosition + scrollPower / 20;

      // Check if the new text position is within the valid range
      if (newTextPosition >= 40 && newTextPosition <= 90) {
        // If within range, update the text position
        return newTextPosition;
      } else {
        // If outside the range, clamp the value
        return Math.min(Math.max(newTextPosition, 40), 90);
      }
    });

    // Check if the top of the element reaches the top of the viewport
    if (elementTop <= 0) {
      setTopReached(true);
      if (textPosition < 95) {
        document.body.style.overflow = 'hidden';
      }
    }

    // Check if the text position hits 90 and reset overflow to auto
    if (textPosition >= 90) {
      document.body.style.overflow = 'auto';
    }
  };

  document.addEventListener('wheel', handleWheel);

  return () => {
    document.removeEventListener('wheel', handleWheel);
  };
}, [setScrollPower, scrollPower, setTextPosition, setBottomReached, textPosition, textAtTop, setTextAtTop]);
