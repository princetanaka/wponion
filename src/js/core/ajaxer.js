import {
	to_jquery,
	call_user_func,
	parse_str,
	is_url,
	url_params,
	is_callable,
	call_user_func_array,
	function_exists,
	create_function,
} from 'vsp-js-helper/index';
import $wponion from './core';
import { remove_query_arg } from 'wordpress-js-ports';

/**
 * WPOnion Custom Ajax Handler.
 */
export class WPOnion_Ajaxer {
	/**
	 * @param $ajax_args
	 * @param $ajax_config
	 */
	constructor( $ajax_args, $ajax_config ) {
		this.defaults        = {
			method: 'POST',
			url: ( typeof window.ajaxurl !== 'undefined' ) ? window.ajaxurl : false,
			data: {},
			success: false,
			error: false,
			always: false,
			action: false,
		};
		this.default_configs = {
			response_element: false,
			button: false,
			element: false,
			spinner: '<span class="spinner"></span>',
		};
		this.instance        = null;
		/**
		 * @type {WPOnion_Ajaxer.defaults}
		 */
		this.ajax_args = window.wponion._.merge( this.defaults, $ajax_args );
		this.ajax_config = window.wponion._.merge( this.default_configs, $ajax_config );
		this.ajax();
	}

	/**
	 * Creates A Callable Callback function based on the code data.
	 *
	 * @param $code
	 * @param $args
	 */
	create_function( $code = false, $args = '' ) {
		return this.single_callback( create_function( $args, $code ) );
	}

	/**
	 * Validates & Triggers A Single Callback Function.
	 * @param $callback
	 */
	single_callback( $callback ) {
		if( window.wponion._.isFunction( $callback ) ) {
			call_user_func( $callback );
		} else if( window.wponion._.isString( $callback ) && false !== function_exists( $callback ) ) {
			call_user_func( $callback );
		} else if( window.wponion._.isString( $callback ) ) {
			this.create_function( $callback );
		} else if( window.wponion._.isObject( $callback ) ) {
			for( let $key in $callback ) {
				if( $callback.hasOwnProperty( $key ) ) {
					this.single_callback( $callback[ $key ] );
				}
			}
		}
	}

	/**
	 * Handles An Array of Callable Ajax Functions.
	 * @param data
	 * @returns {*}
	 */
	handle_callbacks( data ) {
		if( window.wponion._.isObject( data ) ) {
			if( false === window.wponion._.isUndefined( data.callback ) ) {
				let $callbacks = data.callback;

				if( false !== window.wponion._.isString( $callbacks ) ) {
					this.single_callback( $callbacks );
				} else if( false !== window.wponion._.isObject( $callbacks ) ) {
					for( let $key in $callbacks ) {
						if( $callbacks.hasOwnProperty( $key ) ) {
							this.single_callback( $callbacks[ $key ] );
						}
					}
				}
				delete data.callback;
			}
		}
		return data;
	}

	/**
	 * Triggered On Ajax onSuccess
	 * @param data
	 */
	onSuccess( data ) {
		this.handle_callbacks( data );

		if( false !== this.ajax_args.success ) {
			if( is_callable( this.ajax_args.success ) ) {
				call_user_func_array( this.ajax_args.success, [ data ] );
			}
		}
	}

	/**
	 * Triggered On Ajax onError
	 * @param data
	 */
	onError( data ) {
		this.handle_callbacks( data );
		if( false !== this.ajax_args.error ) {
			if( is_callable( this.ajax_args.error ) ) {
				call_user_func_array( this.ajax_args.error, [ data ] );
			}
		}
	}

	/**
	 * Triggered On Ajax onAlways
	 * @param data
	 */
	onAlways( data ) {
		this.button_unlock();
		if( false !== this.ajax_args.always ) {
			if( is_callable( this.ajax_args.always ) ) {
				call_user_func_array( this.ajax_args.always, [ data ] );
			}
		}
	}

	/**
	 * Triggers An Ajax Request. Based On The Config.
	 */
	ajax() {
		this.button_lock();
		let $config = window.wponion._.clone( this.ajax_args );
		if( false !== $config.url ) {
			if( false !== is_url( $config.url ) ) {
				let $url_params = url_params( $config.url );
				for( let $key in $url_params ) {
					if( $url_params.hasOwnProperty( $key ) ) {
						$config.url = remove_query_arg( $key, $config.url );
					}
				}
				$config.data = window.wponion._.merge( $config.data, $url_params );
			} else {
				let $url_params = {};
				parse_str( $config.url, $url_params );
				$config.url  = $wponion.option( 'ajaxurl' );
				$config.data = window.wponion._.merge( $config.data, $url_params );
			}
		} else {
			$config.url = $wponion.option( 'ajaxurl' );
		}

		if( false !== $config.action ) {
			$config.data.action = $config.action;
			delete $config.action;
		}

		if( typeof $config.success !== 'undefined' ) {
			delete $config.success;
		}
		if( typeof $config.always !== 'undefined' ) {
			delete $config.always;
		}
		if( typeof $config.error !== 'undefined' ) {
			delete $config.error;
		}

		this.instance = window.wp.ajax.send( $config );
		this.instance.done( ( data ) => this.onSuccess( data ) );
		this.instance.fail( ( data ) => this.onError( data ) );
		this.instance.always( ( data ) => this.onAlways( data ) );
	}

	/**
	 * Checks if A Config Data Exsits Based on The Given Key.
	 * @param $key
	 * @returns {boolean}
	 */
	has_config( $key = '' ) {
		return ( typeof this.ajax_config[ $key ] !== 'undefined' );
	}

	/**
	 * Returns The Config Data Based on The Config Key.
	 * @param $key
	 * @param $default
	 * @returns {boolean}
	 */
	config( $key = '', $default = false ) {
		return ( this.has_config( $key ) ) ? this.ajax_config[ $key ] : $default;
	}

	/**
	 * Locks A Given Button Element.
	 */
	button_lock() {
		if( false !== this.config( 'button' ) ) {
			let $button = to_jquery( this.config( 'button' ) );
			if( $button ) {
				$button.wpo_button( 'processing' );
				$button.attr( 'disabled', 'disabled' );

				if( this.config( 'spinner' ) ) {
					let $spinner = jQuery( this.config( 'spinner' ) );
					$spinner.addClass( 'is-active' );
					$button.parent().append( $spinner );
				}
			}
		}
	}

	/**
	 * Unlocks A Given Button Element.
	 */
	button_unlock() {
		if( false !== this.config( 'button' ) ) {
			let $button = to_jquery( this.config( 'button' ) );
			if( $button ) {
				$button.wpo_button( 'complete' );
				$button.removeAttr( 'disabled' );
				let $spinner = $button.next();
				if( $spinner.hasClass( 'spinner' ) ) {
					$spinner.remove();
				} else {
					$button.parent().find( '.spinner' ).remove();
				}
			}
		}
	}
}

export default ( ( $, document ) => {
	$( () => {
		let $class = '[data-wponion-inline-ajax], .wponion-ajax, .wponion-ajax-get, .wponion-ajax-post, .wponion-inline-ajax, .wponion-inline-ajax-get, .wponion-inline-ajax-post';
		$( document ).on( 'click', $class, ( e ) => {

			let $elem            = $( e.currentTarget ),
				$_data           = $elem.data(),
				$_class_instance = null,
				$args            = {
					url: false,
				};

			if( $elem.attr( 'data-wponion-inline-ajax' ) !== 'undefined' ) {
				let $fid1  = $elem.attr( 'data-wponion-inline-ajax' );
				let $fid2  = $elem.attr( 'id' );
				let $js_id = $wponion.fieldID( $elem );
				let $args  = {};
				if( $js_id ) {
					let $_args = $wponion.fieldArgs( $js_id, false );
					if( $_args.hasOwnProperty( 'inline_ajax' ) && false !== window.wponion._.isUndefined( $_args.inline_ajax ) ) {
						$args = $_args.inline_ajax;
					}
				} else if( false !== $wponion.fieldArgs( $fid1, false ) ) {
					let $_args = $wponion.fieldArgs( $fid1, false );
					if( $_args.hasOwnProperty( 'inline_ajax' ) && false === window.wponion._.isUndefined( $_args.inline_ajax ) ) {
						$args = $_args.inline_ajax;
					}
				} else if( false !== $wponion.fieldArgs( $fid2, false ) ) {
					let $_args = $wponion.fieldArgs( $fid2, false );
					if( $_args.hasOwnProperty( 'inline_ajax' ) && false === window.wponion._.isUndefined( $_args.inline_ajax ) ) {
						$args = $_args.inline_ajax;
					}
				}
			} else {
				if( $elem.hasClass( 'wponion-ajax-get' ) || $elem.hasClass( 'wponion-inline-ajax-get' ) ) {
					$args.method = 'GET';
				} else if( $elem.hasClass( 'wponion-ajax-post' ) || $elem.hasClass( 'wponion-inline-ajax-post' ) ) {
					$args.method = 'POST';
				} else if( $elem.hasClass( 'wponion-ajax' ) || $elem.hasClass( 'wponion-inline-ajax' ) && typeof $_data.method !== 'undefined' ) {
					$args.method = $_data.method;
				}

				if( typeof $_data.url !== 'undefined' ) {
					$args.url = $_data.url;
				} else if( typeof $_data.href !== 'undefined' ) {
					$args.url = $_data.href;
				} else if( $elem.attr( 'href' ) ) {
					$args.url = $elem.attr( 'href' );
				}

				if( typeof $_data[ 'ajax-data' ] !== 'undefined' ) {
					$args.data = $_data[ 'ajax-data' ];
				}

				if( typeof $_data.action !== 'undefined' ) {
					$args.action = $_data.action;
				}
			}

			$_class_instance = new WPOnion_Ajaxer( $args, {
				button: $elem,
			} );
		} );
	} );
} )( jQuery, document );
