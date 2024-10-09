import React from "react";
import ReactDOM from "react-dom";
import List from "./List.jsx"; /*We need to importing List.jsx file to access the List component.  */
import Heading from "./Heading.jsx";
function App() {
  return (
    <div>
      <Heading />
      <List /> {/*List component is displayed here */}
      <List />
      {/*We can reuse the code for the list any where by simply
       specify the component like this.This is an advatage of 
       breakdown the code in to different components */}
    </div>
  );
}
export default App;
