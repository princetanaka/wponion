<?php
if ( ! function_exists( 'wponion_wp_modern_theme_init' ) ) {
	/**
	 * @param $data
	 *
	 * @return \WPOnion\Theme\WP_Modern
	 */
	function wponion_wp_modern_theme_init( $data ) {
		if ( ! class_exists( '\WPOnion\Theme\WP_Modern' ) ) {
			require_once WPONION_PATH . 'templates/wp-modern/class-wp-modern.php';
		}
		return new WPOnion\Theme\WP_Modern( $data );
	}
}

if ( ! function_exists( 'wponion_wp_lite_theme_init' ) ) {
	/**
	 * @param $data
	 *
	 * @return \WPOnion\Theme\WP_Lite
	 */
	function wponion_wp_lite_theme_init( $data ) {
		if ( ! class_exists( '\WPOnion\Theme\WP_Lite' ) ) {
			require_once WPONION_PATH . 'templates/wp-lite/class-wp-lite.php';
		}
		return new WPOnion\Theme\WP_Lite( $data );
	}
}

if ( ! function_exists( 'wponion_wp_theme_init' ) ) {
	/**
	 * @param $data
	 *
	 * @return \WPOnion\Theme\WP
	 */
	function wponion_wp_theme_init( $data ) {
		if ( ! class_exists( '\WPOnion\Theme\WP' ) ) {
			require_once WPONION_PATH . 'templates/wp/class-wp.php';
		}
		return new WPOnion\Theme\WP( $data );
	}
}


if ( ! function_exists( 'wponion_default_theme' ) ) {
	/**
	 * Returns Default Theme.
	 *
	 * @return mixed
	 */
	function wponion_default_theme() {
		return apply_filters( 'wponion_default_theme', 'wp' );
	}
}

if ( ! function_exists( 'wponion_add_theme' ) ) {
	/**
	 * Registers A Theme With WPOnion
	 *
	 * @param string $theme_name
	 * @param array  $supported_modules
	 * @param null   $callback
	 *
	 * @return bool
	 */
	function wponion_add_theme( $theme_name = '', $supported_modules = array(), $callback = null ) {
		return \WPOnion\Themes::register( $theme_name, $supported_modules, $callback );
	}
}
