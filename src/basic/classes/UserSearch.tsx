import { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };

  onClick = () => {
    const findedUser = this.props.users.find(
      (user) => user.name === this.state.name
    );
    this.setState({ user: findedUser });
  };

  render() {
    const { name, user } = this.state;
    return (
      <div>
        <h3>User Search</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Search</button>
        <h5>User Details</h5>
        <p>Name: {user && user.name}</p>
        <p>Age: {user && user.age}</p>
      </div>
    );
  }
}

export default UserSearch;
