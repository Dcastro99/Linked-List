const HashMap = require('./hashtables');

describe('HashMap', () => {
  it('instantiates a new hashMap of size 50', () => {
    const hm = new HashMap(50);
    expect(hm).toBeDefined();
    expect(hm.size).toBe(50);
  });

  it('returns the size of our HashMap', () => {
    const hm = new HashMap(50);
    expect(hm.size).toBe(50);
  });

  it('Setting a key/value to your HashMap results in the value being in the data structure', () => {
    const hm = new HashMap(50);
    hm.set('Danny', 'Castro');
    hm.set('Jim', 'Smith');
    hm.set('Frank', 'Cooley');
    expect(hm.get('Danny')).toEqual([{ 'key': 'Danny', 'value': 'Castro' }]);
    expect(hm.get('Jim')).toEqual([{ 'key': 'Jim', 'value': 'Smith' }]);
    expect(hm.get('Frank')).toEqual([{ 'key': 'Frank', 'value': 'Cooley' }]);

  });

  it('Retrieving based on a key returns the value stored', () => {
    const hm = new HashMap(50);
    hm.set('Danny', 'Castro');
    hm.set('Jim', 'Smith');
    hm.set('Frank', 'Cooley');
    expect(hm.get('Danny')).toEqual([{ 'key': 'Danny', 'value': 'Castro' }]);
    expect(hm.get('Jim')).toEqual([{ 'key': 'Jim', 'value': 'Smith' }]);
    expect(hm.get('Frank')).toEqual([{ 'key': 'Frank', 'value': 'Cooley' }]);
  });

  it('Successfully returns null for a key that does not exist in the HashMap', () => {
    const hm = new HashMap(17);
    hm.set('Danny', 'Castro');
    hm.set('Jim', 'Smith');
    hm.set('George', 'Clooney');
    expect(hm.get('Derek')).toBe(undefined);
  });

  it('Successfully returns a list of all unique keys that exist in the HashMap', () => {
    const hm = new HashMap(10);
    hm.set('John', 'Smith');
    hm.set('John', 'Joe');
    hm.set('Eric', 'Good');
    hm.set('Gilbert', 'Funnyman');
    expect(hm.keys()).toEqual(['John', 'Eric', 'Gilbert']);
  });

  it('Successfully handle a collision within the HashMap', () => {
    const hm = new HashMap(10);
    hm.set('John', 'Smith');
    hm.set('John', 'Johnson');
    hm.set('John', 'Jimmy');
    const elements = hm.get('John');
    // console.log(elements);
    expect(elements).toEqual([{ key: 'John', value: 'Smith' }, { key: 'John', value: 'Johnson' }, { key: 'John', value: 'Jimmy' }]);
  });

  it('Successfully retrieve a value from a bucket within the HashMap that has a collision', () => {
    const hm = new HashMap(10);
    hm.set('Danny', 'Castro');
    hm.set('Danny', 'Smith');
    hm.set('Frank', 'Cooley');
    const elements = hm.get('Danny');
    // console.log('value: ', elements);
    expect(elements).toEqual([{ key: 'Danny', value: 'Castro' }, { key: 'Danny', value: 'Smith' }]);
  });

  it('Successfully hash a key to an in-range value', () => {
    const hm = new HashMap(10);
    let size = hm.size;
    console.log('hashMap size is: ', size);
    expect(hm.hash('Danny')).toBeLessThanOrEqual(size);
    expect(hm.hash('Arthur')).toBeLessThanOrEqual(size);
    expect(hm.hash('Jim')).toBeLessThanOrEqual(size);
  });

});
