import React, { useEffect, useRef } from 'react';

export default function Dropdown({ onClickOutside }) {
  const listRef = useRef()
  useEffect(() => {
    function handleClickOutside(event) {
        if (listRef.current && !listRef.current.contains(event.target))
            onClickOutside(event);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <ul ref={listRef}>
      <li>Company</li>
      <li>Contact</li>
    </ul>
  );
}
