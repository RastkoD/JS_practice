# Find the Missing Digit

The “Find the Missing Digit” coding challenge is a classic problem often encountered in interviews, coding bootcamps, and online platforms like LeetCode or CodeSignal. It tests your ability to manipulate strings, arithmetic logic, and handle edge cases.

---

## 🧠 The Problem Statement

You are given a simple arithmetic equation where **exactly one digit (0-9)** has been replaced with a **question mark (?)**. Your task is to determine which digit belongs in the place of `?` so that the equation is valid.

### Example:

```
Input:  "1? + 23 = 35"
Output: 2  (because 12 + 23 = 35)
```

```
Input:  "31 - ?2 = 150"
Output: -1 (because no digit can result in 150)
```

---

## ✅ Constraints

- Your code must handle the following operations:

  - Addition (`+`)
  - Subtraction (`-`)
  - Multiplication (`*`)
  - Division (`/`)
    _(integer division only — no remainders, and never divide by zero)_

- The `?` can appear anywhere in the numbers on the left or right of the equation.

- There will only be **one missing digit**.

- Equations will always be provided as a string, and should be formatted as:

  ```
  "{integer} {operator} {integer} = {integer}"
  ```

- Return `-1` if it is impossible to create a mathematically correct equation or if the input is invalid.

---

## ⚠️ Edge Cases

- **Division by zero** must be avoided.
- Expressions with **multiple `?`** should be rejected or handled appropriately.
  _(The provided code assumes only one `?`.)_
- Ensure **all numbers are valid integers** after replacement.
- Reject answers that would result in numbers like `012` or `00` (not valid integers).
