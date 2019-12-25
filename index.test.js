const postcss = require('postcss')

const plugin = require('./')

async function run (input, opts) {
  return postcss([plugin(opts)]).process(input, {
    from: undefined
  })
}

it(
  'Replaces correct spelling of "colour" with the erroneous spelling, "color"',
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

    let result = await run(input)
    expect(result.css).toEqual(expectedOutput)
    expect(result.warnings()).toHaveLength(0)
  }
)

it('Leaves other properties unchanged', async () => {
  let input = `
    a {
      border: yup;
    }
  `

  let expectedOutput = input

  let result = await run(input)
  expect(result.css).toEqual(expectedOutput)
  expect(result.warnings()).toHaveLength(0)
})

it('Throws an error when colour is spelt incorrectly', async () => {
  let input = `
    a {
      color: nope;
    } 
  `

  let error
  try {
    await run(input)
  } catch (err) {
    error = err
  }

  expect(error.name).toEqual('CssSyntaxError')
  expect(error.reason).toEqual('Use correct spelling of "colour"...')
})
