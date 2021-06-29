const spinner = (string) => {
  let index = 0;
  for (let i = 0; i < string.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${string[i]}`);
    }, 200 * index++);
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, 200 * index);
};
console.log(spinner('|/-\|/-|'));
