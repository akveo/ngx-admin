import { User } from './user';

export interface UserResponse {
    username: string,
    value: UserRole[],
    user: User;
}

export interface UserRole {
    resourcealias: string,
    relationshiptypealias: string,
}