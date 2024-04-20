import {  useState } from 'react'
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';
const  Contact=()=> {

    
    const [showMessage,setShowMessage]=useState<boolean>(false);
    const SERVICE_ID = "service_bwhu0oq";
const TEMPLATE_ID = "template_9oi3gbi";
const PUBLIC_KEY = "_9zAUz5CyhVscPzRE";

const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setShowMessage(true)
        //alert('Message Sent Successfully')
      }, (error) => {
        console.log(error.text);
        alert('Something went wrong!')
      });
    e.target.reset()
  };

  return (
    <>
    <Helmet>
  <title>Contact</title>
  <meta name="description" content="Contactez Etudigique pour tout vos services d'immigration étudiant.
" />
<meta property="og:title" content="Contact" />
  <meta property="og:description" content="Contactez Etudigique pour tout vos services d'immigration étudiant" />
  <meta property="og:image" content="/campus.jpg" />
  <meta property="og:url" content="etudigique.com/contactez-nous" />
  <meta property="og:type" content="website" />

</Helmet>
    <section className="bg-[#0000000a]">
    <section  className={`relative h-[70vh] bg-center max-sm:mb-10  bg-cover bg-[url('assets/img/admission/admission.jpg')] mb-40`}>
        <div  className="flex items-center justify-center absolute inset-0 bg-[#121533]  w-100 opacity-[0.8]">
          
        </div>
        <div  className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold text-[#ffcc33]"> Contactez nous</h2>
        <p className="text-center text-white mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's <br/>standard dummy text ever since the
        1500s </p>
        </div>
        </section>
        <section className='mx-40 pb-40 max-sm:mx-5'>
        
            <div>
                <form onSubmit={handleOnSubmit}>
                    {showMessage && <div className="bg-[#ffcc33] mb-5 p-5 shadow-lg max-sm:hidden">Votre message à été envoyé avec succès</div>}
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Nom</label>
            <input type="text" name='first_name' id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 max-sm:p-5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required />
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 text-black">Prenom</label>
            <input type="text" name='last_name' id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Last name" required />
        </div>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 text-black">Email</label>
            <input type="email" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" />
        </div>
        <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-90">Pays</label>
            <select name='country' id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choisir un pays</option>
    <option value="Cameroun">Cameroun</option>
    <option value="Senegal">Senegal</option>
    <option value="Mali">Mali</option>
    <option value="Congo">Congo</option>
    <option value="Gabon">Gabon</option>
    <option value="Guinée">Guinée</option>
    <option value="Europe">Europe</option>
    <option value="Amerique">Amerique</option>
    <option value="Autres">Autres</option>
  </select>
        </div>
        <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-90">Services</label>
            <select name='services' id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choisir un service</option>
    <option value="Equivalence de diplome">Equivalence de diplome</option>
    <option value="Service d'admission">Service d'Admission</option>
    <option value="Campus Belgique">Campus Belgique</option>
    <option value="Demande de Visa">Demande de visa</option>
  </select>
        </div>
        <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-90">Numéro de Téléphone</label>
            <input type="tel" name='phone' placeholder='enter your phone' id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
        </div>
         <div className='flex-1'>
         <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Votre message</label>
<textarea id="message" name='message' placeholder='enter your message' required rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400"></textarea>
         </div>



    </div>
   
   
   
    <div className='flex justify-center '>
    <button type="submit" className="text-black  bg-[#ffcc33] hover:bg-[#cc3333] hover:text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  ">Envoyer</button>
    </div>
   
</form>
            </div>


        </section>
        </section>
    </>
  )
}

export default Contact