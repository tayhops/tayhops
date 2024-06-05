
var southWest = L.latLng(-60, 90);
var northEast = L.latLng(10, 200);

var maxBoundArea = L.latLngBounds(southWest, northEast);

const mmap = L.map('map', {
    zoomControl: true,
    maxZoom: 20,
    minZoom: 3,
    autoPan: false,
    maxBounds: maxBoundArea
}).setView([-28.34, 146.48], 4)
// const autolinker = new Autolinker({ truncate: { length: 30, location: 'smart' } });

function removeEmptyRowsFromPopupContent(content, feature) {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    var rows = tempDiv.querySelectorAll('tr');
    for (var i = 0; i < rows.length; i++) {
        var td = rows[i].querySelector('td.visible-with-data');
        var key = td ? td.id : '';
        if (td && td.classList.contains('visible-with-data') && feature.properties[key] == null) {
            rows[i].parentNode.removeChild(rows[i]);
        }
    }
    return tempDiv.innerHTML;
}

function pop_schools_2(feature, layer) {
    var popupContent = '<table>\
                        <tr>\
                            <th scope="row">Name</th>\
                            <td>' + (feature.properties['Name'] !== null ? feature.properties['Name'].toLocaleString() : '') + '</td>\
                        </tr>\
                        <tr>\
                            <th scope="row">Street Add</th>\
                            <td>' + (feature.properties['Street Add'] !== null ? feature.properties['Street Add'].toLocaleString() : '') + '</td>\
                        </tr>\
                        <tr>\
                            <td></td>\
                            <td>' + (feature.properties['State'] !== null ? feature.properties['State'].toLocaleString() : '') + '</td>\
                        </tr>\
                        <tr>\
                            <td></td>\
                            <td>' + (feature.properties['Country'] !== null ? feature.properties['Country'].toLocaleString() : '') + '</td>\
                        </tr>\
                        <tr>\
                            <th scope="row">Type</th>\
                            <td>' + (feature.properties['Type'] !== null ? feature.properties['Type'].toLocaleString() : '') + '</td>\
                        </tr>'
    if (feature.properties['distancewalkKm'] && feature.properties['distancewalkKm'] > 0)
        popupContent += '<tr>\
                            <th scope="row">Cinema Nam</th>\
                            <td>' + (feature.properties['Cinema Nam'] !== null ? feature.properties['Cinema Nam'].toLocaleString() : '') + '</td>\
                        </tr>\
                        <tr>\
                            <th scope="row">Cinema circuit</th>\
                            <td>' + (feature.properties['Circuit'] !== null ? feature.properties['Circuit'].toLocaleString() : '') + '</td>\
                        </tr><tr>\
                            <th scope="row">Distance to cinema</th>\
                            <td>' + (feature.properties['distancewalkKm'] !== null ? feature.properties['distancewalkKm'].toLocaleString() + ' km.' : '') + '</td>\
                        </tr></table>';
    layer.bindPopup(popupContent, { maxHeight: 400 });
    var popup = layer.getPopup();
    var content = popup.getContent();
    var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
    popup.setContent(updatedContent);
}

function pop_churches_2(feature, layer) {
    var popupContent = '<table>\
                        <tr>\
                            <th scope="row">Name</th>\
                            <td>' + (feature.properties['Name'] !== null ? feature.properties['Name'].toLocaleString() : '') + '</td>\
                        </tr>\
                        <tr>\
                            <th scope="row">Street Add</th>\
                            <td>' + (feature.properties['Street Add'] !== null ? feature.properties['Street Add'].toLocaleString() : '') + '</td>\
                        </tr>\
                        <tr>\
                            <td></td>\
                            <td>' + (feature.properties['State'] !== null ? feature.properties['State'].toLocaleString() : '') + '</td>\
                        </tr>\
                        <tr>\
                            <td></td>\
                            <td>' + (feature.properties['Country'] !== null ? feature.properties['Country'].toLocaleString() : '') + '</td>\
                        </tr>\
                        <tr>\
                            <th scope="row">Type</th>\
                            <td>' + (feature.properties['Type'] !== null ? feature.properties['Type'].toLocaleString() : '') + '</td>\
                        </tr>'
    if (feature.properties['distancewalkKm'] && feature.properties['distancewalkKm'] > 0)
        popupContent += '<tr>\
                            <th scope="row">Cinema Nam</th>\
                            <td>' + (feature.properties['Cinema Nam'] !== null ? feature.properties['Cinema Nam'].toLocaleString() : '') + '</td>\
                        </tr>\
                        <tr>\
                            <th scope="row">Cinema circuit</th>\
                            <td>' + (feature.properties['Circuit'] !== null ? feature.properties['Circuit'].toLocaleString() : '') + '</td>\
                        </tr><tr>\
                            <th scope="row">Distance to cinema</th>\
                            <td>' + (feature.properties['distancewalkKm'] !== null ? feature.properties['distancewalkKm'].toLocaleString() + ' km.' : '') + '</td>\
                        </tr></table>';
    layer.bindPopup(popupContent, { maxHeight: 400 });
    var popup = layer.getPopup();
    var content = popup.getContent();
    var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
    popup.setContent(updatedContent);
}


function pop_cinemascinemadata_1(feature, layer) {
    var popupContent = '<table>\
                        <tr>\
                            <th scope="row">Cinema Name</th>\
                            <td>' + (feature.properties['Name'] !== null ? feature.properties['Name'].toLocaleString() : '') + '</td>\
                        </tr>\
                        <tr>\
                            <th scope="row">Circuit</th>\
                            <td>' + (feature.properties['Circuit'] !== null ? feature.properties['Circuit'].toLocaleString() : '') + '</td>\
                        </tr>\
                        <tr>\
                            <th scope="row">City</th>\
                            <td>' + (feature.properties['City'] !== null ? feature.properties['City'].toLocaleString() : '') + '</td>\
                        </tr>\
                        <tr>\
                            <td colspan="2">' + (feature.properties['Region'] !== null ? feature.properties['Region'].toLocaleString() : '') + '</td>\
                        </tr>\
                        <tr>\
                            <td colspan="2">' + (feature.properties['State'] !== null ? feature.properties['State'].toLocaleString() : '') + '</td>\
                        </tr>\
                        <tr>\
                            <th scope="row">Street Number & Name</th>\
                            <td>' + ((feature.properties['Street Number & Name'] !== null && feature.properties['Street Number & Name']) ? feature.properties['Street Number & Name'].toLocaleString() : '') + '</td>\
                        </tr>\
                        <tr>\
                            <th scope="row">Country</th>\
                            <td>' + (feature.properties['Country'] !== null ? feature.properties['Country'].toLocaleString() : '') + '</td>\
                        </tr>\
                    </table>';
    layer.bindPopup(popupContent, { maxHeight: 400 });
    var popup = layer.getPopup();
    var content = popup.getContent();
    var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
    popup.setContent(updatedContent);
}

$(document).ready(function () {
    var hash = new L.Hash(mmap);
    mmap.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');


    var schoolIcon = L.icon({
        iconUrl: 'images/schools.png',
        iconSize: [25, 32],
        iconAnchor: [12, 32],
        shadowUrl: null,
        popupAnchor: [0, -32]
    });

    var cinemaIcon = L.icon({
        iconUrl: 'images/movies.png',
        iconSize: [25, 32],
        iconAnchor: [12, 32],
        shadowUrl: null,
        popupAnchor: [0, -32]
    });

    var churchIcon = L.icon({
        iconUrl: 'images/church.png',
        iconSize: [25, 32],
        iconAnchor: [12, 32],
        shadowUrl: null,
        popupAnchor: [0, -32]
    });
    document.querySelector(".leaflet-popup-pane").addEventListener("load", function (event) {
        var tagName = event.target.tagName,
            popup = mmap._popup;
        // Also check if flag is already set.
        if (tagName === "IMG" && popup && !popup._updated) {
            popup._updated = true; // Set flag to prevent looping.
            popup.update();
        }
    }, true);
    var bounds_group = new L.featureGroup([]);
    function setBounds() {
        // if (bounds_group.getLayers().length) {
        //     mmap.fitBounds(bounds_group.getBounds());
        // }
        // map.setMaxBounds(map.getBounds());
    }
    mmap.createPane('pane_OpenStreetMap_0');
    mmap.getPane('pane_OpenStreetMap_0').style.zIndex = 400;
    var osm_layer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        pane: 'pane_OpenStreetMap_0',
        opacity: 1.0,
        attribution: '',
        minZoom: 1,
        maxZoom: 20,
        minNativeZoom: 0,
        maxNativeZoom: 19
    });
    osm_layer;
    mmap.addLayer(osm_layer);

    // function style_cinemascinemadata_1_0() {
    //     return {
    //         pane: 'pane_cinemascinemadata_1',
    //         radius: 4.0,
    //         opacity: 1,
    //         color: 'rgba(35,35,35,1.0)',
    //         dashArray: '',
    //         lineCap: 'butt',
    //         lineJoin: 'miter',
    //         weight: 1,
    //         fill: true,
    //         fillOpacity: 1,
    //         fillColor: 'rgba(183,72,75,1.0)',
    //         interactive: true,
    //     }
    // }
    mmap.createPane('pane_cinemascinemadata_1');
    mmap.getPane('pane_cinemascinemadata_1').style.zIndex = 401;
    mmap.getPane('pane_cinemascinemadata_1').style['mix-blend-mode'] = 'normal';
    var cinemas_layer = new L.geoJson(json_cinemascinemadata_1, {
        attribution: '',
        interactive: true,
        dataVar: 'json_cinemascinemadata_1',
        layerName: 'layer_cinemascinemadata_1',
        pane: 'pane_cinemascinemadata_1',
        onEachFeature: pop_cinemascinemadata_1,
        pointToLayer: function (feature, latlng) {
            // var context = {
            //     feature: feature,
            //     variables: {}
            // };
            return new L.Marker(latlng, { icon: cinemaIcon, 
                searchTerm: feature["Retail Outlet Name"]+(feature["Zip"] ? ', '+feature["Zip"] : '')});
        },
    });

    mmap.addLayer(cinemas_layer);

    mmap.createPane('pane_schools_2');
    mmap.getPane('pane_schools_2').style.zIndex = 402;
    mmap.getPane('pane_schools_2').style['mix-blend-mode'] = 'normal';
    var schools_layer = new L.geoJson(json_schools_2, {
        attribution: '',
        interactive: true,
        dataVar: 'json_schools_2',
        layerName: 'layer_schools_2',
        pane: 'pane_schools_2',
        onEachFeature: pop_schools_2,
        pointToLayer: function (feature, latlng) {
            return new L.Marker(latlng, { icon: schoolIcon });
        },
    });
    bounds_group.addLayer(schools_layer);
    mmap.addLayer(schools_layer);

    mmap.createPane('pane_churches_2');
    mmap.getPane('pane_churches_2').style.zIndex = 403;
    mmap.getPane('pane_churches_2').style['mix-blend-mode'] = 'normal';
    var churches_layer = new L.geoJson(json_churches_2, {
        attribution: '',
        interactive: true,
        dataVar: 'json_churches_2',
        layerName: 'layer_churches_2',
        pane: 'pane_churches_2',
        onEachFeature: pop_churches_2,
        pointToLayer: function (feature, latlng) {
            return new L.Marker(latlng, { icon: churchIcon });
        },
    });
    bounds_group.addLayer(churches_layer);
    mmap.addLayer(churches_layer);

    // setBounds();
    searchControl = new L.Control.Search({
        layer: L.layerGroup([schools_layer, churches_layer, cinemas_layer]),
        initial: false,
        hideMarkerOnCollapse: true,
        propertyName: 'Name',
        // --- Add the following options ---
        moveToLocation: function(latlng, title, map) {
            //map.fitBounds( latlng.layer.getBounds() );
            // var zoom = map.getBoundsZoom(latlng.layer.getBounds());
            map.setView(latlng, 14); // access the zoom
        },
    });
    
    searchControl.on('search:locationfound', function(e) {
        // e.layer.setStyle({fillColor: '#ffff00'});
        mmap.setView(e.latlng,15);
        if(e.layer._popup)
            e.layer.openPopup();
    });
    mmap.addControl(searchControl);

    L.control.layers({}, { 'Cinemas': cinemas_layer, 'Schools': schools_layer, 'Churches': churches_layer }, { position: 'topright' }).addTo(mmap);

});