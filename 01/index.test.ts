import { humanYearsCatYearsDogYears, generateHashtag } from './index';

describe('is working', () => {
  it('should work', () => {
    expect(true).toBeTruthy();
  });
});

describe('Example Tests', function () {
  test('one', function () {
    expect(humanYearsCatYearsDogYears(1)).toEqual([1, 15, 15]);
  });

  test('two', function () {
    expect(humanYearsCatYearsDogYears(2)).toEqual([2, 24, 24]);
  });

  test('ten', function () {
    expect(humanYearsCatYearsDogYears(10)).toEqual([10, 56, 64]);
  });
});

describe('Tests', () => {
  test('Expected an empty string to return false', function () {
    expect(generateHashtag('')).toBe(false);
  });
  test('Still an empty string', function () {
    expect(generateHashtag(' '.repeat(200))).toBe(false);
  });
  test('Expected a Hashtag (#) at the beginning.', function () {
    expect(generateHashtag('Do We have A Hashtag')).toBe('#DoWeHaveAHashtag');
  });
  test('Should handle a single word.', function () {
    expect(generateHashtag('Kaiken')).toBe('#Kaiken');
  });
  test('Should remove spaces.', () => {
    expect(generateHashtag('Kaiken Is Super Beautiful')).toBe('#KaikenIsSuperBeautiful');
  }),
    test('Should capitalize the first letter.', () => {
      expect(generateHashtag('kaiken is beautiful')).toBe('#KaikenIsBeautiful');
    });
  test('', () => {
    expect(generateHashtag('Kai' + ' '.repeat(140) + 'ken')).toBe('#KaiKen');
  });
  test('Should return false if the final word is longer than 140 chars.', () => {
    expect(
      generateHashtag(
        'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'
      )
    ).toBe(false);
  });
  test('Too long', () => {
    expect(generateHashtag('a'.repeat(140))).toBe(false);
  });
});
