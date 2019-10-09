//define the icons we will use to place on the map to indicate locations
      var bigIcon = L.icon ({
       iconUrl: 'big.png',                
       iconSize: [100,100],
       iconAnchor: [30.072222, 31.275556],
       popupAnchor: [-3, -76]
    });
      
      var mediumIcon = L.icon ({
       iconUrl: 'medium.png',                
       iconSize: [50,50],
       iconAnchor: [30.072222, 31.275556],
       popupAnchor: [-3, -76]
    });

      var smallIcon = L.icon ({
       iconUrl: 'small.png',                
       iconSize: [32,37],
       iconAnchor: [30.072222, 31.275556],
       popupAnchor: [-3, -76]
    });

//define the layer groups (overlays) for groups of schools based on size and only show them when they are clicked from the display panel
// see tutorial at https://leafletjs.com/examples/layers-control/
var bigSchoolsGroup = L.layerGroup();
var mediumSchoolsGroup = L.layerGroup();
var smallSchoolsGroup = L.layerGroup();
	    
//define each school with its location, information text, and add to layer group
var schoolOne = L.marker([59.9134, 10.8418], {icon: bigIcon});
schoolOne.bindPopup ("Hello this is a school.");
schoolOne.addTo(bigSchoolsGroup);

var schoolTwo = L.marker([59.7441, 10.2045], {icon: mediumIcon});
schoolTwo.bindPopup ("Hello this is a school as well but it is a little smaller.");
schoolTwo.addTo(mediumSchoolsGroup); 
	    
var schoolThree = L.marker([59.9560, 11.0504], {icon: smallIcon});
schoolThree.bindPopup ("Hello this is a school but it is the smallest of the schools. <br /><br /> <a href='http://en.wikipedia.org/wiki/Great_Pyramid_of_Giza' target='_newtab'> Wikipedia </a>");
schoolThree.addTo(smallSchoolsGroup); 

// define the map and set its location via ([latitude, longitude], map zoom)
var mymap = L.map('mapid', {layers:[bigSchoolsGroup,mediumSchoolsGroup,smallSchoolsGroup]}).setView([59.9139, 10.7522], 9); 
    
//access the MapBox maps API, with generated API key/access token from Erin's MapBox account
    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXJpdWtyaXN0ZW5lIiwiYSI6ImNrMWFlZDAzMDBjODQzZHBhd2kxaGJndGoifQ.qtMgz7G3f0Ptwawi3Ws_Ww', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18.5,
    id: 'your.mapbox.project.id',
    accessToken: 'pk.eyJ1IjoiZXJpdWtyaXN0ZW5lIiwiYSI6ImNrMWFlZDAzMDBjODQzZHBhd2kxaGJndGoifQ.qtMgz7G3f0Ptwawi3Ws_Ww'
}).addTo(mymap);
	 
//create the legend of each group of schools as overlay list with checkboxes
var overlayMaps = {
"Big Schools": bigSchoolsGroup,
"Medium Schools": mediumSchoolsGroup,
"Small Schools": smallSchoolsGroup
}

//add the groups to the map
L.control.layers(null, overlayMaps, {collapsed: false}).addTo(mymap);   

//make the Viken polygon outline	
var polygonViken = L.polygon([
[58.906781, 10.630442],
[58.951661, 10.943571],
[58.998803, 11.096762],
[59.082769, 11.152784],
[59.118467, 11.345356],
[58.996850, 11.470123],
[58.908066, 11.479060],
[58.925068, 11.645197],
[59.088202, 11.762990],
[59.245838, 11.807434],
[59.598364, 11.687215],
[59.662732, 11.840459],
[59.700196, 11.873713],
[59.699407, 11.930102],
[59.836554, 11.836793],
[60.054775, 11.816504],
[60.145765, 11.605313],
[60.269007, 11.598262],
[60.448316, 11.356730],
[60.512787, 11.205235],
[60.569624, 11.207218],
[60.608003, 11.144596],
[60.523547, 11.088729],
[60.479338, 10.910397],
[60.486551, 10.802516],
[60.517890, 10.716755],
[60.435473, 10.680172],
[60.359231, 10.927617],
[60.326309, 10.661695],
[60.308287, 10.279323],
[60.525895, 10.146643],
[60.634635, 9.919132],
[60.603707, 9.945787],
[60.579678, 9.837820],
[60.458456, 9.819095],
[60.500502, 9.617894],
[60.540183, 9.604453],
[60.532478, 9.504040],
[60.584290, 9.417073],
[60.605880, 9.434355],
[60.633827, 9.361151],
[60.689841, 9.316203],
[60.730391, 9.334986],
[60.761458, 9.283700],
[60.863419, 8.921587],
[60.897540, 8.886518],
[60.953083, 8.624512],
[61.087642, 8.313091],
[61.058386, 8.220976],
[61.033821, 8.275029],
[60.973815, 8.205430],
[60.981440, 8.151520],
[60.900005, 8.040634],
[60.924477, 7.875927],
[60.793269, 7.700126],
[60.739386, 7.697606],
[60.745279, 7.615637],
[60.664495, 7.443928],
[60.631209, 7.631426],
[60.563902, 7.635191],
[60.520231, 7.733552],
[60.294102, 7.672733],
[60.241974, 7.608422],
[60.176113, 7.583664],
[60.102610, 7.493060],
[60.127421, 7.646512],
[60.103226, 7.813672],
[60.182998, 8.103571],
[60.192130, 8.207721],
[60.176641, 8.312519],
[60.182146, 8.399461],
[60.172069, 8.488576],
[60.179654, 8.584477],
[60.173916, 8.662445],
[60.187022, 8.727261],
[60.100222, 8.957848],
[59.988366, 8.992691],
[59.927382, 9.190721],
[59.830441, 9.190208],
[59.782094, 9.369438],
[59.697423, 9.340093],
[59.687208, 9.407190],
[59.560607, 9.471917],
[59.540177, 9.514549],
[59.485403, 9.464692],
[59.485719, 9.549668],
[59.410228, 9.659332],
[59.416297, 9.772700],
[59.459555, 9.766948],
[59.468948, 9.826966],
[59.475891, 10.054148],
[59.603017, 9.933374],
[59.618820, 9.977998],
[59.663546, 10.001061],
[59.642280, 10.038226],
[59.645358, 10.087367],
[59.670517, 10.115620],
[59.669113, 10.300321],
[59.704321, 10.317753],
[59.690514, 10.371846],
[59.595066, 10.412416],
[59.517791, 10.394526],
[59.460940, 10.524287],
[59.379041, 10.599906],
[59.238075, 10.625859],
[59.133433, 10.660708],
[59.113023, 10.629575],
[59.061949, 10.672238],
[58.922610, 10.637919]
 ]).addTo(mymap);

// set the color for the Viken polygon
//polygonViken.setStyle({ fillColor: 'red' });
polygonViken.setStyle();

//make the Oslo kommune polygon outline and "remove" it
var polygonOslo = L.polygon([
[59.833058, 10.933037],
[59.869640, 10.905701],
[59.921364, 10.915503],
[59.944095, 10.942430],
[59.950129, 10.949096],
[59.961736, 10.935242],
[59.983197, 10.923726],
[59.984361, 10.917934],
[59.980886, 10.912130],
[60.002068, 10.848103],
[59.999149, 10.835439],
[60.023987, 10.827661],
[60.017170, 10.818888],
[60.065389, 10.815973],
[60.067165, 10.786733],
[60.098782, 10.756463],
[60.112776, 10.768121],
[60.125491, 10.738269],
[60.119805, 10.70839],
[60.125603, 10.704715],
[60.133840, 10.68081],
[60.133364, 10.604637],
[60.116913, 10.574634],
[60.094203, 10.594960],
[60.077823, 10.599182],
[60.076139, 10.581502],
[60.017283, 10.490798],
[60.002173, 10.523596],
[59.997973, 10.557596],
[59.978903, 10.593062],
[59.978215, 10.614285],
[59.941427, 10.637019],
[59.923725, 10.627180],
[59.912414, 10.646979],
[59.886941, 10.661147],
[59.877752, 10.692193],
[59.878464, 10.731683],
[59.823625, 10.796803],
[59.825286, 10.813066],
[59.818955, 10.818109],
[59.815580, 10.846656],
[59.810092, 10.857568],
[59.814648, 10.870353],
[59.812939, 10.880086],
[59.821100, 10.891393],
[59.827126, 10.909058],
[59.828535, 10.927424],
[59.832435, 10.935204]
 ]).addTo(mymap);

// set the color for the Oslo polygon
//polygonOslo.setStyle();
//polygonOslo.setStyle({ fillColor: 'green' });
polygonOslo.remove();

 /*example of customizing the pop up text with links and other HTML tags /  
      var schoolOne = L.marker([59.9134, 10.8418], {icon: BigIcon});
      schoolOne.bindPopup("<b> School 1 </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br><br> <a href='http://en.wikipedia.org/wiki/Great_Pyramid_of_Giza' target='_newtab'> Wikipedia </a>");
*/	  
