/**
 * Sonar Model
 */

export interface IAttackPathModel {
    model: IAttackPath;
}

export interface IAttackPath {
    data: {
        AttackPath: {
            Id: string;
            Title: string;
            Name: string;
        };
    };
}

/**
 * API Payloads
 */

export interface IdentityPayload {
    email: string;
    jwt: string;
    refresh: string;
    status: string;
}

export interface IdentityErrorPayload {
    error: Error;
    type: string;
}
