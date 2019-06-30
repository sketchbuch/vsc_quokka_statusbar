"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const create_buttons_1 = require("../utils/create_buttons");
const update_statusbar_1 = require("../utils/update_statusbar");
const watch_editors_1 = require("../utils/watch_editors");
const quokka_1 = require("../constants/quokka");
const buttons_1 = require("../buttons/buttons");
function activate() {
    if (vscode.extensions.getExtension(quokka_1.QUOKKA_EXT_NAME) === undefined) {
        return;
    }
    const buttons = create_buttons_1.default(buttons_1.buttons);
    watch_editors_1.default(buttons);
    update_statusbar_1.default(vscode.window.activeTextEditor, buttons);
}
exports.activate = activate;
exports.default = activate;
//# sourceMappingURL=activate.js.map