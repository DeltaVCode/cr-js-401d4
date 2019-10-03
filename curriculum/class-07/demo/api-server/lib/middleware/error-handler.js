// error handlers must take all four parameters to receive err
module.exports = (err, req, res, next) => {
  console.error(err);
  res.status(500);
  res.send({
    message: err.message,
    error: err.toString(),
    status: 500,
  });
};
