import {FiPhone, FiMail, FiMapPin} from "react-icons/fi";

import '../styles/components/informationcontainer.sass';


const InformationContainer = () => {
  return ( 
  <section id='information'>
    <div className='info-card'>
        <FiPhone id='phone-icon' />
        <div>
            <h3>Telefone</h3>
            <p>(51)99505-4271</p>
        </div>
    </div>
    <div className='info-card'>
        <FiMail id='email-icon' />
        <div>
            <h3>A-mail</h3>
            <p>Clebersonschutz@gmail.com</p>
        </div>
    </div>
    <div className='info-card'>
        <FiMapPin id='pin-icon' />
        <div>
            <h3>Localização</h3>
            <p>Cachoeirinha / RS</p>
        </div>
    </div>
  </section> 
    
  );
};

export default InformationContainer;