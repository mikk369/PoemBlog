const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
  console.log(`Server us running on port: ${process.env.PORT}`);
});
