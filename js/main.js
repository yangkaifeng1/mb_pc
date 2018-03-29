
/* Copyright (c) 2006 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * $LastChangedDate: 2007-07-22 01:45:56 +0200 (Son, 22 Jul 2007) $
 * $Rev: 2447 $
 *
 * Version 2.1.1
//  */
// (function($){$.fn.bgIframe=$.fn.bgiframe=function(s){if($.browser.msie&&/6.0/.test(navigator.userAgent)){s=$.extend({top:'auto',left:'auto',width:'auto',height:'auto',opacity:true,src:'javascript:false;'},s||{});var prop=function(n){return n&&n.constructor==Number?n+'px':n;},html='<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+s.src+'"'+'style="display:block;position:absolute;z-index:-1;'+(s.opacity!==false?'filter:Alpha(Opacity=\'0\');':'')+'top:'+(s.top=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+\'px\')':prop(s.top))+';'+'left:'+(s.left=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+\'px\')':prop(s.left))+';'+'width:'+(s.width=='auto'?'expression(this.parentNode.offsetWidth+\'px\')':prop(s.width))+';'+'height:'+(s.height=='auto'?'expression(this.parentNode.offsetHeight+\'px\')':prop(s.height))+';'+'"/>';return this.each(function(){if($('> iframe.bgiframe',this).length==0)this.insertBefore(document.createElement('html'),this.firstChild);});}return this;};})(jQuery);
// /**
//  * weebox.js
//  *
//  * weebox js
//  *
//  * @category   javascript
//  * @package    jquery
//  * @author     Jack <xiejinci@gmail.com>
//  * @copyright  Copyright (c) 2006-2008 9wee Com. (http://www.9wee.com)
//  * @license    http://www.9wee.com/license/
//  * @version    
//  */ 
// (function($) {
// 	/*if(typeof($.fn.bgIframe) == 'undefined') {
// 		$.ajax({
// 			type: "GET",
// 		  	url: '/js/jquery/bgiframe.js',//è·¯å¾„ä¸å¥½å¤„ç†
// 		  	success: function(js){eval(js);},
// 		  	async: false				  	
// 		});
// 	}*/
// 	var weebox = function(content, options) {
// 		var self = this;
// 		this._dragging = false;
// 		this._content = content;
// 		this._options = options;
// 		this.dh = null;
// 		this.mh = null;
// 		this.dt = null;
// 		this.dc = null;
// 		this.bo = null;
// 		this.bc = null;
// 		this.selector = null;	
// 		this.ajaxurl = null;
// 		this.options = null;
// 		this.defaults = {
// 			boxid: null,
// 			boxclass: null,
// 			type: 'dialog',
// 			title: '',
// 			width: 0,
// 			height: 0,
// 			timeout: 0, 
// 			draggable: true,
// 			modal: true,
// 			focus: null,
// 			position: 'center',
// 			overlay: 50,
// 			showTitle: true,
// 			showButton: true,
// 			showCancel: true, 
// 			showOk: true,
// 			okBtnName: 'ç¡®å®š',
// 			cancelBtnName: 'å–æ¶ˆ',
// 			contentType: 'text',
// 			contentChange: false,
// 			clickClose: false,
// 			zIndex: 999,
// 			animate: false,
// 			trigger: null,
// 			onclose: null,
// 			onopen: null,
// 			onok: null		
// 		};
// 		this.types = new Array(
// 			"dialog", 
// 			"error", 
// 			"warning", 
// 			"success", 
// 			"prompt",
// 			"box"
// 		);
// 		this.titles = {
// 			"error": 	"!! Error !!",
// 			"warning": 	"Warning!",
// 			"success": 	"Success",
// 			"prompt": 	"Please Choose",
// 			"dialog": 	"Dialog",
// 			"box":		""
// 		};
		
// 		this.initOptions = function() {	
// 			if (typeof(self._options) == "undefined") {
// 				self._options = {};
// 			}
// 			if (typeof(self._options.type) == "undefined") {
// 				self._options.type = 'dialog';
// 			}
// 			if(!$.inArray(self._options.type, self.types)) {
// 				self._options.type = self.types[0];
// 			}
// 			if (typeof(self._options.boxclass) == "undefined") {
// 				self._options.boxclass = self._options.type+"box";
// 			}
// 			if (typeof(self._options.title) == "undefined") {
// 				self._options.title = self.titles[self._options.type];
// 			}
// 			if (content.substr(0, 1) == "#") {
// 				self._options.contentType = 'selector';
// 				self.selector = content; 
// 			}
// 			self.options = $.extend({}, self.defaults, self._options);
// 		};
		
// 		this.initBox = function() {
// 			var html = '';	
// 			if (self.options.type == 'wee') {
// 				html =  '<div class="weedialog">' +
// 				'	<div class="dialog-top">' +
// 				'		<div class="dialog-tl"></div>' +
// 				'		<div class="dialog-tc"></div>' +
// 				'		<div class="dialog-tr"></div>' +
// 				'	</div>' +
// 				'	<table width="100%" border="0" cellspacing="0" cellpadding="0" >' +
// 				'		<tr>' +
// 				'			<td class="dialog-cl"></td>' +
// 				'			<td>' +
// 				'				<div class="dialog-header">' +
// 				'					<div class="dialog-title"></div>' +
// 				'					<div class="dialog-close"></div>' +
// 				'				</div>' +
// 				'				<div class="dialog-content"></div>' +
// 				'				<div class="dialog-button">' +
// 				'					<input type="button" class="dialog-ok" value="ç¡®å®š">' +
// 				'					<input type="button" class="dialog-cancel" value="å–æ¶ˆ">' +
// 				'				</div>' +
// 				'			</td>' +
// 				'			<td class="dialog-cr"></td>' +
// 				'		</tr>' +
// 				'	</table>' +
// 				'	<div class="dialog-bot">' +
// 				'		<div class="dialog-bl"></div>' +
// 				'		<div class="dialog-bc"></div>' +
// 				'		<div class="dialog-br"></div>' +
// 				'	</div>' +
// 				'</div>';
// 				$(".dialog-box").find(".dialog-close").click();
				
// 			} else {
// 				html = "<div class='dialog-box'>" +
// 							"<div class='dialog-header'>" +
// 								"<div class='dialog-title'></div>" +
// 								"<div class='dialog-close'></div>" +
// 							"</div>" +
// 							"<div class='dialog-content'></div>" +	
// 							"<div style='clear:both'></div>" +				
// 							"<div class='dialog-button'>" +
// 								"<input type='button' class='dialog-ok' value='ç¡®å®š'>" +
// 								"<input type='button' class='dialog-cancel' value='å–æ¶ˆ'>" +
// 							"</div>" +
// 						"</div>";
// 			}
// 			self.dh = $(html).appendTo('body').hide().css({
// 				position: 'absolute',	
// 				overflow: 'hidden',
// 				zIndex: self.options.zIndex
// 			});	
// 			self.dt = self.dh.find('.dialog-title');
// 			self.dc = self.dh.find('.dialog-content');
// 			self.db = self.dh.find('.dialog-button');
// 			self.bo = self.dh.find('.dialog-ok');
// 			self.bc = self.dh.find('.dialog-cancel');
// 			self.db.show();
// 			if (self.options.boxid) {
// 				self.dh.attr('id', self.options.boxid);
// 			}	
// 			if (self.options.boxclass) {
// 				self.dh.addClass(self.options.boxclass);
// 			}
// 			if (self.options.height>0) {
// 				self.dc.css('height', self.options.height);
// 			}
// 			if(self.options.contentType=='iframe'){
// 				self.dc.css('padding', "0");
// 				self.db.hide();
// 			}
			
// 			if (self.options.width>0) {
// 				self.dh.css('width', self.options.width);
// 			}
// 			if($.browser.msie&&($.browser.version == "6.0")&&!$.support.style)
// 				self.dh.bgiframe();	
// 		}
		
// 		this.initMask = function() {							
// 			if (self.options.modal) {
// 				self.mh = $("<div class='dialog-mask'></div>")
// 				.appendTo('body').hide().css({
// 					opacity: self.options.overlay/100,
// 					filter: 'alpha(opacity='+self.options.overlay+')',
// 					width: self.bwidth(),
// 					height: self.bheight(),
// 					zIndex: self.options.zIndex-1
// 				});
// 			}
// 		}
		
// 		this.initContent = function(content) {
// 			self.dh.find(".dialog-ok").val(self.options.okBtnName);
// 			self.dh.find(".dialog-cancel").val(self.options.cancelBtnName);	
// 			self.dh.find('.dialog-title').html(self.options.title);
// 			if (!self.options.showTitle) {
// 				self.dh.find('.dialog-header').hide();
// 			}	
// 			if (!self.options.showButton) {
// 				self.dh.find('.dialog-button').hide();
// 			}
// 			if (!self.options.showCancel) {
// 				self.dh.find('.dialog-cancel').hide();
// 			}							
// 			if (!self.options.showOk) {
// 				self.dh.find(".dialog-ok").hide();
// 			}			
// 			if (self.options.contentType == "selector") {
// 				self.selector = self._content;
// 				self._content = $(self.selector).html();
// 				self.setContent(self._content);
// 				//if have checkbox do
// 				var cs = $(self.selector).find(':checkbox');
// 				self.dh.find('.dialog-content').find(':checkbox').each(function(i){
// 					this.checked = cs[i].checked;
// 				});				
// 				$(self.selector).empty();
// 				self.onopen();
// 				self.show();
// 				self.focus();
// 			} else if (self.options.contentType == "ajax") {	
// 				self.ajaxurl = self._content;			
// 				self.setContent('<div class="dialog-loading"></div>');				
// 				self.show();
// 				$.get(self.ajaxurl, function(data) {
// 					self._content = data;
// 			    	self.setContent(self._content);
// 			    	self.onopen();
// 			    	self.focus();		  	
// 			    	if (self.options.position == 'center') {
// 						self.setCenterPosition();
// 			    	}
// 				});
// 			} else if (self.options.contentType == "iframe") {	
// 				self.setContent('<iframe frameborder="0" width="100%" height="100%" src="'+self._content+'"></iframe>');
// 				self.onopen();	
// 				self.show();	
// 				self.focus();
// 			}  else {
// 				self.setContent(self._content);
// 				self.onopen();	
// 				self.show();	
// 				self.focus();					
// 			}
// 		}
		
// 		this.initEvent = function() {
// 			self.dh.find(".dialog-close, .dialog-cancel, .dialog-ok").unbind('click').click(function(){self.close();
// 				if(self.options.type=='wee')
// 				{
// 					$(".dialog-box").find(".dialog-close").click();
// 				}
// 			});			
// 			if (typeof(self.options.onok) == "function") {
// 				self.dh.find(".dialog-ok").unbind('click').click(self.options.onok);
// 			} 
// 			if (typeof(self.options.oncancel) == "function") {
// 				self.dh.find(".dialog-cancel").unbind('click').click(self.options.oncancel);
// 			}			
// 			if (self.options.timeout>0) {
// 				window.setTimeout(self.close, (self.options.timeout * 1000));
// 			}	
// 			this.draggable();			
// 		}
		
// 		this.draggable = function() {	
// 			if (self.options.draggable && self.options.showTitle) {
// 				self.dh.find('.dialog-header').mousedown(function(event){
// 					self._ox = self.dh.position().left;
// 					self._oy = self.dh.position().top;					
// 					self._mx = event.clientX;
// 					self._my = event.clientY;
// 					self._dragging = true;
// 				});
// 				if (self.mh) {
// 					var handle = self.mh;
// 				} else {
// 					var handle = $(document);
// 				}
// 				$(document).mousemove(function(event){
// 					if (self._dragging == true) {
// 						//window.status = "X:"+event.clientX+"Y:"+event.clientY;
// 						self.dh.css({
// 							left: self._ox+event.clientX-self._mx, 
// 							top: self._oy+event.clientY-self._my
// 						});
// 					}
// 				}).mouseup(function(){
// 					self._mx = null;
// 					self._my = null;
// 					self._dragging = false;
// 				});
// 				var e = self.dh.find('.dialog-header').get(0);
// 				e.unselectable = "on";
// 				e.onselectstart = function() { 
// 					return false; 
// 				};
// 				if (e.style) { 
// 					e.style.MozUserSelect = "none"; 
// 				}
// 			}	
// 		}
		
// 		this.onopen = function() {							
// 			if (typeof(self.options.onopen) == "function") {
// 				self.options.onopen();
// 			}	
// 		}
		
// 		this.show = function() {	
// 			if (self.options.position == 'center') {
// 				self.setCenterPosition();
// 			}
// 			if (self.options.position == 'element') {
// 				self.setElementPosition();
// 			}		
// 			if (self.options.animate) {				
// 				self.dh.fadeIn("slow");
// 				if (self.mh) {
// 					self.mh.fadeIn("normal");
// 				}
// 			} else {
// 				self.dh.show();
// 				if (self.mh) {
// 					self.mh.show();
// 				}
// 			}	
// 		}
		
// 		this.focus = function() {
// 			if (self.options.focus) {
// 				self.dh.find(self.options.focus).focus();
// 			} else {
// 				self.dh.find('.dialog-cancel').focus();
// 			}
// 		}
		
// 		this.find = function(selector) {
// 			return self.dh.find(selector);
// 		}
		
// 		this.setTitle = function(title) {
// 			self.dh.find('.dialog-title').html(title);
// 		}
		
// 		this.getTitle = function() {
// 			return self.dh.find('.dialog-title').html();
// 		}
		
// 		this.setContent = function(content) {
// 			self.dh.find('.dialog-content').html(content);
// 		}
		
// 		this.getContent = function() {
// 			return self.dh.find('.dialog-content').html();
// 		}
		
// 		this.hideButton = function(btname) {
// 			self.dh.find('.dialog-'+btname).hide();			
// 		}
		
// 		this.showButton = function(btname) {
// 			self.dh.find('.dialog-'+btname).show();	
// 		}
		
// 		this.setButtonTitle = function(btname, title) {
// 			self.dh.find('.dialog-'+btname).val(title);	
// 		}
		
// 		this.close = function() {
// 			if (self.animate) {
// 				self.dh.fadeOut("slow", function () { self.dh.hide(); });
// 				if (self.mh) {
// 					self.mh.fadeOut("normal", function () { self.mh.hide(); });
// 				}
// 			} else {
// 				self.dh.hide();
// 				if (self.mh) {
// 					self.mh.hide();
// 				}
// 			}
// 			if (self.options.contentType == 'selector') {
// 				if (self.options.contentChange) {
// 					//if have checkbox do
// 					var cs = self.find(':checkbox');
// 					$(self.selector).html(self.getContent());						
// 					if (cs.length > 0) {
// 						$(self.selector).find(':checkbox').each(function(i){
// 							this.checked = cs[i].checked;
// 						});
// 					}
// 				} else {
// 					$(self.selector).html(self._content);
// 				} 
// 			}								
// 			if (typeof(self.options.onclose) == "function") {
// 				self.options.onclose();
// 			}
// 			self.dh.remove();
// 			if (self.mh) {
// 				self.mh.remove();
// 			}
// 		}
		
// 		this.bheight = function() {
// 			if ($.browser.msie && $.browser.version < 7) {
// 				var scrollHeight = Math.max(
// 					document.documentElement.scrollHeight,
// 					document.body.scrollHeight
// 				);
// 				var offsetHeight = Math.max(
// 					document.documentElement.offsetHeight,
// 					document.body.offsetHeight
// 				);
				
// 				if (scrollHeight < offsetHeight) {
// 					return $(window).height();
// 				} else {
// 					return scrollHeight;
// 				}
// 			} else {
// 				return $(document).height();
// 			}
// 		}
		
// 		this.bwidth = function() {
// 			if ($.browser.msie && $.browser.version < 7) {
// 				var scrollWidth = Math.max(
// 					document.documentElement.scrollWidth,
// 					document.body.scrollWidth
// 				);
// 				var offsetWidth = Math.max(
// 					document.documentElement.offsetWidth,
// 					document.body.offsetWidth
// 				);
				
// 				if (scrollWidth < offsetWidth) {
// 					return $(window).width();
// 				} else {
// 					return scrollWidth;
// 				}
// 			} else {
// 				return $(document).width();
// 			}
// 		}
		
// 		this.setCenterPosition = function() {
// 			var wnd = $(window), doc = $(document),
// 				pTop = doc.scrollTop(),	pLeft = doc.scrollLeft(),
// 				minTop = pTop;	
// 			pTop += (wnd.height() - self.dh.height()) / 2;
// 			pTop = Math.max(pTop, minTop);
// 			pLeft += (wnd.width() - self.dh.width()) / 2;
// 			self.dh.css({top: pTop, left: pLeft});
			
// 		}
		
// //		this.setElementPosition = function() {
// //			var trigger = $("#"+self.options.trigger);			
// //			if (trigger.length == 0) {
// //				alert('è¯·è®¾ç½®ä½ç½®çš„ç›¸å¯¹å…ƒç´ ');
// //				self.close();				
// //				return false;
// //			}		
// //			var scrollWidth = 0;
// //			if (!$.browser.msie || $.browser.version >= 7) {
// //				scrollWidth = $(window).width() - document.body.scrollWidth;
// //			}
// //			
// //			var left = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft)+trigger.position().left;
// //			if (left+self.dh.width() > document.body.clientWidth) {
// //				left = trigger.position().left + trigger.width() + scrollWidth - self.dh.width();
// //			} 
// //			var top = Math.max(document.documentElement.scrollTop, document.body.scrollTop)+trigger.position().top;
// //			if (top+self.dh.height()+trigger.height() > document.documentElement.clientHeight) {
// //				top = top - self.dh.height() - 5;
// //			} else {
// //				top = top + trigger.height() + 5;
// //			}
// //			self.dh.css({top: top, left: left});
// //			return true;
// //		}	
	
// 		this.setElementPosition = function() {
// 			var trigger = $(self.options.trigger);	
// 			if (trigger.length == 0) {
// 				alert('è¯·è®¾ç½®ä½ç½®çš„ç›¸å¯¹å…ƒç´ ');
// 				self.close();				
// 				return false;
// 			}
// 			var left = trigger.offset().left;
// 			var top = trigger.offset().top + 25;
// 			self.dh.css({top: top, left: left});
// 			return true;
// 		}	
		
// 		//çª—å£åˆå§‹åŒ–	
// 		this.initialize = function() {
// 			self.initOptions();
// 			self.initMask();
// 			self.initBox();		
// 			self.initContent();
// 			self.initEvent();
// 			return self;
// 		}
// 		//åˆå§‹åŒ–
// 		this.initialize();
// 	}	
	
// 	var weeboxs = function() {		
// 		var self = this;
// 		this._onbox = false;
// 		this._opening = false;
// 		this.boxs = new Array();
// 		this.zIndex = 999;
// 		this.push = function(box) {
// 			this.boxs.push(box);
// 		}
// 		this.pop = function() {
// 			if (this.boxs.length > 0) {
// 				return this.boxs.pop();
// 			} else {
// 				return false;
// 			}
// 		}
// 		this.open = function(content, options) {
// 			self._opening = true;
// 			if (typeof(options) == "undefined") {
// 				options = {};
// 			}
// 			if (options.boxid) {
// 				this.close(options.boxid);
// 			}
// 			options.zIndex = this.zIndex;
// 			this.zIndex += 10;
// 			var box = new weebox(content, options);
// 			box.dh.click(function(){
// 				self._onbox = true;
// 			});
// 			this.push(box);
// 			return box;
// 		}
// 		this.close = function(id) {
// 			if (id) {
// 				for(var i=0; i<this.boxs.length; i++) {
// 					if (this.boxs[i].dh.attr('id') == id) {
// 						this.boxs[i].close();
// 						this.boxs.splice(i,1);
// 					}
// 				}
// 			} else {
// 				this.pop().close();
// 			}
// 		}
// 		this.length = function() {
// 			return this.boxs.length;
// 		}
// 		this.getTopBox = function() {
// 			return this.boxs[this.boxs.length-1];
// 		}	
// 		this.find = function(selector) {
// 			return this.getTopBox().dh.find(selector);
// 		}		
// 		this.setTitle = function(title) {
// 			this.getTopBox().setTitle(title);
// 		}		
// 		this.getTitle = function() {
// 			return this.getTopBox().getTitle();
// 		}		
// 		this.setContent = function(content) {
// 			this.getTopBox().setContent(content);
// 		}		
// 		this.getContent = function() {
// 			return this.getTopBox().getContent();
// 		}		
// 		this.hideButton = function(btname) {
// 			this.getTopBox().hideButton(btname);			
// 		}		
// 		this.showButton = function(btname) {
// 			this.getTopBox().showButton(btname);	
// 		}		
// 		this.setButtonTitle = function(btname, title) {
// 			this.getTopBox().setButtonTitle(btname, title);	
// 		}
// 		$(window).scroll(function() {
// 			if (self.length() > 0) {
// 				var box = self.getTopBox();
// 				if (box.options.position == "center") {
// 					self.getTopBox().setCenterPosition();
// 				}
// 			}			
// 		});
// 		$(document).click(function() {
// 			if (self.length()>0) {
// 				var box = self.getTopBox();
// 				if(!self._opening && !self._onbox && box.options.clickClose) {
// 					box.close();
// 				}
// 			}
// 			self._opening = false;
// 			self._onbox = false;
// 		});
// 	}
// 	$.extend({weeboxs: new weeboxs()});		
// })(jQuery);
// (function($) {

// 	jQuery.fn.pngFix = function(settings) {
// 		settings = jQuery.extend({
// 			blankgif: 'blank.gif'
// 	}, settings);

// 	var ie55 = (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 4 && navigator.appVersion.indexOf("MSIE 5.5") != -1);
// 	var ie6 = (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 4 && navigator.appVersion.indexOf("MSIE 6.0") != -1);
	
// 	if (jQuery.browser.msie && (ie55 || ie6)) {
// 		jQuery(this).find("img[src$=.png]").each(function() {

// 			jQuery(this).attr('width',jQuery(this).width());
// 			jQuery(this).attr('height',jQuery(this).height());

// 			var prevStyle = '';
// 			var strNewHTML = '';
// 			var imgId = (jQuery(this).attr('id')) ? 'id="' + jQuery(this).attr('id') + '" ' : '';
// 			var imgClass = (jQuery(this).attr('class')) ? 'class="' + jQuery(this).attr('class') + '" ' : '';
// 			var imgTitle = (jQuery(this).attr('title')) ? 'title="' + jQuery(this).attr('title') + '" ' : '';
// 			var imgAlt = (jQuery(this).attr('alt')) ? 'alt="' + jQuery(this).attr('alt') + '" ' : '';
// 			var imgAlign = (jQuery(this).attr('align')) ? 'float:' + jQuery(this).attr('align') + ';' : '';
// 			var imgHand = (jQuery(this).parent().attr('href')) ? 'cursor:hand;' : '';
// 			if (this.style.border) {
// 				prevStyle += 'border:'+this.style.border+';';
// 				this.style.border = '';
// 			}
// 			if (this.style.padding) {
// 				prevStyle += 'padding:'+this.style.padding+';';
// 				this.style.padding = '';
// 			}
// 			if (this.style.margin) {
// 				prevStyle += 'margin:'+this.style.margin+';';
// 				this.style.margin = '';
// 			}
// 			var imgStyle = (this.style.cssText);

// 			strNewHTML += '<span '+imgId+imgClass+imgTitle+imgAlt;
// 			strNewHTML += 'style="position:relative;white-space:pre-line;display:inline-block;background:transparent;'+imgAlign+imgHand;
// 			strNewHTML += 'width:' + jQuery(this).width() + 'px;' + 'height:' + jQuery(this).height() + 'px;';
// 			strNewHTML += 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader' + '(src=\'' + jQuery(this).attr('src') + '\', sizingMethod=\'scale\');';
// 			strNewHTML += imgStyle+'"></span>';
// 			if (prevStyle != ''){
// 				strNewHTML = '<span style="position:relative;display:inline-block;'+prevStyle+imgHand+'width:' + jQuery(this).width() + 'px;' + 'height:' + jQuery(this).height() + 'px;'+'">' + strNewHTML + '</span>';
// 			}

// 			jQuery(this).hide();
// 			jQuery(this).after(strNewHTML);

// 		});

// 		jQuery(this).find("*").each(function(){
// 			var bgIMG = jQuery(this).css('background-image');
// 			if(bgIMG.indexOf(".png")!=-1){
// 				var iebg = bgIMG.split('url("')[1].split('")')[0];
				
// 				jQuery(this).css('background-image', 'none');
// 				jQuery(this).get(0).runtimeStyle.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + iebg + "',sizingMethod='scale')";
// 			}
// 		});
		
// 		jQuery(this).find("input[src$=.png]").each(function() {
// 			var bgIMG = jQuery(this).attr('src');
// 			jQuery(this).get(0).runtimeStyle.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader' + '(src=\'' + bgIMG + '\', sizingMethod=\'scale\');';
//    		jQuery(this).attr('src', settings.blankgif)
// 		});
	
// 	}
// 	return jQuery;
// };
// })(jQuery);

// //Javascript version
// //Paul Tero, July 2001
// //http://www.tero.co.uk/des/
// //
// //Optimised for performance with large blocks by Michael Hayworth, November 2001
// //http://www.netdealing.com
// //
// //THIS SOFTWARE IS PROVIDED "AS IS" AND
// //ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// //IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// //ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
// //FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
// //DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
// //OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
// //HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
// //LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
// //OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
// //SUCH DAMAGE.

// //des
// //this takes the key, the message, and whether to encrypt or decrypt
// function des (key, message, encrypt, mode, iv) {
//   //declaring this locally speeds things up a bit
//   var spfunction1 = new Array (0x1010400,0,0x10000,0x1010404,0x1010004,0x10404,0x4,0x10000,0x400,0x1010400,0x1010404,0x400,0x1000404,0x1010004,0x1000000,0x4,0x404,0x1000400,0x1000400,0x10400,0x10400,0x1010000,0x1010000,0x1000404,0x10004,0x1000004,0x1000004,0x10004,0,0x404,0x10404,0x1000000,0x10000,0x1010404,0x4,0x1010000,0x1010400,0x1000000,0x1000000,0x400,0x1010004,0x10000,0x10400,0x1000004,0x400,0x4,0x1000404,0x10404,0x1010404,0x10004,0x1010000,0x1000404,0x1000004,0x404,0x10404,0x1010400,0x404,0x1000400,0x1000400,0,0x10004,0x10400,0,0x1010004);
//   var spfunction2 = new Array (-0x7fef7fe0,-0x7fff8000,0x8000,0x108020,0x100000,0x20,-0x7fefffe0,-0x7fff7fe0,-0x7fffffe0,-0x7fef7fe0,-0x7fef8000,-0x80000000,-0x7fff8000,0x100000,0x20,-0x7fefffe0,0x108000,0x100020,-0x7fff7fe0,0,-0x80000000,0x8000,0x108020,-0x7ff00000,0x100020,-0x7fffffe0,0,0x108000,0x8020,-0x7fef8000,-0x7ff00000,0x8020,0,0x108020,-0x7fefffe0,0x100000,-0x7fff7fe0,-0x7ff00000,-0x7fef8000,0x8000,-0x7ff00000,-0x7fff8000,0x20,-0x7fef7fe0,0x108020,0x20,0x8000,-0x80000000,0x8020,-0x7fef8000,0x100000,-0x7fffffe0,0x100020,-0x7fff7fe0,-0x7fffffe0,0x100020,0x108000,0,-0x7fff8000,0x8020,-0x80000000,-0x7fefffe0,-0x7fef7fe0,0x108000);
//   var spfunction3 = new Array (0x208,0x8020200,0,0x8020008,0x8000200,0,0x20208,0x8000200,0x20008,0x8000008,0x8000008,0x20000,0x8020208,0x20008,0x8020000,0x208,0x8000000,0x8,0x8020200,0x200,0x20200,0x8020000,0x8020008,0x20208,0x8000208,0x20200,0x20000,0x8000208,0x8,0x8020208,0x200,0x8000000,0x8020200,0x8000000,0x20008,0x208,0x20000,0x8020200,0x8000200,0,0x200,0x20008,0x8020208,0x8000200,0x8000008,0x200,0,0x8020008,0x8000208,0x20000,0x8000000,0x8020208,0x8,0x20208,0x20200,0x8000008,0x8020000,0x8000208,0x208,0x8020000,0x20208,0x8,0x8020008,0x20200);
//   var spfunction4 = new Array (0x802001,0x2081,0x2081,0x80,0x802080,0x800081,0x800001,0x2001,0,0x802000,0x802000,0x802081,0x81,0,0x800080,0x800001,0x1,0x2000,0x800000,0x802001,0x80,0x800000,0x2001,0x2080,0x800081,0x1,0x2080,0x800080,0x2000,0x802080,0x802081,0x81,0x800080,0x800001,0x802000,0x802081,0x81,0,0,0x802000,0x2080,0x800080,0x800081,0x1,0x802001,0x2081,0x2081,0x80,0x802081,0x81,0x1,0x2000,0x800001,0x2001,0x802080,0x800081,0x2001,0x2080,0x800000,0x802001,0x80,0x800000,0x2000,0x802080);
//   var spfunction5 = new Array (0x100,0x2080100,0x2080000,0x42000100,0x80000,0x100,0x40000000,0x2080000,0x40080100,0x80000,0x2000100,0x40080100,0x42000100,0x42080000,0x80100,0x40000000,0x2000000,0x40080000,0x40080000,0,0x40000100,0x42080100,0x42080100,0x2000100,0x42080000,0x40000100,0,0x42000000,0x2080100,0x2000000,0x42000000,0x80100,0x80000,0x42000100,0x100,0x2000000,0x40000000,0x2080000,0x42000100,0x40080100,0x2000100,0x40000000,0x42080000,0x2080100,0x40080100,0x100,0x2000000,0x42080000,0x42080100,0x80100,0x42000000,0x42080100,0x2080000,0,0x40080000,0x42000000,0x80100,0x2000100,0x40000100,0x80000,0,0x40080000,0x2080100,0x40000100);
//   var spfunction6 = new Array (0x20000010,0x20400000,0x4000,0x20404010,0x20400000,0x10,0x20404010,0x400000,0x20004000,0x404010,0x400000,0x20000010,0x400010,0x20004000,0x20000000,0x4010,0,0x400010,0x20004010,0x4000,0x404000,0x20004010,0x10,0x20400010,0x20400010,0,0x404010,0x20404000,0x4010,0x404000,0x20404000,0x20000000,0x20004000,0x10,0x20400010,0x404000,0x20404010,0x400000,0x4010,0x20000010,0x400000,0x20004000,0x20000000,0x4010,0x20000010,0x20404010,0x404000,0x20400000,0x404010,0x20404000,0,0x20400010,0x10,0x4000,0x20400000,0x404010,0x4000,0x400010,0x20004010,0,0x20404000,0x20000000,0x400010,0x20004010);
//   var spfunction7 = new Array (0x200000,0x4200002,0x4000802,0,0x800,0x4000802,0x200802,0x4200800,0x4200802,0x200000,0,0x4000002,0x2,0x4000000,0x4200002,0x802,0x4000800,0x200802,0x200002,0x4000800,0x4000002,0x4200000,0x4200800,0x200002,0x4200000,0x800,0x802,0x4200802,0x200800,0x2,0x4000000,0x200800,0x4000000,0x200800,0x200000,0x4000802,0x4000802,0x4200002,0x4200002,0x2,0x200002,0x4000000,0x4000800,0x200000,0x4200800,0x802,0x200802,0x4200800,0x802,0x4000002,0x4200802,0x4200000,0x200800,0,0x2,0x4200802,0,0x200802,0x4200000,0x800,0x4000002,0x4000800,0x800,0x200002);
//   var spfunction8 = new Array (0x10001040,0x1000,0x40000,0x10041040,0x10000000,0x10001040,0x40,0x10000000,0x40040,0x10040000,0x10041040,0x41000,0x10041000,0x41040,0x1000,0x40,0x10040000,0x10000040,0x10001000,0x1040,0x41000,0x40040,0x10040040,0x10041000,0x1040,0,0,0x10040040,0x10000040,0x10001000,0x41040,0x40000,0x41040,0x40000,0x10041000,0x1000,0x40,0x10040040,0x1000,0x41040,0x10001000,0x40,0x10000040,0x10040000,0x10040040,0x10000000,0x40000,0x10001040,0,0x10041040,0x40040,0x10000040,0x10040000,0x10001000,0x10001040,0,0x10041040,0x41000,0x41000,0x1040,0x1040,0x40040,0x10000000,0x10041000);

//   //create the 16 or 48 subkeys we will need
//   var keys = des_createKeys (key);
//   var m=0, i, j, temp, temp2, right1, right2, left, right, looping;
//   var cbcleft, cbcleft2, cbcright, cbcright2
//   var endloop, loopinc;
//   var len = message.length;
//   var chunk = 0;
//   //set up the loops for single and triple des
//   var iterations = keys.length == 32 ? 3 : 9; //single or triple des
//   if (iterations == 3) {looping = encrypt ? new Array (0, 32, 2) : new Array (30, -2, -2);}
//   else {looping = encrypt ? new Array (0, 32, 2, 62, 30, -2, 64, 96, 2) : new Array (94, 62, -2, 32, 64, 2, 30, -2, -2);}

//   message += "\0\0\0\0\0\0\0\0"; //pad the message out with null bytes
//   //store the result here
//   result = "";
//   tempresult = "";

//   if (mode == 1) { //CBC mode
//     cbcleft = (iv.charCodeAt(m++) << 24) | (iv.charCodeAt(m++) << 16) | (iv.charCodeAt(m++) << 8) | iv.charCodeAt(m++);
//     cbcright = (iv.charCodeAt(m++) << 24) | (iv.charCodeAt(m++) << 16) | (iv.charCodeAt(m++) << 8) | iv.charCodeAt(m++);
//     m=0;
//   }

//   //loop through each 64 bit chunk of the message
//   while (m < len) {
//     left = (message.charCodeAt(m++) << 24) | (message.charCodeAt(m++) << 16) | (message.charCodeAt(m++) << 8) | message.charCodeAt(m++);
//     right = (message.charCodeAt(m++) << 24) | (message.charCodeAt(m++) << 16) | (message.charCodeAt(m++) << 8) | message.charCodeAt(m++);

//     //for Cipher Block Chaining mode, xor the message with the previous result
//     if (mode == 1) {if (encrypt) {left ^= cbcleft; right ^= cbcright;} else {cbcleft2 = cbcleft; cbcright2 = cbcright; cbcleft = left; cbcright = right;}}

//     //first each 64 but chunk of the message must be permuted according to IP
//     temp = ((left >>> 4) ^ right) & 0x0f0f0f0f; right ^= temp; left ^= (temp << 4);
//     temp = ((left >>> 16) ^ right) & 0x0000ffff; right ^= temp; left ^= (temp << 16);
//     temp = ((right >>> 2) ^ left) & 0x33333333; left ^= temp; right ^= (temp << 2);
//     temp = ((right >>> 8) ^ left) & 0x00ff00ff; left ^= temp; right ^= (temp << 8);
//     temp = ((left >>> 1) ^ right) & 0x55555555; right ^= temp; left ^= (temp << 1);

//     left = ((left << 1) | (left >>> 31)); 
//     right = ((right << 1) | (right >>> 31)); 

//     //do this either 1 or 3 times for each chunk of the message
//     for (j=0; j<iterations; j+=3) {
//       endloop = looping[j+1];
//       loopinc = looping[j+2];
//       //now go through and perform the encryption or decryption  
//       for (i=looping[j]; i!=endloop; i+=loopinc) { //for efficiency
//         right1 = right ^ keys[i]; 
//         right2 = ((right >>> 4) | (right << 28)) ^ keys[i+1];
//         //the result is attained by passing these bytes through the S selection functions
//         temp = left;
//         left = right;
//         right = temp ^ (spfunction2[(right1 >>> 24) & 0x3f] | spfunction4[(right1 >>> 16) & 0x3f]
//               | spfunction6[(right1 >>>  8) & 0x3f] | spfunction8[right1 & 0x3f]
//               | spfunction1[(right2 >>> 24) & 0x3f] | spfunction3[(right2 >>> 16) & 0x3f]
//               | spfunction5[(right2 >>>  8) & 0x3f] | spfunction7[right2 & 0x3f]);
//       }
//       temp = left; left = right; right = temp; //unreverse left and right
//     } //for either 1 or 3 iterations

//     //move then each one bit to the right
//     left = ((left >>> 1) | (left << 31)); 
//     right = ((right >>> 1) | (right << 31)); 

//     //now perform IP-1, which is IP in the opposite direction
//     temp = ((left >>> 1) ^ right) & 0x55555555; right ^= temp; left ^= (temp << 1);
//     temp = ((right >>> 8) ^ left) & 0x00ff00ff; left ^= temp; right ^= (temp << 8);
//     temp = ((right >>> 2) ^ left) & 0x33333333; left ^= temp; right ^= (temp << 2);
//     temp = ((left >>> 16) ^ right) & 0x0000ffff; right ^= temp; left ^= (temp << 16);
//     temp = ((left >>> 4) ^ right) & 0x0f0f0f0f; right ^= temp; left ^= (temp << 4);

//     //for Cipher Block Chaining mode, xor the message with the previous result
//     if (mode == 1) {if (encrypt) {cbcleft = left; cbcright = right;} else {left ^= cbcleft2; right ^= cbcright2;}}
//     tempresult += String.fromCharCode ((left>>>24), ((left>>>16) & 0xff), ((left>>>8) & 0xff), (left & 0xff), (right>>>24), ((right>>>16) & 0xff), ((right>>>8) & 0xff), (right & 0xff));

//     chunk += 8;
//     if (chunk == 512) {result += tempresult; tempresult = ""; chunk = 0;}
//   } //for every 8 characters, or 64 bits in the message

//   //return the result as an array
//   return result + tempresult;
// } //end of des



// //des_createKeys
// //this takes as input a 64 bit key (even though only 56 bits are used)
// //as an array of 2 integers, and returns 16 48 bit keys
// function des_createKeys (key) {
//   //declaring this locally speeds things up a bit
//   pc2bytes0  = new Array (0,0x4,0x20000000,0x20000004,0x10000,0x10004,0x20010000,0x20010004,0x200,0x204,0x20000200,0x20000204,0x10200,0x10204,0x20010200,0x20010204);
//   pc2bytes1  = new Array (0,0x1,0x100000,0x100001,0x4000000,0x4000001,0x4100000,0x4100001,0x100,0x101,0x100100,0x100101,0x4000100,0x4000101,0x4100100,0x4100101);
//   pc2bytes2  = new Array (0,0x8,0x800,0x808,0x1000000,0x1000008,0x1000800,0x1000808,0,0x8,0x800,0x808,0x1000000,0x1000008,0x1000800,0x1000808);
//   pc2bytes3  = new Array (0,0x200000,0x8000000,0x8200000,0x2000,0x202000,0x8002000,0x8202000,0x20000,0x220000,0x8020000,0x8220000,0x22000,0x222000,0x8022000,0x8222000);
//   pc2bytes4  = new Array (0,0x40000,0x10,0x40010,0,0x40000,0x10,0x40010,0x1000,0x41000,0x1010,0x41010,0x1000,0x41000,0x1010,0x41010);
//   pc2bytes5  = new Array (0,0x400,0x20,0x420,0,0x400,0x20,0x420,0x2000000,0x2000400,0x2000020,0x2000420,0x2000000,0x2000400,0x2000020,0x2000420);
//   pc2bytes6  = new Array (0,0x10000000,0x80000,0x10080000,0x2,0x10000002,0x80002,0x10080002,0,0x10000000,0x80000,0x10080000,0x2,0x10000002,0x80002,0x10080002);
//   pc2bytes7  = new Array (0,0x10000,0x800,0x10800,0x20000000,0x20010000,0x20000800,0x20010800,0x20000,0x30000,0x20800,0x30800,0x20020000,0x20030000,0x20020800,0x20030800);
//   pc2bytes8  = new Array (0,0x40000,0,0x40000,0x2,0x40002,0x2,0x40002,0x2000000,0x2040000,0x2000000,0x2040000,0x2000002,0x2040002,0x2000002,0x2040002);
//   pc2bytes9  = new Array (0,0x10000000,0x8,0x10000008,0,0x10000000,0x8,0x10000008,0x400,0x10000400,0x408,0x10000408,0x400,0x10000400,0x408,0x10000408);
//   pc2bytes10 = new Array (0,0x20,0,0x20,0x100000,0x100020,0x100000,0x100020,0x2000,0x2020,0x2000,0x2020,0x102000,0x102020,0x102000,0x102020);
//   pc2bytes11 = new Array (0,0x1000000,0x200,0x1000200,0x200000,0x1200000,0x200200,0x1200200,0x4000000,0x5000000,0x4000200,0x5000200,0x4200000,0x5200000,0x4200200,0x5200200);
//   pc2bytes12 = new Array (0,0x1000,0x8000000,0x8001000,0x80000,0x81000,0x8080000,0x8081000,0x10,0x1010,0x8000010,0x8001010,0x80010,0x81010,0x8080010,0x8081010);
//   pc2bytes13 = new Array (0,0x4,0x100,0x104,0,0x4,0x100,0x104,0x1,0x5,0x101,0x105,0x1,0x5,0x101,0x105);

//   //how many iterations (1 for des, 3 for triple des)
//   var iterations = key.length >= 24 ? 3 : 1;
//   //stores the return keys
//   var keys = new Array (32 * iterations);
//   //now define the left shifts which need to be done
//   var shifts = new Array (0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0);
//   //other variables
//   var lefttemp, righttemp, m=0, n=0, temp;

//   for (var j=0; j<iterations; j++) { //either 1 or 3 iterations
//     left = (key.charCodeAt(m++) << 24) | (key.charCodeAt(m++) << 16) | (key.charCodeAt(m++) << 8) | key.charCodeAt(m++);
//     right = (key.charCodeAt(m++) << 24) | (key.charCodeAt(m++) << 16) | (key.charCodeAt(m++) << 8) | key.charCodeAt(m++);

//     temp = ((left >>> 4) ^ right) & 0x0f0f0f0f; right ^= temp; left ^= (temp << 4);
//     temp = ((right >>> -16) ^ left) & 0x0000ffff; left ^= temp; right ^= (temp << -16);
//     temp = ((left >>> 2) ^ right) & 0x33333333; right ^= temp; left ^= (temp << 2);
//     temp = ((right >>> -16) ^ left) & 0x0000ffff; left ^= temp; right ^= (temp << -16);
//     temp = ((left >>> 1) ^ right) & 0x55555555; right ^= temp; left ^= (temp << 1);
//     temp = ((right >>> 8) ^ left) & 0x00ff00ff; left ^= temp; right ^= (temp << 8);
//     temp = ((left >>> 1) ^ right) & 0x55555555; right ^= temp; left ^= (temp << 1);

//     //the right side needs to be shifted and to get the last four bits of the left side
//     temp = (left << 8) | ((right >>> 20) & 0x000000f0);
//     //left needs to be put upside down
//     left = (right << 24) | ((right << 8) & 0xff0000) | ((right >>> 8) & 0xff00) | ((right >>> 24) & 0xf0);
//     right = temp;

//     //now go through and perform these shifts on the left and right keys
//     for (i=0; i < shifts.length; i++) {
//       //shift the keys either one or two bits to the left
//       if (shifts[i]) {left = (left << 2) | (left >>> 26); right = (right << 2) | (right >>> 26);}
//       else {left = (left << 1) | (left >>> 27); right = (right << 1) | (right >>> 27);}
//       left &= -0xf; right &= -0xf;

//       //now apply PC-2, in such a way that E is easier when encrypting or decrypting
//       //this conversion will look like PC-2 except only the last 6 bits of each byte are used
//       //rather than 48 consecutive bits and the order of lines will be according to 
//       //how the S selection functions will be applied: S2, S4, S6, S8, S1, S3, S5, S7
//       lefttemp = pc2bytes0[left >>> 28] | pc2bytes1[(left >>> 24) & 0xf]
//               | pc2bytes2[(left >>> 20) & 0xf] | pc2bytes3[(left >>> 16) & 0xf]
//               | pc2bytes4[(left >>> 12) & 0xf] | pc2bytes5[(left >>> 8) & 0xf]
//               | pc2bytes6[(left >>> 4) & 0xf];
//       righttemp = pc2bytes7[right >>> 28] | pc2bytes8[(right >>> 24) & 0xf]
//                 | pc2bytes9[(right >>> 20) & 0xf] | pc2bytes10[(right >>> 16) & 0xf]
//                 | pc2bytes11[(right >>> 12) & 0xf] | pc2bytes12[(right >>> 8) & 0xf]
//                 | pc2bytes13[(right >>> 4) & 0xf];
//       temp = ((righttemp >>> 16) ^ lefttemp) & 0x0000ffff; 
//       keys[n++] = lefttemp ^ temp; keys[n++] = righttemp ^ (temp << 16);
//     }
//   } //for each iterations
//   //return the keys we've created
//   return keys;
// } //end of des_createKeys


// ////////////////////////////// TEST //////////////////////////////
// function stringToHex (s) {
//   var r = "";
//   var hexes = new Array ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");
//   for (var i=0; i<s.length; i++) {r += hexes [s.charCodeAt(i) >> 4] + hexes [s.charCodeAt(i) & 0xf];}
//   return r;
// }


// function FW_Password (pwd){
// 	return stringToHex(des(__LOGIN_KEY,pwd,1,0));
// }


// $(document).ready(function(){
// 	if($.browser.msie) {			
// 		var SH=$(window).height();
// 		$('.contactusdiyou').css('height',SH+50);	
// 	}
	
// });

// $(function(){

// 	$(".hoverbtn").bind('click',function(){
//      		$(".hoverbtn").toggleClass("v"); 
//      		if ($(".hoverbtn").hasClass("v")) {
//      			$(".hoverimg").attr("src",TMPL+"/images/hoverbtnbg1.gif");
//      			if($.browser.msie) {
     			
// 				    // æ­¤æµè§ˆå™¨ä¸º IE
				    
// 				} else {
// 				    $('.diyoumask').fadeIn();
// 				}
// 				$('.contactusdiyou').animate({right:'0'},300);		
//      		}
//      		else{
//      			$(".hoverimg").attr("src",TMPL+"/images/hoverbtnbg.gif");
//      			$('.contactusdiyou').animate({right:'-230px'},300,function(){});
//      			if($.browser.msie) {
// 				    // æ­¤æµè§ˆå™¨ä¸º IE
// 				} else {
// 				    $('.diyoumask').fadeOut();
// 				}
//      		}
//   });

// });


// /*é¼ æ ‡ä¸Šç§»æ˜¾ç¤º*/



// function aqln_hover(){
// 	$(".contactusdiyou").mouseover(function(){
// 		$(".contactusdiyou").oneTime(50,function(){  
// 			$('.diyoumask').show();
// 			$('.contactusdiyou').animate({right:'0'},1000);			
// 		 });
// 	});
// }
// function aqln_leave(){
// 	$(".contactusdiyou").mouseleave(function(){
// 		$(".contactusdiyou").stopTime(); 
// 		$('.contactusdiyou').animate({right:'-230px'},1000,function(){$('.diyoumask').hide();});
// 	});
// }

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(3($){$.X.3J=3(4){2 x={1o:0,1A:"G",M:F};4=$.1b({},x,4);2 o=$(6);2 m=$(o).1("m");$(o).1c();c(4.M){$(o).2w();4.1o=$(o).2m().1("1o");$(o).2m().3H()}2 I=$("<16 1o=\'"+4.1o+"\'></16>");$(I).1("Y",$(o).1("Y"));$(I).1("12",$(o).1("12"));$(I).g({"13":"1V-1i"});2 1r=$("<1M></1M>");$(I).21(1r);$(1r).1("Y","2l-2j-2p");2 1G=$(o).f("2r:2p");$(1r).18("<n>"+1G.18()+"</n><i></i>");$(1r).1("10",1G.1("10"));2 W=$("<S></S>");$(I).21(W);$(o).f("2r").27(3(3M,1D){2 1k=$("<a 2V=\'3G:3F(0);\'></a>");$(1k).g({"13":"1i"});$(1k).1("10",$(1D).1("10"));$(1k).18($(1D).18());c(1G.1("10")==$(1D).1("10"))1k.q("25");$(W).21(1k)});$(o).23(I);$(W).g({"Z":"2H","z-2K":50});$(W).q("2l-2j-3A");2 A=$(I).Z().A+$(I).m();2 v=$(I).Z().v;$(W).g("v",v);$(W).g("A",A);c(m&&$(W).m()>2k(m)){$(W).g("m",2k(m))}$(W).1c();c(4.M)$(o).1c();c(4.1A=="G"){$(I).t("G",3(){2 A=$(6).Z().A+$(6).m();2 v=$(6).Z().v;$(6).f("S").g("v",v);$(6).f("S").g("A",A);$(6).f("S").2h("2f");$(6).q("2b")})}14{$(I).1h(3(){$(6).3D(20,3(){2 A=$(6).Z().A+$(6).m();2 v=$(6).Z().v;$(6).f("S").g("v",v);$(6).f("S").g("A",A);$(6).f("S").2h("2f");$(6).q("2b")})},3(){$(6).3C();$(6).f("S").3O("2f");$(6).7("2b")})}$(I).f("S a").t("G",3(){2 16=$(6).P().P();2 n=$(6);$(16).f("1M").18("<n>"+$(n).18()+"</n><i></i>");$(16).f("1M").1("10",$(n).1("10"));$(16).2a().E($(n).1("10"));$(16).2a().19("44");$(16).f("S a").7("25");$(6).q("25")})},$.X.45=3(){2 D=$(6);c(D.g("13")=="2c")1j;$(D).1c();2 o=$("<1t><1t><n></n></1t></1t>");$(D).23(o);$(o).1("Y",$(D).1("Y"));$(o).q($(D).1("j"));$(o).1("j",$(D).1("j"));$(o).f("n").18($(D).18());$(o).t("G",3(){c(D.1("Q")=="2M"){2 P=D.P();3Z{3Y(P.3S(0).3R.3Q()!="3T"){P=P.P()}P.2M()}3w(e){$(D).G()}}14 $(D).G()});$(o).t("2y",3(){$(o).7($(o).1("j")+"R");$(o).7($(o).1("j")+"1u");$(o).7($(o).1("j"));$(o).q($(o).1("j")+"R")});$(o).t("2A",3(){$(o).7($(o).1("j")+"R");$(o).7($(o).1("j")+"1u");$(o).7($(o).1("j"));$(o).q($(o).1("j"))});$(o).t("3W",3(){$(o).7($(o).1("j")+"R");$(o).7($(o).1("j")+"1u");$(o).7($(o).1("j"));$(o).q($(o).1("j")+"1u")});$(o).t("3V",3(){$(o).7($(o).1("j")+"R");$(o).7($(o).1("j")+"1u");$(o).7($(o).1("j"));$(o).q($(o).1("j")+"R")})},$.X.3o=3(){2 k=$(6);$(k).t("26",3(){$(k).7("1h");$(k).7("1f");$(k).q("1h")});$(k).t("2J",3(){$(k).7("1h");$(k).7("1f");$(k).q("1f")});c($(k).1("r")==""||!$(k).1("r"))1j;c(\'1H\'33 30.34(\'B\')){$(k).1("1H",$(k).1("r"))}14{2 r=$(k).2a();c($(r).1("j")!="r"){r=$("<n 15=\'Z:2H; K:#3c;\' j=\'r\'>"+$(k).1("r")+"</n>");$(r).g({"l-17":$(k).g("l-17"),"V-v":$(k).g("V-v"),"V-2I":$(k).g("V-2I"),"V-A":$(k).g("V-A"),"V-2L":$(k).g("V-2L")});$(r).g("v",0);$(r).g("A",0);$(r).g("l-1e","1f");$(r).g("13","1i");$(r).g("z-2K","20");2 37=$(k).2v("<i 15=\'l-15:1f;l-1e:1f; 13:1i;\'></i>");$(k).35(r)}c($.2D($(k).E())!=""){$(r).g("13","2c")}$(r).G(3(){$(k).26()});$(k).26(3(){$(r).g("13","2c")});$(k).2J(3(){c($.2D($(k).E())=="")$(r).2w()})}},$.X.3q=3(4){2 x={M:F};4=$.1b({},x,4);2 9=$(6);2 o=$(9).f("B[Q=\'22\']");$(o).1c();2 d=$(o).1("d");2 8=$(9).1("j");$(9).q(8);$(9).1("12",$(o).1("12"));$(9).g({"13":"1V-1i"});$(9).1("d",d?C:F);c(d){$(9).7(8);$(9).7(8+"T");$(9).q(8+"T")}14{$(9).7(8);$(9).7(8+"T");$(9).q(8)}c(4.M)1j;$(o).t("G",3(){1j F});$(9).1h(3(){2 J=$(6).f("B[Q=\'22\']");2 d=$(J).1("d");2 8=$(9).1("j");c(!d)$(6).q(8+"R")},3(){$(6).7(8+"R")});$(9).t("G",3(){2 h=$(6);2 J=$(h).f("B[Q=\'22\']");2 d=$(J).1("d");2 8=$(9).1("j");d=d?F:C;$(J).1("d",d);$(h).1("d",d);$(h).7(8+"R");c(d){$(J).19("3p");$(h).7(8);$(h).7(8+"T");$(h).q(8+"T")}14{$(J).19("3e");$(h).7(8);$(h).7(8+"T");$(h).q(8)}})},$.X.3r=3(4){2 x={M:F,1w:5};4=$.1b({},x,4);2 1a=$(6);$(1a).1c();2 29=$(1a).1("29");2 E=$(1a).E();c(3s(E))E=0;c(E<0)E=0;c(E>4.1w)E=4.1w;c(!4.M)$(1a).2v("<n><n></n></n>");2 w=$(1a).P().P();w.1("Y",$(1a).1("Y"));$(w).f("n").g("y",(3n(E)/4.1w*20)+"%");c(!4.M&&!29){2 2x=$(w).y();2 1z=2x/4.1w;$(w).t("3i 2y",3(1A){2 2d=1A.2d;2 v=$(w).2P().v;2 2B=2d-v;2 1g=3X.4n(2B/1z);2 1B=(1g*1z)+"2z";$(w).f("B").1("1g",1g);$(w).f("n").g("y",1B);$(w).f("B").19("2E")});$(w).t("2A",3(){2 1q=$(w).f("n").f("B").E();2 1B=(1q*1z)+"2z";$(w).f("n").g("y",1B);$(w).f("B").1("1g",1q);$(w).f("B").19("2E")});$(w).t("G",3(){2 1q=$(w).f("B").1("1g");$(w).f("n").f("B").E(1q);$(w).f("B").19("4N")})}},$.X.2F=3(4){2 x={M:F};4=$.1b({},x,4);2 9=$(6);2 o=$(9).f("B[Q=\'1C\']");$(o).1c();2 d=$(o).1("d");2 8=$(9).1("j");$(9).q(8);$(9).1("12",$(o).1("12"));$(9).g({"13":"1V-1i"});$(9).1("d",d?C:F);c(d){$(9).7(8);$(9).7(8+"T");$(9).q(8+"T")}14{$(9).7(8);$(9).7(8+"T");$(9).q(8)}c(4.M)1j;$(o).t("G",3(){1j F});$(9).1h(3(){2 J=$(6).f("B[Q=\'1C\']");2 d=$(J).1("d");2 8=$(9).1("j");c(!d)$(6).q(8+"R")},3(){$(6).7(8+"R")});$(9).t("G",3(){2 h=$(6);2 J=$(h).f("B[Q=\'1C\']");2 d=$(J).1("d");2 8=$(9).1("j");2 2G=d;d=C;$(J).1("d",d);$(h).1("d",d);$(h).7(8+"R");$("B[12=\'"+h.1("12")+"\'][Q=\'1C\']").P().27(3(i,2t){$(2t).2F({M:C})});c(!2G){$(J).19("G");$(h).7(8);$(h).7(8+"T");$(h).q(8+"T")}})},$.X.4l=3(4){2 x={1n:4k,2g:C,1K:N,1L:N,1E:N,1I:N};4=$.1b({},x,4);2 D=$(6);2 L=4j 4m.4p({4o:D[0],1n:4.1n,4h:4b,4a:49,4c:4.2g,4e:{4r:4E,4D:[{1p:"4C 1m",4F:4G}]}});L.4I();L.t(\'1K\',3(L,1m){c(4.1K!=N){c(4.1K.1x(N,1m)!=F){L.2N()}}14{L.2N()}});L.t(\'1L\',3(L,4A,2q){c(4.1L!=N){2 1X=$.4u(2q.4s);4.1L.1x(N,1X);c(1X.4y!=0){L.5m()}}});L.t(\'1E\',3(L,1m){c(4.1E!=N)4.1E.1x(N,1m)});L.t(\'1I\',3(L,2o){c(4.1I!=N)4.1I.1x(N,2o)})},$.X.5c=3(4){2 x=$.1b({},{"1n":"","y":56,"m":4R,"2T":N},4);2 2u=$(6);2 4M=4W.3k(2u,{4O:x.1n,4d:4f,4q:4z,2U:C,2U:F,4x:C,y:x.y,m:x.m,4w:[\'4v\',\'4t\',\'|\',\'4B\',\'4H\',\'4g\',\'4i\',\'4J\',\'4K\',\'|\',\'5a\',\'5b\',\'59\',\'58\',\'55\',\'|\',\'57\',\'5d\',\'5e\'],5k:{l:[\'K\',\'17\',\'5l\',\'.U-K\'],n:[\'.K\',\'.U-K\',\'.l-17\',\'.l-1v\',\'.U\',\'.l-1e\',\'.l-15\',\'.O-1s\',\'.1y-H\',\'.5j-m\'],1t:[\'H\',\'.1d\',\'.1F\',\'.V\',\'.O-H\',\'.K\',\'.U-K\',\'.l-17\',\'.l-1v\',\'.l-1e\',\'.U\',\'.l-15\',\'.O-1s\',\'.1y-H\',\'.1F-v\'],5i:[\'1d\',\'5f\',\'5g\',\'y\',\'m\',\'H\',\'5h\',\'.V\',\'.1F\',\'.1d\',\'2R\',\'.O-H\',\'.K\',\'.U-K\',\'.l-17\',\'.l-1v\',\'.l-1e\',\'.l-15\',\'.O-1s\',\'.U\',\'.y\',\'.m\',\'.1d-54\'],\'53,4Q\':[\'H\',\'4S\',\'y\',\'m\',\'4P\',\'4L\',\'2R\',\'.O-H\',\'.K\',\'.U-K\',\'.l-17\',\'.l-1v\',\'.l-1e\',\'.l-15\',\'.O-1s\',\'.1y-H\',\'.U\',\'.1d\'],a:[\'2V\',\'4T\',\'12\'],4U:[\'11\',\'y\',\'m\',\'Q\',\'51\',\'52\',\'4Z\',\'.y\',\'.m\',\'H\',\'4Y\'],h:[\'11\',\'y\',\'m\',\'1d\',\'4V\',\'1p\',\'H\',\'.y\',\'.m\',\'.1d\'],\'p,4X,48,3l,3j,3f,3g,3h,3m,3t,3u\':[\'H\',\'.O-H\',\'.K\',\'.U-K\',\'.l-17\',\'.l-1v\',\'.U\',\'.l-1e\',\'.l-15\',\'.O-1s\',\'.1y-H\',\'.O-32\',\'.1F-v\'],31:[\'Y\'],2X:[\'Y\',\'.2Y-2Z-23\'],\'39,38,3b,3a,b,3d,47,3U,i,u,46,s,43\':[]},40:3(){6.42()},3P:x.2T})},$.X.3E=3(4){2 x={1H:"",11:"",M:F};4=$.1b({},x,4);2 2Q=6;2Q.27(3(){2 h=$(6);2 28=$(2O).3x();2 2W=$(2O).m();2 2e=h.2P().A;c(!h.1("2s")||4.M){$(h).1("11",4.1H);c(2W+28>=2e&&28<=2e+h.m()){c(4.11!="")h.1("11",4.11);14 h.1("11",h.1("3I-11"));h.1("2s",C)}}})}})(3K);$.3L=3(1l,1N){$.1J.1O(1l,{1Y:\'3N\',1U:\'O\',1T:C,1S:F,1P:C,1p:\'é”™è¯¯\',y:1Q,Q:\'1W\',1Z:3(){1R()},24:1N})};$.3z=3(1l,1N){$.1J.1O(1l,{1Y:\'3y\',1U:\'O\',Z:\'3B\',1T:C,1S:F,1P:C,1p:\'æç¤º\',y:1Q,Q:\'1W\',1Z:3(){1R()},24:1N})};$.36=3(1l,2S,2C){2 2n=3(){$.1J.3v("2i");2S.1x()};$.1J.1O(1l,{1Y:\'2i\',1U:\'O\',1T:C,1S:C,1P:C,1p:\'ç¡®è®¤\',y:1Q,Q:\'1W\',1Z:3(){1R()},24:2C,41:2n})};',62,333,'|attr|var|function|options||this|removeClass|relClass|ImgCbo|||if|checked||find|css|img||rel|obj|font|height|span|||addClass|holder||bind||left|outBar|op|width||top|input|true|btn|val|false|click|align|DLselect|cbo|color|uploader|refresh|null|text|parent|type|_hover|dd|_checked|background|padding|DDselect|fn|class|position|value|src|name|display|else|style|dl|size|html|trigger|ipt|extend|hide|border|weight|normal|sector|hover|block|return|SPANselect|str|files|url|id|title|current_sec|DTselect|decoration|div|_active|family|max|call|vertical|sec_width|event|cssWidth|radio|oo|UploadComplete|margin|selectNode|placeholder|Error|weeboxs|FilesAdded|FileUploaded|dt|func|open|showOk|250|init_ui_button|showCancel|showButton|contentType|inline|wee|ajaxobj|boxid|onopen|100|append|checkbox|after|onclose|current|focus|each|scrolltop|disabled|prev|dropdown|none|pageX|imgoffset|fast|multi|slideDown|fanwe_confirm_box|select|parseInt|ui|next|okfunc|errObject|selected|responseObject|option|isload|olb|dom|wrap|show|total_width|mouseover|px|mouseout|move_left|funcclose|trim|uichange|ui_radiobox|ochecked|absolute|right|blur|index|bottom|submit|start|window|offset|imgs|bgcolor|funcok|fun|allowFileManager|href|windheight|hr|page|break|document|pre|indent|in|createElement|before|showConfirm|outer|tbody|br|strong|tr|8596B0|sub|checkoff|h1|h2|h3|mousemove|blockquote|create|li|h4|parseFloat|ui_textbox|checkon|ui_checkbox|ui_starbar|isNaN|h5|h6|close|catch|scrollTop|fanwe_success_box|showSuccess|drop|center|stopTime|oneTime|ui_lazy|void|javascript|remove|data|ui_select|jQuery|showErr|ii|fanwe_error_box|fadeOut|afterCreate|toLowerCase|tagName|get|form|em|mouseup|mousedown|Math|while|try|afterBlur|onok|sync|del|change|ui_button|strike|sup|ul|UPLOAD_XAP|silverlight_xap_url|UPLOAD_SWF|multi_selection|basePath|filters|K_BASE_PATH|bold|flash_swf_url|italic|new|UPLOAD_URL|ui_upload|plupload|ceil|browse_button|Uploader|themesPath|max_file_size|response|fontsize|parseJSON|fontname|items|filterMode|error|K_THEMES_PATH|file|forecolor|Image|mime_types|MAX_IMAGE_SIZE|extensions|ALLOW_IMAGE_EXT|hilitecolor|init|underline|removeformat|rowspan|keditor|onchange|uploadJson|colspan|th|300|valign|target|embed|alt|KindEditor|ol|allowscriptaccess|quality||loop|autostart|td|collapse|insertunorderedlist|400|emoticons|insertorderedlist|justifyright|justifyleft|justifycenter|ui_editor|image|link|cellspacing|cellpadding|bordercolor|table|line|htmlTags|face|stop'.split('|'),0,{}))
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('8p(7($){$.8q({8r:7(8o,3g){j(3g.z.8n("?")==-1){3g.z+="?4n="+4r}F{3g.z+="&4n="+4r}}})});8 5S=1s;$(21).8k(7(){$("#6r").1t("2X",$(21).2I()+4a);$("2w").8l("W",7(){$(M).G("1N",6B)});$.2E($("2w"),7(i,n){j($(n).G("1N")==\'\')$(n).G("1N",6B)});$(".8m").2g(7(){8 w=$(M).6D();8 3h=$(M).C(".2C").6D();8 3f=0;j(w>3h){3f=(w-3h)/2}F{3f=-(3h-w)/2}$(M).C(".2C").1t({"2L":3f});$(M).C(".2C").1j("1q")},7(){$(M).C(".2C").1w("1q")});j($("#2o .3e").14>0){$("#2o  .8t").2g(7(){$("#2o  .3e").2j()});$("#2o  .3e a.4C").26("1a",7(){$("#2o  .3e").2V();$("#2o  .8A").1j("8B")})}$(".8y 8x.4Z").2g(7(){$(M).1w("3p")},7(){$(M).1j("3p")});$(".8u").26("1a",7(){8 1R=$(M).G("1K");j(1P(1R)==0){H}$.1u.1p(O+"/R.N?P=m&Q=8v&1R="+1R,{1y:\'m\',1z:J,1l:"ä¸¾æŠ¥ç”¨æˆ·",1d:8w,1r:8j,D:\'1x\'})});$("#6f 6g").1a(7(){$("#6f 6g").1j("6o");$(M).1w("6o");$("#6x .8i").1w("1q");$("#6x .85"+$(M).G("1W")).1j("1q")});$(1O).6m(7(){$("#6r").1t("2X",$(21).2I()+4a)});6n();$(\'#3d-6s-42,#3u-3d-5W-6s\').1a(7(){86($(M))});$("#87").26("1a",7(){$(M).1q();$("#84").2j();$("#83").1q()});$(".7Z").C("a").26("1a",7(){8 v=O+"/R.N?P=6H&Q=80&z="+$(M).G("1U");$.m({z:v,S:7(u){}})});$(\'#78\').26("1a",7(){8 3n=$(M).I().C("13[E=\'3n\']").q();8 3m=$(M).I().C("13[E=\'3m\']").q();8 v=O+"/R.N?P=m&Q=78&3n="+3n+"&3m="+3m;$.m({z:v,S:7(1B){$.1o(1B)},W:7(y){}})});$("#88").1a(7(){89()});$(".8f").C("a").26("1Q",7(){$(M).8g()});6h();$("#8h").1a(7(){8 3l=1;j($(M).24("1p")){3l=0}$.m({z:O+"/R.N?P=8e&Q=8d&3l="+3l,10:"16",8a:J,S:7(1i){j(1i.12==1){1O.1L.1U=1O.1L.1U}F{$.T(1i.V)}}})});$("a.8b").1a(7(){8 2W=$(M).G("2W");8 1K=$(M).G("1K");8 u=\'<1n B="\'+1K+\'4c" 1C="8c">\';u+=\'<1n 1C="8C">\';u+=\'<1m B="\'+1K+\'6v" 1C="f-1B 1D-1m" 8D="5" 93="60"></1m>\';u+=\'</1n>\';u+=\'<1n 1C="94"></1n>\';u+=\'<p><13 D="5m" 1g="ç•™è¨€" B="95" 5f="6N(\\\'\'+2W+\'\\\',\\\'\'+1K+\'\\\',\\\'\'+1K+\'6v\\\')" 1C="92">\';u+=\'<13 D="5m" 1g="å–æ¶ˆ" 5f="6M(\\\'\'+1K+\'4c\\\')" 1C="91 8Y">\';u+=\'</p></1n>\';j($("#"+1K+"4c").14==0){$(M).I().8Z(u);$(".1D-1m").5D({1Y:17})}});$(".90").26("1a",7(){8 1R=$(M).G("1K");j(1P(1R)==0){H}$.1u.1p(O+"/R.N?P=m&Q=96&1R="+1R,{1y:\'m\',1z:J,1l:"å‘é€ç«™å†…æ¶ˆæ¯",1d:97,1r:4a,D:\'1x\'})});$("#9e .4Z").2g(7(){j(!$(M).24("9f")){$(M).1w("3p")}},7(){$(M).1j("3p")});$("#9c").3d(7(){8 k=$(M);j($.1k(k.C("#E").q())==""){$.T(U.38+U.9b,7(){k.C("#E").1Q()});H J}j(!k.C("#2D").24("5x")){j($.1k(k.C("#2D").q())==""){$.T(U.38+U.98,7(){k.C("#2D").1Q()});H J}8 Z=$.1k(k.C("#2D").q());8 99=Z.14;j(Z.14>18||Z.14<15){$.T(U.9a,7(){k.C("#2D").1Q()});H J}j($.1k(k.C("#2D").q())!=$.1k(k.C("#58").q())){$.T(U.7Y,7(){k.C("#58").1Q()});H J}}j(!$("#2O").24("5x")){j($.1k($("#2O").q())==""){$.T(U.8W,7(){$("#2O").1Q()});H J}j(!$.2v($("#2O").q())){$.T(U.2M,7(){$("#2O").1Q()});H J}j($.1k(k.C("#5X").q())==""){$.T(U.38+U.8J,7(){k.C("#5X").1Q()});H J}}8 L=k.2H();$.m({z:O+"/R.N?P=5W&Q=8K",1f:L,10:"16",S:7(1i){j(1i.12==1){2Q(1i.V);1L.2c()}F{$.T(1i.V)}}});H J});$("#8L").1a(7(){$.m({z:O+\'/R.N?P=m&Q=8I\',10:"16",S:7(1i){j(1i.12==0){$.T(1i.V);H J}F{$.1u.1p(O+"/R.N?P=8H&Q=8E",{1y:\'m\',1z:J,1l:\'å®Œæˆç»‘å®š\',1d:8F,1r:8G,D:\'1x\'});5S.1L.1U=1i.8M}}})});$("#4k-2S").1a(7(){j($(M).u()=="ç¼–è¾‘èµ„æ–™"){$(M).u("å–æ¶ˆç¼–è¾‘");$(".2S-5G-3q").1w("1q");$(".2S-4k-3q").1j("1q")}F{$(M).u("ç¼–è¾‘èµ„æ–™");$(".2S-5G-3q").1j("1q");$(".2S-4k-3q").1w("1q")}});$("#8T a").1a(7(){8 k=$(M);8 z=k.G("1U");$.1u.1p("<1n 1C=\'5J\'><2w 1N=\'"+z+"\'  /></1n>",{1y:\'1B\',1z:17,2B:J,2A:17,1l:\'æ‰«æä¸‹è½½æ‰‹æœºå®¢æˆ·ç«¯\',1d:5L,D:\'1x\'});H J});$("#8U").1a(7(){8 k=$(M);8 z=k.G("1U");$.1u.1p("<1n 1C=\'5J\'><2w 1N=\'"+z+"\'  /></1n>",{1y:\'1B\',1z:17,2B:J,2A:17,1l:\'æ‰«æè®¿é—®å¾®ä¿¡ç«¯\',1d:5L,D:\'1x\'});H J});5V();4h();5Z();4i();4X();6c();$("#4Q").4Q()});7 6c(){j($("#2Z .2C a.4b").14>0){$("#2Z .2C a.4b").I().I().1w(\'4b\')}}7 4i(){$(".1D-8V[1h!=\'1h\'],.1D-1m[1h!=\'1h\']").2E(7(i,o){$(o).G("1h","1h");$(o).5D()})}7 4h(){$("5y.1D-8S[1h!=\'1h\']").2E(7(i,2z){$(2z).G("1h","1h");$(2z).8R()})}7 5Z(){$("5y.1D-8O[1h!=\'1h\']").2E(7(i,2z){$(2z).G("1h","1h");$(2z).8Q()})}8 2k=1s;8 31=0;7 4X(){$("Y.1D-Y[1h!=\'1h\']").2E(7(i,o){31++;8 B="5q"+3x.5w(3x.5b()*55)+""+31;8 3v={B:B};$(o).G("1h","1h");$(o).1S(3v)});$("Y.1D-4e[1h!=\'1h\']").2E(7(i,o){31++;8 B="5q"+3x.5w(3x.5b()*55)+""+31;8 3v={B:B,7o:"2g"};$(o).G("1h","1h");$(o).1S(3v)});$(21.3Z).1a(7(e){j($(e.32).G("1C")!=\'1D-Y-5O\'&&$(e.32).I().G("1C")!=\'1D-Y-5O\'){$(".1D-Y-4e").43("41");$(".1D-Y").1j("6b");2k=1s}F{j(2k!=1s&&2k.G("B")!=$(e.32).I().G("B")){$(2k).C(".1D-Y-4e").43("41");$(2k).1j("6b")}2k=$(e.32).I()}})}7 5V(){j($("1m.4p").14>0){8 K=6J}j($("1m.4p").14>0){8 6G=K.7J(\'1m.4p\',{6F:J,7G:77,7H:O+"/7B/59/",7D:7(){M.7V()},1r:3F,7R:[\'7N\',\'7k\',\'7e\',\'7l\',\'7j\',\'7m\',\'7h\',\'7w\',\'7x\',\'7p\',\'7s\',\'7t\',\'7u\',\'7P\',\'7W\',\'7T\',\'7L\',\'7C\',\'7z\',\'7A\',\'7F\',\'7I\',\'/\',\'1l\',\'7E\',\'7S\',\'7M\',\'7O\',\'7y\',\'7Q\',\'7X\',\'7q\',\'7f\',\'42\',\'7g\',\'7v\',\'7r\',\'7i\',\'59\',\'6H\',\'9K\']})}6I()}7 6I(){j($(".3s").14>0){j(K==4s)8 K=6J}j($(".3s").14>0){8 3P=K.6G({6F:J,aP:aQ});K(\'.3s\').6w("1a");K(\'.3s\').1a(7(){8 1H=K(M);8 1v=$(1H).I().I().I().I();3P.aO(\'42\',7(){3P.aN.aK({aL:1v.C("#47"+1H.G("1W")).q(),aM:7(z,1l,1d,1r,aR,aS){1v.C("#6V"+1H.G("1W")).G("1U",z),1v.C("#7a"+1H.G("1W")).G("1N",z),1v.C("#47"+1H.G("1W")).q(z),1v.C(".3X[1W=\'"+1H.G("1W")+"\']").2j(),3P.aX()}})})});K(\'.3X\').6w("1a");K(\'.3X\').1a(7(){8 1H=K(M);K(M).1q();8 1v=$(1H).I().I().I().I();1v.C("#6V"+1H.G("1W")).G("1U","");1v.C("#7a"+1H.G("1W")).G("1N",aY+"/aW/aV/aT/aU/aJ/aI.ax");1v.C("#47"+1H.G("1W")).q("")})}}$.T=7(Z,1c){$.1u.1p(Z,{33:\'aw\',1y:\'1B\',1z:17,2B:J,2A:17,1l:\'é”™è¯¯\',1d:3F,D:\'1x\',37:1c})};$.1o=7(Z,1c){$.1u.1p(Z,{33:\'av\',1y:\'1B\',1z:17,2B:J,2A:17,1l:\'æç¤º\',1d:3F,D:\'1x\',37:1c})};$.as=7(Z,45,7c){$.1u.1p(Z,{33:\'6Z\',1y:\'1B\',1z:17,2B:17,2A:17,1l:\'ç¡®è®¤\',1d:3F,D:\'1x\',au:7(){$.1u.4C("6Z");j(45!=1s){45.2i(M)}},37:7c})};$.az=7(1g,14,3D){8 2p=$.1k(1g).14;j(3D)2p=$.40(1g);H 2p>=14};$.aA=7(1g,14,3D){8 2p=$.1k(1g).14;j(3D)2p=$.40(1g);H 2p<=14};$.40=7(Z,5t){Z=$.1k(Z);j(5t=="1B"){Z=Z.2n(/<(?:2w|aH).*?>/aF,\'K\').2n(/\\r\\n|\\n|\\r/g,\'\').2n(/<\\/?[^>]*>/g,\'\')}j(Z=="")H 0;8 14=0;2l(8 i=0;i<Z.14;i++){j(Z.3t(i)>aB)14+=3;F 14++}H 14};$.aC=7(1g){j($.1k(1g)!=\'\')H!6t($.1k(1g));F H 17};$.2v=7(1g){j($.1k(1g)!=\'\')H/^\\d{11}$/i.4S($.1k(1g));F H 17};$.9h=7(q){8 3M=/^\\w+((-\\w+)|(\\.\\w+))*\\@[A-46-48-9]+((\\.|-)[A-46-48-9]+)*\\.[A-46-48-9]+$/;H 3M.4S(q)};7 3U(){8 G="bi";8 13=21.bp("13");H G 4N 13}7 bq(k,28){j(!3U()){k=$(k).I()}j(28!=\'\'){$(k).I().C(".3S").1t({"3V":"#5R","3Y":"3w","3W-1r":"5M%"});$(k).I().C(".f-13-3u").u("<2K 1C=\'bo\'>"+28+"</2K>")}F{$(k).I().C(".3S").1t({"3V":"#bn","3Y":"bk","3W-1r":"bl"});$(k).I().C(".f-13-3u").u("")}}7 bm(k,28){j(!3U()){k=$(k).I()}k.I().C(".3S").1t({"3V":"#5R","3Y":"3w","3W-1r":"5M%"});k.I().C(".f-13-3u").u("<2K 1C=\'bw\'>"+28+"</2K>")}7 bt(o,k,i,z){j($(o).24("1A")){H J}j(i==1s){i=\'0\'}j($.1k($(k).q())==""){$.T(U.4K);H J}j(!$.2v($(k).q())){$.T(U.2M);H J}j(!$(o).24(\'1A\')){$(o).1w(\'1A\');3B(o,k,z,7(){2r(o,60,i)})}}8 4y=2f bu();7 2r(o,2R,i){j(i==1s){i="0"}3i(4y[i]);j(2R>0){2R--;$(o).1w("1A");$(o).q(U.5l+U.5v+" "+2R);4y[i]=4B(7(){2r(o,2R,i)},6L)}F{$(o).1j("1A");$(o).q(U.5l+U.5v)}}7 3B(o,k,z,1c){8 25=$(k).q();8 v="";j(z==1s)v=O+"/R.N?P=m&Q=3B";F v=z;8 L=2f 2P();L.25=25;$.m({z:v,1f:L,D:"4P",10:"16",S:7(k){j(k.12){j(1c!=1s){1c.2i(M)}4Y=17;$.1o(k.V)}F{$(o).1j("1A");$.T(k.V)}},W:7(y){}})}7 b7(o,k){j(!$(o).24(\'1A\')){$(o).1w(\'1A\');3B(o,k,O+"/R.N?P=m&Q=b5",7(){2r(o,60)})}}7 51(k,1c){8 v=O+"/R.N?P=m&Q=51";$.m({z:v,10:"16",S:7(y){j(y.12){j(1c!=1s){1c.2i(M)}4Y=17;$.1o(y.V)}F{$("#4I").1j("1A");$.T(y.V)}},W:7(y){}})}7 b4(4q,4o){$.m({z:O+"/b1.N?4q="+4q+"&4o="+4o,1f:"m=1",10:"16",S:7(k){j(k.12==2){1O.1p(k.28)}j(k.12==1){$.1u.1p(k.28,{1y:\'u\',1z:J,1l:U[\'b3\'],1d:b9,1r:ba,D:\'1x\'})}j(k.12==0){$.T(k.28)}}})}7 5U(D,49){8 v=O+"/R.N?P=m&Q=5U&D="+D+"&49="+49;$.m({z:v,S:7(1B){1L.2c()},W:7(y){}})}7 64(D){8 v=O+"/R.N?P=m&Q=64&D="+D;$.m({z:v,S:7(1B){1L.2c()},W:7(y){}})}7 bf(B){8 v=O+"/R.N?P=m&Q=3N";$.m({z:v,10:"16",D:"1e",S:7(y){j(y.12==0){29()}F{be(B)}},W:7(y){}})}7 bd(o,5K,1c){8 v=O+"/R.N?P=m&Q=ar&B="+5K;$.m({z:v,10:"16",S:7(k){j(k.aq==1){$.1u.1p(k.u,{1y:\'1B\',1z:J,1l:U[\'4t\'],1d:62,D:\'1x\'})}F{j(1c!=1s)1c.2i(M,o);F $.1o(k.V)}},W:7(y){}})}7 9F(3b,o){8 v=O+"/R.N?P=m&Q=1Q&3b="+3b;$.m({z:v,10:"16",S:7(k){j(k.1F==1){$(o).1j("4w");$(o).1j("4x");$(o).1w("4x");$(o).u(k.u)}j(k.1F==2){$(o).1j("4w");$(o).1j("4x");$(o).1w("4w");$(o).u(k.u)}j(k.1F==3){$.1o(k.u)}j(k.1F==4){29()}},W:7(y){}})}7 5P(1G,1F,o){8 v=O+"/R.N?P=m&Q=5P&1F="+1F+"&1G="+1G;$.m({z:v,10:"16",S:7(k){j(k.12)$(o).C("2K").u(k.1f);F $.T(k.1f)},W:7(y){}})}7 9E(k){j($(k).C("*[E=\'2m\']").q()==\'\'){$.T(U.6e);$(k).C("*[E=\'2m\']").1Q();H J}F{H 17}}7 5F(B){8 L=2f 2P();L.B=B;L.5I=$("13[E=\'5I\']").q();L.5H=$("Y[E=\'5H\']").q();L.5B=$("Y[E=\'5B\']").q();L.5A=$("13[E=\'5A\']").q();L.5z=$("13[E=\'5z\']:4f").q();L.3z=$("13[E=\'3z\']").q();j(!$.2v(L.3z)||L.3z==\'\'){$.T(U[\'2M\']);H}8 v=O+"/9A.N?P=9B&Q=5F";$.m({z:v,10:"16",1f:L,D:"1e",S:7(k){j(k.12==1){4F();$.1o(k.V)}F{$(".4G-1l").u(U[\'4t\']);$(".4G-2m").u(k.u)}},W:7(y){}})}7 5E(B){8 v=O+"/R.N?P=m&Q=3N";$.m({z:v,10:"16",D:"1e",S:7(y){j(y.12==0){29()}F{8 v=O+"/R.N?P=m&Q=5E&B="+B;$.1u.1p(v,{1y:\'m\',1z:J,1l:U[\'9C\'],1d:9H,D:\'1x\'})}},W:7(y){}})}7 66(B){8 v=O+"/R.N?P=m&Q=66&B="+B;8 L=2f 2P();L.2m=$("1m[E=\'9I\']").q();$.m({z:v,10:"16",1f:L,D:"1e",S:7(k){j(k.12){$("#65"+B).u(1P($("#65"+B).u())+1);4F();$.1o(k.V);8 23=$("13[E=\'23\']");j(23){35($(23).q(),$("#4g"))}}F{$.T(k.V)}},W:7(y){}})}7 9O(B){8 v=O+"/R.N?P=m&Q=9P&B="+B;$.m({z:v,10:"16",D:"1e",S:7(k){j(k.12){$("#68"+B).u(1P($("#68"+B).u())+1);$.1o(k.V);8 23=$("13[E=\'23\']");j(23){35($(23).q(),$("#4g"))}}F{8 v=O+"/R.N?P=m&Q=3N";$.m({z:v,10:"16",D:"1e",S:7(y){j(y.12==0){29()}F{$.1o(k.V)}},W:7(y){}})}},W:7(y){}})}7 9N(k){8 o=k;8 1F=$(o).G(\'1F\');8 63=$(o).G(\'b\');8 61=$(o).G(\'s\');8 5T=$(o).G(\'o\');8 w=$(o).G(\'w\');8 h=$(o).G(\'h\');j(1F==\'s\'){8 3y=0;j(w>69){3y=69}$(o).G(\'1N\',63);$(o).G(\'1F\',\'b\');j(3y>0)$(o).G(\'1d\',3y);F $(o).5Y(\'1d\');8 u=\'<1n><a 1U=\\"\'+5T+\'\\" 32=\\"9z\\">æŸ¥çœ‹åŽŸå›¾</a></1n>\'+$(o).I().u();$(o).I().u(u)}F{$(o).G(\'1N\',61);$(o).G(\'1F\',\'s\');$(o).5Y(\'1d\');$(o).I().C(\'1n\').2V()}}7 35(v,1v){$.m({z:v,1f:"m=1",D:"1e",S:7(u){$(1v).u(u)},W:7(y){}})}7 9o(B,k){j($(k).I().I().C(".3H").u()==\'\'){$(".3H").u("");8 v=O+"/R.N?P=m&Q=5e&B="+B;$.m({z:v,1f:"m=1",D:"1e",S:7(u){$(k).I().I().C(".3H").u(u)},W:7(y){}})}F $(k).I().I().C(".3H").u("")}7 9m(k){8 1b=$(k).I().I().I();8 54=$(k).I().C("2w");8 v=$(1b).G("3c");8 5a=$(1b).C("#9i");8 1m=$(1b).C("1m");j($.1k(1m.q())==\'\'){$.T("è¯·è¾“å…¥åˆ†äº«å†…å®¹");H}8 52=$(1b).C("13[E=\'9j\']");8 4W=$(1b).C("13[E=\'9k\']");8 z=$(1b).C("13[E=\'23\']").q();8 L=$(1b).2H()+"&m=1";$.m({z:v,10:"16",1f:L,D:"1e",S:7(k){j(k.12==0){$.T(k.V);H}$.1o(k.V);$(5a).u("");$(54).1a();$(1b).C("13[E=\'6j\']").q("");$(1m).q("");$(1m).G("9p",0);$(52).q("");$(4W).q("");$("13[E=\'4V\']").G("4f",J);$(".4V").1q();$(".9q").1j("9w");$("13[E=\'1F[]\']").q("");j($("13[E=\'9x\']").G("4f")){8 3R=$(".3R");2l(i=0;i<3R.14;i++){53(k.1f,$(3R[i]).q())}}j(z)35(z,$("#4g"))},W:7(y){}})}7 53(1G,2h){8 v=O+"/R.N?P=m&Q=9r&1G="+1G+"&2h="+2h;$.m({z:v,D:"1e",S:7(1f){},W:7(y){}})}7 9s(k){8 1b=$(k).I().I().I();8 v=$(1b).G("3c");8 1m=$(1b).C("1m");8 1G=$(1b).C("13[E=\'1G\']").q();8 z=O+"/R.N?P=m&Q=5e&B="+1G;8 L=$(1b).2H()+"&m=1&5o=1";$.m({z:v,10:"16",1f:L,D:"1e",S:7(y){j(y.12){$("#5r"+1G).u(1P($("#5r"+1G).u())+1);$.1o(y.V);35(z,$(k).I().I().I().I())}F $.T(y.V)},W:7(y){}})}7 5h(v,5p){j(5p){8 5s=O+"/R.N?P=m&Q=3N";$.m({z:5s,10:"16",D:"1e",S:7(y){j(y.12==0){29(7(){$("#3J").u("æ­£åœ¨åŠ è½½è¯„è®º");$.m({z:v,D:"1e",S:7(u){$("#3J").u(u)},W:7(y){}})})}},W:7(y){}})}F{$("#3J").u("æ­£åœ¨åŠ è½½è¯„è®º");$.m({z:v,D:"1e",S:7(u){$("#3J").u(u)},W:7(y){}})}}7 9R(k){8 1b=$(k).I().I().I();8 v=$(1b).G("3c");8 1m=$(1b).C("1m");8 1G=$(1b).C("13[E=\'1G\']").q();8 4z=$("#4z").q();8 L=$(1b).2H()+"&m=1&5o=1";$.m({z:v,10:"16",1f:L,D:"1e",S:7(y){j(y.12){$("#5n").u(1P($("#5n").u())+1);$.1o(y.V);5h(4z)}F $.T(y.V)},W:7(y){}})}7 5i(B,1v){j(5j(U.ab)){8 v=O+"/R.N?P=m&Q=5i&B="+B;$.m({z:v,10:"16",D:"1e",S:7(y){j(y.12){$(1v).2V()}F $.T(y.V)},W:7(y){}})}}7 6d(B,1v){j(5j(U.ac)){8 v=O+"/R.N?P=m&Q=6d&B="+B;$.m({z:v,10:"16",D:"1e",S:7(y){j(y.12){$(1v).2V()}F $.T(y.V)},W:7(y){}})}}7 29(1c){$.1u.1p(O+"/R.N?P=m&Q=29",{33:\'6Q\',1y:\'m\',1z:J,1l:U[\'4t\'],1d:62,D:\'1x\',6T:7(){4h();4i()},37:1c})}7 ap(7d){8 v=O+"/R.N?P=m&Q=am&B="+7d;$.1u.1p(v,{1y:\'m\',1z:J,1l:U[\'aj\'],1d:ak,D:\'1x\'})}7 76(){8 4j=$(".al");2l(8 i=0;i<4j.14;i++){8 39=$(4j[i]);j($(39).C("13").q()==\'\'){$.T(U[\'38\']+$(39).C("2K").u());$(39).C("13").1Q();H}}8 L=$("1b[E=\'9W\']").2H();8 v=O+"/R.N?P=m&Q=76";$.m({z:v,10:"16",D:"1e",1f:L,S:7(y){j(y.12==1){$.1o(y.V)}F j(y.12==2){2Q(y.V);1L.2c()}F{29()}},W:7(y){}})}8 3o;75=(7(){8 1T;8 4d="75";8 2J,2Y;8 4u=7(){3o=4B(7(){1T.1q()},77)};8 4m=7(){3i(3o)};8 71=7(){1T=$("<1n B=\'"+4d+2Y+"\' 1C=\'6Y\'><1n 1C=\'4v\'>æ­£åœ¨åŠ è½½ï¼Œè¯·ç¨åŽ...</1n></1n>");$("3Z").9T(1T)};8 79=7(){8 2y=2J.2y();8 3k=0;j(2y.2L+6X+2J.1d()>$(21).1d()){3k=2y.2L-6X}F{3k=2y.2L+2J.1d()}1T.1t({2X:2y.2X,2L:3k})};8 4l=7(){79();1T.2j()};8 6q=7(){$(".6Y").1q();1T=$("#"+4d+2Y);j(!1T.14){71();4l();1T.4v(O+"/R.N?P=m&Q=a6&3b="+2Y)}F{4l()};1T.2g(4m,4u);2J.2g(4m,4u)};H{4v:7(e,B){3i(3o);j(e===4s||B===4s||6t(B)||B<1){H J};2J=$(e);2Y=B;6q()}}})();7 6u(6W){8 v=O+"/R.N?P=m&Q=6u&9V="+6W;$.m({z:v,D:"1e",10:"16",S:7(1f){2Q(1f.V);1L.2c()},W:7(y){}})}7 6y(2h,D){8 v=O+"/R.N?P=m&Q=6y&2h="+2h+"&D="+D+"&4n="+4r;$.m({z:v,D:"1e",S:7(1f){$("#a8"+2h+"a9"+D).u(1f)},W:7(y){}})}7 6h(){$("#2U-2T-1b").26("3d",7(){8 v=$(M).G("3c");8 L=$(M).2H();$.m({z:v,10:"16",1f:L,D:"1e",S:7(y){j(y.12==1){$("#2U-2T-1b").C("*[E=\'1l\']").q("");$("#2U-2T-1b").C("*[E=\'2m\']").q("");$("#2U-2T-1b").C("*[E=\'6j\']").q("");2Q(y.V);1L.2c()}F{$.T(y.V)}},W:7(y){}});H J})}7 6n(){$(1O).6m(7(){8 6z=$(21).2I()+$(1O).1r()-70;j($.6k.ai&&$.6k.ah=="6.0"){$("#1J").1t("2X",6z);j($(21).2I()>0){$("#1J").1t("6A","9u")}F{$("#1J").1t("6A","3w")}}F{j($(21).2I()>0){$("#1J").1t("44","6C");$("#1J").1t("6S","1");j($("#1J").1t("6P")=="6O")$("#1J").9n()}F{j($("#1J").1t("6P")!="6O")$("#1J").43()}}});$("#1J").26("1a",7(){$("u,3Z").6U({2I:0},"41","9M",7(){});6R()})}7 6R(){$("#1J").6U({44:"9D",6S:"0"},6L,"bc",7(){$("#1J").1t("44","6C")})}7 bh(){8 v=O+"/R.N?P=m&Q=bx";$.m({z:v,10:"1B",D:"1e",S:7(3T){j(3T!="")1L.1U=3T},W:7(y){}})}7 aE(2N,1V){1V=1V>0&&1V<=20?1V:2;2N=at((2N+"").2n(/[^\\d\\.-]/g,"")).6p(1V)+"";8 l=2N.3C(".")[0].3C("").4U(),r=2N.3C(".")[1];t="";2l(i=0;i<l.14;i++){t+=l[i]+((i+1)%3==0&&(i+1)!=l.14?",":"")}8 1Z=t.3C("").4U().ay("")+"."+r;H 1Z.2n("-,","-")}7 aD(D){b0(D){6E"bb":$("#34").q(1P($("#34").q())+50);3r;6E"9J":j(1P($("#34").q())-50>=50)$("#34").q(1P($("#34").q())-50);3r}}7 6M(k){$("#"+k).2V()}7 6N(2W,1K,k){8 L=2f 2P();L.P="m";L.Q="9y";L.2m=$("#"+k).q();L.9v=2W;L.ae=1K;L.6i=$("#2U-2T-1b 13[E=\'6i\']").q();j($.1k(L.2m)==""){$.T(U[\'6e\']);H J}$.m({z:O+"/R.N",1f:L,D:"4P",10:"16",S:7(1i){j(1i.12==1){2Q(1i.V);1L.2c()}F{$.T(1i.V)}}})}7 ao(2e){2e=an(2e.6p(2));8 1Z=/(\\d+)(\\d{3})/;57(1Z.4S(2e)){2e=2e.2n(1Z,"$1,$2")}H 2e}8 4A=1s;7 73(){3i(4A);j($("#3j").27()+$("#4D").27()+$("#2Z").27()+20<$(1O).1r()){$("#3j").1t({"9X":(($(1O).1r()-$("#4D").27()-$("#2Z").27()-20)-$("#3j").27())/2,"a3":(($(1O).1r()-$("#4D").27()-$("#2Z").27()-20)-$("#3j").27())/2})}4A=4B(73,a2)}7 a1(D,1R,1c){8 L=2f 2P();L.P="a4";L.Q="a5";L.a7=D;L.1R=1R;L.a0=1;$.m({z:O+"/R.N",1f:L,D:"4P",10:"16",S:7(1i){j(1c!=1s)1c.2i(M,1i)}})}7 9Z(1N,72,4M,30){j(30>=$(1O).1r()){30=$(1O).1r()-9U}$.1u.1p(\'<74 9S=\\\'0\\\' 1d=\\\'\'+(4M-36)+\'\\\' 1r=\\\'\'+30+\'\\\' 1N=\\\'\'+1N+\'\\\'></74>\',{1y:\'1B\',1z:J,1l:72,1d:4M,1r:30,D:\'1x\'})}8 3O=1s;7 9Y(o){8 Z=$(o).q();j(Z==""){H J}8 2t=$("Y[E=\'2t\']");8 2s=$("Y[E=\'2s\']");8 2G=$("Y[E=\'2G\']");j(Z.14==15){8 1Z=/(\\d{6})(\\d{2})(\\d{2})(\\d{2})(\\d{3})/;8 B=1Z.5k(Z);2t.q(19+B[2]);2s.q(B[3]);2G.q(B[4])}F j(Z.14==18){8 1Z=/(\\d{6})(\\d{4})(\\d{2})(\\d{2})(\\d{3})([0-9]|X|x)/;8 B=1Z.5k(Z);2t.q(B[2]);2s.q(B[3]);2G.q(B[4])}F{2t.q("");2s.q("");2G.q("");H J}$("Y[E=\'2t\']").1S({1Y:17});$("Y[E=\'2s\']").1S({1Y:17});$("Y[E=\'2G\']").1S({1Y:17});8 3I=J;j(3O)3O.ad();3O=$.m({z:"R.N?P=m&Q=ag&af="+Z,10:"16",S:7(1i){j(1i[\'12\']==1){j(1i[\'2d\']=="ç”·")$("Y[E=\'2d\']").q(1);F j(1i[\'2d\']=="å¥³")$("Y[E=\'2d\']").q(0);F{$("Y[E=\'2d\']").q(-1);3I=17}}F{$("Y[E=\'2d\']").q(-1);3I=17}$("Y[E=\'2d\']").1S({1Y:17})}});j(3I){H J}F H 17}7 9Q(o,k){j($.1k($(k).q())==""){$.T(U.4K);H J}j(!$.2v($(k).q())){$.T(U.2M);H J}j(!$(o).24(\'1A\')){$(o).1w(\'1A\');4O(k,7(){2r(o,60)})}}7 9t(o,k){j($.1k($(k).q())==""){$.T(U.4K);H J}j(!$.2v($(k).q())){$.T(U.2M);H J}j(!$(o).24(\'1A\')){$(o).1w(\'1A\');4J(k,7(){2r(o,60)})}}7 4O(k,1c){8 25=$(k).q();8 v=O+"/R.N?P=m&Q=4O&25="+25;$.m({z:v,10:"16",S:7(k){j(k.12){j(1c!=1s){1c.2i(M)}$.1o(k.V)}F{$("#4I").1j("1A");$.T(k.V)}},W:7(y){}})}7 4J(k,1c){8 25=$(k).q();8 v=O+"/R.N?P=m&Q=4J&25="+25;$.m({z:v,10:"16",S:7(k){j(k.12){j(1c!=1s){1c.2i(M)}$.1o(k.V)}F{$("#4I").1j("1A");$.T(k.V)}},W:7(y){}})}7 5c(Z){8 2b,2q,3A;8 1X="9l+/";8 i=0,1V=Z.14,1E=\'\';57(i<1V){2b=Z.3t(i++)&9L;j(i==1V){1E+=1X.22(2b>>2);1E+=1X.22((2b&4H)<<4);1E+="==";3r}2q=Z.3t(i++);j(i==1V){1E+=1X.22(2b>>2);1E+=1X.22(((2b&4H)<<4)|((2q&5C)>>4));1E+=1X.22((2q&5Q)<<2);1E+="=";3r}3A=Z.3t(i++);1E+=1X.22(2b>>2);1E+=1X.22(((2b&4H)<<4)|((2q&5C)>>4));1E+=1X.22(((2q&5Q)<<2)|((3A&9G)>>6));1E+=1X.22(3A&bg)}H 1E}7 b2(5N){H 5c(b8(b6+"%bj%bv"+5N+"%bs%br"))}7 4F(){$(".4G-4C").1a()}7 aZ(5u,5g){8 B=5u.q();8 1I="3E.r"+B+".c";j(B==0){8 u="<1M 1g=\'0\'>="+U[\'3Q\']+"=</1M>"}F{8 3L=2F(1I);1I+=".";8 u="<1M 1g=\'0\'>="+U[\'3Q\']+"=</1M>";2l(8 2x 4N 3L){u+="<1M 1g=\'"+2F(1I+2x+".i")+"\'>"+2F(1I+2x+".n")+"</1M>"}}5g.u(u);$("Y[E=\'aG\']").1S({1Y:17})}7 6K(2a){8 E="7b"+2a;8 6l="7b"+(1P(2a)+1);8 B=$("Y[E=\'"+E+"\']").q();j(2a==1)8 1I="3E.r"+B+".c";j(2a==2)8 1I="3E.r"+$("Y[E=\'4E\']").q()+".c.r"+B+".c";j(2a==3)8 1I="3E.r"+$("Y[E=\'4E\']").q()+".c.r"+$("Y[E=\'6a\']").q()+".c.r"+B+".c";j(B==0){8 u="<1M 1g=\'0\'>="+U[\'3Q\']+"=</1M>"}F{8 3L=2F(1I);1I+=".";8 u="<1M 1g=\'0\'>="+U[\'3Q\']+"=</1M>";2l(8 2x 4N 3L){u+="<1M 1g=\'"+2F(1I+2x+".i")+"\'>"+2F(1I+2x+".n")+"</1M>"}}$("Y[E=\'"+6l+"\']").u(u);j(2a!=4){6K(1P(2a)+1)}$("Y[E=\'4E\']").1S({1Y:17});$("Y[E=\'6a\']").1S({1Y:17});$("Y[E=\'7K\']").1S({1Y:17});$("Y[E=\'7U\']").1S({1Y:17})}7 4T(){j(4L==1){$.m({z:O+"/R.N?P=m&Q=4T",D:"1e",S:7(12){j(12==1){4L=0;$.1o("ç™»å½•æˆåŠŸ!");1L.2c()}}})}}7 7n(67,56){$(67).1a(7(){$2u=$(56);$3K=$("#5d").C("#3K");$3G=$("#5d").C("#3G");j($2u.9g(":3w")){$("13[E=\'2u\']").q(1);$2u.2j();$3K.1q();$3G.2j()}F{$("13[E=\'2u\']").q(0);$2u.1q();$3G.1q();$3K.2j()}})}7 8P(4R){8 3a=[[\'^0(\\\\d+)$\',\'$1\'],[\'[^\\\\d\\\\.]+$\',\'\'],[\'\\\\.(\\\\d?)\\\\.+\',\'.$1\'],[\'^(\\\\d+\\\\.\\\\d{2}).+\',\'$1\']];2l(i=0;i<3a.14;i++){8 3M=2f 8N(3a[i][0]);4R.1g=4R.1g.2n(3M,3a[i][1])}}$.8X.4Q=7(){$(M).9d(\'1a\',7(){4L=1;$.1u.1p(O+"/R.N?P=82&Q=81",{33:\'6Q\',1y:\'m\',1z:J,2B:J,2A:J,1l:\'å¾®ä¿¡ç™»å½•\',1d:8z,D:\'1x\',6T:7(){8s(4T,aa)}})})}',62,716,'|||||||function|var|||||||||||if|obj||ajax||||val||||html|ajaxurl|||ajaxobj|url||id|find|type|name|else|attr|return|parent|false||query|this|php|APP_ROOT|ctl|act|index|success|showErr|LANG|info|error||select|str|dataType||status|input|length||json|true|||click|form|func|width|POST|data|value|init|result|removeClass|trim|title|textarea|div|showSuccess|open|hide|height|null|css|weeboxs|dom|addClass|wee|contentType|showButton|btn_disable|text|class|ui|string|tag|topic_id|node|evalStr|gotop|dataid|location|option|src|window|parseInt|focus|user_id|ui_select|cardDiv|href|len|rel|base64EncodeChars|refresh|re||document|charAt|ajax_url|hasClass|user_mobile|bind|outerHeight|msg|ajax_login|lv|c1|reload|sex|num|new|hover|class_name|call|show|droped_select|for|content|replace|user_head_tip|strLength|c2|ResetsendPhoneCode|bmonth|byear|more_search|checkMobilePhone|img|key|offset|ImgCbo|showOk|showCancel|sub_main_nav|idno|each|eval|bday|serialize|scrollTop|qObj|span|left|FILL_CORRECT_MOBILE_PHONE|price|J_Vphone|Object|alert|times|account|add|consult|remove|dealid|top|userId|header|sheight|uiselect_idx|target|boxid|ten_value|ajax_load_page||onclose|PLEASE_INPUT|row|regStrs|uid|action|submit|tip_box|lf|self|sw|clearTimeout|J_wrap|of_left|is_effect|ecvpassword|ecvsn|timer|item_cur|box|break|keimg|charCodeAt|tip|op|hidden|Math|img_width|mobile|c3|get_verify_code|split|isByte|regionConf|300|iconfont_up|col_item_reply_box|is_err|topic_page_reply|iconfont_down|regionConfs|reg|check_login_status|idcheck_act|ieditor|SELECT_PLEASE|syn_class|hint|jumpurl|hasPlaceholderSupport|color|line|keimg_d|overflow|body|getStringLength|fast|image|fadeOut|bottom|funok|Za|keimg_h_|z0|module|200|current|_commentBox|userCardStr|drop|checked|col_list|init_ui_checkbox|init_ui_textbox|submit_rows|edit|showUserCard|mover|fhash|express_id|ketext|express_sn|__HASH_KEY__|undefined|PLEASE_LOGIN_FIRST|mout|load|add_focus|remove_focus|resetSpcThread|load_url|resetTimeact|setTimeout|close|ftw|region_lv1|close_pop|dialog|0x3|reveiveActiveCode|get_authorized_verify_code|VERIFY_MOBILE_EMPTY|open_weixin_login|swidth|in|get_unit_verify_code|post|weixin_login|th|test|do_weixin_login|reverse|other_tag|groupdatabox|init_ui_select|to_send_msg|item||get_authorized_paypwd_verify_code|groupbox|syn_topic_to_weibo|verify_img|10000000|more_search_box|while|idno_re|emoticons|img_box|random|des|account_search|load_reply_col_form|onclick|cname|load_topic_replys|delete_topic|confirm|exec|DO_GET|button|reply_count|no_verify|checklogin|uiselect_|topic_reply_|ajaxurl_ck|mode|pname|MOBILE_VERIFY_CODE|round|readonly|label|is_private_room|order_count|date_time_m|0xF0|ui_textbox|relay_topic|send_sms|view|date_time_h|date_time|tc|deal_id|360|100000|pwd|selected|vote_topic|0xF|fff|new_window|o_src|set_sort|bindKindeditor|deal|validateCode2|removeAttr|init_ui_radiobox||s_src|1060|b_src|set_event_sort|topic_relay_|do_relay_topic|more_search_btn|topic_fav_|525|region_lv2|dropdown|init_top_nav|delete_topic_reply|MESSAGE_CONTENT_EMPTY|J_deal_tab_select|li|submit_message|rel_table|verify|browser|next_name|scroll|init_gotop|cur|toFixed|loadCard|vote|mail|isNaN|set_syn|_comment|unbind|J_deal_tab_box|load_api_url|s_top|visibility|ERROR_IMG|10px|outerWidth|case|allowFileManager|editor|link|bindKeUpload|KindEditor|load_select|1000|cancelReply|replyCommentSubmit|none|display|pop_user_login|fly_gotop|opacity|onopen|animate|keimg_a_|syn_field|230|nameCard|fanwe_msg_box||createLoadDiv|stitle|resetWindowBox|iframe|userCard|do_event_submit|500|verify_ecv|resetXY|keimg_m_|region_lv|funcls|event_id|fullscreen|removeformat|flash|cut|hr|redo|fsource|undo|print|account_more_search|event|plainpaste|strikethrough|table|wordpaste|justifyleft|justifycenter|media|copy|paste|bold|outdent|subscript|public|indent|afterBlur|fontname|superscript|minWidth|emoticonsPath|selectall|create|region_lv3|insertunorderedlist|forecolor|source|hilitecolor|justifyright|italic|items|fontsize|insertorderedlist|region_lv4|sync|justifyfull|underline|TWO_ENTER_IDNO_ERROR|flink|go|wx_login|user|lottery_mobile_word|lottery_mobile_input|box_view_|submit_mail|modify_bind|order_done|submit_buy|cache|J_comment_reply|clearfix|autoopen|uc_autobid|main_nav|blur|J_autoBidEnable|box_view|340|ready|one|jcur|indexOf|xhr|jQuery|ajaxSetup|beforeSend|setInterval|msg_count|J_reportGuy|reportguy|620|tr|deal_list_table|270|pm|new_pm|comment_edit|rows|bind_management|460|150|uc_center|check_user_info|VERIFY_CODE|dobidstepone|J_bind_ips|jump|RegExp|radiobox|amount|ui_radiobox|ui_checkbox|checkbox|J_APP_DOWN|weixim|textbox|MOBILE_EMPTY_TIP|fn|ml10|after|J_send_msg|reset_btn|sub_btn|cols|blank5|loanCommentBtn|send_msg|560|IDNO|str_len|FILL_CORRECT_IDNO|URGENTCONTACT|stepVerifyIdCardAndPhone|live|J_biao_list|item_1|is|checkEmail|image_box|group|group_data|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|ajax_submit_form|fadeIn|reply_topic|position|tag_item|syn_to_weibo|ajax_submit_reply_form|sendAuthorizedPhoneCode|visible|rel_id|tag_item_c|syn_weibo|msg_reply|_blank|store|fdetail|RELAY_TOPIC|600px|check_content|focus_user|0xC0|570|relay_content|jian|unlink|0xff|swing|zoom|fav_topic|do_fav_topic|sendUnitPhoneCode|ajax_submit_reply_form_topic_page|frameborder|append|120|field|event_submit_form|marginTop|idcheck|openWeeboxFrame|is_ajax|checkIpsBalance|100|marginBottom|collocation|QueryForAccBalance|usercard|user_type|api_|_|3000|CONFIRM_DELETE_TOPIC|CONFIRM_DELETE_RELAY|abort|pid|card|getIdCardinfo|version|msie|EVENT_SUBMIT|370|event_submit_row|submit_event|String|formatNum|show_event_submit|open_win|collect|showCfm|parseFloat|onok|fanwe_success_box|fanwe_error_box|gif|join|minLength|maxLength|255|checkNumber|jiajian|foramtmoney|ig|city_id|embed|no_pic|images|imageDialog|imageUrl|clickFn|plugin|loadPlugin|imageSizeLimit|MAX_FILE_SIZE|border|align|default|Common|Tpl|admin|hideDialog|ROOT_PATH|load_city|switch|express|FW_Password|TRACK_EXPRESS|track_express|get_paypwd_verify_code|__LOGIN_KEY|sendPhoneCode0|escape|550|280|jia|linear|collect_deal|add_cart|add_score|0x3F|skip_user_profile|placeholder|u65B9|inherit|26px|formError|989898|form_success|createElement|formSuccess|u4EF6|u8F6F|sendPhoneCode|Array|u7EF4|form_err|gopreview'.split('|'),0,{}))
var timer;
var c_idx = 1;
var total = 0;
var is_has_show = false;
$(document).ready(function(){
	$("#main_adv_box").find("span").each(function(){
		if($.trim($(this).html())!=""){
			if (!is_has_show) {
				$(this).show();
				is_has_show = true;
			}
			total ++;
		}

	});
	if (total > 1) {
		$("#main_adv_ctl li").hide();
		init_main_adv();
		for(i=1;i<=total;i++){
			$("#main_adv_ctl li[rel='"+i+"']").show();
		}
		$("#main_adv_ctl ul").css({"width":35*total+"px"});
	}
	else {
		if(total==0)
			$("#main_adv_box").hide();
                else{
                    $("img","#main_adv_img ").each(function(){
                        var img_str = $(this).attr("src");
                        $(this).hide();

                        $(this).parent().css({"background":"url("+img_str+") no-repeat center 0","width":"100%","height":"100%"});
                     });
                }
		$("#main_adv_ctl").hide();
	}	
});

function init_main_adv()
{
	$("#main_adv_box").find("span[rel='1']").show();
	$("#main_adv_box").find("li[rel='1']").addClass("act");
	$("img","#main_adv_img ").each(function(){
           var img_str = $(this).attr("src");
           $(this).hide();
           
           $(this).parent().css({"background":"url("+img_str+") no-repeat center 0","width":"100%","height":"100%"});
        });
	timer = window.setInterval("auto_play()", 5000);
	$("#main_adv_box").find("li").hover(function(){
		show_current_adv($(this).attr("rel"));		
	});
	
	$("#main_adv_box").hover(function(){
		clearInterval(timer);
	},function(){
		timer = window.setInterval("auto_play()", 5000);
	});
}

function auto_play()
{	
	if(c_idx == total)
	{
		c_idx = 1;
	}
	else
	{
		c_idx++;
	}
	show_current_adv(c_idx);
}

function show_current_adv(idx)
{	
	$("#main_adv_box").find("span[rel!='"+idx+"']").hide();
	$("#main_adv_box").find("li").removeClass("act");
	$("#main_adv_box").find("li").find("div div div div").css("background-color","#fff");
	if($("#main_adv_box").find("span[rel='"+idx+"']").css("display")=='none')
	$("#main_adv_box").find("span[rel='"+idx+"']").fadeIn();
	$("#main_adv_box").find("li[rel='"+idx+"']").addClass("act");
	$("#main_adv_box").find("li[rel='"+idx+"']").find("div div div div").css("background-color","#f60");
	c_idx = idx;
	
	
}

/*!
 * SuperSlide v2.1 
 * è½»æ¾è§£å†³ç½‘ç«™å¤§éƒ¨åˆ†ç‰¹æ•ˆå±•ç¤ºé—®é¢˜
 * è¯¦å°½ä¿¡æ¯è¯·çœ‹å®˜ç½‘ï¼šhttp://www.SuperSlide2.com/
 *
 * Copyright 2011-2013, å¤§è¯ä¸»å¸­
 *
 * è¯·å°Šé‡åŽŸåˆ›ï¼Œä¿ç•™å¤´éƒ¨ç‰ˆæƒ
 * åœ¨ä¿ç•™ç‰ˆæƒçš„å‰æä¸‹å¯åº”ç”¨äºŽä¸ªäººæˆ–å•†ä¸šç”¨é€”

 */

// (function($){
// 	$.fn.slide=function(options){
// 		$.fn.slide.defaults={
// 		type:"slide", 
// 		effect:"fade", 
// 		autoPlay:false, 
// 		delayTime:500, 
// 		interTime:2500,
// 		triggerTime:150,
// 		defaultIndex:0,
// 		titCell:".hd li",
// 		mainCell:".bd",
// 		targetCell:null,
// 		trigger:"mouseover",
// 		scroll:1,
// 		vis:1,
// 		titOnClassName:"on",
// 		autoPage:false, 
// 		prevCell:".prev",
// 		nextCell:".next",
// 		pageStateCell:".pageState",
// 		opp: false, 
// 		pnLoop:true, 
// 		easing:"swing", 
// 		startFun:null,
// 		endFun:null,
// 		switchLoad:null,

// 		playStateCell:".playState",
// 		mouseOverStop:true,
// 		defaultPlay:true,
// 		returnDefault:false 
// 		};

// 		return this.each(function() {

// 			var opts = $.extend({},$.fn.slide.defaults,options);
// 			var slider = $(this);
// 			var effect = opts.effect;
// 			var prevBtn = $(opts.prevCell, slider);
// 			var nextBtn = $(opts.nextCell, slider);
// 			var pageState = $(opts.pageStateCell, slider);
// 			var playState = $(opts.playStateCell, slider);

// 			var navObj = $(opts.titCell, slider);//å¯¼èˆªå­å…ƒç´ ç»“åˆ
// 			var navObjSize = navObj.size();
// 			var conBox = $(opts.mainCell , slider);//å†…å®¹å…ƒç´ çˆ¶å±‚å¯¹è±¡
// 			var conBoxSize=conBox.children().size();
// 			var sLoad=opts.switchLoad;
// 			var tarObj = $(opts.targetCell, slider);

// 			/*å­—ç¬¦ä¸²è½¬æ¢*/
// 			var index=parseInt(opts.defaultIndex);
// 			var delayTime=parseInt(opts.delayTime);
// 			var interTime=parseInt(opts.interTime);
// 			var triggerTime=parseInt(opts.triggerTime);
// 			var scroll=parseInt(opts.scroll);
// 			var vis=parseInt(opts.vis);
// 			var autoPlay = (opts.autoPlay=="false"||opts.autoPlay==false)?false:true;
// 			var opp = (opts.opp=="false"||opts.opp==false)?false:true;
// 			var autoPage = (opts.autoPage=="false"||opts.autoPage==false)?false:true;
// 			var pnLoop = (opts.pnLoop=="false"||opts.pnLoop==false)?false:true;
// 			var mouseOverStop = (opts.mouseOverStop=="false"||opts.mouseOverStop==false)?false:true;
// 			var defaultPlay = (opts.defaultPlay=="false"||opts.defaultPlay==false)?false:true;
// 			var returnDefault = (opts.returnDefault=="false"||opts.returnDefault==false)?false:true;

// 			var slideH=0;
// 			var slideW=0;
// 			var selfW=0;
// 			var selfH=0;
// 			var easing=opts.easing;
// 			var inter=null;//autoPlay-setInterval 
// 			var mst =null;//trigger-setTimeout
// 			var rtnST=null;//returnDefault-setTimeout
// 			var titOn = opts.titOnClassName;

// 			var onIndex = navObj.index( slider.find( "."+titOn) );
// 			var oldIndex = index = defaultIndex = onIndex==-1?index:onIndex;


// 			var _ind = index;
// 			var cloneNum = conBoxSize>=vis?( conBoxSize%scroll!=0?conBoxSize%scroll:scroll):0; 
// 			var _tar;
// 			var isMarq = effect=="leftMarquee" || effect=="topMarquee"?true:false;

// 			var doStartFun=function(){ if ( $.isFunction( opts.startFun) ){ opts.startFun( index,navObjSize,slider,$(opts.titCell, slider),conBox,tarObj,prevBtn,nextBtn ) } }
// 			var doEndFun=function(){ if ( $.isFunction( opts.endFun ) ){ opts.endFun( index,navObjSize,slider,$(opts.titCell, slider),conBox,tarObj,prevBtn,nextBtn ) } }
// 			var resetOn=function(){ navObj.removeClass(titOn); if( defaultPlay ) navObj.eq(defaultIndex).addClass(titOn)  }



// 			//å•ç‹¬å¤„ç†èœå•æ•ˆæžœ
// 			if( opts.type=="menu" ){

// 				if( defaultPlay ){ navObj.removeClass(titOn).eq(index).addClass(titOn); }
// 				navObj.hover(
// 						function(){
// 							_tar=$(this).find( opts.targetCell );
// 							var hoverInd =navObj.index($(this));
						
// 							mst = setTimeout(function(){  
// 								index=hoverInd;
// 								navObj.removeClass(titOn).eq	(index).addClass(titOn);
// 								doStartFun();
// 								switch (effect)
// 								{
// 									case "fade":_tar.stop(true,true).animate({opacity:"show"}, delayTime,easing,doEndFun ); break;
// 									case "slideDown":_tar.stop(true,true).animate({height:"show"}, delayTime,easing,doEndFun ); break;
// 								}
// 							} ,opts.triggerTime);

// 						},function(){
// 							clearTimeout(mst);
// 							switch (effect){ case "fade":_tar.animate( {opacity:"hide"},delayTime,easing ); break; case "slideDown":_tar.animate( {height:"hide"},delayTime,easing ); break; }
// 						}
// 				);

// 				if (returnDefault){ 
// 					slider.hover(function(){clearTimeout(rtnST);},function(){ rtnST = setTimeout( resetOn,delayTime ); });
// 				}
				

// 				return;
// 			}

			
// 			//å¤„ç†åˆ†é¡µ
// 			if( navObjSize==0 )navObjSize=conBoxSize;//åªæœ‰å·¦å³æŒ‰é’®
// 			if( isMarq ) navObjSize=2;
// 			if( autoPage ){
// 				if(conBoxSize>=vis){
// 					if( effect=="leftLoop" || effect=="topLoop" ){ navObjSize=conBoxSize%scroll!=0?(conBoxSize/scroll^0)+1:conBoxSize/scroll; }
// 					else{ 
// 							var tempS = conBoxSize-vis;
// 							navObjSize=1+parseInt(tempS%scroll!=0?(tempS/scroll+1):(tempS/scroll)); 
// 							if(navObjSize<=0)navObjSize=1; 
// 					}
// 				}
// 				else{ navObjSize=1 }
				
// 				navObj.html(""); 
// 				var str="";

// 				if( opts.autoPage==true || opts.autoPage=="true" ){ for( var i=0; i<navObjSize; i++ ){ str+="<li>"+(i+1)+"</li>" } }
// 				else{ for( var i=0; i<navObjSize; i++ ){ str+=opts.autoPage.replace("$",(i+1))  } }
// 				navObj.html(str); 
				
// 				var navObj = navObj.children();//é‡ç½®å¯¼èˆªå­å…ƒç´ å¯¹è±¡
// 			}


// 			if(conBoxSize>=vis){ //å½“å†…å®¹ä¸ªæ•°å°‘äºŽå¯è§†ä¸ªæ•°ï¼Œä¸æ‰§è¡Œæ•ˆæžœã€‚
// 				conBox.children().each(function(){ //å–æœ€å¤§å€¼
// 					if( $(this).width()>selfW ){ selfW=$(this).width(); slideW=$(this).outerWidth(true);  }
// 					if( $(this).height()>selfH ){ selfH=$(this).height(); slideH=$(this).outerHeight(true);  }
// 				});

// 				var _chr = conBox.children();
// 				var cloneEle = function(){ 
// 					for( var i=0; i<vis ; i++ ){ _chr.eq(i).clone().addClass("clone").appendTo(conBox); } 
// 					for( var i=0; i<cloneNum ; i++ ){ _chr.eq(conBoxSize-i-1).clone().addClass("clone").prependTo(conBox); }
// 				}
				
// 				switch(effect)
// 				{
// 					case "fold": conBox.css({"position":"relative","width":slideW,"height":slideH}).children().css( {"position":"absolute","width":selfW,"left":0,"top":0,"display":"none"} ); break;
// 					case "top": conBox.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+vis*slideH+'px"></div>').css( { "top":-(index*scroll)*slideH, "position":"relative","padding":"0","margin":"0"}).children().css( {"height":selfH} ); break;
// 					case "left": conBox.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+vis*slideW+'px"></div>').css( { "width":conBoxSize*slideW,"left":-(index*scroll)*slideW,"position":"relative","overflow":"hidden","padding":"0","margin":"0"}).children().css( {"float":"left","width":selfW} ); break;
// 					case "leftLoop":
// 					case "leftMarquee":
// 						cloneEle();
// 						conBox.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+vis*slideW+'px"></div>').css( { "width":(conBoxSize+vis+cloneNum)*slideW,"position":"relative","overflow":"hidden","padding":"0","margin":"0","left":-(cloneNum+index*scroll)*slideW}).children().css( {"float":"left","width":selfW}  ); break;
// 					case "topLoop":
// 					case "topMarquee":
// 						cloneEle();
// 						conBox.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+vis*slideH+'px"></div>').css( { "height":(conBoxSize+vis+cloneNum)*slideH,"position":"relative","padding":"0","margin":"0","top":-(cloneNum+index*scroll)*slideH}).children().css( {"height":selfH} ); break;
// 				}
// 			}



// 			//é’ˆå¯¹leftLoopã€topLoopçš„æ»šåŠ¨ä¸ªæ•°
// 			var scrollNum=function(ind){ 
// 				var _tempCs= ind*scroll; 
// 				if( ind==navObjSize ){ _tempCs=conBoxSize; }else if( ind==-1 && conBoxSize%scroll!=0){ _tempCs=-conBoxSize%scroll; }
// 				return _tempCs;
// 			}

// 			//åˆ‡æ¢åŠ è½½
// 			var doSwitchLoad=function(objs){ 

// 					var changeImg=function(t){
// 						for ( var i= t; i<( vis+ t); i++ ){
// 								objs.eq(i).find("img["+sLoad+"]").each(function(){ 
// 									var _this =  $(this);
// 									_this.attr("src",_this.attr(sLoad)).removeAttr(sLoad);
// 									if( conBox.find(".clone")[0] ){ //å¦‚æžœå­˜åœ¨.clone
// 										var chir = conBox.children();
// 										for ( var j=0 ; j< chir.size() ; j++ )
// 										{
// 											chir.eq(j).find("img["+sLoad+"]").each(function(){
// 												if( $(this).attr(sLoad)==_this.attr("src") ) $(this).attr("src",$(this).attr(sLoad)).removeAttr(sLoad) 
// 											})
// 										}
// 									}
// 								})
// 							}
// 					}

// 					switch(effect)
// 					{
// 						case "fade": case "fold": case "top": case "left": case "slideDown":
// 							changeImg( index*scroll );
// 							break;
// 						case "leftLoop": case "topLoop":
// 							changeImg( cloneNum+scrollNum(_ind) );
// 							break;
// 						case "leftMarquee":case "topMarquee": 
// 							var curS = effect=="leftMarquee"? conBox.css("left").replace("px",""):conBox.css("top").replace("px",""); 
// 							var slideT = effect=="leftMarquee"? slideW:slideH; 
// 							var mNum=cloneNum;
// 							if( curS%slideT!=0 ){
// 								var curP = Math.abs(curS/slideT^0);
// 								if( index==1 ){ mNum=cloneNum+curP }else{  mNum=cloneNum+curP-1  }
// 							}
// 							changeImg( mNum );
// 							break;
// 					}
// 			}//doSwitchLoad end


// 			//æ•ˆæžœå‡½æ•°
// 			var doPlay=function(init){
// 				 // å½“å‰é¡µçŠ¶æ€ä¸è§¦å‘æ•ˆæžœ
// 				if( defaultPlay && oldIndex==index && !init && !isMarq ) return;
				
// 				//å¤„ç†é¡µç 
// 				if( isMarq ){ if ( index>= 1) { index=1; } else if( index<=0) { index = 0; } }
// 				else{ 
// 					_ind=index; if ( index >= navObjSize) { index = 0; } else if( index < 0) { index = navObjSize-1; }
// 				}

// 				doStartFun();

// 				//å¤„ç†åˆ‡æ¢åŠ è½½
// 				if( sLoad!=null ){ doSwitchLoad( conBox.children() ) }

// 				//å¤„ç†targetCell
// 				if(tarObj[0]){ 
// 					_tar = tarObj.eq(index);
// 					if( sLoad!=null ){ doSwitchLoad( tarObj ) }
// 					if( effect=="slideDown" ){
// 							tarObj.not(_tar).stop(true,true).slideUp(delayTime); 
// 							_tar.slideDown( delayTime,easing,function(){ if(!conBox[0]) doEndFun() }); 
// 					}
// 					else{
// 							tarObj.not(_tar).stop(true,true).hide();
// 							_tar.animate({opacity:"show"},delayTime,function(){ if(!conBox[0]) doEndFun() }); 
// 					}
// 				}
				
// 				if(conBoxSize>=vis){ //å½“å†…å®¹ä¸ªæ•°å°‘äºŽå¯è§†ä¸ªæ•°ï¼Œä¸æ‰§è¡Œæ•ˆæžœã€‚
// 					switch (effect)
// 					{
// 						case "fade":conBox.children().stop(true,true).eq(index).animate({opacity:"show"},delayTime,easing,function(){doEndFun()}).siblings().hide(); break;
// 						case "fold":conBox.children().stop(true,true).eq(index).animate({opacity:"show"},delayTime,easing,function(){doEndFun()}).siblings().animate({opacity:"hide"},delayTime,easing);break;
// 						case "top":conBox.stop(true,false).animate({"top":-index*scroll*slideH},delayTime,easing,function(){doEndFun()});break;
// 						case "left":conBox.stop(true,false).animate({"left":-index*scroll*slideW},delayTime,easing,function(){doEndFun()});break;
// 						case "leftLoop":
// 							var __ind = _ind;
// 							conBox.stop(true,true).animate({"left":-(scrollNum(_ind)+cloneNum)*slideW},delayTime,easing,function(){
// 								if( __ind<=-1 ){ conBox.css("left",-(cloneNum+(navObjSize-1)*scroll)*slideW);  }else if( __ind>=navObjSize ){ conBox.css("left",-cloneNum*slideW); }
// 								doEndFun();
// 							});
// 							break;//leftLoop end

// 						case "topLoop":
// 							var __ind = _ind;
// 							conBox.stop(true,true).animate({"top":-(scrollNum(_ind)+cloneNum)*slideH},delayTime,easing,function(){
// 								if( __ind<=-1 ){ conBox.css("top",-(cloneNum+(navObjSize-1)*scroll)*slideH);  }else if( __ind>=navObjSize ){ conBox.css("top",-cloneNum*slideH); }
// 								doEndFun();
// 							});
// 							break;//topLoop end

// 						case "leftMarquee":
// 							var tempLeft = conBox.css("left").replace("px",""); 
// 							if(index==0 ){
// 									conBox.animate({"left":++tempLeft},0,function(){
// 										if( conBox.css("left").replace("px","")>= 0){ conBox.css("left",-conBoxSize*slideW) }
// 									});
// 							}
// 							else{
// 									conBox.animate({"left":--tempLeft},0,function(){
// 										if(  conBox.css("left").replace("px","")<= -(conBoxSize+cloneNum)*slideW){ conBox.css("left",-cloneNum*slideW) }
// 									});
// 							}break;// leftMarquee end

// 							case "topMarquee":
// 							var tempTop = conBox.css("top").replace("px",""); 
// 							if(index==0 ){
// 									conBox.animate({"top":++tempTop},0,function(){
// 										if( conBox.css("top").replace("px","")>= 0){ conBox.css("top",-conBoxSize*slideH) }
// 									});
// 							}
// 							else{
// 									conBox.animate({"top":--tempTop},0,function(){
// 										if(  conBox.css("top").replace("px","")<= -(conBoxSize+cloneNum)*slideH){ conBox.css("top",-cloneNum*slideH) }
// 									});
// 							}break;// topMarquee end

// 					}//switch end
// 				}

// 					navObj.removeClass(titOn).eq(index).addClass(titOn);
// 					oldIndex=index;
// 					if( !pnLoop ){ //pnLoopæŽ§åˆ¶å‰åŽæŒ‰é’®æ˜¯å¦ç»§ç»­å¾ªçŽ¯
// 						nextBtn.removeClass("nextStop"); prevBtn.removeClass("prevStop");
// 						if (index==0 ){ prevBtn.addClass("prevStop"); }
// 						if (index==navObjSize-1 ){ nextBtn.addClass("nextStop"); }
// 					}

// 					pageState.html( "<span>"+(index+1)+"</span>/"+navObjSize);

// 			};// doPlay end

// 			//åˆå§‹åŒ–æ‰§è¡Œ
// 			if( defaultPlay ){ doPlay(true); }

// 			if (returnDefault)//è¿”å›žé»˜è®¤çŠ¶æ€
// 			{
// 				slider.hover(function(){ clearTimeout(rtnST) },function(){
// 						rtnST = setTimeout( function(){
// 							index=defaultIndex;
// 							if(defaultPlay){ doPlay(); }
// 							else{
// 								if( effect=="slideDown" ){ _tar.slideUp( delayTime, resetOn ); }
// 								else{ _tar.animate({opacity:"hide"},delayTime,resetOn ); }
// 							}
// 							oldIndex=index;
// 						},300 );
// 				});
// 			}
			
// 			///è‡ªåŠ¨æ’­æ”¾å‡½æ•°
// 			var setInter = function(time){ inter=setInterval(function(){  opp?index--:index++; doPlay() }, !!time?time:interTime);  }
// 			var setMarInter = function(time){ inter = setInterval(doPlay, !!time?time:interTime);  }
// 			// å¤„ç†mouseOverStop
// 			var resetInter = function(){ if( !mouseOverStop ){clearInterval(inter); setInter() } }
// 			// å‰åŽæŒ‰é’®è§¦å‘
// 			var nextTrigger = function(){ if ( pnLoop || index!=navObjSize-1 ){ index++; doPlay(); if(!isMarq)resetInter(); } }
// 			var prevTrigger = function(){ if ( pnLoop || index!=0 ){ index--; doPlay(); if(!isMarq)resetInter(); } }
// 			//å¤„ç†playState
// 			var playStateFun = function(){ clearInterval(inter); isMarq?setMarInter():setInter(); playState.removeClass("pauseState") }
// 			var pauseStateFun = function(){ clearInterval(inter);playState.addClass("pauseState"); }

// 			//è‡ªåŠ¨æ’­æ”¾
// 			if (autoPlay) {
// 					if( isMarq ){ 
// 						opp?index--:index++; setMarInter();
// 						if(mouseOverStop) conBox.hover(pauseStateFun,playStateFun);
// 					}else{
// 						setInter();
// 						if(mouseOverStop) slider.hover( pauseStateFun,playStateFun );
// 					}
// 			}
// 			else{ if( isMarq ){ opp?index--:index++; } playState.addClass("pauseState"); }

// 			playState.click(function(){  playState.hasClass("pauseState")?playStateFun():pauseStateFun()  });

// 			//titCelläº‹ä»¶
// 			if(opts.trigger=="mouseover"){
// 				navObj.hover(function(){ var hoverInd = navObj.index(this);  mst = setTimeout(function(){  index=hoverInd; doPlay(); resetInter();  },opts.triggerTime); }, function(){ clearTimeout(mst) });
// 			}else{ navObj.click(function(){ index=navObj.index(this); doPlay(); resetInter(); })  }

// 			//å‰åŽæŒ‰é’®äº‹ä»¶
// 			if (isMarq){
				
// 				nextBtn.mousedown(nextTrigger);
// 				prevBtn.mousedown(prevTrigger);
// 				//å‰åŽæŒ‰é’®é•¿æŒ‰10å€åŠ é€Ÿ
// 				if (pnLoop)
// 				{	
// 					var st;
// 					var marDown = function(){ st=setTimeout(function(){ clearInterval(inter); setMarInter( interTime/10^0 ) },150) }
// 					var marUp = function(){ clearTimeout(st); clearInterval(inter); setMarInter() }
// 					nextBtn.mousedown(marDown); nextBtn.mouseup(marUp);
// 					prevBtn.mousedown(marDown); prevBtn.mouseup(marUp);
// 				}
// 				//å‰åŽæŒ‰é’®mouseoveräº‹ä»¶
// 				if( opts.trigger=="mouseover"  ){ nextBtn.hover(nextTrigger,function(){}); prevBtn.hover(prevTrigger,function(){}); }
// 			}else{
// 				nextBtn.click(nextTrigger);
// 				prevBtn.click(prevTrigger);
// 			}

//     	});//each End

// 	};//slide End

// })(jQuery);

// jQuery.easing['jswing'] = jQuery.easing['swing'];
// jQuery.extend( jQuery.easing,
// {
// 	def: 'easeOutQuad',
// 	swing: function (x, t, b, c, d) { return jQuery.easing[jQuery.easing.def](x, t, b, c, d); },
// 	easeInQuad: function (x, t, b, c, d) {return c*(t/=d)*t + b;},
// 	easeOutQuad: function (x, t, b, c, d) {return -c *(t/=d)*(t-2) + b},
// 	easeInOutQuad: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t + b;return -c/2 * ((--t)*(t-2) - 1) + b},
// 	easeInCubic: function (x, t, b, c, d) {return c*(t/=d)*t*t + b},
// 	easeOutCubic: function (x, t, b, c, d) {return c*((t=t/d-1)*t*t + 1) + b},
// 	easeInOutCubic: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t + b;return c/2*((t-=2)*t*t + 2) + b},
// 	easeInQuart: function (x, t, b, c, d) {return c*(t/=d)*t*t*t + b},
// 	easeOutQuart: function (x, t, b, c, d) {return -c * ((t=t/d-1)*t*t*t - 1) + b},
// 	easeInOutQuart: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t*t + b;return -c/2 * ((t-=2)*t*t*t - 2) + b},
// 	easeInQuint: function (x, t, b, c, d) {return c*(t/=d)*t*t*t*t + b},
// 	easeOutQuint: function (x, t, b, c, d) {return c*((t=t/d-1)*t*t*t*t + 1) + b},
// 	easeInOutQuint: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;return c/2*((t-=2)*t*t*t*t + 2) + b},
// 	easeInSine: function (x, t, b, c, d) {return -c * Math.cos(t/d * (Math.PI/2)) + c + b},
// 	easeOutSine: function (x, t, b, c, d) {return c * Math.sin(t/d * (Math.PI/2)) + b},
// 	easeInOutSine: function (x, t, b, c, d) {return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b},
// 	easeInExpo: function (x, t, b, c, d) {return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b},
// 	easeOutExpo: function (x, t, b, c, d) {return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b},
// 	easeInOutExpo: function (x, t, b, c, d) {if (t==0) return b;if (t==d) return b+c;if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;return c/2 * (-Math.pow(2, -10 * --t) + 2) + b},
// 	easeInCirc: function (x, t, b, c, d) {return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b},
// 	easeOutCirc: function (x, t, b, c, d) {return c * Math.sqrt(1 - (t=t/d-1)*t) + b},
// 	easeInOutCirc: function (x, t, b, c, d) {if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b},
// 	easeInElastic: function (x, t, b, c, d) {var s=1.70158;var p=0;var a=c;if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;if (a < Math.abs(c)) { a=c; var s=p/4; }
// 		else var s = p/(2*Math.PI) * Math.asin (c/a);return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b},
// 	easeOutElastic: function (x, t, b, c, d) {var s=1.70158;var p=0;var a=c;if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;if (a < Math.abs(c)) { a=c; var s=p/4; }
// 		else var s = p/(2*Math.PI) * Math.asin (c/a);return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b},
// 	easeInOutElastic: function (x, t, b, c, d) {var s=1.70158;var p=0;var a=c;if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);if (a < Math.abs(c)) { a=c; var s=p/4; }
// 		else var s = p/(2*Math.PI) * Math.asin (c/a);if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b},
// 	easeInBack: function (x, t, b, c, d, s) {if (s == undefined) s = 1.70158;return c*(t/=d)*t*((s+1)*t - s) + b},
// 	easeOutBack: function (x, t, b, c, d, s) {if (s == undefined) s = 1.70158;return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b},
// 	easeInOutBack: function (x, t, b, c, d, s) {if (s == undefined) s = 1.70158; 
// 		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b},
// 	easeInBounce: function (x, t, b, c, d) {return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b},
// 	easeOutBounce: function (x, t, b, c, d) {if ((t/=d) < (1/2.75)) {	return c*(7.5625*t*t) + b;} else if (t < (2/2.75)) {	return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;} else if (t < (2.5/2.75)) {	return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;} else {	return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;}},
// 	easeInOutBounce: function (x, t, b, c, d) {if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;}
// });
// !function(a){"use strict";a.fn.circleChart=function(b){const c={color:"#ffa200",backgroundColor:"#eee",background:!0,speed:2e3,widthRatio:.2,value:66,unit:"percent",counterclockwise:!1,size:110,startAngle:0,animate:!0,backgroundFix:!0,lineCap:"round",animation:"easeInOutCubic",text:!1,redraw:!1,cAngle:0,textCenter:!0,textSize:!1,textWeight:"normal",textFamily:"sans-serif",relativeTextSize:1/7,autoCss:!0,onDraw:!1};Math.linearTween=((a,b,c,d)=>c*a/d+b),Math.easeInQuad=((a,b,c,d)=>{a/=d;return c*a*a+b}),Math.easeOutQuad=((a,b,c,d)=>{a/=d;return-c*a*(a-2)+b}),Math.easeInOutQuad=((a,b,c,d)=>{a/=d/2;if(a<1)return c/2*a*a+b;a--;return-c/2*(a*(a-2)-1)+b}),Math.easeInCubic=((a,b,c,d)=>{a/=d;return c*a*a*a+b}),Math.easeOutCubic=((a,b,c,d)=>{a/=d;a--;return c*(a*a*a+1)+b}),Math.easeInOutCubic=((a,b,c,d)=>{a/=d/2;if(a<1)return c/2*a*a*a+b;a-=2;return c/2*(a*a*a+2)+b}),Math.easeInQuart=((a,b,c,d)=>{a/=d;return c*a*a*a*a+b}),Math.easeOutQuart=((a,b,c,d)=>{a/=d;a--;return-c*(a*a*a*a-1)+b}),Math.easeInOutQuart=((a,b,c,d)=>{a/=d/2;if(a<1)return c/2*a*a*a*a+b;a-=2;return-c/2*(a*a*a*a-2)+b}),Math.easeInQuint=((a,b,c,d)=>{a/=d;return c*a*a*a*a*a+b}),Math.easeOutQuint=((a,b,c,d)=>{a/=d;a--;return c*(a*a*a*a*a+1)+b}),Math.easeInOutQuint=((a,b,c,d)=>{a/=d/2;if(a<1)return c/2*a*a*a*a*a+b;a-=2;return c/2*(a*a*a*a*a+2)+b}),Math.easeInSine=((a,b,c,d)=>-c*Math.cos(a/d*(Math.PI/2))+c+b),Math.easeOutSine=((a,b,c,d)=>c*Math.sin(a/d*(Math.PI/2))+b),Math.easeInOutSine=((a,b,c,d)=>-c/2*(Math.cos(Math.PI*a/d)-1)+b),Math.easeInExpo=((a,b,c,d)=>c*Math.pow(2,10*(a/d-1))+b),Math.easeOutExpo=((a,b,c,d)=>c*(1-Math.pow(2,-10*a/d))+b),Math.easeInOutExpo=((a,b,c,d)=>{a/=d/2;if(a<1)return c/2*Math.pow(2,10*(a-1))+b;a--;return c/2*(2-Math.pow(2,-10*a))+b}),Math.easeInCirc=((a,b,c,d)=>{a/=d;return-c*(Math.sqrt(1-a*a)-1)+b}),Math.easeOutCubic=((a,b,c,d)=>{a/=d;a--;return c*(a*a*a+1)+b}),Math.easeInOutCubic=((a,b,c,d)=>{a/=d/2;if(a<1)return c/2*a*a*a+b;a-=2;return c/2*(a*a*a+2)+b}),Math.easeOutCirc=((a,b,c,d)=>{a/=d;a--;return c*Math.sqrt(1-a*a)+b}),Math.easeInOutCirc=((a,b,c,d)=>{a/=d/2;if(a<1)return-c/2*(Math.sqrt(1-a*a)-1)+b;a-=2;return c/2*(Math.sqrt(1-a*a)+1)+b});let d=(a,b,c,e,f,g,h,i)=>{let j=Object.create(d.prototype);j.pos=a;j.bAngle=b;j.eAngle=c;j.cAngle=e;j.radius=f;j.lineWidth=g;j.sAngle=h;j.settings=i;return j};d.prototype={onDraw(a){if(!1!==this.settings.onDraw){let c=Object.assign({},this);var b={percent:i,rad:a=>a,default:f};c.value=(b[this.settings.unit]||b.default)(c.cAngle),c.text=(b=>e(a,b)),c.settings.onDraw(a,c)}},drawBackground(a){a.beginPath(),a.arc(this.pos,this.pos,this.settings.backgroundFix?.9999*this.radius:this.radius,0,2*Math.PI),a.lineWidth=this.settings.backgroundFix?.95*this.lineWidth:this.lineWidth,a.strokeStyle=this.settings.backgroundColor,a.stroke()},draw(a){if(a.beginPath(),this.settings.counterclockwise){let b=2*Math.PI;a.arc(this.pos,this.pos,this.radius,b-this.bAngle,b-(this.bAngle+this.cAngle),this.settings.counterclockwise)}else a.arc(this.pos,this.pos,this.radius,this.bAngle,this.bAngle+this.cAngle,this.settings.counterclockwise);a.lineWidth=this.lineWidth,a.lineCap=this.settings.lineCap,a.strokeStyle=this.settings.color,a.stroke()},animate(a,b,c,d,e){let f=(new Date).getTime()-c;f<1&&(f=1),c-d<1.05*this.settings.speed&&(!e&&1e3*this.cAngle<=Math.floor(1e3*this.eAngle)||e&&1e3*this.cAngle>=Math.floor(1e3*this.eAngle))?(this.cAngle=Math[this.settings.animation]((c-d)/f,this.sAngle,this.eAngle-this.sAngle,this.settings.speed/f),b.clearRect(0,0,this.settings.size,this.settings.size),this.settings.background&&this.drawBackground(b),this.draw(b),this.onDraw(a),c=(new Date).getTime(),j(()=>this.animate(a,b,c,d,e))):(this.cAngle=this.eAngle,b.clearRect(0,0,this.settings.size,this.settings.size),this.settings.background&&this.drawBackground(b),this.draw(b),this.setCurrentAnglesData(a))},setCurrentAnglesData(a){var b={percent:i,rad:a=>a,default:f};let c=b[this.settings.unit]||b.default;a.data("current-c-angle",c(this.cAngle)),a.data("current-start-angle",c(this.bAngle))}};let e=(b,c)=>{b.data("text",c);a(".circleChart_text",b).html(c)},f=a=>a/Math.PI*180,g=a=>a/180*Math.PI,h=a=>g(a/100*360),i=a=>f(a)/360*100,j=(a=>window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(b){window.setTimeout(a,1e3/60)})();return this.each((e,f)=>{let i=a(f);var k={};var l=i.data();for(let a in l)l.hasOwnProperty(a)&&0===a.indexOf("_cache_")&&c.hasOwnProperty(a.substring(7))&&(k[a.substring(7)]=l[a]);let m=Object.assign({},c,k,l,b);for(let a in m)0!==a.indexOf("_cache_")&&i.data("_cache_"+a,m[a]);a("canvas.circleChart_canvas",i).length||i.append(function(){return a("<canvas/>",{class:"circleChart_canvas"}).prop({width:m.size,height:m.size}).css(m.autoCss?{"margin-left":"auto","margin-right":"auto",display:"block"}:{})});a("p.circleChart_text",i).length||!1!==m.text&&(i.append("<p class='circleChart_text'>"+m.text+"</p>"),m.autoCss&&(m.textCenter?a("p.circleChart_text",i).css({position:"absolute","line-height":m.size+"px",top:0,width:"100%",margin:0,padding:0,"text-align":"center","font-size":!1!==m.textSize?m.textSize:m.size*m.relativeTextSize,"font-weight":m.textWeight,"font-family":m.textFamily}):a("p.circleChart_text",i).css({"padding-top":"5px","text-align":"center","font-weight":m.textWeight,"font-family":m.textFamily,"font-size":!1!==m.textSize?m.textSize:m.size*m.relativeTextSize})));m.autoCss&&i.css("position","relative");m.redraw||(m.cAngle=m.currentCAngle?m.currentCAngle:m.cAngle,m.startAngle=m.currentStartAngle?m.currentStartAngle:m.startAngle);var n=a("canvas",i).get(0);var o=n.getContext("2d");var p={percent:h,rad:a=>a,default:g};let q=p[m.unit]||p.default;let r=q(m.startAngle);let s=q(m.value);let t=q(m.cAngle);var u=m.size/2;var v=u*(1-m.widthRatio/2);var w=v*m.widthRatio;var x=d(u,r,s,t,v,w,t,m);i.data("size",m.size);m.animate?0!==m.value?x.animate(i,o,(new Date).getTime(),(new Date).getTime(),t>s):j(()=>{o.clearRect(0,0,this.settings.size,this.settings.size);x.settings.background&&x.drawBackground(o)}):(x.cAngle=x.eAngle,j(()=>{m.background&&x.drawBackground(o);0!==m.value?(x.draw(o),x.onDraw(i),x.setCurrentAnglesData(i)):(o.clearRect(0,0,this.settings.size,this.settings.size),x.settings.background&&x.drawBackground(o))}))})}}(jQuery);

// // eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('f 1;2 5(){3.g(1);8(4==9){$.i({e:j+"/d.c?b=h",o:"p",q:2(7){8(7.k==0){4=n}l{4=9}}})}1=3.6("5()",a)}$(m).r(2(){1=3.6("5()",a)});',28,28,'|deal_sender|function|window|to_send_msg|deal_sender_fun|setInterval|data|if|true|send_span|act|php|msg_send|url|var|clearInterval|deal_msg_list|ajax|APP_ROOT|DEAL_MSG_COUNT|else|document|false|dataType|json|success|ready'.split('|'),0,{}))