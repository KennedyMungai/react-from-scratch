import React from 'react';

const Header = ({selectedTeam, teamMemberCount}) => {
  return (
    <header className='container bg-black'>
        <div className="row justify-content-center mt-4 mb-4 text-white">
          <h1 className='h1'>Team Member Allocation</h1>
          <h3 className='h3'>{selectedTeam} has {teamMemberCount} members</h3>
        </div>
    </header>
  )
}

export default Header;