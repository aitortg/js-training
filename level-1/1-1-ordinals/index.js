const numberToOrdinal = number => {
  const lastTwoDigits = number % 100;
  if (lastTwoDigits === 11 || lastTwoDigits === 12 || lastTwoDigits === 13) {
    return number + 'th';
  }
  const lastDigit = number % 10;
  if (lastDigit === 1) {
    return number + 'st';
  }
  if (lastDigit === 2) {
    return number + 'nd';
  }
  if (lastDigit === 3) {
    return number + 'rd';
  }
  return number + 'th';
};

module.exports = {
  numberToOrdinal,
};
