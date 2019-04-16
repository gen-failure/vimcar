## Vimcar coding challange implementation

Original task: https://github.com/vimcar/frontend-challenge/

### How to start

* clone the repository
* `npm install`
* `npm start`

### How it works

Solution is based on [react-scripts-rewired](https://github.com/marcopeg/create-react-app/blob/master/packages/react-scripts/README.md). Custom webpack/babel configuration is used to enable es7 mobx compatible
decorators and to copy mock product images.

*Mock API* is based on example code provided together with task. New API endpoint was added for downloading products data.

Because the original task required implementation of specific design, I reduces the usage of external css libraries only to *Flexbox Grid*. I believe that I successfully kept the design concept of the original task. Exact metricts might be slightly different, but it should not break the whole layout. Also I had a trouble to identify font used in _Shop.png_ file.

Having alayout prototype in something like [UXPin](https://www.uxpin.com/) would make the design implementation much easier.

The design should be responsive with support of high DPI displays (Retina etc.)

A very simple alert system was implemented. The design of alert system is trival, but sufficient for functional demo.

### Testing

While the testing was not included in requirements, I setup basic testing environment and provided few simple tests as a proof of concept. These tests are *not* supposed to cover 100% of the application, they serve only as a technological demo.

Tests can be executed by running `npm run test`.
