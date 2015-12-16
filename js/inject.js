/*
 * This file is part of FuckFuckAdBlock.
 *
 * FuckFuckAdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * FuckFuckAdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with FuckFuckAdBlock.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

var bannedWindowProperties = [
    'fuckAdBlock',
    'is_adblock_detect'
];

function getScriptElement(name) {
    var script       = document.createElement('script');
    script.innerHTML = "Object.defineProperty(window, '" + name + "', { value: null, writable: false, configurable: false });";
    return script;
}

function injectScript() {
    if (document.head) {
        bannedWindowProperties.forEach(function(property) {
            document.head.appendChild(getScriptElement(property));
        });

        clearInterval(injectCheck);
    }
}

var injectCheck = setInterval(injectScript, 1);
