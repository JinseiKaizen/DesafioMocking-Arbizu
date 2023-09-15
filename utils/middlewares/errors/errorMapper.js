const errorMapper = (err) => {
    switch (err.name) {
      case "ProductNotFoundError":
        return {
          code: 404,
          message: "El producto no se encontró"
        };
      case "ProductAlreadyExistsError":
        return {
          code: 409,
          message: "El producto ya existe"
        };
      default:
        return {
          code: 500,
          message: "Error interno del servidor"
        };
    }
  };
  
  module.exports = errorMapper;