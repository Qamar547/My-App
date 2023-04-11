import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">{props.title}</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        {/* <a className="nav-link active" aria-current="page" href="/#">Home</a> */}
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    {/* <div className="d-flex">
                        <div className="bg-primary rounded mx-2" onClick={() => {props.toggleMode('primary')}} style={{height: '30px', width:'30px'}}></div>
                        <div className="bg-success rounded mx-2" onClick={() => {props.toggleMode('success')}} style={{height: '30px', width:'30px'}}></div>
                        <div className="bg-danger rounded mx-2" onClick={() => {props.toggleMode('danger')}} style={{height: '30px', width:'30px'}}></div>
                        <div className="bg-warning rounded mx-2" onClick={() => {props.toggleMode('warning')}} style={{height: '30px', width:'30px'}}></div>
                        <div className="bg-light rounded mx-2" onClick={() => {props.toggleMode('light')}} style={{height: '30px', width:'30px'}}></div>
                        <div className="bg-dark rounded mx-2" onClick={() => {props.toggleMode('dark')}} style={{height: '30px', width:'30px'}}></div>
                    </div> */}

                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch"/>
                        <label className="form-check-label">{props.labelText}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = { title: PropTypes.string, about: PropTypes.string };
// Navbar.defaultProps = {
//     titleDefault: "MyReact-App",
//     aboutDefault: "About-Us"
//  }