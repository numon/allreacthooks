import React from 'react';
import {Link} from "react-router-dom";

const HooksList = () => {
  return (
    <div>
      Hooks List:
      <ul>
        <li><Link to='/useAsync'>useAsync</Link></li>
        <li><Link to='/useRouter'>useRouter</Link></li>
        <li><Link to='/useWhyDidYouUpdate'>useWhyDidYouUpdate</Link></li>
      </ul>
    </div>
  );
};

export default HooksList;
