var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.010678431130097366,
        "pitch": -0.42447001305437837,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.9305877639388402,
          "pitch": 0.008166329381005255,
          "rotation": 4.71238898038469,
          "target": "1-parkingleft"
        },
        {
          "yaw": 0.7897737087594763,
          "pitch": -0.03486869356359534,
          "rotation": 7.853981633974483,
          "target": "2-parkingright"
        },
        {
          "yaw": -0.018612379054001593,
          "pitch": 0.03270125199633256,
          "rotation": 0,
          "target": "6-entrancecorridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-parkingleft",
      "name": "ParkingLeft",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.5280535696031947,
        "pitch": -0.04004833128074736,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.5452264597581191,
          "pitch": 0.09092786373262207,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-parkingright",
      "name": "ParkingRight",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -3.0522300228179464,
          "pitch": 0.07496536839587264,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-marvel",
      "name": "Marvel",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.06233304803026485,
        "pitch": -0.21776280133907733,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -3.0228858534351346,
          "pitch": 0.2138042157573743,
          "rotation": 0,
          "target": "6-entrancecorridor"
        },
        {
          "yaw": -0.7418461490211001,
          "pitch": 0.08063322863238298,
          "rotation": 0,
          "target": "8-libraryentrance"
        },
        {
          "yaw": 0.6306526219331072,
          "pitch": 0.06608925201537907,
          "rotation": 0,
          "target": "10-marvelleftpath"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dlic_corridor",
      "name": "DLIC_Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.04110274014055548,
        "pitch": 0.25471632242408226,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 3.082553021016712,
          "pitch": 0.07690469686303203,
          "rotation": 0,
          "target": "10-marvelleftpath"
        },
        {
          "yaw": -3.077535837319676,
          "pitch": -0.0010421588040241403,
          "rotation": 0,
          "target": "14-officerightcorridor"
        },
        {
          "yaw": 0.013548655253844188,
          "pitch": 0.24846894378921647,
          "rotation": 0,
          "target": "17-vlsi_corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-electricalentrance",
      "name": "ElectricalEntrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.4884584422744505,
        "pitch": -0.1971490534639706,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.8920362385463214,
          "pitch": 0.03743807975853031,
          "rotation": 0,
          "target": "11-nandini"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-entrancecorridor",
      "name": "EntranceCorridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.06002122335590343,
        "pitch": -0.3594922075760234,
        "fov": 1.1405344042883938
      },
      "linkHotspots": [
        {
          "yaw": -0.0036481173303819503,
          "pitch": 0.1208696265132545,
          "rotation": 0,
          "target": "3-marvel"
        },
        {
          "yaw": 2.0683311004570912,
          "pitch": 0.11895970055884142,
          "rotation": 4.71238898038469,
          "target": "7-firstfloor"
        },
        {
          "yaw": -2.5186693597409047,
          "pitch": 0.20031694817110157,
          "rotation": 1.5707963267948966,
          "target": "7-firstfloor"
        },
        {
          "yaw": 3.0063911291578043,
          "pitch": 0.16674985094178751,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-firstfloor",
      "name": "FirstFloor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.005516640315683219,
        "pitch": -0.30413318891336694,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.5301891804658112,
          "pitch": 0.20451512200505917,
          "rotation": 0,
          "target": "13-officeleftcorridor"
        },
        {
          "yaw": 1.5642284998269531,
          "pitch": 0.1967683900251771,
          "rotation": 0,
          "target": "14-officerightcorridor"
        },
        {
          "yaw": 2.1455822610909614,
          "pitch": 0.41888376307720065,
          "rotation": 0,
          "target": "6-entrancecorridor"
        },
        {
          "yaw": -2.1685626982102306,
          "pitch": 0.4396532034785423,
          "rotation": 0,
          "target": "6-entrancecorridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-libraryentrance",
      "name": "LibraryEntrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.37824667001370216,
        "pitch": -0.07191252073183918,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.655085477656568,
          "pitch": 0.10136344170912892,
          "rotation": 5.497787143782138,
          "target": "3-marvel"
        },
        {
          "yaw": 0.9163190340576399,
          "pitch": 0.07434760539571528,
          "rotation": 0,
          "target": "9-lecturehall"
        },
        {
          "yaw": -0.05325852841011525,
          "pitch": 0.06384164441754692,
          "rotation": 0,
          "target": "12-oat_path"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-lecturehall",
      "name": "LectureHall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.417841134547949,
        "pitch": -0.2093735338935705,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.054486772279044,
          "pitch": 0.1255159252600162,
          "rotation": 1.5707963267948966,
          "target": "16-rockgarden"
        },
        {
          "yaw": 1.0353725982249475,
          "pitch": 0.2497617537285226,
          "rotation": 4.71238898038469,
          "target": "12-oat_path"
        },
        {
          "yaw": -1.6659085105468314,
          "pitch": 0.04477340552597475,
          "rotation": 0,
          "target": "8-libraryentrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-marvelleftpath",
      "name": "MarvelLeftPath",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.5930557560348202,
        "pitch": 0.015018124230286034,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.7704566574991976,
          "pitch": -0.03911545521610016,
          "rotation": 0,
          "target": "11-nandini"
        },
        {
          "yaw": -0.34913135769957293,
          "pitch": 0.14513956568031716,
          "rotation": 11.780972450961727,
          "target": "16-rockgarden"
        },
        {
          "yaw": 3.1309993493449753,
          "pitch": 0.11978905089833347,
          "rotation": 4.71238898038469,
          "target": "4-dlic_corridor"
        },
        {
          "yaw": -2.475515476844098,
          "pitch": 0.07947760256025305,
          "rotation": 0,
          "target": "3-marvel"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-nandini",
      "name": "Nandini",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.05920533064536215,
        "pitch": 0.03756672729118016,
        "fov": 1.092337664240579
      },
      "linkHotspots": [
        {
          "yaw": 2.079021237404149,
          "pitch": -0.0021992615528940718,
          "rotation": 0,
          "target": "5-electricalentrance"
        },
        {
          "yaw": -0.008428025762697189,
          "pitch": 0.2792455465863348,
          "rotation": 0,
          "target": "16-rockgarden"
        },
        {
          "yaw": -1.0727438816703305,
          "pitch": 0.12092920925275408,
          "rotation": 0,
          "target": "10-marvelleftpath"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-oat_path",
      "name": "OAT_Path",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.831655224467367,
        "pitch": 0.07334481978849716,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.05395425681841992,
          "pitch": 0.06286593648417238,
          "rotation": 0,
          "target": "8-libraryentrance"
        },
        {
          "yaw": -0.9145286706117659,
          "pitch": 0.14385427153578512,
          "rotation": 0,
          "target": "9-lecturehall"
        },
        {
          "yaw": -2.9521557179219293,
          "pitch": 0.0957095931718861,
          "rotation": 0,
          "target": "15-openairtheater"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-officeleftcorridor",
      "name": "OfficeLeftCorridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.9995182698071687,
        "pitch": -0.04755739339589127,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.9762180651378056,
          "pitch": 0.20602434566013095,
          "rotation": 0,
          "target": "8-libraryentrance"
        },
        {
          "yaw": 0.031163077963221042,
          "pitch": 0.27134965964109625,
          "rotation": 0,
          "target": "7-firstfloor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-officerightcorridor",
      "name": "OfficeRightCorridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.226285669194068,
        "pitch": -0.03250581149974607,
        "fov": 1.027197078383294
      },
      "linkHotspots": [
        {
          "yaw": 0.015708678070740945,
          "pitch": 0.15738769045633028,
          "rotation": 0,
          "target": "4-dlic_corridor"
        },
        {
          "yaw": -3.0509236002751265,
          "pitch": 0.1534553152477578,
          "rotation": 0,
          "target": "7-firstfloor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-openairtheater",
      "name": "OpenAirTheater",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.0958829864392996,
        "pitch": -0.12164085758252341,
        "fov": 1.0661990247548676
      },
      "linkHotspots": [
        {
          "yaw": 3.02351471009192,
          "pitch": 0.009646261035680226,
          "rotation": 4.71238898038469,
          "target": "5-electricalentrance"
        },
        {
          "yaw": -0.18028344900302073,
          "pitch": -0.030794320710732848,
          "rotation": 4.71238898038469,
          "target": "18-backgate"
        },
        {
          "yaw": -2.6402743043184493,
          "pitch": 0.04324287007584182,
          "rotation": 1.5707963267948966,
          "target": "12-oat_path"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-rockgarden",
      "name": "RockGarden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.27961583913611143,
        "pitch": -0.45055865473478107,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.4083083137985657,
          "pitch": -0.0342174506402948,
          "rotation": 0,
          "target": "11-nandini"
        },
        {
          "yaw": -2.4189545070225353,
          "pitch": 0.06974345447612862,
          "rotation": 0,
          "target": "9-lecturehall"
        },
        {
          "yaw": 1.424391650665262,
          "pitch": 0.07223087135216488,
          "rotation": 0,
          "target": "10-marvelleftpath"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-vlsi_corridor",
      "name": "VLSI_Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.019192139715656253,
        "pitch": -0.1377264687301043,
        "fov": 1.032797152436157
      },
      "linkHotspots": [
        {
          "yaw": -2.0225734515413762,
          "pitch": 0.10454932060398647,
          "rotation": 0,
          "target": "4-dlic_corridor"
        },
        {
          "yaw": -0.02408272374254672,
          "pitch": 0.0588853395281177,
          "rotation": 0,
          "target": "11-nandini"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-backgate",
      "name": "BackGate",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.04893135978332808,
        "pitch": 0.10296775394547453,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.793729349144158,
          "pitch": 0.10950904348699808,
          "rotation": 1.5707963267948966,
          "target": "15-openairtheater"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "UVCE-VIRTUAL_TOUR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
