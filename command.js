import { operators } from "./utils/operators.js";

export const commands = {
  flex: {
    // console.log
    parse: (args) => {
      if (typeof args === "object" && args.__expr) {
        return {
          type: "flex",
          value: args,
        };
      }
      return {
        type: "flex",
        value: args.replace(/"/g, ""),
      };
    },
    run: (node, output, runLine, env) => {
      const resolve = (v) => {
        if (v in env) return env[v].value;
        return Number(v);
      };

      //expression support
      if (typeof node.value === "object" && node.value.__expr) {
        const { left, operator, right } = node.value;
        const op = operators[operator];

        if (!op) unknownError(operator);

        output.push(op(resolve(left), resolve(right)));
        return;
      }
      
      const val = env[node.value];

      if (val) {
        output.push(val.value);
      } else {
        output.push(node.value);
      }
    },
  },
  vibeCheck: {
    // if
    parse: (args) => {
      const [conditionPart, actionPart] = args.split(" then ");

      return {
        type: "vibeCheck",
        condition: conditionPart,
        action: actionPart,
      };
    },
    run: (node, output, runLine) => {
      const [left, operator, right] = node.condition.split(" ");

      let result = false;

      if (operator === ">") result = Number(left) > Number(right);
      if (operator === "<") result = Number(left) < Number(right);
      if (operator === "==") result = Number(left) == Number(right);

      if (result) {
        runLine(node.action, output);
      }
    },
  },
  lowkey: {
    // let
    parse: (args) => {
      const [name, value] = args.split(" ");
      return {
        type: "lowkey",
        name,
        value: Number(value),
      };
    },
    run: (node, output, runLine, env) => {
      env[node.name] = {
        value: node.value,
        mutable: true,
      };
    },
  },
  bet: {
    // const
    parse: (args) => {
      const [name, value] = args.split(" ");
      return {
        type: "bet",
        name,
        value: Number(value),
      };
    },
    run: (node, output, runLine, env) => {
      env[node.name] = {
        value: node.value,
        mutable: false,
      };
    },
  },
};
