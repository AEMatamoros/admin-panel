import { BrowserRouter, Routes, Route } from "react-router-dom";
import { appRoutes } from "./routes/routes";
import { Login } from "./pages";
import RoutesProtector from "./utils/RoutesProtector";

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
          {appRoutes.map(({ path, name, Component, nested }) => {
            return (
              <Route element={<RoutesProtector path={path}/>} key={name}>
                <Route path={path} element={<Component />} key={name}>
                  {nested?.map(({ path, name, Component }) => {
                    return (
                      <Route path={path} element={<Component />} key={name} />
                    );
                  })}
                </Route>
              </Route>
            );
          })}
        <Route path="/*" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;