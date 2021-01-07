import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Header />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  )
}

export default App;