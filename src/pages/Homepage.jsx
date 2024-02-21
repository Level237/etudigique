import HeroRoot from "../components/heroes/Hero-root";

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
        
        </>
    )
}

export default Homepage;