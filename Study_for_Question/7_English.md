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
