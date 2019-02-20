export const SET_CONTACTS_CONTENT  = 'SET_CONTACTS_CONTENT';

export function setContactsContent(contants) {
  return {
    type: SET_CONTACTS_CONTENT,
    contants
  };
}