module.exports.project = (req) => {
    return new Project({
        org: req.body.org,
        name: req.body.name,
        description: req.body.description,
        lon: req.body.lon,
        lat: req.body.lat
      })
    }