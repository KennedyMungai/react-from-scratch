import React from 'react';

const Header = ({selectedTeam, teamMemberCount}) => {
  return (
    <header className='container'>
        <div className="row justify-content-center">
          <h1 className='h3'>Team Member Allocation</h1>
          <h3 className='h6'>{selectedTeam} has {teamMemberCount} members</h3>
        </div>
    </header>
  )
}

export default Header;