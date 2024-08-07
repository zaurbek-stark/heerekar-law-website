if ( !window.USC ) { window.USC = {}; }
require2( ['usc/p/utils'], function () {

	var DEACTIVATE = function ( el ) { el.classList.remove( 'active' ); };

	/**
	 * Get the header items.
	 */
	function getItems( el ) {
		var p = el.closest( "[data-header]" ) || el;
		var header;
		var padding;
		while ( p && p !== document.body ) {
			// Check the next parent position.
			var style = getComputedStyle( p );
			var position = style.getPropertyValue( 'position' );

			if ( position === 'fixed' || position === 'sticky' || position === 'absolute' || p.matches( "header" ) ) {
				// Found the header.
				header = p;

				// Fixed / absolute elements (instead of sticky) are assumed to be overlap.
				// We'll need the padding element.
				if ( position === 'fixed' || position === 'absolute' ) {
					padding =
						// Find the first child form of the main (in case of form wrapping).
						document.querySelector( "main>form:first-child>section" ) ||
						// Find the first child section of the main.
						document.querySelector( "main>section:first-child" ) ||
						// Falling back to the main itself.
						document.querySelector( "main" );
				}

				break;
			}
			// Move up.
			p = p.parentNode;
		}

		return {
			header: header,
			padding: padding
		};
	}

	/**
	 * Create the SiteHeader control.
	 * 
	 * @param {HTMLElement} el
	 */
	function SiteHeader( el ) {
		this.element = el;
		this.els = getItems( el );

		this.state = {
			// Is the mouse over the header area?
			over: false,
			// Used for the resize timeout.
			rtimer: 0,
			// Used for the scroll timeout.
			stimer: 0,
			// Used for the temporary show timeout.
			htimer: 0,
			// Height of the header element.
			h_height: 0,
			// Height of the viewport.
			wn_height: 0,
			// Width of the viewport.
			wn_width: 0,
			// Last measured scroll position.
			scroll: 0,
			// Is the header currently collapsed?
			collapsed: false
		};

		// Event handlers.
		this.evt = {
			measure: function () { this.measure(); }.bind( this ),
			// Determine header state after a scroll.
			scroll: function () {
				clearTimeout( this.state.stimer );
				clearTimeout( this.state.htimer );
				this.state.stimer = setTimeout( this.adjust, 100 );
			}.bind( this ),
		};

		// Bind these methods to this instance.
		this.hide = handleHide.bind( this );
		this.measure = handleMeasure.bind( this );
		this.adjust = handleAdjust.bind( this );

		// Wire up the events.
		this.element.addEventListener( 'focusin', handleFocusIn.bind( this ) );
		this.element.addEventListener( 'mouseover', handleNavOver.bind( this ) );
		this.element.addEventListener( 'mouseleave', handleNavLeave.bind( this ) );
		this.element.addEventListener( 'focusout', handleNavLeave.bind( this ) );
		this.element.addEventListener( 'click', handleNavClick.bind( this ) );

		if ( this.els.header ) {
			// Measure the dimensions.
			this.measure();
			this.adjust();
			this.els.header.addEventListener( 'mouseenter', handleHeaderEnter.bind( this ) );
			this.els.header.addEventListener( 'mouseleave', handleHeaderLeave.bind( this ) );
			window.addEventListener( 'resize', handleResize.bind( this ) );
			window.addEventListener( 'scroll', handleScroll.bind( this ), { passive: true } );
		}
	}

	/**
	 * Handle an element of the SiteHeader getting focux.
	 * 
	 * @param {FocusEvent} e
	 */
	function handleFocusIn( e ) {
		var li = e.target.closest( 'li' );
		if ( !li || li.classList.contains( 'active' ) ) {
			// Not an item or already activated.
			return;
		} else {
			// Deactivate any other nodes.
			this.element.querySelectorAll( "li.active" ).forEach( DEACTIVATE );

			// Activate this one.
			li.classList.add( 'active' );

			// Ensure all parent LIs are ALSO activated.
			var p = li.parentNode;
			while ( p && p !== this.element ) {
				if ( p.nodeName === 'LI' ) {
					p.classList.add( 'active' );
				}
				p = p.parentNode;
			}
		}
	}

	/**
	 * When mousing over a link in the site nav, cause it to gain focus.
	 * 
	 * @param {MouseEvent} e
	 */
	function handleNavOver( e ) {
		var a = e.target.closest( "a" );
		if ( a ) {
			a.focus();
		}
	}

	/**
	 * Deactivate all items when leaving the area.
	 * 
	 * @param {MouseEvent} e
	 */
	function handleNavLeave( e ) {
		this.element.querySelectorAll( "li.active" ).forEach( DEACTIVATE );
		var el = document.activeElement;
		if ( el && this.element.contains( el ) ) {
			el.blur();
		}
	}

	/**
	 * When clicking on the nav.
	 * 
	 * @param {MouseEvent} e
	 */
	function handleNavClick( e ) {
		var data = USC.linkData( e );
		var hash;
		if (// If we have a hash link
			data.href &&
			data.href[0] === '#' &&
			( hash = data.href.substring( 1 ) ) ) {
			// Look for a matching named anchor.
			var el = document.querySelector( "a[name='" + hash + "']" );
			if ( el ) {

				throw new Error( 'Need to implement the simple show/hide.' );
				// If we have a header using the simple show hide to manage the mobile menu, close it.
				//if ( $( this.els.header.children ).filter( '[role="dialog"]' ).data().cmsSimpleShowHide ) {
				//	$( this.els.header.children ).filter( '[role="dialog"]' ).data().cmsSimpleShowHide.hidePanel();
				//}

				// Smooth scrolling.
				el.scrollIntoViewport( {
					container: false,
					top: true,
					margin: 200
				} );
				// Prevent the default click.
				e.preventDefault();
			}
		}
	}

	/**
	 * Note when we're over the header.
	 * 
	 * @param {MouseEvent} e
	 */
	function handleHeaderEnter( e ) {
		this.state.over = true;
	}

	/**
	 * Hide the header 4 seconds after leaving.
	 * 
	 * @param {any} e
	 */
	function handleHeaderLeave( e ) {
		this.state.over = false;
		if ( this.state.htimer ) {
			clearTimeout( this.state.htimer );
			this.state.htimer = setTimeout( this.hide, 4000 );
		}
	}

	/**
	 * Remeasure 1/4 second after a resize.
	 * 
	 * @param {Event} e
	 */
	function handleResize( e ) {
		clearTimeout( this.state.rtimer );
		this.state.rtimer = setTimeout( this.measure, 250 );
	}

	/**
	 * Hide the header if we're not over it.
	 */
	function handleHide() {
		if ( this.state.over ) {
			// We're over the nav, so don't hide it.
			return;
		} else {
			// Clear the hide timer and reset it's value.
			clearTimeout( this.state.htimer );
			this.state.htimer = 0;

			// Force the nav to hide.
			this.adjust( true );
		}
	}

	/**
	 * Remeasure the dimensions of the header.
	 */
	function handleMeasure() {
		if ( !this.els.header ) {
			return;
		}
		// Measure the header.
		var dim = this.els.header.getBoundingClientRect();
		// Note it's height relative to the viewport.
		this.state.h_height = dim.height;
		// Note the window height.
		this.state.wn_height = window.innerHeight;
		// Note the window width.
		this.state.wn_width = window.innerWidth;
		// And the current scroll position.
		this.state.scroll = window.scrollY;

		// Apply the height of the header to the padding element, if available.
		if ( this.els.padding ) {
			this.els.padding.style.paddingTop = this.state.h_height + 'px';
		}
	}

	/**
	 * Adjust the header 1/10 second after a scroll.
	 */
	function handleScroll() {
		clearTimeout( this.state.stimer );
		clearTimeout( this.state.htimer );
		this.state.stimer = setTimeout( this.adjust, 100 );
	}

	/**
	 * Adjust the header state.
	 * 
	 * @param {boolean} hide
	 */
	function handleAdjust( hide ) {
		if ( !this.els.header ) {
			return;
		}
		var scroll = window.scrollY;
		var amount = scroll - this.state.scroll;

		// Clear any hide timer.
		clearTimeout( this.state.htimer );

		var collapse;
		if ( scroll < this.state.h_height ) {
			// If we're back to the top of the page
			collapse = false;
		} else if ( hide === true ) {
			// Force the hide.
			collapse = true;
		} else if ( amount < this.state.wn_height / -3 ) {
			// If we just scrolled up more than a third of a viewport, we'll show it.
			collapse = false;
			// In 4 seconds, hide it again.
			this.state.htimer = setTimeout( this.evt.hide, 4000 );
		} else {
			// Otherwise, hide it.
			collapse = true;
		}

		// Save the scroll position for the next comparison.
		this.state.scroll = scroll;

		var html = document.documentElement;
		if ( collapse ) {
			// If we're collapsing, hide the header.
			html.classList.remove( 'header-show' );
			html.classList.add( 'header-hide' );
		} else if ( !scroll ) {
			// If we're at the  top, remove BOTH classes.
			html.classList.remove( 'header-hide' );
			html.classList.remove( 'header-show' );
		} else {
			// If we're showing the nav, but we're not at the top of the page.
			html.classList.remove( 'header-hide' );
			html.classList.add( 'header-show' );
		}

		// Note the new state.
		this.state.collapsed = collapse;
	}

	/**
	 * Public SiteHeader creation.
	 * 
	 * @param {any} el
	 */
	window.USC.siteHeader = function ( el ) {
		if ( !( el instanceof HTMLElement ) ) {
			throw new Error( "Need an HTMLElement to initialize a SiteHeader." )
		} else if ( el.$siteHeader ) {
			console.log( "SiteHeader already initialized." );
			return;
		} else {
			el.$siteHeader = new SiteHeader( el );
		}
	};

	if ( window.register ) {
		window.register( 'usc/p/site-header' );
	}

} );