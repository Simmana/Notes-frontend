import{Routes, Route} from "react-router-dom";
import {routes} from "../services/routes";
function AppRouter(){
    return (
        <Routes>
            {routes.map((routes,index)=>(
                <Route key={index} path={routes.path}element={ <routes.element/> }/>
            ))}
        </Routes>
    );
}

export default AppRouter;