export const SET_CURRENT_ITEM = 'SET_CURRENT_ITEM'
export function setCurrentItem(item) {
    return {
      type: SET_CURRENT_ITEM,
      item: item
    };
  }