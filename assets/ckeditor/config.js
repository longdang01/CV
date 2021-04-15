/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */
CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.entities_latin = false;
	config.language = 'vi';
	config.uiColor = '#AADC6E';
	config.allowedContent = true;
	config.extraAllowedContent = 'div(*)';
	config.autoGrow_onStartup = true;
	config.resize_maxWidth = 750;
    
    config.toolbar = [
		'/',
		{ name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline' ] },
		// { name: 'paragraph', items: [ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
		{ name: 'links', items: [ 'Link' ] },
		// { name: 'document', items: [ 'ExportPdf' ] },
		'/'
	];

};
