import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useIdentity} from "store/store";

export function Content() {
    const navigate = useNavigate();
    const { signIn, identity } = useIdentity();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleEmailChange = useCallback((event) => {
        setEmail(event.target.value);
    }, []);
    const handlePasswordChange = useCallback((event) => {
        setPassword(event.target.value);
    }, []);

    const handleLoginClick = useCallback(() => {
        signIn(email, password);
    }, [email, password, navigate]);

    useEffect(() => identity.status === 'success' && navigate('/attack-chains'), [navigate, identity.status]);

    return (
        <div className="flex flex-col space-y-4">
            <div className="flex flex-col flex-start text-left">
                <label htmlFor="email">Email</label>
                <input onChange={handleEmailChange} className="py-1 px-2 outline-none bg-slate-800 text-white" name="email" id="email" type="text" value={email} />
            </div>

            <div className="flex flex-col flex-start text-left">
                <label htmlFor="password">Password</label>
                <input onChange={handlePasswordChange} className="py-1 px-2 outline-none bg-slate-800 text-white" name="password" id="password" type="text" value={password} />
            </div>

            <div className="flex flex-col">
                <button className="bg-sky-500 uppercase" onClick={handleLoginClick}>login</button>
            </div>
        </div>
    )
}