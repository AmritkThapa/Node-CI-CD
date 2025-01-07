const express = require('express');
const app = express();
const PORT = 8090;

// app.listen(
//     PORT,
//     () => console.log(`It's live on http://localhost:${PORT}`)
// )

app.get('/android', (req, res) => {
    res.status(200).send({
        data: ["Xaomi", "Samsung", "Google Phone"]    
    })
});

if (require.main === module) {
    app.listen(PORT, () => {
      console.log(`It's live on http://localhost:${PORT}`);
    });
}
  
module.exports = app;