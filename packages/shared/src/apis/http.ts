export class Http {
    public readonly baseUrl: string;

    public constructor(baseUrl: string = process.env.API_HOST!) {
        this.baseUrl = baseUrl;
    }

    public get = async (url: string, params: Record<string, string>) => {
        try {
            const response = await this.request(
                `${this.baseUrl}/${url}` + Http.toParams(params),
                null,
                {}
            );

            return response;
        } catch (ex) {
            console.error(ex);
            throw ex;
        }
    };

    public post = () => {};

    public put = () => {};

    public delete = () => {};

    public request = async (
        url: string,
        body: object | null,
        options: any = {}
    ) => {
        const jwt = localStorage.getItem("jwt");
        options.headers = {
            ...options.headers,
            authorization: `Bearer ${jwt}`,
        };
        const response = await fetch(url, {
            body: body ? JSON.stringify(body) : undefined,
            ...options,
        });

        return await response.json();
    };

    public static toParams(params: Record<string, string>) {
        return new URLSearchParams({ ...params });
    }
}

export const http = new Http();
