import React , {Component} from  "react"

import ApiACtion  from  "../action/api"

class Homepage extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        console.log("here")
        this.getdata()
        this.getdata2()
    }

    async getdata(){
        let result  =  await  ApiACtion.getApisoal3()

        console.log(result)
    }

    async getdata2(){
        let result  =  await  ApiACtion.getapisoalbonus()

        console.log(result)
    }

    render(){
        return(
            <div>
                home page
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