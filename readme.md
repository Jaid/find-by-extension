# find-by-extension


Finds the first existing file ending with specified extension.



## Try it out
Open a browser's JavaScript console and execute:

```javascript
const scriptElement = document.createElement("script");
scriptElement.setAttribute("type","text/javascript");
scriptElement.setAttribute("src","https://unpkg.com/find-by-extension@1.1.1");
document.querySelector("head").appendChild(scriptElement);
```

The module is now loaded in a variable.

```javascript
typeof find-by-extension.default
```

## Documentation

* [find-by-extension](#module_find-by-extension)
    * [module.exports(extensions, [options])](#exp_module_find-by-extension--module.exports) ⇒ <code>false</code> \| <code>string</code> \| <code>Array.&lt;string&gt;</code> ⏏
        * [~Options](#module_find-by-extension--module.exports..Options) : <code>Object</code>

Finds the first existing file ending with specified extension.

**Kind**: Exported function  

| Param | Type |
| --- | --- |
| extensions | <code>string</code> \| <code>Array.&lt;string&gt;</code> | 
| [options] | <code>Options</code> | 

**Example**  
```javascript
import findByExtension from "find-by-extension"
const result = findByExtension("js")
result === "index.js"
```
**Kind**: inner typedef of [<code>module.exports</code>](#exp_module_find-by-extension--module.exports)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| [absolute] | <code>boolean</code> | <code>false</code> | 
| [cwd] | <code>string</code> | <code>&quot;process.cwd()&quot;</code> | 
| [all] | <code>boolean</code> | <code>false</code> | 



## License
```text
MIT License

Copyright © 2019, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
