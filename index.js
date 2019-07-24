class Formatter {
  
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(str) {
    const array = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const str_array = str.split(" ")
    const str_array_with_no_first = str_array.slice(1)

    const fixed_string_array = str_array_with_no_first.map(element => {
      if (array.includes(element)) {
        return element
      } else {
        return Formatter.capitalize(element)
      }
    })

    debugger

    return Formatter.capitalize(str_array[0]) + " " + fixed_string_array.join(" ")
  }
}