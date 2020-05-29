<?php

namespace WPO\Fields;

use WPO\Helper\Field\Nested_Fields;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'WPO\Fields\Metabox' ) ) {
	/**
	 * Class metabox
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Metabox extends Nested_Fields {
		/**
		 * Accordion constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'metabox', $id, $title, $args );
		}


		/**
		 * @param $metabox_title
		 *
		 * @return $this
		 */
		public function metabox_title( $metabox_title ) {
			return $this->_set( 'metabox_title', $metabox_title );
		}

		/**
		 * @param $metabox_id
		 *
		 * @return $this
		 */
		public function metabox_id( $metabox_id ) {
			return $this->_set( 'metabox_id', $metabox_id );
		}

		/**
		 * @param $context
		 *
		 * @return $this
		 */
		public function context( $context ) {
			return $this->_set( 'context', $context );
		}

		/**
		 * @param $screens
		 *
		 * @return $this
		 */
		public function screens( $screens ) {
			return $this->_set( 'screens', $screens );
		}

		/**
		 * @param $priority
		 *
		 * @return $this
		 */
		public function priority( $priority ) {
			return $this->_set( 'priority', $priority );
		}

		/**
		 * @param $theme
		 *
		 * @return $this
		 */
		public function theme( $theme ) {
			return $this->_set( 'theme', $theme );
		}

		/**
		 * @param $theme_color
		 *
		 * @return $this
		 */
		public function theme_color( $theme_color ) {
			return $this->_set( 'theme_color', $theme_color );
		}

		/**
		 * @param $ajax
		 *
		 * @return $this
		 */
		public function ajax( $ajax ) {
			return $this->_set( 'ajax', $ajax );
		}

		/**
		 * @param $module
		 *
		 * @return $this|string
		 */
		public function metabox_module( $module ) {
			return $this->_set( 'module', $module );
		}
	}
}
