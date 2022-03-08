import React, {useCallback, useState} from 'react';


const URL = 'https://api.orcasecurity.io/api/user/session'

export function Content() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleEmailChange = useCallback((event) => {
        setEmail(event.target.value);
    }, []);
    const handlePasswordChange = useCallback((event) => {
        setPassword(event.target.value);
    }, []);

    const handleLoginClick = useCallback(async () => {
        try {
            // @ts-ignore
            const response = await fetch(URL, {
                method: "POST",
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                    // @ts-ignore
                    'Content-Type': 'application/json'
                },
                // @ts-ignore
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
            const body = await response.json()
            console.log(response, body);
        } catch (e) {
            console.log(e);
        }
    }, [email, password]);

    console.log(email, password);
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