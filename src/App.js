import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import React from 'react';
import info from "./components/info";
import style from "./app.module.css";
import Nav from "./Nav";
import netflix from "./img/netflix.jpg";
import youtube from "./img/youtube.png";
import deezer from "./img/deezer.png";
import spotify from "./img/spotify.jpg";
import azure from "./img/azure.jpg";
import canva from "./img/canva.png";



function App() {
  return (
    <Router>
    <div className={style.app}>

        <Nav />
     
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path = "/info" component={info} />
      </Switch>
    </div>
    </Router>
  );
}

function Home() {
  return(
    <>
    <div className={style.container}>
            <div className={style.product}>
          <div className={style.pimg}>
              <img src={canva} alt="canva"/>
          </div>
          <div className={style.pinfo}>
              <h1>Canva Pro</h1>
              <p>Canva Pro is the premium plan of Canva that comes with additional features including unlimited storage for photos and assets. You'll also get exclusive access to 400,000 free photos, illustrations, and templates.</p><br/><br/>
              
              <a href="https://www.aliexpress.com/item/1005002751373661.html?spm=5261.ProductManageOnline.0.0.24f04edfs89RbI"><button className={style.btn}>Buy</button></a>
          </div>
      </div>
      <div className={style.product}>
          <div className={style.pimg}>
              <img src={youtube} alt="youtube"/>
          </div>
          <div className={style.pinfo}>
              <h1>Youtube Premium</h1>
              <p>YouTube Premium (formerly known as YouTube Red) is one of a few premium membership services we offer for amplifying your experience on YouTube. ... With YouTube Premium, you can watch millions of videos without interruptions by ads before and during a video, including video overlay ads.</p><br/>
              
              <a href="https://www.aliexpress.com/item/1005002728796032.html?spm=a2g0o.productlist.0.0.4c4a4bbaoPgrIu&algo_pvid=162daeb0-dbda-4b62-8363-38349d24e209&algo_expid=162daeb0-dbda-4b62-8363-38349d24e209-2&btsid=21135c3a16226976482217975e6f9a&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_"><button className={style.btn}>Buy</button></a>
          </div>
      </div>
      <div className={style.product}>
          <div className={style.pimg}>
              <img src={deezer} alt="deezer"/>
          </div>
          <div className={style.pinfo}>
              <h1>Deezer Premium</h1>
              <p>With Deezer Premium, your music is always with you - from your morning run to your dinner. You can listen to it anytime, on all your devices, even without 4G and WiFi.</p>
              <br/> 
              <p>Premium : 2.19 $</p>
              <p>Family : 3.99 $</p><br/> 
              <Link to="/info"><button className={style.btn}>Buy</button></Link>
          </div>
      </div>
      <div className={style.product}>
          <div className={style.pimg}>
              <img src={spotify} alt="spotify"/>
          </div>
          <div className={style.pinfo}>
              <h1>Spotify Premium</h1>
              <p>What You Get With Spotify Premium. You get an entirely ad free experience. ... It turns Spotify into an offline music service rather than an online music streaming service. You also get the ability to listen to higher quality audio streams.</p><br/><br/>
              <Link to="/info"><button className={style.btn}>Buy</button></Link>
          </div>
      </div>
      <div className={style.product}>
          <div className={style.pimg}>
              <img src={azure} alt="azure"/>
          </div>
          <div className={style.pinfo}>
              <h1>Microsoft Azure</h1>
              <p>Access to Microsoft Azure cloud services and learning resources – no credit card required</p>
              <br/>
              <p>Benefit: Free access to 25+ Microsoft Azure cloud services plus $100 in Azure credit.</p><br/><br/>
              <Link to="/info"><button className={style.btn}>Buy</button></Link>
          </div>
      </div>
      <div className={style.product}>
<div className={style.pimg}>
    <img src={netflix} alt="netflix"/>
</div>
<div className={style.pinfo}>
    <h1>Netflix Premium account</h1>
    <p>A standard Netflix subscription offers HD streams and lets subscribers stream on two devices, while a premium subscription offers Ultra HD (4K) streams and allows streams across four devices.</p><br/><br/>
    <Link to="/info"><button className={style.btn}>Buy</button></Link>
</div>
</div>
    </div>
    <div className={style.test}/>
    </>
  )
}


export default App;
