import Section from '../sections/Section';
import Welcome from '../sections/Welcome';
import Menu from '../sections/Menu';
import About from '../sections/About';
import Modal from '../sections/common/Modal';
import Rules from '../sections/Rules';
import Services from '../sections/Services';
import Partners from '../sections/Partners';
import { useState, useEffect } from 'react';
import getExternal from '../getExternal';
import { getNextOpening } from '../commonFunctions';
import { OpeningType } from '../commonTypes';
import { capitalizeWords } from '../commonFunctions';

function Home() {
  const [ modal, setModal ] = useState<any | null>(null);
  function handleModal(content: any | null):void {
      setModal(content);  
  }

  function scrollToAnchor() {
    const { hash } = window.location;
  
    if (hash) {
      const target = document.querySelector(hash);
  
      if (target) {
        target.scrollIntoView();
      }
    }
  }

  const [ nextOpening, setNextOpening ] = useState<OpeningType | null>(null);
  useEffect(() => {
    getExternal.db_cache("openings").then((data: OpeningType[]) => {
    setNextOpening(getNextOpening(data));

    setTimeout(() => {
      scrollToAnchor();
    }, 400)
  })
  }, [])

  const sections = [
    {
      title: null,
      id: "home",
      content: <Welcome handleModal={handleModal} nextOpening={nextOpening} />
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
              <a 
                className="anchor" 
                draggable={false} 
                href={`#${section.id}`} 
                key={`${section.id}link`}>{capitalizeWords(section.id)}
              </a>
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
          <span>•</span>
          <span>Website by _enhasa</span>
      </footer>

      <div className="background" />
    </>
  );
}

export default Home;