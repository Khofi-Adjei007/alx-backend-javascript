export default function taskBlock(trueOrFalse) {
  let task = false;// Use let instead of var
  let task2 = true;// Use let instead of var

  if (trueOrFalse) {
    task = true;// assign new value
    task2 = false;// assign new value
  }

  return [task, task2];
}
