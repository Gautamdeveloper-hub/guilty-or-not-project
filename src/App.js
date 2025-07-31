import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Service/App.css';


/* pages  import one by one */
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Box3 from './components/Box3';
import Box4 from './components/Box4';



import Header from'./layout/Header';
import Footer from'./layout/Footer'; 
import NavCard from './components/NavCard'; // Import NavCard component

// import { path, title } from 'framer-motion/client';



function Demopage() {
   const modules=[
    {

      path:'Box1/',
      title:'1. is Group Work is just free laber',
      description:'Group project are exhusting and most  of the time,one person does all the work while everyone else slacks off.',
       emo:'❤️🤣😘🔥😂 +6'
    },
 {

      path:'Box2/',
      title:'2. Monarchy Or Democracy ',
      description:' More than 10,0000 peoples were on road for protesting against democracy and demanding for a king,was those people right or wrong.',
      emo:'❤️🤣😘🔥😂 +6'
    },
   
   {
    path:'Box3/',
    title:'3.Was Diddy Guilty',
    description:'Diddy was found with more than 1500+ baby oil in has mansion. he faced serious alligations pf children trafficing, rapes etc.',
     emo:'❤️🤑😭😂🔥 +8'
  },
 {
    path:'Box4/',
    title:'4.Is ketchup a smoothie?',
    description:'Ketchup is made of blended tomatoes, which are fruit, so technically it qualifies as smoothie.',
    emo:'❤️🤣😘😊😂🔥 +6'
  },

    
  ];

  return(
    <> 
    <Header>

    </Header>


      <div className="navigation">
        {modules.map((module, index) => (
          <NavCard
            key={module.path}
            to={module.path}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{module.title}</h3>
            <p>{module.description}</p>
          </NavCard>
        ))}
      </div>

    </>

  );
  }
  function App( ) {
    return(
<div className="voting-App">
    <Header />
        <main>
          <Routes>
            <Route path="/" element ={<Demopage/>}/>
            <Route path="Box1/" element={<Box1 />} />
            <Route path="Box2/" element={<Box2 />} />
            <Route path="Box3/" element={<Box3/>} />
            <Route path="Box4/" element={<Box4/>} />
          </Routes>
        </main>
        <Footer />
</div>

    );
}
export default App;

