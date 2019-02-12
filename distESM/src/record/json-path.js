import * as utils from "../util/utils";
const SPLIT_REG_EXP = /[[\]]/g;
/**
 * Returns the value of the path or
 * undefined if the path can't be resolved
 */
export function get(data, path, deepCopy) {
    const tokens = tokenize(path);
    let value = data;
    for (const token of tokens) {
        if (value === undefined) {
            return undefined;
        }
        if (typeof value !== "object") {
            throw new Error("invalid data or path");
        }
        value = value[token];
    }
    return deepCopy !== false ? utils.deepCopy(value) : value;
}
/**
 * This class allows to set or get specific
 * values within a json data structure using
 * string-based paths
 */
export function setValue(root, path, value) {
    if (path === null) {
        return value;
    }
    const tokens = tokenize(path);
    const rootCopy = utils.deepCopy(root);
    const valueCopy = utils.deepCopy(value);
    let node = rootCopy;
    let i;
    for (i = 0; i < tokens.length - 1; i++) {
        const token = tokens[i];
        if (node[token] !== undefined && node[token] !== null && typeof node[token] === "object") {
            node = node[token];
        }
        else if (typeof tokens[i + 1] === "number") {
            const array = new Array(tokens[i + 1]);
            array.fill(null);
            node = node[token] = array;
        }
        else {
            node = node[token] = {};
        }
    }
    if (value === undefined) {
        delete node[tokens[i]];
    }
    else {
        node[tokens[i]] = valueCopy;
    }
    return rootCopy;
}
/**
 * Parses the path. Splits it into
 * keys for objects and indices for arrays.
 */
function tokenize(path) {
    if (path === null) {
        return [];
    }
    const tokens = [];
    const parts = path.split(".");
    for (const untrimmedPart of parts) {
        const part = untrimmedPart.trim();
        if (part.length === 0) {
            continue;
        }
        const arrayIndexes = part.split(SPLIT_REG_EXP);
        if (arrayIndexes.length === 0) {
            // TODO
            continue;
        }
        tokens.push(arrayIndexes[0]);
        for (let j = 1; j < arrayIndexes.length; j++) {
            if (arrayIndexes[j].length === 0) {
                continue;
            }
            tokens.push(Number(arrayIndexes[j]));
        }
    }
    return tokens;
}
//# sourceMappingURL=json-path.js.map