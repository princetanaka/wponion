<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'WPO\Fields\Text' ) ) {
	/**
	 * Class Text
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Text extends Field {
		/**
		 * Text constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'text', $id, $title, $args );
		}

		/**
		 * @param $prefix
		 *
		 * @return $this
		 */
		public function prefix( $prefix ) {
			return $this->_set( 'prefix', $prefix );
		}

		/**
		 * @param $surfix
		 *
		 * @return $this
		 */
		public function surfix( $surfix ) {
			return $this->_set( 'surfix', $surfix );
		}

		/**
		 * @param $inputmask
		 *
		 * @return $this
		 */
		public function inputmask( $inputmask ) {
			return $this->_set( 'inputmask', $inputmask );
		}

		/**
		 * @param $options
		 *
		 * @return mixed
		 */
		public function datalist( $options ) {
			return $this->options( $options );
		}
	}
}
