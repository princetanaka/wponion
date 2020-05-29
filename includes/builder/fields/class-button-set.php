<?php

namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'WPO\Fields\Button_Set' ) ) {
	/**
	 * Class Button_Set
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Button_Set extends Checkbox_Radio {
		/**
		 * @var string
		 * @access
		 */
		protected $checkbox_type = 'button_set';

		/**
		 * @param $size
		 *
		 * @return $this
		 */
		public function size( $size ) {
			return $this->_set( 'size', $size );
		}

		/**
		 * @param string $active
		 *
		 * @return $this
		 */
		public function active( $active = 'button-primary' ) {
			return $this->_set( 'active', $active );
		}

		/**
		 * @param string $inactive
		 *
		 * @return $this
		 */
		public function inactive( $inactive = 'button-secondary' ) {
			return $this->_set( 'inactive', $inactive );
		}

		/**
		 * Sets To Small Size Button.
		 *
		 * @return \WPO\Fields\Button_Set
		 */
		public function large() {
			return $this->size( 'large' );
		}

		/**
		 * Sets To Small Size Button.
		 *
		 * @return \WPO\Fields\Button_Set
		 */
		public function small() {
			return $this->size( 'small' );
		}

		/**
		 * Sets To Normal Size Button.
		 *
		 * @return \WPO\Fields\Button_Set
		 */
		public function normal() {
			return $this->size( false );
		}
	}
}
