import { useContext } from "react";
import { SetingsContext } from "./settingsContext";

export const useSetting = () => useContext(SetingsContext);
