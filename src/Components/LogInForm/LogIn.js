import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import "./LogIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/UserContext";

const LogIn = () => {
  const [successful,setSuccessful]=useState(false)
  const [error,setError]=useState("")
  const { signIn } = useContext(AuthContext);
  const navigate =useNavigate();
  const hanndleLogin =(event)=>{
    setError("")
    setSuccessful(false)
     event.preventDefault();
     const form =event.target;
     const email = form.email.value;
     const password=form.password.value;
     console.log(email,password);
     navigate("/shop")
     signIn(email,password)
     .then(result=>{
      const user = result.user;
      form.reset();
      console.log("LogIn user is :",user);
      setSuccessful(true)
     })
     .catch(error=>setError("Wrong Password! Please Try Again"))
  }

  return (
    <div>
      <div className="form-section">
        <section className="form-details">
          <Form onSubmit={hanndleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <h2 className="form-heading-style">LogIn</h2>
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
               <h5 className="my-2"><small className="text-danger">{error}</small></h5>
              {
                successful && <h5 className="my-2"><small className="text-success">LogIn successfully</small></h5>
              }
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Log In
              </Button>
              <p className="text-center">
                <small>
                  New to Foshol-bazar?
                  <Link to="/signup" style={{ color: "orange" }}>
                    Create New Account
                  </Link>
                </small>
              </p>
            </div>
            <div className="form-else-option">
              <hr className="hr-style" />
              <span>or use one of these options</span>
              <hr className="hr-style" />
            </div>
            <div className="authencation-buttons">
              <div className="hover-effect">
                <button className="icon-style">
                  <FontAwesomeIcon icon={faFacebook} />
                </button>
              </div>
              <div className="hover-effect">
                <button className="icon-style">
                  <FontAwesomeIcon icon={faGithub} />
                </button>
              </div>
              <div className="hover-effect">
                <button className="icon-style">
                  <FontAwesomeIcon icon={faGoogle} />
                </button>
              </div>
            </div>
          </Form>
        </section>
      </div>
    </div>
  );
};

export default LogIn;
