const compression = require("express-compression");
const Boom = require("@hapi/boom");
const PORT = 3005;
const { boomError, logError, responseError, handleError } = require("./utils/middlewares/errors/errorHandler");

app.use(compression({
  brotli: { enabled: true, zlib: {} }
}));
app.get("/", (req, res, next) => {
  try {
    let str = "Hola chicos, soy extremadamente largo... ";
    throw Boom.badRequest("Enviaste los parametros mal!!");
    res.send(str.repeat(100000));
  } catch (error) {
    next(error);
  }
  
})

app.use(logError);
app.use(boomError);
app.use(responseError);
app.use(handleError);



app.listen(PORT, () => { console.log(`http://localhost:${PORT}`) });