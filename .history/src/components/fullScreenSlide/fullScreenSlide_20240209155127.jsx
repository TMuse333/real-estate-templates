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
    if (elementBottom <= 0 || elementTop >= windowHeight) {
      // Reset initialScrollDone flag when the element is out of the viewport
      initialScrollDone = false;
      return;
    }

    // Add a condition to check if the initial scroll condition is met
    if (!initialScrollDone && elementTop <= windowHeight * 0.35) {
      initialScrollDone = true;
      document.body.style.overflow = 'hidden';
    }

    // Check if the top of the element reaches the top of the viewport
    if (elementTop <= 0 && !scrolled) {
      setTopReached(true);
      console.log('top reached playa!');
      document.body.style.overflow = 'hidden';
      console.log('hiding overflow');
    }

    setScrollPower((prevScrollPower) => {
      const multiplier = scrollDirection === 'up' && textPosition >= 50 && textPosition <= 95 ? 2.8 : 1;
      return multiplier * (scrollDirection === 'up' ? -scrollMagnitude : scrollMagnitude);
    });

    setTextPosition((prevTextPosition) => {
      let newTextPosition = prevTextPosition + scrollPower / 20;

      // Clamp the text position between 35 and 95
      newTextPosition = Math.min(Math.max(newTextPosition, 35), 95);

      // Determine relative position
      if (newTextPosition >= 35 && newTextPosition < 95) {
        setRelativePosition('between');
        console.log('text is between 35 and 95!');
      } else if (newTextPosition >= 95) {
        setRelativePosition('atTop');
        console.log('text is at top!');
        // Set overflow back to auto when the text hits 95
        document.body.style.overflow = 'auto';
      } else {
        setRelativePosition('below');
      }

      // Gradually change video opacity when text position is above 40
      if (newTextPosition >= 40) {
        const opacityChange = 0.00015 * (newTextPosition - 40);
        setVideoOpacity((prevOpacity) => Math.max(0, prevOpacity - opacityChange));
      } else {
        // Gradually increase video opacity when text position is below 50
        const opacityChange = 0.005 * (80 - newTextPosition);
        setVideoOpacity((prevOpacity) => Math.min(0.5, prevOpacity + opacityChange));
      }

      // Check if the text position has reached 95 percent
      if (newTextPosition >= 95) {
        setScrolled(true);
        document.body.style.overflow = 'auto';
      }

      return newTextPosition;
    });
  };

  document.addEventListener('wheel', handleWheel);

  return () => {
    document.removeEventListener('wheel', handleWheel);
  };
}, [setScrollPower, scrollPower, setTextPosition, setBottomReached, textPosition]);
