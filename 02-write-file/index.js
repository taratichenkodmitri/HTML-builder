const path = require('path');
const fs = require('fs');
const { stdout, stdin } = process;

const handleExit = () => {
  stdout.write('\nBye!\n');
  process.exit();
};

stdout.write('Input text: ');
stdin.on('data', data => {
  if (data.toString().includes('exit')) {
    handleExit();
  }
  fs.appendFile(path.join(__dirname, 'output.txt'), data.toString(), (err) => {
    if (err) throw err;
  });
});

process.on('SIGINT', handleExit);

