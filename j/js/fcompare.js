/**
 * @license jQuery FCompare Plugin  ##VERSION## 
 * Copyright 2013 Miriam Zusin. All rights reserved.
 * To use this file you must to buy a licence at http://codecanyon.net/user/no81no/portfolio 
 */

(function($){
	'use strict';
	
	/**
    * jQuery definition to anchor JsDoc comments.
    * @see <a href='http://jquery.com/' title='' target='_blank'>jquery.com</a>
    * @name jQuery
    * @class jQuery Library
    */
	 
	/**
    * jQuery 'fn' definition to anchor JsDoc comments.
    * @see <a href='http://jquery.com/' title='' target='_blank'>jquery.com</a>
    * @name fn
    * @class jQuery Library
    * @memberOf jQuery
    */
	
	/** @constructor */		
	var Init = function(options, $root){
	
		var self = {
			options: options
			,scene: null
			,cookies: null
			,data: null
			
			//jquery objects
			,$root: $root
		};
		
		self.options = $.extend({	
		
			//maximum items to compare
			max: 4
			
			//json data url
			,itemsFeaturesUrl: ''
			,dataUrl: ''
			
			//templates
			,sliderTmplPath: '.slider_template'
			,featureTmplPath: '.feature_template'
			,dataTmplPath: '.data_template'
			
			//pathes					
			,featuresPath: '#content .features'
			,dataPath: '#content .items'
			,hideIdenticalPath: '.show-diff-btn'
			
			//cookies
			,cookies: true
			,expiration: -1 //cookies expiration in days (-1 = cookies expire when browser is closed)
			
			//slider
			,slidesNumber: 5
			,keyboard: false
			
			//callback
			,callback: function(){}
			
			//events
			,onCompareEvent: 'onCompareEvent'
			,closeEvent: 'closeEvent'
			
		}, options);
		
		//init vars
		self.cookies = new jQuery.fn.fcompare.cookies(self.options, self.$root);
		self.data = new jQuery.fn.fcompare.data(self.options, self.$root, function(){
			
			//init scene
			self.scene = new jQuery.fn.fcompare.scene(self.options, self.$root, self.data, self.cookies);
			
			//restore cookies
			if(self.options.cookies){
				self.scene['restoreFromCookies']();
			}
		});
		
		return $.extend(this, self);  
	};
		
	/** 
	* jQuery FCompare Plugin
	* @param {Object} options - user options
	* @name fcompare
    * @class jQuery FCompare Plugin
    * @memberOf jQuery.fn	
	* @property {Object} options - user options
	* @property {Object} scene - html redering and templates
	* @property {Object} cookies - cookies helper
	* @property {Object} data - data manipulations
	* @property {jQueryObject} $root - fcompare container 
	*/
	jQuery.fn.fcompare = function(options){	
	
		return this.each(function(){
			
			//constructor
			var self = new Init(options, $(this));
			
			$(this).data('fcompare', self);
		});
	};		
	
})(jQuery);