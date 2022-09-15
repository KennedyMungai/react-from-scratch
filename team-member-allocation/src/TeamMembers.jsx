import React from 'react';
import {femaleProfile} from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';


const TeamMembers = ({ employee, handleEmployeeCardClick, selectedTeam }) => {
  return (
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
  )
}

export default TeamMembers;