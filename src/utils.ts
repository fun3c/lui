const Event = {
  addEvent(obj, type, fn, data = {}) {
    if (obj.addEventListener) {
      obj.addEventListener(type, (e) => fn(e, data), false);
    } else if (obj.attachEvent) {
      obj["e" + type + fn] = fn;
      obj.attachEvent("on" + type,
        function (e) {
          obj["e" + type + fn](e, data);
        });
    }
  },
  removeEvent(obj, type, fn) {
    if (obj.removeEventListener) {
      obj.removeEventListener(type, fn, false);
    } else if (obj.detachEvent) {
      obj.detachEvent("on" + type, obj["e" + type + fn]);
      obj["e" + type + fn] = null;
    }
  }
};
const isTypes = (function () {
  const res = {};
  const types = ['Function', 'String', 'Number', 'Array', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet', 'Arguments', 'Undefined'];
  types.forEach(name => {
    return res[`is${name}`] = obj => toString.call(obj) === '[object ' + name + ']';
  });
  return res;
})();

const utils = {
  ...Event,
  getOfsset(el) {
    const result = { x: 0, y: 0 };
    while ((el = el.offsetParent)) {
      result.x += el.offsetLeft;
      result.y += el.offsetTop;
    }
    return result;
  },
  getSize(el) {
    return { width: el.offsetWidth, height: el.offsetHeight };
  },
  isWindow: function (obj) {
    return obj != null && obj === obj.window;
  },
  isDoc(el) {
    return el.nodeType === 9 && el.defaultView;
  },
  isElem(el) {
    return el.nodeType === 1;
  },
  getWindow(el) {
    return this.isWindow(el) ? el : this.isDoc(el);
  },
  getClinetRect(el) {
    const doc = el && el.ownerDocument;
    const docElem = doc.documentElement;
    const win = this.getWindow(doc);
    const rect = el.getBoundingClientRect();

    return doc.nodeType === 9 ? {
      top: rect.top + win.pageYOffset - docElem.clientTop,
      left: rect.left + win.pageXOffset - docElem.clientLeft,
      width: rect.width,
      height: rect.height
    } : { top: 0, left: 0 };
  },
  getScroll(el) {
    const isdom = this.isElem(el);
    const iswin = this.isWindow(el);
    const isdoc = this.isDoc(el);
    const offset = { top: 0, left: 0 };
    if (iswin) {
      offset.top = el.scrollY;
      offset.left = el.scrollX;
    } else if (isdom) {
      offset.top = el.scrollTop;
      offset.left = el.scrollLeft;
    } else if (isdoc) {
      el = el.documentElement || el.body;
      offset.top = el.scrollTop;
      offset.left = el.scrollLeft;
    }

    return offset;
  },
  isHtmlControl(el) {
    try {
      document.body.appendChild(el.cloneNode(true));
      return this.isElem(el) ? true : false;
    } catch (e) {
      return el === window || el === document;
    }
  },
  ...isTypes,
  $cls(className, context) {
    return Array.from(context.getElementsByClassName(className));
  },
  $tag(tag, context) {
    if (typeof context.getElementsByTagName !== "undefined") {
      return Array.from(context.getElementsByTagName(tag));
      // DocumentFragment nodes don't have gEBTN
    } else {
      return Array.from(context.querySelectorAll(tag));
    }
  },
  randomString: () => Math.random().toString(36).substring(7),
  castArray: (...args) => {
    if(!args.length) return [];
    const value = args[0];
    return Array.isArray(value) ? value : [value]
  }
};
export default utils;