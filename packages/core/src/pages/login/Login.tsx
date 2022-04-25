import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IdentityApi } from "store/store";
import { Button, Input } from "ui_components/ui_components";
import { EventBus } from "store/store";
import { IdentityPayload } from "shared-types";

// import { EventBus } from "store/src/utils";

export interface LoginPageProps {
    defaultPageRedirect: string;
}

export enum Status {
    FAILED = "failed",
    SUCCESS = "success",
}

export function LoginPage({ defaultPageRedirect }: LoginPageProps) {
    const navigate = useNavigate();

    const [status, setStatus] = useState<string>(Status.FAILED);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleEmailChange = useCallback((event) => {
        setEmail(event.target.value);
    }, []);
    const handlePasswordChange = useCallback((event) => {
        setPassword(event.target.value);
    }, []);

    const handleLoginClick = useCallback(async () => {
        const { status, jwt, refresh } = await IdentityApi.getInstance().signIn(
            {
                email: email,
                password: password,
            }
        );

        if (status === Status.SUCCESS) {
            EventBus.getInstance().dispatch("identity", {
                email: email,
                jwt: jwt,
                refresh: refresh,
                status: status,
            });
        }

        setStatus(status);
    }, [email, password]);

    useEffect(() => {
        if (status === Status.SUCCESS) {
            navigate(defaultPageRedirect);
        }
    }, [navigate, status, defaultPageRedirect]);

    return (
        <div
            className="h-full w-full flex flex-col justify-center items-center"
            style={{
                backgroundColor: "rgb(16, 17, 29)",
                color: "rgb(202, 207, 219)",
            }}
        >
            <div className="w-60 space-y-4">
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
        </div>
    );
}
