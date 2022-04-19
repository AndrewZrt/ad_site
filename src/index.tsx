import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux';
import setupStore, {persistor} from "./store/store";
import {PersistGate} from "redux-persist/integration/react"

import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
    );
root.render(
    <Provider store={setupStore}>
        <Router>
            <PersistGate loading={null} persistor={persistor}>
                <App/>
            </PersistGate>
        </Router>

    </Provider>
);

reportWebVitals();
