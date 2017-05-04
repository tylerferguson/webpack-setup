const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

function MyPlugin() {
  this.currentChunks = {};
}

MyPlugin.prototype.apply = function (compiler) {
  compiler.plugin('emit', function (compilation, callback) {
    fs.readFile(path.join(__dirname, 'webpack-previous-chunks.json'), 'utf8', (err, data) => {
      if (err) throw err;
      const json = JSON.parse(data);
      const previousChunks = json.chunks;
      console.log(chalk.yellow('======== CHUNK CHANGES FROM LAST BUILD =========='));
      compilation.chunks.forEach(function (chunk) {
        const oldHash = previousChunks[chunk.name];
        this.currentChunks[chunk.name] = chunk.hash;
        if (chunk.hash !== oldHash) {
          console.log(chalk.red('changed'), chalk.red(chunk.name));
        } else {
          console.log(chalk.green('same'), chalk.green(chunk.name));
        }
      }.bind(this));
      console.log(chalk.yellow('==================================================='));

      fs.writeFile('webpack-previous-chunks.json', JSON.stringify({ chunks: this.currentChunks }), callback);
    });
  }.bind(this));
};

module.exports = MyPlugin;
