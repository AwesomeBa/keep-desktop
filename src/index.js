//const run = require("child_process")
const { remote } = require('electron');

document.getElementById("minimize").addEventListener("click", function (e) {
    var window = remote.getCurrentWindow();
    window.minimize();
}
);

document.getElementById("maximize").addEventListener("click", function (e) {
    var window = remote.getCurrentWindow();
    if (!window.isMaximized()) {
        window.maximize();
    } else {
        window.unmaximize();
    }
}
);

document.getElementById("close").addEventListener("click", function (e) {
    var window = remote.getCurrentWindow();
    window.close();
}
);