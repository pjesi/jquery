/**
 * jQuery hint plugin - Vidar Svansson (vidarsvans@gmail.com) 
 * Based on inputHint by Jason Frame (jason@onehackoranother.com)
 * Released under The MIT License.
 * usage: $(':text').hint('+kbd');
 */

(function ($) {
 $.fn.hint = function(expr, options) {
  options = $.extend({hintClass: 'hint'}, options || {});

 var hint = $(this).find(expr).hide().text();

  function showHint() {
   if ($(this).val() == '') {
                $(this).addClass(options.hintClass).val(hint);
   }
  }

  function removeHint() {
   if ($(this).hasClass(options.hintClass)) $(this).removeClass(options.hintClass).val('');
  }
  
  this.focus(removeHint).blur(showHint).blur();

        var $form = this.parents('form:eq(0)');
        this.each(function() {
            var self = this;
            $form.submit(function() { removeHint.apply(self); });
        });
 };
 
})(jQuery);
