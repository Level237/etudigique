import { useEffect } from "react";
import ServiceSlide from "../../components/sections/ServiceSlide";
import img1 from "../../assets/img/boss.jpg"
import Button from "../../components/ui/button";

const Equivalence=(props)=>{

  useEffect(()=>{
    document.title=props.title
  },[])
    return (
        <>
        <section className="mb-[400px] bg-[#0000000a]">
        <ServiceSlide title="Equivalence de Diplome"/>

        <section className=" mt-5 p-10">
        <div class=" flex flex-col items-center justify-center ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#cc3333" class="w-6 h-6 text-secondary">
        <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd"></path>
      </svg>
      
      <h2 class="my-8 text-2xl font-bold flex items-center justify-center  text-black md:text-4xl text-center">
      Etudigigue vous facilite la vie !
      </h2>
      <p class=" text-gray-600 md:w-2/3 lg:w-3/7">Obtenir l'équivalence de votre diplôme est une étape indispensable pour poursuivre vos études en Belgique. Cette procédure peut s'avérer complexe et fastidieuse, mais Etudigigue est là pour vous simplifier la vie !</p>
    </div>
    <div className="flex mt-4 items-center justify-center">
      <div>

      </div>
      <div className="grid grid-cols-3 gap-3">
      <img className="w-40 rounded-s-3xl rounded-e-3xl" src={img1}/>
      <img className="w-40 rounded-s-3xl rounded-e-3xl" src={img1}/>
      <img className="w-40 rounded-s-3xl rounded-e-3xl" src={img1}/>
    
    </div>
    <div></div>
    </div>
    <div className='mt-5 flex items-center justify-center'>
      <Button type="secondary" title="Passez un entretien"/>
    </div>
        </section>
        <section className="flex items-center bg-[#121533] h-[200px]" >

        </section>
        </section>
        
        
        </>
    )
}

export default Equivalence;