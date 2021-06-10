import React, { useState } from 'react';
import styled from 'styled-components';
import { db } from '../components/Firebase';
import Footer from './Footer';

const FormStyle = styled.form`
margin-top: 150px;
  width: 50%;
    margin-left: auto;
    margin-right: auto;
    @media only screen and (max-width: 768px) {
         width: 80%;
        margin-top: 100px;
  }
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
     @media only screen and (max-width: 768px) {
         margin-bottom: 0.5rem;
  }
  }
  label {
    font-size: 1.8rem;
    width: 100%;
    

     @media only screen and (max-width: 768px) {
        font-size: 1rem;
    }
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 2rem;
    color: gray;
    background-color: #0000003b;
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
    box-shadow: 0px 0px 10px #c7c7c733;

    @media only screen and (max-width: 768px) {
        font-size: 1rem;
        padding: 0.5rem;
        
    }

  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
`;

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    /* background-color: gray; */
    padding: 0.7em 2em;
    border: 2px solid gray;
    border-radius: 8px;
    display: inline-block;
    	cursor: pointer;
    text-decoration: none;
    transition: 0.5s ease-in-out;

    :hover {
        background-color: gray;
        color: black;
    }
  }

  .button-about{
      font-size: 1.5rem;
    padding: 0.7em 2em;
    border: 2px solid gray;
    border-radius: 8px;
    display: inline-block;
    text-decoration: none;
    transition: 0.5s ease-in-out;
    	cursor: pointer;
    :hover {
        background-color: gray;
        color: black;
    }
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1rem;
    }
    .button-about{
      font-size: 0.7rem;
    }
  }
`;



export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const submit = () => {

    if(name === "" || email === "" || message === "") {
        alert("Please Fill all the fields to submit")
    }else{
      db.collection("contacts")
        .add({
          name,
          email,
          message
        })
      .then(() => {
          alert("Message has been submitted")
          setEmail("")
          setMessage("")
          setName("")
      }).catch((error) => {
        alert(error.message);
      })
    }
  }




  return (
    <>
      <FormStyle>
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
          
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        {/* <button 
        style={{
            backgroundColor: "gray",
        }}
        type="submit">Contact Me</button> */}
        <ButtonStyle className="button-wrapper">
                 <h1 className="button-about"  onClick={() => submit()} >
                    Send
                </h1>
        </ButtonStyle>
      </FormStyle>
      				<Footer />
    </>
  );
}