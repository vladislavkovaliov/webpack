import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IdentityApi } from "store/store";
import { Button, Input } from "ui_components/ui_components";

export function Content() {
    const navigate = useNavigate();

    const [status, setStatus] = useState<string>("failed");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleEmailChange = useCallback((event) => {
        setEmail(event.target.value);
    }, []);
    const handlePasswordChange = useCallback((event) => {
        setPassword(event.target.value);
    }, []);

    const handleLoginClick = useCallback(async () => {
        const { status } = await IdentityApi.getInstance().signIn({
            email: email,
            password: password,
        });

        setStatus(status);
    }, [email, password]);

    useEffect(() => {
        if (status === "success") {
            navigate("/attack-chains");
        }
    }, [navigate, status]);

    return (
        <div className="flex flex-col space-y-4">
            <div className="flex flex-col flex-start text-left">
                <label htmlFor="email">Email</label>
                <Input
                    onChange={handleEmailChange}
                    value={email}
                    name="email"
                    id="email"
                />
            </div>

            <div className="flex flex-col flex-start text-left">
                <label htmlFor="password">Password</label>
                <Input
                    onChange={handlePasswordChange}
                    value={password}
                    type="password"
                    name="password"
                    id="password"
                />
            </div>

            <div className="flex flex-col">
                <Button onClick={handleLoginClick} text="te" />
            </div>
        </div>
    );
}
