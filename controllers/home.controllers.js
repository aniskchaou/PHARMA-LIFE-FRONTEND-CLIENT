exports.getAbout = async function (req, res, next) {
  res.render("elements/about", { viewTitle: 'about' });
}

exports.getCart = async function (req, res, next) {
  res.render("elements/cart", { viewTitle: 'My cart' });
}

exports.getCheckOut = async function (req, res, next) {
  res.render("elements/checkout", { viewTitle: 'Checkout' });
}

exports.getHome = async function (req, res, next) {
  res.render("elements/index", { viewTitle: 'Pharma Life' });
}


exports.getContact = async function (req, res, next) {
  res.render("elements/contact", { viewTitle: 'Contact' });
}

exports.getStore = async function (req, res, next) {
  res.render("elements/store", { viewTitle: 'store' });
}

exports.getThankyou = async function (req, res, next) {
  res.render("elements/thankyou", { viewTitle: 'thankyou' });
}

exports.getView = async function (req, res, next) {
  res.render("elements/view", { viewTitle: 'View' });
}




