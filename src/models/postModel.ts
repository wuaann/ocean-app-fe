import {Image} from "./common";

export interface PostModel {

    id: string,
    status: 1,
    created_at: string,
    updated_at: string,
    caption: string,
    images: Image,
    liked_count: string | number,
    user_id: string | number,
    user: {
        id: string,
        status: boolean,
        created_at: string,
        avatar: Image,
        updated_at: string,
        last_name: string,
        first_name: string
    }


}