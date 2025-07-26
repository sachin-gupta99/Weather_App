import React from 'react';
import { ClipLoader } from 'react-spinners';

const Spinner = () => (
  <div className="loading-spinner">
    <ClipLoader color="#fff" size={40} />
  </div>
);

export default Spinner; 