
import HeroRoot from "../components/heroes/Hero-root.js"
import Button from "../components/ui/button.js";
import SchoolSlider from "../slider/SchoolSlider.js";

const Homepage=()=> {
  return (
    <div>
      <HeroRoot/>
      <section className="mt-20" style={{ 
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
       
         }}>

        <h1 className="max-w-3xl  text-4xl text-center font-bold  md:text-5xl xl:text-5xl text-black max-sm:text-3xl">Etudier dans les plus grandes écoles en Belgique</h1>
        
        </section>
        <section>
            <SchoolSlider/>
            <div className="text-center">
            <Button link="campus-belgique"  title="En savoir plus" color="white" type="secondary"/>
            </div>
        </section>
    </div>
  )
}

export default Homepage;
