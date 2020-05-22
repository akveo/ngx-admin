export interface UserResponse {
    username: string,
    value: UserRole[],
}

export interface UserRole {
    resourcealias: string,
    relationshiptypealias: string,
}