//breaks text
export function tokenize(code) {
    return code.split("\n").map(line => {
        line = line.trim()
        if(!line) return null

        const firstSpace = line.indexOf(" ")

        if(firstSpace === -1) {
            return [line]
        }

        const command = line.slice(0, firstSpace)
        const rest = line.slice(firstSpace + 1)

        return [command, rest]
    }).filter(Boolean)
}