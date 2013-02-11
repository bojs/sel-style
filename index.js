var sel = require('sel');

module.exports = style;

var style = function (selector) {
  return new Style(selector);
};

var Style = function (selector) {
  this.nodes = toArray(sel(selector));
};

Style.prototype.pos = function (x, y, relative) {
  this.nodes.forEach(function (node) {
    node.style.position = 'absolute';
    node.style.left = x; 
    node.style.top = y;

    if (relative) {
      node.parentNode.style.position = 'relative';
    }
  });
  return this;
};

Style.prototype.size = function (width, height) {
  this.nodes.forEach(function (node) {
    node.style.width = width;
    node.style.height = height;
  });
  return this;
};

Style.prototype.color = function (opts) {
  this.nodes.forEach(function (node) {
    if (opts.bg) {
      node.style.background = opts.bg;
    }
    if (opts.fg) {
      node.style.color = opts.fg;
    }
    if (opts.opacity) {
      node.style.opacity = opts.opacity;
    }
  });
  return this;
};

Style.prototype.add = function (className) {
  this.nodes.forEach(function (node) {
    node.className += ' ' + className;
  });
  return this;
};

Stype.prototype.del = function (className) {
  this.nodes.forEach(function (node) {
    node.className = node.className.
      replace(new RegExp('\\b' + className + '\\b'));
  });
  return this;
};

var toArray = function (obj) {
  return obj.length ? Array.prototype.slice.call(obj) : [].concat(obj);
};
