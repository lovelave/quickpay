import * as Credit from "./credit";
import { User } from "./user";

export interface State {
    user: User;
    request: Credit.Request;
}
