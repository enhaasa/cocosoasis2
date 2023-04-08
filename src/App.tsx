import Section from './components/Section';
import Home from './components/Home';
import Menu from './components/menu/Menu';
import Staff from './components/staff/Staff';

function App() {

  const sections = [
    {
      title: null,
      id: "home",
      content: <Home />
    },
    {
      title: "Menu",
      id: "menu",
      content: <Menu />
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
      title: "Staff",
      id: "staff",
      content: <Staff />
    }
  ];

  return (
    <main>
      {sections.map(section => (
        <Section 
          title={section.title} 
          id={section.id}
          content={section.content}
        />
      ))}
    </main>
  );
}

export default App;
