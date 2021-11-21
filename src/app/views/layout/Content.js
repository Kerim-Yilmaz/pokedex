import React,{ Suspense } from "react";
import { Switch,Route,Redirect } from "react-router-dom";
import routes from "../../../routes";
import Loading from "../Components/Loading/Loading";



 function Content() {


    return (
            <Suspense fallback={Loading}>
                <Switch>
                    
                    {routes.map((res,index)=>{
                        return (
                            <Route
                            key={index}
                            path={res.path}
                            name={res.name}
                            exact={res.exact}
                            component={res.component}
                            />
                        )
                    }
                        )}
                        <Redirect to="/" />
                </Switch>
            </Suspense>
    )
}

export default React.memo(Content)