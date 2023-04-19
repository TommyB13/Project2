
import axios from 'axios';

import data from './clues.json' assert {"type": "json"};

axios.post("http://localhost:2400/api/clues/bulk", data)
    .then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })