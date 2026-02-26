import { tokenize } from "./lexer.js";
import { parse } from "./parser.js";
import { interpret } from "./interpreter.js";

export function runSupLang(code) {
  try {
    const tokens = tokenize(code);
    const ast = parse(tokens);
    const result = interpret(ast);

    return {
      success: true,
      output: result,
    };
  } catch (error) {
    return {
        success: false,
        error: error.message
    }
  }
}
