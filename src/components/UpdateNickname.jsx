import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UpdateNickname = () => {
  const { getAccessTokenSilently, user } = useAuth0();
  const [nickname, setNickname] = React.useState("");

  const updateNickname = async () => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;

    try {
      const token = await getAccessTokenSilently({
        audience: `https://${domain}/api/v2/`,
        scope:
          "update:users",
      });

      console.log("silent Token" , token)
      const body = JSON.stringify({
        nickname: nickname,
      });
      const response = await fetch(
        `https://${domain}/api/v2/users/${user.sub}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: body,
        }
      );

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error updating nickname:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter new nickname"
        value={nickname}
        onChange={(e) => {
          setNickname(e.target.value);
          console.log("updated NickName" ,nickname)
        }}
      />
      <button onClick={updateNickname}>Update Nickname</button>
    </div>
  );
};

export default UpdateNickname;
