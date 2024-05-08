import { Route, Routes } from "react-router-dom";
import { Cuentas } from "./components/cuentas";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Cuentas />} />
    </Routes>
  );
};