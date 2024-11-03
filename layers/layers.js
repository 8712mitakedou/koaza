var wms_layers = [];

var format_2024_0 = new ol.format.GeoJSON();
var features_2024_0 = format_2024_0.readFeatures(json_2024_0,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_2024_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024_0.addFeatures(features_2024_0);

var lyr_2024_0 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_2024_0,
    style: style_2024_0,
    
    interactive: true,
    title: '<img src="styles/legend/2024_0.png" /> 塩竈市2024'
});

var lyr_2020_chiri = new ol.layer.Tile({
    'title': '地理院航空写真（2020年）',
    'type': 'base',
    'opacity': 1.000000,
    
    source: new ol.source.XYZ({
attributions: ' ',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/nendophoto2020/{z}/{x}/{y}.png'
    })
});

var lyr_1984_chiri = new ol.layer.Tile({
    'title': '地理院航空写真（1984年～1986年）',
    'type': 'base',
    'opacity': 1.000000,
    
    source: new ol.source.XYZ({
attributions: ' ',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/gazo3/{z}/{x}/{y}.jpg'
    })
});

var lyr_1974_chiri = new ol.layer.Tile({
    'title': '地理院航空写真（1974年～1978年）',
    'type': 'base',
    'opacity': 1.000000,
    
    source: new ol.source.XYZ({
attributions: ' ',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/gazo1/{z}/{x}/{y}.jpg'
    })
});

var lyr_1961_chiri = new ol.layer.Tile({
    'title': '地理院航空写真（1961年～1969年）',
    'type': 'base',
    'opacity': 1.000000,
    
    source: new ol.source.XYZ({
attributions: ' ',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/ort_old10/{z}/{x}/{y}.png'
    })
});

var lyr_default_chiri = new ol.layer.Tile({
    'title': '地理院標準地図',
    'type': 'base',
    'opacity': 1.000000,
    
    source: new ol.source.XYZ({
attributions: ' ',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'
    })
});

lyr_default_chiri.setVisible(false); lyr_1961_chiri.setVisible(false); lyr_1974_chiri.setVisible(false); lyr_1984_chiri.setVisible(false); lyr_2020_chiri.setVisible(true); lyr_2024_0.setVisible(true);
var layersList = [lyr_default_chiri, lyr_1961_chiri, lyr_1974_chiri, lyr_1984_chiri, lyr_2020_chiri, lyr_2024_0];
lyr_2024_0.set('fieldAliases', { '市区町村コード': '市区町村コード', '大字コード': '大字コード', '丁目コード': '丁目コード', '小字コード': '小字コード', '予備コード': '予備コード', '市区町村名': '市区町村名', '大字名': '大字名', '丁目名': '丁目名', '小字名': '小字名', '予備名': '予備名', });
lyr_2024_0.set('fieldImages', { '市区町村コード': 'TextEdit', '大字コード': 'TextEdit', '丁目コード': 'TextEdit', '小字コード': 'TextEdit', '予備コード': 'TextEdit', '市区町村名': 'TextEdit', '大字名': 'TextEdit', '丁目名': 'TextEdit', '小字名': 'TextEdit', '予備名': 'TextEdit', });
lyr_2024_0.set('fieldLabels', { '市区町村コード': 'hidden field', '大字コード': 'hidden field', '丁目コード': 'hidden field', '小字コード': 'hidden field', '予備コード': 'hidden field', '市区町村名': 'hidden field', '大字名': 'inline label', '丁目名': 'inline label', '小字名': 'inline label', '予備名': 'hidden field', });
lyr_2024_0.on('precompose', function (evt) {
    evt.context.globalCompositeOperation = 'normal';
});