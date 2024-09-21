// 1
const logItems = function (numb) {
    let lo;
    for (let i = 0; o <= numb.length - 1; i++) {
      o = i + 1;
      console.log(o + " - " + numb[i]);
    }
    return;
  };
  logItems(["Mango", "Poly", "Ajax"]);
//   2
  const calculateEngravingPrice = function (message, pricePerWord) {
    const words = message.split(" ");
    const price = pricePerWord * words.length;
    return price;
  };
  console.log(calculateEngravingPrice("Добрий день, юзер", 100));
//   3
  const findLongestWord = function (letters) {
    const words = letters.split(" ");
    let lonegstWord;
    let numberOfLetters = 0;
    for (let word of words) {
      if (word.length > numberOfLetters) {
        lonegstWord = word;
        numberOfLetters = word.length;
      }
    }
    return lonegstWord;
  };
  console.log(findLongestWord("Завдання 3 перевірка"));
//   4
  const formatString = function (string) {
    let result = string;
    if (string.length > 40) {
      result = string.slice(0, 40) + "...";
    }
    return result;
  };
  console.log(formatString("Тут менше 40 символів"));
  console.log(formatString("Тут юільше 40 символів"));
//   5
  const checkForSpam = function (message) {
    let result;
    if (
      message.toLowerCase().includes("spam") === true ||
      message.toLowerCase().includes("sale") === true
    ) {
      result = true;
    } else {
      result = false;
    }
    return result;
  };
  console.log(checkForSpam("SaLe"));
  console.log(checkForSpam("SpAm"));
  console.log(checkForSpam("No S-word"));
//   6
  let input;
  const num = [];
  let total = 0;
  for (let i = 0; i <= 1000; i++) {
    input = prompt("Введіть число:");
    if (input === null) {
      break;
    }
    input = Number.parseInt(input);
    if (isNaN(input)) {
      alert("Було введено не число, попробуйте ще раз");
      continue;
    }
    num.push(input);
    console.log(num);
  }
  for (const number of num) {
    total += number;
  }
  console.log(`Сумма введених чисел: ${total}`);
