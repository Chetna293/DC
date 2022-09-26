import React,{Component} from 'react';
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";

class App extends Component {
	render() {
	  return (
		<>
		<Navbar/>
		<Contact/>
		<About/>
		</>
	  );
	}
  }
  
  export default App;