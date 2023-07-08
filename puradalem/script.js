(function(){
    var script = {
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -109.5,
  "pitch": -2.41
 },
 "id": "panorama_22D67C73_2929_5334_41B8_44953A536328_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 160.91,
   "backwardYaw": -15.7,
   "distance": 1,
   "panorama": "this.panorama_24A41948_2957_7554_41B6_7E9FE67EC525"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 180,
   "backwardYaw": 41.83,
   "distance": 1,
   "panorama": "this.panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -163.8,
   "backwardYaw": 27.01,
   "distance": 1,
   "panorama": "this.panorama_22A8DDDF_2957_ED6C_4174_A248C6572773"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -0.88,
   "backwardYaw": 90.57,
   "distance": 1,
   "panorama": "this.panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B"
  }
 ],
 "hfovMin": "100%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_270AA85B_2956_D374_41C1_22C1F481E73A",
 "thumbnailUrl": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_t.jpg",
 "label": "Utama Mandala - Pesanekan",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_34E68393_295A_D5FF_41B5_FFAA6EA12C4C",
  "this.overlay_33664F27_2959_2EDC_418D_A9F899290620",
  "this.overlay_3361E62E_295F_DF2D_41B8_183A397FBF24",
  "this.overlay_343E8371_295F_5534_41C1_D0DFCB7CB787",
  "this.overlay_39AC53E4_2C99_C813_41B0_5D3CF8342618",
  "this.overlay_385313C9_2C98_4815_41B5_4EA015A8F793",
  "this.popup_3ABD3D65_2C98_F81D_41B1_AE0D42F71F51",
  "this.popup_39E3C67F_2C98_48ED_41C1_0E4DCDD7D37D"
 ]
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "media": "this.panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_22D67C73_2929_5334_41B8_44953A536328",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_22D67C73_2929_5334_41B8_44953A536328_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2541AD97_2929_6DFC_41B4_218C342B13E8",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_26621FA7_2959_2DDC_41B4_8781834C6F32",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_272CA0BD_2959_732C_41A4_A816EE15571A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_272CA0BD_2959_732C_41A4_A816EE15571A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_25655EBE_2959_2F2C_418C_377D5D448CAF",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_270AA85B_2956_D374_41C1_22C1F481E73A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_270AA85B_2956_D374_41C1_22C1F481E73A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_24A41948_2957_7554_41B6_7E9FE67EC525",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24A41948_2957_7554_41B6_7E9FE67EC525_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_22A8DDDF_2957_ED6C_4174_A248C6572773",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_256B7EDD_2957_2F6C_41C3_559AADD10985",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_276A1267_2959_375C_41C1_21F1FA6E5A52",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679",
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_3674C8D1_2CB8_7835_419B_B39779C46E79",
 "levels": [
  {
   "url": "media/popup_3902BFE8_2CA8_3813_4167_550B501B3EAC_0_0.jpg",
   "width": 2182,
   "class": "ImageResourceLevel",
   "height": 1516
  },
  {
   "url": "media/popup_3902BFE8_2CA8_3813_4167_550B501B3EAC_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1422
  },
  {
   "url": "media/popup_3902BFE8_2CA8_3813_4167_550B501B3EAC_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_3902BFE8_2CA8_3813_4167_550B501B3EAC_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -158.11,
  "pitch": 7.72
 },
 "id": "panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 16.2,
  "pitch": 0
 },
 "id": "camera_37C1A55E_2F05_25C0_41C0_B31D38D0EF04",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -67.58,
  "pitch": 0
 },
 "id": "camera_380C62A5_2F05_DF40_41A5_4676C5166492",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_366658E3_2CB8_7815_41A4_8DCA179714BD",
 "levels": [
  {
   "url": "media/popup_3946970D_2CB8_C82D_41BA_48431CB8ABF2_0_0.jpg",
   "width": 2182,
   "class": "ImageResourceLevel",
   "height": 1516
  },
  {
   "url": "media/popup_3946970D_2CB8_C82D_41BA_48431CB8ABF2_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1422
  },
  {
   "url": "media/popup_3946970D_2CB8_C82D_41BA_48431CB8ABF2_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_3946970D_2CB8_C82D_41BA_48431CB8ABF2_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 37.06,
   "backwardYaw": -116.94,
   "distance": 1,
   "panorama": "this.panorama_272CA0BD_2959_732C_41A4_A816EE15571A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -142.82,
   "backwardYaw": -1.13,
   "distance": 1,
   "panorama": "this.panorama_276A1267_2959_375C_41C1_21F1FA6E5A52"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -96.47,
   "backwardYaw": 180,
   "distance": 1,
   "panorama": "this.panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875"
  }
 ],
 "hfovMin": "100%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_26621FA7_2959_2DDC_41B4_8781834C6F32",
 "thumbnailUrl": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_t.jpg",
 "label": "Madya Mandala - Pesantian",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0872BB19_2969_76F4_41A3_5349A98906D4",
  "this.overlay_0836736D_2969_D52C_41C4_191C33F31EA7",
  "this.overlay_0A4AC128_2957_32D4_41B2_5A73DD2AC3CE",
  "this.overlay_386F1EE6_2C98_381F_41BF_BD7BF3FA4E83",
  "this.popup_3ABF8528_2C9B_C813_41C6_3D283EF39490"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 17.46,
   "backwardYaw": 178.49,
   "distance": 1,
   "panorama": "this.panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 180,
   "backwardYaw": -96.47,
   "distance": 1,
   "panorama": "this.panorama_26621FA7_2959_2DDC_41B4_8781834C6F32"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -59.41,
   "backwardYaw": -127.24,
   "distance": 1,
   "panorama": "this.panorama_256B7EDD_2957_2F6C_41C3_559AADD10985"
  }
 ],
 "hfovMin": "100%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875",
 "thumbnailUrl": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_t.jpg",
 "label": "Utama Mandala - Panggungan Bale Agung",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0B9AB6BC_296B_3F2C_4199_41F6C75E7337",
  "this.overlay_0BFDD685_296B_3FDC_4187_6807904B812C",
  "this.overlay_08A69A22_2969_D6D4_41A2_63A3DCDC3DED",
  "this.overlay_3826AD78_2CB8_38F3_4196_DC02DE078538",
  "this.popup_3935E294_2CB8_4833_4182_0A45A803C466"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 179.87,
   "backwardYaw": 46.6,
   "distance": 1,
   "panorama": "this.panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -1.13,
   "backwardYaw": -142.82,
   "distance": 1,
   "panorama": "this.panorama_26621FA7_2959_2DDC_41B4_8781834C6F32"
  }
 ],
 "hfovMin": "100%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_276A1267_2959_375C_41C1_21F1FA6E5A52",
 "thumbnailUrl": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_t.jpg",
 "label": "Utama Mandala - Bale Gede",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0C93EAB1_2959_D737_41B0_EE89CBDBAF09",
  "this.overlay_0F3CF4EE_295E_D32D_41B6_01BB01155615",
  "this.overlay_396C26D9_2CB8_4835_4190_A128139685D9",
  "this.popup_38653F67_2CB9_D81D_41C3_1AC750B4D6DA"
 ]
},
{
 "class": "Photo",
 "duration": 5000,
 "label": "bale_pepelik",
 "id": "album_11C6F92D_2AE9_552C_41B0_DC0857C2764D_2",
 "thumbnailUrl": "media/album_11C6F92D_2AE9_552C_41B0_DC0857C2764D_2_t.jpg",
 "width": 4032,
 "image": {
  "levels": [
   {
    "url": "media/album_11C6F92D_2AE9_552C_41B0_DC0857C2764D_2.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 3024
},
{
 "class": "Photo",
 "duration": 5000,
 "label": "DSC09171",
 "id": "album_11C6F92D_2AE9_552C_41B0_DC0857C2764D_3",
 "thumbnailUrl": "media/album_11C6F92D_2AE9_552C_41B0_DC0857C2764D_3_t.jpg",
 "width": 3376,
 "image": {
  "levels": [
   {
    "url": "media/album_11C6F92D_2AE9_552C_41B0_DC0857C2764D_3.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 6000
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_378D2505_2F05_2540_41B4_ACBCB802BAA8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 72.98,
  "pitch": -0.65
 },
 "id": "panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 142.76,
  "pitch": -1.63
 },
 "id": "panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "label": "2023_07_02_17_57_IMG_8247",
 "id": "album_11C6F92D_2AE9_552C_41B0_DC0857C2764D_0",
 "thumbnailUrl": "media/album_11C6F92D_2AE9_552C_41B0_DC0857C2764D_0_t.jpg",
 "width": 4032,
 "image": {
  "levels": [
   {
    "url": "media/album_11C6F92D_2AE9_552C_41B0_DC0857C2764D_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 3024
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -128.73,
  "pitch": 6.33
 },
 "id": "panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -15.7,
   "backwardYaw": 160.91,
   "distance": 1,
   "panorama": "this.panorama_270AA85B_2956_D374_41C1_22C1F481E73A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -42.08,
   "backwardYaw": 75.24,
   "distance": 1,
   "panorama": "this.panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31"
  }
 ],
 "hfovMin": "100%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_24A41948_2957_7554_41B6_7E9FE67EC525",
 "thumbnailUrl": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_t.jpg",
 "label": "Utama Mandala - Panetegan",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_09DC6598_2969_5DF4_41B6_4E8524D5EA36",
  "this.overlay_32294170_2969_7534_41C2_E5F7A428368D",
  "this.overlay_39AA06D4_2C97_C833_41C3_3420F665FB39",
  "this.overlay_39DD8B4B_2CA8_3815_41C3_B1174F62AE85",
  "this.popup_3A956721_2CA8_C815_41BD_0694CE3530A7",
  "this.popup_39D355C3_2CA8_4815_41A3_5151BD46298D"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 155.51,
  "pitch": 0
 },
 "id": "camera_37E3953A_2F05_2543_419B_4B51B57EA0EC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_364408BE_2CB8_786F_41BE_9BB5E1A601CA",
 "levels": [
  {
   "url": "media/popup_383AE527_2C98_C81D_41C2_E29D25C20714_0_0.jpg",
   "width": 2182,
   "class": "ImageResourceLevel",
   "height": 1516
  },
  {
   "url": "media/popup_383AE527_2C98_C81D_41C2_E29D25C20714_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1422
  },
  {
   "url": "media/popup_383AE527_2C98_C81D_41C2_E29D25C20714_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_383AE527_2C98_C81D_41C2_E29D25C20714_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.13,
  "pitch": 0
 },
 "id": "camera_382C8271_2F05_DFC0_41A0_1730E341B365",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 8.3,
 "id": "popup_3ABF8528_2C9B_C813_41C6_3D283EF39490",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_3ABF8528_2C9B_C813_41C6_3D283EF39490_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -7.51,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "yaw": 78.92,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.12,
  "pitch": 0
 },
 "id": "camera_36265580_2F05_2540_41C5_E4D98625F396",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "label": "DSC09240",
 "id": "photo_14AB346E_292A_D32D_41C4_1E12195893DA",
 "thumbnailUrl": "media/photo_14AB346E_292A_D32D_41C4_1E12195893DA_t.jpg",
 "width": 6000,
 "image": {
  "levels": [
   {
    "url": "media/photo_14AB346E_292A_D32D_41C4_1E12195893DA.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 3376
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 8.14,
 "id": "popup_39163E95_2CA8_F832_41C0_09EE3B4FFF5C",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_39163E95_2CA8_F832_41C0_09EE3B4FFF5C_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 13.46,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "yaw": -2.22,
 "popupDistance": 100
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.11,
 "id": "popup_3902BFE8_2CA8_3813_4167_550B501B3EAC",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_3902BFE8_2CA8_3813_4167_550B501B3EAC_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -1.11,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "yaw": -145.29,
 "popupDistance": 100
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 8.33,
 "id": "popup_39C9DC4E_2CA9_D82E_41B1_9A97766EAEF3",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_39C9DC4E_2CA9_D82E_41B1_9A97766EAEF3_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -5.38,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "yaw": 57.32,
 "popupDistance": 100
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.29,
 "id": "popup_390F1898_2CAB_F832_41BA_BABA687E2990",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_390F1898_2CAB_F832_41BA_BABA687E2990_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 8.31,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "yaw": 120.63,
 "popupDistance": 100
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 8.74,
 "id": "popup_39F29BC4_2C98_3813_41C2_83DFF82C9DA5",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_39F29BC4_2C98_3813_41C2_83DFF82C9DA5_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -9.9,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "yaw": -44.68,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -162.54,
  "pitch": 0
 },
 "id": "camera_37F2154C_2F05_25C0_41B6_1A42A8BD22E3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.26,
 "id": "popup_3906F499_2CA8_C832_41AB_FE5F9A367C13",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_3906F499_2CA8_C832_41AB_FE5F9A367C13_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 9.82,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "yaw": 157.3,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 81.4,
  "pitch": 0
 },
 "id": "camera_3801E2B6_2F05_DF40_41AB_1165E9779F50",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -19.09,
  "pitch": 0
 },
 "id": "camera_38492307_2F05_DD40_41C1_9332690A1AAB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -19.09,
  "pitch": 0
 },
 "id": "camera_3637A591_2F05_2541_41C5_06D4671CDE60",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 26.34,
  "pitch": -2.76
 },
 "id": "panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -173.47,
  "pitch": 0
 },
 "id": "camera_38252282_2F05_DF40_41A0_FEE4BC5C669A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 84.66,
  "pitch": 0
 },
 "id": "camera_3758C4D2_2F05_24C0_41A5_D92E0F72F012",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "items": [
  {
   "media": "this.panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_22D67C73_2929_5334_41B8_44953A536328",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_22D67C73_2929_5334_41B8_44953A536328_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2541AD97_2929_6DFC_41B4_218C342B13E8",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_26621FA7_2959_2DDC_41B4_8781834C6F32",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_272CA0BD_2959_732C_41A4_A816EE15571A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_272CA0BD_2959_732C_41A4_A816EE15571A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_25655EBE_2959_2F2C_418C_377D5D448CAF",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_270AA85B_2956_D374_41C1_22C1F481E73A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_270AA85B_2956_D374_41C1_22C1F481E73A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_24A41948_2957_7554_41B6_7E9FE67EC525",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24A41948_2957_7554_41B6_7E9FE67EC525_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_22A8DDDF_2957_ED6C_4174_A248C6572773",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_256B7EDD_2957_2F6C_41C3_559AADD10985",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_276A1267_2959_375C_41C1_21F1FA6E5A52",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_367A88D3_2CB8_7835_41BD_FDE68808DA57",
 "levels": [
  {
   "url": "media/popup_39B31967_2CA8_381D_4188_F6DCE19342FC_0_0.jpg",
   "width": 2182,
   "class": "ImageResourceLevel",
   "height": 1516
  },
  {
   "url": "media/popup_39B31967_2CA8_381D_4188_F6DCE19342FC_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1422
  },
  {
   "url": "media/popup_39B31967_2CA8_381D_4188_F6DCE19342FC_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_39B31967_2CA8_381D_4188_F6DCE19342FC_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_3958F1CB_2F05_DCC1_41C0_019D57D75DA7",
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_3958F1CB_2F05_DCC1_41C0_019D57D75DA7, 0)",
   "media": "this.album_11C6F92D_2AE9_552C_41B0_DC0857C2764D",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer"
  }
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.84,
 "id": "popup_39D355C3_2CA8_4815_41A3_5151BD46298D",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_39D355C3_2CA8_4815_41A3_5151BD46298D_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -4.75,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "yaw": 148.01,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -65.85,
  "pitch": -0.07
 },
 "id": "panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 69.21,
   "backwardYaw": 35.05,
   "distance": 1,
   "panorama": "this.panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -170.2,
   "backwardYaw": -95.34,
   "distance": 1,
   "panorama": "this.panorama_22D67C73_2929_5334_41B8_44953A536328"
  }
 ],
 "hfovMin": "100%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_25655EBE_2959_2F2C_418C_377D5D448CAF",
 "thumbnailUrl": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_t.jpg",
 "label": "Madya Mandala - Wantilan Depan",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_00A67A56_292B_377C_418E_E3C34B8EC40F",
  "this.overlay_0062157D_2929_7D2C_417F_4101EE31E47D"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 120.59,
  "pitch": 0
 },
 "id": "camera_388D137B_2F05_DDC1_41B2_FBDF34FD4A29",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_3662F8DA_2CB8_7837_41BA_F3420500B3B4",
 "levels": [
  {
   "url": "media/popup_39163E95_2CA8_F832_41C0_09EE3B4FFF5C_0_0.jpg",
   "width": 2182,
   "class": "ImageResourceLevel",
   "height": 1516
  },
  {
   "url": "media/popup_39163E95_2CA8_F832_41C0_09EE3B4FFF5C_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1422
  },
  {
   "url": "media/popup_39163E95_2CA8_F832_41C0_09EE3B4FFF5C_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_39163E95_2CA8_F832_41C0_09EE3B4FFF5C_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ]
},
{
 "class": "Photo",
 "duration": 5000,
 "label": "2023_05_22_10_47_IMG_7168",
 "id": "photo_6241044E_2929_336C_41AD_F5EC4E8CD450",
 "thumbnailUrl": "media/photo_6241044E_2929_336C_41AD_F5EC4E8CD450_t.jpg",
 "width": 3024,
 "image": {
  "levels": [
   {
    "url": "media/photo_6241044E_2929_336C_41AD_F5EC4E8CD450.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 4032
},
{
 "class": "ImageResource",
 "id": "ImageResource_364B98C1_2CB8_7815_41C2_C1101CC3A6FD",
 "levels": [
  {
   "url": "media/popup_39F29BC4_2C98_3813_41C2_83DFF82C9DA5_0_0.jpg",
   "width": 2182,
   "class": "ImageResourceLevel",
   "height": 1516
  },
  {
   "url": "media/popup_39F29BC4_2C98_3813_41C2_83DFF82C9DA5_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1422
  },
  {
   "url": "media/popup_39F29BC4_2C98_3813_41C2_83DFF82C9DA5_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_39F29BC4_2C98_3813_41C2_83DFF82C9DA5_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 151.29,
  "pitch": 7.53
 },
 "id": "panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 35.05,
   "backwardYaw": 69.21,
   "distance": 1,
   "panorama": "this.panorama_25655EBE_2959_2F2C_418C_377D5D448CAF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -52.88,
   "backwardYaw": 118.7,
   "distance": 1,
   "panorama": "this.panorama_2541AD97_2929_6DFC_41B4_218C342B13E8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -116.44,
   "backwardYaw": 50.87,
   "distance": 1,
   "panorama": "this.panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B"
  }
 ],
 "hfovMin": "100%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF",
 "thumbnailUrl": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_t.jpg",
 "label": "Madya Mandala -  Wantilan",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_30935B9D_2929_75EC_41B2_21BAEE80A2BD",
  "this.overlay_32DF2D63_2929_2D54_41B3_1012AB3594B1",
  "this.overlay_37DDF287_2959_57DC_41C4_9F5C22D1EE0A",
  "this.overlay_3BB92E79_2C98_78F5_4189_36297715B40C",
  "this.popup_383AE527_2C98_C81D_41C2_E29D25C20714",
  "this.overlay_3AF206BC_2C98_4872_419C_3E2748EADBE2",
  "this.popup_3A6D934E_2C98_C82E_41C3_F9540761C76E"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 63.56,
  "pitch": 0
 },
 "id": "camera_360595A3_2F05_2541_41BE_980169FD0B34",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 127.12,
  "pitch": 0
 },
 "id": "camera_38E273D2_2F05_DCC0_41B9_B5051A48F5E0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_364D38C7_2CB8_781D_4193_7BF5263ECA55",
 "levels": [
  {
   "url": "media/popup_39E3C67F_2C98_48ED_41C1_0E4DCDD7D37D_0_0.jpg",
   "width": 2182,
   "class": "ImageResourceLevel",
   "height": 1516
  },
  {
   "url": "media/popup_39E3C67F_2C98_48ED_41C1_0E4DCDD7D37D_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1422
  },
  {
   "url": "media/popup_39E3C67F_2C98_48ED_41C1_0E4DCDD7D37D_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_39E3C67F_2C98_48ED_41C1_0E4DCDD7D37D_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ]
},
{
 "class": "Photo",
 "duration": 5000,
 "label": "DSC09200",
 "id": "photo_6D45BD4B_2929_2D54_41C4_259570E6BBC9",
 "thumbnailUrl": "media/photo_6D45BD4B_2929_2D54_41C4_259570E6BBC9_t.jpg",
 "width": 3376,
 "image": {
  "levels": [
   {
    "url": "media/photo_6D45BD4B_2929_2D54_41C4_259570E6BBC9.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 6000
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 27.01,
   "backwardYaw": -163.8,
   "distance": 1,
   "panorama": "this.panorama_270AA85B_2956_D374_41C1_22C1F481E73A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 53.64,
   "backwardYaw": -43.21,
   "distance": 1,
   "panorama": "this.panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB"
  }
 ],
 "hfovMin": "100%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_22A8DDDF_2957_ED6C_4174_A248C6572773",
 "thumbnailUrl": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_t.jpg",
 "label": "Utama Mandala - Pawedan",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_345748EE_2977_532C_41BB_084913BEDAAF",
  "this.overlay_084A49D5_2977_357C_41A6_B3AAA72E3CCD",
  "this.overlay_37E34DCD_2979_2D6C_4197_2F3A8F9E944A",
  "this.overlay_3B5AB28D_2CA8_C812_41C6_24F0D5D36CE4",
  "this.overlay_3AF545FC_2CA8_4BF3_41BD_6C41C61C5BC4",
  "this.overlay_39272D97_2CA8_383D_41B5_94E63E10C1C8",
  "this.overlay_393931F5_2CA8_4BFD_41B4_E5B8605D3EC6",
  "this.popup_39B31967_2CA8_381D_4188_F6DCE19342FC",
  "this.popup_3902BFE8_2CA8_3813_4167_550B501B3EAC",
  "this.popup_39FE3DCA_2CA9_F817_41B1_56D6A394CCDE",
  "this.popup_393AEFC5_2CA8_781D_41BB_B5F68F8B45F2",
  "this.overlay_35809709_2CA8_C815_41A2_9F29427EEC39"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -174.53,
  "pitch": -0.13
 },
 "id": "panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_3959DB3D_2C98_D872_41B2_0159009C7EEA",
 "levels": [
  {
   "url": "media/popup_3955F67B_2C99_C8F5_41B4_437EAEDBECB9_0_0.jpg",
   "width": 2182,
   "class": "ImageResourceLevel",
   "height": 1516
  },
  {
   "url": "media/popup_3955F67B_2C99_C8F5_41B4_437EAEDBECB9_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1422
  },
  {
   "url": "media/popup_3955F67B_2C99_C8F5_41B4_437EAEDBECB9_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_3955F67B_2C99_C8F5_41B4_437EAEDBECB9_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 9.3,
 "id": "popup_38653F67_2CB9_D81D_41C3_1AC750B4D6DA",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_38653F67_2CB9_D81D_41C3_1AC750B4D6DA_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -7.01,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "yaw": 108.57,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -152.99,
  "pitch": 0
 },
 "id": "camera_39C6E24F_2F05_DFC1_41B0_83C8DBCBE262",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_367838D6_2CB8_783F_41C2_F656524BDF03",
 "levels": [
  {
   "url": "media/popup_3906F499_2CA8_C832_41AB_FE5F9A367C13_0_0.jpg",
   "width": 2182,
   "class": "ImageResourceLevel",
   "height": 1516
  },
  {
   "url": "media/popup_3906F499_2CA8_C832_41AB_FE5F9A367C13_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1422
  },
  {
   "url": "media/popup_3906F499_2CA8_C832_41AB_FE5F9A367C13_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_3906F499_2CA8_C832_41AB_FE5F9A367C13_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_367638D0_2CB8_7833_41C4_35CAA9C432B0",
 "levels": [
  {
   "url": "media/popup_39FE3DCA_2CA9_F817_41B1_56D6A394CCDE_0_0.jpg",
   "width": 2182,
   "class": "ImageResourceLevel",
   "height": 1516
  },
  {
   "url": "media/popup_39FE3DCA_2CA9_F817_41B1_56D6A394CCDE_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1422
  },
  {
   "url": "media/popup_39FE3DCA_2CA9_F817_41B1_56D6A394CCDE_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_39FE3DCA_2CA9_F817_41B1_56D6A394CCDE_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 111.42,
   "backwardYaw": 112.42,
   "distance": 1,
   "panorama": "this.panorama_256B7EDD_2957_2F6C_41C3_559AADD10985"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -24.49,
   "backwardYaw": -98.6,
   "distance": 1,
   "panorama": "this.panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31"
  }
 ],
 "hfovMin": "100%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F",
 "thumbnailUrl": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_t.jpg",
 "label": "Utama Mandala -  Pepelik",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0B2EF5A2_2976_DDD4_4199_2D05B1416CEA",
  "this.overlay_0A546A6E_2977_F72C_41AE_F4D4604C3C6A",
  "this.overlay_39945285_2CAF_C81D_41B7_E79BF97C74B5",
  "this.overlay_38708F6E_2CA8_58EF_41B4_B82994018627",
  "this.overlay_386B6DE9_2CA8_D815_416B_147415394164",
  "this.overlay_39070C74_2CA8_58F8_41A3_B9FEF8237751",
  "this.popup_39C9DC4E_2CA9_D82E_41B1_9A97766EAEF3",
  "this.popup_3906F499_2CA8_C832_41AB_FE5F9A367C13",
  "this.popup_3901EC0D_2CA8_582D_41C4_BE3B7A4C8CC7",
  "this.popup_390F1898_2CAB_F832_41BA_BABA687E2990"
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 9.01,
 "id": "popup_3955F67B_2C99_C8F5_41B4_437EAEDBECB9",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_3955F67B_2C99_C8F5_41B4_437EAEDBECB9_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -9.15,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "yaw": -155.59,
 "popupDistance": 100
},
{
 "class": "ImageResource",
 "id": "ImageResource_3675F8D2_2CB8_7837_41B1_76CAD54942DF",
 "levels": [
  {
   "url": "media/popup_393AEFC5_2CA8_781D_41BB_B5F68F8B45F2_0_0.jpg",
   "width": 2182,
   "class": "ImageResourceLevel",
   "height": 1516
  },
  {
   "url": "media/popup_393AEFC5_2CA8_781D_41BB_B5F68F8B45F2_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1422
  },
  {
   "url": "media/popup_393AEFC5_2CA8_781D_41BB_B5F68F8B45F2_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_393AEFC5_2CA8_781D_41BB_B5F68F8B45F2_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.81,
 "id": "popup_39AE91AA_2C98_4816_419E_52E0F0900BD7",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_39AE91AA_2C98_4816_419E_52E0F0900BD7_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -6.89,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "yaw": -161.24,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 10.43,
  "pitch": 0
 },
 "id": "camera_38EC63B6_2F05_DD40_41C2_C921FDF5FE20",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -89.43,
  "pitch": 0
 },
 "id": "camera_39D99260_2F05_DFC0_41BC_159C51537169",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_3661E8E0_2CB8_7813_41C5_4857232EF119",
 "levels": [
  {
   "url": "media/popup_38653F67_2CB9_D81D_41C3_1AC750B4D6DA_0_0.jpg",
   "width": 2182,
   "class": "ImageResourceLevel",
   "height": 1516
  },
  {
   "url": "media/popup_38653F67_2CB9_D81D_41C3_1AC750B4D6DA_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1422
  },
  {
   "url": "media/popup_38653F67_2CB9_D81D_41C3_1AC750B4D6DA_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_38653F67_2CB9_D81D_41C3_1AC750B4D6DA_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -68.58,
  "pitch": 0
 },
 "id": "camera_38BF935E_2F05_DDC0_41B3_1F83EE98D3C3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 8.26,
 "id": "popup_3935E294_2CB8_4833_4182_0A45A803C466",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_3935E294_2CB8_4833_4182_0A45A803C466_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -9.15,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "yaw": 117.61,
 "popupDistance": 100
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 8.45,
 "id": "popup_39E3C67F_2C98_48ED_41C1_0E4DCDD7D37D",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_39E3C67F_2C98_48ED_41C1_0E4DCDD7D37D_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -11.53,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "yaw": -120.17,
 "popupDistance": 100
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -63.43,
   "backwardYaw": 173.09,
   "distance": 1,
   "panorama": "this.panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -95.34,
   "backwardYaw": -170.2,
   "distance": 1,
   "panorama": "this.panorama_25655EBE_2959_2F2C_418C_377D5D448CAF"
  }
 ],
 "hfovMin": "100%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_22D67C73_2929_5334_41B8_44953A536328",
 "thumbnailUrl": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_t.jpg",
 "label": "Nista Mandala",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3FA63137_292B_D53C_41C2_F442D5E5B913",
  "this.overlay_3FF20084_2929_33DC_418D_7F44A139FEB5"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -126.36,
  "pitch": 0
 },
 "id": "camera_37939529_2F05_2541_41B6_9C484BB6A7DF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "label": "gedong_penyimpenan",
 "id": "album_11C6F92D_2AE9_552C_41B0_DC0857C2764D_4",
 "thumbnailUrl": "media/album_11C6F92D_2AE9_552C_41B0_DC0857C2764D_4_t.jpg",
 "width": 3024,
 "image": {
  "levels": [
   {
    "url": "media/album_11C6F92D_2AE9_552C_41B0_DC0857C2764D_4.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 4032
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -39.46,
  "pitch": 4.33
 },
 "id": "panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -133.4,
  "pitch": 0
 },
 "id": "camera_37AF64E2_2F05_24C0_41BD_B6B9D09057FA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 63.06,
  "pitch": 0
 },
 "id": "camera_381422C8_2F05_DCC0_41A3_CA3371A5BAD8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -129.13,
  "pitch": 0
 },
 "id": "camera_3706F47B_2F05_DBC0_41B1_A1D6AEA171FA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -169.57,
   "backwardYaw": 6.53,
   "distance": 1,
   "panorama": "this.panorama_2541AD97_2929_6DFC_41B4_218C342B13E8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 173.09,
   "backwardYaw": -63.43,
   "distance": 1,
   "panorama": "this.panorama_22D67C73_2929_5334_41B8_44953A536328"
  }
 ],
 "hfovMin": "100%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20",
 "thumbnailUrl": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_t.jpg",
 "label": "Nista Mandala",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3099AABA_2929_5734_41BD_C731D5A5E515",
  "this.overlay_3C9EFD50_292B_2D74_41BE_EB2DE037DB8A"
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_3673D8C9_2CB8_7815_41C1_CC4FBFFA6362",
 "levels": [
  {
   "url": "media/popup_3ABD3D65_2C98_F81D_41B1_AE0D42F71F51_0_0.jpg",
   "width": 2182,
   "class": "ImageResourceLevel",
   "height": 1516
  },
  {
   "url": "media/popup_3ABD3D65_2C98_F81D_41B1_AE0D42F71F51_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1422
  },
  {
   "url": "media/popup_3ABD3D65_2C98_F81D_41B1_AE0D42F71F51_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_3ABD3D65_2C98_F81D_41B1_AE0D42F71F51_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.47,
 "id": "popup_3901EC0D_2CA8_582D_41C4_BE3B7A4C8CC7",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_3901EC0D_2CA8_582D_41C4_BE3B7A4C8CC7_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 11.2,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "yaw": 139.09,
 "popupDistance": 100
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -116.94,
   "backwardYaw": 37.06,
   "distance": 1,
   "panorama": "this.panorama_26621FA7_2959_2DDC_41B4_8781834C6F32"
  }
 ],
 "hfovMin": "100%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_272CA0BD_2959_732C_41A4_A816EE15571A",
 "thumbnailUrl": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_t.jpg",
 "label": "Madya Mandala - Wantilan Belakang",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0E5DD910_295F_52F4_41B8_085A39B6E2F2",
  "this.overlay_0EAC4FBA_2959_6D34_41AD_FC9456FC8CEB"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 131.73,
  "pitch": -2.01
 },
 "id": "panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_387B22EA_2F05_DCC3_41AC_EB49F5DE31F6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_367168CD_2CB8_782D_41C4_85BB2F4AB215",
 "levels": [
  {
   "url": "media/popup_3A956721_2CA8_C815_41BD_0694CE3530A7_0_0.jpg",
   "width": 2182,
   "class": "ImageResourceLevel",
   "height": 1516
  },
  {
   "url": "media/popup_3A956721_2CA8_C815_41BD_0694CE3530A7_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1422
  },
  {
   "url": "media/popup_3A956721_2CA8_C815_41BD_0694CE3530A7_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_3A956721_2CA8_C815_41BD_0694CE3530A7_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 46.6,
   "backwardYaw": 179.87,
   "distance": 1,
   "panorama": "this.panorama_276A1267_2959_375C_41C1_21F1FA6E5A52"
  }
 ],
 "hfovMin": "100%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F",
 "thumbnailUrl": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_t.jpg",
 "label": "Utama Mandala - Panggungan",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0C70361B_2959_7EF4_4198_58D86E63E92E",
  "this.overlay_38760BDA_2CB8_7837_41A0_85E49E0FDEDA",
  "this.popup_3946970D_2CB8_C82D_41BA_48431CB8ABF2"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.2,
  "pitch": 3.11
 },
 "id": "panorama_270AA85B_2956_D374_41C1_22C1F481E73A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_39552B38_2C98_D873_4186_4AB544470568",
 "levels": [
  {
   "url": "media/popup_39CB7A5B_2C98_5835_41A0_EA55D95D6FDE_0_0.jpg",
   "width": 2182,
   "class": "ImageResourceLevel",
   "height": 1516
  },
  {
   "url": "media/popup_39CB7A5B_2C98_5835_41A0_EA55D95D6FDE_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1422
  },
  {
   "url": "media/popup_39CB7A5B_2C98_5835_41A0_EA55D95D6FDE_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_39CB7A5B_2C98_5835_41A0_EA55D95D6FDE_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.97,
 "id": "popup_3AD2A607_2CA8_481E_41A6_40C649A08F90",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_3AD2A607_2CA8_481E_41A6_40C649A08F90_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 11.08,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "yaw": -107.11,
 "popupDistance": 100
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 8.62,
 "id": "popup_3A956721_2CA8_C815_41BD_0694CE3530A7",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_3A956721_2CA8_C815_41BD_0694CE3530A7_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -1.86,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "yaw": -148.31,
 "popupDistance": 100
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 4.85,
 "id": "popup_39B31967_2CA8_381D_4188_F6DCE19342FC",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_39B31967_2CA8_381D_4188_F6DCE19342FC_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 1.53,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "yaw": -172.8,
 "popupDistance": 100
},
{
 "class": "Photo",
 "duration": 5000,
 "label": "DSC09219",
 "id": "photo_62C9C948_292A_D554_41C1_3BE9E4C9687F",
 "thumbnailUrl": "media/photo_62C9C948_292A_D554_41C1_3BE9E4C9687F_t.jpg",
 "width": 3376,
 "image": {
  "levels": [
   {
    "url": "media/photo_62C9C948_292A_D554_41C1_3BE9E4C9687F.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 6000
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1.76,
  "pitch": 3.24
 },
 "id": "panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_3670B8CB_2CB8_7815_41BB_F2948866CD77",
 "levels": [
  {
   "url": "media/popup_39D355C3_2CA8_4815_41A3_5151BD46298D_0_0.jpg",
   "width": 2182,
   "class": "ImageResourceLevel",
   "height": 1516
  },
  {
   "url": "media/popup_39D355C3_2CA8_4815_41A3_5151BD46298D_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1422
  },
  {
   "url": "media/popup_39D355C3_2CA8_4815_41A3_5151BD46298D_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_39D355C3_2CA8_4815_41A3_5151BD46298D_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -63.94,
   "backwardYaw": 55.65,
   "distance": 1,
   "panorama": "this.panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31"
  }
 ],
 "hfovMin": "100%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB",
 "thumbnailUrl": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_t.jpg",
 "label": "Utama Mandala - Paselang",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0E742C25_295B_52DC_41BA_C05B03937749",
  "this.overlay_0E419BB0_295B_7534_41C3_497CE6454563"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 112.42,
   "backwardYaw": 111.42,
   "distance": 1,
   "panorama": "this.panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -127.24,
   "backwardYaw": -59.41,
   "distance": 1,
   "panorama": "this.panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875"
  }
 ],
 "hfovMin": "100%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_256B7EDD_2957_2F6C_41C3_559AADD10985",
 "thumbnailUrl": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_t.jpg",
 "label": "Utama Mandala - Padma",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0D93C2E5_2969_D75C_41C0_D87CF4C1BAD6",
  "this.overlay_0C9E8D7A_2969_2D34_41AF_274A36E5CC4E",
  "this.overlay_38687077_2CA8_C8FD_41C3_A23350EAB12F",
  "this.overlay_398DDBA0_2CA8_5813_4194_535D71322653",
  "this.overlay_39A68380_2CA9_C813_41B8_15B87E10DDB5",
  "this.popup_3AD2A607_2CA8_481E_41A6_40C649A08F90",
  "this.popup_39163E95_2CA8_F832_41C0_09EE3B4FFF5C",
  "this.popup_39FA3182_2CA8_4816_41C0_B41E7C3B2F14"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -172.57,
  "pitch": 4.88
 },
 "id": "panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_22BBBE5B_2C68_7835_41C4_A95D45A22ABE.mp3",
  "oggUrl": "media/audio_22BBBE5B_2C68_7835_41C4_A95D45A22ABE.ogg"
 },
 "id": "audio_22BBBE5B_2C68_7835_41C4_A95D45A22ABE",
 "data": {
  "label": "BALINESE RELAXING MUSIC-BALI SPA MUSIC-GAMELAN BALI MEDITATION"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 137.92,
  "pitch": 0
 },
 "id": "camera_379DC517_2F05_2540_41C4_56F72C57AC4F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.86,
 "id": "popup_393AEFC5_2CA8_781D_41BB_B5F68F8B45F2",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_393AEFC5_2CA8_781D_41BB_B5F68F8B45F2_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -1.48,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "yaw": 168.86,
 "popupDistance": 100
},
{
 "class": "PhotoAlbum",
 "label": "Photo Album 2023_07_02_17_57_IMG_8247",
 "thumbnailUrl": "media/album_11C6F92D_2AE9_552C_41B0_DC0857C2764D_t.png",
 "playList": "this.album_11C6F92D_2AE9_552C_41B0_DC0857C2764D_AlbumPlayList",
 "id": "album_11C6F92D_2AE9_552C_41B0_DC0857C2764D"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 9.11,
 "id": "popup_3946970D_2CB8_C82D_41BA_48431CB8ABF2",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_3946970D_2CB8_C82D_41BA_48431CB8ABF2_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -3.37,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "yaw": -167.9,
 "popupDistance": 100
},
{
 "class": "ImageResource",
 "id": "ImageResource_367B38D4_2CB8_7833_41B4_18A054E4F33A",
 "levels": [
  {
   "url": "media/popup_39C9DC4E_2CA9_D82E_41B1_9A97766EAEF3_0_0.jpg",
   "width": 2182,
   "class": "ImageResourceLevel",
   "height": 1516
  },
  {
   "url": "media/popup_39C9DC4E_2CA9_D82E_41B1_9A97766EAEF3_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1422
  },
  {
   "url": "media/popup_39C9DC4E_2CA9_D82E_41B1_9A97766EAEF3_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_39C9DC4E_2CA9_D82E_41B1_9A97766EAEF3_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.87,
  "pitch": 0
 },
 "id": "camera_386B72D9_2F05_DCC1_41C0_0DDDE2A5A98F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 90.57,
   "backwardYaw": -0.88,
   "distance": 1,
   "panorama": "this.panorama_270AA85B_2956_D374_41C1_22C1F481E73A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 12.69,
   "backwardYaw": 160.91,
   "distance": 1,
   "panorama": "this.panorama_2541AD97_2929_6DFC_41B4_218C342B13E8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 50.87,
   "backwardYaw": -116.44,
   "distance": 1,
   "panorama": "this.panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF"
  }
 ],
 "hfovMin": "100%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B",
 "thumbnailUrl": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_t.jpg",
 "label": "Madya Mandala - Apit Lawang",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_34A30128_292A_F2D4_41A1_22655C5308B8",
  "this.overlay_3455A017_292B_D2FB_41C2_DFC9B4ED052A",
  "this.overlay_32A3481E_292B_72EC_4196_6DE078033002",
  "this.overlay_39CE7E01_2C98_3812_41B9_3BAEC6385165",
  "this.overlay_39DE3F6A_2C9F_D817_41B2_C9DCBA83D9BA",
  "this.overlay_39C100AE_2C98_C86F_41B4_8AE1B5C4CBAF",
  "this.popup_39AE91AA_2C98_4816_419E_52E0F0900BD7",
  "this.popup_39FE0854_2C99_D832_4179_6437F0ED0F4A",
  "this.popup_39F29BC4_2C98_3813_41C2_83DFF82C9DA5"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 9.8,
  "pitch": 0
 },
 "id": "camera_38D03425_2F05_DB40_41C2_074FDF3D768C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "viewerArea": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "class": "PhotoAlbumPlayer",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer"
},
{
 "class": "Photo",
 "duration": 5000,
 "label": "DSC09227",
 "id": "photo_14B27641_292A_FF54_41BF_A279DBD83609",
 "thumbnailUrl": "media/photo_14B27641_292A_FF54_41BF_A279DBD83609_t.jpg",
 "width": 3376,
 "image": {
  "levels": [
   {
    "url": "media/photo_14B27641_292A_FF54_41BF_A279DBD83609.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 6000
},
{
 "class": "ImageResource",
 "id": "ImageResource_367C38D9_2CB8_7835_4196_9992E8F07C6D",
 "levels": [
  {
   "url": "media/popup_39FA3182_2CA8_4816_41C0_B41E7C3B2F14_0_0.jpg",
   "width": 2182,
   "class": "ImageResourceLevel",
   "height": 1516
  },
  {
   "url": "media/popup_39FA3182_2CA8_4816_41C0_B41E7C3B2F14_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1422
  },
  {
   "url": "media/popup_39FA3182_2CA8_4816_41C0_B41E7C3B2F14_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_39FA3182_2CA8_4816_41C0_B41E7C3B2F14_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1.51,
  "pitch": 0
 },
 "id": "camera_3714148C_2F05_DB40_41C2_01867518348D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 136.79,
  "pitch": 0
 },
 "id": "camera_37D0156F_2F05_25C0_4195_AB845D5C33F3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_366348DD_2CB8_782D_41BE_A39E18573332",
 "levels": [
  {
   "url": "media/popup_3935E294_2CB8_4833_4182_0A45A803C466_0_0.jpg",
   "width": 2182,
   "class": "ImageResourceLevel",
   "height": 1516
  },
  {
   "url": "media/popup_3935E294_2CB8_4833_4182_0A45A803C466_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1422
  },
  {
   "url": "media/popup_3935E294_2CB8_4833_4182_0A45A803C466_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_3935E294_2CB8_4833_4182_0A45A803C466_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -174.23,
  "pitch": 4.71
 },
 "id": "panorama_24A41948_2957_7554_41B6_7E9FE67EC525_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -115.94,
  "pitch": 1.62
 },
 "id": "panorama_272CA0BD_2959_732C_41A4_A816EE15571A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 164.3,
  "pitch": 0
 },
 "id": "camera_39FAC22E_2F05_DF43_4150_FFDF4CE7649D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_364FF8C4_2CB8_7813_418B_BB4C41B28F24",
 "levels": [
  {
   "url": "media/popup_3ABF8528_2C9B_C813_41C6_3D283EF39490_0_0.jpg",
   "width": 2182,
   "class": "ImageResourceLevel",
   "height": 1516
  },
  {
   "url": "media/popup_3ABF8528_2C9B_C813_41C6_3D283EF39490_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1422
  },
  {
   "url": "media/popup_3ABF8528_2C9B_C813_41C6_3D283EF39490_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_3ABF8528_2C9B_C813_41C6_3D283EF39490_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_367D28DC_2CB8_7833_41C6_3046BB8B40A0",
 "levels": [
  {
   "url": "media/popup_3AD2A607_2CA8_481E_41A6_40C649A08F90_0_0.jpg",
   "width": 2182,
   "class": "ImageResourceLevel",
   "height": 1516
  },
  {
   "url": "media/popup_3AD2A607_2CA8_481E_41A6_40C649A08F90_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1422
  },
  {
   "url": "media/popup_3AD2A607_2CA8_481E_41A6_40C649A08F90_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_3AD2A607_2CA8_481E_41A6_40C649A08F90_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 8.43,
 "id": "popup_39FA3182_2CA8_4816_41C0_B41E7C3B2F14",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_39FA3182_2CA8_4816_41C0_B41E7C3B2F14_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 11.96,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "yaw": 76.29,
 "popupDistance": 100
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 8.37,
 "id": "popup_383AE527_2C98_C81D_41C2_E29D25C20714",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_383AE527_2C98_C81D_41C2_E29D25C20714_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -1.61,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "yaw": 85.96,
 "popupDistance": 100
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.09,
 "id": "popup_39CB7A5B_2C98_5835_41A0_EA55D95D6FDE",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_39CB7A5B_2C98_5835_41A0_EA55D95D6FDE_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -4.88,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "yaw": -106.6,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 20.65,
  "pitch": 21.81
 },
 "id": "panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -124.35,
  "pitch": 0
 },
 "id": "camera_38AFC343_2F05_DDC1_419D_38DDEE54EE1B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -142.94,
  "pitch": 0
 },
 "id": "camera_389DC396_2F05_DD40_41C7_0E3CB90428C8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 83.53,
  "pitch": 0
 },
 "id": "camera_3764E49E_2F05_DB43_41B2_B5ED9A566C20",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "label": "bale_gede",
 "id": "album_11C6F92D_2AE9_552C_41B0_DC0857C2764D_1",
 "thumbnailUrl": "media/album_11C6F92D_2AE9_552C_41B0_DC0857C2764D_1_t.jpg",
 "width": 4032,
 "image": {
  "levels": [
   {
    "url": "media/album_11C6F92D_2AE9_552C_41B0_DC0857C2764D_1.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 3024
},
{
 "class": "ImageResource",
 "id": "ImageResource_367F88D8_2CB8_7833_41C5_A7B50EFA4FA7",
 "levels": [
  {
   "url": "media/popup_390F1898_2CAB_F832_41BA_BABA687E2990_0_0.jpg",
   "width": 2182,
   "class": "ImageResourceLevel",
   "height": 1516
  },
  {
   "url": "media/popup_390F1898_2CAB_F832_41BA_BABA687E2990_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1422
  },
  {
   "url": "media/popup_390F1898_2CAB_F832_41BA_BABA687E2990_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_390F1898_2CAB_F832_41BA_BABA687E2990_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 52.76,
  "pitch": 0
 },
 "id": "camera_377AC4B0_2F05_DB5F_41BC_D3F124C59332",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 8.12,
 "id": "popup_3A6D934E_2C98_C82E_41C3_F9540761C76E",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_3A6D934E_2C98_C82E_41C3_F9540761C76E_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -1.74,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "yaw": 12.48,
 "popupDistance": 100
},
{
 "class": "ImageResource",
 "id": "ImageResource_367E98D7_2CB8_783D_41C3_1BE9AF7BCBA6",
 "levels": [
  {
   "url": "media/popup_3901EC0D_2CA8_582D_41C4_BE3B7A4C8CC7_0_0.jpg",
   "width": 2182,
   "class": "ImageResourceLevel",
   "height": 1516
  },
  {
   "url": "media/popup_3901EC0D_2CA8_582D_41C4_BE3B7A4C8CC7_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1422
  },
  {
   "url": "media/popup_3901EC0D_2CA8_582D_41C4_BE3B7A4C8CC7_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_3901EC0D_2CA8_582D_41C4_BE3B7A4C8CC7_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_364538BF_2CB8_786D_418B_E0FBF0EDFD37",
 "levels": [
  {
   "url": "media/popup_3A6D934E_2C98_C82E_41C3_F9540761C76E_0_0.jpg",
   "width": 2182,
   "class": "ImageResourceLevel",
   "height": 1516
  },
  {
   "url": "media/popup_3A6D934E_2C98_C82E_41C3_F9540761C76E_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1422
  },
  {
   "url": "media/popup_3A6D934E_2C98_C82E_41C3_F9540761C76E_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_3A6D934E_2C98_C82E_41C3_F9540761C76E_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.83,
 "id": "popup_39FE3DCA_2CA9_F817_41B1_56D6A394CCDE",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_39FE3DCA_2CA9_F817_41B1_56D6A394CCDE_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -5.76,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "yaw": -46.69,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -61.3,
  "pitch": 0
 },
 "id": "camera_37369461_2F05_DBC0_41A1_2982744F8C50",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 116.06,
  "pitch": 0
 },
 "id": "camera_39E1521C_2F05_DF47_41C5_977035ABD859",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -145.31,
  "pitch": 7.95
 },
 "id": "panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 55.65,
   "backwardYaw": -63.94,
   "distance": 1,
   "panorama": "this.panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB"
  }
 ],
 "hfovMin": "100%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679",
 "thumbnailUrl": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_t.jpg",
 "label": "Perantenan",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0E682EF4_2959_2F3C_41C1_1AF189874E50"
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.79,
 "id": "popup_3ABD3D65_2C98_F81D_41B1_AE0D42F71F51",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_3ABD3D65_2C98_F81D_41B1_AE0D42F71F51_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -8.02,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "yaw": 94.5,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -138.17,
  "pitch": 0
 },
 "id": "camera_39CD923E_2F05_DF43_41B9_5FEA7FC06882",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 6.53,
   "backwardYaw": -169.57,
   "distance": 1,
   "panorama": "this.panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 118.7,
   "backwardYaw": -52.88,
   "distance": 1,
   "panorama": "this.panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 160.91,
   "backwardYaw": 12.69,
   "distance": 1,
   "panorama": "this.panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B"
  }
 ],
 "hfovMin": "100%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2541AD97_2929_6DFC_41B4_218C342B13E8",
 "thumbnailUrl": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_t.jpg",
 "label": "Madya Mandala",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_32A97573_2936_DD34_41AB_9C7CA34C6610",
  "this.overlay_328387D5_2939_3D7C_41A7_C63500941F26",
  "this.overlay_33B25F15_2939_EEFC_419D_8ABBA1F58B99",
  "this.overlay_3F48425B_2C68_4835_41A4_53C327E07BB3",
  "this.popup_39CB7A5B_2C98_5835_41A0_EA55D95D6FDE",
  "this.overlay_38B55E6B_2C98_5815_41AB_33C86F84217A",
  "this.popup_3955F67B_2C99_C8F5_41B4_437EAEDBECB9"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -144.95,
  "pitch": 0
 },
 "id": "camera_374A94C1_2F05_24C0_41B2_2CFF725A576B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 116.57,
  "pitch": 0
 },
 "id": "camera_3839D292_2F05_DF40_4190_F4C315987EB2",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 41.83,
   "backwardYaw": 180,
   "distance": 1,
   "panorama": "this.panorama_270AA85B_2956_D374_41C1_22C1F481E73A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 75.24,
   "backwardYaw": -42.08,
   "distance": 1,
   "panorama": "this.panorama_24A41948_2957_7554_41B6_7E9FE67EC525"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -43.21,
   "backwardYaw": 53.64,
   "distance": 1,
   "panorama": "this.panorama_22A8DDDF_2957_ED6C_4174_A248C6572773"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -98.6,
   "backwardYaw": -24.49,
   "distance": 1,
   "panorama": "this.panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 178.49,
   "backwardYaw": 17.46,
   "distance": 1,
   "panorama": "this.panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875"
  }
 ],
 "hfovMin": "100%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31",
 "thumbnailUrl": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_t.jpg",
 "label": "Utama Mandala",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3593AF54_2969_2D7C_41B3_BBF05177C671",
  "this.overlay_0928F862_296B_D354_41BC_F7FF7336983B",
  "this.overlay_0A633FE7_297F_6D5C_4195_C540C8300A95",
  "this.overlay_088EF833_2979_5334_41BC_3A781AC79016",
  "this.overlay_34C9F7AC_2CA9_C813_41C2_61B79D80072E"
 ]
},
{
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "touchControlMode": "drag_rotation",
 "buttonCardboardView": [
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.99,
 "id": "popup_39FE0854_2C99_D832_4179_6437F0ED0F4A",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "url": "media/popup_39FE0854_2C99_D832_4179_6437F0ED0F4A_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -10.28,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "yaw": 129.8,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 37.18,
  "pitch": 0
 },
 "id": "camera_37BF34F3_2F05_24C0_41C3_A487427F2A67",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_364958C3_2CB8_7815_4194_4E6A5A2D0B0B",
 "levels": [
  {
   "url": "media/popup_39AE91AA_2C98_4816_419E_52E0F0900BD7_0_0.jpg",
   "width": 2182,
   "class": "ImageResourceLevel",
   "height": 1516
  },
  {
   "url": "media/popup_39AE91AA_2C98_4816_419E_52E0F0900BD7_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1422
  },
  {
   "url": "media/popup_39AE91AA_2C98_4816_419E_52E0F0900BD7_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_39AE91AA_2C98_4816_419E_52E0F0900BD7_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -167.31,
  "pitch": 0
 },
 "id": "camera_38F213EE_2F05_DCC0_41C5_B171C78CD60B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 101.99,
  "pitch": 5.23
 },
 "id": "panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -6.91,
  "pitch": 0
 },
 "id": "camera_38C0140A_2F05_DB43_41B3_5597572952B5",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_364898C2_2CB8_7817_41C0_DA6CB0BB6094",
 "levels": [
  {
   "url": "media/popup_39FE0854_2C99_D832_4179_6437F0ED0F4A_0_0.jpg",
   "width": 2182,
   "class": "ImageResourceLevel",
   "height": 1516
  },
  {
   "url": "media/popup_39FE0854_2C99_D832_4179_6437F0ED0F4A_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1422
  },
  {
   "url": "media/popup_39FE0854_2C99_D832_4179_6437F0ED0F4A_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_39FE0854_2C99_D832_4179_6437F0ED0F4A_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ]
},
{
 "class": "Photo",
 "duration": 5000,
 "label": "gedong_penyimpenan",
 "id": "photo_15163981_2AE9_75D4_4194_D8B971534709",
 "thumbnailUrl": "media/photo_15163981_2AE9_75D4_4194_D8B971534709_t.jpg",
 "width": 3024,
 "image": {
  "levels": [
   {
    "url": "media/photo_15163981_2AE9_75D4_4194_D8B971534709.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 4032
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -104.76,
  "pitch": 0
 },
 "id": "camera_38585322_2F05_DD40_41B3_FE7395744ACC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -110.79,
  "pitch": 0
 },
 "id": "camera_37262446_2F05_DBC0_419A_9E919AD8805F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "minWidth": 100,
 "minHeight": 50,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "borderRadius": 0,
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "data": {
  "name": "--- MENU"
 },
 "scrollBarWidth": 10,
 "id": "Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "children": [
  "this.Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
  "this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA"
 ],
 "backgroundImageUrl": "skin/Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7.png",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "height": "12.832%",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "overflow": "visible",
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "data": {
  "name": "-- SETTINGS"
 },
 "scrollBarWidth": 10,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": 641,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "data": {
  "name": "--STICKER"
 },
 "scrollBarWidth": 10,
 "id": "Container_14F80305_1BED_F1EE_4193_B39F49D6928C",
 "left": 25,
 "width": 573,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_14FBF305_1BED_F1EE_419A_A9F069FE2B28",
  "this.Label_14FBC305_1BED_F1EE_41B3_DAC14B1EE44E",
  "this.Label_14F82305_1BED_F1EE_41AD_7A6E6AD00A22"
 ],
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "top": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": 116,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "overflow": "visible",
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PANORAMA LIST"
 },
 "scrollBarWidth": 10,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--LOCATION"
 },
 "scrollBarWidth": 10,
 "id": "Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_1813AA3E_1663_8BF1_41A2_CA5EE3718362",
  "this.Container_1812AA3F_1663_8BEF_41A4_02F566B1BC6D"
 ],
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PHOTOALBUM"
 },
 "scrollBarWidth": 10,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "---FLOORPLAN"
 },
 "scrollBarWidth": 10,
 "id": "Container_6AFFC5BF_2B2B_DD2C_417D_09B0327BD06F",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_6AFE65BE_2B2B_DD2C_41A6_7889F645FD46"
 ],
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_6AFFC5BF_2B2B_DD2C_417D_09B0327BD06F, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "veilPopupPanorama",
 "left": 0,
 "right": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 0,
 "borderSize": 0,
 "bottom": 0,
 "paddingRight": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "backgroundColor": [
  "#000000"
 ],
 "top": 0,
 "paddingTop": 0,
 "backgroundOpacity": 0.55,
 "class": "UIComponent",
 "borderRadius": 0,
 "paddingBottom": 0,
 "visible": false,
 "shadow": false,
 "minHeight": 0,
 "propagateClick": false,
 "data": {
  "name": "UIComponent4384"
 },
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [],
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "right": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 0,
 "borderSize": 0,
 "bottom": 0,
 "paddingRight": 0,
 "backgroundColor": [],
 "top": 0,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "ZoomImage",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "custom",
 "visible": false,
 "shadow": false,
 "minHeight": 0,
 "propagateClick": false,
 "data": {
  "name": "ZoomImage4385"
 },
 "paddingLeft": 0
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "CloseButton4386"
 },
 "id": "closeButtonPopupPanorama",
 "rollOverIconColor": "#666666",
 "fontSize": "1.29vmin",
 "horizontalAlign": "center",
 "right": 10,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 0,
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "iconColor": "#000000",
 "borderColor": "#000000",
 "top": 10,
 "layout": "horizontal",
 "verticalAlign": "middle",
 "paddingRight": 5,
 "iconLineWidth": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "label": "",
 "mode": "push",
 "iconHeight": 20,
 "shadowBlurRadius": 6,
 "paddingTop": 5,
 "pressedIconColor": "#888888",
 "backgroundOpacity": 0.3,
 "iconBeforeLabel": true,
 "class": "CloseButton",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 5,
 "textDecoration": "none",
 "visible": false,
 "fontStyle": "normal",
 "shadow": false,
 "shadowSpread": 1,
 "cursor": "hand",
 "minHeight": 0,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 20,
 "paddingLeft": 5
},
{
 "width": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "horizontalAlign": "center",
 "borderSize": 0,
 "minWidth": 1,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "toggle",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "height": 58,
 "maxWidth": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxHeight": 58,
 "paddingBottom": 0,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "propagateClick": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingLeft": 0
},
{
 "width": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "horizontalAlign": "center",
 "borderSize": 0,
 "minWidth": 1,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "toggle",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "height": 58,
 "maxWidth": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxHeight": 58,
 "paddingBottom": 0,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "propagateClick": true,
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingLeft": 0
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.64,
   "pitch": -28.07,
   "yaw": -0.88,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_35ED2A9C_295B_37EC_41A5_1B02EA987D44",
   "distance": 100
  }
 ],
 "id": "overlay_34E68393_295A_D5FF_41B5_FFAA6EA12C4C",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B, this.camera_39D99260_2F05_DFC0_41BC_159C51537169); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.64,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.57,
   "pitch": -21.77,
   "yaw": -163.8,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_36352450_296F_3375_41AB_4C200B9D6E08",
   "distance": 50
  }
 ],
 "id": "overlay_33664F27_2959_2EDC_418D_A9F899290620",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_22A8DDDF_2957_ED6C_4174_A248C6572773, this.camera_39C6E24F_2F05_DFC1_41B0_83C8DBCBE262); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.57,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.74,
   "pitch": -22.55,
   "yaw": 160.91,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_35EA7A9C_295B_37EC_41A6_88B1F2AABCB9",
   "distance": 50
  }
 ],
 "id": "overlay_3361E62E_295F_DF2D_41B8_183A397FBF24",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24A41948_2957_7554_41B6_7E9FE67EC525, this.camera_39FAC22E_2F05_DF43_4150_FFDF4CE7649D); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.74,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 160.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.55
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.83,
   "pitch": -22.4,
   "yaw": 180,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_35EA3A9C_295B_37EC_41AE_CA9D42F4918B",
   "distance": 100
  }
 ],
 "id": "overlay_343E8371_295F_5534_41C1_D0DFCB7CB787",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31, this.camera_39CD923E_2F05_DF43_41B9_5FEA7FC06882); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.45,
   "pitch": -11.53,
   "yaw": -120.17,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3621A8A1_2CB8_7815_41A4_99A6CE857E3E",
   "distance": 100
  }
 ],
 "id": "overlay_39AC53E4_2C99_C813_41B0_5D3CF8342618",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_39E3C67F_2C98_48ED_41C1_0E4DCDD7D37D, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_364D38C7_2CB8_781D_4193_7BF5263ECA55, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.45,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -120.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.79,
   "pitch": -8.02,
   "yaw": 94.5,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_362118A1_2CB8_7815_41BF_8E29BAEA3988",
   "distance": 100
  }
 ],
 "id": "overlay_385313C9_2C98_4815_41B5_4EA015A8F793",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_3ABD3D65_2C98_F81D_41B1_AE0D42F71F51, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_3673D8C9_2CB8_7815_41C1_CC4FBFFA6362, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.79,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 94.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.42,
   "pitch": -24.56,
   "yaw": 37.06,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0372ED94_292F_2DFC_41B0_2EDDB17D9C5C",
   "distance": 100
  }
 ],
 "id": "overlay_0872BB19_2969_76F4_41A3_5349A98906D4",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_272CA0BD_2959_732C_41A4_A816EE15571A, this.camera_381422C8_2F05_DCC0_41A3_CA3371A5BAD8); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.42,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 37.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.62,
   "pitch": -22.3,
   "yaw": -142.82,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_03720D94_292F_2DFC_41C2_3B5F4B809311",
   "distance": 100
  }
 ],
 "id": "overlay_0836736D_2969_D52C_41C4_191C33F31EA7",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_276A1267_2959_375C_41C1_21F1FA6E5A52, this.camera_386B72D9_2F05_DCC1_41C0_0DDDE2A5A98F); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.62,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -142.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.99,
   "pitch": -22.42,
   "yaw": -96.47,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_03738D95_292F_2DFC_41BB_25F14D36D373",
   "distance": 50
  }
 ],
 "id": "overlay_0A4AC128_2957_32D4_41B2_5A73DD2AC3CE",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875, this.camera_387B22EA_2F05_DCC3_41AC_EB49F5DE31F6); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.99,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -96.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.42
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.3,
   "pitch": -7.51,
   "yaw": 78.92,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3623C89F_2CB8_782D_41B0_BC29118059D4",
   "distance": 100
  }
 ],
 "id": "overlay_386F1EE6_2C98_381F_41BF_BD7BF3FA4E83",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_3ABF8528_2C9B_C813_41C6_3D283EF39490, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_364FF8C4_2CB8_7813_418B_BB4C41B28F24, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.3,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.19,
   "pitch": -27.07,
   "yaw": 17.46,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0CDF4357_296F_D57C_41B9_80C8ECF6A40B",
   "distance": 100
  }
 ],
 "id": "overlay_0B9AB6BC_296B_3F2C_4199_41F6C75E7337",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31, this.camera_3714148C_2F05_DB40_41C2_01867518348D); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.19,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 17.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.67,
   "pitch": -31.84,
   "yaw": -59.41,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0CD89358_296F_D574_41C0_337E10990C42",
   "distance": 50
  }
 ],
 "id": "overlay_0BFDD685_296B_3FDC_4187_6807904B812C",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_256B7EDD_2957_2F6C_41C3_559AADD10985, this.camera_377AC4B0_2F05_DB5F_41BC_D3F124C59332); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.67,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.11,
   "pitch": -17.37,
   "yaw": 180,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_03714D94_292F_2DFC_41BC_DECF4F1CAD7F",
   "distance": 100
  }
 ],
 "id": "overlay_08A69A22_2969_D6D4_41A2_63A3DCDC3DED",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_26621FA7_2959_2DDC_41B4_8781834C6F32, this.camera_3764E49E_2F05_DB43_41B2_B5ED9A566C20); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.11,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.26,
   "pitch": -9.15,
   "yaw": 117.61,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_362F08A9_2CB8_7815_41B0_7906A40D7B38",
   "distance": 100
  }
 ],
 "id": "overlay_3826AD78_2CB8_38F3_4196_DC02DE078538",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_3935E294_2CB8_4833_4182_0A45A803C466, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_366348DD_2CB8_782D_41BE_A39E18573332, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.26,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 117.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.86,
   "pitch": -45.16,
   "yaw": -1.13,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_034C9D95_292F_2DFC_41BE_74A73ADD6A60",
   "distance": 100
  }
 ],
 "id": "overlay_0C93EAB1_2959_D737_41B0_EE89CBDBAF09",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_26621FA7_2959_2DDC_41B4_8781834C6F32, this.camera_37BF34F3_2F05_24C0_41C3_A487427F2A67); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.86,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -45.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.53,
   "pitch": -21.34,
   "yaw": 179.87,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_034C2D96_292F_2DFC_41A3_45A7793BC8B6",
   "distance": 100
  }
 ],
 "id": "overlay_0F3CF4EE_295E_D32D_41B6_01BB01155615",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F, this.camera_37AF64E2_2F05_24C0_41BD_B6B9D09057FA); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.53,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.3,
   "pitch": -7.01,
   "yaw": 108.57,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_362C08AA_2CB8_7817_41BA_3E6D9EC2DD88",
   "distance": 100
  }
 ],
 "id": "overlay_396C26D9_2CB8_4835_4190_A128139685D9",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_38653F67_2CB9_D81D_41C3_1AC750B4D6DA, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_3661E8E0_2CB8_7813_41C5_4857232EF119, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.3,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 108.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.23,
   "pitch": -26.57,
   "yaw": -42.08,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_36AE6C17_296A_D2FC_41B6_DAA62B48C3D8",
   "distance": 50
  }
 ],
 "id": "overlay_09DC6598_2969_5DF4_41B6_4E8524D5EA36",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31, this.camera_38585322_2F05_DD40_41B3_FE7395744ACC); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.23,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -42.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.06,
   "pitch": -28.33,
   "yaw": -15.7,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_36AE8C17_296A_D2FC_41C4_BF2B43074541",
   "distance": 50
  }
 ],
 "id": "overlay_32294170_2969_7534_41C2_E5F7A428368D",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_270AA85B_2956_D374_41C1_22C1F481E73A, this.camera_38492307_2F05_DD40_41C1_9332690A1AAB); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.06,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -15.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.84,
   "pitch": -4.75,
   "yaw": 148.01,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_362678A2_2CB8_7817_41A1_C188412B960C",
   "distance": 100
  }
 ],
 "id": "overlay_39AA06D4_2C97_C833_41C3_3420F665FB39",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_39D355C3_2CA8_4815_41A3_5151BD46298D, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_3670B8CB_2CB8_7815_41BB_F2948866CD77, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 148.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.62,
   "pitch": -1.86,
   "yaw": -148.31,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_362628A2_2CB8_7817_41C0_6B627012FBDC",
   "distance": 100
  }
 ],
 "id": "overlay_39DD8B4B_2CA8_3815_41C3_B1174F62AE85",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_3A956721_2CA8_C815_41BD_0694CE3530A7, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_367168CD_2CB8_782D_41C4_85BB2F4AB215, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.62,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -148.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.76,
   "pitch": -31.09,
   "yaw": -170.2,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_034EDD9D_292F_2DEC_41C1_A90466440D00",
   "distance": 50
  }
 ],
 "id": "overlay_00A67A56_292B_377C_418E_E3C34B8EC40F",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_22D67C73_2929_5334_41B8_44953A536328, this.camera_3758C4D2_2F05_24C0_41A5_D92E0F72F012); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.76,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.19,
   "pitch": -27.07,
   "yaw": 69.21,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_034E7D9D_292F_2DEC_418C_6CFC2F3F563F",
   "distance": 50
  }
 ],
 "id": "overlay_0062157D_2929_7D2C_417F_4101EE31E47D",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF, this.camera_374A94C1_2F05_24C0_41B2_2CFF725A576B); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.19,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 69.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.02,
   "pitch": -29.83,
   "yaw": -52.88,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_34F64B13_292B_76F4_41B9_7C3E5EEE718F",
   "distance": 100
  }
 ],
 "id": "overlay_30935B9D_2929_75EC_41B2_21BAEE80A2BD",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2541AD97_2929_6DFC_41B4_218C342B13E8, this.camera_37369461_2F05_DBC0_41A1_2982744F8C50); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.02,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.7,
   "pitch": -31.59,
   "yaw": -116.44,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0ECD968F_292B_7FEB_41B0_4AB8554D38B7",
   "distance": 50
  }
 ],
 "id": "overlay_32DF2D63_2929_2D54_41B3_1012AB3594B1",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B, this.camera_3706F47B_2F05_DBC0_41B1_A1D6AEA171FA); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.7,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -116.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.11,
   "pitch": -27.82,
   "yaw": 35.05,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_35EC3A9B_295B_37F4_4181_66EB97EE3D0A",
   "distance": 100
  }
 ],
 "id": "overlay_37DDF287_2959_57DC_41C4_9F5C22D1EE0A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_25655EBE_2959_2F2C_418C_377D5D448CAF, this.camera_37262446_2F05_DBC0_419A_9E919AD8805F); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.11,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 35.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.37,
   "pitch": -1.61,
   "yaw": 85.96,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_363F6893_2CB8_7835_41A5_17B4778C38B3",
   "distance": 100
  }
 ],
 "id": "overlay_3BB92E79_2C98_78F5_4189_36297715B40C",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_383AE527_2C98_C81D_41C2_E29D25C20714, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_364408BE_2CB8_786F_41BE_9BB5E1A601CA, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.37,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.12,
   "pitch": -1.74,
   "yaw": 12.48,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_363CC895_2CB8_783D_41C2_C0A32BE69A90",
   "distance": 100
  }
 ],
 "id": "overlay_3AF206BC_2C98_4872_419C_3E2748EADBE2",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_3A6D934E_2C98_C82E_41C3_F9540761C76E, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_364538BF_2CB8_786D_418B_E0FBF0EDFD37, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.12,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.81,
   "pitch": -30.59,
   "yaw": 53.64,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BD89476_297B_333C_4185_1E22F80EB9CC",
   "distance": 50
  }
 ],
 "id": "overlay_345748EE_2977_532C_41BB_084913BEDAAF",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31, this.camera_37D0156F_2F05_25C0_4195_AB845D5C33F3); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.81,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 53.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.95,
   "pitch": -29.33,
   "yaw": 27.01,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BD81476_297B_333C_419B_A52CD70CA667",
   "distance": 100
  }
 ],
 "id": "overlay_084A49D5_2977_357C_41A6_B3AAA72E3CCD",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_270AA85B_2956_D374_41C1_22C1F481E73A, this.camera_37C1A55E_2F05_25C0_41C0_B31D38D0EF04); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.95,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.41,
   "pitch": -28.3,
   "yaw": 170.2,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0CDD334F_296F_D56B_4185_E46017AF66D9",
   "distance": 50
  }
 ],
 "id": "overlay_37E34DCD_2979_2D6C_4197_2F3A8F9E944A",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.41,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.83,
   "pitch": -5.76,
   "yaw": -46.69,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3BCDC33F_2CB8_C86E_41AB_9160951154AE",
   "distance": 100
  }
 ],
 "id": "overlay_3B5AB28D_2CA8_C812_41C6_24F0D5D36CE4",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_39FE3DCA_2CA9_F817_41B1_56D6A394CCDE, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_367638D0_2CB8_7833_41C4_35CAA9C432B0, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.11,
   "pitch": -1.11,
   "yaw": -145.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3BCD333F_2CB8_C86E_4180_20A3DA03372E",
   "distance": 100
  }
 ],
 "id": "overlay_3AF545FC_2CA8_4BF3_41BD_6C41C61C5BC4",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_3902BFE8_2CA8_3813_4167_550B501B3EAC, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_3674C8D1_2CB8_7835_419B_B39779C46E79, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.11,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -145.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.86,
   "pitch": -1.48,
   "yaw": 168.86,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3BCD733F_2CB8_C86E_418C_95A073B15EB1",
   "distance": 100
  }
 ],
 "id": "overlay_39272D97_2CA8_383D_41B5_94E63E10C1C8",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_393AEFC5_2CA8_781D_41BB_B5F68F8B45F2, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_3675F8D2_2CB8_7837_41B1_76CAD54942DF, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.86,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 168.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.85,
   "pitch": 1.53,
   "yaw": -172.8,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3BCA8340_2CB8_C812_41AB_24367BA36998",
   "distance": 100
  }
 ],
 "id": "overlay_393931F5_2CA8_4BFD_41B4_E5B8605D3EC6",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_39B31967_2CA8_381D_4188_F6DCE19342FC, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_367A88D3_2CB8_7835_41BD_FDE68808DA57, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.85,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -172.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.83,
   "pitch": -26.06,
   "yaw": 145.58,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_30BEEF75_2CA8_78F2_41B0_88CE41E1FA53",
   "distance": 100
  }
 ],
 "id": "overlay_35809709_2CA8_C815_41A2_9F29427EEC39",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 145.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0_HS_8_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.11,
   "pitch": -36.36,
   "yaw": -24.49,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0CDEA350_296F_D574_41B0_1FAE11C5F47F",
   "distance": 100
  }
 ],
 "id": "overlay_0B2EF5A2_2976_DDD4_4199_2D05B1416CEA",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31, this.camera_3801E2B6_2F05_DF40_41AB_1165E9779F50); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.11,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -24.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.13,
   "pitch": -27.57,
   "yaw": 111.42,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0CDEC350_296F_D574_41C3_B18A60D3B9A4",
   "distance": 50
  }
 ],
 "id": "overlay_0A546A6E_2977_F72C_41AE_F4D4604C3C6A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_256B7EDD_2957_2F6C_41C3_559AADD10985, this.camera_380C62A5_2F05_DF40_41A5_4676C5166492); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.13,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 111.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.33,
   "pitch": -5.38,
   "yaw": 57.32,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_362B18A5_2CB8_781D_41C6_01EDE2312384",
   "distance": 100
  }
 ],
 "id": "overlay_39945285_2CAF_C81D_41B7_E79BF97C74B5",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_39C9DC4E_2CA9_D82E_41B1_9A97766EAEF3, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_367B38D4_2CB8_7833_41B4_18A054E4F33A, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.33,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 57.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.26,
   "pitch": 9.82,
   "yaw": 157.3,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3628C8A6_2CB8_781F_41B7_A4892A3B63C9",
   "distance": 100
  }
 ],
 "id": "overlay_38708F6E_2CA8_58EF_41B4_B82994018627",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_3906F499_2CA8_C832_41AB_FE5F9A367C13, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_367838D6_2CB8_783F_41C2_F656524BDF03, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.26,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 157.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.47,
   "pitch": 11.2,
   "yaw": 139.09,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3628B8A6_2CB8_781F_416B_127DA5B3001C",
   "distance": 100
  }
 ],
 "id": "overlay_386B6DE9_2CA8_D815_416B_147415394164",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_3901EC0D_2CA8_582D_41C4_BE3B7A4C8CC7, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_367E98D7_2CB8_783D_41C3_1BE9AF7BCBA6, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.47,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 139.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.29,
   "pitch": 8.31,
   "yaw": 120.63,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_362848A6_2CB8_781F_41B2_F9769E180FFA",
   "distance": 100
  }
 ],
 "id": "overlay_39070C74_2CA8_58F8_41A3_B9FEF8237751",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_390F1898_2CAB_F832_41BA_BABA687E2990, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_367F88D8_2CB8_7833_41C5_A7B50EFA4FA7, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.29,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 120.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.08,
   "pitch": -28.07,
   "yaw": -63.43,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3F3C766C_2929_5F2D_41B8_4245CCC9B093",
   "distance": 100
  }
 ],
 "id": "overlay_3FA63137_292B_D53C_41C2_F442D5E5B913",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20, this.camera_38C0140A_2F05_DB43_41B3_5597572952B5); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.08,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -63.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Left"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.84,
   "pitch": -30.33,
   "yaw": -95.34,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3F3C566D_2929_5F2F_41A2_EB27AB1364C1",
   "distance": 50
  }
 ],
 "id": "overlay_3FF20084_2929_33DC_418D_7F44A139FEB5",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_25655EBE_2959_2F2C_418C_377D5D448CAF, this.camera_38D03425_2F05_DB40_41C2_074FDF3D768C); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -95.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.88,
   "pitch": -16.52,
   "yaw": -169.57,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3CF95EAF_292B_EF2C_41AE_00E3A54A4D78",
   "distance": 100
  }
 ],
 "id": "overlay_3099AABA_2929_5734_41BD_C731D5A5E515",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2541AD97_2929_6DFC_41B4_218C342B13E8, this.camera_38252282_2F05_DF40_41A0_FEE4BC5C669A); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.88,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -169.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Left"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.96,
   "pitch": -21.82,
   "yaw": 173.09,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3CF60EAF_292B_EF2C_4199_C4444D41AED1",
   "distance": 50
  }
 ],
 "id": "overlay_3C9EFD50_292B_2D74_41BE_EB2DE037DB8A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_22D67C73_2929_5334_41B8_44953A536328, this.camera_3839D292_2F05_DF40_4190_F4C315987EB2); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.96,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.28,
   "pitch": -35.11,
   "yaw": -116.94,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_03732D95_292F_2DFC_41B3_F356B91F30C7",
   "distance": 100
  }
 ],
 "id": "overlay_0E5DD910_295F_52F4_41B8_085A39B6E2F2",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_26621FA7_2959_2DDC_41B4_8781834C6F32, this.camera_389DC396_2F05_DD40_41C7_0E3CB90428C8); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.28,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -116.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.61,
   "pitch": -32.34,
   "yaw": -25.75,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_03736D95_292F_2DFC_41C0_F59E2409FF66",
   "distance": 50
  }
 ],
 "id": "overlay_0EAC4FBA_2959_6D34_41AD_FC9456FC8CEB",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.61,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.46,
   "pitch": -33.6,
   "yaw": 46.6,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_034C5D96_292F_2DFC_4170_5788FCEFA086",
   "distance": 50
  }
 ],
 "id": "overlay_0C70361B_2959_7EF4_4198_58D86E63E92E",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_276A1267_2959_375C_41C1_21F1FA6E5A52, this.camera_382C8271_2F05_DFC0_41A0_1730E341B365); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.46,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 46.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.11,
   "pitch": -3.37,
   "yaw": -167.9,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_362D48AA_2CB8_7817_41C4_9CEF2674A0B2",
   "distance": 100
  }
 ],
 "id": "overlay_38760BDA_2CB8_7837_41A0_85E49E0FDEDA",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_3946970D_2CB8_C82D_41BA_48431CB8ABF2, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_366658E3_2CB8_7815_41A4_8DCA179714BD, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.11,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -167.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.49,
   "pitch": -33.35,
   "yaw": -147.09,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_034D6D97_292F_2DFC_418A_BA53D34FEAF0",
   "distance": 50
  }
 ],
 "id": "overlay_0E742C25_295B_52DC_41BA_C05B03937749",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.49,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -147.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.98,
   "pitch": -29.08,
   "yaw": -63.94,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_034E9D97_292F_2DFC_41B1_3FFBE8457A54",
   "distance": 100
  }
 ],
 "id": "overlay_0E419BB0_295B_7534_41C3_497CE6454563",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679, this.camera_38AFC343_2F05_DDC1_419D_38DDEE54EE1B); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.98,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -63.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.08
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.23,
   "pitch": -26.57,
   "yaw": 112.42,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0CDFB351_296F_D574_41C2_AD6A7C46A02D",
   "distance": 100
  }
 ],
 "id": "overlay_0D93C2E5_2969_D75C_41C0_D87CF4C1BAD6",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F, this.camera_38BF935E_2F05_DDC0_41B3_1F83EE98D3C3); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.23,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 112.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.6,
   "pitch": -40.13,
   "yaw": -127.24,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0CDFD352_296F_D574_41B2_2CCF7D6D0EBA",
   "distance": 50
  }
 ],
 "id": "overlay_0C9E8D7A_2969_2D34_41AF_274A36E5CC4E",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875, this.camera_388D137B_2F05_DDC1_41B2_FBDF34FD4A29); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.6,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -127.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.13
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.43,
   "pitch": 11.96,
   "yaw": 76.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_362928A8_2CB8_7813_41C2_3C7D2395EB2A",
   "distance": 100
  }
 ],
 "id": "overlay_38687077_2CA8_C8FD_41C3_A23350EAB12F",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_39FA3182_2CA8_4816_41C0_B41E7C3B2F14, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_367C38D9_2CB8_7835_4196_9992E8F07C6D, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.14,
   "pitch": 13.46,
   "yaw": -2.22,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_362E98A8_2CB8_7813_41C5_51D47F480EE4",
   "distance": 100
  }
 ],
 "id": "overlay_398DDBA0_2CA8_5813_4194_535D71322653",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_39163E95_2CA8_F832_41C0_09EE3B4FFF5C, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_3662F8DA_2CB8_7837_41BA_F3420500B3B4, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.14,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.97,
   "pitch": 11.08,
   "yaw": -107.11,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_362EA8A8_2CB8_7813_4184_9BCC0617ABA4",
   "distance": 100
  }
 ],
 "id": "overlay_39A68380_2CA9_C813_41B8_15B87E10DDB5",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_3AD2A607_2CA8_481E_41A6_40C649A08F90, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_367D28DC_2CB8_7833_41C6_3046BB8B40A0, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.97,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -107.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.08
  }
 ]
},
{
 "class": "PhotoPlayList",
 "id": "album_11C6F92D_2AE9_552C_41B0_DC0857C2764D_AlbumPlayList",
 "items": [
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.53",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.55"
    },
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_to_height"
   },
   "media": "this.album_11C6F92D_2AE9_552C_41B0_DC0857C2764D_2",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.65",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.44"
    },
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_to_height"
   },
   "media": "this.album_11C6F92D_2AE9_552C_41B0_DC0857C2764D_3",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.31",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.57"
    },
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_to_height"
   },
   "media": "this.album_11C6F92D_2AE9_552C_41B0_DC0857C2764D_4",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.71",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.70"
    },
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_to_height"
   },
   "media": "this.album_11C6F92D_2AE9_552C_41B0_DC0857C2764D_1",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "initialPosition": {
     "x": "0.65",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.04,
     "y": "0.48"
    },
    "scaleMode": "fit_to_height"
   },
   "media": "this.photo_6241044E_2929_336C_41AD_F5EC4E8CD450",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.61",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.49"
    },
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_to_height"
   },
   "media": "this.photo_6D45BD4B_2929_2D54_41C4_259570E6BBC9",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "cubic_out",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "initialPosition": {
     "x": "0.65",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.04,
     "y": "0.29"
    },
    "scaleMode": "fit_to_height"
   },
   "media": "this.photo_62C9C948_292A_D554_41C1_3BE9E4C9687F",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.26",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.50"
    },
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_to_height"
   },
   "media": "this.photo_14B27641_292A_FF54_41BF_A279DBD83609",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.35",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.30"
    },
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_to_height"
   },
   "media": "this.photo_14AB346E_292A_D32D_41C4_1E12195893DA",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.35",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.40"
    },
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_to_height"
   },
   "media": "this.album_11C6F92D_2AE9_552C_41B0_DC0857C2764D_0",
   "class": "PhotoPlayListItem"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.16,
   "pitch": -27.32,
   "yaw": 50.87,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_359CFF3B_2929_2D34_412B_52AFDDAEA7C8",
   "distance": 100
  }
 ],
 "id": "overlay_34A30128_292A_F2D4_41A1_22655C5308B8",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF, this.camera_360595A3_2F05_2541_41BE_980169FD0B34); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.16,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 50.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.11,
   "pitch": -27.82,
   "yaw": 12.69,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_359C2F3C_2929_2D2C_4196_CBF1B213757F",
   "distance": 50
  }
 ],
 "id": "overlay_3455A017_292B_D2FB_41C2_DFC9B4ED052A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2541AD97_2929_6DFC_41B4_218C342B13E8, this.camera_3637A591_2F05_2541_41C5_06D4671CDE60); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.11,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.31,
   "pitch": -25.81,
   "yaw": 90.57,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_359C7F3C_2929_2D2C_41B2_359C5BAD6143",
   "distance": 50
  }
 ],
 "id": "overlay_32A3481E_292B_72EC_4196_6DE078033002",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_270AA85B_2956_D374_41C1_22C1F481E73A, this.camera_36265580_2F05_2540_41C5_E4D98625F396); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.31,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.74,
   "pitch": -9.9,
   "yaw": -44.68,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_363DF89A_2CB8_7837_41B5_16259C03E33A",
   "distance": 100
  }
 ],
 "id": "overlay_39CE7E01_2C98_3812_41B9_3BAEC6385165",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_39F29BC4_2C98_3813_41C2_83DFF82C9DA5, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_364B98C1_2CB8_7815_41C2_C1101CC3A6FD, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.74,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -44.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.9
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.99,
   "pitch": -10.28,
   "yaw": 129.8,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_363DA89B_2CB8_7835_4190_ECE6D51BB410",
   "distance": 100
  }
 ],
 "id": "overlay_39DE3F6A_2C9F_D817_41B2_C9DCBA83D9BA",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_39FE0854_2C99_D832_4179_6437F0ED0F4A, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_364898C2_2CB8_7817_41C0_DA6CB0BB6094, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.99,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 129.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.81,
   "pitch": -6.89,
   "yaw": -161.24,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3BC2033A_2CB8_C876_41B9_6A8C6D5B426F",
   "distance": 100
  }
 ],
 "id": "overlay_39C100AE_2C98_C86F_41B4_8AE1B5C4CBAF",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_39AE91AA_2C98_4816_419E_52E0F0900BD7, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_364958C3_2CB8_7815_4194_4E6A5A2D0B0B, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.81,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -161.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.89
  }
 ]
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "progressBorderColor": "#000000",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "minWidth": 1,
 "minHeight": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "show": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_3958F1CB_2F05_DCC1_41C0_019D57D75DA7.set('selectedIndex', -1); }, this); this.playList_3958F1CB_2F05_DCC1_41C0_019D57D75DA7.set('selectedIndex', 0)",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": "0%",
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "borderRadius": 0,
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 800,
 "playbackBarHeadHeight": 15,
 "shadow": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.24,
   "pitch": -35.36,
   "yaw": 55.65,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_034DFD96_292F_2DFC_419E_EEBA28051629",
   "distance": 100
  }
 ],
 "id": "overlay_0E682EF4_2959_2F3C_41C1_1AF189874E50",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB, this.camera_39E1521C_2F05_DF47_41C5_977035ABD859); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.24,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 55.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.6,
   "pitch": -27.32,
   "yaw": 6.53,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_33AD42D6_2939_D77C_41A0_F08A0F723666",
   "distance": 100
  }
 ],
 "id": "overlay_32A97573_2936_DD34_41AB_9C7CA34C6610",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20, this.camera_38EC63B6_2F05_DD40_41C2_C921FDF5FE20); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.6,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.56,
   "pitch": -23.05,
   "yaw": 118.7,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_32352EC9_293B_2F54_41C0_A867E828479B",
   "distance": 100
  }
 ],
 "id": "overlay_328387D5_2939_3D7C_41A7_C63500941F26",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF, this.camera_38E273D2_2F05_DCC0_41B9_B5051A48F5E0); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.56,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 118.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.84,
   "pitch": -30.33,
   "yaw": 160.91,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_32356EC9_293B_2F54_41BB_01AD810BBC13",
   "distance": 50
  }
 ],
 "id": "overlay_33B25F15_2939_EEFC_419D_8ABBA1F58B99",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B, this.camera_38F213EE_2F05_DCC0_41C5_B171C78CD60B); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 160.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.09,
   "pitch": -4.88,
   "yaw": -106.6,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3931EB22_2C98_D817_41A4_EFF7DB4B6806",
   "distance": 100
  }
 ],
 "id": "overlay_3F48425B_2C68_4835_41A4_53C327E07BB3",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_39CB7A5B_2C98_5835_41A0_EA55D95D6FDE, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_39552B38_2C98_D873_4186_4AB544470568, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.09,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -106.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.01,
   "pitch": -9.15,
   "yaw": -155.59,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_39313B23_2C98_D815_4192_CE86F9ACFEF5",
   "distance": 100
  }
 ],
 "id": "overlay_38B55E6B_2C98_5815_41AB_33C86F84217A",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_3955F67B_2C99_C8F5_41B4_437EAEDBECB9, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_3959DB3D_2C98_D872_41B2_0159009C7EEA, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.01,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -155.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.37,
   "pitch": -34.35,
   "yaw": 41.83,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BDB9476_297B_333C_419F_E63B7D68AFF8",
   "distance": 100
  }
 ],
 "id": "overlay_3593AF54_2969_2D7C_41B3_BBF05177C671",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_270AA85B_2956_D374_41C1_22C1F481E73A, this.camera_378D2505_2F05_2540_41B4_ACBCB802BAA8); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.37,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 41.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.34,
   "pitch": -34.61,
   "yaw": 75.24,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BDB4476_297B_333C_41AD_F158F373C9E5",
   "distance": 50
  }
 ],
 "id": "overlay_0928F862_296B_D354_41BC_F7FF7336983B",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24A41948_2957_7554_41B6_7E9FE67EC525, this.camera_379DC517_2F05_2540_41C4_56F72C57AC4F); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.34,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 75.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.91,
   "pitch": -20.06,
   "yaw": 178.49,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_36DEF307_297B_56DC_41B8_D95C30663FBD",
   "distance": 100
  }
 ],
 "id": "overlay_0A633FE7_297F_6D5C_4195_C540C8300A95",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875, this.camera_37F2154C_2F05_25C0_41B6_1A42A8BD22E3); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.91,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.13,
   "pitch": -27.57,
   "yaw": -98.6,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_36DED307_297B_56DC_41C2_400F05563F9B",
   "distance": 50
  }
 ],
 "id": "overlay_088EF833_2979_5334_41BC_3A781AC79016",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F, this.camera_37E3953A_2F05_2543_419B_4B51B57EA0EC); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.13,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0_HS_4_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.16,
   "pitch": -26.06,
   "yaw": -43.21,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_353A0DC1_2CA8_D815_41C3_DE9475E84D45",
   "distance": 100
  }
 ],
 "id": "overlay_34C9F7AC_2CA9_C813_41C2_61B79D80072E",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_22A8DDDF_2957_ED6C_4174_A248C6572773, this.camera_37939529_2F05_2541_41B6_9C484BB6A7DF); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.16,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -43.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0_HS_5_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.06
  }
 ]
},
{
 "width": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "horizontalAlign": "center",
 "borderSize": 0,
 "minWidth": 1,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "toggle",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "height": 58,
 "maxWidth": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxHeight": 58,
 "paddingBottom": 0,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "propagateClick": true,
 "data": {
  "name": "IconButton HS "
 },
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "width": 49,
 "id": "IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
 "horizontalAlign": "center",
 "right": 30,
 "borderSize": 0,
 "minWidth": 1,
 "transparencyActive": true,
 "bottom": 8,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA.png",
 "height": 37,
 "maxWidth": 49,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 37,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA_rollover.png",
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 },
 "paddingLeft": 0
},
{
 "width": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "horizontalAlign": "center",
 "borderSize": 0,
 "minWidth": 1,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "height": 58,
 "maxWidth": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxHeight": 58,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "class": "IconButton",
 "visible": false,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 },
 "paddingLeft": 0
},
{
 "width": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "horizontalAlign": "center",
 "borderSize": 0,
 "minWidth": 1,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "toggle",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "height": 58,
 "maxWidth": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxHeight": 58,
 "paddingBottom": 0,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "propagateClick": true,
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingLeft": 0
},
{
 "left": "0%",
 "id": "Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
 "horizontalAlign": "center",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "url": "skin/Image_9511127C_9B79_D2C1_41D8_D080B87BFD84.png",
 "bottom": 53,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 2,
 "maxWidth": 3000,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "maxHeight": 2,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "data": {
  "name": "white line"
 },
 "paddingLeft": 0
},
{
 "layout": "horizontal",
 "data": {
  "name": "-button set container"
 },
 "scrollBarWidth": 10,
 "id": "Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
 "left": "0%",
 "width": 1199,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
  "this.Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
  "this.Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
  "this.Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5",
  "this.Button_3D750B94_2977_75FC_41BD_CB197C55C28A"
 ],
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "height": 51,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 30
},
{
 "layout": "horizontal",
 "data": {
  "name": "button menu sup"
 },
 "scrollBarWidth": 10,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "height": 110,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "overflow": "visible",
 "paddingLeft": 0
},
{
 "layout": "vertical",
 "data": {
  "name": "-button set"
 },
 "scrollBarWidth": 10,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "height": "85.959%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 3,
 "paddingBottom": 0,
 "visible": false,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_14FBF305_1BED_F1EE_419A_A9F069FE2B28",
 "left": 5,
 "width": 10,
 "scrollBarColor": "#000000",
 "data": {
  "name": "color block"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#A67C52"
 ],
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "shadowBlurRadius": 10,
 "top": 24,
 "paddingRight": 0,
 "shadowSpread": 1,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "height": 90,
 "gap": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "visible": false,
 "propagateClick": true,
 "shadow": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "shadowHorizontalLength": 0,
 "paddingLeft": 0
},
{
 "fontFamily": "Cinzel Bold",
 "data": {
  "name": "text 1"
 },
 "id": "Label_14FBC305_1BED_F1EE_41B3_DAC14B1EE44E",
 "left": 0,
 "width": 554,
 "horizontalAlign": "left",
 "borderSize": 0,
 "minWidth": 1,
 "textShadowColor": "#000000",
 "text": "PURA DALEM",
 "fontColor": "#FFFFFF",
 "textShadowOpacity": 1,
 "textShadowVerticalLength": 0,
 "top": 5,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 82,
 "fontSize": 75,
 "paddingTop": 0,
 "textShadowBlurRadius": 10,
 "backgroundOpacity": 0,
 "class": "Label",
 "borderRadius": 0,
 "paddingBottom": 0,
 "textDecoration": "none",
 "textShadowHorizontalLength": 0,
 "fontStyle": "normal",
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "fontWeight": "bold",
 "paddingLeft": 0
},
{
 "fontFamily": "Cinzel Bold",
 "data": {
  "name": "text 2"
 },
 "id": "Label_14F82305_1BED_F1EE_41AD_7A6E6AD00A22",
 "left": 4,
 "width": 347,
 "horizontalAlign": "left",
 "borderSize": 0,
 "minWidth": 1,
 "textShadowColor": "#000000",
 "text": "DESA ADAT LAPLAPAN",
 "fontColor": "#FFFFFF",
 "textShadowOpacity": 1,
 "textShadowVerticalLength": 0,
 "bottom": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 28,
 "fontSize": 26,
 "paddingTop": 0,
 "textShadowBlurRadius": 10,
 "backgroundOpacity": 0,
 "class": "Label",
 "borderRadius": 0,
 "paddingBottom": 0,
 "textDecoration": "none",
 "textShadowHorizontalLength": 0,
 "fontStyle": "normal",
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "paddingLeft": 0
},
{
 "layout": "vertical",
 "scrollBarWidth": 10,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "borderSize": 0,
 "bottom": "7%",
 "contentOpaque": false,
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": true,
 "shadow": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowHorizontalLength": 0,
 "paddingLeft": 0
},
{
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "id": "Container_1813AA3E_1663_8BF1_41A2_CA5EE3718362",
 "scrollBarVisible": "rollOver",
 "right": "10%",
 "children": [
  "this.Container_1813DA3E_1663_8BF1_4193_F28A53801FBC",
  "this.Container_1813FA3E_1663_8BF1_4180_5027A2A87866"
 ],
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "bottom": "5%",
 "contentOpaque": false,
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": true,
 "shadow": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowHorizontalLength": 0,
 "paddingLeft": 0
},
{
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "scrollBarWidth": 10,
 "id": "Container_1812AA3F_1663_8BEF_41A4_02F566B1BC6D",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "10%",
 "children": [
  "this.IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1"
 ],
 "borderSize": 0,
 "horizontalAlign": "right",
 "minWidth": 1,
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "top": "5%",
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "overflow": "visible",
 "paddingLeft": 0
},
{
 "layout": "vertical",
 "scrollBarWidth": 10,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "borderSize": 0,
 "bottom": "7%",
 "contentOpaque": false,
 "paddingRight": 10,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 10,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 10,
 "propagateClick": true,
 "shadow": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowHorizontalLength": 0,
 "paddingLeft": 10
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_6AFE65BE_2B2B_DD2C_41A6_7889F645FD46",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "children": [
  "this.ViewerAreaLabeled_6AFE75BE_2B2B_DD2C_41C5_01B52401AB51",
  "this.Image_3D53B63A_2C68_C876_41AC_307ECC9BE8D8",
  "this.Container_6AFF95BF_2B2B_DD2C_41C4_9432817E7760"
 ],
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "borderSize": 0,
 "bottom": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "shadow": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowHorizontalLength": 0,
 "paddingLeft": 0
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_35ED2A9C_295B_37EC_41A5_1B02EA987D44",
 "levels": [
  {
   "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_36352450_296F_3375_41AB_4C200B9D6E08",
 "levels": [
  {
   "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_35EA7A9C_295B_37EC_41A6_88B1F2AABCB9",
 "levels": [
  {
   "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_35EA3A9C_295B_37EC_41AE_CA9D42F4918B",
 "levels": [
  {
   "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3621A8A1_2CB8_7815_41A4_99A6CE857E3E",
 "levels": [
  {
   "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0_HS_4_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_362118A1_2CB8_7815_41BF_8E29BAEA3988",
 "levels": [
  {
   "url": "media/panorama_270AA85B_2956_D374_41C1_22C1F481E73A_0_HS_5_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0372ED94_292F_2DFC_41B0_2EDDB17D9C5C",
 "levels": [
  {
   "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_03720D94_292F_2DFC_41C2_3B5F4B809311",
 "levels": [
  {
   "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_03738D95_292F_2DFC_41BB_25F14D36D373",
 "levels": [
  {
   "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3623C89F_2CB8_782D_41B0_BC29118059D4",
 "levels": [
  {
   "url": "media/panorama_26621FA7_2959_2DDC_41B4_8781834C6F32_0_HS_3_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0CDF4357_296F_D57C_41B9_80C8ECF6A40B",
 "levels": [
  {
   "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0CD89358_296F_D574_41C0_337E10990C42",
 "levels": [
  {
   "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_03714D94_292F_2DFC_41BC_DECF4F1CAD7F",
 "levels": [
  {
   "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_362F08A9_2CB8_7815_41B0_7906A40D7B38",
 "levels": [
  {
   "url": "media/panorama_254F0E57_2956_EF7C_41AB_CE6F3F2D0875_0_HS_3_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_034C9D95_292F_2DFC_41BE_74A73ADD6A60",
 "levels": [
  {
   "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_034C2D96_292F_2DFC_41A3_45A7793BC8B6",
 "levels": [
  {
   "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_362C08AA_2CB8_7817_41BA_3E6D9EC2DD88",
 "levels": [
  {
   "url": "media/panorama_276A1267_2959_375C_41C1_21F1FA6E5A52_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_36AE6C17_296A_D2FC_41B6_DAA62B48C3D8",
 "levels": [
  {
   "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_36AE8C17_296A_D2FC_41C4_BF2B43074541",
 "levels": [
  {
   "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_362678A2_2CB8_7817_41A1_C188412B960C",
 "levels": [
  {
   "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_362628A2_2CB8_7817_41C0_6B627012FBDC",
 "levels": [
  {
   "url": "media/panorama_24A41948_2957_7554_41B6_7E9FE67EC525_0_HS_3_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_034EDD9D_292F_2DEC_41C1_A90466440D00",
 "levels": [
  {
   "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_034E7D9D_292F_2DEC_418C_6CFC2F3F563F",
 "levels": [
  {
   "url": "media/panorama_25655EBE_2959_2F2C_418C_377D5D448CAF_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_34F64B13_292B_76F4_41B9_7C3E5EEE718F",
 "levels": [
  {
   "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0ECD968F_292B_7FEB_41B0_4AB8554D38B7",
 "levels": [
  {
   "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_35EC3A9B_295B_37F4_4181_66EB97EE3D0A",
 "levels": [
  {
   "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_363F6893_2CB8_7835_41A5_17B4778C38B3",
 "levels": [
  {
   "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0_HS_3_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_363CC895_2CB8_783D_41C2_C0A32BE69A90",
 "levels": [
  {
   "url": "media/panorama_25C7EE3C_2929_2F2C_41AA_F141FEAEFACF_0_HS_4_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0BD89476_297B_333C_4185_1E22F80EB9CC",
 "levels": [
  {
   "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0BD81476_297B_333C_419B_A52CD70CA667",
 "levels": [
  {
   "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0CDD334F_296F_D56B_4185_E46017AF66D9",
 "levels": [
  {
   "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3BCDC33F_2CB8_C86E_41AB_9160951154AE",
 "levels": [
  {
   "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0_HS_3_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3BCD333F_2CB8_C86E_4180_20A3DA03372E",
 "levels": [
  {
   "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0_HS_4_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3BCD733F_2CB8_C86E_418C_95A073B15EB1",
 "levels": [
  {
   "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0_HS_5_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3BCA8340_2CB8_C812_41AB_24367BA36998",
 "levels": [
  {
   "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0_HS_6_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_30BEEF75_2CA8_78F2_41B0_88CE41E1FA53",
 "levels": [
  {
   "url": "media/panorama_22A8DDDF_2957_ED6C_4174_A248C6572773_0_HS_8_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0CDEA350_296F_D574_41B0_1FAE11C5F47F",
 "levels": [
  {
   "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0CDEC350_296F_D574_41C3_B18A60D3B9A4",
 "levels": [
  {
   "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_362B18A5_2CB8_781D_41C6_01EDE2312384",
 "levels": [
  {
   "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0_HS_3_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3628C8A6_2CB8_781F_41B7_A4892A3B63C9",
 "levels": [
  {
   "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0_HS_4_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3628B8A6_2CB8_781F_416B_127DA5B3001C",
 "levels": [
  {
   "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0_HS_5_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_362848A6_2CB8_781F_41B2_F9769E180FFA",
 "levels": [
  {
   "url": "media/panorama_2498DF65_2957_2D5C_4193_5EB5A6D2475F_0_HS_6_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3F3C766C_2929_5F2D_41B8_4245CCC9B093",
 "levels": [
  {
   "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3F3C566D_2929_5F2F_41A2_EB27AB1364C1",
 "levels": [
  {
   "url": "media/panorama_22D67C73_2929_5334_41B8_44953A536328_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3CF95EAF_292B_EF2C_41AE_00E3A54A4D78",
 "levels": [
  {
   "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3CF60EAF_292B_EF2C_4199_C4444D41AED1",
 "levels": [
  {
   "url": "media/panorama_24D0EB82_2929_35D4_41C3_1011E8F35F20_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_03732D95_292F_2DFC_41B3_F356B91F30C7",
 "levels": [
  {
   "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_03736D95_292F_2DFC_41C0_F59E2409FF66",
 "levels": [
  {
   "url": "media/panorama_272CA0BD_2959_732C_41A4_A816EE15571A_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_034C5D96_292F_2DFC_4170_5788FCEFA086",
 "levels": [
  {
   "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_362D48AA_2CB8_7817_41C4_9CEF2674A0B2",
 "levels": [
  {
   "url": "media/panorama_22B94085_2959_F3DC_4193_B0AB364ABC3F_0_HS_1_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_034D6D97_292F_2DFC_418A_BA53D34FEAF0",
 "levels": [
  {
   "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_034E9D97_292F_2DFC_41B1_3FFBE8457A54",
 "levels": [
  {
   "url": "media/panorama_27159F8D_2959_6DEC_41B2_0114C9E44CEB_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0CDFB351_296F_D574_41C2_AD6A7C46A02D",
 "levels": [
  {
   "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0CDFD352_296F_D574_41B2_2CCF7D6D0EBA",
 "levels": [
  {
   "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_362928A8_2CB8_7813_41C2_3C7D2395EB2A",
 "levels": [
  {
   "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_362E98A8_2CB8_7813_41C5_51D47F480EE4",
 "levels": [
  {
   "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0_HS_3_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_362EA8A8_2CB8_7813_4184_9BCC0617ABA4",
 "levels": [
  {
   "url": "media/panorama_256B7EDD_2957_2F6C_41C3_559AADD10985_0_HS_4_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_359CFF3B_2929_2D34_412B_52AFDDAEA7C8",
 "levels": [
  {
   "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_359C2F3C_2929_2D2C_4196_CBF1B213757F",
 "levels": [
  {
   "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_359C7F3C_2929_2D2C_41B2_359C5BAD6143",
 "levels": [
  {
   "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_363DF89A_2CB8_7837_41B5_16259C03E33A",
 "levels": [
  {
   "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0_HS_3_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_363DA89B_2CB8_7835_4190_ECE6D51BB410",
 "levels": [
  {
   "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0_HS_4_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3BC2033A_2CB8_C876_41B9_6A8C6D5B426F",
 "levels": [
  {
   "url": "media/panorama_24F8F696_2956_DFFC_4163_A02DD0C7657B_0_HS_5_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_034DFD96_292F_2DFC_419E_EEBA28051629",
 "levels": [
  {
   "url": "media/panorama_22ABFFF3_2959_2D34_4187_F4D234DDB679_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_33AD42D6_2939_D77C_41A0_F08A0F723666",
 "levels": [
  {
   "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_32352EC9_293B_2F54_41C0_A867E828479B",
 "levels": [
  {
   "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_32356EC9_293B_2F54_41BB_01AD810BBC13",
 "levels": [
  {
   "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3931EB22_2C98_D817_41A4_EFF7DB4B6806",
 "levels": [
  {
   "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0_HS_3_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_39313B23_2C98_D815_4192_CE86F9ACFEF5",
 "levels": [
  {
   "url": "media/panorama_2541AD97_2929_6DFC_41B4_218C342B13E8_0_HS_4_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0BDB9476_297B_333C_419F_E63B7D68AFF8",
 "levels": [
  {
   "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0BDB4476_297B_333C_41AD_F158F373C9E5",
 "levels": [
  {
   "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_36DEF307_297B_56DC_41B8_D95C30663FBD",
 "levels": [
  {
   "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_36DED307_297B_56DC_41C2_400F05563F9B",
 "levels": [
  {
   "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0_HS_4_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_353A0DC1_2CA8_D815_41C3_DE9475E84D45",
 "levels": [
  {
   "url": "media/panorama_27533DE7_2957_2D5C_41BC_B06CC4E4BE31_0_HS_5_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "fontFamily": "Cinzel Bold",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "width": 120,
 "data": {
  "name": "Button house info"
 },
 "fontSize": 14,
 "horizontalAlign": "center",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedFontColor": "#000000",
 "rollOverFontColor": "#DB9B4D",
 "borderColor": "#000000",
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "label": "BERANDA",
 "backgroundColor": [
  "#000000"
 ],
 "click": "this.openLink('http://virtualtour.haga.my.id/', '_blank')",
 "iconHeight": 0,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "fontStyle": "normal",
 "shadow": false,
 "shadowSpread": 1,
 "cursor": "hand",
 "minHeight": 1,
 "propagateClick": true,
 "fontWeight": "bold",
 "iconWidth": 0,
 "paddingLeft": 0
},
{
 "fontFamily": "Cinzel Bold",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "width": 140,
 "data": {
  "name": "Button panorama list"
 },
 "fontSize": 14,
 "horizontalAlign": "center",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedFontColor": "#000000",
 "rollOverFontColor": "#DB9B4D",
 "borderColor": "#000000",
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "label": "VIRTUAL TOUR",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "fontStyle": "normal",
 "shadow": false,
 "shadowSpread": 1,
 "cursor": "hand",
 "minHeight": 1,
 "propagateClick": true,
 "fontWeight": "bold",
 "iconWidth": 32,
 "paddingLeft": 0
},
{
 "fontFamily": "Cinzel Bold",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "width": 100,
 "data": {
  "name": "Button location"
 },
 "fontSize": 14,
 "horizontalAlign": "center",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedFontColor": "#000000",
 "rollOverFontColor": "#DB9B4D",
 "borderColor": "#000000",
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "label": "LOKASI",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, true, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "fontStyle": "normal",
 "shadow": false,
 "shadowSpread": 1,
 "cursor": "hand",
 "minHeight": 1,
 "propagateClick": true,
 "fontWeight": "bold",
 "iconWidth": 32,
 "paddingLeft": 0
},
{
 "fontFamily": "Cinzel Bold",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5",
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "width": 122,
 "data": {
  "name": "Button photoalbum"
 },
 "fontSize": 14,
 "horizontalAlign": "center",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedFontColor": "#000000",
 "rollOverFontColor": "#DB9B4D",
 "borderColor": "#000000",
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "label": "GALERI",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "fontStyle": "normal",
 "shadow": false,
 "shadowSpread": 1,
 "cursor": "hand",
 "minHeight": 1,
 "propagateClick": true,
 "fontWeight": "bold",
 "iconWidth": 32,
 "paddingLeft": 0
},
{
 "fontFamily": "Cinzel Bold",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_3D750B94_2977_75FC_41BD_CB197C55C28A",
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "width": 130,
 "data": {
  "name": "Button house info"
 },
 "fontSize": 14,
 "horizontalAlign": "center",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minWidth": 1,
 "fontColor": "#FFFFFF",
 "pressedFontColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverFontColor": "#DB9B4D",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "label": "DENAH",
 "backgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 0,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6AFFC5BF_2B2B_DD2C_417D_09B0327BD06F, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "fontStyle": "normal",
 "shadow": false,
 "shadowSpread": 1,
 "cursor": "hand",
 "minHeight": 1,
 "propagateClick": true,
 "fontWeight": "bold",
 "iconWidth": 0,
 "paddingLeft": 0
},
{
 "width": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "horizontalAlign": "center",
 "borderSize": 0,
 "minWidth": 1,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "toggle",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "maxWidth": 60,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxHeight": 60,
 "paddingBottom": 0,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "propagateClick": true,
 "data": {
  "name": "image button menu"
 },
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "header"
 },
 "scrollBarWidth": 10,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 90,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "overflow": "visible",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#987B55",
 "shadow": false,
 "itemLabelFontStyle": "normal",
 "scrollBarVisible": "rollOver",
 "itemMode": "normal",
 "horizontalAlign": "center",
 "minWidth": 1,
 "width": "100%",
 "itemLabelHorizontalAlign": "center",
 "itemPaddingRight": 3,
 "itemThumbnailOpacity": 1,
 "rollOverItemThumbnailShadowColor": "#987B55",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemLabelFontFamily": "Times New Roman",
 "itemMaxHeight": 1000,
 "itemMaxWidth": 1000,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "verticalAlign": "middle",
 "paddingRight": 70,
 "itemBorderRadius": 0,
 "height": "100%",
 "itemPaddingLeft": 3,
 "selectedItemLabelFontColor": "#987B55",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundOpacity": 0,
 "itemHorizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "backgroundOpacity": 0,
 "itemOpacity": 1,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemThumbnailBorderRadius": 0,
 "itemBackgroundColor": [],
 "itemPaddingTop": 3,
 "propagateClick": true,
 "itemBackgroundColorRatios": [],
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "paddingLeft": 70,
 "itemWidth": 220,
 "selectedItemThumbnailShadow": true,
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "bold",
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#987B55",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "scrollBarMargin": 2,
 "itemLabelFontSize": 14,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontColor": "#666666",
 "itemHeight": 156,
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "itemBackgroundColorDirection": "vertical",
 "class": "ThumbnailGrid",
 "borderRadius": 5,
 "gap": 26,
 "paddingBottom": 70,
 "itemLabelGap": 7,
 "itemThumbnailShadow": false,
 "itemPaddingBottom": 3,
 "minHeight": 1,
 "data": {
  "name": "ThumbnailList5161"
 },
 "itemThumbnailWidth": 220
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "scrollBarWidth": 10,
 "id": "Container_1813DA3E_1663_8BF1_4193_F28A53801FBC",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "width": "70%",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "children": [
  "this.WebFrame_198A3B12_1666_89B6_41B5_4C2585EFD00E"
 ],
 "borderSize": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 10,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 10,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 10,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 10
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "scrollBarWidth": 10,
 "id": "Container_1813FA3E_1663_8BF1_4180_5027A2A87866",
 "scrollBarOpacity": 0.51,
 "scrollBarVisible": "rollOver",
 "width": "30%",
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 400,
 "children": [
  "this.Container_18121A3E_1663_8BF1_41B4_AB4C2B45EFFF",
  "this.Container_18120A3E_1663_8BF1_419D_69232EA5FB3D",
  "this.Container_18128A3F_1663_8BEF_41B6_51D1938FA48A"
 ],
 "borderSize": 0,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 50,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 40,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 20,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "overflow": "visible",
 "paddingLeft": 40
},
{
 "width": "25%",
 "id": "IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1",
 "horizontalAlign": "center",
 "borderSize": 0,
 "minWidth": 50,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1.png",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, false, 0, null, null, false)",
 "maxWidth": 60,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxHeight": 60,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1_rollover.png",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "minHeight": 50,
 "propagateClick": true,
 "data": {
  "name": "X"
 },
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container photo"
 },
 "scrollBarWidth": 10,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "borderSize": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "overflow": "visible",
 "paddingLeft": 0
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_6AFE75BE_2B2B_DD2C_41C5_01B52401AB51",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "minWidth": 1,
 "minHeight": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "borderRadius": 0,
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Floor Plan"
 },
 "shadow": false
},
{
 "width": "99.948%",
 "id": "Image_3D53B63A_2C68_C876_41AC_307ECC9BE8D8",
 "horizontalAlign": "center",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "url": "skin/Image_3D53B63A_2C68_C876_41AC_307ECC9BE8D8.jpg",
 "bottom": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "93.784%",
 "maxWidth": 1555,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "maxHeight": 771,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "minHeight": 1,
 "propagateClick": false,
 "data": {
  "name": "Image4903"
 },
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "paddingLeft": 0,
 "children": [
  "this.IconButton_6AFFA5BF_2B2B_DD2C_4194_F54DEC3B9E8F",
  "this.Label_3CEE5808_2C68_3812_41B0_1BC4C4A47493"
 ],
 "id": "Container_6AFF95BF_2B2B_DD2C_41C4_9432817E7760",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": 140,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "overflow": "scroll",
 "shadow": false
},
{
 "scrollBarWidth": 10,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "77.115%",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "height": "100%",
 "top": "0%",
 "paddingTop": 36,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:3.68vh;font-family:'Otama.ep';\"><B>VIRTUAL TOUR:</B></SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "minHeight": 100,
 "propagateClick": true,
 "data": {
  "name": "HTMLText54192"
 },
 "paddingLeft": 80
},
{
 "width": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "horizontalAlign": "right",
 "right": 20,
 "borderSize": 0,
 "minWidth": 50,
 "transparencyActive": true,
 "top": 20,
 "verticalAlign": "top",
 "paddingRight": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.png",
 "height": 60,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "maxWidth": 60,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 60,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.png",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "minHeight": 50,
 "propagateClick": true,
 "data": {
  "name": "X"
 },
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "WebFrame_198A3B12_1666_89B6_41B5_4C2585EFD00E",
 "left": "0%",
 "right": "0%",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "scrollEnabled": true,
 "url": "https://maps.google.com/maps?output=embed&center=-8.5049942,115.2780179&z=18&q=Pura+Dalem+Laplapan",
 "bottom": "0%",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "top": "0%",
 "insetBorder": false,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "WebFrame",
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "data": {
  "name": "WebFrame5113"
 },
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "scrollBarWidth": 10,
 "id": "Container_18121A3E_1663_8BF1_41B4_AB4C2B45EFFF",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "right",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 60,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "shadow": false,
 "minHeight": 0,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "scrollBarWidth": 10,
 "id": "Container_18120A3E_1663_8BF1_419D_69232EA5FB3D",
 "scrollBarOpacity": 0.79,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 100,
 "children": [
  "this.Container_00680EBB_1C6A_B01A_41B7_CA8C74B88FBB",
  "this.Container_18124A3F_1663_8BEF_4167_4F797ED9B565",
  "this.HTMLText_18127A3F_1663_8BEF_4175_B0DF8CE38BFE",
  "this.Button_18126A3F_1663_8BEF_41A4_B0EDA1A5F4E3"
 ],
 "borderSize": 0,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 30,
 "shadow": false,
 "minHeight": 520,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "scrollBarWidth": 10,
 "id": "Container_18128A3F_1663_8BEF_41B6_51D1938FA48A",
 "layout": "horizontal",
 "width": 370,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 40,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "width": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "horizontalAlign": "right",
 "right": 20,
 "borderSize": 0,
 "minWidth": 50,
 "transparencyActive": true,
 "top": 20,
 "verticalAlign": "top",
 "paddingRight": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.png",
 "height": 60,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "maxWidth": 60,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 60,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.png",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "minHeight": 50,
 "propagateClick": true,
 "data": {
  "name": "IconButton X"
 },
 "paddingLeft": 0
},
{
 "width": "100%",
 "id": "IconButton_6AFFA5BF_2B2B_DD2C_4194_F54DEC3B9E8F",
 "horizontalAlign": "right",
 "right": 20,
 "borderSize": 0,
 "minWidth": 50,
 "transparencyActive": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_6AFFA5BF_2B2B_DD2C_4194_F54DEC3B9E8F.jpg",
 "height": "36.14%",
 "top": 20,
 "click": "this.setComponentVisibility(this.Container_6AFFC5BF_2B2B_DD2C_417D_09B0327BD06F, false, 0, null, null, false)",
 "maxWidth": 60,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 60,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_6AFFA5BF_2B2B_DD2C_4194_F54DEC3B9E8F_rollover.jpg",
 "pressedIconURL": "skin/IconButton_6AFFA5BF_2B2B_DD2C_4194_F54DEC3B9E8F_pressed.jpg",
 "shadow": false,
 "cursor": "hand",
 "minHeight": 50,
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 },
 "paddingLeft": 0
},
{
 "fontFamily": "Arial",
 "data": {
  "name": "Label4083"
 },
 "id": "Label_3CEE5808_2C68_3812_41B0_1BC4C4A47493",
 "left": "1.72%",
 "horizontalAlign": "center",
 "width": "55.833%",
 "borderSize": 0,
 "minWidth": 1,
 "text": "DENAH PURA DALEM LAPLAPAN",
 "fontColor": "#000000",
 "bottom": "16.46%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "38.571%",
 "fontSize": "4vmin",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Label",
 "borderRadius": 0,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontStyle": "normal",
 "shadow": false,
 "minHeight": 1,
 "propagateClick": false,
 "fontWeight": "bold",
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container header location"
 },
 "scrollBarWidth": 10,
 "id": "Container_00680EBB_1C6A_B01A_41B7_CA8C74B88FBB",
 "scrollBarOpacity": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "children": [
  "this.HTMLText_18123A3E_1663_8BF1_419F_B7BD72D2053B",
  "this.HTMLText_18125A3F_1663_8BEF_4196_AE566E10BAFC"
 ],
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 130,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "line"
 },
 "scrollBarWidth": 10,
 "id": "Container_18124A3F_1663_8BEF_4167_4F797ED9B565",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 7,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "paddingLeft": 0,
 "id": "HTMLText_18127A3F_1663_8BEF_4175_B0DF8CE38BFE",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#987B55",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:1.95vh;font-family:'Antonio';\"><B>F7VH+9MF, Jalan Raya Laplapan, Petulu, Ubud, Gianyar Regency, Bali 80552</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.19vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.73vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.19vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.73vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.19vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": true,
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "fontFamily": "Antonio",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button31015"
 },
 "id": "Button_18126A3F_1663_8BEF_41A4_B0EDA1A5F4E3",
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "width": 207,
 "fontSize": 30,
 "horizontalAlign": "center",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "layout": "horizontal",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#987B55"
 ],
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "label": "BOOK NOW",
 "height": 59,
 "click": "this.openLink('http://www.loremipsum.com', '_blank')",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "paddingTop": 0,
 "rollOverBackgroundOpacity": 1,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "visible": false,
 "fontStyle": "normal",
 "shadow": false,
 "shadowSpread": 1,
 "cursor": "hand",
 "minHeight": 1,
 "propagateClick": true,
 "fontWeight": "bold",
 "iconWidth": 32,
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "id": "HTMLText_18123A3E_1663_8BF1_419F_B7BD72D2053B",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#BBD149",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "top": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "height": 85,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.3vh;font-family:'Cinzel Bold';\"><B>LOKASI</B></SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "data": {
  "name": "HTMLText23803"
 },
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "id": "HTMLText_18125A3F_1663_8BEF_4196_AE566E10BAFC",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#BBD149",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "borderSize": 0,
 "minWidth": 1,
 "bottom": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "height": 57,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:45px;font-family:'Cinzel Bold';\"><B>PURA DALEM</B></SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "data": {
  "name": "HTMLText24905"
 },
 "paddingLeft": 0
}],
 "start": "this.playAudioList([this.audio_22BBBE5B_2C68_7835_41C4_A95D45A22ABE]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player468"
 },
 "scrollBarWidth": 10,
 "id": "rootPlayer",
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 20,
 "children": [
  "this.MainViewer",
  "this.Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_14F80305_1BED_F1EE_4193_B39F49D6928C",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_6AFFC5BF_2B2B_DD2C_417D_09B0327BD06F",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "downloadEnabled": false,
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "mouseWheelEnabled": true,
 "shadow": false,
 "minHeight": 20,
 "propagateClick": true,
 "overflow": "visible",
 "desktopMipmappingEnabled": false,
 "paddingLeft": 0
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
