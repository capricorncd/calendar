/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-30 15:19
 */
import { ZxVueCalendar } from '../index'

const Test = {
  props: ['message'],
  template: `
    <div>
      <h1>{{message}}</h1>
      <slot></slot>
    </div>
  `
}

const App = {
  components: {
    Test,
    ZxVueCalendar
  },
  data() {
    return {
      message: 'You loaded this page on ' + new Date().toLocaleString(),
      date: '1999/12/09'
    }
  },
  watch: {
    date(val) {
      console.log('test watch date:', val)
    }
  },
  template: `
    <Test :message="message">
      <h3>selected date: {{date}}</h3>
      <ZxVueCalendar v-model="date"></ZxVueCalendar>
    </Test>
  `
}

/* eslint-disable no-undef */
Vue.createApp(App).mount('#app')
