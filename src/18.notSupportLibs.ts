// var _ = require('lodash');
import _ from 'lodash';

const data = [
  {
    username: 'jalz',
    role: 'admin'
  },
  {
    username: 'jalz2',
    role: 'seller'
  },
  {
    username: 'jalz4',
    role: 'seller'
  },
  {
    username: 'jalz3',
    role: 'customer'
  },
]

const rta = _.groupBy(data, (item) => item.role);

console.log("This is my response",rta);

