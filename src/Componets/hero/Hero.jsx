import "./hero.scss"
import {motion} from "framer-motion"

const textVarients = {
  initial: {
    x: -500,
    opacity: 0,

  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },

  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      repeat:Infinity,
      duration:2,
    },
  },

};
const sliderVarients = {
  initial: {
    x: 0,

  },
  animate: {
    x: "-220%",
    transition: {
      repeat:Infinity,
      repeatType:"mirror",
      duration: 20,
    },

  },

};
export const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVarients} initial="initial" animate="animate">
          <motion.h2 variants={textVarients}>JAI AKASH</motion.h2>
          <motion.h1 variants={textVarients}>Web developer <br /> and UI designer</motion.h1>
          <motion.div  variants={textVarients}className="buttons">
            <motion.button variants={textVarients}>See the Latest Works</motion.button>
            <motion.button variants={textVarients}>Contact Me </motion.button>
          </motion.div>
          <motion.img variants={textVarients} animate="scrollButton" src="/scroll.png" />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVarients} initial="initial" animate="animate">
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img style={{ height: "100%" }} src="hero.png" />
      </div>
    </div>
  )
}
