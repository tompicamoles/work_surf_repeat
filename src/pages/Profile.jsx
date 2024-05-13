import { Typography } from "@mui/material"
import { useAuth0 } from "@auth0/auth0-react";


export const Profile = () => {

    const { user, isAuthenticated, isLoading, user_metadata } = useAuth0();
    console.log(user, user_metadata, user, isAuthenticated , isLoading)

    return (
       isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <article>{JSON.stringify(user)}</article>
        <article>{JSON.stringify(user_metadata)}</article>
      </div>
    )
  );
    
}