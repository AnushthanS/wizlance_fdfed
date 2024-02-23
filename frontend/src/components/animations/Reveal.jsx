import { useRef, useEffect } from "react";
import {motion, useInView, useAnimation} from "framer-motion";

function Reveal({children, width}) {

    const ref = useRef(null);
    const isInview = useInView(ref, {once: true});
    const mainControls = useAnimation();
    const slideControls = useAnimation();
    useEffect(() => {
        if(isInview){
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInview]);

  return (
    <div ref={ref} className={`relative w-${width}`}>
        <motion.div
        variants={{
            hidden: {
                opacity: 0,
                y: 75,
            },
            visible: {
                opacity: 1,
                y: 0,
            }
        }}

        initial="hidden"
        animate={mainControls}
        transition={{
            duration: 0.75,
            ease: "easeInOut",
            dealy: 0.25
        }}
        >
            {children}
        </motion.div>

        <motion.div
        variants={{
            hidden:{
                left: "0"
            },
            visible:{
                left: "100%"
            }
        }}

        initial="hidden"
        animate={slideControls}
        transition={{ duration: 1, ease: "easeIn" }}
        className="absolute top-4 bottom-4 left-0 right-0 bg-blue-400 z-20"
        ></motion.div>
    </div>
  )
}

export default Reveal