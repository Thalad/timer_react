
export function Add(str) {
  return {
    type: 'ADD',
    value: str
  };
}

export function Delete(str) {
  return {
    type: 'REMOVE',
    value: str
  }
}