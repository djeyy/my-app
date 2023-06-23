
export const localStorageRead = (data: any) => {
  const localStorageString = localStorage.getItem(data)
  return localStorageString
    ? JSON.parse(localStorageString as string)
    : {
      id: null,
      name: '',
      quantity: null,
      receiptDate: '',
      deliveryDate: '',
      type: '',
      active: false
  }
};

export const localStorageWrite = (user: any) => localStorage.setItem('user', JSON.stringify(user));
