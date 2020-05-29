<?php

namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'WPO\Fields\WP_Notice' ) ) {
	/**
	 * Class WP_Notice
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WP_Notice extends Notice {
		/**
		 * WP_Notice constructor.
		 *
		 * @param bool  $content
		 * @param bool  $id
		 * @param array $args
		 */
		public function __construct( $content = false, $id = false, $args = array() ) {
			parent::__construct( $content, $id, $args );
			$this->_set( 'type', 'wp_notice' );
		}

		/**
		 * @param bool $large
		 *
		 * @return $this
		 */
		public function large( $large = false ) {
			return $this->_set( 'large', $large );
		}

		/**
		 * @param bool $alt
		 *
		 * @return $this
		 */
		public function alt( $alt = false ) {
			return $this->_set( 'alt', $alt );
		}
	}
}
