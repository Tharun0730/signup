import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyFormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    section_id: '',
    section_code:1
  });

 // Empty dependency array ensures this effect runs once on mount

  const sendDataToAPI = async () => {

    try {
      // Assuming 'apiEndpoint' is the endpoint you want to send the data to
      const response = await axios.post('apiEndpoint', formData);

      // Handle the response here
      console.log('Data sent:', response.data);
    } catch (error) {
      // Handle error
      console.error('Error sending data:', error);
    }
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    // Call sendDataToAPI when the form is submitted
    sendDataToAPI();
    console.log(formData)
    setFormData({
        email: '',
        password: '',
        customerId: ''
    })
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="name"
          value={formData.section_name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="text"
          name="section_id"
          value={formData.section_id}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyFormComponent;