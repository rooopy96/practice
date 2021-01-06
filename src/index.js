import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./Header";

ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<App />,document.getElementById("root"));

//https://yts-proxy.nomadcoders1.now.sh/list_movies.json