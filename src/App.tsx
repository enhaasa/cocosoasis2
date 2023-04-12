import Section from './components/Section';
import Home from './components/home/Home';
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Modal from './components/common/Modal';
import { useState, useEffect, useRef } from 'react';
import getExternal from './getExternal';
import { getNextOpening } from './commonFunctions';
import { OpeningType } from './commonTypes';


function App() {


  const [ modal, setModal ] = useState<any | null>(null);
  function handleModal(content: any | null):void {
      setModal(content);  
  }

  const [ nextOpening, setNextOpening ] = useState<OpeningType | null>(null);
  useEffect(() => {
    getExternal.db("getOpenings").then((data: OpeningType[]) => {
      setNextOpening(getNextOpening(data));
  })
  }, [])

  const sections = [
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
    },
    {
      title: "Partners",
      id: "partners",
      content: null
    }
  ];

  return (
    <>
      {modal && <Modal handleClose={() => {handleModal(null)}}>{modal}</Modal>}
      
      <div className="navbar">
          {sections.map((section: any) => (
              <a href={`#${section.id}`} key={`${section.title}link`}>{section.title}</a>
          ))}
      </div>
      
      <main>

      <Section 
        title={null}
        id={"home"}
        content={<Home handleModal={handleModal} nextOpening={nextOpening} sections={sections}/>}
      />
        
        {sections.map(section => (
          <Section 
            title={section.title} 
            id={section.id}
            content={section.content}
            key={section.id}
          />
        ))}
      </main>
      <div className="background" />
    </>
  );
}

export default App;
