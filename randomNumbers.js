const getRandomUUID = (length) => {
  const hexCode = "0123456789ABCDEF";
  let randomUUID = "";
  for (let i = 0; i < length; i++)
      randomUUID += hexCode.charAt(getRandomNo(0, hexCode.length));

  return randomUUID;
}

const getRandomString = (length) => {
  let randomString ="";
  console.log(randomString);
  for (let i = 0; i < length; i++) 
      randomString += getRandomCharacter();

  return randomString;
}

const getRandomCharacter = () => {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  let randomCharacter = '';
  randomCharacter = characters.charAt(getRandomNo(0, characters.length));

  return randomCharacter;
}

const getRandomNo = (min, max) => Math.floor(Math.random() * (max - min) + min);

const displayResult = () => {

  const uuidArray = [8, 4, 4, 4, 12];
  console.log("Random Number between 65 and 97 ASCII Characters: ");
  const randomNo = getRandomNo(65, 97);
  const randomCharacter = getRandomCharacter();
  const randomString = getRandomString(3);
  const randomUUID = uuidArray.map(getRandomUUID);
  const randomUUIDNumber = randomUUID.join('-');

  return { randomNo, randomCharacter, randomString, randomUUIDNumber };
}

const main = () => {
  console.log(displayResult());

}

main();

