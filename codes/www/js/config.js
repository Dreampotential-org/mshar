var SERVER = '';
var HOST = '';
var WEBSOCKET_HOST = '';

function set_server() {

    if (window.location.origin.includes("compass")) {
        SERVER = 'https://vm2967.tmdcloud.com/';
        HOST = 'https://vm2967.tmdcloud.com';
        WEBSOCKET_HOST = 'wss://vm2967.tmdcloud.com';
    }

    else if (window.location.origin.includes("127.0.0.1")) {
        SERVER = 'http://localhost:8040/';
        HOST = 'http://localhost:8040';
        WEBSOCKET_HOST = 'wss://localhost:8040';
    }
    else if (window.location.origin.includes("localhost")) {
        SERVER = 'http://localhost:8040/';
        HOST = 'http://localhost:8040';
        WEBSOCKET_HOST = 'wss://localhost:8040';
    }
    else {
        SERVER = 'https://api.dreampotential.org/';
        HOST = 'api.dreampotential.org';
        WEBSOCKET_HOST = 'wss://api.dreampotential.org';
    }
};
set_server()

