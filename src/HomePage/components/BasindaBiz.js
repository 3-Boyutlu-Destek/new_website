import React, {useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactPlayer from 'react-player';
import Haber from './Haber';
import allVideos from '../Data/AllVideos';
import ilTemsilcileri from '../Data/ilTemsilcileri';
import haberler from '../Data/Haberler';
import '../../scss/components/BasindaBiz.scss';
import 'react-tabs/style/react-tabs.css';


function BasindaBiz(){
  const [videoDetail, setVideoDetail] = useState({videoUrl: allVideos[0].videoUrl, detail:allVideos[0].detail});
 return(
   <div className="BasindaBiz">
       <div className="BasindaBiz-videoDetail">
             <div className="BasindaBiz-videoDetail-content">
                    <ReactPlayer style={{width:'100%!important'}} url={videoDetail && videoDetail.videoUrl} />
                    <span className="BasindaBiz-videoDetail-detail">{videoDetail && videoDetail.detail}</span>
            </div>
       </div>
       <div className="BasindaBiz-titles">
       <Tabs className="BasindaBiz-titles-tabs" defaultactivekey="tumVideo" id="uncontrolled-tab-example">
           <TabList>
              <Tab eventkey="tumVideo" title="Tüm Videolar" key="1">
                Tüm Videolar
              </Tab>
              <Tab eventkey="ilTemsilcileri" title="İl Temsilcileri" key="2">
                İl Temsilcileri
              </Tab>
              <Tab eventkey="haberler" title="Haberler" key="3">
                Haberler
              </Tab>
           </TabList>  
           <TabPanel key="1">
               {
                  allVideos && allVideos.map(item=>(
                       <Haber imgUrl={item.imgUrl} detail={item.detail} key={item.id}
                       onClick={()=>{
                            const newVideo = { videoUrl: item.videoUrl, detail: item.detail}
                            setVideoDetail(newVideo);
                       }}/>
                   ))
               }
           </TabPanel>
           <TabPanel key="2"> {
                   ilTemsilcileri && ilTemsilcileri.map(item=>(
                       <Haber imgUrl={item.imgUrl} title={item.title} detail={item.detail} key={item.id}
                       onClick={()=>{
                        const newVideo = { videoUrl: item.videoUrl, detail: item.detail}
                        setVideoDetail(newVideo);
                   }} />
                   ))
               }
           </TabPanel>
           <TabPanel key="3"> 
               {
                  haberler && haberler.map(item=>(
                       <Haber imgUrl={item.imgUrl} title={item.title} detail={item.detail} key={item.id}
                        onClick={()=>{
                        const newVideo = { videoUrl: item.videoUrl, detail: item.detail, }
                        setVideoDetail(newVideo);
                   }} />
                   ))
                   }
           </TabPanel>
     </Tabs>
       </div>
      
   </div>
 );
}

export default BasindaBiz;