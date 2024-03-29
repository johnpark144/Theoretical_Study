- `1. Describe the difference between '<script>', '<script async>' and '<script defer>'`

  - script
    - HTML parsing is blocked, when script is encountered
    - the script is fetched and executed immediately
    - HTML parsing continues after that
  - script async
    - common : the script is fetched alongside HTML parsing
    - difference : It runs when it's ready
  - script defer
    - common : the script is fetched alongside HTML parsing
    - difference : It runs when HTML parsing is finished

- `2. Explain how prototypal inheritance works`

  - Used for object inheritance (similar with class)
  - When accessing, it searches via the prototype chain if the property/method isn't found on the object.

- `3. Explain how 'this' works`

  - "this" is a dynamic self-reference object tied to how a function is invoked.
  - "this" can explicitly be bound using "apply," "call," or "bind."
  - Free function invocations result in "undefined" in strict mode or the "window" object in browser
  - Arrow functions inherit "this" from their surrounding scope at creation.

- `4. Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.`

  - Block elements size depends on width, height, paddings, and borders.
  - Without a specified height, paddings are added to the content's dimensions
  - Inline elements adjust to content dimensions with left and right margins/paddings.

  - About box-sizing
    - "content-box" (defaults) : It expands border, padding, and margin upon content size
    - "border-box" : Its size includes all except for margin (within specified width and height)

- `5. What are the differences between variables created using 'let', 'var' or 'const'?`

  - var : 1. multiple declarations, 2. block-scoped(if, for, while, try/catch) is not local scope but global, 3. variable hoisting ('undefined' before declarations)

  - let : 1. no multiple declarations, block-scoped is local scope, it is like no variable hoisting (TDZ), multiple assignments.
  - const : 1. no multiple declarations, block-scoped is local scope, it is like no variable hoisting (TDZ), requires immediate assignment with declaration together

- `6. What does '* { box-sizing: border-box; }' do?`

  - It simplifies layout by including content, padding, and borders when calculating element dimensions for all page elements. (No margin included)

- `7. What is CSS selector specificity and how does it work?`

  - Priority : !important > Inline Style > Id > Class > Tag(element) > Universal Selector (\*)

- `8. What is the CSS 'display' property and can you give a few examples of its use?`
- `9. What's the difference between 'inline' and 'inline-block'?`

  - none: Element is invisible and doesn't take up space.
  - block: Element displayed on a new line ex) div, p, h1
  - inline: Element placed within a line alongside other elements ex) span
  - inline-block: Element placed within a line in width, height, pading and margin control.
  - flex: It's useful for 1-dimensional layouts, such as rows or columns.
  - grid: It's useful for 2-dimensional layouts with rows and columns.

- `10. What is the difference between '==' and '==='?`

  - '==' is the abstract equality operator while '===' is the strict equality operator.
  - namely, '===' chech even type equality.

- `11. What's the difference between a variable that is: 'null', 'undefined' or undeclared?`

  - undefined: Variable declared but not assigned any value.
  - null: Variable assigned as empty or absent value.

- `12. What's the difference between '.call' and '.apply'?`

  - Common : They are innvoked as method with the first parameter as 'this' value.
  - Difference: For the rest arguments, 'Call' uses 'Commas', 'Apply' uses 'Array'. (CCAA)

- `13. Describe the difference between a cookie, 'sessionStorage' and 'localStorage'.`

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

- `14. What's the difference between a 'relative', 'fixed', 'absolute'and 'static'-ally positioned element?`

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

- `15. Can you offer a use case for the new arrow => function syntax?`

  - Shorter Function Expressions
  - Implicit Return
  - No Binding of 'this'
  - Simplifying Callbacks
  - Iterating Over Arrays
  - Method in object

- `16. Why is it generally a good idea to position CSS '<link>'s between '<head></head>' and JS '<script>'s just before '</body>'?`

  - link tag in head tag
    - It loads stylesheets early in rendering, and show visually first.
  - script tag in the end of body tag
    - HTML parsing pauses when a script tag is downloaded and executed, making the content temporarily invisible.

- `17. Describe event bubbling`

  - When an event is triggered on a DOM element, it naturally bubbles up to its parent elements.
  - e.stopPropagation() can stop this event bubbling.

- `18. Explain event delegation`

  - Assigning an event to a parent element allows event bubbling to propagate the event to child elements,
  - Saving memory, improving performance, and simplifying the code

- `19. Explain 'Function.prototype.bind'`

  - 'call' and 'apply' immediately call the function, while 'bind' creates a new function with a specific context but doesn't execute it immediately.

- `20. Explain "hoisting"`

  - "var" declarations are like driven to the top, and become "undefind" until assignments
  - "let" and "const" variables are hoisted but uninitialized until declared, causing a ReferenceError if accessed before declaration due to the "TDZ"
  - Function declarations undergo function hoisting, while function expressions experience variable hoisting.

- `21. Explain how a browser determines what elements match a CSS selector.`

  - Browsers match selectors from rightmost to the left.
  - For the selector "p span," browsers find all 'span' elements and stop when they locate the nearest 'p' element.

- `22. Explain the difference between synchronous and asynchronous functions`

  - Synchronous : Guaranteed execution order, but blocking for subsequent tasks.
  - Asynchronous : No guaranteed execution order, and no blocking for pending tasks.

- `23. Have you played around with the new CSS Flexbox or Grid specs?`

  - Flexbox : 1-dimensional layouts (Horizontal and Vertical alignment)
  - Grid : 2-dimensional layouts (Table-like-alignment)

- `24. Is there any reason you'd want to use 'translate()' instead of 'absolute' positioning, or vice-versa? And why?`

  - Absolute : Great for positioning, affects nearby elements
    - Slower performance (CPU usage)
    - But, better Readability, Simplicity, Cross-browser Compatibility
  - Translate() : Great for animations, doesn't affect nearby elements
    - Better performance (GPU usage)
    - But, Complicated

- `25. What are the pros and cons of using Promises instead of callbacks?`

  - pros
    - Avoid callback hell
    - Makes it easy and readable to write sequential or parallel asynchronous code.(.then(), Promise.all())
    - Mitigate issues like callback timing errors, parameter passing errors, and ignoring error occurrences that might happen with callbacks
  - Cons
    - In older browsers where ES2015 is not supported, you need to load a polyfill

- `26. What is a closure, and how/why would you use one?`

  - The combination of a function and the lexical environment within which that function was declared.
  - Enable it to reference and modify values even after the context has ended.
  - Why use ?
    - for Data privacy (only certain function can change the state)
  - How use ?
    - An inner function referencing an outer identifier should be the outer function's 'return value'

- `27. What is event loop?`

  - Single-threaded process
  - Monitor the call stack and executes pending tasks from the queue when the stack is empty

- `28. What language constructions do you use for iterating over object properties and array items?`

  - Objects

    - for...in statement : For enumerable properties
    - Object.keys().forEach : For enumerable properties
    - Object.getOwnPropertyNames().forEach : For all properties including unenumerable

  - Arrays

    - for
    - Array.prototype.forEach()
    - for...of statement

  - Difference between for(in,of) and forEach
    - "for" can break midway and have better flexibility, "forEach" cannot.
    - "forEach" offers better readability and reduces the likelihood of errors

- `29. What's a typical use case for anonymous functions?`

  - Callback, IIFE, Closures, Event Handler, Array Method, etc

- `30. Describe Block Formatting Context (BFC) and how it works.`

  - Part of the visual CSS rendering of a web page in which block boxes are set
  - an HTML box that fulfills at least one of these conditions : (Think of Boundary)
    - 'float' --> 'right' or 'left'
    - 'position' --> 'absolute' or 'fixed'
    - 'overflow'--> no 'visible'
    - 'display' --> table-cell, table-caption, inline-block, flex, or inline-flex, grid, or inline-grid

- `31. Describe 'float's and how they work.`

  - Make elements become part of the page's flow and Arrange text and images
  - "left," "right," or "none" can be values of "Float"
  - "clear" can be used with values like "left," "right," "both," or "none" to clear "float."

- `32. Describe pseudo-elements and discuss what they are used for.`

  - Create virtual elements that are not in HTML and use it to style
  - before or after contents, it can add some icon, characters or style
  - ::before, ::after, ::first-letter, ::first-line

- `33. Describe 'z-index' and how stacking context is formed`

  - Without "z-index," lower elements are on top based on DOM order.
  - Higher "z-index" value brings forward, lower sends back.
  - "z-index" in a stacking context is relative, not affecting elements outside.

- `34. What kind of things must you be wary of when designing or developing for multilingual sites?`

  - Use the 'lang' attribute on the 'html' tag (For SEO)
  - Consider language reading direction
  - Consider differences in the length of text
  - Don't concatenate translated strings
  - Formatting dates and currencies
  - Be mindful of how colors are perceived
  - Do not put text in images

- `35. Difference between: 'function Person(){}', 'var person = Person()', and 'var person = new Person()'?`

  - 'function Person(){}' : Functions intended to be used as constructors (PascalCase).
  - 'var person = Person()' : it calls the constructor function and returns 'undefined' without object instance,
  - 'var person = new Person()' : it creates and assigns an object instance.

- `36. Explain Ajax in as much detail as possible.`

  - Ajax is web development technique that enables asynchronous communication between a web application and a server
  - It doesn't require full page refresh for updates.
  - JSON format is commonly used instead of XML.
  - These days, the fetch API is used more frequently, between XMLHttpRequest and fetch API,

- `37. Explain CSS sprites, and how you would implement them on a page or site.`

  - CSS sprites combine multiple images into one large image file, using CSS to display specific parts of it as needed
  - Using the CSS properties background-image, background-position, and background-size.
  - Advantages
    - Reduce the number of HTTP requests
    - Prevent flickering from multiple image requests and pseudo-classes.

- `38. Explain how JSONP works (and how it's not really Ajax)`

  - Using the 'script' tag with the 'src' attribute to fetch data from a different domain.
  - Used to bypass cross-origin restrictions on Ajax requests from the current page.
  - Not recommended for security; CORS is preferred.

- `39. Explain the difference between mutable and immutable objects`

  - Object.defineProperty(obj, prop, {writable: false, configurable: false}): --> Add new property (O), Edit and Delete (X)
  - Object.preventExtensions(obj): --> Add new property (X), Edit and Delete (O)
  - Object.seal(obj): --> Add new property (X), Edit and Delete (X)
  - Object.freeze(obj): --> Most Strict (Read only)

  - Pros

    - Easier change detection
    - Less complicated
    - Thread-safe
    - No need for defensive copying

  - Cons

    - Complex to implement
    - Potential negative performance by Allocation of many small objects
    - Complexity for cyclic data structures (When 2 object have to be linked, Former one can't be editted)

- `4. Explain the differences on the usage of 'foo' between 'function foo() {}' and 'var foo = function() {}'`

  - Function declarations
    - Hoist their bodies
    - Function can be called even if it comes before the function definition.
  - Function expressions
    - Hoist like variables
    - Function should be called after the function definition.
    - If before, variables hoisting is like (var --> undefined // let,const --> TDZ exist)

- `41. Explain what a single page app is and how to make one SEO-friendly`

  - SPA : Updating only the necessary parts using JavaScript on a single blank page
  - Pros
    - No flickering during page transitions
    - Fewer HTTP requests (each page HTTP download is not needed)
    - Clear separation of client and server
  - Cons
    - Heavier initial page load
    - Additional server-side configuration step.
    - SEO challenges due to JavaScript reliance,
  - SEO-friendly Way
    - Server-side rendering or Prerender services.

- `42. Have you ever used a grid system, and if so, what do you prefer?`

  - "float"-based grid system was the most reliable until 2014,
  - Now, 'flex' and 'grid' are more popular due to their ease and efficiency.
  - "Flex" is one-dimensional, and "grid" is two-dimensional.

- `43. How do you serve a page with content in multiple languages?`

  - Order
    - 1. Extract language preferences from the Accept-Language header
    - 2. Provide content in the user's preferred language
  - Use the lang attribute in the 'html' tag, like '<html lang="en">....' To inform the page's language.
  - Use 'link' tags with rel="alternate" and hreflang="..." To link to the same content in different languages
  - SSR --> Server dynamically generates the page
  - CSR --> JS dynamically adds language-specific content while maintaining page structure.

- `44. How do you serve your pages for feature-constrained browsers?`

  - Graceful degradation : Use modern browser features, disabling or replacing them in older browsers
  - Progressive enhancement : Offers consistent functionality across all browsers with extra features for modern ones.
  - caniuse.com
  - Autoprefixer : Automatic vendor prefix insertion
  - Modernizr : JS library for detecting HTML5 and CSS3 features and handling browser compatibility by providing alternative content or styles
  - @support : for example --> If "@supports (display: flex)" supports, it can apply

- `45. How is responsive design different from adaptive design?`

  - Responsive
    - Download all resources for both PC and mobile (Slow loading)
    - can manage only one website
  - Adaptive
    - download resources tailored to the detected device (Fast loading),
    - should manage multiple website

- `46. How would you approach fixing browser-specific styling issues?`

  - Browser-specific Style Sheets (prefix)
  - Autoprefixer
  - Use libraries like Bootstrap
  - Reset CSS : Reset default styles for different browsers
  - Normalize.css : Focus on correcting some differences between browsers

- `47. What advantage is there for using the arrow syntax for a method in a constructor?`

  - Arrow functions keep the value of 'this' from their surroundings consistently, even with methods like call, apply, or bind.
  - This enhances code clarity and maintenance, especially in React class components.

- `48. What are 'data-' attributes good for?`

  - Data attributes (data-) has been commonly used to store extra data in the DOM, before JavaScript frameworks
  - Not recommended anymore due to their easy modification through browser "Inspect"
  - But It is useful for providing identifiers for end-to-end testing without adding unnecessary classes or IDs to the markup.

- `49. What are the advantages/disadvantages of using CSS preprocessors?`

  - Advantages
    - CSS is made more maintainable
    - Simplify nested selectors
    - Use 'Mixins' and 'include' to generate repeated CSS.
    - Efficient coding with conditionals and loops is possible.
  - Disadvantages
    - Re-compilation time can be slow.
    - Compatibility issues may arise

- `50. What are the differences between ES2015 class and ES5 function constructors?`

  - Constructor Function:
    - Can be called without "new" as a regular function.
    - No inheritance keywords.
    - Doesn't enforce strict mode by default.
  - Class:
    - Requires "new" and raises an error when called without it.
    - Offers "extends" and "super" for inheritance.
    - Automatically enforces strict mode in the class with no exceptions.

- `51. What are the different ways to visually hide content (and make it available only for screen readers)?`

  - Small size --> "width: 1px; height: 1px" (Using "width: 0; height; 0" is not recommended)
  - Absolute positioning --> "position: absolute; left: -99999px"
  - Text indentation --> "text-indent: -9999px"

  - Incorrect ways ("display: none", "visibility: hidden", "'hidden' attribute")

- `52. What is progressive rendering?`

  - To speed up webpage performance, specifically by displaying content as quickly as possible to enhance perceived load time.
  - Lazy loading of images : img tag -> loading="lazy"
  - Prioritizing visible content :" You can defer scripts or use events like DOMContentLoaded/load to load additional resources and content later."

- `53. What is the definition of a higher-order function?`

  - A higher-order function takes one or more functions as arguments or returns a function as its result.
  - Simplify by eliminating conditions, loops, and variables for easy result generation.
  - sort, forEach, map, filter, reduce, some, every, find

- `54. What is '"use strict";' ?`

  - It Reduces mistakes from typos or grammar gaps, to create stable code.
  - Pros
    - Prevents accidental global variable creation
    - Raises exceptions when trying to delete undeletable properties
    - Prevents from duplicate parameter names
    - 'this' is 'undefined' in the global context
    - Raises explicit errors for problematic code
  - Cons
    - Miss many features familiar to some developers.
    - No more access to 'function.caller' and 'function.arguments'.
    - Concatenating scripts with different strict modes may cause issues.

- `55. What's the difference between an "attribute" and a "property"?`

  - Attribute : defined on the HTML markup (Static)
  - Property : defined on the DOM (Dynamic)

- `56. What's the difference between feature detection, feature inference, and using the UA string?`

  - Feature Detection (recommended)
    - It checks if a browser supports specific code and runs different code based on support.
    - Modernizr is representitive library
  - Feature Inference (not recommended)
    - It checks for a feature like feature detection but assumes support based on another function.
  - UA(User Agent) String (not recommended)
    - This is a browser-reported string to identify the application type, including the web browser type.

- `57. What's the difference between "resetting" and "normalizing" CSS?`

  - Resetting
    - removes default browser styles from elements
    - margins, paddings, and font sizes are standardized.
  - Normalizing
    - keeps useful default styles and fixes common browser bugs.

- `58. Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?`

  - 'Implicit Coupling', 'Memory Wastage', 'Increased Dependencies', 'Namespace Pollution' can happen
  - Encapsulate variables with IIFE for local scoping

- `59. Why you would use a 'srcset' attribute in an image tag?`
  - It is to provide different images based on users' device display width
  - High-quality for Retina, low-resolution for low-end devices (better performance, no data waste)
  - The first value is the image name and the second is the image width
  - x => Actual image width / device display width = closest 1x (regular), closest 2x (Retina)
  - w => Input image width(w) should be closest with device display width
  - ex) img srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 2000w" src="..." alt=""
