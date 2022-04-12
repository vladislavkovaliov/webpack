import { EventBus } from "../store";
import { IdentityPayload, IdentityErrorPayload } from "shared-types";

export interface ICredentials {
    email: string;
    password: string;
}

export class IdentityApi {
    private readonly url: string;

    private static instance?: IdentityApi = undefined;

    private constructor(url: string) {
        this.url = url;
    }

    public static getInstance(
        url: string = process.env.API_HOST!
    ): IdentityApi {
        if (this.instance === undefined) {
            this.instance = new IdentityApi(url);
        }

        return this.instance;
    }

    public signIn = async (
        credentials: ICredentials
    ): Promise<IdentityPayload | IdentityErrorPayload> => {
        try {
            // TODO: implement wrapper on fetch
            const response = await fetch(this.url + "/user/session", {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password,
                }),
            });
            const body = await response.json();

            if (body?.status === "success") {
                EventBus.getInstance().dispatch<IdentityPayload>("identity", {
                    email: credentials.email,
                    jwt: body.jwt.access,
                    refresh: body.jwt.refresh,
                    status: body.status,
                });

                return {
                    email: credentials.email,
                    jwt: body.jwt.access,
                    refresh: body.jwt.refresh,
                    status: body.status,
                };
            } else {
                return {
                    error: new Error(body?.error),
                    type: "signIn",
                };
            }
        } catch (e: any) {
            throw Error(e.message);
        }
    };
}
