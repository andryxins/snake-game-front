export default async (updatedUser) => {
  try {
    localStorage.setItem('snakePlayer', JSON.stringify(updatedUser));

    return true;
  } catch (e) {
    console.log(e);
  }
};
