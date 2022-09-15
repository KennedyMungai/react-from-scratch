import React from 'react';
import maleProfile from './images/maleProfile.jpg'
import femaleProfile from './images/femaleProfile.jpg'


const Employees = ({employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}) => {
    
    return (
        <main className="container mt-5">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    
                </div>
            </div>

            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="card-collection">
                        {
                            employees.map((employee) => {
                                <div key={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standount':'card m-2')} id={employee.id} style={{cursor:"pointer"}} onClick={handleEmployeeCardClick} >
                                    {(employee.gender === 'male')?<img src={femaleProfile} alt="Profile" className="card-img-top" /> : <img src={maleProfile} alt="Profile" className="card-img-top" />}

                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Full Name: {employee.fullName}
                                        </h5>
                                        <p className="card-text">
                                            Designation: {employee.designation}
                                        </p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Employees;