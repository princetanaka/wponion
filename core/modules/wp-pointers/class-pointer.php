<?php
/**
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @link
 * @copyright 2019 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Modules\WP_Pointers;

if ( ! class_exists( '\WPOnion\Modules\WP_Pointers\Pointer' ) ) {
	/**
	 * Class Pointer
	 *
	 * @package WPOnion\Modules\WP_Pointers
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Pointer extends \WPOnion\Bridge\Module {
		/**
		 * @var null
		 * @access
		 */
		private $pointer_instance = null;

		/**
		 * Pointer constructor.
		 *
		 * @param bool  $selector
		 * @param bool  $title
		 * @param bool  $text
		 * @param array $args
		 * @param bool  $pointer_instance
		 */
		public function __construct( $selector = false, $title = false, $text = false, $args = array(), $pointer_instance = false ) {
			$valid_selector         = ( ! is_array( $selector ) && false !== $selector );
			$valid_title            = ( ! is_array( $title ) && false !== $title );
			$valid_text             = ( ! is_array( $text ) && false !== $text );
			$this->pointer_instance = $pointer_instance;

			if ( is_array( $selector ) ) {
				$args = $this->parse_args( $selector, $this->default_pointer_args() );
			} elseif ( $valid_selector && is_array( $title ) ) {
				$args = $this->parse_args( array( 'selector' => $selector ), $this->default_pointer_args() );
				$args = $this->parse_args( $title, $args );
			} elseif ( $valid_selector && $valid_title && is_array( $text ) ) {
				$args = $this->parse_args( array(
					'selector' => $selector,
					'title'    => $title,
				), $this->default_pointer_args() );
				$args = $this->parse_args( $text, $args );
			} elseif ( $valid_selector && $valid_title && $valid_text && is_array( $args ) ) {
				$_args = $this->parse_args( array(
					'selector' => $selector,
					'title'    => $title,
					'text'     => $text,
				), $this->default_pointer_args() );
				$args  = $this->parse_args( $args, $_args );
			}

			foreach ( $args as $key => $val ) {
				if ( method_exists( $this, $key ) ) {
					$this->$key( $val );
				}
			}

			unset( $this->current_theme );
			unset( $this->fields_md5 );
			unset( $this->menus );
			unset( $this->fields );
			unset( $this->raw_options );
			unset( $this->raw_fields );
			unset( $this->unique );
			unset( $this->db_values );
			unset( $this->options_cache );
			unset( $this->plugin_id );
			unset( $this->module );
		}

		/**
		 * Returns A Unique ID.
		 *
		 * @return bool|mixed
		 */
		public function uid() {
			if ( false === $this->option( 'unique_id' ) ) {
				$id = sanitize_title( $this->pointer_instance . '_' . $this->selector() );
				$id = str_replace( '-', '_', $id );
				$id = str_replace( '#', '', $id );
				$id = str_replace( '.', '', $id );
				$this->set_option( 'unique_id', $id );
			}
			return $this->option( 'unique_id' );
		}

		/**
		 * @return mixed
		 */
		public function add() {
			$instance = wponion_wp_pointers_registry( $this->pointer_instance );
			return call_user_func_array( array( $instance, 'add' ), func_get_args() );
		}

		public function on_init() {
			// TODO: Implement on_init() method.
		}

		/**
		 * Converts To Array.
		 *
		 * @return array
		 */
		public function to_array() {
			$return = array();
			$args   = $this->default_pointer_args();
			foreach ( array_keys( $args ) as $method ) {
				if ( method_exists( $this, $method ) ) {
					$return[ $method ] = $this->$method();
				}
			}
			$return['class'] = $return['css_class'];
			unset( $return['css_class'] );
			return $return;
		}

		/**
		 * @param null $selector
		 *
		 * @return \WPOnion\Modules\WP_Pointers\Pointer|bool|mixed
		 */
		public function selector( $selector = null ) {
			if ( null !== $selector ) {
				$this->set_option( 'selector', $selector );
				return $this;
			}
			return $this->option( 'selector', '' );
		}

		/**
		 * @param null $title
		 *
		 * @return \WPOnion\Modules\WP_Pointers\Pointer|bool|mixed
		 */
		public function title( $title = null ) {
			if ( null !== $title ) {
				$this->set_option( 'title', $title );
				return $this;
			}
			return $this->option( 'title', '' );
		}

		/**
		 * @param null $text
		 *
		 * @return \WPOnion\Modules\WP_Pointers\Pointer|bool|mixed
		 */
		public function text( $text = null ) {
			if ( null !== $text ) {
				$this->set_option( 'text', $text );
				return $this;
			}
			return $this->option( 'text', '' );
		}

		/**
		 * @param null $show
		 *
		 * @return \WPOnion\Modules\WP_Pointers\Pointer|bool|mixed
		 */
		public function show( $show = null ) {
			if ( null !== $show ) {
				$this->set_option( 'show', $show );
				return $this;
			}
			return $this->option( 'show', '' );
		}

		/**
		 * @param null $jsnext
		 *
		 * @return \WPOnion\Modules\WP_Pointers\Pointer|bool|mixed
		 */
		public function jsnext( $jsnext = null ) {
			if ( null !== $jsnext ) {
				$this->set_option( 'jsnext', $jsnext );
				return $this;
			}
			return $this->option( 'jsnext', '' );
		}

		/**
		 * @param null $phpcode
		 *
		 * @return \WPOnion\Modules\WP_Pointers\Pointer|bool|mixed
		 */
		public function phpcode( $phpcode = null ) {
			if ( null !== $phpcode ) {
				$this->set_option( 'phpcode', $phpcode );
				return $this;
			}
			return $this->option( 'phpcode' );
		}

		/**
		 * @param null $next
		 *
		 * @return \WPOnion\Modules\WP_Pointers\Pointer|bool|mixed
		 */
		public function next( $next = null ) {
			if ( null !== $next ) {
				if ( ( is_string( $next ) || $next instanceof Pointer ) && 1 === count( func_get_args() ) ) {
					if ( $next instanceof Pointer ) {
						$next = $next->uid();
					}

					$this->set_option( 'next', $next );
					return $this;
				} else {
					$instance = call_user_func_array( array( $this, 'add' ), func_get_args() );
					$this->set_option( 'next', $instance->uid() );
					return $this;
				}
			}
			return $this->option( 'next' );
		}

		/**
		 * @param null $css_class
		 *
		 * @return \WPOnion\Modules\WP_Pointers\Pointer|bool|mixed
		 */
		public function css_class( $css_class = null ) {
			if ( null !== $css_class ) {
				$this->set_option( 'css_class', $css_class );
				return $this;
			}
			return $this->option( 'css_class', '' );
		}

		/**
		 * @param null $width
		 *
		 * @return \WPOnion\Modules\WP_Pointers\Pointer|bool|mixed
		 */
		public function width( $width = null ) {
			if ( null !== $width ) {
				$this->set_option( 'width', $width );
				return $this;
			}
			return $this->option( 'width', '' );
		}

		/**
		 * @param null $align
		 *
		 * @return \WPOnion\Modules\WP_Pointers\Pointer|bool|mixed
		 */
		public function align( $align = null ) {
			if ( null !== $align ) {
				$this->set_option( 'align', $align );
				return $this;
			}
			return $this->option( 'align', null );
		}

		/**
		 * @param null $edge
		 *
		 * @return \WPOnion\Modules\WP_Pointers\Pointer|bool|mixed
		 */
		public function edge( $edge = null ) {
			if ( null !== $edge ) {
				$this->set_option( 'edge', $edge );
				return $this;
			}
			return $this->option( 'edge', null );
		}

		/**
		 * @param null $post_type
		 *
		 * @return \WPOnion\Modules\WP_Pointers\Pointer|bool|mixed
		 */
		public function post_type( $post_type = null ) {
			if ( null !== $post_type ) {
				$post_type = ( ! is_array( $post_type ) ) ? array( $post_type ) : $post_type;
				$this->set_option( 'post_type', array_filter( $post_type ) );
				return $this;
			}
			return $this->option( 'post_type', array() );
		}

		/**
		 * @param null $pages
		 *
		 * @return \WPOnion\Modules\WP_Pointers\Pointer|bool|mixed
		 */
		public function pages( $pages = null ) {
			if ( null !== $pages ) {
				$pages = ( ! is_array( $pages ) ) ? array( $pages ) : $pages;
				$this->set_option( 'pages', array_filter( $pages ) );
				return $this;
			}
			return $this->option( 'pages', array() );
		}

		/**
		 * @param null $icon_class
		 *
		 * @return \WPOnion\Modules\WP_Pointers\Pointer|bool|mixed
		 */
		public function icon_class( $icon_class = null ) {
			if ( null !== $icon_class ) {
				$this->set_option( 'icon_class', $icon_class );
				return $this;
			}
			return $this->option( 'icon_class', '' );
		}

		/**
		 * Returns Default Pointer Data.
		 *
		 * @return array
		 */
		protected function default_pointer_args() {
			return array(
				'selector'   => null,
				'title'      => null,
				'text'       => null,
				'show'       => null,
				'jsnext'     => null,
				'phpcode'    => null,
				'next'       => null,
				'css_class'  => null,
				'width'      => 300,
				'align'      => 'middle',
				'edge'       => 'left',
				'post_type'  => array(),
				'pages'      => array(),
				'icon_class' => '',
			);
		}

		/**
		 * Checks If Pointer Is Valid To Display.
		 *
		 * @return bool
		 */
		public function is_valid() {
			global $pagenow;
			$screen   = get_current_screen();
			$post     = isset( $screen->post_type ) ? $screen->post_type : false;
			$types    = $this->post_type();
			$pages    = $this->pages();
			$is_valid = true;

			if ( ! empty( $types ) ) {
				if ( false === isset( $types[ $post ] ) || false === in_array( $post, $types ) ) {
					$is_valid = false;
				}
			}

			if ( $is_valid ) {
				if ( ! empty( $pages ) ) {
					if ( false === isset( $pages[ $pagenow ] ) || false === in_array( $pagenow, $pages ) ) {
						$is_valid = false;
					}
				}
			}

			return $is_valid;
		}
	}
}
