
function checkInclude() {
    var $tags, $include, $elements;
    $tags = $('*');
    for(var i = 0; i < $tags.length; i++) {
        $elements = $tags[i];
        $include = $($elements).attr('include-html');
        if ($include) {
            $.get($include).done(function(result, status) {
                $($elements).html(result);
                $($elements).removeAttr('include-html');
                checkInclude();
            });
            return;
        }
    }
}
