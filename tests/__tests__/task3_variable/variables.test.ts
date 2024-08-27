import { runFile, insp } from '../../helpers/testsHelper';

let pjs = runFile(import.meta.url, 'variables.code');

test('result = 5', () => {
  expect(pjs.engine.results[0]).toBe(5);
});
test('result = 7', () => {
  expect(pjs.engine.results[1]).toBe(7);
});
test('result = 5', () => {
  expect(pjs.engine.results[2]).toBe(5);
});
test('result = 4', () => {
  expect(pjs.engine.results[3]).toBe(4);
});
test('result = 5', () => {
  expect(pjs.engine.results[4]).toBe(5);
});



