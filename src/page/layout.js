import React ,{Component} from 'react';
import { Link } from 'react-router-dom';


export default class Layout extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div>
                <h1 className="animated bounce">Qlue Testing </h1>
                <br/>
                <Link to={"/"}>Home</Link>
                <Link to={"/test3"}>Test no 3</Link>
                <Link to={"/soalbonus"}>Soal Bonus</Link>
                <hr />
                 {this.props.children}
            </div>
        )
    }
}