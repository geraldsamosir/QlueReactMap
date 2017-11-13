import React , {Component} from  "react"

import { Map, Marker, Popup, TileLayer ,LayerGroup} from 'react-leaflet';

import ApiACtion  from  "../action/api"

import L from  "leaflet"

const myIcon = L.icon({
    iconUrl: 'http://www.qlue.co.id/vacancy/svc/icon-marker.png',
    iconSize: [50, 50],
    iconAnchor: [50, 50],
    popupAnchor: [-3, -76],
    shadowUrl: 'http://www.qlue.co.id/vacancy/svc/icon-marker.png',
    shadowSize: [50, 50],
    shadowAnchor: [50, 50]
});


class Test3page extends Component {
    constructor(props){
        super(props)
         this.state = {
            lat: -6.213342, 
            lng: 106.843560 ,
            zoom: 13,
            result : [],
            hide : [],
            loading:true,
            datashow : true
        }
    }

  componentDidMount(){
    this.getdata()
  }
    
  async getdata(){
      let result  =  await  ApiACtion.getApisoal3()
      if(result != ""){
        this.setState({
          result : result
        })
       

      }
    }
   
  changeCenter(position){
    this.setState({
        lat :position.lat + 0.05,
        lng: position.lng 
    })
  }

  showhidedata(){
    this.setState({
      result :(this.state.result == "") ? this.state.hide : [],
      hide : (this.state.hide == "") ? this.state.result : this.state.hide,
      datashow  : ! this.state.datashow
    })
  }

  render() {
       const position = [this.state.lat, this.state.lng]
      
        let Reports =  this.state.result.map((data)=>{
              return (
                  <Marker className="markeranimate" 
                      position={data} 
                      key={data.id}  
                      icon={myIcon}
                      onClick={this.changeCenter.bind(this,{lat : data.lat ,lng :data.lng})}
                      >
                        <Popup >
                          <span>
                              <div className="columns">
                                  <div  className="column col-xs-6" style={{width:"50%",display:"inline"}}>
                                    <img className="animated fadeIn"  src={data.image_url} style={{width: "100%",height: "150px"}}/>
                                    <img className="animated bounce" src="http://services.qlue.id/avatar/av_m001.png" style={{width:30,height:30,display:"inline"}}  alt=""/>
                                    <h5 style={{display:"inline"}}> <b>{data.username}</b></h5>
                                    <br/>
                                  </div>
                                  <div className="column col-xs-6" style={{width:"50%",display:"inline"}}>
                                    <p>
                                      <b>
                                      kecamatan  
                                      <br/>
                                       {data.kecamatan}
                                      <br/>
                                      kabupaten 
                                      <br/>
                                      {data.kabupaten}
                                      <br/>
                                      provinsi 
                                      <br/>
                                      {data.provinsi}
                                      </b>
                                      <br/><br/>
                                       deskripsi aduan : {data.description}
                                    </p> 
                                   
                                  </div>
                              </div>
                              <center>
                           
                              </center>
                          </span>
                        </Popup>
                      </Marker>
              )
          })
    
    return (
        <div >
           <br/>
          <a className="btn btn-primary" style={{float:"right",marginRight:"2%",position:"fixed", bottom:"30px",right:"10px"}} href="#" onClick={this.showhidedata.bind(this)}>
              {
                  (this.state.result == "")?
                  <i className="ion-eye">Show</i>
                  :<i className="ion-eye-disabled">Hide</i>
              }
          </a>
           <br/>
        <Map
            animate={true}
            center={position} 
            zoom={this.state.zoom} 
             style={{width:window.innerWidth  ,height:window.innerHeight-120
            }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          <center style={{zIndex:5}}>
            <div className="loader" 
            style={{display:(this.state.loading == true)?"":"none",marginTop:window.innerHeight /2 }}
            />
          </center>
          <LayerGroup >
            {Reports}
            
          </LayerGroup>
        </Map>
      </div>
    )
  }
}


const Test3  =()=>{
    return(
        <Test3page />
    )
}

export default Test3