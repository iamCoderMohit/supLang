//main runner
import fs from "fs"
import { tokenize } from "./lexer.js"
import { parse } from "./parser.js"
import { interpret } from "./interpreter.js"

const code = fs.readFileSync("./program.sup", "utf-8")

const tokens = tokenize(code)
const ast = parse(tokens)
interpret(ast)