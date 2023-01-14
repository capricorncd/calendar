/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-11 21:48
 */
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '../../demo/src/index.scss'

const root = createRoot(document.getElementById('app'))
root.render(<App />)
