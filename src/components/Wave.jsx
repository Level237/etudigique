import Wave from "react-wavify"
const OwnWave=(props)=>{

 
    return (
        <>
        <div  style={{ 
        position:"absolute",
        left: 0,
        right:0,
        height: "125vh",
        display: "flex",
        zIndex: -1,
        transform: `rotate(${props.deg}deg)`,
     }}>
        <Wave
          fill={props.color}
          paused={props.paused}
          opacity={props.opacity}
          options={{
            height: 80,
            amplitude: props.amplitude,
            speed: 0.2,
            points: props.point,
            
          }}
        />
      
    </div>
        </>
    )
}

export default OwnWave;