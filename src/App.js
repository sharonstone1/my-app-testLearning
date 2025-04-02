
import './App.css';
import {useState} from 'react'
import Header from './Components/Header';
import CoreConcept from './Components/CoreConcept';
import { CORE_CONCEPTS } from './data';
import TabButton from './Components/TabButton';
import { EXAMPLES } from "./data";


  /* the special children props allow to get the content between the opening and the close tag of the custom component 
            in order words it contains the content between you custom component */


function App() {
 

  // // create a variable which will trigger when the button will click
  // // But unfortunately, this method will not update the content 
  // // therefore it will be good to use useState instead.

  // let tabContent = "Please click the button"

  // React Hooks must not be called outside of React component functions.
  // React Hooks must not be called in nested code statements (eg. inside of if-statements)
  const [selectedTopic, setSelectedTopic] = useState()


  // add event listener function
  function handleSelect(selectedButton){
    // tabContent = selectedButton
    setSelectedTopic(selectedButton)
    
}

/// rendering content conditionally
let tabContent = <p style={{fontSize:20}}> Please select a topic.</p>

if(selectedTopic){
  tabContent = <div id="tab-content">
  <h3>{EXAMPLES[selectedTopic].title}</h3>
  
  <p>{EXAMPLES[selectedTopic].description}</p>
  <pre>
    <code>
      {EXAMPLES[selectedTopic].code}
    </code>
  </pre>
</div>

}



  return (
    <div className="App">
      <Header/>
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {/* outputting list Data Dynamically */}
            {CORE_CONCEPTS.map((conceptItem)=> (<CoreConcept key={conceptItem.title} {...conceptItem}/>))}
          {/* <CoreConcept title={CORE_CONCEPTS[0].title} description= {CORE_CONCEPTS[0].description} image ={CORE_CONCEPTS[0].image}/>
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/> */}
        
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
          
            <TabButton isSelected={selectedTopic === "components"} onSelect={()=>handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === "props"} onSelect={()=>handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === "state"} onSelect={()=>handleSelect('state')}>State</TabButton>
          </menu>

          {tabContent}
      
        </section>
    
      
      </main>
    
    </div>
  );
}

export default App;
