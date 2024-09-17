import React from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";  // Import MantineProvider
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <App />
  </MantineProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
