
import { Link } from "react-router-dom";


type btnType={
    type:string,
    link:string,
    title:string,
    color:string,
    icon?:React.ReactNode
}
const Button=(props:btnType)=>{

    let bgBtn="#000000"
    let colorBtn=""
  if(props.type==="primary"){
    bgBtn="#ffcc00"
    colorBtn="black"
  }else if(props.type==="secondary"){
    bgBtn="#cc3333"
    colorBtn="white"
  }else if(props.type==="default"){
    bgBtn="#000000"
    colorBtn="white"
  }
    const classeBtn=`inline-flex items-center bg-[${bgBtn}] text-${colorBtn} justify-center px-5 py-3 mr-3 text-base font-medium text-center   rounded-lg   focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 `
    return (
        <>
        <Link
        
        to={props.link} className={classeBtn}>
                {props.title}
                <div style={{ 
                    marginLeft:"3px"
                 }}>
                    {props.icon ?? null}
                </div>
                
            </Link>
        </>
    )
}

export default Button;