import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';
import Avatar from '../img/clebin.png';

import '../styles/components/Sidebar.sass';

const Sidebar = () => {
  return <aside id='sidebar'>
    <img src={Avatar} alt="Cleberson Schutz"/>
    <p className="title">Desenvolvedor</p>
    <SocialNetworks />
    <InformationContainer />
    <a href="" className="btn">
      Download curriculo
    </a>
  </aside>
}

export default Sidebar