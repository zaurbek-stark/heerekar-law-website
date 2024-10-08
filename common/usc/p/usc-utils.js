if ( !window.USC ) { window.USC = {}; }

(() => { 

	const parseJson = (text, reviver) => { return (window.JSON2 || JSON).parse(text, reviver) };
	const rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;

	/**
		* Try to parse a string value as boolean, null, number, object literal, or array.
		*
		* @param {string} str
		* @returns {any}
		*/
	const attributeValue = ( str ) => {
		let num = Number( str );
		if ( str === 'true' ) return true;
		else if ( str === 'false' ) return false;
		else if ( str === 'null' ) return null;
		else if ( !isNaN( num ) && str === String( num ) ) return num;
		else if ( rbrace.test( str ) ) {
			try {
				return parseJson( str );
			} catch ( ex ) { }
		}
		return str;
	}

	/**
		* Turn data attributes into an object key/value collection.
		*
		* @param {HTMLElement} el
		* @returns {any}
		*/
	USC.elementData = ( el ) => {
		if (!el || !el.attributes) return;
		const data = {};
		// Had to switch this from let back to var because the minifier was messing up the block scope and renaming el and attr as n, causing an error with attempting the reference n before the loop was initialized. 
		for (var attr of el.attributes) {
			const { name, value } = attr;
			if ( name.startsWith('data-') ) {
				const key = name.slice(5).replace( /-([a-z])/g, (_, l) => l.toUpperCase() );
				data[key] = attributeValue( value );
			}
		}
		return data;
	}

	/** 
		* Sets multiple attributes on an element.
		* 
		* @param {HTMLElement} el
		* @param {Object} attrs
	*/
	USC.setAttributes = ( el, attrs ) => {
		// Had to switch this from an arrow function back to a traditional function due to the minifier fumbling the handling of the destructured parameter.
		Object.entries(attrs).forEach(function ([key, value]) {
			if ( value !== undefined ) {
				el.setAttribute( key, value );
			}
		} );
	}

	if ( window.register ) {
		window.register( 'usc/p/usc-utils' );
	}
})();