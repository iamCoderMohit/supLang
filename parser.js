import { commands } from "./command.js"
import { unknownError } from "./errors/unknown.js"
import { operators } from "./utils/operators.js"

//understands meaning
export function parse(tokens) {
    const parsed = tokens.map((token, index) => {
        const command = token[0]
        let args = token[1]

        const handler = commands[command]

        if(!handler) {
            unknownError(command, index + 1)
        }

        const parts = args.split(" ") // operator expression detection

        if(parts.length === 3 && operators[parts[1]]) {
            args = {
                __expr: true,
                left: parts[0],
                operator: parts[1],
                right: parts[2]
            }
        }

        return handler.parse(args)
        
    })
    return parsed
}