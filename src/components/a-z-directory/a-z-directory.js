/**
 * @File:
 * Legacy js for a-z directory.
 * @TODO:
 * Update to follow standards.
 * @See:
 * modules/custom/barista_azdirectory
 */
/* eslint-disable */
!function (document, Drupal, $) {
    'use strict';

    /**
     * A-Z Directory component behaviors.
     *
     * @type {Drupal~behavior}
     */

    Drupal.behaviors.baristaAZDirectory = {

        attach: function attach(context) {

            // Data is loaded after page is completely loaded
            // unless someone has clicked the dropdown for the directory, in which case, it is loaded immediately.
            var dataLoadInitiated = false;
            var listingsAll = [];
            var listingsLabs = [];
            var listingsCores = [];
            var listingsCenters = [];
            var listingsOffices = [];
            var listingsDepartments = [];

            // Directory types are set in the module PHP code
            var directory_types = drupalSettings.directoryTypes;
            var service_uri = drupalSettings.serviceURI;

            //Find the link to the directory in the dropdown navigation
            // and replace it with the skeleton of a megamenu
            $(".sitenav-dropdown .directoryMenuItem").each(function(){
                var oldtitle = $(this).html();
                var oldhref = $(this).attr("href");
                $(this).parent().replaceWith('<li class="expanded dropdown directory-dropdown-parent"><a href="'+ oldhref +'">'+ oldtitle + '</a>'
                    + '<span> </span><a href="#" role="button" data-toggle="dropdown" class="dropdown-toggle"><i class="fa fa-caret-down last-child"></i></a>'
                    + '<div class="dropdown-menu last-child megamenu">'
                    + '<form class="directory-search-form"><input class="form-control barista-directory-search" id="directorySearch" placeholder="Start typing to filter results" /></form>'
                    + '<div class="row">'
                    + '<ul class="last-child megamenu-tabs">'
                    + '<li class="expanded dropdown megamenu-tab-container active"><a href="#" class="megamenu_tab" data-directory-types="all">All <i class="fa fa-chevron-right"></i></a></li>'
                    + '<li class="expanded dropdown megamenu-tab-container"><a href="#" class="megamenu_tab" data-directory-types="departments">Departments <i class="fa fa-chevron-right"></i></a></li>'
                    + '<li class="expanded dropdown megamenu-tab-container"><a href="#" class="megamenu_tab" data-directory-types="centers">Centers <i class="fa fa-chevron-right"></i></a></li>'
                    + '<li class="expanded dropdown megamenu-tab-container"><a href="#" class="megamenu_tab" data-directory-types="cores">Cores / Shared Resources <i class="fa fa-chevron-right"></i></a></li>'
                    + '<li class="expanded dropdown megamenu-tab-container"><a href="#" class="megamenu_tab" data-directory-types="offices">Administrative Offices <i class="fa fa-chevron-right"></i></a></li>'
                    + '</ul>'
                    + '<div class="barista-directory-content-holder">'
                    + '<div id="directoryData" class="barista-directory-data"><i class="fa fa-circle-o-notch fa-spin"></i> Loading</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</li>');

            });

            // if dropdown activated before page has fully loaded, go ahead and load the data
            $(".sitenav-dropdown .directory-dropdown-parent").parent().on('show.bs.dropdown', function () {
                if(!dataLoadInitiated){
                    loadDirectoryData();
                }
            });

            // whenever dropdown is shown, put the cursor in the filter box
            $(".sitenav-dropdown .directory-dropdown-parent").parent().on('shown.bs.dropdown', function () {
                // don't do this on tiny devices
                if($( window ).width() > 500){
                    // place cursor in search filter box
                    setTimeout(function() { $("#directorySearch").focus(); }, 10);
                }
            });

            //  bind to a handler defined in the barista megamenu js in macchiato.js that executes after click handler completed
            $(".sitenav-dropdown .directory-dropdown-parent a.megamenu_tab").bind('megamenutab-activated', function(e) {
                displayRelevantDirectoryListings();

            });

            // Bind event to filtering text input
            $('#directorySearch').each(function() {
                var elem = $(this);

                // Save current value of element
                elem.data('oldVal', elem.val());

                // Look for changes in the value
                elem.bind("propertychange keyup input paste", function(event){

                    // If value has changed...
                    if (elem.data('oldVal') != elem.val()) {
                        // Updated stored value
                        elem.data('oldVal', elem.val());
                        displayRelevantDirectoryListings();
                    }

                });
            });

            $( window ).load(function() {
                // if data already loaded, don't load it again
                // (could have been loaded if dropdown activated before window has fully loaded)
                if(!dataLoadInitiated){
                    loadDirectoryData();
                }
            });

            function loadDirectoryData(){

                dataLoadInitiated = true;

                // Create a flat array of all directory type ids
                var directoryTypes_all = [];
                for (var type in directory_types){
                    directoryTypes_all.push(directory_types[type]);
                }

                var directoryAPI = service_uri;
                $.ajax({
                    type: 'GET',
                    url: directoryAPI,
                    async: false,
                    data: {'types' : directoryTypes_all, 'q' : '', 'require_url' : 'true'},
                    jsonpCallback: 'azdirectory',
                    contentType: "application/json",
                    dataType: 'jsonp',
                    success: function(json) {
                        parseDirectoryData(json.matches);
                    },
                    error: function(e) {
                        $("#directoryData").html("There was an error loading directory data.  Please try again, or notify us at sitebuilderhelp@vanderbilt.edu");
                        console.log(e.message);
                    }
                });
            }

            // Called once directory data is loaded.
            // Goal:  generate the "all" listings set as fast as possible.
            // Then generate other listing sets
            function parseDirectoryData(listings){

                listingsAll = listings;

                for(var i=0; i<listings.length; i++){

                    // Labs
                    if($.inArray(directory_types.lab.toString(), listings[i].type_ids) > -1){
                        listingsLabs.push(listings[i]);
                    }

                    // Cores
                    if($.inArray(directory_types.core.toString(), listings[i].type_ids) > -1){
                        listingsCores.push(listings[i]);
                    }

                    // Centers
                    if($.inArray(directory_types.center.toString(), listings[i].type_ids) > -1){
                        listingsCenters.push(listings[i]);
                    }

                    // Offices
                    if($.inArray(directory_types.office.toString(), listings[i].type_ids) > -1){
                        listingsOffices.push(listings[i]);
                    }

                    // Departments
                    if($.inArray(directory_types.department.toString(), listings[i].type_ids) > -1){
                        listingsDepartments.push(listings[i]);
                    }

                }
            }

            // Takes into consideration the tab chosen and the search string to display the appropriate listing subset
            function displayRelevantDirectoryListings(){

                var subset = [];

                // get active tab
                var types = $(".sitenav-dropdown .directory-dropdown-parent .active .megamenu_tab").attr("data-directory-types");

                // get the appropriate subset of tabs
                if(types == "all"){
                    subset = listingsAll;
                } else if (types == "labs"){
                    subset = listingsLabs;
                } else if (types == "cores"){
                    subset = listingsCores;
                } else if (types == "centers"){
                    subset = listingsCenters;
                } else if (types == "offices"){
                    subset = listingsOffices;
                } else if (types == "departments"){
                    subset = listingsDepartments;
                }

                // further subset based on query presence
                var filtered_subset = [];
                var q = $("#directorySearch").val();
                if( q != ""){
                    q = q.toLowerCase();
                    for(var i = 0; i<subset.length; i++){

                        var name = subset[i].name;

                        var lowercasename = name.toLowerCase();
                        var matchPosition = lowercasename.indexOf(q);
                        if(matchPosition > -1){

                            // wrap the matched part of the name in bold tags
                            var oldName = subset[i].name;
                            var newName = oldName.slice(0, matchPosition) + "<b>" + oldName.slice(matchPosition,matchPosition + q.length) + "</b>"  + oldName.slice(matchPosition + q.length, oldName.length + q.length + 7);
                            subset[i].hilightedName = newName;
                            filtered_subset.push(subset[i]);
                        }

                    }
                    subset = filtered_subset;
                }

                // subset is now 100% filtered by type and query text display at will
                var markup = '<ul class="">';
                for(i = 0; i<subset.length; i++){
                    var displayName = subset[i].name;
                    if(subset[i].hilightedName && q != ""){
                        displayName = subset[i].hilightedName;
                    }
                    if(subset[i].url){
                        displayName = '<a href="'+subset[i].url+'">'+displayName+'</a>';
                    } else {
                        displayName = '<span class="directory-nolink">'+displayName+'</span></a>';
                    }
                    markup += "<li>"+displayName+"</li>"
                }
                markup += "</ul>";
                $("#directoryData").html(markup);
            }
        }
    };
}(document, Drupal, jQuery);
/* eslint-enable */
