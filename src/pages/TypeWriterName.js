import React, { useEffect, useState } from 'react';

const TypeWriterName = () => {
  const fullText = 'Abdullah Bashir';
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 70 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayText(fullText.substring(0, index - 1));
        setIndex(index - 1);

        if (index === 0) {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-500">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypeWriterName;
