var CommandBarElements = document.querySelectorAll(".ms-CommandBar");
for (var i = 0; i < CommandBarElements.length; i++) {
  new fabric['CommandBar'](CommandBarElements[i]);
}

var TableElements = document.querySelectorAll(".ms-Table");
for (var i = 0; i < TableElements.length; i++) {
    new fabric['Table'](TableElements[i]);
}

//$("td,th")
$("td:first-child,td:nth-child(2),td:nth-child(3)")
    .css({
        /* required to allow resizer embedding */
        position: "relative"
    })
    /* check .resizer CSS */
    .prepend("<div class='resizer'></div>")
    .resizable({
        resizeHeight: false,
        // we use the column as handle and filter
        // by the contained .resizer element
        handleSelector: "",
        onDragStart: function (e, $el, opt) {
            // only drag resizer
            if (!$(e.target).hasClass("resizer"))
                return false;
            return true;
        }
    });

$(".panel-left").resizable({
    handleSelector: ".splitter",
    resizeHeight: false
});

$(".panel-top").resizable({
    handleSelector: ".splitter-horizontal",
    resizeWidth: false
});

