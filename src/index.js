const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const route = require('./routes');

const app = express();
const port = 3005;

app.use(morgan('combined')); // http logger combinde

app.engine(
    'hbs',
    handlebars.engine({
        extname: 'hbs'
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use(express.static(path.join(__dirname, 'public'))); // Static file

// Route init
route(app);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
