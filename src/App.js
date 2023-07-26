import React, { useState, useRef } from 'react';
import './style.css';

import Dropdown from './Dropdown';

export default function App() {
  const buttonRef = useRef();
  const [aboutMenuActive, setAboutMenuActive] = useState(false);

  const handleAboutMenuActive = () => {
    setAboutMenuActive(!aboutMenuActive);
  };
  return (
    <div>
      <button ref={buttonRef} onClick={handleAboutMenuActive}>
        About
      </button>
      {aboutMenuActive && (
        <Dropdown
          onClickOutside={(e) => {
            if (buttonRef.current && !buttonRef.current.contains(e.target))
              handleAboutMenuActive();
          }}
        ></Dropdown>
      )}
    </div>
  );
}
