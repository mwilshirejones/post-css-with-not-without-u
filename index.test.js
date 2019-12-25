const postcss = require('postcss')

const plugin = require('./')

async function run (input, output, opts) {
  let result = await postcss([plugin(opts)]).process(input, {
    from: undefined
  })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it(
  'Replaces correct spelling of "colour" to the erroneous spelling, "color"',
  async () => {
    let input = `
      a {
        colour: blue;
        background-colour: blue;
      }
    `

    let expectedOutput = `
      a {
        color: blue;
        background-color: blue;
      }
    `

    await run(input, expectedOutput)
  }
)

it('Leaves other selectors unchanged', async () => {
  let input = `
    a {
      border: yup;
    }
  `

  await run(input, input)
})
