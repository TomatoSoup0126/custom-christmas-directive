import { createApp } from 'vue'
import App from './App.vue'
import './base.css'

const app = createApp(App)

app.directive('christmas', {
  beforeMount(el, binding) {
    el.classList.add('christmas-text')
    if (binding.arg) {
      el.classList.add(binding.arg)
    } else {
      el.classList.add('red-green')
    }

    if (binding.value) {
      el.style.animationDuration = `${binding.value}s`
    }
  }
})

app.mount('#app')
