// new module
var ten;
(function (ten) {
    var Startup = (function () {
        function Startup() {
        }
        Startup.main = function () {
            console.log('Hello World');
            return 0;
        };
        return Startup;
    })();
})(ten = exports.ten || (exports.ten = {}));
