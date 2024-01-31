import React, {Component, Fragment} from "react";
import ReactDOM from 'react-dom/client';
import Hellow from './hellow.jsx';
class App extends Component{
    render(){
        return(
            <React.Fragment>
                <Hellow></Hellow>
            </React.Fragment>
        )
    }
}
var root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);



