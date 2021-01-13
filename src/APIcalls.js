export const fetchTaco = async () => {
  const response = await fetch('http://taco-randomizer.herokuapp.com/random/')
  return await response.json()
}