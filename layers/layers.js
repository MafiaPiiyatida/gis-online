ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32647").setExtent([381504.207612, 1579370.651020, 919610.370240, 1843514.004573]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: "ขอบเขตอำเภอ",
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> ขอบเขตอำเภอ'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: "ถนนสายหลัก",
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> ถนนสายหลัก'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: "เส้นทางน้ำ",
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> เส้นทางน้ำ'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr__1,lyr__2,lyr__3];
lyr__1.set('fieldAliases', {'AP_IDN': 'AP_IDN', 'AP_CODE': 'AP_CODE', 'AP_TN': 'AP_TN', 'AP_EN': 'AP_EN', 'PV_IDN': 'PV_IDN', 'PV_CODE': 'PV_CODE', 'PV_TN': 'PV_TN', 'PV_EN': 'PV_EN', 'RE_NESDB': 'RE_NESDB', 'RE_ROYIN': 'RE_ROYIN', 'AreaShape': 'AreaShape', 'ADMIN_TYPE': 'ADMIN_TYPE', 'โครงการพัฒนา_2562': 'โครงการพัฒนา_2562', 'โครงการพัฒนา_2563': 'โครงการพัฒนา_2563', 'โครงการพัฒนา_2564': 'โครงการพัฒนา_2564', });
lyr__2.set('fieldAliases', {'RDLNNUM': 'RDLNNUM', 'NICKNAME': 'NICKNAME', 'RDLNNAMT': 'RDLNNAMT', 'RDLNNAME': 'RDLNNAME', 'BRDNAMT': 'BRDNAMT', 'BRDNAME': 'BRDNAME', 'VERSION': 'VERSION', 'SYMBOL': 'SYMBOL', 'RDLNCLASS': 'RDLNCLASS', 'DIRECTION': 'DIRECTION', 'SOURCETHM': 'SOURCETHM', 'LENGTH': 'LENGTH', });
lyr__3.set('fieldAliases', {'Id': 'Id', 'Type': 'Type', 'Order_': 'Order_', 'Name': 'Name', 'Shape_Leng': 'Shape_Leng', });
lyr__1.set('fieldImages', {'AP_IDN': 'Range', 'AP_CODE': 'TextEdit', 'AP_TN': 'TextEdit', 'AP_EN': 'TextEdit', 'PV_IDN': 'Range', 'PV_CODE': 'TextEdit', 'PV_TN': 'TextEdit', 'PV_EN': 'TextEdit', 'RE_NESDB': 'TextEdit', 'RE_ROYIN': 'TextEdit', 'AreaShape': 'TextEdit', 'ADMIN_TYPE': 'Range', 'โครงการพัฒนา_2562': 'Range', 'โครงการพัฒนา_2563': 'Range', 'โครงการพัฒนา_2564': 'Range', });
lyr__2.set('fieldImages', {'RDLNNUM': 'TextEdit', 'NICKNAME': 'TextEdit', 'RDLNNAMT': 'TextEdit', 'RDLNNAME': 'TextEdit', 'BRDNAMT': 'TextEdit', 'BRDNAME': 'TextEdit', 'VERSION': 'TextEdit', 'SYMBOL': 'Range', 'RDLNCLASS': 'Range', 'DIRECTION': 'Range', 'SOURCETHM': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr__3.set('fieldImages', {'Id': 'TextEdit', 'Type': 'TextEdit', 'Order_': 'TextEdit', 'Name': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr__1.set('fieldLabels', {'AP_IDN': 'no label', 'AP_CODE': 'no label', 'AP_TN': 'no label', 'AP_EN': 'no label', 'PV_IDN': 'no label', 'PV_CODE': 'no label', 'PV_TN': 'no label', 'PV_EN': 'no label', 'RE_NESDB': 'no label', 'RE_ROYIN': 'no label', 'AreaShape': 'no label', 'ADMIN_TYPE': 'no label', 'โครงการพัฒนา_2562': 'no label', 'โครงการพัฒนา_2563': 'hidden field', 'โครงการพัฒนา_2564': 'hidden field', });
lyr__2.set('fieldLabels', {'RDLNNUM': 'no label', 'NICKNAME': 'no label', 'RDLNNAMT': 'no label', 'RDLNNAME': 'no label', 'BRDNAMT': 'no label', 'BRDNAME': 'no label', 'VERSION': 'no label', 'SYMBOL': 'no label', 'RDLNCLASS': 'no label', 'DIRECTION': 'no label', 'SOURCETHM': 'no label', 'LENGTH': 'no label', });
lyr__3.set('fieldLabels', {'Id': 'no label', 'Type': 'no label', 'Order_': 'no label', 'Name': 'no label', 'Shape_Leng': 'no label', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});