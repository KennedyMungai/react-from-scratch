import React from 'react';

var today = new Date();

const Footer = () => {
  return (
    <footer className='container fixed-bottom bg-black'>
      <div className="row justify-content-center mt-3 mb-4 text-white">
        <div className="col-8">
          <h5>Team Member Allocation App - {today.getFullYear()}</h5>
        </div>
      </div>
    </footer>
  )
}

export default Footer