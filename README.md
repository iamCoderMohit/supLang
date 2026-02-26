# ⚡ SupLang

A lightweight experimental scripting language built on top of JavaScript.

SupLang compiles into JavaScript logic and runs through a custom interpreter, providing a fun, expressive syntax while keeping JS power underneath.

---

## 🧠 Philosophy

SupLang is:

* Minimal
* Expressive
* Beginner-friendly
* Built for experimentation
* Designed to feel modern and fun

Instead of traditional keywords, it uses expressive alternatives to make coding feel more natural and creative.

---

# 🚀 Core Features

## 1️⃣ `flex` — Console Output

Equivalent to `console.log()` in JavaScript.

```txt
flex "hello world"
flex 5 buff 3
flex x
```

### Behavior:

* Prints strings
* Prints variables
* Evaluates inline expressions
* Supports operator-based math

---

## 2️⃣ `lowkey` — Mutable Variables

Equivalent to `let` in JavaScript.

```txt
lowkey x 10
lowkey name "Mohit"
```

Creates a mutable variable stored in the language environment.

---

## 3️⃣ `bet` — Immutable Variables

Equivalent to `const` in JavaScript.

```txt
bet pi 3.14
```

Creates a constant variable that cannot be reassigned.

---

## 4️⃣ `vibeCheck` — Conditional Execution

Equivalent to `if` in JavaScript.

```txt
vibeCheck x buff 2
```

Executes logic conditionally (based on internal implementation).

---

# ➗ Custom Operators

SupLang replaces traditional math symbols with expressive keywords:

| Operator | Meaning        | JavaScript Equivalent |
| -------- | -------------- | --------------------- |
| `buff`   | Addition       | `+`                   |
| `nerf`   | Subtraction    | `-`                   |
| `smash`  | Multiplication | `*`                   |
| `split`  | Division       | `/`                   |

### Example:

```txt
flex 3 buff 3
```

Output:

```
6
```

---

# 🏗 Architecture

SupLang consists of:

* Lexer (tokenizer)
* Parser (AST generator)
* Interpreter (execution engine)
* Environment system (variable storage)
* Operator resolution layer

Expressions are evaluated at runtime inside commands.

---

# 🔥 Expression Support

Inline expressions are supported inside commands:

```txt
flex 5 buff 2
lowkey x 10
flex x nerf 3
```

Operators are resolved dynamically using a custom operator map.

---

# 🌱 Built On Top of JavaScript

SupLang runs on Node.js and uses:

* JavaScript objects for environment storage
* Function-based command handlers
* A modular command system
* Custom error handling

It does not transpile to JS — it interprets directly.

---

# 🎯 Current Capabilities

✔ Variable declaration (mutable + constant)
✔ Console output
✔ Conditional execution
✔ Custom math operators
✔ Expression parsing
✔ Runtime evaluation

---

# 🧪 Example Program

```txt
lowkey x 10
bet y 5

flex x buff y
```

Output:

```
15
```

---

# 🚧 Future Ideas

* Nested expressions
* Operator precedence
* Functions
* Loops
* Custom user-defined commands
* Transpiler mode
* Type system

---

# 💡 Why This Exists

This project is an exploration into:

* Language design
* Interpreter architecture
* Runtime environments
* Syntax abstraction
* Building developer tools from scratch
