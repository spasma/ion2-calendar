"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIonIconsV4 = void 0;
var getIconMap = function () {
    if (typeof window === 'undefined') {
        return new Map();
    }
    else {
        var win = window;
        win.Ionicons = win.Ionicons || {};
        win.Ionicons.map = win.Ionicons.map || new Map();
        return win.Ionicons.map;
    }
};
var isIonIconsV4 = function () {
    var iconMap = getIconMap();
    return !!iconMap.get('md-arrow-dropdown');
};
exports.isIonIconsV4 = isIonIconsV4;
//# sourceMappingURL=icons.js.map