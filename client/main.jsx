'use strict';

import 'styles/main.scss';

import React from 'react';
import { render } from 'react-dom';

import Index from 'components/Index/Index';

import Store from './store';

render(<Index items={[1,2,3]} />, document.getElementById('js-main'));
