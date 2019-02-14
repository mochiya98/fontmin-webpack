require('./entry.css')

const classes = {
  // font-awesome
  'fa-table': true,
  'fa-address-book': true,
  'my-later-file': true,
  'my-compressed-css': true,
  'my-other-compressed-css': true,
  // ionicons
  'ion-ios-archive': true,
}

function later() {
  require.ensure(['./later.css'], () => console.log('loaded!'))
}

console.log(classes)
