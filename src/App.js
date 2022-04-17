import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource"; //Arrays from formSource
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import Stats from "./pages/stats/Stats";
import LatestTrans from "./pages/latest_trans/LatestTrans";
import Landingpage from "./pages/landingpage/Landingpage";
function App() {
  const { darkMode } = useContext(DarkModeContext);

  const {currentUser} = useContext(AuthContext)
  // const currentUser = false;

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="landing" element={<Landingpage/>} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="Employee">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title="Add New User" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="stats" element={<Stats/>}/>
            <Route path="current_project" element={<LatestTrans/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
