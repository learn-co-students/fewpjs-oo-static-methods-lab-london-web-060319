class Formatter {
  //add static methods here
  static capitalize(word){
  //   word.split("")
  //   word[0].toUpperCase
  //   word.join('')
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string){

    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let results = []

    let arrayOfWords = string.split( " " )
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        results.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) {
          results.push( arrayOfWords[ n ] )
        } else {
          results.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
    return results.join( " " );
  }
}