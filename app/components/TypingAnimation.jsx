'use client';

import { useEffect, useRef } from 'react';
import { ReactTyped } from 'react-typed';

export default function TypingAnimation({ strings, typeSpeed = 70, backSpeed = 50, loop = true, className = '' }) {
  const typedRef = useRef(null);

  return (
    <div className={`font-mono ${className}`}>
      <ReactTyped
        strings={strings}
        typeSpeed={typeSpeed}
        backSpeed={backSpeed}
        loop={loop}
        ref={typedRef}
        smartBackspace
        cursorChar="_"
      />
    </div>
  );
} 