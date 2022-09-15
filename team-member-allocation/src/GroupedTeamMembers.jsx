import React from 'react';
import { useState } from 'react';



const GroupedTeamMembers = ({selectedTeam, teamMemberCount, setTeam}) => {
  return (
    <main className="container">
        <div className="row justify-content-center mt-3 mb-4">
            <h1>Grouped Team Members</h1>
            <h3>{selectedTeam} has {teamMemberCount} members</h3>
        </div>
    </main>
  )
}

export default GroupedTeamMembers;