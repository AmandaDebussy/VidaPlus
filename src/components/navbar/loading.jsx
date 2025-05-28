// src/components/LoaderModal.jsx
import React from 'react';
import images from '../image'

const overlayStyle = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: '#ffffff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999
};

const spinnerStyle = {
  // fontSize: '24px',
  // fontWeight: 'bold',
  // color: '#3131ED'
//  width: '50px'
 
};


const LoaderModal = () => {
  return (
    <div style={overlayStyle}>
      <div>
        <img src={images.gifCarregando} style={spinnerStyle} alt='carregando'></img>
      </div>
    </div>
  );
};


export default LoaderModal;
