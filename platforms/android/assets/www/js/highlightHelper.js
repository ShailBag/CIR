function highlightHelper(exterior,interior) {
	var $statelist
		, $rightSideXMap=exterior
		, $rightSideIMap=interior
		, ratio
		, default_options =	{
			fillOpacity: 0.5,
			render_highlight: {
				fillColor: 'ffffff',// 'ffffff' '2aff00'
				stroke: true,
			},
			render_select: {
				fillColor: '707070',//'707070' 'ff000c'
				stroke: false,
			},
			fadeInterval: 50,
			isSelectable: true,
			singleSelect: false,
			mapKey: 'data-state',
			mapValue: 'data-full',
			listKey: 'name',
			listSelectedAttribute: 'checked',
			sortList: "asc",
			onGetList: addCheckBoxes,
			onClick: function (e) {
				styleCheckbox(e.selected, e.listTarget);
				if (!utils.isScrolledIntoView(e.listTarget, false, $statelist)) {
					utils.centerOn($statelist, e.listTarget);
				}
			},
			toolTipClose: ["area-mouseout"],
		};

	$statelist = $('#statelist');
	
	function addCheckBoxes(items) {
		var item, selected;
		$statelist.children().remove();
		for (var i = 0; i < items.length; i++) {
			selected = items[i].isSelected();
			item = $('<div><input type="checkbox" name="' + items[i].key + '"' + (selected ? "checked" : "") + '><span class="sel" key="' + items[i].key + '">' + items[i].value + '</span></div>');
			$statelist.append(item);
		}
		$statelist.find('span.sel').unbind('click').bind('click', function (e) {
			var key = $(this).attr('key');
			$rightSideXMap.mapster('highlight', true, key);
			$rightSideIMap.mapster('highlight', true, key);
		});
		// return the list to mapster so it can bind to it
		return $statelist.find('input:checkbox').unbind('click').click(function (e) {
			var selected = $(this).is(':checked');
			$rightSideXMap.mapster('set', selected, $(this).attr('name'));
			$rightSideIMap.mapster('set', selected, $(this).attr('name'));
			styleCheckbox(selected, $(this));
		});
	}
	
	function styleCheckbox(selected, $checkbox) {
		nowWeight = selected ? "bold" : "normal";
		$checkbox.closest('div').css("font-weight", nowWeight);
	}
	
	function bindlinks() {
		$("#show_selected").bind("click", function (e) {
			e.preventDefault();
			$('#selections').text($rightSideXMap.mapster("get")+","+$rightSideIMap.mapster("get"));
			// document.getElementById("selectionsT").value=$rightSideXMap.mapster("get")+","+$rightSideIMap.mapster("get");
			// $('#selections').text($rightSideIMap.mapster("get"));
		});
		
		function getSelected(sel) {
			var item = $();
			sel.each(function () {
				if (this.selected) {
					item = item.add(this);
					return false;
				}
			});
			return item;
		}

		function getFillOptions(el) {
			var new_options
				, val = getSelected($(el).find("option")).val();

			if (val > "0") {
				new_options = {
					altImage: null,
					stroke: true
				}
			} else {
				new_options = {
					altImage: null,
					stroke: false
				}
			}
			return new_options;
		}

		function getNewOptions() {
			var options
				, render_highlight = getFillOptions($('#highlight_style'))
				, render_select = getFillOptions($('#select_style'));

			options = $.extend(
				{}
				, default_options
				,{
					render_select: render_select,
					render_highlight: render_highlight
				}
			);
			return options;
		}
	};
	bindlinks();
	$.mapster.impl.init();
	$rightSideXMap.mapster(default_options);
	$rightSideIMap.mapster(default_options);
}

var utils = {};
// Tells if an element is completely visible. if the 2nd parm is true, it only looks at the top.

utils.isScrolledIntoView = function (elem, topOnly, container) {
	var useWindow = false, docViewTop, docViewBottom, elemTop, elemBottom;

	if (!container) {
	   container = window;
	   useWindow = true;
	}

	if (useWindow) {
	   docViewTop = $(container).scrollTop();
	   elemTop = elem.offset().top;
	} else {
	   docViewTop = 0;
	   elemTop = elem.position();
	}
	docViewBottom = docViewTop + $(container).height();
	elemBottom = elemTop + elem.height();

	if (topOnly) {
	   return elemTop >= docViewTop && elemTop <= docViewBottom;
	} else {
	   return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
	}
};

utils.centerOn = function ($container, $element) {
	$container.animate({
	   scrollTop: $element.position().top - ($container.height() / 2)
	}, 'slow');
};