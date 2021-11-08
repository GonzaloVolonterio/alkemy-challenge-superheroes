import React from "react";
import { AuthProvider } from "./auth/AuthContext";
import { AppRouter } from "./routers/AppRouter";
import { TeamProvider } from "./team/TeamContext";
import "./styles/style.css";

export const App = () => {
  return (
    <AuthProvider>
      <TeamProvider>
        <AppRouter />
      </TeamProvider>
    </AuthProvider>
  );
};
