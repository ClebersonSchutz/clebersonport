import MainContent from "./components/MainContent";
import SideBar from "./components/Sidebar";
import "./styles/components/app.sass";

function App() {

  return (
    <div id='portifolio'>
      <h1>Cleberson Schutz</h1>
      <SideBar />
      <MainContent />
    </div>
  )
}

export default App
