import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/jwt?email=${email}`)
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
