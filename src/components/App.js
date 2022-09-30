import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";




function App() {
  console.log(user.links);
  
  return (
    <div>
      <NavBar />
      <Home color={user.color} city={user.city} name={user.name}/>
      {/* <About bio={user.bio?user.bio:"I made this?"} links={user.links} /> */}
      <About bio={user.bio?user.bio='this is bio data':"I made this?"} links={user.links} />

    </div>
  );
}

export default App;
