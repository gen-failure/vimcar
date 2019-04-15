export default {
  'POST:https://example.com/-/v1/stock/reserve': () => {
    const responseFactor = Math.random()
    if (responseFactor < 0.1) {
      return Promise.resolve({
        ok: false,
        status: 500,
        json: () => {
          throw new Error('Empty Response')
        },
      })
    } else if (responseFactor < 0.3) {
      return Promise.resolve({
        ok: false,
        status: 418,
        json: () => {
          throw new Error('Empty Response')
        },
      })
    } else {
      return Promise.resolve({
        ok: true,
        status: 204,
        json: () => {
          throw new Error('Empty Response')
        },
      })
    }
  }
}
