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
          paused={false}
          opacity="0.70"
          options={{
            height: 80,
            amplitude: 10,
            speed: 0.2,
            points: 18,
            
          }}
        />
      
    </div>
        </>
    )
}

export default OwnWave;