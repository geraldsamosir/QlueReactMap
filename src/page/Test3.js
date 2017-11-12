import React , {Component} from  "react"

import { Map, Marker, Popup, TileLayer ,LayerGroup} from 'react-leaflet';

import ApiACtion  from  "../action/api"

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
        setTimeout(()=>this.setState({loading:false}),15000)

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
                        <Popup>
                          <span style={{width:500,}}>
                              <div >
                                  <div style={{width:"50%",display:"inline"}}>
                                    <img className="animated fadeIn"  src={data.image_url} style={{width: "100%",height: "auto"}}/>
                                    <img className="animated bounce" src="http://services.qlue.id/avatar/av_m001.png" style={{width:30,height:30,display:"inline"}}  alt=""/>
                                    <h2 style={{display:"inline"}}> <b>{data.username}</b></h2>
                                    <br/>
                                  </div>
                                  <div style={{width:"50%",display:"inline"}}>
                                    <h3>
                                      kecamatan  : {data.kecamatan}
                                      <br/>
                                      kabupaten :{data.kabupaten}
                                      <br/>
                                      provinsi :{data.provinsi}
                                    </h3> 
                                    deskripsi aduan : {data.description}
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
          <a href="#" onClick={this.showhidedata.bind(this)}>Show hide</a>
      <Map
          animate={true}
          center={position} 
          zoom={this.state.zoom} 
          style={{width:window.innerWidth-30,height:window.innerHeight
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