export interface ICredentials {
   email: string;
   password: string;
}

export class LoginApi {
    private readonly url: string;

    public constructor(url: string) {
        console.log(url)
        this.url = url;
    }

    public signIn = async (credentials: ICredentials) => {
        try {
            const response = await fetch(this.url, {
                method: "POST",
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password,
                }),
            });
            const body = await  response.json();

            if (body?.status === 'success') {
                return {
                    email: credentials.email,
                    jwt: body.jwt.access,
                    refresh: body.jwt.refresh,
                    status: body.status,
                };
            } else {
                return null;
            }
        } catch (e) {
            console.error(e);
        }
    };
}