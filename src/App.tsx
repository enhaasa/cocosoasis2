import Section from './components/Section';
import Home from './components/home/Home';
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Modal from './components/common/Modal';
import { useState } from 'react';


function App() {


  const [ modal, setModal ] = useState<any | null>(null);
  function handleModal(content: any | null):void {
      setModal(content);  
  }

  const sections = [
    {
      title: null,
      id: "home",
      content: <Home handleModal={handleModal}/>
    },
    {
      title: "Menu",
      id: "menu",
      content: <Menu handleModal={handleModal}/>
    },
    {
      title: "Rules",
      id: "rules",
      content: null
    },
    {
      title: "Services",
      id: "services",
      content: null
    },
    {
      title: "About",
      id: "about",
      content: <About handleModal={handleModal}
      />
    }
  ];

  return (
    <>
      {modal && 
      <Modal handleClose={() => {handleModal(null)}}>
        {modal}  
      </Modal>}
      
      <main>
        {sections.map(section => (
          <Section 
            title={section.title} 
            id={section.id}
            content={section.content}
          />
        ))}
      </main>
      <div className="background" />
    </>
  );
}

export default App;
