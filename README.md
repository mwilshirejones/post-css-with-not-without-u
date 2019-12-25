# PostCSS With Not Without U

[PostCSS](https://github.com/postcss/postcss) plugin allowing the correct spelling of "colour".

```css
.foo {
  /* Input example */
  colour: #000;
}
```

```css
.foo {
  /* Output example */
  color: #000;
}
```

## Strict mode
When `strict` mode is enabled an error will be thrown when colour is spelt incorrectly in the source CSS. For example:

```css
.foo {
  color: #000;
}
```

Will throw a `CssSyntaxError` instructing you to 'Use correct spelling of "colour"...'

## Usage

Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you already use PostCSS, add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-with-or-without-u'),
    require('autoprefixer')
  ]
}
```

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

[official docs]: https://github.com/postcss/postcss#usage
