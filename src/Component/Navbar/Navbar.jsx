import { FaBars, Fatimes } from "react-icons/fa6"
import { useRef } from "react"


const  Navbar = () => {
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle ('responsive_nv')
    }
  return (
<header>
    <h3>logo</h3>
    <nav ref={navRef}>
        <a href='/#'>Home</a>
        <a href='/#'>About me</a>
        <a href='/#'>Skills</a>
        <a href='/#'>Projects</a>
        <a href='/#'>Contacts </a>

        <button onclick={showNavBar}>  <Fatimes/> </button>

    </nav>
    <button onclick={showNavBar}>  <FaBars/> </button>

</header>
  )
}  

export default Navbar
