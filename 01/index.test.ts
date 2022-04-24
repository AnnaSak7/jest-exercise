import { humanYearsCatYearsDogYears } from './index';

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
