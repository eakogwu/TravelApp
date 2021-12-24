import {Fragment, useEffect} from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Recommend from "./components/Recommend";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import scrollreveal from "scrollreveal";


function App(){

  useEffect( () => {
    const sr = scrollreveal({
      origin:"top",
      distance: "80px",
      duration:2000,
      reset:true
    });
    sr.reveal(
      `
      nav,
      #hero,
      #services,
      #recommend,
      #testimonials,
      footer, 
      `,
      {
        opacity:0,
        interval:300
      }
    )

  },[] )

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
