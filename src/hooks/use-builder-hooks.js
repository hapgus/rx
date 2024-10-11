import { useContext } from "react";
import { BuilderContext } from "../context/BuilderContext";

export const useBuilderHook = () => {
     return useContext(BuilderContext)
}
