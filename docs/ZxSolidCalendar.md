# ZxSolidCalendar

https://capricorncd.github.io/calendar/dist/solid.html

```jsx
import { createSignal } from 'solid-js'
import { ZxSolidCalendar } from 'zx-calendar/solid'
import 'zx-calendar/css'

export function App() {
  const [date, setDate] = createSignal()

  return (
    <div>
      <p>value {date()}</p>
      <ZxSolidCalendar
        footer={<div>footer</div>}
        value={date()}
        change={(newDate) => {
          setDate(newDate)
        }}
      />
    </div>
  )
}
```
