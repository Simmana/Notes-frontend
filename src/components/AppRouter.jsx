import LoadingScreen from "../pages/LoadingPage";
import { useState, useEffect } from "react";
import{Routes, Route, useLocation} from "react-router-dom";
import {routes} from "../services/routes";

function AppRouter() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isLoading) {
    return <LoadingScreen />;
  }
    return (
        <Routes>
            {routes.map((routes,index)=>(
                <Route key={index} path={routes.path}element={ <routes.element/> }/>
            ))}
        </Routes>
    );
}

export default AppRouter;