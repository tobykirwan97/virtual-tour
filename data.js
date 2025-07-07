var APP_DATA = {
  "scenes": [
    {
      "id": "0-tour1",
      "name": "Tour1",
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
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6136629030705159,
          "pitch": 0.7130033952813459,
          "rotation": 0,
          "target": "1-tour2"
        },
        {
          "yaw": -0.05919884621725302,
          "pitch": 0.5054902702923627,
          "rotation": 0,
          "target": "2-tour3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-tour2",
      "name": "Tour2",
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
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5969565171250046,
          "pitch": 0.7528609001104236,
          "rotation": 0,
          "target": "0-tour1"
        },
        {
          "yaw": -0.6120480337243652,
          "pitch": 0.45109058737124563,
          "rotation": 0.7853981633974483,
          "target": "2-tour3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-tour3",
      "name": "Tour3",
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
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.043182920783841894,
          "pitch": 0.5536681963223558,
          "rotation": 0,
          "target": "3-tour4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-tour4",
      "name": "Tour4",
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
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.133509409499263,
          "pitch": 0.7365613839775342,
          "rotation": 0,
          "target": "2-tour3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
