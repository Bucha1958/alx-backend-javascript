import { taskFirst, taskNext } from "../0x00-ES6_basic/0-constants.js";

// Test for the taskFirst function
test('taskFirst should return the correct string', () => {
    const result = taskFirst();
    expect(result).toBe('I prefer const when I can');
  });
  
// Test for the taskNext function
test('taskNext should return the correct string', () => {
    const result = taskNext();
    expect(result).toBe('But sometimes let is okay');
});

