function Pangram(sentence) {
  this.sentence = sentence
}

Pangram.prototype.isPangram = function() {
  alphabet = 'abcdefghijklmnopqrstuvwxyz'
  result = true
  for (var i = 0; i < 26; i += 1) {
    if (!this.sentence.toLowerCase().includes(alphabet[i])) {
      result = false
    }
  }
  return result
}

module.exports = Pangram
