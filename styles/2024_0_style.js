var size = 0;
var placement = 'point';

/*
function oaza(feature, value, size, resolution, labelText,
    labelFont, labelFill, bufferColor, bufferWidth,
    placement) {
    switch (value.toString()) {
        case '浦戸桂島':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(0,0,0,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 1
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(12,215,56,0.5)'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case '浦戸野々島':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(0,0,0,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 1
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(212,56,25,0.5)'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case '浦戸石浜':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(0,0,0,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 1
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(200,29,54,0.5)'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case '浦戸寒風沢':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(0,0,0,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 1
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(198,29,216,0.5)'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'null':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(0,0,0,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 1
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(132,207,79,0.5)'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        default:
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(0,0,0,1.0)',       // 境界線の色 (黒色)
                    lineDash: null,                 // 線の種類 (null は実線)
                    lineCap: 'butt',                // 線の端の形状 (端を直角に切る)
                    lineJoin: 'miter',              // 線が交わる部分の形状 (角ばった形)
                    width: 1                        // 境界線の太さ
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(237,228,181,0.5)'  // 塗りつぶしの色 (薄いベージュ)
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
    }
};
*/



var style_2024_0 = function (feature, resolution) {
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("大字名");

    //ラベルの設定
    var labelText = "";
    if (feature.get("大字名") == null) {
        labelText = String(feature.get("小字名"));
    } else if (feature.get("丁目名") !== null) {
        labelText = String(feature.get("大字名") + feature.get("丁目名"));
    } else if (feature.get("小字名") == null) {
        labelText = String(feature.get("大字名"));
    } else {
        labelText = String(feature.get("大字名") + feature.get("小字名"));
    }

    //ラベルサイズの設定
    size = 0;
    var zoom = map.getView().getZoom();
    var fontSize;

    if (zoom >= 12 && zoom < 14.6) {
        labelText = "";
    } else if (zoom >= 14.6 && zoom < 16) {
        fontSize = zoom * 5 - 67; // 6〜13
    } else if (zoom >= 16 && zoom <= 18) {
        fontSize = 15;
    } else {
        fontSize = 15;
    }

    //ラベルスタイルの設定
    var labelFont = fontSize + "px 'Hiragino Maru Gothic Pro', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffffff";
    var bufferWidth = 2;
    var placement = 'point';

    //ポリゴンスタイルの設定
    var style = [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(0,0,0,1.0)',       // 境界線の色 (黒色)
            lineDash: null,                 // 線の種類 (null は実線)
            lineCap: 'butt',                // 線の端の形状 (端を直角に切る)
            lineJoin: 'miter',              // 線が交わる部分の形状 (角ばった形)
            width: 1.14                     // 境界線の太さ
        }),
        fill: new ol.style.Fill({
            color: 'rgba(237,228,181,0.5)'  // 塗りつぶしの色 (薄いベージュ)
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
            labelFill, placement, bufferColor,
            bufferWidth)
    })];

    return style;
};
