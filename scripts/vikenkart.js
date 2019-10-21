///////////////////////////////////////////////////////////////////////////////////////////////
//define the map (base layer) and set its location via ([latitude, longitude], map zoom)
//smaller number map zoom = zoomed out farther, bigger number map zoom = zoomed in more
///////////////////////////////////////////////////////////////////////////////////////////////
var mymap = L.map('mapid', { minZoom: 7 }).setView([60.104657, 10.260997], 8);   

//access the MapBox maps API, with generated API key/access token from Erin's MapBox account
    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXJpdWtyaXN0ZW5lIiwiYSI6ImNrMWFlZDAzMDBjODQzZHBhd2kxaGJndGoifQ.qtMgz7G3f0Ptwawi3Ws_Ww', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'your.mapbox.project.id',
    accessToken: 'pk.eyJ1IjoiZXJpdWtyaXN0ZW5lIiwiYSI6ImNrMWFlZDAzMDBjODQzZHBhd2kxaGJndGoifQ.qtMgz7G3f0Ptwawi3Ws_Ww'
}).addTo(mymap);

///////////////////////////////////////////////////////////////////////////////////////////////
//make the Viken polygon outline
///////////////////////////////////////////////////////////////////////////////////////////////
var polygonViken = L.polygon(
[ //begin creating Viken polygon
	[ //define outer polygon
[58.894019,10.643096],
[58.929474,10.85321],
[58.960645,10.991912],
[58.977635,11.07019],
[59.031383,11.129241],
[59.079401,11.155334],
[59.099154,11.285797],
[59.113257,11.338668],
[59.09069,11.376434],
[59.041274,11.415573],
[58.993202,11.465698],
[58.98542,11.454196],
[58.97268,11.462779],
[58.951084,11.460376],
[58.933018,11.464839],
[58.918132,11.456943],
[58.889407,11.457286],
[58.890471,11.489215],
[58.888874,11.494279],
[58.889229,11.500202],
[58.881955,11.514106],
[58.881113,11.517067],
[58.879649,11.517282],
[58.87681,11.526723],
[58.879205,11.533161],
[58.877342,11.537409],
[58.886296,11.535006],
[58.899421,11.554575],
[58.887715,11.572085],
[58.897293,11.577921],
[58.89073,11.591139],
[58.905628,11.62736],
[58.90873,11.630535],
[58.906071,11.65268],
[58.927305,11.658274],
[58.927194,11.661418],
[58.931978,11.6585],
[58.934901,11.664765],
[58.934813,11.675666],
[58.937293,11.675408],
[58.941721,11.673434],
[58.94305,11.675794],
[58.944865,11.67661],
[58.947477,11.68206],
[58.952436,11.682918],
[58.957039,11.688926],
[58.970492,11.686695],
[58.972571,11.689227],
[58.972837,11.686352],
[58.97465,11.684678],
[58.976464,11.687467],
[58.976818,11.6906],
[58.977703,11.693733],
[58.979561,11.69266],
[58.982038,11.690815],
[58.984957,11.692059],
[58.985819,11.691008],
[58.98573,11.689828],
[58.986327,11.68869],
[58.987521,11.685708],
[58.987345,11.684485],
[58.987942,11.684292],
[58.988649,11.684828],
[58.989843,11.683905],
[58.990241,11.685128],
[58.990219,11.686695],
[58.991258,11.688261],
[58.991159,11.689281],
[58.992352,11.690783],
[58.994828,11.6934],
[58.996022,11.692413],
[58.996332,11.694774],
[58.997835,11.692585],
[58.998564,11.693121],
[58.999272,11.69619],
[59.0002,11.698143],
[59.017082,11.705781],
[59.03378,11.710674],
[59.0525,11.738483],
[59.083207,11.771099],
[59.097668,11.777622],
[59.098241,11.780583],
[59.100004,11.780712],
[59.102781,11.776206],
[59.110008,11.771571],
[59.1123,11.768738],
[59.114591,11.766421],
[59.114547,11.763696],
[59.21626,11.788415],
[59.24085,11.8303],
[59.345339,11.817254],
[59.428559,11.760263],
[59.589522,11.690911],
[59.644394,11.785668],
[59.649946,11.859139],
[59.69294,11.890039],
[59.696405,11.941537],
[59.751794,11.923684],
[59.791894,11.930551],
[59.840226,11.841287],
[59.869881,11.829614],
[59.900198,11.806954],
[59.9181,11.803521],
[59.937368,11.817941],
[59.957313,11.792535],
[59.993732,11.820687],
[60.005748,11.838197],
[60.015701,11.839913],
[60.023936,11.821717],
[60.051028,11.823434],
[60.05874,11.817426],
[60.048457,11.792878],
[60.092309,11.772279],
[60.171642,11.589631],
[60.175398,11.567315],
[60.187349,11.564912],
[60.24056,11.582765],
[60.267134,11.601991],
[60.313415,11.501054],
[60.343327,11.433763],
[60.458639,11.349992],
[60.506002,11.208543],
[60.561396,11.220902],
[60.605912,11.156358],
[60.5689,11.101202],
[60.519521,11.100053],
[60.478946,10.950364],
[60.477592,10.826768],
[60.522224,10.721025],
[60.491881,10.692648],
[60.474885,10.703172],
[60.453641,10.710844],
[60.435609,10.677079],
[60.426122,10.777329],
[60.425444,10.819901],
[60.396286,10.902986],
[60.366422,10.918778],
[60.346045,10.933885],
[60.337192,10.703553],
[60.353499,10.49756],
[60.38066,10.214662],
[60.526936,10.145997],
[60.634864,10.033387],
[60.630823,9.907045],
[60.612633,9.952363],
[60.5715,9.856919],
[60.586678,9.843187],
[60.556315,9.810571],
[60.448124,9.83529],
[60.504969,9.612817],
[60.537407,9.61007],
[60.530652,9.504327],
[60.553614,9.428796],
[60.595445,9.438409],
[60.612296,9.426049],
[60.619708,9.385537],
[60.64732,9.365625],
[60.667509,9.351205],
[60.691046,9.320306],
[60.72867,9.337472],
[60.741761,9.314126],
[60.760884,9.293183],
[60.767256,9.251641],
[60.77128,9.217652],
[60.784018,9.19671],
[60.792396,9.1895],
[60.804791,9.152078],
[60.815507,9.09543],
[60.863686,8.917932],
[60.899772,8.889093],
[60.902443,8.813562],
[60.951824,8.628167],
[60.986479,8.599328],
[61.018434,8.512811],
[61.033069,8.409814],
[61.090216,8.31231],
[61.057004,8.2203],
[61.031739,8.282098],
[61.008451,8.260812],
[61.008784,8.234033],
[60.999464,8.220643],
[60.994138,8.232659],
[60.968157,8.223561],
[60.968195,8.186325],
[60.980856,8.157486],
[60.893465,8.04316],
[60.90148,7.979302],
[60.896805,7.93879],
[60.924179,7.880425],
[60.898141,7.805581],
[60.792435,7.706017],
[60.763607,7.727303],
[60.732738,7.688164],
[60.744149,7.618813],
[60.66082,7.442345],
[60.656782,7.543282],
[60.629852,7.637352],
[60.593461,7.622933],
[60.536771,7.671685],
[60.519204,7.731423],
[60.420381,7.689537],
[60.29949,7.677864],
[60.245012,7.608513],
[60.17337,7.581734],
[60.100203,7.49041],
[60.12689,7.649025],
[60.113892,7.756829],
[60.103626,7.816567],
[60.137833,7.92849],
[60.164489,8.066506],
[60.184297,8.108391],
[60.188394,8.210701],
[60.175419,8.293785],
[60.1802,8.387856],
[60.169272,8.477806],
[60.175419,8.56913],
[60.171321,8.660454],
[60.182931,8.725686],
[60.151506,8.819756],
[60.099519,8.961205],
[60.020012,8.984551],
[59.997015,9.00103],
[59.990662,8.988327],
[59.980702,8.993649],
[59.983793,9.018883],
[59.968679,9.054061],
[59.962493,9.058524],
[59.95854,9.105044],
[59.951148,9.111396],
[59.931178,9.170922],
[59.915692,9.192895],
[59.900544,9.177445],
[59.896756,9.188431],
[59.865386,9.178011],
[59.825374,9.188311],
[59.812257,9.242556],
[59.813781,9.253249],
[59.808775,9.25754],
[59.796523,9.3243],
[59.78132,9.364812],
[59.755737,9.347645],
[59.720441,9.341466],
[59.717844,9.355199],
[59.693771,9.334428],
[59.681824,9.409094],
[59.658245,9.407034],
[59.620763,9.435186],
[59.576286,9.463339],
[59.556112,9.475012],
[59.538016,9.515524],
[59.492731,9.472265],
[59.482273,9.473295],
[59.486237,9.52403],
[59.483447,9.534158],
[59.486934,9.551496],
[59.465486,9.585313],
[59.463306,9.579133],
[59.454932,9.583683],
[59.450307,9.58703],
[59.438352,9.621448],
[59.425257,9.625482],
[59.407439,9.661531],
[59.411982,9.710626],
[59.412331,9.777574],
[59.458421,9.760065],
[59.457201,9.775277],
[59.469325,9.819308],
[59.463045,9.841624],
[59.45851,9.853297],
[59.459731,9.875098],
[59.455718,9.916812],
[59.459556,9.936896],
[59.465487,9.939814],
[59.468191,9.945308],
[59.468017,9.96256],
[59.466011,9.97964],
[59.467755,9.989339],
[59.459812,10.004399],
[59.460859,10.02311],
[59.46522,10.025685],
[59.473068,10.059502],
[59.52308,10.004056],
[59.582928,9.922345],
[59.587795,9.942258],
[59.603433,9.935048],
[59.618716,9.981396],
[59.635728,9.98174],
[59.646833,9.98895],
[59.663831,10.002339],
[59.65516,10.023282],
[59.64024,10.036671],
[59.643884,10.052121],
[59.642843,10.090058],
[59.658108,10.102933],
[59.662271,10.112717],
[59.67042,10.117009],
[59.67146,10.136407],
[59.666605,10.156491],
[59.669033,10.175202],
[59.671633,10.193913],
[59.664178,10.216058],
[59.665565,10.223611],
[59.671113,10.22507],
[59.669726,10.231507],
[59.666432,10.238803],
[59.673542,10.260003],
[59.667994,10.302918],
[59.680128,10.311501],
[59.688793,10.322831],
[59.70092,10.327294],
[59.698495,10.360596],
[59.676315,10.396645],
[59.665567,10.412095],
[59.647182,10.411065],
[59.625662,10.425141],
[59.617155,10.413125],
[59.608645,10.411237],
[59.600133,10.423768],
[59.585015,10.412266],
[59.567108,10.418961],
[59.542231,10.40437],
[59.530917,10.398019],
[59.512284,10.39819],
[59.480916,10.452435],
[59.45929,10.542386],
[59.424411,10.538824],
[59.394359,10.583456],
[59.354483,10.592383],
[59.34153,10.57865],
[59.30755,10.589293],
[59.286515,10.592383],
[59.265115,10.595473],
[59.239137,10.616415],
[59.207867,10.638045],
[59.188529,10.656241],
[59.16214,10.652464],
[59.133618,10.652121],
[59.11177,10.624312],
[59.046142,10.673407],
[58.979681,10.642508],
[58.894651,10.621222]
	], //close outer polygon
	[  //define inner polygon to take out Oslo area
[59.832201,10.939497],
[59.860484,10.912718],
[59.883231,10.907911],
[59.92042,10.919584],
[59.94003,10.939154],
[59.948972,10.95117],
[59.957567,10.940527],
[59.967878,10.938124],
[59.977843,10.929541],
[59.983339,10.925592],
[59.983339,10.915121],
[59.980419,10.903276],
[59.985572,10.877012],
[59.993814,10.865683],
[60.00154,10.849718],
[59.99699,10.842594],
[59.998192,10.837873],
[60.00523,10.837444],
[60.010121,10.833067],
[60.02182,10.827749],
[60.023321,10.825388],
[60.020405,10.822341],
[60.017531,10.821354],
[60.020276,10.81702],
[60.025594,10.812041],
[60.03194,10.81393],
[60.036227,10.813672],
[60.03837,10.818393],
[60.053798,10.816848],
[60.064422,10.819766],
[60.064765,10.806892],
[60.067506,10.788181],
[60.079667,10.777709],
[60.09422,10.766895],
[60.099525,10.756767],
[60.105002,10.755908],
[60.11253,10.76844],
[60.117833,10.753848],
[60.122964,10.747153],
[60.1257,10.737025],
[60.121767,10.724494],
[60.119543,10.71162],
[60.120056,10.705869],
[60.121425,10.704109],
[60.125016,10.704539],
[60.125786,10.697758],
[60.133651,10.680506],
[60.132967,10.655701],
[60.133138,10.645315],
[60.13425,10.630295],
[60.134762,10.614588],
[60.133822,10.604374],
[60.132326,10.602958],
[60.116935,10.572574],
[60.105301,10.584075],
[60.094348,10.592487],
[60.082193,10.593688],
[60.077398,10.597636],
[60.076199,10.581329],
[60.017917,10.489661],
[59.999382,10.520217],
[59.999726,10.530002],
[60.000412,10.535066],
[59.997923,10.543735],
[59.994919,10.546052],
[59.993803,10.549099],
[59.994919,10.552833],
[59.996593,10.555966],
[59.993975,10.559613],
[59.991571,10.567424],
[59.983328,10.582616],
[59.979463,10.589053],
[59.978175,10.590641],
[59.977316,10.590491],
[59.976779,10.592186],
[59.976908,10.594611],
[59.977445,10.596177],
[59.977724,10.596939],
[59.977252,10.598709],
[59.97665,10.60343],
[59.976951,10.60579],
[59.976479,10.610726],
[59.966686,10.620768],
[59.964709,10.624244],
[59.962862,10.623429],
[59.961573,10.627763],
[59.960069,10.628321],
[59.958823,10.630252],
[59.957448,10.631668],
[59.955514,10.630853],
[59.953581,10.632441],
[59.952979,10.634694],
[59.945242,10.635895],
[59.93888,10.631947],
[59.935956,10.634951],
[59.929936,10.62757],
[59.923226,10.625682],
[59.917892,10.634093],
[59.91402,10.634694],
[59.913761,10.640273],
[59.910663,10.642934],
[59.909114,10.647654],
[59.885007,10.658297],
[59.875359,10.69366],
[59.876048,10.732455],
[59.859158,10.737605],
[59.839155,10.742755],
[59.823626,10.773997],
[59.823626,10.79906],
[59.82518,10.811934],
[59.818967,10.817256],
[59.816032,10.83734],
[59.816723,10.846352],
[59.811803,10.848155],
[59.809472,10.856652],
[59.812925,10.866866],
[59.812925,10.87399],
[59.811458,10.880427],
[59.814565,10.88326],
[59.818104,10.891928],
[59.82121,10.892701],
[59.82203,10.897035],
[59.823885,10.896735],
[59.825956,10.904031],
[59.825956,10.910983],
[59.82725,10.915704],
[59.826819,10.927119],
[59.829321,10.930981],
[59.831391,10.933642]
	] //close inner Oslo area polygon
] //end creating Viken polygon
).addTo(mymap);

// set the color for the Viken polygon
polygonViken.setStyle(
	{
	//fillColor: "#7D7D88",
	fillColor: "purple",
	color: "black", //border
	fillOpacity: 0.5
	}
	
); //end setStyle() for Viken polygon

///////////////////////////////////////////////////////////////////////////////////////////////
//define each school as a Circle overlay https://www.wrld3d.com/wrld.js/latest/docs/leaflet/L.Circle/
//color-border color, fillColor-inside of circle (color HEX value), weight-thickness of border line
//fillOpacity-saturation of fillColor, radius-in meters
///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////
//Buskerud fylkeskommune
///////////////////////////////////////////////////////////////////////////////////////////////
var vgsBuskerud = L.circleMarker([59.894920, 9.931280], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsBuskerud.bindPopup("<b> Buskerud videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.buskerud.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsDrammen = L.circleMarker([59.737280, 10.198230], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsDrammen.bindPopup("<b> Drammen videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.drammen.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsEiker = L.circleMarker([59.773180, 9.903880], {color: "black", fillColor: "blue", weight: 2, fillOpacity: 0.7, radius: 10});
vgsEiker.bindPopup("<b> Eiker videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.eiker.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsGol = L.circleMarker([60.702750, 8.943760], {color: "black", fillColor: "blue", weight: 2, fillOpacity: 0.7, radius: 10});
vgsGol.bindPopup("<b> Gol videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.gol.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsHonefoss = L.circleMarker([60.157320, 10.255280], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsHonefoss.bindPopup("<b> Hønefoss videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.honefoss.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsKongsberg = L.circleMarker([59.669460, 9.647670], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsKongsberg.bindPopup("<b> Kongsberg videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.kongsberg.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsLier = L.circleMarker([59.757290, 10.245220], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsLier.bindPopup("<b> Lier videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.lier.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsNumedal = L.circleMarker([60.168961, 9.007370], {color: "black", fillColor: "green", weight: 2, fillOpacity: 0.7, radius: 5});
vgsNumedal.bindPopup("<b> Numedal videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.numedal.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsRingerike = L.circleMarker([60.164250, 10.258950], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsRingerike.bindPopup("<b> Ringerike videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.ringerike.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsRoyken = L.circleMarker([59.737790, 10.399680], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsRoyken.bindPopup("<b> Røyken videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.royken.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsStHallvard = L.circleMarker([59.760737,10.237951], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsStHallvard.bindPopup("<b> St. Hallvard videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.st-hallvard.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsAal = L.circleMarker([60.628901, 8.548977], {color: "black", fillColor: "blue", weight: 2, fillOpacity: 0.7, radius: 10});
vgsAal.bindPopup("<b> Ål videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.al.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsAassiden = L.circleMarker([59.757090, 10.120740], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsAassiden.bindPopup("<b> Åssiden videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.assiden.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

///////////////////////////////////////////////////////////////////////////////////////////////
//Akershus fylkeskommune
///////////////////////////////////////////////////////////////////////////////////////////////
var vgsAsker = L.circleMarker([59.83159, 10.437466], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsAsker.bindPopup("<b> Asker videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.asker.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsBjertnes = L.circleMarker([60.048827, 10.8805], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsBjertnes.bindPopup("<b> Bjertnes videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.bjertnes.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsBjorkelangen = L.circleMarker([59.883806,11.558704], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsBjorkelangen.bindPopup("<b> Bjørkelangen videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.bjorkelangen.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsBleiker = L.circleMarker([59.826880,10.445600], {color: "black", fillColor: "blue", weight: 2, fillOpacity: 0.7, radius: 10});
vgsBleiker.bindPopup("<b> Bleiker videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.bleiker.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsDromtorp = L.circleMarker([59.715916,10.867549], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsDromtorp.bindPopup("<b> Drømtorp videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.dromtorp.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsDonski = L.circleMarker([59.907390,10.527620], {color: "black", fillColor: "blue", weight: 2, fillOpacity: 0.7, radius: 10});
vgsDonski.bindPopup("<b> Dønski videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.donski.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsEidsvoll = L.circleMarker([60.336961,11.263347], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsEidsvoll.bindPopup("<b> Eidsvoll videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.eidsvoll.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsEikeli = L.circleMarker([59.935669,10.601399], {color: "black", fillColor: "blue", weight: 2, fillOpacity: 0.7, radius: 10});
vgsEikeli.bindPopup("<b> Eikeli videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.eikeli.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsFrogn = L.circleMarker([59.692574,10.660640], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsFrogn.bindPopup("<b> Frogn videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.frogn.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsHolmen = L.circleMarker([59.865867,10.486992], {color: "black", fillColor: "green", weight: 2, fillOpacity: 0.7, radius: 5});
vgsHolmen.bindPopup("<b> Holmen grunn- og videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.holmen.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsHvam = L.circleMarker([60.1040393,11.3756143], {color: "black", fillColor: "blue", weight: 2, fillOpacity: 0.7, radius: 10});
vgsHvam.bindPopup("<b> Hvam videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.hvam.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsJessheim = L.circleMarker([60.1458046,11.1640485], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsJessheim.bindPopup("<b> Jessheim videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.jessheim.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsKjelle = L.circleMarker([59.887558, 11.579492], {color: "black", fillColor: "green", weight: 2, fillOpacity: 0.7, radius: 5});
vgsKjelle.bindPopup("<b> Kjelle videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.kjelle.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsLillestrom = L.circleMarker([59.960524, 11.046157], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsLillestrom.bindPopup("<b> Lillestrøm videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.lillestrom.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsLorenskog = L.circleMarker([59.932039, 10.984200], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsLorenskog.bindPopup("<b> Lørenskog videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.lorenskog.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsMailand = L.circleMarker([59.929574, 10.960204], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsMailand.bindPopup("<b> Mailand videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.mailand.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsNadderud = L.circleMarker([59.915656, 10.573212], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsNadderud.bindPopup("<b> Nadderud videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.nadderud.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsNannestad = L.circleMarker([60.220029, 11.020353], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsNannestad.bindPopup("<b> Nannestad videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.nannestad.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsNes = L.circleMarker([60.125009, 11.480279], {color: "black", fillColor: "blue", weight: 2, fillOpacity: 0.7, radius: 10});
vgsNes.bindPopup("<b> Nes videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.nes.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsNesbru = L.circleMarker([59.867010, 10.485222], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsNesbru.bindPopup("<b> Nesbru videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.nesbru.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsNesodden = L.circleMarker([59.839684, 10.678009], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsNesodden.bindPopup("<b> Nesodden videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.nesodden.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsRoald = L.circleMarker([59.794399, 10.812894], {color: "black", fillColor: "blue", weight: 2, fillOpacity: 0.7, radius: 10});
vgsRoald.bindPopup("<b> Roald Amundsen videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.roaldamundsen.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsRosenvilde = L.circleMarker([59.909470, 10.508673], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsRosenvilde.bindPopup("<b> Rosenvilde videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.rosenvilde.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsRud = L.circleMarker([59.908354, 10.501052], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsRud.bindPopup("<b> Rud videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.rud.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsRaelingen = L.circleMarker([59.926222, 11.065375], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsRaelingen.bindPopup("<b> Rælingen videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.raelingen.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsSandvika = L.circleMarker([59.892643, 10.517550], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsSandvika.bindPopup("<b> Sandvika videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.sandvika.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsSkedsmo = L.circleMarker([59.965051, 11.040608], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsSkedsmo.bindPopup("<b> Skedsmo videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.skedsmo.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsSki = L.circleMarker([59.717578, 10.849338], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsSki.bindPopup("<b> Ski videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.ski.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsStabekk = L.circleMarker([59.909731, 10.615869], {color: "black", fillColor: "blue", weight: 2, fillOpacity: 0.7, radius: 10});
vgsStabekk.bindPopup("<b> Stabekk videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.stabekk.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsStrommen = L.circleMarker([59.954477, 11.014693], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsStrommen.bindPopup("<b> Strømmen videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.strommen.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsSorumsand = L.circleMarker([59.988004, 11.239037], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsSorumsand.bindPopup("<b> Sørumsand videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.sorumsand.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsValler = L.circleMarker([59.901180, 10.526938], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsValler.bindPopup("<b> Valler videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.valler.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsVestby = L.circleMarker([59.607144, 10.758375], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsVestby.bindPopup("<b> Vestby videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.vestby.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsAas = L.circleMarker([59.663149, 10.797012], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsAas.bindPopup("<b> Ås videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.aas.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

///////////////////////////////////////////////////////////////////////////////////////////////
//Østfold fylkeskommune
///////////////////////////////////////////////////////////////////////////////////////////////
var vgsAskim = L.circleMarker([59.575233, 11.160232], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsAskim.bindPopup("<b> Askim videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://askim.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsBorg = L.circleMarker([59.266167, 11.174278], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsBorg.bindPopup("<b> Borg videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://borg.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsFrederikII = L.circleMarker([59.223630, 10.925669], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsFrederikII.bindPopup("<b> Frederik II videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://frederikii.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsGlemmen = L.circleMarker([59.218924, 10.941861], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsGlemmen.bindPopup("<b> Glemmen videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://glemmen.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsGreaker = L.circleMarker([59.275830, 11.028130], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsGreaker.bindPopup("<b> Greåker videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://greaker.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsHalden = L.circleMarker([59.125508, 11.394302], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsHalden.bindPopup("<b> Halden videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://halden.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsKalnes = L.circleMarker([59.314648, 11.046861], {color: "black", fillColor: "blue", weight: 2, fillOpacity: 0.7, radius: 10});
vgsKalnes.bindPopup("<b> Kalnes videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://kalnes.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsKirkeparken = L.circleMarker([59.435249, 10.663210], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsKirkeparken.bindPopup("<b> Kirkeparken videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://kirkeparken.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsMalakoff = L.circleMarker([59.427916, 10.669456], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsMalakoff.bindPopup("<b> Malakoff videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://malakoff.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsMysen = L.circleMarker([59.556741, 11.327686], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsMysen.bindPopup("<b> Mysen videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://mysen.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

var vgsStOlav = L.circleMarker([59.280776, 11.104585], {color: "black", fillColor: "red", weight: 2, fillOpacity: 0.7, radius: 15});
vgsStOlav.bindPopup("<b> St. Olav videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://stolav.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>");

///////////////////////////////////////////////////////////////////////////////////////////////
//define the layer groups (overlays) for groups of schools based on size; add them to map right away
//so that the selection box (legend) will be populated right away
// see tutorial at https://leafletjs.com/examples/layers-control/
///////////////////////////////////////////////////////////////////////////////////////////////
var bigSchoolsGroup = L.layerGroup([vgsBuskerud, vgsDrammen, vgsHonefoss, vgsKongsberg, vgsLier, vgsRingerike, vgsRoyken, vgsStHallvard, vgsAassiden, vgsAsker, vgsBjertnes, vgsBjorkelangen, vgsDromtorp, vgsEidsvoll, vgsFrogn, vgsJessheim, vgsLillestrom, vgsLorenskog, vgsMailand, vgsNadderud, vgsNannestad, vgsNesbru, vgsNesodden, vgsRosenvilde, vgsRud, vgsRaelingen, vgsSandvika, vgsSkedsmo, vgsSki, vgsStrommen, vgsSorumsand, vgsValler, vgsVestby, vgsAas, vgsAskim, vgsBorg, vgsFrederikII, vgsGlemmen, vgsGreaker, vgsHalden, vgsKirkeparken, vgsMalakoff, vgsMysen, vgsStOlav]).addTo(mymap);

var mediumSchoolsGroup = L.layerGroup([vgsEiker, vgsGol, vgsAal, vgsBleiker, vgsDonski, vgsEikeli, vgsHvam, vgsNes, vgsRoald, vgsStabekk, vgsKalnes]).addTo(mymap);

var smallSchoolsGroup = L.layerGroup([vgsNumedal, vgsHolmen, vgsKjelle]).addTo(mymap);

///////////////////////////////////////////////////////////////////////////////////////////////
//create the legend of each group of schools as overlay list with checkboxes
///////////////////////////////////////////////////////////////////////////////////////////////
var overlayMaps = {
"<span style='color:red; font-size:15px; font-weight:bold;'> Store skoler </span>": bigSchoolsGroup,
"<span style='color:blue; font-size:15px; font-weight:bold;'> Medium skoler </span>": mediumSchoolsGroup,
"<span style='color:green; font-size:15px; font-weight:bold;'> Små skoler </span>": smallSchoolsGroup
}

///////////////////////////////////////////////////////////////////////////////////////////////
//add the overlayMaps legend to the map, not collapsed
///////////////////////////////////////////////////////////////////////////////////////////////
L.control.layers(null, overlayMaps, {collapsed: false}).addTo(mymap);

//end vikenkart.js
