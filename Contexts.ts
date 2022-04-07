import React from "react";
import { ContextsInterface } from "./Interface/Interface";

export const NavigationContext: React.Context<ContextsInterface> =
  React.createContext({
    NavigationSelected: 1,
    setNavigationSelected: null,
  });
