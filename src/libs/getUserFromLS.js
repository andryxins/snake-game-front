export default async () => {
  try {
    const user = await JSON.parse(localStorage.getItem('snakePlayer'));

    if (user) {
      return user;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
};
