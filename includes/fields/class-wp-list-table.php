<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Field\WP_List_Table' ) ) {
	/**
	 * Class WP_List_Table
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	class WP_List_Table extends Field {

		/**
		 * Generates Final HTML Output.
		 */
		protected function output() {
			echo $this->before();
			echo '<div class="wponion-inner-wp-list-table">';
			$settings          = $this->option( 'settings' );
			$settings          = ( ! is_array( $settings ) ) ? array() : $settings;
			$settings['field'] = &$this;
			$instance          = new \WPOnion\WP\WP_List_Table( $settings, $this->option( 'data' ) );
			$instance->prepare_items();
			$instance->views();
			$instance->search_box( __( 'Search', 'wponion' ), 'search' );
			$instance->display();
			echo '</div>';
			echo $this->after();
		}

		/**
		 * Returns Fields.
		 *
		 * @return bool|array|\WPO\Builder|\WPO\Field|\WPO\Container
		 */
		public function fields() {
			return $this->option( 'fields' );
		}

		/**
		 * @param      $field
		 * @param      $value
		 * @param      $unqiue
		 * @param bool $is_init
		 *
		 * @return mixed
		 */
		public function sub_field( $field, $value, $unqiue, $is_init = false ) {
			return parent::sub_field( $field, $value, $unqiue, $is_init );
		}

		/**
		 * Returns Field's Default Value.
		 *
		 * @return array
		 */
		protected function defaults() {
			return array(
				'settings'   => array(),
				'data'       => array(),
				'query_args' => array(),
			);
		}

		/**
		 * Handles Fields Assets.
		 */
		public function assets() {
		}
	}
}