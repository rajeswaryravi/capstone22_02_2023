import React from 'react';
import '.././Style/ApplyJob.css';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
function ApplyJob() {
    const firstNameRef = useRef('')
    const emailUserRef = useRef('')
    const phoneUserRef = useRef('')
    const expUserRef = useRef('')
    const [successApply, setSuccessApply] = useState('')
    const [errorApply, setErrorApply] = useState('')
    const [firstName, setFirstName] = useState('')
    const [errorName, setErrorName] = useState(null);
    const [emailUser, setEmailUser] = useState('');
    const [errorEmail, setErrorEmail] = useState(null);
    const [phoneUser, setPhoneUser] = useState("");
    const [errorPhone, setErrorPhone] = useState(null);
    const [expUser, setExpUser] = useState("");
    const [errorExp, setErrorExp] = useState(null);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function isValidFirstName(name) {
        return /^[A-Za-z]+$/.test(name);
    }
    const onChangeName = event => {
        if (!isValidFirstName(event.target.value)) {
            setErrorName('Enter valid name');
        } else {
            setErrorName(null);
        }
        setFirstName(event.target.value);
    };

    function isValidUserEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    const onChangeEmail = event => {
        if (!isValidUserEmail(event.target.value)) {
            setErrorEmail('Email is invalid');
        } else {
            setErrorEmail(null);
        }
        setEmailUser(event.target.value);
    };

    function isValidUserPhone(phone) {
        return /^[0-9\b]+$/.test(phone);
    }
    const onPhoneNumberChange = event => {
        if (!isValidUserPhone(event.target.value) || event.target.value.length < 10) {
            setErrorPhone("Input valid phone number")
        } else {
            setErrorPhone(null);
        }

        setPhoneUser(event.target.value);
    };

    const onExperienceChange = (event) => {
        if (event.target.value.length < 10) {
            setErrorExp("Input atleast 10 letters")
        } else {
            setErrorExp(null);
        }
        setExpUser(event.target.value);
        setErrorApply("")
    };

    const handleApply = (event) => {
        event.preventDefault()
        const candidate = {firstName:firstName,emailUser:emailUser,phoneUser:phoneUser,expUser:expUser};
        console.log(candidate);
        axios.post("http://localhost:4000/profile/",candidate).then((res)=>{
            console.log(res);
        });
        if (firstNameRef.current.value === "" || phoneUserRef.current.value === "" || emailUserRef.current.value === "" || expUserRef.current.value === "") {
            setErrorApply("Enter mandetory details")
            setSuccessApply("")
        }
        else {
            setSuccessApply("Thank you for applying to our company")
            setErrorApply("")
        }
    }
    return (
        <>
            <div class="container-applyjob">
                <div class="container-apply">
                    <h2>Job Application Form</h2>

                    <div class="contact-box">
                        <div class="contact-left">
                            <h3>Apply Your Job Here</h3>
                            <form onSubmit={handleApply}>
                                <div class="input-row">
                                    <div class="input-group">
                                        <label class="required">Name</label>
                                        <input type="text"
                                            placeholder="John Amendo"
                                            id="firstName"
                                            ref={firstNameRef}
                                            value={firstName}
                                            onChange={onChangeName}
                                            required />
                                        <span style={{ color: 'red' }}>{errorName}</span>
                                    </div>
                                    <div class="input-group">
                                        <label class="required">Email</label>
                                        <input type="text"
                                            required
                                            id="email"
                                            ref={emailUserRef}
                                            placeholder="job@gamil.com"
                                            value={emailUser}
                                            onChange={onChangeEmail} />
                                        <span style={{ color: 'red' }}>{errorEmail}</span>
                                    </div>
                                </div>
                                <div class="input-row">
                                    <div class="input-group">
                                        <label class="required">Phone</label>
                                        <input type="email"
                                            placeholder="(+91) 9876543219"
                                            type="tel"
                                            id="phoneUser"
                                            ref={phoneUserRef}
                                            maxLength="10"
                                            value={phoneUser}
                                            onChange={onPhoneNumberChange}
                                            required
                                        />
                                        <span style={{ color: 'red' }}>{errorPhone}</span>
                                    </div>
                                    <div class="input-group">
                                        <label>Address</label>
                                        <input type="text"
                                            placeholder="xyz,Flat no:22,Avanue Bazar,Chennai,India" />
                                    </div>
                                </div>
                                <div class="input-group">
                                    <label class="required">Experience</label>
                                    <textarea
                                        placeholder="Your experiences"
                                        required
                                        minLength="10"
                                        maxLength="150"
                                        id="exp"
                                        ref={expUserRef}
                                        value={expUser}
                                        onChange={onExperienceChange}
                                        required >
                                    </textarea>
                                    <span style={{ color: 'red' }}>{errorExp}</span>
                                </div>
                                <button type="submit" className="buttonApply" onClick={handleShow} >Apply</button>
                                {errorApply ? <div className="text-danger-apply">{errorApply}</div> : null}
                                {successApply ?
                                    <Modal show={show} onHide={handleClose} animation={false}>
                                        <Modal.Header>
                                            <Modal.Title className="successMsg">You have successfully applied</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body className="successMsg">Thank you for applying to our company</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="primary" className="buttonCloseApply" onClick={handleClose}>
                                                <Link to="/jobs">Close</Link>
                                            </Button>
                                        </Modal.Footer>
                                    </Modal> : null}
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ApplyJob;