"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hrtime(previousTimestamp) {
    var baseNow = Math.floor((Date.now() - performance.now()) * 1e-3);
    var clocktime = performance.now() * 1e-3;
    var seconds = Math.floor(clocktime) + baseNow;
    var nanoseconds = Math.floor((clocktime % 1) * 1e9);
    if (previousTimestamp) {
        seconds = seconds - previousTimestamp[0];
        nanoseconds = nanoseconds - previousTimestamp[1];
        if (nanoseconds < 0) {
            seconds--;
            nanoseconds += 1e9;
        }
    }
    return [seconds, nanoseconds];
}
exports.hrtime = hrtime;
var main = typeof process !== "undefined" && typeof process.hrtime !== "undefined"
    ? process.hrtime
    : hrtime;
exports.default = main;