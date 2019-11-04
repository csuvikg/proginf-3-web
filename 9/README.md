# PHP
Topic for the second half of the semester

## Resources
  - Official home page: php.net

## Properties
  - Server-side, needs Apache or Nginx, mostly works as a pluggable part
    - Before serving a PHP code, runs it first, and sends the output to the client
  - "hackable", lots of unintended solutions, workarounds
    - pretty much its worse and best property since its poor design
    - Hack is a superset developed by Facebook
  - Modular, features can be turned on and off on a specific server
  - A valid HTML is a valid PHP
  - Difference between single and double quote: single quote makrs a raw string (escapes special characters like \n)
  - Double quote provides string interpolation
  - No variable declaration, assignment is declaration, variables are function scoped and start with dollar sign
  - Types: Booleans, Strings like JS, but numbers are divided into Integers and Floats
  - Bool value is case insensitive, but convention is uppercase
  - PHP arrays are hashmaps where the key is the index
  - `+` is number add operator
  - `.` is string concat operator
  - `<=>` comparator operator, returns with `[-1, 0, 1]` based on two side compare
  - References are not really used, but can be obtained by `@$variable`
  - backtick operator runs bash commands
  - very caothic, no naming conventions whatsoever, many developers contributed to the language

## Resources for the class
  - WinSCP: webprogramozas.inf.elte.hu, pandora credentials (lowercase username)
  - http://webprogramozas.inf.elte.hu/hallgatok/ygdyb2/
  - Add VS Code editor to WinSCP editors as an external editor at the top
