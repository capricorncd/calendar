# ZxReactCalendar

https://capricorncd.github.io/calendar/dist/react.html

```jsx
import React, { Component } from 'react'
import { ZxReactCalendar } from 'zx-calendar/react'
import 'zx-calendar/css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '2020/09/05'
    }
  }

  handleChange() {
    console.log.apply(null, arguments)
  }

  render() {
    return <div>
      <ZxReactCalendar
        value={this.state.date} 
        change={(...args) => this.handleChange(...args)}/>
    </div>
  }
}
```