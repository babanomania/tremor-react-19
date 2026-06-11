// Assembles dist/theme.css: the @source hint lets the consumer's Tailwind v4
// build scan this package's bundle without manual configuration.
import { readFileSync, writeFileSync } from "node:fs"

const theme = readFileSync("src/theme.css", "utf8")
writeFileSync("dist/theme.css", '@source "./index.js";\n\n' + theme)
