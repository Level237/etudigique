import { initialStore } from "../../store/store"
import {motion} from "framer-motion"

const Modal=()=>{

    
    const selectUniversity=initialStore((state)=>state.selectUniversity)
    const closeCard=initialStore((state)=>state.closeCard)
   
    return (
        <>
     <div id="static-modal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className="max-sm:flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full  md:inset-0 h-[calc(100%)] bg-[#000000d7] max-h-full">
    <motion.div
     initial={{ 
       opacity:0
     }}

     animate={{ 
        y:0,
        opacity:1
      }}

      exit={{ 
        y:-200,
        opacity:0
       }}
    className="relative p-4 w-full max-w-2xl max-h-full">
      
        <div className="relative bg-white max-sm:w-[90vw] rounded-lg shadow dark:bg-gray-200"
       
         
        >
          
            <div className="flex relative items-center flex-col justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <button onClick={closeCard} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
                <div>
                    <img src={selectUniversity.src} className="h-[45vh] w-[100vw] max-sm:h-[150px] max-sm:w-[250px] "/>
                </div>
                <h3 className=" mt-3 text-xl font-semibold text-gray-90">
                {selectUniversity.title}
                </h3>
                
            </div>
          
            <div className="p-4 md:p-5 space-y-4">
               
            </div>
           
            <div className="flex justify-center items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="static-modal" type="button" className="text-black bg-[#ffcc33] hover:bg-[#cc3333] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   dark:focus:ring-blue-800">Postuler</button>
                <button onClick={closeCard} data-modal-hide="static-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-[#ffff] focus:outline-none  rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-black hover:bg-[#ffcc33] focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 bg-[#cc3333]  dark:border-gray-600">Annuler</button>
            </div>
        </div>
    </motion.div>
</div>
        </>
    )
}

export default Modal