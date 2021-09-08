import React from "react";
import Routes from "./src/routes";

YellowBox.ignoreWarnings(["Unrecognized WebSocket connection"]);

export default function App() {
  return <Routes />;
}
