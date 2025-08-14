import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { BiSolidImageAdd } from 'react-icons/bi';
import { PiSquaresFourFill } from 'react-icons/pi';

const CreateMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const handleNavigation = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={toggleMenu}
        className="w-full text-left px-3 py-2 hover:bg-secondary rounded d-flex align-items-center gap-2"
        style={{ backgroundColor: '#f0f0f0', border: 'none' }}
      >
        <FaPlus /> Create
      </button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: 'white',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            zIndex: 1000,
            borderRadius: '6px',
            marginTop: '4px',
            minWidth: '140px',
            overflow: 'hidden'
          }}
        >
          <button
            onClick={() => handleNavigation('/create-post')}
            className="dropdown-item d-flex align-items-center gap-2"
          >
            <BiSolidImageAdd /> Post
          </button>
          <button
            onClick={() => handleNavigation('/create-ai')}
            className="dropdown-item d-flex align-items-center gap-2"
          >
            <PiSquaresFourFill /> AI
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateMenu;
