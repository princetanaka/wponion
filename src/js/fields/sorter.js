import WPOnion_Field from '../core/field';

export default class extends WPOnion_Field {
	init() {
		var $this     = this.element,
			$enabled  = $this.find( '.wponion-enabled' ),
			$disabled = $this.find( '.wponion-disabled' );

		$enabled.sortable( {
			connectWith: $disabled,
			placeholder: 'ui-sortable-placeholder',
			update: function( event, ui ) {
				var $el = ui.item.find( 'input' );

				if( ui.item.parent().hasClass( 'wponion-enabled' ) ) {
					$el.attr( 'name', $el.attr( 'name' ).replace( 'disabled', 'enabled' ) );
				} else {
					$el.attr( 'name', $el.attr( 'name' ).replace( 'enabled', 'disabled' ) );
				}

				$this.trigger( 'wponion-sorter-updated' );
			}
		} );

		// avoid conflict
		$disabled.sortable( {
			connectWith: $enabled,
			placeholder: 'ui-sortable-placeholder',
		} );
	}
}
