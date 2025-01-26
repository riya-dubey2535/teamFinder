import React, { useState } from 'react';
import '../index.css'; 

const TeamMatching = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  const handleMatchTeam = () => {
    // Mock data with name and email
    const members = [
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob', email: 'bob@example.com' },
      { name: 'Charlie', email: 'charlie@example.com' },
      { name: 'David', email: 'david@example.com' }
    ];
    setTeamMembers(members);
  };

  return (
    <div>
      <h2>Team Matching</h2>
      <button onClick={handleMatchTeam}>Find Team Members</button>
      <ul>
        {teamMembers.map((member, index) => (
          <li key={index}>
            {member.name} - {member.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamMatching;
