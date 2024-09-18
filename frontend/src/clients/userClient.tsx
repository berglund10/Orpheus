import { createContext, useContext } from "react";

interface User {
  username: string;
  password: string;
  auth: boolean;
}

const UserClientContext = createContext<null | User>(null);

export default UserClientContext;

export function useUserClient() {
  return useContext(UserClientContext);
}
