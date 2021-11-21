
import {BrowserRouter, Router} from 'react-router-dom'
import history from "./history";
import Layout from "./app/views/layout";
import { Provider } from "react-redux";
import { store } from "./app/redux/createStore";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './app/i18n';



function App() {


    return (
        <div className="App">
            <Provider store={store}>
                <ToastContainer />
                    <BrowserRouter basename={'http://localhost:3000'}>
                        <Router history={history}>
                               <Layout/>
                        </Router>
                    </BrowserRouter>
                </Provider>
        </div>
    );;
}

export default App;
/* 
v
 */
