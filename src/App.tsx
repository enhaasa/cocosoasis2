import Section from './components/Section';
import Home from './components/home/Home';
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Modal from './components/common/Modal';
import Rules from './components/Rules/Rules';
import Services from './components/services/Services';
import Partners from './components/partners/Partners';
import { useState, useEffect, useRef } from 'react';
import getExternal from './getExternal';
import { getNextOpening } from './commonFunctions';
import { OpeningType } from './commonTypes';
import { capitalizeWords } from './commonFunctions';


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
      title: null,
      id: "home",
      content: <Home handleModal={handleModal} nextOpening={nextOpening} />
    },
    {
      title: "Menu",
      id: "menu",
      content: <Menu handleModal={handleModal}/>
    },
    {
      title: "Rules",
      id: "rules",
      content: <Rules />
    },
    {
      title: "Services",
      id: "services",
      content: <Services handleModal={handleModal} />
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
      content: <Partners handleModal={handleModal} />
    }
  ];

  return (
    <>
      {modal && <Modal handleClose={() => {handleModal(null)}}>{modal}</Modal>}
      
      <div className="navbar">
          {sections.map((section: any) => (
              <a href={`#${section.id}`} key={`${section.id}link`}>{capitalizeWords(section.id)}</a>
          ))}
      </div>
      
      <main>
        
        {sections.map(section => (
          <Section 
            title={section.title} 
            id={section.id}
            content={section.content}
            key={section.id}
          />
        ))}
      </main>

      <footer>
          <span>©2022-2023 Coco's Oasis All Rights Reserved</span>
          <span>Website by Enhasa#1319</span>
      </footer>

      <div className="background" />
    </>
  );
}

export default App;
