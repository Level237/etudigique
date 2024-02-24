import {motion} from "framer-motion"

const Button=(props)=>{

    const bgBtn=`bg-[${props.bgColor}]`
    const btnPrimary= `text-${props.color}`
    console.log(bgBtn);
    const classeBtn="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center   rounded-lg   focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 " + bgBtn + " " + btnPrimary
    return (
        <>
        <motion.a 
        whileHover={{ 
            background:"#ffcc00 none",
            color:"black",
            rotate:"1deg",
            scale:1.01
         }}
        href="#" className={classeBtn}>
                {props.title}
                <div style={{ 
                    marginLeft:"3px"
                 }}>
                    {props.icon ?? null}
                </div>
                
            </motion.a>
        </>
    )
}

export default Button;