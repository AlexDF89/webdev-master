export default function reducer(state = [], action) {
  return state;
}

export function getActiveContent(state) {
  let idMenu, result;
  for (let i = 0; i <= state.menu.length; i++) {
    if (state.menu[i].active) {
      idMenu = state.menu[i].id;
      break;
    }
  }
  for (let i = 0; i <= state.content.length; i++) {
    if (state.content[i].id === idMenu) {
      result = state.content[i];
      break;
    }
  }

  return result;
}