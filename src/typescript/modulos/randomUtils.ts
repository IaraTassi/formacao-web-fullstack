export function generateUniqueRandomNumber(
  items: number,
  min: number = 1,
  max: number = 100
): number[] {
  const array: number[] = [];
  while (array.length < items) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!array.includes(randomNumber)) {
      array.push(randomNumber);
    }
  }
  return array;
}
