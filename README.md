## picodom

A sane DOM library for modern browsers.

### Summary

The DOM API is often complex and has lots of caveats. The goal of this library is to provide methods for the most common operations that make sense.

Here is a quick example of how its API looks:

```
var d = Picodom.create('<div></div>');
d.text = 'Hello World';
Picodom.select('body').append(d);
```

**Goals include:**

1. Tiny core, easily extendable
2. Modern browsers only, older browsers can be supported by a separate shimmed build
3. Almost native performance, but don't compromise on code quality


### Installation

Picodom is a CommonJS module because that's what the author likes most. Installation is easy via npm:

    npm install picodom --save

Exporting the library as a global and AMD support is planned.

### API

#### Picodom(element)
Returns a new Picodom instance with *Element* `element`.

#### Picodom.select(selector)
Returns element that matches `selector`.

#### Picodom.selectAll(selector)
Returns a array of elements that match `selector`.

#### Picodom.create(html)
Returns an element out of `html`.

#### Picodom.createAll(html)
Returns an array of elements out of `html`.

#### Picodom.extend(proto)
Returns a Picodom with all properties of `proto` appended to its prototype.

#### Picodom.prototype.el
The *Element* of the current Picodom instance. **Picodom methods that return elements will always wrap them in Picodom instances**, use `el` to access the original *Element*.

#### Picodom.prototype.select(selector)
Returns child element that matches `selector`.

#### Picodom.prototype.selectAll(selector)
Returns array of child elements that match `selector`.

#### Picodom.prototype.append(element)
Appends `element.el || element`.

#### Picodom.prototype.attribute(name[, value])
Gets or sets attribute.

#### Picodom.prototype.html
Gets or sets inner HTML.

#### Picodom.prototype.text
Gets or sets text content.

#### Picodom.prototype.parent
Gets the parent element.

#### Picodom.prototype.id
Gets or sets the element's id.

#### Picodom.prototype.children
Gets an array of child elements.

#### Picodom.prototype.remove()
Remove the element.

#### Picodom.prototype.empty()
Remove all children.

#### Picodom.prototype.on(name, callback)
Add an event listener.

#### Picodom.prototype.off(name, callback)
Remove an event listener.

#### Picodom.prototype.classes
Gets the element's [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element.classList) property or sets the classes from a array or space-delimited string.

#### Picodom.prototype.style
Gets the elements style property.

