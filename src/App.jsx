import { Navbar } from "./Componets/Navbar/navbar";
import"./app.scss"
import  Test  from "./Test";
import { Hero } from "./Componets/hero/Hero";
import { Parallax } from "./Componets/parallax/Parallax";
import { Services } from "./Componets/services/Services";
import { Portfolio } from "./Componets/Portfoilio/Portfolio";
import { Contact } from "./Componets/Contact/Contact";
import { Cursor } from "./Componets/Cursor/Cursor";


const App = () => {
  return <div>
    <Cursor/>
    <section id="Homepage">
     <Navbar/>
     <Hero/>
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type="Services"/></section>
    <Portfolio/>
    <section id="Contact"><Contact/></section>
   
  </div>;
};

export default App;
