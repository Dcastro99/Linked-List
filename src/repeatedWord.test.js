const repeatedWord = require('./repeatedWord');



describe('Repeated Word', () => {
  it.skip('should return "a"', () => {
    const str = 'Once upon a time, there was a brave princess who...';
    expect(repeatedWord(str, false, 2)).toBe('a');
  });

  it.skip('should return "it"', () => {
    let str = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    expect(repeatedWord(str, false, 2)).toBe('it');
  });

  it.skip('should return "summer"', () => {
    const str = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    expect(repeatedWord(str, false, 2)).toBe('summer');
  });

  it.skip('returns the string object that occurs the most in the array', () => {
    const str = 'Once upon a time, there was a brave princess who...';
    expect(repeatedWord(str, true, 2)).toEqual({ key: 'a', value: 2 });
  });

  it('returns the string the occurs the most in the array', () => {
    const str = 'o tolerate or endure through the unexpected mishappenings you may encounter from time to time';
    expect(repeatedWord(str, true, 2)).toEqual({ key: 'time', value: 2 });
  });


});
