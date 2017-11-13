
import React , {Component} from  "react"

import L from  "leaflet"

import { Map, Marker, Popup, TileLayer ,LayerGroup} from 'react-leaflet';



import ApiACtion  from  "../action/api"






class SoalBonuspage extends Component {
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
      let result  =  await  ApiACtion.getapisoalbonus()
      if(result != ""){
        this.setState({
          result : result.alerts
        })
        

      }
    }
   
  changeCenter(position){
    this.setState({
        lat :position.lat + 0.01,
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
                const myIcon = L.icon({
                    iconUrl: (data.type =="JAM")?
                            'https://www.waze.com/assets/livemap/alerts/jam-lc2@2x-38b47f9566aebf4f0cf1f21b0552fef1b5d09186ca7569925fef967aaefb670d.png'
                            :'https://www.waze.com/assets/livemap/alerts/hazard-l@2x-330bf72c220a550666575682fd8fcd555fd7fda3662c2591910d346c1d20fd75.png'
                    ,
                    iconSize: [50, 50],
                    iconAnchor: [50, 50],
                    popupAnchor: [-3, -76],
                    shadowUrl: 'http://www.qlue.co.id/vacancy/svc/icon-marker.png',
                    shadowSize: [50, 50],
                    shadowAnchor: [50, 50]
                });
              return (
                  <Marker className="markeranimate" 
                      position={{lat :data.location.y ,lng :data.location.x }} 
                      key={data.uuid}  
                      icon={myIcon}
                      onClick={this.changeCenter.bind(this,{lat :data.location.y ,lng :data.location.x })}
                      >
                        <Popup>
                          <span style={{width:500,}}>
                              <div >
                                  <div style={{width:"50%",display:"inline"}}>
                                    <img className="animated bounce" 
                                        src={ (data.type =="JAM")?
                                            'https://www.waze.com/assets/livemap/alerts/jam-lc2@2x-38b47f9566aebf4f0cf1f21b0552fef1b5d09186ca7569925fef967aaefb670d.png'
                                            :'https://www.waze.com/assets/livemap/alerts/hazard-l@2x-330bf72c220a550666575682fd8fcd555fd7fda3662c2591910d346c1d20fd75.png'
                                            }
                                        style={{width:30,height:30,display:"inline"}}  alt=""/>
                                    <h2 style={{display:"inline"}}> <b>{data.username}</b></h2>
                                    <br/>
                                  </div>
                                  <div style={{width:"50%",display:"inline"}}>
                                    <h3>
                                      Kota   {data.city}
                                      <br/>
                                      Jalan {data.street}
                                      <br/>
                                      Tipe {data.type}
                                    </h3> 
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
                    attribution="&amp;copy Gerald Halomoan Samosir"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
        <center>
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




const SoalBonus  =()=>{
    return(
        <SoalBonuspage />
    )
}

export default SoalBonus