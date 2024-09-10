import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';
import { url } from 'inspector';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  let name = "خوش آمدید"


  return (
    <div style={{ direction: "ltr", minHeight: "11vh", }}>
      <br-x />
      <Window title={name} style={{ minHeight: 400, margin: 10, width: "calc(100% - 20px)",
         backgroundImage:"url(https://cdn.ituring.ir/research/18/jakub-kriz-06lv_LBX3pk-unsplash%20copy.webp)" , backgroundRepeat:"no-repeat",
         backgroundSize:"cover", backgroundPosition:"center"}} >
          <br-x/>
          <br-x/>
          
          <c-x>
            <f-x style={{fontSize:16,paddingLeft:20}}>
              Weather 
            </f-x>
          <br/>
          <br-x/>
            <c-cc>
            <f-cse>
              <f-cse style={{width:150, height:70,fontSize:20,marginRight:20,
                backgroundColor:"darkgray",opacity:"1",borderRadius:15}}>
              <img style={{width:50,height:50, marginRight:15}} src='https://cdn.ituring.ir/research/18/temp-high.svg'/>
              {(props.data.current_condition[0].FeelsLikeC)}C°
          
                </f-cse>
              <f-cse style={{width:150, height:70,fontSize:20,marginRight:20,
                backgroundColor:"darkgray",opacity:"1",borderRadius:15}}>
                  <img style={{width:40,height:40 , marginRight:15}} src='https://cdn.ituring.ir/research/18/water.svg'/>
                  {(props.data.current_condition[0].humidity)}%
                </f-cse>

            </f-cse>
       
            </c-cc>
            <br-x/>
            <br-x/>    <br-x/>
            <br-x/>
            <c-cc style={{fontSize:16}}>
              copyright
            </c-cc>
          </c-x>
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

    let res = await fetch("https://cdn.ituring.ir/research/api/weather/")
    let data = await res.json()

  return {
    props: {
      data: global.QSON.stringify({
        session,
        data,
        // nlangs,
      })
    },
  }
}