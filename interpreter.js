import { commands } from "./command.js";
import { unknownIfError } from "./errors/unknowIf.js";
import { unknownError } from "./errors/unknown.js";
import { operators } from "./utils/operators.js";

//executes logic
export function interpret(ast) {
  let output = [];
  let env = {};

  const runLine = (line, output) => {
    const [command, rest] = line.split(/ (.+)/);

    const handler = commands[command];

    if (!handler) {
      unknownIfError(command);
    }

    const node = handler.parse(rest);
    handler.run(node, output, runLine, env);
  };

  ast.forEach((node) => {
    const handler = commands[node.type];

    if(!handler) {
        unknownError(node.type)
    }
    handler.run(node, output, runLine, env);
  });

  return output.join("\n");
}
