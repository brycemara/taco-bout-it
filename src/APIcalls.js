export const fetchTaco = async () => {
  const response = await fetch('https://taco-randomizer.herokuapp.com/random/')
  return await response.json()
}