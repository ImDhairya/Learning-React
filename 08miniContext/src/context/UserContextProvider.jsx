import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => { // Children is like div and you get whatever you provide, it returns it back. 
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
