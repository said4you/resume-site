const express = require('express');
const app = express();
const PORT = 3000;

// статические файлы
app.use(express.static('public'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
