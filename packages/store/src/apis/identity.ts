export interface ICredentials {
    email: string;
    password: string;
}

export class IdentityApi {
    private readonly url: string;

    public constructor(url: string) {
        this.url = url;
    }

    public signIn = async (credentials: ICredentials) => {
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
                return {
                    email: credentials.email || "system_testing@orca.security",
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
