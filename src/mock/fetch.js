/**
 * A partial mock implementation of the standard fetch function.
 *
 * @arg {string} url the URL to be requested
 * @arg {{ method: string, body: Object | string }} options
 * @return {Response}
 */

import reserveMock from './reserve';
import productsMock from './products';

const fetch = (
  url,
  options = {},
) => {
  const requestKey = `${options.method || 'GET'}:${url}`
  const response = responses[requestKey]
  return response
    ? response(options)
    : Promise.resolve({
        status: 404,
        ok: false,
        json: () => ({ code: 'not-found'
      }),
    })
}

const responses = {
  ...reserveMock,
  ...productsMock
}

export default fetch;
