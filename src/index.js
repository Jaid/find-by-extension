/** @module find-by-extension */

import path from "path"

import ensureArray from "ensure-array"
import fss from "@absolunet/fss"
import ensureStart from "ensure-start"

/**
 * @typedef {Object} Options
 * @prop {boolean} [absolute=false]
 * @prop {string} [cwd=process.cwd()]
 * @prop {boolean} [all=false]
 */

/**
 * Finds the first existing file ending with specified extension.
 * @function
 * @param {string|string[]} extensions
 * @param {Options} [options]
 * @returns {false|string|string[]}
 * @example
 * import findByExtension from "find-by-extension"
 * const result = findByExtension("js")
 * result === "index.js"
 */
export default (extensions, options) => {
  options = {
    cwd: process.cwd(),
    ...options,
  }
  const files = fss
    .readdir(options.cwd, {
      withFileTypes: true,
    })
    .filter(file => file.isFile())
    .map(({name}) => name)
  let matches = []
  for (const extension of extensions |> ensureArray) {
    const normalizedExtension = ensureStart(extension, ".")
    for (const file of files) {
      if (file.endsWith(normalizedExtension)) {
        matches.push(file)
      }
    }
  }
  if (matches.length === 0) {
    return false
  }
  if (options.absolute) {
    matches = matches.map(name => path.join(options.cwd, name))
  }
  if (options.all) {
    return matches
  } else {
    return matches[0]
  }
}