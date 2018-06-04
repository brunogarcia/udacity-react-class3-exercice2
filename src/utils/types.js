import { shape, string } from 'prop-types';

const message = shape({
  username: string.isRequired,
  text: string.isRequired,
});

export default { message };
