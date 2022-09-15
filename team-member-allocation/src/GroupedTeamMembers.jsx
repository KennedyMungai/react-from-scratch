import React from 'react';
import { useState } from 'react';



const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
    const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers());

    const groupTeamMembers = () => {
        var teams = [];

        var teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
        var teamA={team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false: true};
        teams.push(teamA);

        var teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
        var teamB={team: 'TeamA', members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false: true};
        teams.push(teamB);

        var teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
        var teamC={team: 'TeamA', members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false: true};
        teams.push(teamC);

        var teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
        var teamD={team: 'TeamA', members: teamDMembers, collapsed: selectedTeam === 'TeamD' ? false: true};
        teams.push(teamD);
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