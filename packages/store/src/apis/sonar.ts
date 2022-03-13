
export type ISonarQuery = string;

export class SonarApi {
    private readonly url: string;

    public constructor(url: string) {
        this.url = url;
    }

    // TODO: move into shared utils
    private toParams = (params: any) => {
        return new URLSearchParams({...params});
    };

    public query = async (query: ISonarQuery) => {
        try {

            const jwt = localStorage.getItem('jwt');
            const response = await fetch(this.url + '/sonar/query?' + this.toParams({
                query: query,
                standard_format: true,
            }), {
                headers: {
                    'authorization': `Bearer ${jwt}`,
                }
            });

            const body = await response.json();

            if (body?.status === 'success') {
                return {
                    data: body?.data,
                    limit: body?.limit,
                    total_items: body?.totel_items,
                    total_items_per_passfail: body?.total_items_per_passfail,
                    status: body?.status,
                };
            } else {
                return {
                    error: new Error(body?.error),
                    type: 'query',
                };
            }
        } catch (e) {
            throw Error(e.message);
        }
    };
}