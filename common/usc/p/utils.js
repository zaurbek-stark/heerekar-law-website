if ( !window.USC ) { window.USC = {}; }
rrequire( 'usc/p/poly', function () {
	var parseJson = function ( text, reviver ) { return ( window.JSON2 || JSON ).parse( text, reviver ) };
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;

	USC.parseJson = parseJson;

	/**
	 * Try to parse a string value as boolean, null, number, object literal or array.
	 *
	 * @param {string} str
	 * @returns {any}
	 */
	function attributeValue( str ) {
		var num;
		if ( str === 'true' ) {
			return true;
		} else if ( str === 'false' ) {
			return false;
		} else if ( str === 'null' ) {
			return null;
		} else if ( !isNaN( num = +( str ) ) && str === String( num ) ) {
			return num;
		} else if ( rbrace.test( str ) ) {
			try {
				return parseJson( str );
			}
			catch ( ex ) { ; }
		}
		return str;
	}

	/**
	 * Turn data attributes into an object key/value collection.
	 *
	 * @param {HTMLElement} el
	 * @returns {any}
	 */
	USC.elementData = function ( el ) {
		if ( !el || !el.attributes ) {
			return undefined;
		}
		var data = {};
		for ( var i = 0; i < el.attributes.length; i++ ) {
			var attr = el.attributes[i];
			var name = String( attr.name );
			if ( name.indexOf( 'data-' ) === 0 ) {
				var key = name.substring( 5 ).replace( /\-([a-z])/g, function ( _, l ) { return l.toUpperCase() } );
				data[key] = attributeValue( attr.value );
			}
		}
		return data;
	}

	/**
	 * Get any link related information associated with the event.
	 *
	 * @param {MouseEvent} e
	 * @returns {any}
	 */
	USC.linkData = function ( e ) {
		var el = e && e.target;
		var link = el && el.closest( "a,button" );
		var href = link && link.getAttribute( 'href' );
		var m = href && /^javascript:(\w+)(?:\('([^']+)')?(?:\s*,\s*(\d+?)\))?/i.exec( href );
		var fn = m && m[1];
		var action = ( fn === 'void' ? m[2] : undefined );
		if ( !action || action === '0' ) {
			action = ( link && link.getAttribute( 'data-action' ) );
		}
		var id;
		if ( action ) {
			if ( m && m[3] ) {
				id = +( m[3] );
			} else if ( link.getAttribute( 'data-id' ) ) {
				id = +link.getAttribute( 'data-id' );
			}
		}
		return {
			link: link,
			href: href,
			fn: fn,
			action: action,
			id: id
		};
	}

	/** 
	 * Sets multiple attributes on an element.
	 * 
	 * @param {HTMLElement} el
	 * @param {Object} attrs
	*/
	USC.setAttributes = function ( el, attrs ) {
		for ( var p in attrs ) {
			if ( !attrs.hasOwnProperty( p ) ) {
				continue;
			}
			var value = attrs[p];
			if ( typeof value !== 'undefined' ) {
				el.setAttribute( p, value );
			}
		}
	}

	/**
	 * Detect the visibility of an item in the viewport.
	 * 
	 * @param {HTMLElement} el
	 * @param {number} amount
	 * @param {Function} ifVisible
	 * @param {Function?} ifHidden
	 */
	USC.onVisible = function ( el, amount, ifVisible, ifHidden ) {
		// If the IntersectionObserver isn't available (Internet Explorer).
		if ( !el || typeof IntersectionObserver === 'undefined' ) {
			return;
		}

		// A negative amount means that it will be considered visible when the margin is in the viewport.
		var rootMargin;
		var threshold;
		if ( amount < 0 ) {
			rootMargin = ( -amount ) + 'px';
			threshold = 0;
		} else {
			rootMargin = '0px';
			threshold = amount;
		}

		// Build the observer.
		var options = { root: null, rootMargin: rootMargin, threshold: threshold };
		var observer = new IntersectionObserver( function ( entries, observer ) {
			// Do we have a visible element?
			var visible = entries.find( function ( entry ) { return entry.isIntersecting; } );

			// If we don't have an ifHidden function, this will only run once, when the element is visible.
			if ( !ifHidden ) {
				if ( visible ) {
					ifVisible( el );
					observer.unobserve( el );
					observer.disconnect();
				}
				return;
			}

			if ( visible ) {
				ifVisible( el );
			} else {
				ifHidden( el );
			}
		}, options );

		// Start the observer.
		observer.observe( el );
	}


	var _docReady;

	/**
	 * When DOMContentLoaded event has fired, run the callback.
	 * 
	 * @param {Function} callback
	 */
	USC.docReady = function ( callback ) {
		if ( !callback ) {
			return;
		}

		if ( !_docReady ) {
			// Check if the document is already good to go.
			switch ( document.readyState ) {
				case 'complete':
				case 'loaded':
				case 'interactive':
					_docReady = true;
					return;
			}
		}

		if ( _docReady ) {
			// Execute the callback.
			callback();
		} else {
			// Wait for the event to fire.
			var ready = function () {
				_docReady = true;
				window.removeEventListener( 'DOMContentLoaded', ready );
				callback();
			};
			window.addEventListener( 'DOMContentLoaded', ready );
		}
	};

	/**
	 * Return an id-friendly guid.
	 * 
	 * @returns {string}
	 */
	USC.uuid = function () {
		var d = performance.now();
		var uuid = '_xxxxxxxxxxxxxxxx'.replace( /x/g, function () {
			var r = ( d + Math.random() * 16 ) % 16 | 0;
			d = Math.floor( d / 16 );
			return ( r ).toString( 16 );
		} );
		return uuid;
	};

	/**
	 * Return a guid.
	 * 
	 * @returns {string}
	 */
	USC.guid = function () {
		var d = performance.now();
		var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace( /[xy]/g, function ( c ) {
			var r = ( d + Math.random() * 16 ) % 16 | 0;
			d = Math.floor( d / 16 );
			return ( c == 'x' ? r : ( r & 0x3 | 0x8 ) ).toString( 16 );
		} );
		return guid;
	};

	/**
	 * Turn a value into a url-friendly one.
	 * 
	 * @param {any} value
	 */
	USC.urlfriendly = function ( value ) {
		if ( !value ) {
			return '';
		} else {
			return ( "" + value )
				.replace( /([a-z])(?:'s|s')\b/gi, '$1s' )
				.replace( /\W+/gi, '-' )
				.toLowerCase();
		}
	};

	/**
	 * Log a full stack trace and parameter values.
	 *
	 * @param {Error} ex
	 * @param {any[]} args
	 */
	USC.logError = function ( ex, args ) {
		if ( ex && ex.stack ) {
			// First log the stack trace.
			console.error( ex.stack );
			// Log any parameters.
			if ( args ) {
				try { console.error( JSON.stringify( Array.prototype.slice.call( args ) ) ); }
				catch ( ex ) { ; }
			}
		}
	};

    /**
     * Get a text-representation of a key event.
     * 
     * @param {KeyboardEvent} e
     * @returns {string}
     */
    USC.getKey = function ( e ) {
	    var code = e.code && e.code.replace( /Key|Digit/, '' );
        var ctrlKey = e.ctrlKey;
        var altKey = e.altKey;
        var shiftKey = e.shiftKey;
	    switch ( code ) {
		    case 'AltLeft':
		    case 'AltRight':
			    altKey = false;
			    break;
		    case 'ShiftLeft':
		    case 'ShiftRight':
			    shiftKey = false;
		    case 'ControlLeft':
		    case 'ControlRight':
			    ctrlKey = false;
			    break;
	    }

        var str = "";
        if ( ctrlKey ) {
            str += 'CTRL-';
        }
        if ( altKey ) {
            str += 'ALT-';
        }
        if ( shiftKey ) {
            str += 'SHIFT-';
        }
        str += code.toUpperCase();
	    return str;
	}

	USC.Encode = {};

	/**
	 * URI encoding.
	 * @param {any} data
	 */
	USC.Encode.JS = USC.Encode.Uri = function ( data ) {
		if ( !data ) {
			return "";
		} else {
			return encodeURIComponent( "" + data )
				.replace(
					/['"\(\)]/g,
					function ( m ) {
						switch ( m ) {
							case "'":
								return '%27';
							case '"':
								return '%22';
							case '(':
								return '%28';
							case ')':
								return '%29';
							default:
								return m;
						}
					}
				);
		}
	};

	USC.Decode = {};

	// URI decoding.
	USC.Decode.JS = USC.Decode.Uri = function ( data ) {
		if ( !data ) {
			return "";
		} else {
			return decodeURIComponent( ( "" + data ).replace( /\+/g, '%20' ) );
		}
	};

	/**
	 * Returns a collection of elements based on a data attribute they all share. 
	 * @param {string} dataAttr - i.e. [data-role]
	 * @param {HTMLElement} [scope] - Optional element to scope the collection to.
	 * @param {boolean} [includeScope] - Include the scope as one of the elements to add to the collection.
	 * @returns {any} - i.e. { prev: HTMLButtonElement, next: HTMLButtonElement, main: HTMLElement, nav: HTMLLIElement[]  }
	 */
	USC.getElementsCollectionByDataAttribute = function ( dataAttr, scope, includeScope ) {
		if ( !dataAttr )
			return null;

		var els = {};
		var nodes = Array.from( ( scope || document ).querySelectorAll( dataAttr ) );

		if ( includeScope )
			nodes.push( scope );

		if ( !nodes.length )
			return els;

		var attr = dataAttr.replace( /[\[\]]/g, '' );
		for ( var i = 0; i < nodes.length; i++ ) {
			var node = nodes[i];
			var value = node.getAttribute( attr );
			if ( !els[value] ) {
				els[value] = node;
			} else if ( els[value] && !Array.isArray( els[value] ) ) {
				var temp = els[value];
				els[value] = [];
				els[value].push( temp );
				els[value].push( node );
			} else {
				els[value].push( node );
			}
		}
		return els;
	};

	/**
	 * Gets the environment set in the web config, if available.
	 * @returns {string}
	 */
	USC.getEnvironment = function () {
		return document.body.getAttribute( "data-api" ) || "api";
	};

	/**
	 * Builds a Scorpion API URL. i.e. https://api.scorpion.co/
	 * @param {string} [env] - Optional parameter to specify an environment.
	 * @returns {string}
	 */
	USC.getScorpionApiDomain = function ( env ) {
		return window.location.protocol + "//" + ( env ? env : USC.getEnvironment() ) + ".scorpion.co/";
	};

	if ( window.register ) {
		window.register( 'usc/p/utils' );
	}
} );