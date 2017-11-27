import t from './localization';
import storage from './storage';
import { required, max, min, email, confirmPassword } from './validations';
import api from './api';

export { storage, t, api };
export const validations = {
  required,
  max,
  min,
  email,
  confirmPassword
};
