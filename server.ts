import { join } from 'path';
import { readFileSync } from 'fs';
import * as express from 'express';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main.bundle');

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(__dirname, 'dist/browser');

const app = express();

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [ provideModuleMap(LAZY_MODULE_MAP) ],
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

app.get('*.*', express.static(DIST_FOLDER));
app.get('*', (req, res) => {
  res.render('index', { req, res });
});

app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
