import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
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
    <div className={style.container}>
      <div className={style.product}>
          <div className={style.pimg}>
              <img src={netflix} alt="netflix"/>
          </div>
          <div className={style.pinfo}>
              <h1>Netflix Premium account</h1>
              <p>A standard Netflix subscription offers HD streams and lets subscribers stream on two devices, while a premium subscription offers Ultra HD (4K) streams and allows streams across four devices.</p><br/><br/>
              <button className={style.btn}>Buy</button>
          </div>
      </div>
      <div className={style.product}>
          <div className={style.pimg}>
              <img src={youtube} alt="youtube"/>
          </div>
          <div className={style.pinfo}>
              <h1>Youtube Premium</h1>
              <p>YouTube Premium (formerly known as YouTube Red) is one of a few premium membership services we offer for amplifying your experience on YouTube. ... With YouTube Premium, you can watch millions of videos without interruptions by ads before and during a video, including video overlay ads.</p><br/>
              <button className={style.btn}>Buy</button>
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
              <br/> 
              <p>Family : 3.99 $</p>
              <button className={style.btn}>Buy</button>
          </div>
      </div>
      <div className={style.product}>
          <div className={style.pimg}>
              <img src={spotify} alt="spotify"/>
          </div>
          <div className={style.pinfo}>
              <h1>Spotify Premium</h1>
              <p>What You Get With Spotify Premium. You get an entirely ad free experience. ... It turns Spotify into an offline music service rather than an online music streaming service. You also get the ability to listen to higher quality audio streams.</p><br/><br/>
              <button className={style.btn}>Buy</button>
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
              <button className={style.btn}>Buy</button>
          </div>
      </div>
      <div className={style.product}>
          <div className={style.pimg}>
              <img src={canva} alt="canva"/>
          </div>
          <div className={style.pinfo}>
              <h1>Canva Pro</h1>
              <p>Canva Pro is the premium plan of Canva that comes with additional features including unlimited storage for photos and assets. You'll also get exclusive access to 400,000 free photos, illustrations, and templates.</p><br/><br/>
              <button className={style.btn}>Buy</button>
          </div>
      </div>
    </div>
  )
}


export default App;
