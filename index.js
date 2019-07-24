class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }
  
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '' );

  }

  static titleize(string) {
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    const newString = [];
    string.split(" ").forEach(function(word){
      if (string.indexOf(word) === 0) {
        newString.push(Formatter.capitalize(word));
      }
      else if (exceptions.includes(word)) {
        newString.push(word);
      } else {
        newString.push(Formatter.capitalize(word));
      }
    })
    return newString.join(" ");
  }
  
}