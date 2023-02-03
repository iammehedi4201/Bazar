import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import './LogIn.css'
import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <div>
              <div className="form-section">
      <section className="form-details">
        <Form>

        <Form.Group className="mb-3" controlId="formBasicEmail">
              <h2 className="form-heading-style">LogIn</h2>
          </Form.Group>

          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" required />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
               Log In
            </Button>
             <p className="text-center"><small>New to Foshol-bazar?<Link to='/signup' style={{color:'orange'}}>Create New Account</Link></small></p>
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
              <button className ="icon-style">
                <FontAwesomeIcon icon={faGithub} />
              </button>
            </div>
            <div className="hover-effect">
              <button className="icon-style">
                <FontAwesomeIcon  icon={faGoogle} />
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