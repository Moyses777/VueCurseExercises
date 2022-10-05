import * as User from './stores/User.ts'
export type UserList = Array<User>

export async function login(username:string, password:string) {
    const request = await fetch('/users.json');
    const usersJson: UserList = await request.json();
    return usersJson.find(x => x.password === password && x.username === username);
}

export async function getUser() {
    const request = await fetch('/current.json');
    const user: User = await request.json();
    return user;
}