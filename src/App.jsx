import Aboutme from "./Component/Aboutme/Aboutme"
// import Header from "./Component/Header/Header"
import HeroSection from "./Component/HeroSection/HeroSection"
import Project from "./Component/Projects/Project"
import Skills from "./Component/Skills/Skills"
import Contact from "./Component/Contact/Contact"
import Footer from "./Component/Footer/Footer"
import Navbar from "./Component/Navbar/Navbar"


function App() {


  return (
    
      <div>

        <div className="double">
      <Navbar/>  
         {/* <Header/>  */}
    
          <HeroSection/>  
          </div>
        <Aboutme/> 
    <Project/>  
      
        <Skills/>     
       <Contact/>      
        <Footer/>       
        
        </div>
  
  )
}

export default App
