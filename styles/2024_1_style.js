var size = 0;
var placement = 'point';

var style_2024_1 = function (feature, resolution) {
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
            color: 'rgba(240,144,141,0.5)'  // 塗りつぶしの色 (薄い赤)
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
            labelFill, placement, bufferColor,
            bufferWidth)
    })];

    return style;
};
