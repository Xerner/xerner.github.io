import 'animate.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from 'store'
// import CssBaseline from '@material-ui/core/CssBaseline';
import MainContent from 'components/views/MainContent';

export default function Index() {
	return <React.StrictMode>
        <Provider store={store}>
            {/* <CssBaseline /> */}
            <MainContent />
        </Provider>
    </React.StrictMode>
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
