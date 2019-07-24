class Formatter {
  //add static methods here
  static capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  static sanitize(s) {
    return s.replace(/[^A-Za-z0-9 '-]/g, "");
  }

  static titleize(s) {
    const stopWords = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from"
    ];
    const splitSentence = s.split(" ");
    const newArray = new Array();
    for (let i = 0; i < splitSentence.length; i++) {
      if (i === 0 || !stopWords.includes(splitSentence[i])) {
        newArray.push(this.capitalize(splitSentence[i]));
      } else {
        newArray.push(splitSentence[i]);
      }
    }
    return newArray.join(" ");
  }
}
