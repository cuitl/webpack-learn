var a = require('./module/a');
import './css/style.css';
import icon from './images/image.png';

import printMe from './print';

a.hello();

var app = document.getElementById('app');

var img = new Image();
img.src = icon;

app.appendChild(img);

app.addEventListener('click', function() {
    printMe();
});



if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!~~~~~~~');
        printMe();
    });
}