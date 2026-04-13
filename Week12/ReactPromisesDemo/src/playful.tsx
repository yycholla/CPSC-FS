import React from "react";
import { createRoot, Root } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css"; // force Webpack to include in bundle
import "bootstrap/dist/js/bootstrap.bundle.min.js" // force Webpack to include in bundle

const root: Root = createRoot(document.getElementById("main")!); // non-null assertion operator (!)
root.render(<App />);