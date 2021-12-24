import {Fragment} from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Recommend from "./components/Recommend";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


function App(){
  return (
   <Fragment>
     <Navbar/>
     <Hero/>
     <Services/>
     <Recommend/>
     <Testimonials/>
     <Footer/>
     <ScrollToTop/>
   </Fragment>
  );
}

export default App;
