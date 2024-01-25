import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/12437649/pexels-photo-12437649.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 2,
        title: "Next.js Blog",
        img: "https://images.pexels.com/photos/3063362/pexels-photo-3063362.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 3,
        title: " Vanilla JS App",
        img: "https://images.pexels.com/photos/10489277/pexels-photo-10489277.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 4,
        title: "Music App",
        img: "https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])


    return <section ref={ref}>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer">
                    <img src={item.img} />
                </div>
                <motion.div className="textContainer" >
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
            </div>
        </div>
    </section>;
};
export const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div className="portfolio" ref={ref}>

            <div className="progress">
                <h1>
                    Featured Works
                </h1>
                <motion.div style={{ scaleX: scaleX }} className="progressBar"></motion.div>

            </div>

            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}

        </div>
    )
}



