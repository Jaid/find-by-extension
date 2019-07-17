import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
   * @type { import("../src") }
   */
const {default: findByExtension} = indexModule

it("should run with string return", () => {
  const result = findByExtension("js", {
    cwd: __dirname,
  })
  expect(result).toBe("test.js")
})

it("should return absolute path", () => {
  const result = findByExtension("js", {
    cwd: __dirname,
    absolute: true,
  })
  expect(result).toBe(path.join(__dirname, "test.js"))
})

it("should run with array return", () => {
  const result = findByExtension("js", {
    all: true,
    cwd: path.join(__dirname, "..", "src"),
  })
  expect(result).toStrictEqual(["index.js"])
})