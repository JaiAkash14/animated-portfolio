import { Navbar } from "./Componets/Navbar/navbar";
import"./app.scss"
import  Test  from "./Test";
import { Hero } from "./Componets/hero/Hero";
import { Parallax } from "./Componets/parallax/Parallax";
import { Services } from "./Componets/services/Services";


const App = () => {
  return <div>
    <section id="Homepage">
     <Navbar/>
     <Hero/>
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type="Services"/></section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
    {/* <Test/> */}
  </div>;
};

export default App;
