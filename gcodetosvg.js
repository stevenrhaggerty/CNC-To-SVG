/*jslint todo: true, browser: true, continue: true, white: true*/

/**
 * Written by Alex Canales for ShopBotTools, Inc.
 */

"use strict";

var fs = require("fs");
var gcodetogeometry = require("gcodetogeometry");

/*
 * The colors for displaying G0, G1, G2 and G3 commands, each field is a string
 * of an hexadecimal color (ex: "#ff00ff"). If one field is undefined, the
 * corresponding G-Code command is not displayed.
 *
 * @typedef {object} Colors
 * @property {string} [colors.G0] - The colors for displaying G0 commands.
 * @property {string} [colors.G1] - The colors for displaying G1 commands.
 * @property {string} [colors.G2G3] - The colors for displaying G2 and G3
 *   commands.
 */

/**
 * Generates an SVG file representing the path made by the G-Code commands.
 *
 * @param {string} gcodeCommands - The G-Code commands.
 * @param {Colors} colors - The colors for displaying the path according to the
 * command.
 * @param {string} title - The SVG title.
 * @param {number} width - The SVG width (in pixels).
 * @param {number} height - The SVG height (in pixels).
 * @param {number} [lineThickness=2] - The SVG line thickness (in pixels).
 * @return {string} An empty string if there is an error, else the SVG.
 */
function createSVG(gcodeCommands, colors, title, width, height, lineThickness) {
    return "";
}

exports.createSVG = createSVG;
