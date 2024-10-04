import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import {LanguageProvider} from "./store/languageContext";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
      <LanguageProvider>
          <App />
      </LanguageProvider>
  </BrowserRouter>
)
