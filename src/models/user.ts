import {Image} from "./common";

export interface User{

    id?: string | number,
    last_name: string,
    first_name: string,
    email: string,
    status:boolean ,
    role: string,
    created_at?: string,
    update_at?: string,
    avatar: Image

}

