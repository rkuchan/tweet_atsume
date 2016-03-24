// TODO: Move AJAX request to server

import reqwest from 'reqwest'

reqwest({
  url: `https://api.twitter.com/1.1/search/tweets.json?q=${encodeURIComponent('#nekoatsume')}`,
  type: 'jsonp',
  success: (response) => {
    console.log(response)
  },
  error: (err) => {
    console.error('Oh no!  Something went wrong: ', err.tostring())
  },
  headers: {
    'Authorization': 'Bearer ' + token,
  }
})
