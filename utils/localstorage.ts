export const deleteItemByValue = (value: string) => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i) as string;
    const storedValue = localStorage.getItem(key);

    if (storedValue === value) {
      localStorage.removeItem(key);
      return;
    }
  }
}
