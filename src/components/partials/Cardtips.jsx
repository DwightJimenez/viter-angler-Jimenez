import React from "react";

const Cardtips = ({ title, description, emoji, time }) => {
  return (
    <>
      <div className='bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500'>
        <h3 className='text-xl font-bold mb-3 text-gray-800'>{title}</h3>
        <p className='text-gray-600 mb-4'>{description}</p>
        <div className='flex items-center text-sm text-gray-500'>
          <span className='mr-2'>{emoji}</span>
          <span>{time}</span>
        </div>
      </div>
    </>
  );
};

export default Cardtips;
