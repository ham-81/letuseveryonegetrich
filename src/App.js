import { useRef, useState, useEffect} from 'react'
import './App.css';
import smoothOperator from './assets/sainz.png'
import diamond from './assets/diamond1.png'
import logo from './assets/logo.png'

function App() {
  const targetRef = useRef(null);
  const targetRef2 = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({behavior: 'smooth'})};

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {threshold: 0.3}
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    if (targetRef2.current) {
      observer.observe(targetRef2.current);
    }

    return () => observer.disconnect();
  }, []
  );

  return (
    <div className="top-left" style = {{background: "rgb(148,187,233)", background: "linear-gradient(51deg, rgba(148,187,233,1) 20%, rgba(238,174,202,1) 100%)", overflow: 'auto', height: "100vh", width: "100vw", margin: 0, padding: 0}}>
      <img className="pop-up" src={logo} style={{width: '30px', height:'30px', position: 'relative', top: '60px', left:'60px'}} alt='the concept is like spreading your riches and also looks like a flower so its kinda like a garden of riches so youve got a lot but everyone else can also enjoy it how nice'/>
      <h4 className="pop-up" style={{position: 'relative', left:'100px', top:'10px'}}>the letuseveryonegetrich project</h4>
      <h1 className="poppins-regular pop-up" style={{ color: "#000000", position: 'relative', top: 80, left: 100, fontSize: "75px"}}>Let Us Everyone</h1>
      <h1 className="tajawal-bold pop-up" style={{ color: "#000000", position: 'relative', top: -20, left: 100, fontSize: "100px"}}>Become Rich</h1>
      <img className="pop-up" src = {diamond} width="300" alt="diamond yes" style={{position: 'relative', top: "-450px", right: "-750px", width: "500px", height: "500px"}}/>
      <button onClick={() => scrollToSection(targetRef2)} className="pop-up" style={{backgroundColor: 'rgba(255, 255, 255, 0.5)', transition: '0.3s', position: 'absolute', top: '430px', left: '200px', borderRadius: '50px', height: '40px', width: '150px'}} onMouseOver={(e) => e.target.style.backgroundColor = "rgba(255, 255, 255, 1.0)"} onMouseOut={(e) => e.target.style.backgroundColor = "rgba(255, 255, 255, 0.5)"}>Count Me In</button>
      <button onClick={() => scrollToSection(targetRef)} className="pop-up" style={{backgroundColor: "rgba(255, 255, 255, 0.5)", transition: "0.3s", position: 'absolute', top: '430px', left: '390px', borderRadius: '50px', height: '40px', width: '150px'}} onMouseOver={(e) => e.target.style.backgroundColor = "rgba(255,255,255, 1.0)"} onMouseOut={(e) => e.target.style.backgroundColor = "rgba(255, 255, 255, 0.5"}>I'm Already Rich</button>
      <div ref = {targetRef} style={{position: 'relative', top: '0px'}}>
        <h1 className='poppins-regular' style={{position: 'relative', top: '-300px', left: '100px'}}>Things you can do with your money</h1>
        <ol className='poppins-regular' style={{position: 'relative', top:'-280px', left:'100px'}}>
          <li>Own an F1 team</li>
          <li>Play valorant and have cheetos</li>
          <li>Call 2pac for a house party</li>
          <li>Sign Sainz back to Ferrari</li>
          <li>Dine with that lady from animal and get absolutely confused <br />trying to dissect what she was doing in the movie</li>
          <li>Get a pet tiger</li>
          <li>Go to Fiji with Mr. Black and Mr. White</li>
          <li>Build a backyard theme park</li>
        </ol>
        <img src={smoothOperator} style={{position: 'absolute', width: '400px', height: '500px', top:'-400px', right:'80px', borderRadius: '50px'}} alt='helmet hair'></img>        
      </div>
      <div ref={targetRef2}>
        <h1 className={isVisible? 'slide-in-from-left poppins-regular' : ''} style={{position: 'relative', top: '20px', left: '100px'}}>Come meet us (pls)</h1>
        <h3 className={isVisible? 'slide-in-from-left outfit' : ''} style={{position: 'relative', top:'-40px', left: '600px'}}>CR2</h3>
        <p className={isVisible? 'slide-in-from-left poppins-regular' : ''} style={{position: 'relative', top:'-30px', left:'600px'}}>LHC-C<br />During BRB class</p>
        <h3 className={isVisible? 'slide-in-from-left outfit' : ''} style={{position: 'relative', top:'-155px', left: '850px'}}>SOCIAL MEDIA</h3>
        <a href='https://www.instagram.com/_.jessicamariam/' target='_blank' rel='noopener noreferrer' className={isVisible? 'slide-in-from-left poppins-regular' : ''} style={{position: 'relative', top:'-142px', left:'850px'}}>juicyka IG</a>
        <a href='https://www.instagram.com/juicyka._/' target='_blank' rel='noopener noreferrer' className={isVisible? 'slide-in-from-left poppins-regular' : ''} style={{position:'relative', top:'-120px', left:'773px'}}>jessica IG</a>
        <p className={isVisible? 'slide-in-from-left montserrat-bold' : ''} style={{position: 'relative', top: '-60px', left:'600px'}}>ok byeeeeeeeeee</p>
      </div>
      <div style={{height: '100px'}}></div>
    </div>
  );
}

export default App;
