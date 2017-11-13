import React ,{Component} from 'react';
import { Link } from 'react-router-dom';


export default class Layout extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div>
                 
                <header className="navbar" style={{background:"transparent",position:"fixed"}}>
                    <br/>
                        <section className="navbar-section">

                            <Link to={"/"} className="btn btn-link">
                                <img 
                                    src="http://qlue.co.id/site/wp-content/uploads/2017/01/lg_QlueWithText.png" 
                                    alt=""
                                    style={{width:100,height:50}}/>
                            </Link>
                        </section>
                         <section className="navbar-center">
                            <center>
                            <Link to={"/test3"} className="btn btn-sm btn-primary">Test no 3</Link>
                            &nbsp;
                            <Link to={"/soalbonus"} className="btn btn-sm btn-primary">Soal Bonus</Link>
                            </center>
                        </section>
                        <section className="navbar-section">
                        </section>

                </header>
                 {this.props.children}
            </div>
        )
    }
}