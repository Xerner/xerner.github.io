const fs = require('fs');
const path = require('path');

// Specify the directory path
const directoryPath = path.join(__dirname, '..', 'build');
// Specify the destination path
const destPath = path.join(directoryPath, '..', '..')

// Read the contents of the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Iterate over each file or directory in the directory
  files.forEach(file => {
    const filePath = path.join(directoryPath, file);

    // Check if the file is a directory
    var stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
        // Move the directory to the parent directory
        const newDirectoryPath = path.join(destPath, file);
        fs.statSync(newDirectoryPath, { throwIfNoEntry: false }) && fs.rmdirSync(newDirectoryPath, { recursive: true })
        fs.renameSync(filePath, newDirectoryPath);
    } else {
        // Move the file to the parent directory
        const newFilePath = path.join(destPath, file);
        fs.statSync(newFilePath, { throwIfNoEntry: false }) && fs.rmSync(newFilePath)
        fs.renameSync(filePath, newFilePath);
    }
  });
  fs.rmdirSync(directoryPath)
});
