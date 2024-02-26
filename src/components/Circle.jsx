
const Circle=(props)=>{

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
            right:props.right ?? null,
            left:props.left ?? null,
            top:props.top ?? null           }}/>
        </>
    )
}

export default Circle;

