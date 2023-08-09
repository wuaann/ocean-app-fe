
export interface ListResponse<T> {
    code: number,
    message: string,
    data: T[]
}
export interface Image {
    id?: string| number,
    url?: string,
}

export interface TokenResponse {
    access_token: {
        token: string,
        created: string,
        expiry: number,
    }
    refresh_token: {
        token: string,
        created: string,
        expiry: number,
    }

}
