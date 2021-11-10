// REACT BASICS

// EXAMPLE OF A CLASS COMPONENT
/*
class Turkey extends React.Component {
  render(){
    return <h1>Gobble Gobble</h1>;
  }
}
*/

// FUNCTION COMPONENTS
// Example 1
// Function Component names are written in TitleCase in React
function SpiderManThree() {
    return `Spider-Man: No Way Home`;
  }
  
  // Example 2
  // Function Component that returns an h1 HTML element
  function SpiderMan() {
    return <h1>Peter Parker</h1>;
  }
  
  // Example 3
  function SpideyFriends() {
    // JSX only allows for a single element (AKA Parent Element) to be returned from a Component
    // return <h1>MJ</h1> <h1>Ned Leeds</h1>;
    // A single parent element can be used to create a component with multiple child element nested inside of it
    return (
      <div>
        <h1>MJ</h1>
        <h1>Ned Leeds</h1>
      </div>
    );
  }
  
  // Example 4
  function SpideyVillains() {
    // Example of Emmet Abbreviation: div>ol>li*2
    return (
      <div>
        <ol>
          <li>Doc Oc</li>
          <li>Green Goblin</li>
        </ol>
      </div>
    );
  }
  
  // Example 5
  function SelfClosing() {
    // In JSX, self closing tags/elements have to be written in the following format: <tagname/>
    return <hr />;
  }
  
  // Example 6
  function LiveActionSpiderManMovies() {
    // JavaScript can be written like normal before the RETURN keyword in a Function Component
    const tobeyMaguire = 3;
    const andrewGarfield = 2;
    const tomHolland = 3;
    return (
      // JavaScript can be written like normal here as well (After the return but before the opening tag of the JSX parent element)
      <section>
        {/* This is a comment */}
        {/* Must use curly brackets {} to write Javascript anywhere inside the parent JSX element */}
        <h1>Total Live Action SpiderMan Movies: {tobeyMaguire + andrewGarfield + tomHolland}</h1>
      </section>
    );
  }
  
  // Example 7
  // "App" is standard name used for the top level component that is passed into the render method
  function App() {
    return (
      // Passing multiple components into another component (AKA The App Component)
      <div>
        <SpiderManThree />
        <SpiderMan />
        <SpideyFriends />
        <SpideyVillains />
        <SelfClosing />
        <LiveActionSpiderManMovies />
      </div>
    );
  }
  
  
  // RENDER METHOD
  // The Render Method renders (AKA Adds/Displays) an element/component to the webpage/document inside of another element (The div with the id of "root")
  // NOTE: Only a single component can be rendered
  /*
  Syntax Example 
  
  ReactDOM.render(
    <ComponentName/>,
    document.getElementById(`root`)
  );
  */
  
  ReactDOM.render(
    // <SpiderManThree/>,
    // <SpiderMan/>,
    // <SpideyFriends/>,
    // <SpideyVillains/>,
    // <SelfClosing/>,
    // <LiveActionSpiderManMovies />,
    <App />,
    document.getElementById(`root`)
  );
  
  // JSX (JavaScript Syntax Extension)
  // JSX generates React "Elements" with HTML looking code that is written in a JavaScript file
  