const path = require('path');
const ScoreCounter = require('score-tests');

/* I  don't  know how to fix, but I do know 
it might have something to do with the 'path' 
not being ./path and the same for score-tests
*/

const testSuiteName = 'Debug Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  it('mirrors a given value', () => {
    const mirror = require('../src/debug');

    expect(typeof mirror).toEqual('function')

    expect(mirror('hello')).toEqual('hello');
    expect(mirror(1)).toEqual(1);
    expect(mirror(true)).toEqual(true);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
