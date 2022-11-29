import { useEffect, useState } from "react";

const useToken = (email) => {
  // console.log("Email", email);
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`https://server-vert-nu.vercel.app/jwt?email=${email}`)
        .then((res) => res.json())
        .then((singUpData) => {
          if (singUpData.accessToken) {
            localStorage.setItem("accessToken", singUpData.accessToken);
            setToken(singUpData.accessToken);
          }
        });
    }
  }, [email]);
  return [token];
};

export default useToken;
