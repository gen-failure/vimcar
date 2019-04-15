//Utility to override Math.random output, useful for testing

const mockRandom = (n) => {
  const realRandom = Math.random

  Math.random = () => n

  return () => {
    Math.random = realRandom
  }
}

export default mockRandom;
