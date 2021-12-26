class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9' -]+/g, '')
  }
  static titleize(string){
    let excludedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const cap = string => string.charAt(0).toUpperCase() + string.slice(1);
    return cap(
      string.replace(/\b\w+\b/g, m => excludedWords.includes(m) ? m : cap(m))
    );
  }
}

//that takes in a string and capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from