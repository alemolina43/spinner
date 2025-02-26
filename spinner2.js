let spinnerChar = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
let timer = 100;

for (const char of spinnerChar) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, timer);
  timer += 200;
}

setTimeout(() => {
  process.stdout.write("\n");
}, timer);
