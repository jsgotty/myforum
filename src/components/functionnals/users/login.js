import React, { useState } from "react";
import propTypes from prop-types;
import { Link } from "react-router-dom";
import { userLogin } from '../../misc/apiRequests'
import { response } from "express";

const login = ({ handleModal, handleLoader, handleLogin }) => {
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const user = {username: credential, email: credential, password};

        handleLoader(true);
        userLogin(user)
         .then(response =>{
             if (response.success) handleLogin(response.user);
             if (!response.success) handleModal(response.errors);
             handleLoader(false);
         });
    };

    return (
        <div id="LoginPage" className="bg-main pt-1">
            
        </div>
    )
}