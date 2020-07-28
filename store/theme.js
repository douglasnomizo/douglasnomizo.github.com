export const state = () => ({
  selected: 'default',
  default: {
    color: '#243746',
    colorPrimary: 'white',
    colorSecondary: 'white',
    bg: '#f3f5f4',
    bgSecondary: '#071521',
    borderColor: '#ddd',
  },
  dark: {
    color: '#ebf4f1',
    colorPrimary: '#41b38a',
    colorSecondary: '#fdf9f3',
    bg: '#091a28',
    bgSecondary: '#071521',
    borderColor: '#0d2538',
  },
  sepia: {
    color: '#433422',
    colorSecondary: '#504231',
    bg: '#f1e7d0',
    bgSecondary: '#eae0c9',
    borderColor: '#ded0bf',
  },
})

export const mutations = {
  select(state, name) {
    state.selected = name
  },
  apply(state, theme) {
    state.custom = theme
    state.selected = 'custom'
  },
}
