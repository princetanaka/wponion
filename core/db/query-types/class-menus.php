<?php

namespace WPOnion\DB\Query_Types;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\DB\Query_Types\Menus' ) ) {
	/**
	 * Class Menus
	 *
	 * @package WPOnion\DB\Query_Types
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.4.5.4
	 */
	class Menus extends WP_Query_Base {
		/**
		 * @param array $query_args
		 *
		 * @return array
		 */
		public function setup_query_args( $query_args ) {
			return $query_args;
		}

		/**
		 * Fetches Results From Database.
		 *
		 * @param $query_args
		 *
		 * @return array
		 */
		public function get_results( $query_args ) {
			return wp_get_nav_menus( $query_args );
		}

		/**
		 * @param array|object $values WP Query Result.
		 *
		 * @return string
		 */
		public function default_key( $values ) {
			return ( isset( $values->term_id ) ) ? $values->term_id : false;
		}

		/**
		 * @param array|object $values WP Query Result.
		 *
		 * @return string
		 */
		public function default_label( $values ) {
			return ( isset( $values->name ) ) ? $values->name : false;
		}
	}
}
