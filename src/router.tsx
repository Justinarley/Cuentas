import { Route, Routes } from "react-router-dom";
import { Cuentas } from "./components/cardGastos";
import { TablaControl } from "./components/tablaControl";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Cuentas />} />
      <Route path="/tablaControl" element={<TablaControl />} />
    </Routes>
  );
};