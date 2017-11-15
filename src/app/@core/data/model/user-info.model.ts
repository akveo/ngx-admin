export class UserInfo {
    first_name?: string;
    last_name?: string;
    nickname?: string;
    user_id?: string;
    preference_genres?: Genre[];
    preference_artists?: Artist[];
    favourite_artists?: Artist[];
}
  
class Artist {
    id?: string;
    name?: string;
    count?: number;
}
  
class Genre {
    id?: string;
    name?: string;
}