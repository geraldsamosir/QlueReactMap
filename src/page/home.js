import React , {Component} from  "react"

import ApiACtion  from  "../action/api"

class Homepage extends Component {
    constructor(props){
        super(props)
    }

   
    render(){
        return(
            <div>
               <br/>
               <div className="container">
                   <center>
                       <img src="http://qlue.co.id/site/wp-content/uploads/2017/01/lg_QlueWithText.png" alt=""/>
                       <h1>Qlue Test</h1>
                       <p>Aplikasi ini untuk memenuhi test masuk qlue untuk soal no 3 dan soal no 4 (Soalbonus) </p>
                   </center>
               </div>
            </div>
        )
    }
}


const Home  =()=>{
    return(
        <Homepage />
    )
}

export default Home