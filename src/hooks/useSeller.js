import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isSeller, setIsBuyer] = useState(false);
  const [isSellerLoading, setIsSellerLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://server-vert-nu.vercel.app/user/sellers/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsBuyer(data.isSeller);
          setIsSellerLoading(false);
        });
    }
  }, [email]);
  return [isSeller, isSellerLoading];
};

export default useSeller;
