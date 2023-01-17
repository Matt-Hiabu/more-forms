import React, {useState} from "react";
const MoreForms = (props) => {
 //FIRST NAME
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");

    const handleFirstname = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 2) {
            setFirstnameError("First Name must be at least 2 characters");
        } else {
            setFirstnameError("");
        }
    }
//LAST NAME
    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");

    const handleLastname = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 2) {
            setLastnameError("Last Name must be at least 2 characters");
        } else {
            setLastnameError("");
        }
    }
//EMAIL
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("E-mail must be at least 5 characters");
        } else {
            setEmailError("");
        }
    }
//PASSWORD
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    }
// CONFIRM
    const [confirm, setConfirm] = useState("");

    return(
        <form onSubmit={(e) => e.preventDefault()}>
            <div>
                <label>First Name:</label>
                <input type="text" value={firstname} onChange= {handleFirstname}/>
                {
                    firstnameError ?
                    <p>{ firstnameError }</p> :
                    ''
                }
            </div>
            
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastname} onChange= {handleLastname}/>
                {
                    lastnameError ?
                    <p>{ lastnameError }</p> :
                    ''
                }
            </div>

            <div>
                <label>Email:</label>
                <input type="text" value={email} onChange= {handleEmail}/>
                {
                    emailError ?
                    <p>{ emailError }</p> :
                    ''
                }
            </div>

            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange= {handlePassword}/>
                {
                    passwordError ?
                    <p>{ passwordError }</p> :
                    ''
                }
            </div>

            <div>
                <label>Confirm Password:</label>
                <input type="password" value={confirm} onChange= {(e) => setConfirm(e.target.value)}/>
            </div>
                
                    {confirm !== password ? <p>Passwords must match</p> : null}
                
            
        </form>
    );
};

export default MoreForms