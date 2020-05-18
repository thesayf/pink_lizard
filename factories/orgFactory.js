module.exports.org = (req) => {
return new Org({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    password: req.body.password,
    img: req.body.img
  })
}