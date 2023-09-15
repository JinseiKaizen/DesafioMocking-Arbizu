const logError = (err, req, res, next) => {
  // Sentry
  console.log('[LOG-ERROR]');
  console.log(err);
  next(err);
};

const boomError = (err, req, res, next) => {
  if(err?.isBoom){
    const { output } = err;
    return res.status(output.statusCode).json(output.payload);
  }
  next(err);
};

const responseError = (err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
};

const handleError = (err, req, res, next) => {
  // ...

  // Agregamos el módulo de mocking
  if (req.path === '/mockingproducts') {
    next(err);
  }

  // Agregamos el customizador de errores
  const mappedError = errorMapper(err);
  res.status(mappedError.code).json(mappedError.message);
};

module.exports = {
  logError,
  boomError,
  responseError,
  handleError
};