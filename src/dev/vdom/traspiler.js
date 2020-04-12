function tr(el) {
    const obj = { tagName: '', attrs: {}, children: [] };

    if (el.nodeName === '#text') {
        obj.children.push(el.nodeValue);
    }

    obj.tagName = el.localName ? el.localName : el.nodeName.replace('#', '');

    if (el.attributes) {
        const attrs = Array.prototype.slice.call(el.attributes);
        for (let attr of attrs) {
            obj.attrs[attr.name] = attr.value;
        }
    }
    el.childNodes.forEach(element => {
        obj.children.push(tr(element));
    });

    const { tagName, attrs, children } = obj;
    return {
        tagName,
        attrs,
        children
    };
}

export default tr;