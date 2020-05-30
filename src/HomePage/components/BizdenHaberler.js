import React, {useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReactPlayer from 'react-player';
import Haber from './Haber';
import allVideos from '../Data/AllVideos';
import ilTemsilcileri from '../Data/ilTemsilcileri';
import haberler from '../Data/Haberler';
import '../../scss/components/BizdenHaberler.scss';


function BizdenHaberler(){
  const [videoDetail, setVideoDetail] = useState({title:allVideos[0].title, videoUrl: allVideos[0].videoUrl, detail:allVideos[0].detail, link: allVideos[0].link});

 return(
   <div className="BizdenHaberlerAll">
       <div className="BizdenHaberlerAll-videoDetail">
             <div className="Video-content BizdenHaberlerAll-videoDetail-content">
                    <span className="BizdenHaberlerAll-videoDetail-title">{ videoDetail && videoDetail.title}</span>
                    <ReactPlayer url={videoDetail && videoDetail.videoUrl} />
                    <span className="BizdenHaberlerAll-videoDetail-detail">{videoDetail && videoDetail.detail}</span>
                    <a className="BizdenHaberlerAll-videoDetail-link" href={videoDetail && videoDetail.link} target="_blank">{videoDetail.link}</a>
            </div>
       </div>
       <div className="BizdenHaberlerAll-titles">
       <Tabs className="BizdenHaberlerAll-titles-tabs" defaultActiveKey="tumVideo" id="uncontrolled-tab-example">
           <TabList>
              <Tab eventKey="tumVideo" title="Tüm Videolar" key="1">
                Tüm Videolar
              </Tab>
              <Tab eventKey="ilTemsilcileri" title="İl Temsilcileri" key="2">
                İl Temsilcileri
              </Tab>
              <Tab eventKey="haberler" title="Haberler" key="3">
                Haberler
              </Tab>
           </TabList>  
           <TabPanel>
               {
                  allVideos && allVideos.map(item=>(
                       <Haber imgUrl={item.imgUrl} title={item.title} detail={item.detail} key={item.id}
                       onClick={()=>{
                            const newVideo = { title:item.title, videoUrl: item.videoUrl, detail: item.detail, link: item.link}
                            setVideoDetail(newVideo);
                       }}/>
                   ))
               }
           </TabPanel>
           <TabPanel> {
                   ilTemsilcileri && ilTemsilcileri.map(item=>(
                       <Haber imgUrl={item.imgUrl} title={item.title} detail={item.detail} key={item.id}
                       onClick={()=>{
                        const newVideo = { title:item.title, videoUrl: item.videoUrl, detail: item.detail, link: item.link}
                        setVideoDetail(newVideo);
                   }} />
                   ))
               }
           </TabPanel>
           <TabPanel> 
               {
                  haberler && haberler.map(item=>(
                       <Haber imgUrl={item.imgUrl} title={item.title} detail={item.detail} key={item.id}
                        onClick={()=>{
                        const newVideo = { title:item.title, videoUrl: item.videoUrl, detail: item.detail, link: item.link}
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

export default BizdenHaberler;