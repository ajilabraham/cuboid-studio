const fs = require('fs');
const originalReadFileSync = fs.readFileSync;
fs.readFileSync = function (path, options) {
    if (typeof path === 'string' && !path.includes('node_modules')) {
        console.log('[DEBUG] fs.readFileSync called with path:', path);
    }
    return originalReadFileSync.apply(this, arguments);
};
console.log('[DEBUG] Hook installed, starting Next.js...');
process.argv.length = 2;
process.argv.push('dev');
require('next/dist/bin/next');
