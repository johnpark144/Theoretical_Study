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
- "border-box" : Its size includes all except for margin (within specified width and height)

- `What are the differences between variables created using 'let', 'var' or 'const'?`

  - var : 1. multiple declarations, 2. block-scoped(if, for, while, try/catch) is not local scope but global, 3. variable hoisting ('undefined' before declarations)

  - let : 1. no multiple declarations, block-scoped is local scope, it is like no variable hoisting (TDZ), multiple assignments.
  - const : 1. no multiple declarations, block-scoped is local scope, it is like no variable hoisting (TDZ), requires immediate assignment with declaration together

- `What does '* { box-sizing: border-box; }' do?`

  - It simplifies layout by including content, padding, and borders when calculating element dimensions for all page elements. (No margin included)

- `What is CSS selector specificity and how does it work?`

  - Priority : !important > Inline Style > Id > Class > Tag(element) > Universal Selector (\*)

- `What is the CSS 'display' property and can you give a few examples of its use?`
- `What's the difference between 'inline' and 'inline-block'?`

  - none: Element is invisible and doesn't take up space.
  - block: Element displayed on a new line ex) div, p, h1
  - inline: Element placed within a line alongside other elements ex) span
  - inline-block: Element placed within a line in width, height, pading and margin control.
  - flex: It's useful for 1-dimensional layouts, such as rows or columns.
  - grid: It's useful for 2-dimensional layouts with rows and columns.

- `What is the difference between '==' and '==='?`

  - '==' is the abstract equality operator while '===' is the strict equality operator.
  - namely, '===' chech even type equality.

- `What's the difference between a variable that is: 'null', 'undefined' or undeclared?`

  - undefined: Variable declared but not assigned any value.
  - null: Variable assigned as empty or absent value.

- `What's the difference between '.call' and '.apply'?`

  - Common : They are innvoked as method with the first parameter as 'this' value.
  - Difference: For the rest arguments, 'Call' uses 'Commas', 'Apply' uses 'Array'. (CCAA)

- `Describe the difference between a cookie, 'sessionStorage' and 'localStorage'.`

  - Local Storage:
    - accessible by other websites
    - Long-term storage
    - store large data.
  - Session Storage: Tab-specific, data vanishes when tab closes, secure and fast.
    - inaccessible by other websites.
    - Tab-specific storage (data vanishes when tab closes)
    - secure and fast.
  - Cookies: Small data, expires after a set time, accessible by other websites.
    - accessible by other websites.
    - expiration-time-set-storage
    - Small data

- `What's the difference between a 'relative', 'fixed', 'absolute'and 'static'-ally positioned element?`

  - static
    - According to the flow (Default)
    - Top, right, z-index don't work
  - relative
    - From its original location, It positions with "top, bottom, left, right" values
    - Occupied original space. (its flow still stand)
  - absolute
    - From parents factor's "x:0 y:0" point, It positions with "top, bottom, left, right" values
    - No occupied original space. (outside of the flow)
  - Fixed
    - Always stays in one place on the screen.
  - Sticky
    - Moves with the flow before specific point.
    - After reaching a specific point while scrolling, Stays in one place on the screen.

- `Can you offer a use case for the new arrow => function syntax?`

  - Shorter Function Expressions
  - Implicit Return
  - No Binding of 'this'
  - Simplifying Callbacks
  - Iterating Over Arrays
  - Method in object

- `Why is it generally a good idea to position CSS '<link>'s between '<head></head>' and JS '<script>'s just before '</body>'?`

  - link tag in head tag
    - It loads stylesheets early in rendering, and show visually first.
  - script tag in the end of body tag
    - HTML parsing pauses when a script tag is downloaded and executed, making the content temporarily invisible.

- `Describe event bubbling`

  - When an event is triggered on a DOM element, it naturally bubbles up to its parent elements.
  - e.stopPropagation() can stop this event bubbling.

- `Explain event delegation`

  - Assigning an event to a parent element allows event bubbling to propagate the event to child elements,
  - Saving memory, improving performance, and simplifying the code

- `Explain 'Function.prototype.bind'`

  - 'call' and 'apply' immediately call the function, while 'bind' creates a new function with a specific context but doesn't execute it immediately.

- `Explain "hoisting"`
  - "var" declarations are like driven to the top, and become "undefind" until assignments
  - "let" and "const" variables are hoisted but uninitialized until declared, causing a ReferenceError if accessed before declaration due to the "TDZ"
  - Function declarations undergo function hoisting, while function expressions experience variable hoisting.
