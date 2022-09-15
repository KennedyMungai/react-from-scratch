import React from 'react';
import TeamMembers from './TeamMembers';
import Teams from './Teams';



const Employees = ({employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}) => {
    
    return (
        <main className="container mt-5">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange} />
                </div>
            </div>

            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="card-collection">
                        {
                            employees.map((employee) => {
                                <TeamMembers employee={employee} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam} />
                            })
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Employees;