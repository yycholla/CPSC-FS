import React from "react";
import { createRoot, Root } from "react-dom/client";
import App from "./App";

const root: Root = createRoot(document.getElementById("main")!); // non-null assertion operator (!)
root.render(<App />);