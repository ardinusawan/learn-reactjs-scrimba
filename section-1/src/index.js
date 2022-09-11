import React from "react"
import ReactDOM from "react-dom/client"

const page = (
  <div>
    <img src="./react-logo.png" width="40px" alt="react logo"/>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by jordan walke</li>
      <li>Has well over 100k starts on github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousand of enterprise apps, including mobile app</li>
    </ul>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(page)
