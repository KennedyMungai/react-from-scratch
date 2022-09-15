import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Content from './Content';
import Employees from './Employees';
import Footer from './Footer';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [selectedTeam, setSelectedTeam] = useState(JSON.parse(localStorage.getItem('selectedItem')) || "TeamB");

    const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [{
                                                    id: 1,
                                                    fullName: "Bob Jones",
                                                    designation: "JavaScript Developer",
                                                    gender: "male",
                                                    teamName: "TeamA"
                                                },
                                                {
                                                    id: 2,
                                                    fullName: "Jill Bailey",
                                                    designation: "Node Developer",
                                                    gender: "female",
                                                    teamName: "TeamA"
                                                },
                                                {
                                                    id: 3,
                                                    fullName: "Gail Shepherd",
                                                    designation: "Java Developer",
                                                    gender: "female",
                                                    teamName: "TeamA"
                                                },
                                                {
                                                    id: 4,
                                                    fullName: "Sam Reynolds",
                                                    designation: "React Developer",
                                                    gender: "male",
                                                    teamName: "TeamB"
                                                },
                                                {
                                                    id: 5,
                                                    fullName: "David Henry",
                                                    designation: "DotNet Developer",
                                                    gender: "male",
                                                    teamName: "TeamB"
                                                },
                                                {
                                                    id: 6,
                                                    fullName: "Sarah Blake",
                                                    designation: "SQL Server DBA",
                                                    gender: "female",
                                                    teamName: "TeamB"
                                                },
                                                {
                                                    id: 7,
                                                    fullName: "James Bennet",
                                                    designation: "Angular Developer",
                                                    gender: "male",
                                                    teamName: "TeamC"
                                                },
                                                {
                                                    id: 8,
                                                    fullName: "Jessica Faye",
                                                    designation: "API Developer",
                                                    gender: "female",
                                                    teamName: "TeamC"
                                                },
                                                {
                                                    id: 9,
                                                    fullName: "Lita Stone",
                                                    designation: "C++ Developer",
                                                    gender: "female",
                                                    teamName: "TeamC"
                                                },
                                                {
                                                    id: 10,
                                                    fullName: "Daniel Young",
                                                    designation: "Python Developer",
                                                    gender: "male",
                                                    teamName: "TeamD"
                                                },
                                                {
                                                    id: 11,
                                                    fullName: "Adrian Jacobs",
                                                    designation: "Vue Developer",
                                                    gender: "male",
                                                    teamName: "TeamD"
                                                },
                                                {
                                                    id: 12,
                                                    fullName: "Devin Monroe",
                                                    designation: "Graphic Designer",
                                                    gender: "male",
                                                    teamName: "TeamD"
                                                }
                                            ]);

    function handleTeamSelectionChange(event) {
        setSelectedTeam(event.target.value);
    }

    const handleEmployeeCardClick = (event) => {
        const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
                                ?((employee.teamName === selectedTeam)?{...employee, teamName: ''}:{...employee,teamName: selectedTeam})
                                :employee);

        setEmployees(transformedEmployees);
    };

    useEffect(() => {
      localStorage.setItem('employeeList', JSON.stringify(employees));
    }, [employees])

    useEffect(() => {
      localStorage.setItem('selectedItem', JSON.stringify(selectedTeam));
    }, [selectedTeam])
    
    

  return (
    <div>
      <Router>
        <Header
            selectedTeam={selectedTeam}
            teamMemberCount={employees.filter((employees) => employees.teamName === selectedTeam).length}
          />
          <Routes>
            <Route path="/" element={
              <Employees 
                    employees={employees} 
                    selectedTeam={selectedTeam} 
                    handleEmployeeCardClick={handleEmployeeCardClick}
                    handleTeamSelectionChange={handleTeamSelectionChange}
                  />
                }>
            </Route>
            <Route 
                path='/GroupedTeamMembers' 
                element={
                  <GroupedTeamMembers />
                }
              >

            </Route>
          </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
