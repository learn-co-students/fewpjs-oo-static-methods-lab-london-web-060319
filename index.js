class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, "");
  }

  static titleize(sentence) {
    let noTitle = [
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
    let result = [];
    let array = sentence.split(" ");
    for (let i = 0; i < array.length; i++) {
      if (i == 0) {
        result.push(this.capitalize(array[i]));
      } else {
        if (noTitle.includes(array[i])) {
          result.push(array[i]);
        } else {
          result.push(this.capitalize(array[i]));
        }
      }
    }
    return result.join(" ");
  }
}
