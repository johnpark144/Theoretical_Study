- ``

#####################################################################################

- `Describe the difference between '<script>', '<script async>' and '<script defer>'`

  - <script>
    - HTML parsing is blocked, when script is encountered
    - the script is fetched and executed immediately
    - HTML parsing continues after that
  - <script async>
    - common : the script is fetched alongside HTML parsing 
    - difference : It runs when it's ready
  - <script defer>
    - common : the script is fetched alongside HTML parsing 
    - difference : It runs when HTML parsing is finished

- `Explain how prototypal inheritance works`

  - Used for object inheritance (similar with class)
  - When accessing, it searches via the prototype chain if the property/method isn't found on the object.

- `Explain how `this` works`

  - "this" is a dynamic self-reference object tied to how a function is invoked.
  - "this" can explicitly be bound using "apply," "call," or "bind."
  - Free function invocations result in "undefined" in strict mode or the "window" object in browser
  - Arrow functions inherit "this" from their surrounding scope at creation.

- `Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.`
  - Block elements size depends on width, height, paddings, and borders.
  - Without a specified height, paddings are added to the content's dimensions
  - Inline elements adjust to content dimensions with left and right margins/paddings.

<!-- About box-sizing -->

- "content-box" (defaults) : It expands border, padding, and margin upon content size
- "border-box" : Its size includes all (within specified width and height)

- `What are the differences between variables created using 'let', 'var' or 'const'?`

  - var : 1. multiple declarations, 2. block-scoped(if, for, while, try/catch) is not local scope but global, 3. variable hoisting ('undefined' before declarations)

  - let : 1. no multiple declarations, block-scoped is local scope, it is like no variable hoisting (TDZ), multiple assignments.
  - const : 1. no multiple declarations, block-scoped is local scope, it is like no variable hoisting (TDZ), requires immediate assignment with declaration together

- ``
