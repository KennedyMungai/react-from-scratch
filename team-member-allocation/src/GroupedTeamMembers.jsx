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
            {
                groupedEmployees.map((item) => {
                    return (
                        <div key={item.team} className="card mt-2" style={{cursor: "pointer"}}>
                            <h4 id={item.team} className="card-header text-secondary bg-white">
                                Team Name: {item.team}
                            </h4>
                            <div id={"collapse_"+item.team} className={item.collapsed === true?"collapsed":""}>
                                <hr />
                                {
                                    item.members.map(member => {
                                        return (
                                            <div className="mt-2">
                                                <h5 className="card-title mt-2">
                                                    <span className="text-dark">
                                                        Full Name: {member.fullName}
                                                    </span>
                                                </h5>
                                                <p>
                                                    Designation: {member.designation}
                                                </p>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </main>
    )
}

export default GroupedTeamMembers;