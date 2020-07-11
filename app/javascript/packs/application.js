require('@rails/ujs').start();
require('turbolinks').start();
require('@rails/activestorage').start();
require('channels');

import 'bootstrap';

import { alertOnDestroy } from '../components/dose';
import improveDropdown from '../components/select';

alertOnDestroy();
improveDropdown();
