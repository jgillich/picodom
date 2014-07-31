var domify = require('domify'),
    extend = require('js-extend').extend;

var Picodom = function (el) {
    if(!this instanceof Picodom) {
        return new Picodom(el);
    }
    this.el = el;
};

Picodom.select = function (selector) {
    return new Picodom(document.querySelector(selector));
};

Picodom.selectAll = function (selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector))
        .map(function (el) { return new Picodom(el) });
};

Picodom.create = function (html) {
    return new Picodom(domify(html));
};

Picodom.createAll = function (html) {
    return Array.prototype.slice.call(domify(html))
        .map(function (el) { return new Picodom(el) });
};

Picodom.extend = function () {
    var p = function () { return Picodom.apply(this, arguments); };
    extend(p, Picodom);
    Arrary.prototype.slice.call(arguments).forEach(function (proto) {
        extend(p.prototype, proto);
    });
    return p;
};

Picodom.prototype.select = function (selector) {
    return new Picodom(this.el.querySelector(selector));
};

Picodom.prototype.selectAll = function (selector) {
    return Array.prototype.slice.call(this.el.querySelectorAll(selector))
        .map(function (el) { return new Picodom(el) });
};

Picodom.prototype.append = function (element) {
    this.el.appendChild(element.el || element);
};

Picodom.prototype.attribute = function (name, value) {
    if(value === undefined) {
        return this.el.getAttribute(name);
    }
    this.el.setAttribute(name, value);
}

Object.defineProperty(Picodom.prototype, 'html', {
    get: function () {
        return this.el.innerHTML;
    },
    set: function (html) {
        this.el.innerHTML = html;
    }
});

Object.defineProperty(Picodom.prototype, 'text', {
    get: function () {
        return this.el.textContent;
    },
    set: function (text) {
        this.el.textContent = text;
    }
});

Object.defineProperty(Picodom.prototype, 'parent', {
    get: function () {
        return new Picodom(this.el.parentNode);
    }
});

Object.defineProperty(Picodom.prototype, 'id', {
    get: function () {
        return this.el.id;
    },
    set: function (id) {
        this.el.id = id;
    }
});

Object.defineProperty(Picodom.prototype, 'children', {
    get: function () {
        return Array.prototype.slice.call(this.el.children)
            .map(function (el) { return new Picodom(el) });
    }
});

Picodom.prototype.remove = function () {
    this.parent.el.removeChild(this.el);
};

Picodom.prototype.empty = function () {
    this.children.forEach(function (d) { d.remove() });
};

Picodom.prototype.on = function (name, callback) {
    this.el.addEventListener(name, callback);
};

Picodom.prototype.off = function (name, callback) {
    this.el.removeEventListener(name, callback);
};

Object.defineProperty(Picodom.prototype, 'classes', {
    get: function () {
        return this.el.classList;
    },
    set: function (value) {
        this.el.className = typeof value == 'object' ? value.join(' ') : value;
    }
});

Object.defineProperty(Picodom.prototype, 'style', {
    get: function () {
        return this.el.style;
    }
});
