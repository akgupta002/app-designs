/*!
 * Perfect Pay UI Frame Work v1.0.0
 */

// FILTERS
// =======

$(function() {

    $('.filters-slider-range').each(function() {
        var $this = $(this);
        var range = $this.data('range');
        var min = $this.data('min');
        var max = $this.data('max');
        var value = $this.data('value');
        var values = $this.data('values');
        var step = $this.data('step');

        $this.slider({
            range: range,
            min: min,
            max: max,
            value: value,
            values: values,
            step: step,
            start: function(e, ui) {
                var $container = $(this).closest('.filters-slider');
                var handleIndex = 0;

                $container.find('.ui-slider-handle').each(function() {
                    var $this = $(this);

                    $this.tooltip({
                        placement: 'top',
                        title: String(formatNegativeValues(ui.values[handleIndex])),
                        trigger: 'focus',
                        container: $this
                    });

                    handleIndex++;
                });
            },
            slide: function(e, ui) {
                var $container = $(this).closest('.filters-slider');
                var handleIndex = 0;

                $container.find('.filters-slider-header-min').html(formatNegativeValues(ui.values[0]))
                    .end().find('.filters-slider-header-max').html(formatNegativeValues(ui.values[1]));

                $(this).find('.ui-slider-handle').each(function() {
                    $(this).find('.tooltip').css({
                        'left': '50%',
                        'transform': 'translateX(-50%)'
                    }).find('.tooltip-inner').text(formatNegativeValues(ui.values[handleIndex]));

                    handleIndex++;
                });
            },
            stop: function() {
                var $container = $(this).closest('.filters-slider');

                $container.find('.ui-slider-handle').each(function() {
                    $(this).tooltip('destroy');
                });
            }
        });

    });
    //
    $('.clear-button').on('click', resetCheckBoxes);
    //
    $('.slider-reset-button').on('click', resetSlider);
});


// Resetting the slider
function resetSlider() {
    var $this = $(this);
    var dropdownlist = $this.parent().siblings();
    var $sliderHeader = dropdownlist.find('.filters-slider-header');
    var $currentSlider = dropdownlist.find('.filters-slider-range');
    var dataValues = $currentSlider.data("values");
    var defaultMinValue = parseInt(dataValues[0]);
    var defaultMaxValue = dataValues[1];
    $currentSlider.slider("values", 0, defaultMinValue);
    $currentSlider.slider("values", 1, defaultMaxValue);
    $sliderHeader.find('.filters-slider-header-min').html(formatNegativeValues(defaultMinValue));
    $sliderHeader.find('.filters-slider-header-max').html(formatNegativeValues(defaultMaxValue));
}


// Enclose the negative value into parenthesis
function formatNegativeValues(value) {
    if (value < 0) {
        return '(' + formatCurrency(Math.abs(value)) + ')';
    } else {
        return formatCurrency(value);
    }
}

// Clear checked clear boxes
function resetCheckBoxes() {
    var $this = $(this);
    var dropdownlist = $this.parent().siblings();
    var checkBox = dropdownlist.find('.input-checkbox');
    checkBox.prop('checked', false);
}


// Format the value with a thousand separater
// Add '000 separater to the value
function formatCurrency(val) {
    return val.toLocaleString();
}
