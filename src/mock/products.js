const products = [
  {
    title: "42mm Space Gray Aluminium Case with Black Woven Nylon",
    id: "s42sg-nsbk-sel-201603"
  },
  {
    title: "42mm Gold Aluminium Case with Gold/Royal Blue Woven Nylon",
    id: "s42gd-nsgb-sel-201603"
  },
  {
    title: "42mm Rose Gold Aluminium Case with Royal Blue Woven Nylon",
    id: "s42rg-nsdb-sel-201603"
  },
  {
    title: "42mm Silver Aluminium Case with Scuba Blue Woven Nylon",
    id: "s42si-nssb-sel-20160"
  },
  {
    title: "Double Tour, 38mm Stainless Steel Case with Etain Leather Band",
    id: "h38ss-dtgr-sel-201603"
  },
  {
    title: "Double Tour, 38mm Stainless Steel Case with Capucine Leather Band",
    id: "h38ss-dtrd-sel-201603"
  },
  {
    title: "Double Tour, 38mm Stainless Steel Case with Blue Jean Leather Band",
    id: "h38ss-dtbl-sel-201603"
  },
  {
    title: "Double Tour, 48mm Stainless Steel Case with Noir Leather Band",
    id: "h42ss-stbk-sel-201603"
  },

]

export default {
  'GET:https://example.com/-/v1/stock/products': () => {
    const responseFactor = Math.random()
    if (responseFactor < 0.05) {
      return Promise.resolve({
        ok: false,
        status: 500,
        json: () => {
          throw new Error('Empty Response')
        },
      })
    } else {
      return Promise.resolve({
        ok: true,
        status: 204,
        json: () => {
          return products;
        },
      })
    }
  }
}
