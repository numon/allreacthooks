import React from 'react';
import {useRouter} from "../hooks/useRouter";

const UseRouter = () => {
  // Get the router object
  const router = useRouter();
  console.log(router);

  // Get value from query string (?postId=123) or route param (/:postId)
  console.log(router.query.postId);

  // Get current pathname
  console.log(router.pathname);

  // Navigate with with router.push()
  return (
    <button onClick={(e) => router.push('/about')}>About</button>
  );
};

export default React.memo(UseRouter);
