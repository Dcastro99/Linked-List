const leftJoin = require('./leftJoin');

it('joins leftMap and rightMap of strings', () => {
  const mapOne = new Map();
  mapOne.set('diligent', 'employed');
  mapOne.set('fond', 'enamored');
  mapOne.set('guide', 'usher');
  mapOne.set('outfit', 'garb');
  mapOne.set('wrath', 'anger');

  const mapTwo = new Map();
  mapTwo.set('diligent', 'idle');
  mapTwo.set('fond', 'averse');
  mapTwo.set('guide', 'follow');
  mapTwo.set('flow', 'jam');
  mapTwo.set('wrath', 'delight');

  expect(leftJoin(mapOne, mapTwo)).toEqual([['diligent', 'employed', 'idle'], ['fond', 'enamored', 'averse'], ['guide', 'usher', 'follow'], ['outfit', 'garb', null], ['wrath', 'anger', 'delight']]);
});
