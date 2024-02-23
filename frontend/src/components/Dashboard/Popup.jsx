import React from 'react';

const Popup = ({ message, isError, onClose }) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50`}>
      <div className="bg-white w-1/3 p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className={`text-lg font-semibold ${isError ? 'text-red-500' : 'text-green-500'}`}>{isError ? 'Error' : 'Success'}</h2>
          <button onClick={onClose}>&times;</button>
        </div>
        <p className="text-gray-600 mt-3">{message}</p>
      </div>
    </div>
  );
};

export default Popup;
