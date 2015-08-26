require('./style/bootstrap.min.css');
require('./style/bootstrap-theme.min.css');
require('./style/main.css');
import 'babel-core/polyfill';
import React from 'react';
import Root from './containers/Root';
React.render(<Root/>, document.getElementById('root'));
