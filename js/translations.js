//Difference between '$(this)'' and 'this':
//https://stackoverflow.com/questions/1051782/whats-the-difference-between-this-and-this

//https://stackoverflow.com/questions/799981/document-ready-equivalent-without-jquery
function ready(callback){
    // in case the document is already rendered
    if (document.readyState!='loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState=='complete') callback();
    });
}

/** A storage solution aimed at replacing jQuerys data function.
 * Implementation Note: Elements are stored in a (WeakMap)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap].
 * This makes sure the data is garbage collected when the node is removed.
 */
window.dataStorage = {
    _storage: new WeakMap(),
    put: function (element, key, obj) {
        if (!this._storage.has(element)) {
            this._storage.set(element, new Map());
        }
        this._storage.get(element).set(key, obj);
    },
    get: function (element, key) {
        return this._storage.get(element).get(key);
    },
    has: function (element, key) {
        return this._storage.has(element) && this._storage.get(element).has(key);
    },
    remove: function (element, key) {
        var ret = this._storage.get(element).delete(key);
        if (!this._storage.get(element).size === 0) {
            this._storage.delete(element);
        }
        return ret;
    }
}
/*Use it like this:
var myElement = document.getElementById("myId");
dataStorage.put(myElement, "myKey", "myValue"); */


/*-------------------------------------------------------------
|                    THE MOST FKIN BEAUTIFUL                  |
|                    THING I HAVE EVER SEEN                   |
|                         IN MY LIFE                          |
|                    THANK YOU DANC-SENPAI                    |
--------------------------------------------------------------*/

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

// use as= $('#something').whatever();
// or  var item = $$('#something .item');
