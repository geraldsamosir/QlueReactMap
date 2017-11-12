import React ,{Component} from "react"
import { BrowserRouter as Router, Route ,Switch  } from 'react-router-dom';
import { render } from 'react-dom';

import Layout from  "./page/layout"
import Home from  "./page/home"
import Soalbonus from  "./page/SoalBonus"
import Test3 from "./page/Test3"



class  App  extends  Component {
    render(){
        return(
        
            <Router>
                <Layout>
                    <Route exact path="/"  render={Home}/>
                    <Route exact path="/test3"  render={Test3}/>
                    <Route exact path="/soalbonus"  render={Soalbonus}/>
                 </Layout>
            </Router>
       
               
        )
    }
}

render(<App/>,document.getElementById("mainapp"))
