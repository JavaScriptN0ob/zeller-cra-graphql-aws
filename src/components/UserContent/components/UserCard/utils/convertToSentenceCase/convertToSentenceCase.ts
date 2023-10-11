const convertToSentenceCase = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export default convertToSentenceCase;
