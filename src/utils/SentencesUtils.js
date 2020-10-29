class SentencesUtils {

  static generateSentences() {
    const WORDS = ["lion​ ", "elephant​", "potato​", "dog​", "cat​", "t-rex​", "ant​", "rhyno​"],
      SIZE = 1000000,
      MAX_WORDS = 10,
      getRandomInt = max => Math.floor(Math.random() * max);

    let sentences = [];

    for (let index = 0; index < SIZE; index++) {
      const numberOfWords = getRandomInt(MAX_WORDS);
      let newSentence = `#${index} my favorite pets are​`;
      for (let index2 = 0; index2 < numberOfWords; index2++) {
        const word = WORDS[getRandomInt(WORDS.length - 1)];
        newSentence += ` the ${word},`;
      }
      sentences.push(newSentence);
    }
    return sentences;
  }
}

export default SentencesUtils;
export { SentencesUtils };