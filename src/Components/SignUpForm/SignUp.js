import React, { useContext, useState } from "react";
import "./SignUp.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext";

const SignUp = () => {

  const [error,setError]=useState('');
  const [successful,setSuccessful]=useState(false)

  const {createUser,updateuserProfile} = useContext(AuthContext);

  const handleSignUp =(event)=>{
    setError('');
    setSuccessful(false)
    event.preventDefault()
    const form =event.target;
    const name = form.name.value;
    const email =form.email.value;
    const password =form.password.value;
    const Confirmpassword = form.Confirmpassword.value
    console.log(name,'',email,'',password,'',Confirmpassword);
    if (password !== Confirmpassword) {
       setError("Opps Your Password Didn't Match");
       return; 
    }
    if (!/.{6}/.test(password)) {
       setError("Password length Should be At least 6 character")
       return;
    }
    createUser(email,password)
    .then(result=>{
      const user =result.user;
      updateuserProfile(name)
      form.reset();
      setSuccessful(true)
    })
    .catch(error=>console.error(error));



  }

  return (
    <div>
      <div className="form-section">
        <section className="form-details">
          <Form onSubmit={handleSignUp}>
            <Form.Group className="mb-3">
              <h2 className="form-heading-style">SignUp</h2>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confrim Password</Form.Label>
              <Form.Control
                type="password"
                name="Confirmpassword"
                placeholder="Password"
                required
              />
              {
                successful && <h5 className="my-2"><small className="text-success">Account Created successfully</small></h5>
              }
              <h6 className="my-2"><small className="text-danger">{error}</small></h6>
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                SignUp
              </Button>
              <p className="text-center"><small>Already Have an account?<Link to='/login' style={{color:'orange'}}>Login</Link></small></p>
            </div>
          </Form>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
