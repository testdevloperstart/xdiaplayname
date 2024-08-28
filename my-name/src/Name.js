import React,  { useState } from 'react'

function Name() {
   
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [fullName, setFullName] = useState('');
        const [isSubmitted, setIsSubmitted] = useState(false);
      
        const handleFirstNameChange = (e) => {
          setFirstName(e.target.value);
        };
      
        const handleLastNameChange = (e) => {
          setLastName(e.target.value);
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          if (firstName && lastName) {
            setFullName(`${firstName} ${lastName}`);
            setIsSubmitted(true);
          }
        };

  return (
    <div>
      <h1>Full Name Display</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
          required
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
          required
        />
      </div>
      <button type="submit" disabled={!firstName || !lastName}>
        Submit
      </button>
    </form>
    {isSubmitted && <p>Full Name: {fullName}</p>}
  </div>
  )
}

export default Name
