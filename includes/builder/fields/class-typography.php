<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'WPO\Fields\Typography' ) ) {
	/**
	 * Class Typography
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Typography extends Field {
		/**
		 * Typography constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'typography', $id, $title, $args );
		}

		/**
		 * @param $preview
		 *
		 * @return $this
		 */
		public function preview( $preview ) {
			return $this->_set( 'preview', $preview );
		}

		/**
		 * @param $font_family
		 *
		 * @return $this
		 */
		public function font_family( $font_family ) {
			return $this->_set( 'font_family', $font_family );
		}

		/**
		 * @param $backup_font
		 *
		 * @return $this
		 */
		public function backup_font( $backup_font ) {
			return $this->_set( 'backup_font', $backup_font );
		}

		/**
		 * @param $text_align
		 *
		 * @return $this
		 */
		public function text_align( $text_align ) {
			return $this->_set( 'text_align', $text_align );
		}

		/**
		 * @param $writing_mode
		 *
		 * @return $this
		 */
		public function writing_mode( $writing_mode ) {
			return $this->_set( 'writing_mode', $writing_mode );
		}

		/**
		 * @param $text_orientation
		 *
		 * @return $this
		 */
		public function text_orientation( $text_orientation ) {
			return $this->_set( 'text_orientation', $text_orientation );
		}

		/**
		 * @param $text_direction
		 *
		 * @return $this
		 */
		public function text_direction( $text_direction ) {
			return $this->_set( 'text_direction', $text_direction );
		}

		/**
		 * @param $text_transform
		 *
		 * @return $this
		 */
		public function text_transform( $text_transform ) {
			return $this->_set( 'text_transform', $text_transform );
		}

		/**
		 * @param $text_decoration_line
		 *
		 * @return $this
		 */
		public function text_decoration_line( $text_decoration_line ) {
			return $this->_set( 'text_decoration_line', $text_decoration_line );
		}

		/**
		 * @param $text_decoration_style
		 *
		 * @return $this
		 */
		public function text_decoration_style( $text_decoration_style ) {
			return $this->_set( 'text_decoration_style', $text_decoration_style );
		}

		/**
		 * @param $text_decoration_color
		 *
		 * @return $this
		 */
		public function text_decoration_color( $text_decoration_color ) {
			return $this->_set( 'text_decoration_color', $text_decoration_color );
		}

		/**
		 * @param $font_weight
		 *
		 * @return $this
		 */
		public function font_weight( $font_weight ) {
			return $this->_set( 'font_weight', $font_weight );
		}

		/**
		 * @param $font_size
		 *
		 * @return $this
		 */
		public function font_size( $font_size ) {
			return $this->_set( 'font_size', $font_size );
		}

		/**
		 * @param $font_style
		 *
		 * @return $this
		 */
		public function font_style( $font_style ) {
			return $this->_set( 'font_style', $font_style );
		}

		/**
		 * @param $line_height
		 *
		 * @return $this
		 */
		public function line_height( $line_height ) {
			return $this->_set( 'line_height', $line_height );
		}

		/**
		 * @param $letter_spacing
		 *
		 * @return $this
		 */
		public function letter_spacing( $letter_spacing ) {
			return $this->_set( 'letter_spacing', $letter_spacing );
		}

		/**
		 * @param $color
		 *
		 * @return $this
		 */
		public function color( $color ) {
			return $this->_set( 'color', $color );
		}
	}
}
