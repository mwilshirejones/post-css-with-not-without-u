let postcss = require('postcss')

module.exports = postcss.plugin('postcss-with-or-without-u', (opts = { }) => {

  // Work with options here

  return (root, result) => {

    // Transform CSS AST here

  }
})
