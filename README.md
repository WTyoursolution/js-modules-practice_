ES Modules(export/import) 
*import allow javascript to see what you are bringing into the file before the code actually runs = "static analysis"
*

CommonJs (module.exports/require)
*with require() Javascript waits until it gets to that line in your code while it is running to figure out what you need = dynamic evaluation

Why choose ES modules for modern Node projects?
imports allow for better performance optimizations like tree-shaking for example.