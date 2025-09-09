function add(number) {
  if (number === "") {
    return 0;
  }
  let delimiter = /,|\n/;
  let numbersString = number;

  if (number.startsWith("//")) {
    const parts = number.split("\n");
    delimiter = parts[0].substring(2);
    numbersString = parts[1]; // Use only the numbers part, not the whole string
  }

  const numArray = numbersString.split(delimiter);
  return numArray.reduce((sum, current) => sum + parseInt(current), 0);
}

module.exports = { add };
