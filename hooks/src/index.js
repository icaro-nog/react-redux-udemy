import './index.css'
import React from 'react'
import App from './views/App'
import { createRoot } from "react-dom/client"

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
    <App></App>
)