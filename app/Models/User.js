import { Model } from "axe-api";

class User extends Model {
  get fillable() {
    return ["name", "surname"];
  }
}

export default User;
