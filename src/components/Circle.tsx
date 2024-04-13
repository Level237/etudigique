
type CircleType={
    width:string,
    height:string,
    bgColor:string,
    opacity:string,
    right :string,
    left:string,
    top:string
}
const Circle=(props:CircleType)=>{

    return (
        <>
        <div style={{ 
            position:"absolute",
            width:props.width,
            height:props.height,
            backgroundColor:props.bgColor,
            opacity:props.opacity,
            borderRadius:"100%",
            translate:"0deg",
            zIndex:-12,
            right:props.right ?? null,
            left:props.left ?? null,
            top:props.top ?? null           }}/>
        </>
    )
}

export default Circle;


