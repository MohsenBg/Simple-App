import React from "react";
import {
  ContextsInterface,
  ContextStateInterface,
} from "./Interface/Interface";

export const NavigationContext: React.Context<ContextsInterface> =
  React.createContext({
    NavigationSelected: 1,
    setNavigationSelected: null,
  });

export const SateContext: React.Context<ContextStateInterface> =
  React.createContext({
    Title: "",
    setTitle: null,
  });
