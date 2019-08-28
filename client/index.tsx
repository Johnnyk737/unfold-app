import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './App'

let app = document.getElementById('app')

ReactDOM.render(<App compiler="TypeScript" framework="React" />, app);
