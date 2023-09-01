export interface ListResponse<T> {
    data: T[]
    paging: Paging
}

export interface Image {
    id?: string | number,
    url?: string,
}

export interface Paging {
    page: number,
    limit: number,
    total: number,
    cursor: string,
    next_cursor: string

}

export interface TokenResponse {
   data:{
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

}
