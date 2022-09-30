import React,{Component} from 'react';
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import OurServices from './Components/OurServices';

class App extends Component {
	render() {
	  return (
		<>
		<Navbar/>
		<OurServices />
		<Contact/>
		<About/>
		</>
	  );
	}
  }
  
  export default App;