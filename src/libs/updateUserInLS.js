export default async newUser => {
  try {
    localStorage.setItem('snakePlayer', JSON.stringify(newUser));

    return true;
  } catch (e) {
    console.log(e);
  }
};
