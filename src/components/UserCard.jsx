import UserContext from "../contexts/UserContext";
import { useContext } from "react";

export default function UserCard({ user }) {
  const { setCurrentUser, currentUser } = useContext(UserContext);

  return (
    <div className="UserCard">
      <h3>Username: {user.username}</h3>
      <p>Name: {user.name}</p>
      <img className="user-img" src={user.avatar_url} />
      {user.username !== currentUser.username ? (
        <button
          onClick={() => {
            setCurrentUser(user);
          }}
        >
          Login
        </button>
      ) : null}
    </div>
  );
}
