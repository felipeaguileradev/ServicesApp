type ThemeAction = { type: 'set_light_theme' } | { type: 'set_dark_theme' }

export interface ThemeState {
  currentTheme: 'light' | 'dark'
  dividerColor: string
  dark: boolean
  colors: Colors
}

interface Colors {
  primary: string
  background: string
  card: string
  text: string
  border: string
  notification: string
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: 'red',
    background: 'blue',
    card: 'green',
    text: 'pink',
    border: 'orange',
    notification: 'teal'
  }
}
export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: 'red',
    background: 'blue',
    card: 'green',
    text: 'pink',
    border: 'orange',
    notification: 'teal'
  }
}

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {
        ...lightTheme
      }
    case 'set_dark_theme':
      return {
        ...darkTheme
      }

    default:
      return state
  }
}
