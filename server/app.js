const connectToMongo = require('../functions/connect');
const app = require('../app');
const PORT = process.env.PORT || 9000;

app.listen(PORT, async () => {
  await connectToMongo();
  /* eslint-disable-next-line */
  console.log(`api started on ${PORT}`);
});
