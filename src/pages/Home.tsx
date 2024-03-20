import Section from '../sections/Section';
import Welcome from '../sections/Welcome';
import Menu from '../sections/Menu/Menu';
import About from '../sections/About/About';
import Modal from '../components/common/Modal';
import Rules from '../sections/Rules';
import Services from '../sections/Services/Services';
import Partners from '../sections/Partners';
import { useState, useEffect } from 'react';
import db_cache from '../db_cache';
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

  function convertDateFormat(datetimeString: any) {
    const date = new Date(datetimeString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  const [ nextOpening, setNextOpening ] = useState<OpeningType | null>(null);
  useEffect(() => {
    db_cache.get('openings')
    .then((data: OpeningType[]) => {

      const nextOpening = getNextOpening(data);
      if (nextOpening) {
        nextOpening.date = convertDateFormat(nextOpening.date)
      }

      setNextOpening(getNextOpening(data));

      setTimeout(() => {
        scrollToAnchor();
      }, 400);
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