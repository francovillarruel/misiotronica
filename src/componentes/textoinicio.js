import React, { useEffect, useRef } from "react";

function TypingText({ text }) {
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      let currentText = textRef.current.innerHTML;
      let currentLength = currentText.length;

      if (currentLength === text.length) {
        clearInterval(interval);
      } else {
        let nextChar = text[currentLength];
        if (nextChar === " ") {
          nextChar += text[currentLength + 1];
          currentLength++;
        }
        currentText += nextChar;
        textRef.current.innerHTML = currentText;
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return <h1 ref={textRef}aria-hidden="true"></h1>;
}

export default TypingText;
