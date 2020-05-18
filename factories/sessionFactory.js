module.exports.session = (req) => {
    return new Session({
        project: req.body.project,
        description: req.body.description,
        lat: req.body.lat,
        lon: req.body.lon
      })
};