<?php
/**
 *
 * Initial version created 12-05-2018 / 10:25 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'wponion_load_core_assets' ) ) {
	/**
	 * Loads More assets and also with core.
	 *
	 * @param array $extra
	 */
	function wponion_load_core_assets( $extra = array() ) {
		wponion_load_asset( 'wponion-core' );

		if ( is_array( $extra ) ) {
			foreach ( $extra as $slug ) {
				wponion_load_asset( $slug );
			}
		} elseif ( is_string( $extra ) ) {
			wponion_load_asset( $extra );
		}
	}
}

if ( ! function_exists( 'wponion_load_asset' ) ) {
	/**
	 * load Framework Assets.
	 *
	 * @param string $key
	 */
	function wponion_load_asset( $key = '' ) {
		if ( is_string( $key ) ) {
			if ( wp_style_is( $key, 'registered' ) && false === wp_style_is( $key ) ) {
				wp_enqueue_style( $key );
			}

			if ( wp_script_is( $key, 'registered' ) && false === wp_script_is( $key ) ) {
				wp_enqueue_script( $key );
			}
		}
	}
}

if ( ! function_exists( 'wponion_icon' ) ) {
	/**
	 * Checks and returns icon html + load the required icon font.
	 *
	 * @param        $icon
	 * @param string $xtra_attrs
	 *
	 * @return string
	 */
	function wponion_icon( $icon, $xtra_attrs = '' ) {
		return ( ! empty( $icon ) ) ? '<i class="' . $icon . ' wponion-icon" ' . $xtra_attrs . '> </i>' : '';
	}
}

if ( ! function_exists( 'wponion_localize' ) ) {
	/**
	 * Returns an active instance of WPOnion_Localize_API.
	 *
	 * @return mixed|\WPOnion\Localize_API
	 */
	function wponion_localize() {
		return wponion_registry( 'wponion-global-localize-api', '\WPOnion\Localize_API' );
	}
}
