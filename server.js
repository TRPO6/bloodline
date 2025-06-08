const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const DATA_FOLDER = path.join(__dirname, 'json');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  if (req.method === 'GET' && req.url.startsWith('/api/')) {
    const fileName = req.url.replace('/api/', '') + '.json';
    const filePath = path.join(DATA_FOLDER, fileName);
    
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Данные не найдены' }));
        return;
      }
      
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Маршрут не найден' }));
  }
});

server.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}/api/`);
  console.log('Доступные endpoints:');
  fs.readdirSync(DATA_FOLDER).forEach(file => {
    if (file.endsWith('.json')) {
      console.log(`- http://localhost:${PORT}/api/${file.replace('.json', '')}`);
    }
  });
});