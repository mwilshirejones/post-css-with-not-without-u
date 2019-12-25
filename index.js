const postcss = require('postcss')

const CORRECT_SPELLING = 'colour'
const ERRONEOUS_SPELLING = 'color'

module.exports = postcss.plugin('postcss-with-not-without-u', (opts = {}) => {
  return root => {
    root.walkDecls(declaration => {
      let { prop, value } = declaration

      if (
        opts.strict === true &&
        prop.includes(ERRONEOUS_SPELLING)
      ) {
        throw declaration.error('Use correct spelling of "colour"...')
      }

      if (prop.includes(CORRECT_SPELLING)) {
        let erroneousDecl = declaration.clone({
          prop: prop.replace(CORRECT_SPELLING, ERRONEOUS_SPELLING),
          value
        })

        declaration.replaceWith(erroneousDecl)
      }
    })
  }
})
