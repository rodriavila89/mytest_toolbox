const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : '';

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = 'El texto debe ser de 10 a 300 caracteres';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Debe ingresar un text';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
