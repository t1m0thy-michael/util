const randomInt = (min: number = 0, max: number = 10): number => Math.floor(Math.random() * (max - min + 1)) + min

export default randomInt