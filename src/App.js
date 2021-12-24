import {Fragment} from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";


function App(){
  return (
   <Fragment>
     <Navbar/>
     <Hero/>
     <Services/>
   </Fragment>
  );
}

export default App;
