import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Typography from "@mui/material/Typography";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <h1>Profile</h1>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </p>
        <pre>
          <code>{JSON.stringify(user, null, 2)}</code>
        </pre>
      </div>
    )
  );
};

export default Profile;
