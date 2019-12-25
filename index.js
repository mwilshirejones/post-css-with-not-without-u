let postcss = require('postcss')

module.exports = postcss.plugin('postcss-with-not-without-u', () => {
  return root => {
    root.walkDecls(/colour/, decl => {
      let erroneousDecl = decl.clone({
        prop: decl.prop.replace(/colour/, 'color'),
        value: decl.value
      })

      decl.replaceWith(erroneousDecl)
    })
  }
})
