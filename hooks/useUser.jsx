import { useContext } from "react";
import { userContext } from "../contexts/UserContext";

export function useUser() {
  const context = useContext(userContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}
