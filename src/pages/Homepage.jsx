import HeroRoot from "../components/heroes/Hero-root";
import SchoolSlider from "../components/slider/SchoolSlider";
import Button from "../components/ui/button";
import campus from "../assets/img/campus.jpg"
import SlideLeftToRight from "../components/sections/SlideLeftToRight";
const Homepage=()=>{

    return (
        <>
        <HeroRoot/>
        <section className="mt-20" style={{ 
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
         }}>

        <h1 class="max-w-3xl mb-4 text-4xl text-center font-bold  md:text-5xl xl:text-5xl text-black">Etudier dans les plus grandes écoles en Belgique</h1>
        
        </section>
        <section>
            <SchoolSlider/>
            <div className="text-center">
            <Button title="En savoir plus" color="white" bgColor="#cc3333"/>
            </div>
        </section>
         <section className="mt-20 mb-20" style={{ 
            marginTop:"150px"
          }}>
         
          <SlideLeftToRight image={campus} title="Accompagnement personnalisé pour l'obtention  de votre visa d'études en Belgique" content={<p class="my-8 text-gray-600text-gray-300">
          Étudier en Belgique est un rêve pour de nombreux étudiants. Offrant un système éducatif de qualité des universités renommées et un cadre de vie agréable, la Belgique attire chaque année des milliers d'étudiants du monde entier.
          <br/> <br/>Chez Etudigigue, nous comprenons les défis et les complexités liés à l'obtention d'un visa d'études.  Dans cette optique, nous vous accompagnons jusqu'à son obtention.

          </p>}
          
          />
         </section>
        
        </>
    )
}

export default Homepage;