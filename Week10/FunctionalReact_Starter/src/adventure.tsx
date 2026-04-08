import React from "react";
import { createRoot, Root } from "react-dom/client";
import Character from "./character";
import PartyList from "./PartyList";
import "./css/base.css";
import App from "./App";


const root: Root = createRoot(document.getElementById("main")!);
root.render(<App />);