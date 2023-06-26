import React from "react";
// import ReactDOM from "react-dom/client";
import { render } from "react-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";


// CON ESTE METODO SE DUPLICAN LOS MENSAJES DEL CHATBOT
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//    <React.StrictMode>
//       <AuthContextProvider>
//          <BrowserRouter>
//             <App />
//          </BrowserRouter>
//       </AuthContextProvider>
//    </React.StrictMode>
// );

// CON ESTE METODO FUNCIONA CORRECTAMENTE EL CHATBOT
render(
   <React.StrictMode>
     <AuthContextProvider>
          <BrowserRouter>
             <App />
          </BrowserRouter>
       </AuthContextProvider>
    </React.StrictMode>,
   document.getElementById("root")
)