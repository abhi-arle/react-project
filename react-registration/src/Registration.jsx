import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../../src/App.css';
import Recipet from './Recipet';

function Registration() {

  const [form_Data, set_Form_Data] = useState({
   
    pass: "",
    confimPass: "",

  });

  const chngFn = (event) => {
    const { name, value } = event.target;
    set_Form_Data({
      ...form_Data,
      [name]: value,
    });
  };



  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

  };


  function hello(e) {
    // alert(e);

    if(e=='cash')
    {
      document.getElementById('set-btn').innerHTML = 'Register';
      document.getElementById('set-btn').value = 'Register';
    }
    else
    {
      // let str = document.getElementById('set-btn').innerHTML = '<a type="button" className="my-btn" href="#" onCLick=">Procced</a>';
      document.getElementById('set-btn').innerHTML="Procced"
 document.getElementById('set-btn').value="Procced"
      
    }
}
  let array1 = ['FullStack Java','FullStack Php','FullStack Python'];

  // ***************************

  function handleClick()
  {
    // let str=document.getElementById('set-btn').value;
    // console.log("str=",str)
    // if(str==="Procced")
    // { console.log("str=",str)
    //   return(
    //   <Recipet  />
    // )
    // }
    return(
    <Recipet />
    )
  }
  

  return (

    <div className='container '>

      <div className='row bg-img'>
      
        <div className='col-sm-12 col-md-6 '>
          <div className=''>
            <div className='border border-2 m-5  rounded-4 text-white'>
              <Form noValidate validated={validated} onSubmit={handleSubmit} className='m-4 '>
                <Row className="mb-3 d-block">

                  <Form.Group as={Col} controlId="validationCustom01">

                    {/* <Form.Label>Name</Form.Label> */}
                    <Form.Control
                      required
                      type="text"
                      placeholder="Name"
                      defaultValue="" className='mt-4 border-input bg-transparent text-white'
                      autoComplete='off'
                    />

                    <Form.Control.Feedback type='invalid'> * Please enter a name </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} controlId="validationCustom02">
                    {/* <Form.Label>Phone No</Form.Label> */}
                    <Form.Control
                      required
                      type='number'
                      placeholder="Phone"
                      pattern="[7-9]{1}[0-9]{9}"
                      defaultValue="" className='mt-4 border-input bg-transparent text-white'
                      autoComplete='off'
                    />
                    <Form.Control.Feedback type='invalid'> * Please provide 10 digit phone number</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} controlId="validationCustomUsername">
                    {/* <Form.Label>Username</Form.Label> */}
                    <InputGroup hasValidation>


                      <Form.Control type="email" placeholder="Email" required pattern=".+@gmail\.com" className='mt-4 border-input bg-transparent text-white' autoComplete='off' />

                      <Form.Control.Feedback type="invalid">
                        * Please provide a valid email
                      </Form.Control.Feedback>



                    </InputGroup>
                  </Form.Group>
                

                <Form.Group controlId="password">

                  <Form.Control
                    type="password"
                    placeholder='Password'
                    name="pass"
                    autoComplete='off'
                    className='mt-4 border-input bg-transparent text-white'
                    value={form_Data.pass}
                    onChange={chngFn}
                    minLength={6}
                    required
                    isInvalid={
                      validated && form_Data.pass.length < 6
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Password must be at least 6 characters long.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="confirmPassword">

                  <Form.Control
                    type="password"
                    placeholder='confirm password'
                    name="confimPass"
                    autoComplete='off'
                    className='mt-4 border-input bg-transparent text-white'
                    value={form_Data.confimPass}
                    onChange={chngFn}
                    minLength={6}
                    required
                    pattern={form_Data.pass}
                    isInvalid={
                      validated &&
                      form_Data.confimPass !== form_Data.pass
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    * password does not match
                  </Form.Control.Feedback>
                </Form.Group>


                {/* *************************** */}


               
                <Form.Group controlId="selectCourse">
                  
                <Form.Select required as="select" type="select" className='mt-4 border-input bg-transparent text-white ' name="course" id="selectCourse">

                  <option value="" disabled selected hidden>Choose a Course</option>
                  {array1.map((ele,i)=><option key={i} >{ele}</option>)}
                </Form.Select>
                
                <Form.Control.Feedback type="invalid">
                  * Please choose a course name
                </Form.Control.Feedback>
                </Form.Group>



                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Fee"
                    className='mt-4 border-input bg-transparent text-white'
                    disabled value=''
                  /></InputGroup>

                {/* ************************ */}

                <Form.Select required as="select" type="select" className='mt-4 border-input bg-transparent text-white' name="course" onChange={(e)=>hello(e.target.value)}  >

                  <option  value="" disabled selected hidden>Payment</option>
                  <option  value='cash'  >cash</option>
                  <option value="online" >online</option>
                 

                </Form.Select>



                <Form.Control.Feedback type="invalid">
                  * Please choose payment method
                </Form.Control.Feedback>



                <Form.Group className="mb-3">
                  <Form.Check
                    className='mt-3 '
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group>
                </Row>

                {/* **************************** */}

                <Button type="submit " id='set-btn' className=' btn-bg ' onClick={handleClick}>Register</Button>

                <p>Already have an account <span className='text-primary' > <a href='#' className='text-primary' >Sign in</a> </span></p>
              </Form>
            </div>
           
        </div>
       
        </div>
       
       
       {/* <div className='col-md-6  p-0 rounded-3'>
              
              <div className='mb-5 ms-5 me-5 mt-5'>
              <img src={img1} alt="" className='w-100 h-100 rounded-4'  />
              </div>
          
       </div> */}

      </div>

    </div>
  );
}

export default Registration;