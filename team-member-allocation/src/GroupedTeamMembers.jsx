import React from 'react';
import { useState } from 'react';



const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
    const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers());

    const groupTeamMembers = () => {
        
    };

    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <h1>Grouped Team Members</h1>
                {/* <h3>{selectedTeam} has {teamMemberCount} members</h3> */}
            </div>
        </main>
    )
}

export default GroupedTeamMembers;