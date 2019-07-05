import { format } from 'timeago.js';
export default value => {
  if (!value) return;
  return format(value, 'en_US');
}