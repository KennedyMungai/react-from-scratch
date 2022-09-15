import React from 'react';

const Header = ({selectedTeam, teamMemberCount}) => {
  return (
    <header>
        <h1>Team Member Allocation</h1>
        <h3>{selectedTeam} has {teamMemberCount} members</h3>
    </header>
  )
}

export default Header;