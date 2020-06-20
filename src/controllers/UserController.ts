import { User } from "@models/User";

export class UserController {
    create(name: string) {
        const user = new User();

        user.name = name;

        return user;
    }
}
