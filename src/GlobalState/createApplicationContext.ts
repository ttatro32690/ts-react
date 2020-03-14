import { createContext, Context } from "react";

const createApplicationContext = <T>(contextData: T): Context<T> => {
  return createContext(contextData);
};

export { createApplicationContext };
