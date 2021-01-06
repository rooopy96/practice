import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Header />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  )
}

export default App;