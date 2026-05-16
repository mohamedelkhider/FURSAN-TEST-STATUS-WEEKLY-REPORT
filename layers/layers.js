ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32638").setExtent([683015.479453, 2760069.870537, 687510.226853, 2766419.761321]);
var wms_layers = [];

var format_FURSAN_RD_0 = new ol.format.GeoJSON();
var features_FURSAN_RD_0 = format_FURSAN_RD_0.readFeatures(json_FURSAN_RD_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32638'});
var jsonSource_FURSAN_RD_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FURSAN_RD_0.addFeatures(features_FURSAN_RD_0);
var lyr_FURSAN_RD_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FURSAN_RD_0, 
                style: style_FURSAN_RD_0,
                popuplayertitle: 'FURSAN_RD',
                interactive: false,
                title: '<img src="styles/legend/FURSAN_RD_0.png" /> FURSAN_RD'
            });
var format_FURSAN02__PROJECT_NETWORKS_1 = new ol.format.GeoJSON();
var features_FURSAN02__PROJECT_NETWORKS_1 = format_FURSAN02__PROJECT_NETWORKS_1.readFeatures(json_FURSAN02__PROJECT_NETWORKS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32638'});
var jsonSource_FURSAN02__PROJECT_NETWORKS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FURSAN02__PROJECT_NETWORKS_1.addFeatures(features_FURSAN02__PROJECT_NETWORKS_1);
var lyr_FURSAN02__PROJECT_NETWORKS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FURSAN02__PROJECT_NETWORKS_1, 
                style: style_FURSAN02__PROJECT_NETWORKS_1,
                popuplayertitle: 'FURSAN02__PROJECT_NETWORKS',
                interactive: true,
    title: 'FURSAN02__PROJECT_NETWORKS<br />\
    <img src="styles/legend/FURSAN02__PROJECT_NETWORKS_1_0.png" /> IRRIGATION test completed<br />\
    <img src="styles/legend/FURSAN02__PROJECT_NETWORKS_1_1.png" /> IRRIGATION test not started<br />\
    <img src="styles/legend/FURSAN02__PROJECT_NETWORKS_1_2.png" /> Storm test completed<br />\
    <img src="styles/legend/FURSAN02__PROJECT_NETWORKS_1_3.png" /> STORM test not started<br />\
    <img src="styles/legend/FURSAN02__PROJECT_NETWORKS_1_4.png" /> WATER test completed<br />\
    <img src="styles/legend/FURSAN02__PROJECT_NETWORKS_1_5.png" /> WATER test not started<br />\
    <img src="styles/legend/FURSAN02__PROJECT_NETWORKS_1_6.png" /> <br />' });

lyr_FURSAN_RD_0.setVisible(true);lyr_FURSAN02__PROJECT_NETWORKS_1.setVisible(true);
var layersList = [lyr_FURSAN_RD_0,lyr_FURSAN02__PROJECT_NETWORKS_1];
lyr_FURSAN_RD_0.set('fieldAliases', {'ROAD_NAME': 'ROAD_NAME', 'WIDTH': 'WIDTH', });
lyr_FURSAN02__PROJECT_NETWORKS_1.set('fieldAliases', {'Test status : ': 'Test status : ', 'NETWORK:': 'NETWORK:', 'ROAD_NAME:': 'ROAD_NAME:', 'Width :': 'Width :', });
lyr_FURSAN_RD_0.set('fieldImages', {'ROAD_NAME': 'TextEdit', 'WIDTH': 'TextEdit', });
lyr_FURSAN02__PROJECT_NETWORKS_1.set('fieldImages', {'Test status : ': 'TextEdit', 'NETWORK:': 'TextEdit', 'ROAD_NAME:': 'TextEdit', 'Width :': 'TextEdit', });
lyr_FURSAN_RD_0.set('fieldLabels', {'ROAD_NAME': 'header label - visible with data', 'WIDTH': 'header label - visible with data', });
lyr_FURSAN02__PROJECT_NETWORKS_1.set('fieldLabels', {'Test status : ': 'header label - visible with data', 'NETWORK:': 'header label - visible with data', 'ROAD_NAME:': 'header label - visible with data', 'Width :': 'header label - visible with data', });
lyr_FURSAN02__PROJECT_NETWORKS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});