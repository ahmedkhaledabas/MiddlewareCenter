const express = require('express');
const path = require('path');
const healthRouter = require('./routes/health');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', healthRouter);
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/info', (_req, res) => {
  res.json({
    name: 'starter-web-project',
    version: '1.0.0',
    status: 'ok'
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
