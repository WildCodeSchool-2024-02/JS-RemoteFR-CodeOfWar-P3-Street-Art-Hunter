import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

import { getUserConnected } from "../request";

const UserInfoContext = createContext();

function UserInfoProvider({ children }) {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    getUserConnected(setUserInfo);
  }, []);

  const props = useMemo(() => ({ userInfo, setUserInfo }), [userInfo]);

  return (
    <UserInfoContext.Provider value={props}>
      {children}
    </UserInfoContext.Provider>
  );
}

UserInfoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserInfoProvider, UserInfoContext };
