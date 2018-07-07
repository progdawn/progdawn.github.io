//---- Carousel ----


//Carousel speed
$('.carousel').carousel({
    interval: 2000
})


//---- Subs and Specials ----


//Subs collapse
$(document).ready(function () {
    $('.collapse')
        .on('shown.bs.collapse', function(event) {
        event.stopPropagation();
        $(this)
            .parent().parent()
            .find(".collapse-row")
            .css({"padding-bottom":"6px"});
    }).on('hidden.bs.collapse', function(event) {
        event.stopPropagation();
        $(this)
            .parent().parent()
            .find(".collapse-row")
            .css({"padding-bottom":"0", "border":"none"});
    });
});    


//---- Brands ----


//Initialize Brands datatable
$(document).ready(function (){
    $('#brandstable').DataTable({
        "responsive": true,
        "paging":   false,
        "columnDefs": [ {
            "targets": 'nosort',
            "orderable": false
        } ]
    });
});


//---- Abilities ----


//Initialize Abilities datatable
$(document).ready(function (){
    $('#abilitiestable').DataTable({
        "responsive": true,
        "paging":   false,
        "columnDefs": [ {
            "targets": 'nosort',
            "orderable": false
        } ]
    });
});


//---- Gear and Weapons ----


//Initialize Gear and Weapons datatables
$(document).ready(function (){
    $('.tab-pane table').DataTable({
        "responsive": true,
        "paging":   false,
        "columnDefs": [ {
            "targets": 'nosort',
            "orderable": false
        } ]
    });
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $($.fn.dataTable.tables({visible: true, api: true, "deferRender": true} )).DataTable()
            .columns.adjust()
            .responsive.recalc();
        
    }); 
    $('.nosort').removeClass('sorting_asc');
});
//Allow overall search for all tabbed tables
$(document).ready( function () {
    var tabbedTables = $('.tab-pane table').DataTable();
    $('#search-all').on('keyup', function () {
        tabbedTables.search( this.value ).draw();   
    });
} );


//---- Gallery ----


/*var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
});
//Layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
});*/

(function() {

	// Main content container
	var $container = $('.grid');

	// Masonry + ImagesLoaded
	$container.imagesLoaded(function(){
		$container.masonry({
			// selector for entry content
			itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
		});
	});

	// Infinite Scroll
	$container.infinitescroll({

		// selector for the paged navigation (it will be hidden)
		navSelector  : ".navigation",
		// selector for the NEXT link (to page 2)
		nextSelector : ".nav-previous a",
		// selector for all items you'll retrieve
		itemSelector : ".grid-item",

		// finished message
		loading: {
			finishedMsg: 'No more pages to load.'
			}
		},

		// Trigger Masonry as a callback
		function( newElements ) {
			// hide new items while they are loading
			var $newElems = $( newElements ).css({ opacity: 0 });
			// ensure that images load before adding to masonry layout
			$newElems.imagesLoaded(function(){
				// show elems now they're ready
				$newElems.animate({ opacity: 1 });
				$container.masonry( 'appended', $newElems, true );
			});

	});
	
	/**
	 * OPTIONAL!
	 * Load new pages by clicking a link
	 */

	// Pause Infinite Scroll
	$(window).unbind('.infscr');

	// Resume Infinite Scroll
	$('.nav-previous a').click(function(){
		$container.infinitescroll('retrieve');
		return false;
	});

})();