// Create web server

// 1. Create web server
// 2. Create router
// 3. Create API

// 1. Create web server
const express = require('express');
const app = express();

// 2. Create router
const router = express.Router();
const path = require('path');
const main = require('./main/main');
const email = require('./email/email');
const join = require('./join/index');
const login = require('./login/index');
const logout = require('./logout/index');
const movie = require('./movie/index');
const board = require('./board/index');
const comment = require('./comment/index');

// 3. Create API
router.get('/', (req, res) => {
	console.log('index.js GET /');
	res.sendFile(path.join(__dirname, '../public/main.html'));
});

// 3. Create API
router.use('/main', main);
router.use('/email', email);
router.use('/join', join);
router.use('/login', login);
router.use('/logout', logout);
router.use('/movie', movie);
router.use('/board', board);
router.use('/comment', comment);

// 3. Create API
app.use('/', router);

// 3. Create API
const port = 3000;
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});