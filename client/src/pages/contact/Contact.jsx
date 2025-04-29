import React, { useState } from 'react'
import img from '../../assets/chef.jpg'
import './contact.css'
import SubscribeCard from '../recipe details/subscribeCard/SubscribeCard'
import RecommandationRecipes from '../recipe details/recommendate recipes/RecommandationRecipes'
import axios from 'axios'
import *  as Yup  from 'yup';
import Aos from 'aos'
import 'aos/dist/aos.css';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    enquiry: '',
    message: ''
  });


    const [errors, setErrors] = useState()
  
    let validSchema = Yup.object({
      name: Yup.string().required("name is required"),
      email: Yup.string().email("invalid email format").required("email is required"),
      subject: Yup.string().required("subject is required"),
      enquiry: Yup.string().required("enquiry is required"),
      message: Yup.string().required("message is required"),
    });
  


  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    
    try {
      await validSchema.validate(formData, { abortEarly: false });
      const response = await axios.post('https://cookmate-8yiu.onrender.com/contact/userContact', formData)
      console.log(response.data);
      if (response.status === 200) {
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          enquiry: '',
          message: ''
        });
      } else {
        alert('Failed to submit the form. Please try again.');
      }
      
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((err)=>{
        console.log(err.path);
        newErrors[err.path] = err.message;
      })

      setErrors(newErrors);
    }
  }


  return (
    <div className='contact-container'>
    <div className='contact'>
        <div className='contact-left' data-aos="fade-right">
          <img src={img} alt="" />
        </div>
        <div className='contact-right' data-aos="zoom-in">
          <h1>Contact Us</h1>
          <form >
            <div className='contact-inputs' data-aos="fade-left">
                
                <input onChange={inputHandler} value={formData.name}  name='name' type="text" placeholder='Name' required />
                {errors && <p>{  errors.name}</p>}
                <input onChange={inputHandler} value={formData.email} name='email' type="email" placeholder='Email' required />
                {errors && <p>{  errors.email}</p>}
            </div>
            <div className='contact-inputs' data-aos="fade-left">
                <input onChange={inputHandler} value={formData.subject} name='subject' type="text" placeholder='Subject' required />
                {errors && <p>{  errors.subject}</p>}
                <select onChange={inputHandler} value={formData.enquiry} name='enquiry' id="">  
                    <option value="">Select</option>
                    <option value="option 1">Option 1</option>
                    <option value="option 2">Option 2</option>
                    <option value="option 3">Option 3</option>
                </select>
                {errors && <p>{  errors.enquiry}</p>}
            </div>
            <div className='contact-inputs' data-aos="fade-up">
                <textarea name="message" onChange={inputHandler} value={formData.message} id="" cols="30" rows="10"  placeholder='Message' required></textarea>
                {errors && <p>{  errors.message}</p>}
            </div>
            <button onClick={formSubmit} className='sbumit-btn' data-aos='zoom-in' >Submit</button>
          </form>
        </div>
    </div>
      <SubscribeCard />
      <RecommandationRecipes />
    </div>
  )
}

export default Contact
