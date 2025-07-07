var APP_DATA = {
  "scenes": [
    {
      "id": "0-durton-tour",
      "name": "durton tour",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7730134038440681,
          "pitch": 0.6443245659464054,
          "rotation": 6.283185307179586,
          "target": "1-durton-tour1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-durton-tour1",
      "name": "durton tour1",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2514865928344907,
          "pitch": 0.6680811734506857,
          "rotation": 6.283185307179586,
          "target": "0-durton-tour"
        },
        {
          "yaw": -0.059361946248086994,
          "pitch": 0.3888325803201571,
          "rotation": 5.497787143782138,
          "target": "2-durton-tour2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-durton-tour2",
      "name": "durton tour2",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.121543802401014,
          "pitch": 0.5144336160322265,
          "rotation": 0,
          "target": "1-durton-tour1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
