import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
function App() {

  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [dob,setDob]=useState('');
  const [maths,setMaths]=useState();
  const [physics,setPhysics]=useState();
  const [chemistry,setChemistry]=useState();
  const [message,setMessage]=useState('');
  const [error,setError]=useState('');
  const [show,setShow]=useState(false);

  const [namevalidated,setNameValidated]=useState(false);
  const [emailvalidated,setEmailvalidated]=useState(false);
  const [dobvalidated,setDobvalidated]=useState(false);
  const [mathsvalidated,setMathsvalidated]=useState(false);
  const [physicsvalidated,setPhysicsvalidated]=useState(false);
  const [chemistryvalidated,setChemistryvalidated]=useState(false);

  const handleUserName=(e)=>{
    setName(e.target.value);
  }
  const handleNameBlur=()=>{
    setNameValidated(true);
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value);
  }
  const handleEmailBlur=()=>{
    setEmailvalidated(true);
  }
  const handleDob=(e)=>{
    setDob(e.target.value);
  }
  const handleDobBlur=()=>{
    setDobvalidated(true);
  }
  const handleMaths=(e)=>{
    setMaths(e.target.value);
  }
  const handleMathsBlur=()=>{
    setMathsvalidated(true);
  }
  const handlePhysics=(e)=>{
    setPhysics(e.target.value);
  }
  const handlePhysicsBlur=()=>{
    setPhysicsvalidated(true);
  }
  const handleChemistry=(e)=>{
    setChemistry(e.target.value);
  }
  const handleChemistryBlur=()=>{
    setChemistryvalidated(true);
  }
  const handleClose=()=>{
    setShow(false);
  }
  const handleShow=()=>{
    setTimeout(()=>{
      setShow(true);
    },2000);
  }


  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const res=await axios.post(process.env.REACT_APP_POST_DATA,{
        "name":name,
        "email":email,
        "dob":dob,
        "maths":maths,
        "physics":physics,
        "chemistry":chemistry,
      })
      console.log(res);
      setMessage(res.data);
      setError(" ");
    } catch (err) {
      setError("Error Sending mail");
      setMessage(" ");
    }
  }
  return (
    <div className="App">
      {<><Image src='https://img.icons8.com/?size=100&id=11645&format=png&color=000000' className='logo mt-2'/><h1 className="p-4" style={{color:"white"}}>Cutoff Calculator</h1></>}
      <Container className='text-center pb-5 box' style={{maxWidth:"400px"}}>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <InputGroup id='inputGroup-sizing-default'>
            User Name
          </InputGroup>
          <Form.Control 
          type='text'
          placeholder='Enter Your Name'
          value={name}
          onChange={handleUserName}
          onBlur={handleNameBlur}
          isInvalid={namevalidated && !name}
          required
          className='inputs'
          />
          <Form.Control.Feedback type='invalid'>
            Please enter your name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <InputGroup id='inputGroup-sizing-default'>
            Email
          </InputGroup>
          <Form.Control 
          type='email'
          placeholder='Enter Your Email'
          value={email}
          onChange={handleEmail}
          onBlur={handleEmailBlur}
          isInvalid={emailvalidated && !email}
          required
          />
          <Form.Control.Feedback type='invalid'>
            Please enter your email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <InputGroup id='inputGroup-sizing-default'>
            Date Of Birth
          </InputGroup>
          <Form.Control 
          type='date'
          placeholder='Enter Your DOB'
          value={dob}
          onChange={handleDob}
          onBlur={handleDobBlur}
          isInvalid={dobvalidated && !dob}
          required
          />
          <Form.Control.Feedback type='invalid'>
            Please enter your DOB.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <InputGroup id='inputGroup-sizing-default'>
            Maths Mark
          </InputGroup>
          <Form.Control 
          type='number'
          placeholder='Enter Your Maths Mark'
          value={maths}
          onChange={handleMaths}
          onBlur={handleMathsBlur}
          isInvalid={mathsvalidated && !maths}
          min={0}
          max={200}
          required
          />
          <Form.Control.Feedback type='invalid'>
            Please enter your maths mark.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <InputGroup id='inputGroup-sizing-default'>
            Physics Mark
          </InputGroup>
          <Form.Control 
          type='number'
          placeholder='Enter Your Physics Mark'
          value={physics}
          onChange={handlePhysics}
          onBlur={handlePhysicsBlur}
          isInvalid={physicsvalidated && !physics}
          min={0}
          max={200}
          required
          />
          <Form.Control.Feedback type='invalid'>
            Please enter your physics mark.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <InputGroup id='inputGroup-sizing-default'>
            Chemistry Mark
          </InputGroup>
          <Form.Control 
          type='number'
          placeholder='Enter Your Chemistry Mark'
          value={chemistry}
          onChange={handleChemistry}
          onBlur={handleChemistryBlur}
          isInvalid={chemistryvalidated && !chemistry}
          min={0}
          max={200}
          required
          />
          <Form.Control.Feedback type='invalid'>
            Please enter your chemistry mark.
          </Form.Control.Feedback>
        </Form.Group>
        <br/>
        <Button as='input' variant='dark' type="submit" value="Submit" onClick={handleShow} />
        <br/>
      </Form>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cutoff Calculator</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {(error==='' && message==='')?(
                <p style={{color:"red"}}>Enter All the details.</p>
            ):(<>
            <p style={{color:"red"}}>{error}</p>
            <p style={{color:"green"}}>{message}</p></>)}
          </Modal.Body>
          <Modal.Footer>
            <Button variant='dark' onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default App;
