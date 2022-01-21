const notFound = (req,res)=> res.status(404).send('url does not exist');


module.exports = notFound;