import reqwest from 'reqwest'

reqwest({
  url: '/api/tweets',
  success: (response) => {
    console.log('KITTENS ',response)
  },
  error: (err) => {
    console.error('Oh no!  Something went wrong: ', err.tostring())
  },
})
