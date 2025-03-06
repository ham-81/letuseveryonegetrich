import './App.css';
import diamond from './assets/diamond1.png'
import logo from './assets/logo.png'

function App() {
  return (
    <div className="top-left" style = {{background: "rgb(148,187,233)", background: "linear-gradient(51deg, rgba(148,187,233,1) 20%, rgba(238,174,202,1) 100%)", overflowX: 'hidden', height: "100vh", width: "100vw", margin: 0, padding: 0}}>
      <img src={logo} style={{width: '30px', height:'30px', position: 'relative', top: '60px', left:'60px'}} alt='the concept is like spreading your riches and also looks like a flower so its kinda like a garden of riches so youve got a lot but everyone else can also enjoy it how nice'/>
      <h4 style={{position: 'relative', left:'100px', top:'10px'}}>the letuseveryonegetrich project</h4>
      <h1 className="poppins-regular" style={{ color: "#000000", position: 'relative', top: 80, left: 100, fontSize: "75px"}}>Let Us Everyone</h1>
      <h1 className="tajawal-bold" style={{ color: "#000000", position: 'relative', top: -20, left: 100, fontSize: "100px"}}>Become Rich</h1>
      <img src = {diamond} width="300" alt="diamond yes" style={{position: 'relative', top: "-450px", right: "-750px", width: "500px", height: "500px"}}/>
      <button style={{backgroundColor: 'rgba(255, 255, 255, 0.5)', transition: '0.3s', position: 'absolute', top: '430px', left: '200px', borderRadius: '50px', height: '40px', width: '150px'}} onMouseOver={(e) => e.target.style.backgroundColor = "rgba(255, 255, 255, 1.0)"} onMouseOut={(e) => e.target.style.backgroundColor = "rgba(255, 255, 255, 0.5)"}>Count Me In</button>
      <button style={{backgroundColor: "rgba(255, 255, 255, 0.5)", transition: "0.3s", position: 'absolute', top: '430px', left: '390px', borderRadius: '50px', height: '40px', width: '150px'}} onMouseOver={(e) => e.target.style.backgroundColor = "rgba(255,255,255, 1.0)"} onMouseOut={(e) => e.target.style.backgroundColor = "rgba(255, 255, 255, 0.5"}>I'm Already Rich</button>
      <h2>The Vision</h2>
    </div>
  );
}

export default App;
