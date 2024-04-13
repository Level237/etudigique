import Wave from "react-wavify"

type WaveType={
    deg:number,
    color:string,
    paused:boolean,
    opacity:number,
    amplitude:number,
    point:number
}
const OwnWave=(props:WaveType)=>{

 
    return (
        <>
        <div  style={{ 
        position:"absolute",
        left: 0,
        right:0,
        display: "flex",
        zIndex: -1,
        transform: `rotate(${props.deg}deg)`,
     }} className="h-[125vh] max-sm:h-[100vh]">
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