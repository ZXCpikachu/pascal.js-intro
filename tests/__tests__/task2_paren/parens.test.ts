import { runFile, insp } from '../../helpers/testsHelper';

/**
 * Тестируем поддержку скобок в выражениях
 */

let pjs = runFile(import.meta.url, 'parens.code');

test('result = 9', () => {
  expect(pjs.engine.results[0]).toBe(9);
});

test('result = 10', () => {
  expect(pjs.engine.results[1]).toBe(10);
});

test('result = 21', () => {
  expect(pjs.engine.results[2]).toBe(21);
});

test('result = 14', () => {
  expect(pjs.engine.results[3]).toBe(14);
});

test('result = 45', () => {
  expect(pjs.engine.results[4]).toBe(45);
});
