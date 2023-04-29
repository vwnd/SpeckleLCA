import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const SpeckleLCACustomTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#343634',
    secondary: '#74706B',
    accent: '#FCF25E',
    error: '#FF5555',
    warning: '#FF9100',
    info: '#313BCF',
    success: '#4caf50',
    background: '#eeeeee',
    text: '#FFFFFF'
  }
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'SpeckleLCACustomTheme',
    themes: {
      SpeckleLCACustomTheme
    }
  }
})
