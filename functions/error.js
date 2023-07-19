/**
 * @see https://github.com/expressjs/express/blob/master/examples/web-service#L13
 */
function error(status, msg) {
  var err = new Error(msg);
  err.status = status;
  return err;
}

export default error;
