!function(a){function b(){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://apis.google.com/js/platform.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}function c(){function b(c,e){var g={origin:c,destination:eventPlace,travelMode:google.maps.TravelMode[e]};k.route(g,function(g,i){if(i==google.maps.DirectionsStatus.OK){d.setMapTypeId("zoomed"),f.setMap(d),f.setDirections(g);var j=g.routes[0].legs[0];m(j.start_location),m(j.end_location),a("#distance").text(j.distance.text),a("#estimateTime").text(j.duration.text),a("#mode-select").val(e),a("#mode").removeClass("hidden");var k=a("#mode-icon use").attr("xlink:href");k=k.substring(0,k.indexOf("#")+1)+"icon-"+e.toLowerCase(),a("#mode-icon use").attr("xlink:href",k)}else if(i!=google.maps.DirectionsStatus.OK&&"DRIVING"!=e)b(c,"DRIVING");else{var l=h.getPath();l.push(c),l.push(eventPlace),m(c),m(eventPlace);var n=new google.maps.LatLngBounds;n.extend(c),n.extend(eventPlace),d.fitBounds(n),h.setMap(d);var o=Math.round(google.maps.geometry.spherical.computeDistanceBetween(c,eventPlace)/1e3);a("#distance").text(o+" km"),a("#estimateTime").text(""),a("#find-flight").removeClass("hidden"),a("#mode").addClass("hidden")}}),n(),a("#find-way").addClass("location-active"),p(c),a("#find-way h3").removeClass("fadeInUp").addClass("fadeOutDown")}function c(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(a){i=new google.maps.LatLng(a.coords.latitude,a.coords.longitude),b(i,"TRANSIT")})}function m(a){var b=new google.maps.Marker({position:a,map:d,icon:icon});j.push(b)}function n(){for(var a=0;a<j.length;a++)j[a].setMap(null);j=[]}function o(a){for(var b=d.getZoom(),c=50,e=Math.abs(a-b),f=a>b?1:-1,g=0;e>g;g++)setTimeout(function(){b+=f,d.setZoom(b)},(g+1)*c)}function p(b){g.geocode({latLng:b},function(b,c){if(c==google.maps.GeocoderStatus.OK&&b[1]){var d=b[1].address_components;a.each(d,function(b,c){return"locality"==c.types[0]?(a("#result-name").text(c.long_name),!1):void 0})}})}f=new google.maps.DirectionsRenderer({suppressMarkers:!0}),g=new google.maps.Geocoder,h=new google.maps.Polyline({strokeColor:"#03a9f4",strokeOpacity:1,strokeWeight:2});var q=[{stylers:[{lightness:40},{visibility:"on"},{gamma:.9},{weight:.4}]},{elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"water",stylers:[{color:"#5dc7ff"}]},{featureType:"road",stylers:[{visibility:"off"}]}],r=[{stylers:[{lightness:40},{visibility:"on"},{gamma:1.1},{weight:.9}]},{elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{color:"#5dc7ff"}]},{featureType:"road",stylers:[{visibility:"on"}]},{featureType:"road",elementType:"labels",stylers:[{saturation:-30}]}],s={zoom:17,minZoom:2,scrollwheel:!1,panControl:!1,draggable:!0,zoomControl:!1,zoomControlOptions:{position:google.maps.ControlPosition.RIGHT_TOP},scaleControl:!1,mapTypeControl:!1,streetViewControl:!1,center:centerMap,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,l]},mapTypeId:l};a(window).width()<768&&(s.center=mobileCenterMap),"logistics"==googleMaps&&(s.zoom=5,s.zoomControl=!0),d=new google.maps.Map(document.getElementById("canvas-map"),s);var t=new google.maps.Marker({position:eventPlace,animation:google.maps.Animation.DROP,icon:icon,map:d});j.push(t);var u={name:"Default Style"},v={name:"Zoomed Style"},w=new google.maps.StyledMapType(q,u),x=new google.maps.StyledMapType(r,v);if(d.mapTypes.set("default",w),d.mapTypes.set("zoomed",x),"logistics"===googleMaps){d.setMapTypeId("default");var y=document.getElementById("location-input");e=new google.maps.places.Autocomplete(y),google.maps.event.addListener(e,"place_changed",function(){t.setVisible(!1);var a=e.getPlace();if("undefined"!=a.geometry&&a.geometry){var c="";a.address_components&&(c=[a.address_components[0]&&a.address_components[0].short_name||"",a.address_components[1]&&a.address_components[1].short_name||"",a.address_components[2]&&a.address_components[2].short_name||""].join(" ")),g.geocode({address:c},function(a,c){c==google.maps.GeocoderStatus.OK?(i=a[0].geometry.location,b(i,"TRANSIT")):alert("Geocode was not successful for the following reason: "+c)})}})}else d.setMapTypeId("zoomed");a("#mode-select").change(function(){var c=a(this).val();b(i,c)}),a("#direction-locate").click(c),a("#direction-cancel").click(function(){a("#find-way").removeClass("location-active"),a("#location-input").val(""),a("#find-flight").addClass("hidden"),n(),f.setMap(null),h.setMap(null),d.setMapTypeId("default"),d.panTo(eventPlace),d.setCenter(a(window).width()<768?mobileCenterMap:centerMap),m(eventPlace),o(5),a("#find-way h3").removeClass("fadeOutDown").addClass("fadeInUp")}),"undefined"!=typeof autoDirectionEnabled&&1==autoDirectionEnabled&&c()}if(a(document).ready(function(){function c(a){var b,c,d,e,f;return c=/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,b=a.replace(c,'<a href="$1" target="_blank">$1</a>'),d=/(^|[^\/])(www\.[\S]+(\b|$))/gim,b=b.replace(d,'$1<a href="http://$2" target="_blank">$2</a>'),e=/#(\S*)/g,b=b.replace(e,'<a href="https://twitter.com/search?q=%23$1" target="_blank">#$1</a>'),f=/\B@([\w-]+)/gm,b=b.replace(f,'<a href="https://twitter.com/$1" target="_blank">@$1</a>')}function d(){function b(){var b=++d%c.length;a(c.get(b-1)).addClass("hidden"),a(c.get(b)).removeClass("hidden")}var c=a("#tweets").find(".tweet"),d=0;a(c.get(0)).removeClass("hidden");setInterval(b,5e3)}Waves.displayEffect(),a(window).load(function(){a("#st-container").removeClass("disable-scrolling"),a("#loading-animation").fadeOut(),a("#preloader").delay(350).fadeOut(800),b(),equalheight(".same-height")}),a(window).width()>1500&&a(".effect-wrapper").addClass("col-lg-3"),a(window).width()<768&&(a(".animated").removeClass("animated").removeClass("hiding"),a(".stat span").removeClass("timer"),a(".timeslot-label").addClass("stick-label")),a(window).height()<512&&a("#bottom-navlinks").removeClass("bottom-navlinks").addClass("bottom-navlinks-small"),a(window).scrollTop()>=100&&(a("#top-header").addClass("after-scroll"),a("#logo-header .logo").removeClass("logo-light").addClass("logo-dark")),a(window).scroll(function(){var b=a(this).scrollTop(),c=a("#top-header"),d=a("#logo-header .logo"),e=a(".right-nav-button"),f=c.height()+a(".track-header").height();b>=100?(c.addClass("after-scroll"),d.removeClass("logo-light").addClass("logo-dark")):(c.removeClass("after-scroll"),d.removeClass("logo-dark").addClass("logo-light")),b>=a(".top-section").height()&&a(window).width()>767?e.removeClass("right-nav-button-hidden"):b<a(".top-section").height()&&a(window).width()>767&&e.addClass("right-nav-button-hidden"),a(".slot").each(function(){var c=a(this).offset().top-b,d=f+a(this).find(".slot-title").height();d>=c&&c>=0&&a(".track-header.sticky").find(".slot-detail").html(a(this).data("slotDetail"))})}),a(window).resize(function(){a(window).width()>1500?a(".effect-wrapper").addClass("col-lg-3"):a(".effect-wrapper").removeClass("col-lg-3"),a(window).width()<768?(a(".same-height").css("height","100%"),a(".timeslot-label").addClass("stick-label")):(a(".timeslot-label").removeClass("stick-label"),e.hasClass("st-menu-open")&&(e.removeClass("st-menu-open"),a("body").css("overflow","auto")),equalheight(".same-height")),a(window).height()<512?(a(".st-menu").addClass("scrollable"),a("#bottom-navlinks").removeClass("bottom-navlinks").addClass("bottom-navlinks-small")):(a(".st-menu").removeClass("scrollable"),a("#bottom-navlinks").removeClass("bottom-navlinks-small").addClass("bottom-navlinks"))}),a(function(){a("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var b=a(this.hash);if(b=b.length?b:a("[name="+this.hash.slice(1)+"]"),b.length)return a("html,body").animate({scrollTop:b.offset().top},1e3),!1}})}),a(function(){a("a[href=#]").click(function(){event.preventDefault()})}),a(function(){if(window.location.href.indexOf("schedule")>-1&&window.location.hash){var b=window.location.hash;a(b).click()}}),a(function(){var b,c,d,e,f,g;for(g=a(".appear-animation"),e=0,f=g.length;f>e;e++)c=g[e],d=c.offsetLeft+c.offsetTop,b=d/1e3,a(c).css("transition-delay",""+.47*b+"s"),a(c).css("transition-duration","0.2s")}),a(".appear-animation-trigger").appear(function(){setTimeout(function(){a(".appear-animation-trigger").parent("div").find(".appear-animation").addClass("visible")},1e3)}),a(window).width()>=768&&a(".animated").appear(function(){var b=a(this),c=b.data("animation"),d=b.data("delay");d?setTimeout(function(){b.addClass(c+" visible"),b.removeClass("hiding"),b.hasClass("counter")&&b.find(".timer").countTo()},d):(b.addClass(c+" visible"),b.removeClass("hiding"),b.hasClass("counter")&&b.find(".timer").countTo())},{accY:-150}),equalheight=function(b){var c,d=0,e=0,f=new Array;a(b).each(function(){if(c=a(this),a(c).height("auto"),topPostion=c.position().top,e!=topPostion){for(currentDiv=0;currentDiv<f.length;currentDiv++)f[currentDiv].height(d);f.length=0,e=topPostion,d=c.height(),f.push(c)}else f.push(c),d=d<c.height()?c.height():d;for(currentDiv=0;currentDiv<f.length;currentDiv++)f[currentDiv].height(d)})};var e=a(".st-container");a("#menu-trigger").click(function(a){a.stopPropagation(),e.toggleClass("st-menu-open")}),a(".st-pusher").click(function(a){e.hasClass("st-menu-open")&&a.pageX>256&&e.removeClass("st-menu-open")}),a(".track-header").each(function(){for(var b,c=a(this).closest(".schedule-table").find(".slot").first();void 0===b;)b=c.data("slotDetail"),c=c.next();a(this).find(".slot-detail").html(b)}),a("#post-section .post-body p").each(function(){if(a(this).find(".feature-image").length){var b=a(this).find(".feature-image").prop("src");a("#top-section").css("background-image","url("+b+")").addClass("enable-overlay")}}),a(".slider").each(function(){a(this).find(".slider-item").first().addClass("slider-current-item").removeClass("hidden"),a(this).find(".slider-item").length>1&&a(this).closest(".speaker-item").find(".slider-next-item").removeClass("hidden")}),a(".slider-next-item").click(function(){var b=a(this).closest("div"),c=b.find(".slider-current-item").next();c.length?(c.addClass("slider-current-item").removeClass("hidden"),b.find(".slider-current-item").first().removeClass("slider-current-item").addClass("hidden")):(b.find(".slider-item").first().addClass("slider-current-item").removeClass("hidden"),b.find(".slider-current-item").last().removeClass("slider-current-item").addClass("hidden"))}),a(".modal").on("hidden.bs.modal",function(){var b=a(this).find("iframe");b.attr("src",b.attr("src"))}),a(".slot").click(function(){location.hash=a(this).attr("id")}),"undefined"!=typeof twitterFeedUrl&&a.getJSON(twitterFeedUrl,function(b){a.each(b,function(b,d){var e='<div class="tweet animated fadeInUp hidden"><p class="tweet-text">'+c(d.text)+'</p><p class="tweet-meta">by <a href="https://twitter.com/'+d.user.screen_name+'" target="_blank">@'+d.user.screen_name+"</a></p></div>";a("#tweets").append(e)}),d()})}),"undefined"!=typeof staticGoogleMaps&&a("#canvas-map").addClass("image-section").css("background-image","url(http://maps.googleapis.com/maps/api/staticmap?zoom=17&center="+mobileCenterMapCoordinates+"&size="+a(window).width()+"x700&scale=2&language=en&markers=icon:"+icon+"|"+eventPlaceCoordinates+"&maptype=roadmap&style=visibility:on|lightness:40|gamma:1.1|weight:0.9&style=element:labels|visibility:off&style=feature:water|hue:0x0066ff&style=feature:road|visibility:on&style=feature:road|element:labels|saturation:-30)"),"undefined"!=typeof googleMaps){var d,e,f,g,h,i,j=[],k=new google.maps.DirectionsService,l="custom_style";google.maps.event.addDomListener(window,"load",c)}}(jQuery),$(document).ready(function(){$("#mc-embedded-subscribe").click(function(a){a.preventDefault();var b=!0;$("#mc-embedded-subscribe-form input[required], #mc-embedded-subscribe-form textarea[required]").each(function(){$(this).css("background",""),$.trim($(this).val())||($(this).css("border-color","#DE5059"),$("#email-border").css("border-color","#DE5059"),b=!1);var a=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;"email"!=$(this).attr("type")||a.test($.trim($(this).val()))||($("#email-border").css("border-color","#DE5059"),b=!1)}),b&&($.ajax({url:"//formspree.io/kontakt@dalkarlsatour.se",method:"POST",data:$("form").serialize(),dataType:"json"}),$("#mc-embedded-subscribe-form  input[required], #mc-embedded-subscribe-form textarea[required]").val(""),$("#mc-embedded-subscribe-form").slideUp(),$(".subscribe-info").text("Tack för ditt Meddelande!"))}),$("#mc-embedded-subscribe-form  input[required], #mc-embedded-subscribe-form textarea[required]").keyup(function(){$(this).css("border-color",""),$("#email-border").css("border-color","")})});