export const OPEN_POPUP  = 'OPEN_POPUP';
export const CLOSE_POPUP  = 'CLOSE_POPUP';

export function openPopup(popup) {
  return {
    type: OPEN_POPUP,
    popup
  };
}

export function closePopup(popup) {
  return {
    type: CLOSE_POPUP,
    popup
  };
}