import { useState } from "react"
import {motion} from "framer-motion"
import  {Links} from "./Links/Links"
import  {Togglebutton}  from "./ToggleButtons/Togglebutton"
import "./sidebar.scss"

export const Sidebar = () => {
    const [ open , setOpen] = useState(false)

    const variants = {
        open:{
            clipPath:"circle(1200px at 50px 50px)",
            transition:{
                type:"spring",
                stiffness:"20",
            },
        },
        closed:{
            clipPath:"circle(30px at 50px 50px)",
            transition:{
                delay:0.5,
                type:"spring",
                stiffness:400,
                damping:40,
            },

        },
    };
  return (
    <motion.div className="sidebar" variants={variants} animate={open ? "open":"closed"}>
        <motion.div className="bg">
            <Links/>
        </motion.div>
        <Togglebutton setOpen={setOpen}/>
    </motion.div>
  )
}
