import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';
import { useState } from 'react';
import { transform } from 'next/dist/build/swc';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {
  const [clickCount, setClickCount] = useState(0);
  const [clickCount2, setClickCount2] = useState(0);
  const [clickCount3, setClickCount3] = useState(0);
  const [styleImg , setStyleImg] = useState({
    width:25,height:25,
        transform : 'rotate(0deg)',
    transition : 'transform 0.5s'
  })
  const [styleImg2 , setStyleImg2] = useState({
    width:25,height:25,
        transform : 'rotate(0deg)',
    transition : 'transform 0.5s'
  })
  const [styleImg3 , setStyleImg3] = useState({
    width:25,height:25,
    transform : 'rotate(0deg)',
    transition : 'transform 0.5s'
  })
  const [style, setStyle] = useState({
    display: 'none',
    width:"90%",height:120,backgroundColor:"black" , marginRight:"5%", borderRadius:"10px",opacity:"0.9",
  });
  const [style2, setStyle2] = useState({
    display: 'none',
    width:"90%",height:120,backgroundColor:"black" , marginRight:"5%", borderRadius:"10px",opacity:"0.9",
  });
  const [style3, setStyle3] = useState({
    display: 'none',
    width:"90%",height:120,backgroundColor:"black" , marginRight:"5%", borderRadius:"10px",opacity:"0.9",
  });
  const toggleHandler = ()=>{
    setClickCount(clickCount + 1);
    if(clickCount % 2 == 0)
      {
        setStyle({
          display: 'block',
          width:"90%",height:120,backgroundColor:"black" , marginRight:"5%", borderRadius:"10px",opacity:"0.9",
        });
        setStyleImg({
          width:25,height:25,   
           transform : 'rotate(180deg)',
           transition : 'transform 0.5s'
        })
      }
      else{
        setStyle({
          display: 'none',
          width:"90%",height:120,backgroundColor:"black" , marginRight:"5%", borderRadius:"10px",opacity:"0.9",
        });
        setStyleImg({
          width:25,height:25,   
           transform : 'rotate(0deg)',
           transition : 'transform 0.5s'
        })
      }
  }
  const toggleHandler2 = ()=>{
    setClickCount2(clickCount2 + 1);
    if(clickCount2 % 2 == 0)
    {
      setStyle2({
        display: 'block',
        width:"90%",height:120,backgroundColor:"black" , marginRight:"5%", borderRadius:"10px",opacity:"0.9",
      });
      setStyleImg2({
        width:25,height:25,   
         transform : 'rotate(180deg)',
         transition : 'transform 0.5s'
      })
    }
    else{
      setStyle2({
        display: 'none',
        width:"90%",height:120,backgroundColor:"black" , marginRight:"5%", borderRadius:"10px",opacity:"0.9",
      });
      setStyleImg2({
        width:25,height:25,   
         transform : 'rotate(0deg)',
         transition : 'transform 0.5s'
      })
    }
 
  }
  const toggleHandler3= ()=>{
    setClickCount3(clickCount3 + 1);
    if(clickCount3 % 2 == 0)
      {
        setStyle3({
          display: 'block',
          width:"90%",height:120,backgroundColor:"black" , marginRight:"5%", borderRadius:"10px",opacity:"0.9",
        });
        setStyleImg3({
          width:25,height:25,   
           transform : 'rotate(180deg)',
           transition : 'transform 0.5s'
        })
      }
      else{
        setStyle3({
          display: 'none',
          width:"90%",height:120,backgroundColor:"black" , marginRight:"5%", borderRadius:"10px",opacity:"0.9",
        });
        setStyleImg3({
          width:25,height:25,   
           transform : 'rotate(0deg)',
           transition : 'transform 0.5s'
        })
      }
  }
  let styles = global.styles
  let name = "weather status"


  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      <Window title={name} style={{ minHeight: 500, margin: 10, width: "calc(100% - 20px)" }}>
        <div style={{direction:"ltr", textAlign:"center",marginTop:"15px",fontSize:15,fontWeight:"bolder"}}>
        🗺️location: {(props.loca.areaName[0].value)} , {(props.loca.region[0].value)} , {(props.loca.country[0].value)}
        </div>
      <br-x />
      <br-x />
         <div style={{width:"90%", height:70,opacity:"0.6" ,paddingLeft:20 ,paddingTop:25, direction:"ltr",color:"white" , fontSize:"15px",
           backgroundColor:"black" , marginRight:"5%" , borderRadius:"10px"}}>
               <div onClick={toggleHandler} style={{width:25,height:25,float:'right',marginRight:10}}>
            <img style={styleImg}  src="/down-arrow-svgrepo-com.svg" alt="" />
           </div>
           📅date: {(props.w[0].date)}
           
           <div style={{display:"inline", marginLeft:"20px"}}>
            C°: {(props.weather[0].FeelsLikeC)}
           </div>
           <div style={{display:"inline", marginLeft:"20px"}}>
            F: {(props.weather[0].FeelsLikeF)}
           </div>
           <div style={{display:"inline", marginLeft:"15px"}}>
           status: ☀️{(props.weather[0].weatherDesc[0].value)}
           </div>
           <div style={{display:"inline", marginLeft:"15px"}}>
            🍃Speed Wind: {(props.weather[0].windspeedKmph)} km/h
           </div>
           <div style={{display:"inline", marginLeft:"20px"}}>
            Min temp: {(props.w[0].mintempC)}
           </div>
           <div style={{display:"inline", marginLeft:"20px"}}>
            Max temp: {(props.w[0].maxtempC)}
           </div>
    
         </div>
         <div style={style}>
            <div style={{display:"inline", marginLeft:"20px",color:"white" , float:"left",paddingTop:20,fontSize:15}}>
             ray UV: {(props.weather[0].uvIndex)}
            <span style={{marginRight:30,marginLeft:30}}>/</span>
            wind direction: {(props.weather[0].winddir16Point)}
            <span style={{marginRight:30,marginLeft:30}}>/</span>
            👁️Visibility in miles: {(props.weather[0].visibilityMiles)}
            <span style={{marginRight:30,marginLeft:30}}>/</span>
            👁️visibility: {(props.weather[0].visibility)}
            <span style={{marginRight:30,marginLeft:30}}>/</span>
            pressure: {(props.weather[0].pressure)}
        
            </div>
            <br-x />
            <br-x />
            <div style={{display:"inline", marginLeft:"20px",color:"white" , float:"left",paddingTop:20,fontSize:15}}>
            humidity: {(props.weather[0].humidity)}
            <span style={{marginRight:25,marginLeft:25}}>/</span>
            ☁️cloudcover: {(props.weather[0].cloudcover)}
            <span style={{marginRight:25,marginLeft:25}}>/</span>
            latitude: {(props.loca.latitude)}
            <span style={{marginRight:25,marginLeft:25}}>/</span>
            longitude: {(props.loca.longitude)}
            <span style={{marginRight:25,marginLeft:25}}>/</span>
            🌆population: {(Number(props.loca.population) as number).toLocaleString("en-US")}
        
            </div>
          </div>
         <br-x />
         <br-x />
         <div style={{width:"90%", height:70,opacity:"0.6" ,paddingLeft:20 ,paddingTop:25, direction:"ltr",color:"white" , fontSize:"15px",
           backgroundColor:"black" , marginRight:"5%" , borderRadius:"10px"}}>
                    <div   style={{width:25,height:25,float:'right',marginRight:10}}>
            <img onClick={toggleHandler2} style={styleImg2}  src="/down-arrow-svgrepo-com.svg" alt="" />
           </div>
          📅date: {(props.w[1].date)}
          <div style={{display:"inline", marginLeft:"20px"}}>
           Avg Temp C°: {(props.w[1].avgtempC)}
           </div>
           <div style={{display:"inline", marginLeft:"20px"}}>
           Avg Temp F: {(props.w[1].avgtempF)}
           </div>
           <div style={{display:"inline", marginLeft:"20px"}}>
            Min temp: {(props.w[1].mintempC)}
           </div>
           <div style={{display:"inline", marginLeft:"20px"}}>
            Max temp: {(props.w[1].maxtempC)}
           </div>
         </div>
         <div style={style2}>
         <div style={{display:"inline", marginLeft:"20px",color:"white" , float:"left",paddingTop:20,fontSize:15}}>
              moonrise: {(props.w[1].astronomy[0].moonrise)}
            <span style={{marginRight:30,marginLeft:30}}>/</span>
            moonset: {(props.w[1].astronomy[0].moonset)}
            <span style={{marginRight:30,marginLeft:30}}>/</span>
            🌄sunrise: {(props.w[1].astronomy[0].sunrise)}
            <span style={{marginRight:30,marginLeft:30}}>/</span>
            🌇sunset: {(props.w[1].astronomy[0].sunset)}
        
            </div>
            <br-x />
            <br-x />
            <div style={{display:"inline", marginLeft:"20px",color:"white" , float:"left",paddingTop:20,fontSize:15}}>
            ray UV: {(props.w[1].uvIndex)}
            <span style={{marginRight:30,marginLeft:30}}>/</span>
            🌛moon phase: {(props.w[1].astronomy[0].moon_phase)}
            </div>
         </div>
         <br-x />
         <br-x />
         <div style={{width:"90%", height:70,opacity:"0.6" ,paddingLeft:20 ,paddingTop:25, direction:"ltr",color:"white" , fontSize:"15px",
           backgroundColor:"black" , marginRight:"5%" , borderRadius:"10px"}}>
                    <div   style={{width:25,height:25,float:'right',marginRight:10}}>
            <img onClick={toggleHandler3}  style={styleImg3}  src="/down-arrow-svgrepo-com.svg" alt="" />
           </div>
           📅date: {(props.w[2].date)}
          <div style={{display:"inline", marginLeft:"20px"}}>
           Avg Temp C°: {(props.w[2].avgtempC)}
           </div>
           <div style={{display:"inline", marginLeft:"20px"}}>
           Avg Temp F: {(props.w[2].avgtempF)}
           </div>
           <div style={{display:"inline", marginLeft:"20px"}}>
            Min temp: {(props.w[2].mintempC)}
           </div>
           <div style={{display:"inline", marginLeft:"20px"}}>
            Max temp: {(props.w[2].maxtempC)}
           </div>
         </div>
         <div style={style3}>
         <div style={{display:"inline", marginLeft:"20px",color:"white" , float:"left",paddingTop:20,fontSize:15}}>
            moonrise: {(props.w[2].astronomy[0].moonrise)}
            <span style={{marginRight:30,marginLeft:30}}>/</span>
            moonset: {(props.w[2].astronomy[0].moonset)}
            <span style={{marginRight:30,marginLeft:30}}>/</span>
            🌄sunrise: {(props.w[2].astronomy[0].sunrise)}
            <span style={{marginRight:30,marginLeft:30}}>/</span>
            🌇sunset: {(props.w[2].astronomy[0].sunset)}
        
            </div>
            <br-x />
            <br-x />
            <div style={{display:"inline", marginLeft:"20px",color:"white" , float:"left",paddingTop:20,fontSize:15}}>
            ray UV: {(props.w[2].uvIndex)}
            <span style={{marginRight:30,marginLeft:30}}>/</span>
            🌒moon phase: {(props.w[2].astronomy[0].moon_phase)}
            </div>
         </div>
    
         <br/>
         <br/>
         <center style={{fontSize:"16px",fontWeight:"bolder"}}>Mohammad Ghaedi</center>
         <br/>
         <center style={{fontWeight:"500",fontSize:15}}>Prepared by the <span style={{color:"#D82828",fontWeight:"bold"}}>Turing</span> Research Team</center>
      </Window>
    </div> 
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;
   
    let res = await fetch("https://cdn.turing.team/research/api/weather/")
      let data = await res.json()
      let weather = data.current_condition
        let loca = data.nearest_area[0]
        let w = data.weather
        
  return {
    props: {
      data: global.QSON.stringify({
        weather : weather,
        loca : loca,
        w : w,
        session,
        // nlangs,
      })
    },
  }
}