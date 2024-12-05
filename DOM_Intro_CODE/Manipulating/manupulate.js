// const firstBold = document.querySelector('b')
// undefined
// firstBold.parentElement
// <p>​…​</p>​
// firstBold.parentElement.parentElement
// <body>​…​</body>​
// firstBold.parentElement.parentElement.parentElement
// <html lang=​"en">​<head>​…​</head>​<body>​…​</body>​</html>​

// const paragraph = firstBold.parentElement
// undefined

// paragraph.childElementCount
// 9

// paragraph.children
// HTMLCollection(9) [b, b, a, a, a, a, a, a, i]

// paragraph.children[0].parentElement
// <p>​…​</p>​


// const squreImg= document.querySelector('.square')
// undefined

// squreImg.parentElement
// <body>​…​</body>​

// squreImg.children
// HTMLCollection []

// squreImg.previousSibling
// #text  //--it's a node (text node) and not element

// squreImg.nextSibling
// #text

// squreImg.previousElementSibling
// <p>​…​</p>​

// squreImg.nextElementSibling
// <img class=​"square" src=​"https:​/​/​upload.wikimedia.org/​wikipedia/​en/​thumb/​e/​e0/​Male_Silkie.png/​460px-Male_Silkie.png" alt>​


// document.createElement('img')
// <img>​
// const newImg = document.createElement('img')
// undefined
// console.dir('newImg')
// VM6047:1 newImg
// undefined
// console.dir(newImg)
// VM6112:1 imgaccessKey: ""align: ""alt: ""ariaAtomic: nullariaAutoComplete: nullariaBrailleLabel: nullariaBrailleRoleDescription: nullariaBusy: nullariaChecked: nullariaColCount: nullariaColIndex: nullariaColSpan: nullariaCurrent: nullariaDescription: nullariaDisabled: nullariaExpanded: nullariaHasPopup: nullariaHidden: nullariaInvalid: nullariaKeyShortcuts: nullariaLabel: nullariaLevel: nullariaLive: nullariaModal: nullariaMultiLine: nullariaMultiSelectable: nullariaOrientation: nullariaPlaceholder: nullariaPosInSet: nullariaPressed: nullariaReadOnly: nullariaRelevant: nullariaRequired: nullariaRoleDescription: nullariaRowCount: nullariaRowIndex: nullariaRowSpan: nullariaSelected: nullariaSetSize: nullariaSort: nullariaValueMax: nullariaValueMin: nullariaValueNow: nullariaValueText: nullassignedSlot: nullattributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {length: 0}autocapitalize: ""autofocus: falsebaseURI: "file:///home/puja/Downloads/programs/web_dev/DOM_Intro_CODE/Selecting/select.html#History"border: ""childElementCount: 0childNodes: NodeList []children: HTMLCollection []classList: DOMTokenList [value: '']className: ""clientHeight: 0clientLeft: 0clientTop: 0clientWidth: 0complete: truecontentEditable: "inherit"crossOrigin: nullcurrentSrc: ""dataset: DOMStringMap {}decoding: "auto"dir: ""draggable: trueeditContext: nullelementTiming: ""enterKeyHint: ""fetchPriority: "auto"firstChild: nullfirstElementChild: nullheight: 0hidden: falsehspace: 0id: ""inert: falseinnerHTML: ""innerText: ""inputMode: ""isConnected: falseisContentEditable: falseisMap: falselang: ""lastChild: nulllastElementChild: nullloading: "auto"localName: "img"longDesc: ""lowsrc: ""name: ""namespaceURI: "http://www.w3.org/1999/xhtml"naturalHeight: 0naturalWidth: 0nextElementSibling: nullnextSibling: nullnodeName: "IMG"nodeType: 1nodeValue: nullnonce: ""offsetHeight: 0offsetLeft: 0offsetParent: nulloffsetTop: 0offsetWidth: 0onabort: nullonanimationend: nullonanimationiteration: nullonanimationstart: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforeinput: nullonbeforematch: nullonbeforepaste: nullonbeforetoggle: nullonbeforexrselect: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontentvisibilityautostatechange: nulloncontextlost: nulloncontextmenu: nulloncontextrestored: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonformdata: nullonfullscreenchange: nullonfullscreenerror: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerrawupdate: nullonpointerup: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonscrollend: nullonsearch: nullonsecuritypolicyviolation: nullonseeked: nullonseeking: nullonselect: nullonselectionchange: nullonselectstart: nullonslotchange: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullontouchcancel: nullontouchend: nullontouchmove: nullontouchstart: nullontransitioncancel: nullontransitionend: nullontransitionrun: nullontransitionstart: nullonvolumechange: nullonwaiting: nullonwebkitanimationend: nullonwebkitanimationiteration: nullonwebkitanimationstart: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwebkittransitionend: nullonwheel: nullouterHTML: "<img>"outerText: ""ownerDocument: documentparentElement: nullparentNode: nullpart: DOMTokenList [value: '']popover: nullprefix: nullpreviousElementSibling: nullpreviousSibling: nullreferrerPolicy: ""role: nullscrollHeight: 0scrollLeft: 0scrollTop: 0scrollWidth: 0shadowRoot: nullsizes: ""slot: ""spellcheck: truesrc: ""srcset: ""style: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}tabIndex: -1tagName: "IMG"textContent: ""title: ""translate: trueuseMap: ""virtualKeyboardPolicy: ""vspace: 0width: 0writingSuggestions: "true"x: 0y: 0[[Prototype]]: HTMLImageElement
// undefined
// newImg.src=/home/puja/Downloads/programs/web_dev/Screenshot_20240425_222011.png
// VM6159:1 Uncaught SyntaxError: Invalid regular expression flags
// newImg.src='https://plus.unsplash.com/premium_photo-1700268374954-f06052915608?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8'
// 'https://plus.unsplash.com/premium_photo-1700268374954-f06052915608?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8'
// document.body.appendChild(newImg)
// <img src=​"https:​/​/​plus.unsplash.com/​premium_photo-1700268374954-f06052915608?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8">​
// newImg.classList.add('square')
// undefined
// const newH3 = document.createElement('h3')
// undefined
// newH3.innerText='i am new'
// 'i am new'
// document.body.appendChild(newH3)
// <h3>​i am new​</h3>​
// const p = document.querySelector('p
// VM6865:1 Uncaught SyntaxError: Invalid or unexpected token
// const p = document.querySelector('p')
// undefined
// p.append('HIII','bye')// we can insert more than one things using append method
// undefined

// p.appendChild('hii')---this is wrong

// const newB = document.createElement('b')
// undefined
// newB.append('i am newB')
// undefined
// const p = document.querySelector('p')
// undefined
// p.prepend(newB)
// undefined
// const h3 = document.createElement('h3')
// undefined
// h3.append('are adorables')
// undefined
// const h1 = document.querySelector('h1');
// undefined
// h1.insertAdjacentElement('afterend',h3)
// <h3>​are adorables​</h3>​

// h1.nextElementSibling
// <h3>​are adorables​</h3>​
// const h4 = document.createElement('h4')
// undefined
// h4.innerText = 'i am h4'
// 'i am h4'
// h1.after(h4)
// undefined


// const firstLi = document.querySelector('li')
// undefined
// const ul = firstLi.parentElement
// undefined
// ul
// <ul>​…​</ul>​

// ul.removeChild(firstLi)
// <li class=​"toclevel-1 tocsection-1">​…​</li>​
// firstLi

// <li class=​"toclevel-1 tocsection-1">​<a href=​"#History">​…​</a>​</li>​

// const b = document.querySelector('b')
// undefined

// b.parentElement.remove
// ƒ remove() { [native code] }

// b.parentElement.removeChild(b)
// <b>​Silkie​</b>​

// const img = document.querySelector('img')
// undefined

// img.remove
// ƒ remove() { [native code] }

//img.parentElement.removeChiled(img)---there is better method to do this which is given
//below

// img.remove()---this is better method than using removeChiled
// undefined