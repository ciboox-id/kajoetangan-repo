(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.Button_485BFF41_598E_3DB2_41A9_33F36E014467], 'gyroscopeAvailable'); this.syncPlaylists([this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist,this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist,this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist,this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist,this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist,this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A].forEach(function(component) { component.set('visible', false); }) }",
 "downloadEnabled": false,
 "data": {
  "name": "Player468"
 },
 "height": "100%",
 "id": "rootPlayer",
 "layout": "absolute",
 "minHeight": 20,
 "children": [
  "this.MainViewer",
  "this.Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_355D8758_2BA4_E00A_41B5_C70E2F4F8D51",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "buttonToggleMute": "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 20,
 "desktopMipmappingEnabled": false,
 "propagateClick": true,
 "class": "Player",
 "borderSize": 0,
 "paddingLeft": 0,
 "definitions": [{
 "thumbnailUrl": "media/panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "Dinding",
 "id": "panorama_AD97D93F_A086_087A_41BD_55608A05F8C5",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AD961D48_A086_0805_41C0_642843219354",
   "backwardYaw": 164.76,
   "class": "AdjacentPanorama",
   "yaw": 99.27,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_B48D12FE_A16E_FDB8_41E2_83B57ECCD997",
  "this.overlay_BA410497_AB69_3CF0_41E5_2DDDBFD64567"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.37,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_34024ACD_3B5D_0EB8_41C5_9900139F8BB5"
},
{
 "thumbnailUrl": "media/panorama_AD961D48_A086_0805_41C0_642843219354_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "Jembatan",
 "id": "panorama_AD961D48_A086_0805_41C0_642843219354",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AD961D48_A086_0805_41C0_642843219354_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AD961D48_A086_0805_41C0_642843219354_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD961D48_A086_0805_41C0_642843219354_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD961D48_A086_0805_41C0_642843219354_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_AD961D48_A086_0805_41C0_642843219354_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD961D48_A086_0805_41C0_642843219354_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD961D48_A086_0805_41C0_642843219354_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AD961D48_A086_0805_41C0_642843219354_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD961D48_A086_0805_41C0_642843219354_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD961D48_A086_0805_41C0_642843219354_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AD961D48_A086_0805_41C0_642843219354_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD961D48_A086_0805_41C0_642843219354_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD961D48_A086_0805_41C0_642843219354_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AD961D48_A086_0805_41C0_642843219354_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD961D48_A086_0805_41C0_642843219354_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD961D48_A086_0805_41C0_642843219354_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AD961D48_A086_0805_41C0_642843219354_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD961D48_A086_0805_41C0_642843219354_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD961D48_A086_0805_41C0_642843219354_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AD97D93F_A086_087A_41BD_55608A05F8C5",
   "backwardYaw": 99.27,
   "class": "AdjacentPanorama",
   "yaw": 164.76,
   "distance": 1
  },
  {
   "panorama": "this.panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B",
   "backwardYaw": -1.36,
   "class": "AdjacentPanorama",
   "yaw": -141.22,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_B52DDF80_A16D_A448_41D5_9EE0A4461EA2",
  "this.overlay_BA791457_AB69_1C70_41B7_B98066CB4851",
  "this.overlay_9922D2FB_BF25_3C87_41E0_40B3B3421968"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -19.56,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2B6B6B69_3B5D_0E79_41A3_DBB83505D242"
},
{
 "shadowBlurRadius": 6,
 "titlePaddingLeft": 5,
 "id": "window_BBC7C711_AB77_1DF3_41C9_CE1E671CD1A6",
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "modal": true,
 "verticalAlign": "middle",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Rumah Kuno",
 "titlePaddingRight": 5,
 "height": 350,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titleFontColor": "#FFFFFF",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderColor": "#000000",
 "titleFontSize": "3vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BBC3C710_AB77_1DF1_41DC_1AF5F83A798D"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingRight": 10,
 "class": "Window",
 "bodyBorderColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0
 ],
 "contentOpaque": false,
 "footerHeight": 5
},
{
 "thumbnailUrl": "media/panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "Gang Tengah",
 "id": "panorama_AD95CCF9_A086_0806_41C5_95808BCB8200",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6",
   "backwardYaw": 96.26,
   "class": "AdjacentPanorama",
   "yaw": 160.44,
   "distance": 1
  },
  {
   "panorama": "this.panorama_AD95E63F_A086_187A_41D6_1A665265E1EA",
   "backwardYaw": -45.01,
   "class": "AdjacentPanorama",
   "yaw": -15.96,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_B82E2397_A156_FC48_41D8_F884EC046D0E",
  "this.overlay_B4614C10_A156_A447_41E1_295D7F4F24CE",
  "this.overlay_BB8F2EAC_AB77_2CD0_41D3_CE88A0743225"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "shadowBlurRadius": 6,
 "titlePaddingLeft": 5,
 "id": "window_BB9CEE88_AB77_2CD0_41D1_C1C67AAE476A",
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "modal": true,
 "verticalAlign": "middle",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Rumah Foto",
 "titlePaddingRight": 5,
 "height": 350,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titleFontColor": "#FFFFFF",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderColor": "#000000",
 "titleFontSize": "3vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BB98EE86_AB77_2CD0_41E1_586E0D52914E"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingRight": 10,
 "class": "Window",
 "bodyBorderColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0
 ],
 "contentOpaque": false,
 "footerHeight": 5
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_camera"
},
{
 "shadowBlurRadius": 6,
 "titlePaddingLeft": 5,
 "id": "window_BBF61B62_AB77_1451_41E0_BC2655F0455E",
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "modal": true,
 "verticalAlign": "middle",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "PENARIKAN KARCIS",
 "titlePaddingRight": 5,
 "height": 350,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titleFontColor": "#FFFFFF",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderColor": "#000000",
 "titleFontSize": "3vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BBF24B62_AB77_1451_41C8_B592DEC095C0"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingRight": 10,
 "class": "Window",
 "bodyBorderColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0
 ],
 "contentOpaque": false,
 "footerHeight": 5
},
{
 "shadowBlurRadius": 6,
 "titlePaddingLeft": 5,
 "id": "window_BA4FF1B7_AB6B_743F_41CA_B0B35C491BB3",
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "modal": true,
 "verticalAlign": "middle",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Rumah Warga",
 "titlePaddingRight": 5,
 "height": 350,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titleFontColor": "#FFFFFF",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderColor": "#000000",
 "titleFontSize": "3vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BA4BF1B6_AB6B_7431_41D0_57B9625EAE9F"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingRight": 10,
 "class": "Window",
 "bodyBorderColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0
 ],
 "contentOpaque": false,
 "footerHeight": 5
},
{
 "thumbnailUrl": "media/panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "Pasar",
 "id": "panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0",
   "backwardYaw": 19.73,
   "class": "AdjacentPanorama",
   "yaw": -128.52,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_B4993493_A177_6448_4184_43328686DE70",
  "this.overlay_BBE30E06_AB69_2FD0_41C5_8C20961F8715"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 72.21,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2B819BFE_3B5D_0E5B_41B5_F3F5BD40A007"
},
{
 "shadowBlurRadius": 6,
 "titlePaddingLeft": 5,
 "id": "window_BA5B0A11_AB6B_17F3_41CA_F16A09C93923",
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "modal": true,
 "verticalAlign": "middle",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Spot Aula Atas",
 "titlePaddingRight": 5,
 "height": 350,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titleFontColor": "#FFFFFF",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderColor": "#000000",
 "titleFontSize": "3vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BBA70A10_AB6B_17F0_41E0_6E093BB5A7E7"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingRight": 10,
 "class": "Window",
 "bodyBorderColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0
 ],
 "contentOpaque": false,
 "footerHeight": 5
},
{
 "audio": {
  "mp3Url": "media/audio_3AD7152A_3505_8002_41B3_86113E84A60B.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_3AD7152A_3505_8002_41B3_86113E84A60B.ogg"
 },
 "data": {
  "label": "eng(kajoetangan)"
 },
 "class": "MediaAudio",
 "id": "audio_3AD7152A_3505_8002_41B3_86113E84A60B",
 "autoplay": true
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_camera"
},
{
 "thumbnailUrl": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "Gang Center",
 "id": "panorama_AD95EFB7_A086_080A_41BA_412178B32C76",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AD95E63F_A086_187A_41D6_1A665265E1EA",
   "backwardYaw": 53.5,
   "class": "AdjacentPanorama",
   "yaw": -141.88,
   "distance": 1
  },
  {
   "panorama": "this.panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0",
   "backwardYaw": -138.82,
   "class": "AdjacentPanorama",
   "yaw": 110.61,
   "distance": 1
  },
  {
   "panorama": "this.panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3",
   "backwardYaw": -171.8,
   "class": "AdjacentPanorama",
   "yaw": 33.73,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_B5484888_A173_AC47_41E0_2D1D76A0DDFB",
  "this.overlay_B4DAD42B_A173_A459_41D4_AD4D67EB8654",
  "this.overlay_B4214A58_A173_6CF8_41C8_034D96E0F0A5",
  "this.overlay_BBB42189_AB77_34D2_41D6_426D2C72CF12"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 164.04,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2B4D0B58_3B5D_0FA7_41CC_8EC1DF10AB46"
},
{
 "shadowBlurRadius": 6,
 "titlePaddingLeft": 5,
 "id": "window_BA4D3B04_AB69_15D0_41E0_A31EF7906E8F",
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "modal": true,
 "verticalAlign": "middle",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Karikatur",
 "titlePaddingRight": 5,
 "height": 350,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titleFontColor": "#FFFFFF",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderColor": "#000000",
 "titleFontSize": "3vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BA513B03_AB69_15D0_41BD_E0AAC949C945"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingRight": 10,
 "class": "Window",
 "bodyBorderColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0
 ],
 "contentOpaque": false,
 "footerHeight": 5
},
{
 "thumbnailUrl": "media/panorama_9691721A_BF25_DF81_41C4_442816645A7E_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "Pintu masuk 2 kajoe",
 "id": "panorama_9691721A_BF25_DF81_41C4_442816645A7E",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9691721A_BF25_DF81_41C4_442816645A7E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9691721A_BF25_DF81_41C4_442816645A7E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9691721A_BF25_DF81_41C4_442816645A7E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9691721A_BF25_DF81_41C4_442816645A7E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9691721A_BF25_DF81_41C4_442816645A7E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9691721A_BF25_DF81_41C4_442816645A7E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9691721A_BF25_DF81_41C4_442816645A7E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9691721A_BF25_DF81_41C4_442816645A7E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9691721A_BF25_DF81_41C4_442816645A7E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9691721A_BF25_DF81_41C4_442816645A7E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9691721A_BF25_DF81_41C4_442816645A7E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9691721A_BF25_DF81_41C4_442816645A7E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9691721A_BF25_DF81_41C4_442816645A7E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9691721A_BF25_DF81_41C4_442816645A7E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9691721A_BF25_DF81_41C4_442816645A7E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9691721A_BF25_DF81_41C4_442816645A7E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9691721A_BF25_DF81_41C4_442816645A7E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9691721A_BF25_DF81_41C4_442816645A7E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9691721A_BF25_DF81_41C4_442816645A7E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AD9631BB_A086_187A_41E2_E170654FAAEF",
   "backwardYaw": 84.8,
   "class": "AdjacentPanorama",
   "yaw": -179.73,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_9873DE35_BF2F_2783_41E6_618A3E01682A"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "shadowBlurRadius": 6,
 "titlePaddingLeft": 5,
 "id": "window_BBFB21F1_AB77_7433_41D6_4021ECCEBB26",
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "modal": true,
 "verticalAlign": "middle",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Simpang 3",
 "titlePaddingRight": 5,
 "height": 350,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titleFontColor": "#FFFFFF",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderColor": "#000000",
 "titleFontSize": "3vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BBC721F0_AB77_7431_41BE_439667E45203"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingRight": 10,
 "class": "Window",
 "bodyBorderColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0
 ],
 "contentOpaque": false,
 "footerHeight": 5
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -121.62,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2BBE2C2F_3B5D_09F9_41C1_1406B7D17DED"
},
{
 "class": "ImageResource",
 "id": "ImageResource_84B3D86B_A5B5_9EA1_4187_97FB0545BA1D",
 "levels": [
  {
   "url": "media/zoomImage_87461989_A5B4_BE61_416A_0EC2EA15E927_0_0.jpg",
   "width": 2480,
   "class": "ImageResourceLevel",
   "height": 3508
  },
  {
   "url": "media/zoomImage_87461989_A5B4_BE61_416A_0EC2EA15E927_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/zoomImage_87461989_A5B4_BE61_416A_0EC2EA15E927_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/zoomImage_87461989_A5B4_BE61_416A_0EC2EA15E927_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "class": "PlayList",
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist",
 "items": [
  {
   "camera": "this.panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 0, 1)",
   "media": "this.panorama_AD7EA043_A086_180A_41D5_E2370CE122CC",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 1, 2)",
   "media": "this.panorama_AD977A14_A086_080E_41D5_7F553B9ED13B",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 2, 3)",
   "media": "this.panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 3, 4)",
   "media": "this.panorama_AD95CCF9_A086_0806_41C5_95808BCB8200",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 4, 5)",
   "media": "this.panorama_AD95E63F_A086_187A_41D6_1A665265E1EA",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95EFB7_A086_080A_41BA_412178B32C76_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 5, 6)",
   "media": "this.panorama_AD95EFB7_A086_080A_41BA_412178B32C76",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 6, 7)",
   "media": "this.panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 7, 8)",
   "media": "this.panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 8, 9)",
   "media": "this.panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD956613_A086_F80A_41BC_1C78232EB052_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 9, 10)",
   "media": "this.panorama_AD956613_A086_F80A_41BC_1C78232EB052",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 10, 11)",
   "media": "this.panorama_AD957FB8_A086_0806_41D6_27DF784A26C2",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 11, 12)",
   "media": "this.panorama_AD9699C4_A086_080E_41DD_D3820826DAE8",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 12, 13)",
   "media": "this.panorama_AD9693D4_A086_380E_41BB_58D96C8F060C",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD955D6B_A086_081A_41D8_FA70027249BF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 13, 14)",
   "media": "this.panorama_AD955D6B_A086_081A_41D8_FA70027249BF",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD969752_A086_180A_41DD_83A932DB00B6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 14, 15)",
   "media": "this.panorama_AD969752_A086_180A_41DD_83A932DB00B6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD96F0BE_A086_787A_41C0_992129A072C6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 15, 16)",
   "media": "this.panorama_AD96F0BE_A086_787A_41C0_992129A072C6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 16, 17)",
   "media": "this.panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 17, 18)",
   "media": "this.panorama_AD9653E8_A086_1806_41B9_35A47326EDA1",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 18, 19)",
   "media": "this.panorama_AD965DE4_A086_080D_41BE_FBB811476DA6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 19, 20)",
   "media": "this.panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 20, 21)",
   "media": "this.panorama_AD9631BB_A086_187A_41E2_E170654FAAEF",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD961D48_A086_0805_41C0_642843219354_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 21, 22)",
   "media": "this.panorama_AD961D48_A086_0805_41C0_642843219354",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 22, 23)",
   "media": "this.panorama_AD97D93F_A086_087A_41BD_55608A05F8C5",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD97C591_A086_1806_41DB_579C203C7F01_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 23, 24)",
   "media": "this.panorama_AD97C591_A086_1806_41DB_579C203C7F01",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_9691721A_BF25_DF81_41C4_442816645A7E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 24, 25)",
   "media": "this.panorama_9691721A_BF25_DF81_41C4_442816645A7E",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_28C197E4_2685_138C_41B9_955DB35098B4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 25, 26)",
   "media": "this.panorama_28C197E4_2685_138C_41B9_955DB35098B4",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_2B3107A4_2685_338C_4192_4EEB1C884312_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 26, 27)",
   "media": "this.panorama_2B3107A4_2685_338C_4192_4EEB1C884312",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_2B42F770_2685_1484_419F_5BC519860A98_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 27, 28)",
   "media": "this.panorama_2B42F770_2685_1484_419F_5BC519860A98",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 28, 0)",
   "media": "this.panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063",
   "class": "PanoramaPlayListItem"
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_9691721A_BF25_DF81_41C4_442816645A7E_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_AD95EFB7_A086_080A_41BA_412178B32C76_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -94.51,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_34A2BB3E_3B5D_0FDB_41CD_1A35AE6C5433"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_camera"
},
{
 "thumbnailUrl": "media/panorama_2B3107A4_2685_338C_4192_4EEB1C884312_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "z house of kebaya",
 "id": "panorama_2B3107A4_2685_338C_4192_4EEB1C884312",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2B3107A4_2685_338C_4192_4EEB1C884312_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2B3107A4_2685_338C_4192_4EEB1C884312_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2B3107A4_2685_338C_4192_4EEB1C884312_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2B3107A4_2685_338C_4192_4EEB1C884312_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_2B3107A4_2685_338C_4192_4EEB1C884312_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2B3107A4_2685_338C_4192_4EEB1C884312_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2B3107A4_2685_338C_4192_4EEB1C884312_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2B3107A4_2685_338C_4192_4EEB1C884312_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2B3107A4_2685_338C_4192_4EEB1C884312_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2B3107A4_2685_338C_4192_4EEB1C884312_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2B3107A4_2685_338C_4192_4EEB1C884312_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2B3107A4_2685_338C_4192_4EEB1C884312_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2B3107A4_2685_338C_4192_4EEB1C884312_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2B3107A4_2685_338C_4192_4EEB1C884312_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2B3107A4_2685_338C_4192_4EEB1C884312_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2B3107A4_2685_338C_4192_4EEB1C884312_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_2B3107A4_2685_338C_4192_4EEB1C884312_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2B3107A4_2685_338C_4192_4EEB1C884312_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2B3107A4_2685_338C_4192_4EEB1C884312_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6",
   "backwardYaw": -4.63,
   "class": "AdjacentPanorama",
   "yaw": 167.27,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_3B419C2E_2A2B_BA20_41C1_B1144E373580"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "shadowBlurRadius": 6,
 "titlePaddingLeft": 5,
 "id": "window_BA7A4BF1_AB6B_1430_41D2_EF34DC7A70C5",
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "modal": true,
 "verticalAlign": "middle",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Masjid",
 "titlePaddingRight": 5,
 "height": 350,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titleFontColor": "#FFFFFF",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderColor": "#000000",
 "titleFontSize": "3vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BA464BF0_AB6B_1430_41D2_EDFCA3AFA77D"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingRight": 10,
 "class": "Window",
 "bodyBorderColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0
 ],
 "contentOpaque": false,
 "footerHeight": 5
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "camera": "this.panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_AD7EA043_A086_180A_41D5_E2370CE122CC",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_AD977A14_A086_080E_41D5_7F553B9ED13B",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_AD95CCF9_A086_0806_41C5_95808BCB8200",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_AD95E63F_A086_187A_41D6_1A665265E1EA",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95EFB7_A086_080A_41BA_412178B32C76_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_AD95EFB7_A086_080A_41BA_412178B32C76",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD956613_A086_F80A_41BC_1C78232EB052_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_AD956613_A086_F80A_41BC_1C78232EB052",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_AD957FB8_A086_0806_41D6_27DF784A26C2",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_AD9699C4_A086_080E_41DD_D3820826DAE8",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_AD9693D4_A086_380E_41BB_58D96C8F060C",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD955D6B_A086_081A_41D8_FA70027249BF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_AD955D6B_A086_081A_41D8_FA70027249BF",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD969752_A086_180A_41DD_83A932DB00B6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_AD969752_A086_180A_41DD_83A932DB00B6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD96F0BE_A086_787A_41C0_992129A072C6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_AD96F0BE_A086_787A_41C0_992129A072C6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_AD9653E8_A086_1806_41B9_35A47326EDA1",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "media": "this.panorama_AD965DE4_A086_080D_41BE_FBB811476DA6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "media": "this.panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "media": "this.panorama_AD9631BB_A086_187A_41E2_E170654FAAEF",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD961D48_A086_0805_41C0_642843219354_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "media": "this.panorama_AD961D48_A086_0805_41C0_642843219354",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "media": "this.panorama_AD97D93F_A086_087A_41BD_55608A05F8C5",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD97C591_A086_1806_41DB_579C203C7F01_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "media": "this.panorama_AD97C591_A086_1806_41DB_579C203C7F01",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_9691721A_BF25_DF81_41C4_442816645A7E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "media": "this.panorama_9691721A_BF25_DF81_41C4_442816645A7E",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_28C197E4_2685_138C_41B9_955DB35098B4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "media": "this.panorama_28C197E4_2685_138C_41B9_955DB35098B4",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_2B3107A4_2685_338C_4192_4EEB1C884312_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "media": "this.panorama_2B3107A4_2685_338C_4192_4EEB1C884312",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_2B42F770_2685_1484_419F_5BC519860A98_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "media": "this.panorama_2B42F770_2685_1484_419F_5BC519860A98",
   "class": "PanoramaPlayListItem"
  },
  {
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 0)",
   "media": "this.panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_camera"
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -170.08,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2B273B8C_3B5D_0EBF_418C_5A3EDB3C7D90"
},
{
 "shadowBlurRadius": 6,
 "titlePaddingLeft": 5,
 "id": "window_A2399B54_BF63_6D81_41A2_9CBC88BCA17D",
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "modal": true,
 "verticalAlign": "middle",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Aula",
 "titlePaddingRight": 5,
 "height": 350,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titleFontColor": "#FFFFFF",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderColor": "#000000",
 "titleFontSize": "3vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A23B7B5C_BF63_6D81_41DE_A986E057CB43"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingRight": 10,
 "class": "Window",
 "bodyBorderColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0
 ],
 "contentOpaque": false,
 "footerHeight": 5
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -15.24,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2BAE9C39_3B5D_09D9_41C7_5F71B608D3F8"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_AD969752_A086_180A_41DD_83A932DB00B6_camera"
},
{
 "shadowBlurRadius": 6,
 "titlePaddingLeft": 5,
 "id": "window_BA507FCE_AB6F_2C51_41DF_D3BE46A7A5D5",
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "modal": true,
 "verticalAlign": "middle",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Balai Pertemuan",
 "titlePaddingRight": 5,
 "height": 350,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titleFontColor": "#FFFFFF",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderColor": "#000000",
 "titleFontSize": "3vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BA547FCD_AB6F_2C53_41D0_F35375DF8B22"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingRight": 10,
 "class": "Window",
 "bodyBorderColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0
 ],
 "contentOpaque": false,
 "footerHeight": 5
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -130.82,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_34981B25_3B5D_0FE9_41A3_251537BC0374"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -175.52,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2B51CB47_3B5D_0FA9_417E_C473DCD31896"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 27.59,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2A6A8C60_3B5D_0A67_41C9_D7BB04EBD95B"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.64,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_34140ABB_3B5D_0ED8_41C1_8BD81402D26D"
},
{
 "thumbnailUrl": "media/panorama_AD97C591_A086_1806_41DB_579C203C7F01_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "Gang",
 "id": "panorama_AD97C591_A086_1806_41DB_579C203C7F01",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AD97C591_A086_1806_41DB_579C203C7F01_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AD97C591_A086_1806_41DB_579C203C7F01_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD97C591_A086_1806_41DB_579C203C7F01_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD97C591_A086_1806_41DB_579C203C7F01_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_AD97C591_A086_1806_41DB_579C203C7F01_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD97C591_A086_1806_41DB_579C203C7F01_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD97C591_A086_1806_41DB_579C203C7F01_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AD97C591_A086_1806_41DB_579C203C7F01_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD97C591_A086_1806_41DB_579C203C7F01_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD97C591_A086_1806_41DB_579C203C7F01_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AD97C591_A086_1806_41DB_579C203C7F01_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD97C591_A086_1806_41DB_579C203C7F01_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD97C591_A086_1806_41DB_579C203C7F01_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AD97C591_A086_1806_41DB_579C203C7F01_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD97C591_A086_1806_41DB_579C203C7F01_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD97C591_A086_1806_41DB_579C203C7F01_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AD97C591_A086_1806_41DB_579C203C7F01_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD97C591_A086_1806_41DB_579C203C7F01_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD97C591_A086_1806_41DB_579C203C7F01_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AD9653E8_A086_1806_41B9_35A47326EDA1",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_B563F900_A16F_AC48_41D4_797A20CFCB22",
  "this.overlay_B5138033_A16F_BC48_41E0_8DDE2FBE21B7",
  "this.overlay_BBB61C62_AB69_EC51_41BB_D9369D6E917D"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_2B42F770_2685_1484_419F_5BC519860A98_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "z pendopo",
 "id": "panorama_2B42F770_2685_1484_419F_5BC519860A98",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2B42F770_2685_1484_419F_5BC519860A98_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2B42F770_2685_1484_419F_5BC519860A98_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2B42F770_2685_1484_419F_5BC519860A98_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2B42F770_2685_1484_419F_5BC519860A98_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_2B42F770_2685_1484_419F_5BC519860A98_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2B42F770_2685_1484_419F_5BC519860A98_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2B42F770_2685_1484_419F_5BC519860A98_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2B42F770_2685_1484_419F_5BC519860A98_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2B42F770_2685_1484_419F_5BC519860A98_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2B42F770_2685_1484_419F_5BC519860A98_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2B42F770_2685_1484_419F_5BC519860A98_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2B42F770_2685_1484_419F_5BC519860A98_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2B42F770_2685_1484_419F_5BC519860A98_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2B42F770_2685_1484_419F_5BC519860A98_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2B42F770_2685_1484_419F_5BC519860A98_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2B42F770_2685_1484_419F_5BC519860A98_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_2B42F770_2685_1484_419F_5BC519860A98_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2B42F770_2685_1484_419F_5BC519860A98_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2B42F770_2685_1484_419F_5BC519860A98_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_28C197E4_2685_138C_41B9_955DB35098B4",
   "backwardYaw": 57.33,
   "class": "AdjacentPanorama",
   "yaw": 159.27,
   "distance": 1
  },
  {
   "panorama": "this.panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063",
   "backwardYaw": -95.37,
   "class": "AdjacentPanorama",
   "yaw": 49.18,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_3B373801_2A29_99DE_419D_8E2AF8CD8AB9",
  "this.overlay_3BA3F790_2A28_F6FF_41AE_4FDB96465412"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -55.42,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2A4C7C4D_3B5D_09B9_41C6_37AB39C77393"
},
{
 "thumbnailUrl": "media/panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "Gang",
 "id": "panorama_AD977A14_A086_080E_41D5_7F553B9ED13B",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6",
   "backwardYaw": -178.28,
   "class": "AdjacentPanorama",
   "yaw": -2.57,
   "distance": 1
  },
  {
   "panorama": "this.panorama_AD7EA043_A086_180A_41D5_E2370CE122CC",
   "backwardYaw": 5.32,
   "class": "AdjacentPanorama",
   "yaw": 172.45,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_B28020AB_A155_BC59_41D3_2ED095CCADA0",
  "this.overlay_B6D99C6A_A155_64DB_41DE_CC923AC11312",
  "this.overlay_BB9C9B8B_AB77_14D0_41AC_5E843CE2D56C"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_camera"
},
{
 "audio": {
  "mp3Url": "media/audio_34366E84_2BA3_60FA_4198_7946D2EE8628.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_34366E84_2BA3_60FA_4198_7946D2EE8628.ogg"
 },
 "data": {
  "label": "GABUNG_AUDIO(1)"
 },
 "class": "MediaAudio",
 "id": "audio_34366E84_2BA3_60FA_4198_7946D2EE8628",
 "autoplay": true
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 8.1,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2A38DC7D_3B5D_0A59_41C8_7BFD3F1BD31F"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -29.65,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_34693AA9_3B5D_0EF8_41C4_4BEB6FF7B3F4"
},
{
 "thumbnailUrl": "media/panorama_28C197E4_2685_138C_41B9_955DB35098B4_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "z galeri lombok",
 "id": "panorama_28C197E4_2685_138C_41B9_955DB35098B4",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_28C197E4_2685_138C_41B9_955DB35098B4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_28C197E4_2685_138C_41B9_955DB35098B4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_28C197E4_2685_138C_41B9_955DB35098B4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_28C197E4_2685_138C_41B9_955DB35098B4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_28C197E4_2685_138C_41B9_955DB35098B4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_28C197E4_2685_138C_41B9_955DB35098B4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_28C197E4_2685_138C_41B9_955DB35098B4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_28C197E4_2685_138C_41B9_955DB35098B4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_28C197E4_2685_138C_41B9_955DB35098B4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_28C197E4_2685_138C_41B9_955DB35098B4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_28C197E4_2685_138C_41B9_955DB35098B4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_28C197E4_2685_138C_41B9_955DB35098B4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_28C197E4_2685_138C_41B9_955DB35098B4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_28C197E4_2685_138C_41B9_955DB35098B4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_28C197E4_2685_138C_41B9_955DB35098B4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_28C197E4_2685_138C_41B9_955DB35098B4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_28C197E4_2685_138C_41B9_955DB35098B4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_28C197E4_2685_138C_41B9_955DB35098B4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_28C197E4_2685_138C_41B9_955DB35098B4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2B42F770_2685_1484_419F_5BC519860A98",
   "backwardYaw": 159.27,
   "class": "AdjacentPanorama",
   "yaw": 57.33,
   "distance": 1
  },
  {
   "panorama": "this.panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063",
   "backwardYaw": -107.79,
   "class": "AdjacentPanorama",
   "yaw": 62.03,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_3A1FF260_2A28_AE5E_41BC_F8679B7E9A0B",
  "this.overlay_3AE4CCCB_2A29_9A61_4160_E3F72BA84487"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -12.73,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2B1A4B71_3B5D_0E69_41C5_B636BB58EB5E"
},
{
 "shadowBlurRadius": 6,
 "titlePaddingLeft": 5,
 "id": "window_BA4C6443_AB69_3C57_41D2_EDDFC9472DA2",
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "modal": true,
 "verticalAlign": "middle",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Rumah Musik",
 "titlePaddingRight": 5,
 "height": 350,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titleFontColor": "#FFFFFF",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderColor": "#000000",
 "titleFontSize": "3vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BA486441_AB69_3C53_41DE_D81F72C44FF1"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingRight": 10,
 "class": "Window",
 "bodyBorderColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0
 ],
 "contentOpaque": false,
 "footerHeight": 5
},
{
 "class": "PlayList",
 "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist",
 "items": [
  {
   "camera": "this.panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 0, 1)",
   "media": "this.panorama_AD7EA043_A086_180A_41D5_E2370CE122CC",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 1, 2)",
   "media": "this.panorama_AD977A14_A086_080E_41D5_7F553B9ED13B",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 2, 3)",
   "media": "this.panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 3, 4)",
   "media": "this.panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 4, 5)",
   "media": "this.panorama_AD9631BB_A086_187A_41E2_E170654FAAEF",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD961D48_A086_0805_41C0_642843219354_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 5, 6)",
   "media": "this.panorama_AD961D48_A086_0805_41C0_642843219354",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 6, 0)",
   "media": "this.panorama_AD97D93F_A086_087A_41BD_55608A05F8C5",
   "class": "PanoramaPlayListItem"
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 7.09,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_34D94AFB_3B5D_0E59_41C5_E1D8F7431690"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_28C197E4_2685_138C_41B9_955DB35098B4_camera"
},
{
 "shadowBlurRadius": 6,
 "titlePaddingLeft": 5,
 "id": "window_BB810F5B_AB6F_6C77_41E1_C81E9D5FB1A5",
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "modal": true,
 "verticalAlign": "middle",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Makam Mbah Honggo",
 "titlePaddingRight": 5,
 "height": 350,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titleFontColor": "#FFFFFF",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderColor": "#000000",
 "titleFontSize": "3vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BB850F5A_AB6F_6C71_41D7_45D22D589DA4"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingRight": 10,
 "class": "Window",
 "bodyBorderColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0
 ],
 "contentOpaque": false,
 "footerHeight": 5
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.43,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2B0A7B7A_3B5D_0E5B_41B5_2EC84968A5EC"
},
{
 "thumbnailUrl": "media/panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "Gang",
 "id": "panorama_AD965DE4_A086_080D_41BE_FBB811476DA6",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AD9631BB_A086_187A_41E2_E170654FAAEF",
   "backwardYaw": -97.77,
   "class": "AdjacentPanorama",
   "yaw": 12.05,
   "distance": 1
  },
  {
   "panorama": "this.panorama_AD9653E8_A086_1806_41B9_35A47326EDA1",
   "backwardYaw": -8.55,
   "class": "AdjacentPanorama",
   "yaw": 85.49,
   "distance": 1
  },
  {
   "panorama": "this.panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_B41E686F_A173_6CD9_41DA_C15B53D9BB9B",
  "this.overlay_B56D5ADC_A173_6DFF_41C5_3F5A4160A612",
  "this.overlay_26029F69_29D8_9621_41C4_E61723C61E6F"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_AD956613_A086_F80A_41BC_1C78232EB052_camera"
},
{
 "easing": "cubic_out",
 "class": "FadeOutEffect",
 "id": "FadeOutEffect_84B2086B_A5B5_9EA1_41CF_12E331F8DF6F",
 "duration": 500
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 134.99,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_347E0A97_3B5D_0EA8_41C8_5CB6FDBC61D2"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -160.27,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2A7CDC56_3B5D_09AB_41CC_AE53D430AF7F"
},
{
 "shadowBlurRadius": 6,
 "titlePaddingLeft": 5,
 "id": "window_BA50E470_AB69_3C31_41BD_1D2A4116BE4D",
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "modal": true,
 "verticalAlign": "middle",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Spot",
 "titlePaddingRight": 5,
 "height": 350,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titleFontColor": "#FFFFFF",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderColor": "#000000",
 "titleFontSize": "3vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BA54E46F_AB69_3C2F_41D9_C954A62FAB98"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingRight": 10,
 "class": "Window",
 "bodyBorderColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0
 ],
 "contentOpaque": false,
 "footerHeight": 5
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_AD96F0BE_A086_787A_41C0_992129A072C6_camera"
},
{
 "shadowBlurRadius": 6,
 "titlePaddingLeft": 5,
 "id": "window_9F4ACEDA_BF62_E481_41E3_721F69379580",
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "modal": true,
 "verticalAlign": "middle",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Pintu Keluar",
 "titlePaddingRight": 5,
 "height": 350,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titleFontColor": "#FFFFFF",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderColor": "#000000",
 "titleFontSize": "3vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_9F46CEE4_BF62_E481_41DA_58B9E6F5C83B"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingRight": 10,
 "class": "Window",
 "bodyBorderColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0
 ],
 "contentOpaque": false,
 "footerHeight": 5
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -69.39,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_340EFAD6_3B5D_0EA8_41C2_92B5252749E0"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_camera"
},
{
 "audio": {
  "mp3Url": "media/audio_350CE34E_3B47_3FBB_41BF_4B7FEE3E28FD.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_350CE34E_3B47_3FBB_41BF_4B7FEE3E28FD.ogg"
 },
 "data": {
  "label": "indo_kajoetangan"
 },
 "class": "MediaAudio",
 "id": "audio_350CE34E_3B47_3FBB_41BF_4B7FEE3E28FD",
 "autoplay": true
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 82.23,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2A269C86_3B5D_0AAB_41CA_E8D6D188DF24"
},
{
 "thumbnailUrl": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "Gang",
 "id": "panorama_AD969752_A086_180A_41DD_83A932DB00B6",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_AD955D6B_A086_081A_41D8_FA70027249BF",
   "backwardYaw": -1.36,
   "class": "AdjacentPanorama",
   "yaw": 83.05,
   "distance": 1
  },
  {
   "panorama": "this.panorama_AD96F0BE_A086_787A_41C0_992129A072C6",
   "backwardYaw": 150.35,
   "class": "AdjacentPanorama",
   "yaw": 124.58,
   "distance": 1
  },
  {
   "panorama": "this.panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_B4582187_A175_FC48_41DD_374A451D7A43",
  "this.overlay_B569C3D8_A175_E3F8_41D8_7CEC6A725883",
  "this.overlay_BCDDDB5F_A4A1_825A_41E2_B4E6C9DEB182",
  "this.overlay_9DF03D61_BF62_E583_41D7_9B265A7DA95A"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "shadowBlurRadius": 6,
 "titlePaddingLeft": 5,
 "id": "window_9F5B18F0_BF65_2C81_41DA_6ADE5B55A2F6",
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "modal": true,
 "verticalAlign": "middle",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Kafe",
 "titlePaddingRight": 5,
 "height": 350,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titleFontColor": "#FFFFFF",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderColor": "#000000",
 "titleFontSize": "3vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_9F5918FC_BF65_2C82_41D0_0C40D18F290B"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingRight": 10,
 "class": "Window",
 "bodyBorderColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0
 ],
 "contentOpaque": false,
 "footerHeight": 5
},
{
 "thumbnailUrl": "media/panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "z yawes kape",
 "id": "panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_28C197E4_2685_138C_41B9_955DB35098B4",
   "backwardYaw": 62.03,
   "class": "AdjacentPanorama",
   "yaw": -107.79,
   "distance": 1
  },
  {
   "panorama": "this.panorama_2B42F770_2685_1484_419F_5BC519860A98",
   "backwardYaw": 49.18,
   "class": "AdjacentPanorama",
   "yaw": -95.37,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_38028442_2A2F_EA62_41C1_278B75D27E3D",
  "this.overlay_3BFD1B76_2A28_9E22_41C4_4FE2C0C9C240"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "shadowBlurRadius": 6,
 "titlePaddingLeft": 5,
 "id": "window_B9767727_AB69_FDDF_41E2_6559CC9739E2",
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "modal": true,
 "verticalAlign": "middle",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Gerbang Utama",
 "titlePaddingRight": 5,
 "height": 350,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titleFontColor": "#FFFFFF",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderColor": "#000000",
 "titleFontSize": "3vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_B97A1721_AB69_FDD3_41C9_FF5302C4F822"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingRight": 10,
 "class": "Window",
 "bodyBorderColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0
 ],
 "contentOpaque": false,
 "footerHeight": 5
},
{
 "shadowBlurRadius": 6,
 "titlePaddingLeft": 5,
 "id": "window_BA527883_AB6B_34D0_41CF_E16F44B19B5F",
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "modal": true,
 "verticalAlign": "middle",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Petunjuk Arah",
 "titlePaddingRight": 5,
 "height": 350,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titleFontColor": "#FFFFFF",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderColor": "#000000",
 "titleFontSize": "3vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BA598882_AB6B_34D0_41D3_529530AB58CD"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingRight": 10,
 "class": "Window",
 "bodyBorderColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0
 ],
 "contentOpaque": false,
 "footerHeight": 5
},
{
 "thumbnailUrl": "media/panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "Gang",
 "id": "panorama_AD9693D4_A086_380E_41BB_58D96C8F060C",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AD955D6B_A086_081A_41D8_FA70027249BF",
   "backwardYaw": -171.9,
   "class": "AdjacentPanorama",
   "yaw": 9.92,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_BA7F01DB_AB6B_7477_41E2_41A9BB99E5C2",
  "this.overlay_9E5C149F_BF6F_24BF_41C5_F5EAA7F3AD5F"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.27,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_34232AE9_3B5D_0E79_41C4_557BD666CAB7"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -96.95,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2B38AB83_3B5D_0EA9_41B7_AEE258E4F7F5"
},
{
 "thumbnailUrl": "media/panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "Center Atas",
 "id": "panorama_AD957FB8_A086_0806_41D6_27DF784A26C2",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AD956613_A086_F80A_41BC_1C78232EB052",
   "backwardYaw": -69.77,
   "class": "AdjacentPanorama",
   "yaw": -152.41,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_B722BA84_A175_6C48_41CE_32979E1CE39D",
  "this.overlay_BA554A37_AB6B_143F_41BE_F748CA568B6C"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_AD955D6B_A086_081A_41D8_FA70027249BF_camera"
},
{
 "thumbnailUrl": "media/panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "Jembatan",
 "id": "panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AD961D48_A086_0805_41C0_642843219354",
   "backwardYaw": -141.22,
   "class": "AdjacentPanorama",
   "yaw": -1.36,
   "distance": 1
  },
  {
   "panorama": "this.panorama_AD9631BB_A086_187A_41E2_E170654FAAEF",
   "backwardYaw": 58.38,
   "class": "AdjacentPanorama",
   "yaw": -172.91,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_B431C67A_A172_E4B8_41DA_F1E31E47D39C",
  "this.overlay_B4CA7A86_A172_EC48_41E3_23ACBE5B9302",
  "this.overlay_BA43DB2A_AB69_15D0_41D6_B2CE46183964"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_AD955D6B_A086_081A_41D8_FA70027249BF_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "Gang",
 "id": "panorama_AD955D6B_A086_081A_41D8_FA70027249BF",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AD955D6B_A086_081A_41D8_FA70027249BF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AD955D6B_A086_081A_41D8_FA70027249BF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD955D6B_A086_081A_41D8_FA70027249BF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD955D6B_A086_081A_41D8_FA70027249BF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_AD955D6B_A086_081A_41D8_FA70027249BF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD955D6B_A086_081A_41D8_FA70027249BF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD955D6B_A086_081A_41D8_FA70027249BF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AD955D6B_A086_081A_41D8_FA70027249BF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD955D6B_A086_081A_41D8_FA70027249BF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD955D6B_A086_081A_41D8_FA70027249BF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AD955D6B_A086_081A_41D8_FA70027249BF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD955D6B_A086_081A_41D8_FA70027249BF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD955D6B_A086_081A_41D8_FA70027249BF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AD955D6B_A086_081A_41D8_FA70027249BF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD955D6B_A086_081A_41D8_FA70027249BF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD955D6B_A086_081A_41D8_FA70027249BF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AD955D6B_A086_081A_41D8_FA70027249BF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD955D6B_A086_081A_41D8_FA70027249BF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD955D6B_A086_081A_41D8_FA70027249BF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AD969752_A086_180A_41DD_83A932DB00B6",
   "backwardYaw": 83.05,
   "class": "AdjacentPanorama",
   "yaw": -1.36,
   "distance": 1
  },
  {
   "panorama": "this.panorama_AD9693D4_A086_380E_41BB_58D96C8F060C",
   "backwardYaw": 9.92,
   "class": "AdjacentPanorama",
   "yaw": -171.9,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_B91F7D83_A176_A448_41D5_43D42A54D531",
  "this.overlay_B5317FE1_A176_A3C8_41E0_90AA2805D835",
  "this.overlay_BA7CC469_AB69_3C53_41BF_0D763032B385"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_2B3107A4_2685_338C_4192_4EEB1C884312_camera"
},
{
 "thumbnailUrl": "media/panorama_AD96F0BE_A086_787A_41C0_992129A072C6_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "Balai",
 "id": "panorama_AD96F0BE_A086_787A_41C0_992129A072C6",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AD96F0BE_A086_787A_41C0_992129A072C6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AD96F0BE_A086_787A_41C0_992129A072C6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD96F0BE_A086_787A_41C0_992129A072C6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD96F0BE_A086_787A_41C0_992129A072C6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_AD96F0BE_A086_787A_41C0_992129A072C6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD96F0BE_A086_787A_41C0_992129A072C6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD96F0BE_A086_787A_41C0_992129A072C6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AD96F0BE_A086_787A_41C0_992129A072C6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD96F0BE_A086_787A_41C0_992129A072C6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD96F0BE_A086_787A_41C0_992129A072C6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AD96F0BE_A086_787A_41C0_992129A072C6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD96F0BE_A086_787A_41C0_992129A072C6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD96F0BE_A086_787A_41C0_992129A072C6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AD96F0BE_A086_787A_41C0_992129A072C6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD96F0BE_A086_787A_41C0_992129A072C6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD96F0BE_A086_787A_41C0_992129A072C6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AD96F0BE_A086_787A_41C0_992129A072C6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD96F0BE_A086_787A_41C0_992129A072C6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD96F0BE_A086_787A_41C0_992129A072C6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AD969752_A086_180A_41DD_83A932DB00B6",
   "backwardYaw": 124.58,
   "class": "AdjacentPanorama",
   "yaw": 150.35,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_B7260726_A172_A448_41CD_9BFEF7395371",
  "this.overlay_BA47DFF8_AB6F_2C31_41DD_6DE5E4577591"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -6.66,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2BF34BA8_3B5D_0EE7_41C8_9362A5D7EC25"
},
{
 "class": "PlayList",
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist",
 "items": [
  {
   "camera": "this.panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 0, 1)",
   "media": "this.panorama_AD7EA043_A086_180A_41D5_E2370CE122CC",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 1, 2)",
   "media": "this.panorama_AD977A14_A086_080E_41D5_7F553B9ED13B",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 2, 3)",
   "media": "this.panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 3, 4)",
   "media": "this.panorama_AD95CCF9_A086_0806_41C5_95808BCB8200",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 4, 5)",
   "media": "this.panorama_AD95E63F_A086_187A_41D6_1A665265E1EA",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95EFB7_A086_080A_41BA_412178B32C76_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 5, 6)",
   "media": "this.panorama_AD95EFB7_A086_080A_41BA_412178B32C76",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 6, 7)",
   "media": "this.panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 7, 8)",
   "media": "this.panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 8, 9)",
   "media": "this.panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD956613_A086_F80A_41BC_1C78232EB052_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 9, 10)",
   "media": "this.panorama_AD956613_A086_F80A_41BC_1C78232EB052",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 10, 11)",
   "media": "this.panorama_AD957FB8_A086_0806_41D6_27DF784A26C2",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 11, 12)",
   "media": "this.panorama_AD9699C4_A086_080E_41DD_D3820826DAE8",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 12, 13)",
   "media": "this.panorama_AD9693D4_A086_380E_41BB_58D96C8F060C",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD955D6B_A086_081A_41D8_FA70027249BF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 13, 14)",
   "media": "this.panorama_AD955D6B_A086_081A_41D8_FA70027249BF",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD969752_A086_180A_41DD_83A932DB00B6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 14, 15)",
   "media": "this.panorama_AD969752_A086_180A_41DD_83A932DB00B6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD96F0BE_A086_787A_41C0_992129A072C6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 15, 16)",
   "media": "this.panorama_AD96F0BE_A086_787A_41C0_992129A072C6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 16, 17)",
   "media": "this.panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 17, 18)",
   "media": "this.panorama_AD9653E8_A086_1806_41B9_35A47326EDA1",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 18, 19)",
   "media": "this.panorama_AD965DE4_A086_080D_41BE_FBB811476DA6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 19, 20)",
   "media": "this.panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 20, 21)",
   "media": "this.panorama_AD9631BB_A086_187A_41E2_E170654FAAEF",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD961D48_A086_0805_41C0_642843219354_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 21, 22)",
   "media": "this.panorama_AD961D48_A086_0805_41C0_642843219354",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 22, 23)",
   "media": "this.panorama_AD97D93F_A086_087A_41BD_55608A05F8C5",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD97C591_A086_1806_41DB_579C203C7F01_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 23, 24)",
   "media": "this.panorama_AD97C591_A086_1806_41DB_579C203C7F01",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_9691721A_BF25_DF81_41C4_442816645A7E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 24, 25)",
   "media": "this.panorama_9691721A_BF25_DF81_41C4_442816645A7E",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_28C197E4_2685_138C_41B9_955DB35098B4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 25, 26)",
   "media": "this.panorama_28C197E4_2685_138C_41B9_955DB35098B4",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_2B3107A4_2685_338C_4192_4EEB1C884312_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 26, 27)",
   "media": "this.panorama_2B3107A4_2685_338C_4192_4EEB1C884312",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_2B42F770_2685_1484_419F_5BC519860A98_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 27, 28)",
   "media": "this.panorama_2B42F770_2685_1484_419F_5BC519860A98",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 28, 0)",
   "media": "this.panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063",
   "class": "PanoramaPlayListItem"
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_camera"
},
{
 "thumbnailUrl": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "Gang",
 "id": "panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AD95CCF9_A086_0806_41C5_95808BCB8200",
   "backwardYaw": 160.44,
   "class": "AdjacentPanorama",
   "yaw": 96.26,
   "distance": 1
  },
  {
   "panorama": "this.panorama_2B3107A4_2685_338C_4192_4EEB1C884312",
   "backwardYaw": 167.27,
   "class": "AdjacentPanorama",
   "yaw": -4.63,
   "distance": 1
  },
  {
   "panorama": "this.panorama_AD977A14_A086_080E_41D5_7F553B9ED13B",
   "backwardYaw": -2.57,
   "class": "AdjacentPanorama",
   "yaw": -178.28,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_B5963020_A156_9C48_41D9_16AF53EBA4E1",
  "this.overlay_BBE91735_AB77_1C33_41CF_CCEE9CBB577B",
  "this.overlay_A2CA7B94_BF63_6C81_41D7_FF29D694DD21",
  "this.overlay_A2E03660_BF65_2782_41DF_E8960600AF1D",
  "this.overlay_2732819E_29D8_6AE2_41A8_3A7C58542494"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "Jembatan",
 "id": "panorama_AD9631BB_A086_187A_41E2_E170654FAAEF",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9691721A_BF25_DF81_41C4_442816645A7E",
   "backwardYaw": -179.73,
   "class": "AdjacentPanorama",
   "yaw": 84.8,
   "distance": 1
  },
  {
   "panorama": "this.panorama_AD965DE4_A086_080D_41BE_FBB811476DA6",
   "backwardYaw": 12.05,
   "class": "AdjacentPanorama",
   "yaw": -97.77,
   "distance": 1
  },
  {
   "panorama": "this.panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B",
   "backwardYaw": -172.91,
   "class": "AdjacentPanorama",
   "yaw": 58.38,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_BFFFFA0C_A4A0_8DBD_41DC_0C092BF725E6",
  "this.overlay_BA3E6351_AB69_7470_41DB_FAB73166E895",
  "this.overlay_9A40D692_BF23_2481_41A7_0D6389AE0509",
  "this.overlay_B56B069C_A16D_6478_41D3_4C1C634B98CD"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "easing": "cubic_in",
 "class": "FadeInEffect",
 "id": "FadeInEffect_84B2386B_A5B5_9EA1_41E0_65AA0E7005CB",
 "duration": 500
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 84.63,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2AF5FCA3_3B5D_0AE9_41A3_52301A813BD9"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.28,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2A088C73_3B5D_0A69_41B3_CD846325F3AD"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 1.72,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2BD6EB96_3B5D_0EAB_41A8_496EA8BC2936"
},
{
 "thumbnailUrl": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "Center",
 "id": "panorama_AD956613_A086_F80A_41BC_1C78232EB052",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AD957FB8_A086_0806_41D6_27DF784A26C2",
   "backwardYaw": -152.41,
   "class": "AdjacentPanorama",
   "yaw": -69.77,
   "distance": 1
  },
  {
   "panorama": "this.panorama_AD9699C4_A086_080E_41DD_D3820826DAE8",
   "backwardYaw": -171.28,
   "class": "AdjacentPanorama",
   "yaw": -26.25,
   "distance": 1
  },
  {
   "panorama": "this.panorama_AD9693D4_A086_380E_41BB_58D96C8F060C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3",
   "backwardYaw": -7.72,
   "class": "AdjacentPanorama",
   "yaw": -164.9,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_B51C401D_A172_9C79_41D7_A41EAEDBA521",
  "this.overlay_B62F00F2_A360_BE6E_41E1_29A5C6E0125F",
  "this.overlay_BA78C8A9_AB6B_34D0_41A6_5DE7D819F489",
  "this.overlay_A195E316_BF67_3D81_41E6_C1F3BB2B9853",
  "this.overlay_A097DB19_BF62_ED83_41E0_D6726BD85B55"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_camera"
},
{
 "buttonToggleHotspots": "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "mouseControlMode": "drag_acceleration",
 "buttonCardboardView": "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -20.73,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2B93DBDF_3B5D_0E59_41C5_343F85150521"
},
{
 "class": "PlayList",
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist",
 "items": [
  {
   "camera": "this.panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 0, 1)",
   "media": "this.panorama_AD7EA043_A086_180A_41D5_E2370CE122CC",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 1, 2)",
   "media": "this.panorama_AD977A14_A086_080E_41D5_7F553B9ED13B",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 2, 3)",
   "media": "this.panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 3, 4)",
   "media": "this.panorama_AD95CCF9_A086_0806_41C5_95808BCB8200",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 4, 5)",
   "media": "this.panorama_AD95E63F_A086_187A_41D6_1A665265E1EA",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95EFB7_A086_080A_41BA_412178B32C76_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 5, 6)",
   "media": "this.panorama_AD95EFB7_A086_080A_41BA_412178B32C76",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 6, 7)",
   "media": "this.panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 7, 8)",
   "media": "this.panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 8, 9)",
   "media": "this.panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD956613_A086_F80A_41BC_1C78232EB052_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 9, 10)",
   "media": "this.panorama_AD956613_A086_F80A_41BC_1C78232EB052",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 10, 11)",
   "media": "this.panorama_AD957FB8_A086_0806_41D6_27DF784A26C2",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 11, 12)",
   "media": "this.panorama_AD9699C4_A086_080E_41DD_D3820826DAE8",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 12, 13)",
   "media": "this.panorama_AD9693D4_A086_380E_41BB_58D96C8F060C",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD955D6B_A086_081A_41D8_FA70027249BF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 13, 14)",
   "media": "this.panorama_AD955D6B_A086_081A_41D8_FA70027249BF",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD969752_A086_180A_41DD_83A932DB00B6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 14, 15)",
   "media": "this.panorama_AD969752_A086_180A_41DD_83A932DB00B6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD96F0BE_A086_787A_41C0_992129A072C6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 15, 16)",
   "media": "this.panorama_AD96F0BE_A086_787A_41C0_992129A072C6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 16, 17)",
   "media": "this.panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 17, 18)",
   "media": "this.panorama_AD9653E8_A086_1806_41B9_35A47326EDA1",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 18, 19)",
   "media": "this.panorama_AD965DE4_A086_080D_41BE_FBB811476DA6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 19, 20)",
   "media": "this.panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 20, 21)",
   "media": "this.panorama_AD9631BB_A086_187A_41E2_E170654FAAEF",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD961D48_A086_0805_41C0_642843219354_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 21, 22)",
   "media": "this.panorama_AD961D48_A086_0805_41C0_642843219354",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 22, 23)",
   "media": "this.panorama_AD97D93F_A086_087A_41BD_55608A05F8C5",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD97C591_A086_1806_41DB_579C203C7F01_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 23, 24)",
   "media": "this.panorama_AD97C591_A086_1806_41DB_579C203C7F01",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_9691721A_BF25_DF81_41C4_442816645A7E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 24, 25)",
   "media": "this.panorama_9691721A_BF25_DF81_41C4_442816645A7E",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_28C197E4_2685_138C_41B9_955DB35098B4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 25, 26)",
   "media": "this.panorama_28C197E4_2685_138C_41B9_955DB35098B4",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_2B3107A4_2685_338C_4192_4EEB1C884312_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 26, 27)",
   "media": "this.panorama_2B3107A4_2685_338C_4192_4EEB1C884312",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_2B42F770_2685_1484_419F_5BC519860A98_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 27, 28)",
   "media": "this.panorama_2B42F770_2685_1484_419F_5BC519860A98",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 28, 0)",
   "media": "this.panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063",
   "class": "PanoramaPlayListItem"
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 8.72,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2A1AFC6A_3B5D_0A7B_4190_6E1B09F6018B"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -126.5,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_34C31B03_3B5D_0FA9_41C9_DD1106351F06"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 153.75,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_34191AC4_3B5D_0EA8_41B8_65C0D404501E"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -122.67,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2AC6AC9A_3B5D_0ADB_41C6_D875D351B1B6"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -167.95,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_342EDAF2_3B5D_0E6B_4190_07548F5F5482"
},
{
 "thumbnailUrl": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "Gang",
 "id": "panorama_AD95E63F_A086_187A_41D6_1A665265E1EA",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AD95CCF9_A086_0806_41C5_95808BCB8200",
   "backwardYaw": -15.96,
   "class": "AdjacentPanorama",
   "yaw": -45.01,
   "distance": 1
  },
  {
   "panorama": "this.panorama_AD95EFB7_A086_080A_41BA_412178B32C76",
   "backwardYaw": -141.88,
   "class": "AdjacentPanorama",
   "yaw": 53.5,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_B50B6B8E_A16D_AC5B_41E0_CC3D52A69345",
  "this.overlay_B2A809E3_A172_AFC8_41D1_9F70527941A6",
  "this.overlay_BBED8217_AB77_77FF_41B0_978C9C10A340",
  "this.overlay_9F082944_BF65_2D81_41C7_51A22E22E803",
  "this.overlay_9F627F47_BF62_E58F_41C0_D9D383BA89B0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7.55,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2B40FB50_3B5D_0FA7_41CB_DD83CA04435D"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 171.45,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2AD6BC90_3B5D_0AA7_41CA_C550BB2F0C04"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.64,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_34634AA0_3B5D_0EE8_41C2_0B6A0673AA13"
},
{
 "thumbnailUrl": "media/panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "Gang",
 "id": "panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AD95EFB7_A086_080A_41BA_412178B32C76",
   "backwardYaw": 110.61,
   "class": "AdjacentPanorama",
   "yaw": -138.82,
   "distance": 1
  },
  {
   "panorama": "this.panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D",
   "backwardYaw": -128.52,
   "class": "AdjacentPanorama",
   "yaw": 19.73,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_B7F94771_A177_64C9_41BF_CD3AE14C798F",
  "this.overlay_BB9B9A49_AB68_F453_41E1_BECA26006FA1",
  "this.overlay_A865C423_BA04_5AAE_41DE_29E689825B63"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -80.73,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_346E4AB2_3B5D_0EE8_41BD_6DAA6BC6A020"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 51.48,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_3438EADE_3B5D_0E58_41B6_96F4A7FDA4A1"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 41.18,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_34CF4B0C_3B5D_0FBF_41C7_6D01FEA15481"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_AD961D48_A086_0805_41C0_642843219354_camera"
},
{
 "shadowBlurRadius": 6,
 "titlePaddingLeft": 5,
 "id": "window_BA4B5430_AB69_1C31_41D9_641ED21A4F74",
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "modal": true,
 "verticalAlign": "middle",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "PENARIKAN KARCIS",
 "titlePaddingRight": 5,
 "height": 350,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titleFontColor": "#FFFFFF",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderColor": "#000000",
 "titleFontSize": "3vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BA4F5430_AB69_1C31_41E1_845EA874B425"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingRight": 10,
 "class": "Window",
 "bodyBorderColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0
 ],
 "contentOpaque": false,
 "footerHeight": 5
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_2B42F770_2685_1484_419F_5BC519860A98_camera"
},
{
 "shadowBlurRadius": 6,
 "titlePaddingLeft": 5,
 "id": "window_BB81EC3B_AB69_EC37_41B1_FA65C2340EDE",
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "modal": true,
 "verticalAlign": "middle",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Kafe Tempoe Doeloe",
 "titlePaddingRight": 5,
 "height": 350,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titleFontColor": "#FFFFFF",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderColor": "#000000",
 "titleFontSize": "3vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BB85EC39_AB69_EC30_41C2_B72F0F1EDAB9"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingRight": 10,
 "class": "Window",
 "bodyBorderColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0
 ],
 "contentOpaque": false,
 "footerHeight": 5
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_camera"
},
{
 "thumbnailUrl": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "Center",
 "id": "panorama_AD9653E8_A086_1806_41B9_35A47326EDA1",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AD965DE4_A086_080D_41BE_FBB811476DA6",
   "backwardYaw": 85.49,
   "class": "AdjacentPanorama",
   "yaw": -8.55,
   "distance": 1
  },
  {
   "panorama": "this.panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5",
   "backwardYaw": 4.48,
   "class": "AdjacentPanorama",
   "yaw": 173.34,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_B696C507_A173_A449_41DD_86F354CB1C12",
  "this.overlay_B57C0914_A173_AC48_41E1_1A787EF2227B",
  "this.overlay_B52E7BD4_A173_A3C8_41D3_36CA0C4A164F",
  "this.overlay_BA6902AE_AB6F_14D1_41B0_AE8273132223"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_camera"
},
{
 "thumbnailUrl": "media/panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "Makam",
 "id": "panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AD9653E8_A086_1806_41B9_35A47326EDA1",
   "backwardYaw": 173.34,
   "class": "AdjacentPanorama",
   "yaw": 4.48,
   "distance": 1
  },
  {
   "panorama": "this.panorama_AD956613_A086_F80A_41BC_1C78232EB052",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_B4D11B5F_A172_ECF8_41E1_9F2046C730B6",
  "this.overlay_B772EE57_A172_E4C8_4174_CB0CA3DC6197",
  "this.overlay_BBB04F81_AB6F_6CD0_41C2_350432A8051C"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "class": "PlayList",
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist",
 "items": [
  {
   "camera": "this.panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 0, 1)",
   "media": "this.panorama_AD7EA043_A086_180A_41D5_E2370CE122CC",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 1, 2)",
   "media": "this.panorama_AD977A14_A086_080E_41D5_7F553B9ED13B",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 2, 3)",
   "media": "this.panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 3, 4)",
   "media": "this.panorama_AD95CCF9_A086_0806_41C5_95808BCB8200",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 4, 5)",
   "media": "this.panorama_AD95E63F_A086_187A_41D6_1A665265E1EA",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95EFB7_A086_080A_41BA_412178B32C76_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 5, 6)",
   "media": "this.panorama_AD95EFB7_A086_080A_41BA_412178B32C76",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 6, 7)",
   "media": "this.panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 7, 8)",
   "media": "this.panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 8, 9)",
   "media": "this.panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD956613_A086_F80A_41BC_1C78232EB052_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 9, 10)",
   "media": "this.panorama_AD956613_A086_F80A_41BC_1C78232EB052",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 10, 11)",
   "media": "this.panorama_AD957FB8_A086_0806_41D6_27DF784A26C2",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 11, 12)",
   "media": "this.panorama_AD9699C4_A086_080E_41DD_D3820826DAE8",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 12, 13)",
   "media": "this.panorama_AD9693D4_A086_380E_41BB_58D96C8F060C",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD955D6B_A086_081A_41D8_FA70027249BF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 13, 14)",
   "media": "this.panorama_AD955D6B_A086_081A_41D8_FA70027249BF",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD969752_A086_180A_41DD_83A932DB00B6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 14, 15)",
   "media": "this.panorama_AD969752_A086_180A_41DD_83A932DB00B6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD96F0BE_A086_787A_41C0_992129A072C6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 15, 16)",
   "media": "this.panorama_AD96F0BE_A086_787A_41C0_992129A072C6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 16, 17)",
   "media": "this.panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 17, 18)",
   "media": "this.panorama_AD9653E8_A086_1806_41B9_35A47326EDA1",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 18, 19)",
   "media": "this.panorama_AD965DE4_A086_080D_41BE_FBB811476DA6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 19, 20)",
   "media": "this.panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 20, 21)",
   "media": "this.panorama_AD9631BB_A086_187A_41E2_E170654FAAEF",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD961D48_A086_0805_41C0_642843219354_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 21, 22)",
   "media": "this.panorama_AD961D48_A086_0805_41C0_642843219354",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 22, 23)",
   "media": "this.panorama_AD97D93F_A086_087A_41BD_55608A05F8C5",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD97C591_A086_1806_41DB_579C203C7F01_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 23, 24)",
   "media": "this.panorama_AD97C591_A086_1806_41DB_579C203C7F01",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_9691721A_BF25_DF81_41C4_442816645A7E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 24, 25)",
   "media": "this.panorama_9691721A_BF25_DF81_41C4_442816645A7E",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_28C197E4_2685_138C_41B9_955DB35098B4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 25, 26)",
   "media": "this.panorama_28C197E4_2685_138C_41B9_955DB35098B4",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_2B3107A4_2685_338C_4192_4EEB1C884312_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 26, 27)",
   "media": "this.panorama_2B3107A4_2685_338C_4192_4EEB1C884312",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_2B42F770_2685_1484_419F_5BC519860A98_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 27, 28)",
   "media": "this.panorama_2B42F770_2685_1484_419F_5BC519860A98",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 28, 0)",
   "media": "this.panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063",
   "class": "PanoramaPlayListItem"
  }
 ]
},
{
 "audio": {
  "mp3Url": "media/audio_38D09C28_3681_80B8_4190_F1E907A5069C.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_38D09C28_3681_80B8_4190_F1E907A5069C.ogg"
 },
 "data": {
  "label": "eng_kajoetangan"
 },
 "class": "MediaAudio",
 "id": "audio_38D09C28_3681_80B8_4190_F1E907A5069C",
 "autoplay": true
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_camera"
},
{
 "shadowBlurRadius": 6,
 "titlePaddingLeft": 5,
 "id": "window_BBA3B5E6_AB6B_1C50_41C0_0C59E672B098",
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "modal": true,
 "verticalAlign": "middle",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Peta Kajoetangan",
 "titlePaddingRight": 5,
 "height": 350,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titleFontColor": "#FFFFFF",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderColor": "#000000",
 "titleFontSize": "3vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BBAFB5E5_AB6B_1C50_41C6_23C0D9F29352"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingRight": 10,
 "class": "Window",
 "bodyBorderColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0
 ],
 "contentOpaque": false,
 "footerHeight": 5
},
{
 "class": "PlayList",
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist",
 "items": [
  {
   "camera": "this.panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 0, 1)",
   "media": "this.panorama_AD7EA043_A086_180A_41D5_E2370CE122CC",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 1, 2)",
   "media": "this.panorama_AD977A14_A086_080E_41D5_7F553B9ED13B",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 2, 3)",
   "media": "this.panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 3, 4)",
   "media": "this.panorama_AD95CCF9_A086_0806_41C5_95808BCB8200",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 4, 5)",
   "media": "this.panorama_AD95E63F_A086_187A_41D6_1A665265E1EA",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95EFB7_A086_080A_41BA_412178B32C76_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 5, 6)",
   "media": "this.panorama_AD95EFB7_A086_080A_41BA_412178B32C76",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 6, 7)",
   "media": "this.panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 7, 8)",
   "media": "this.panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 8, 9)",
   "media": "this.panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD956613_A086_F80A_41BC_1C78232EB052_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 9, 10)",
   "media": "this.panorama_AD956613_A086_F80A_41BC_1C78232EB052",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 10, 11)",
   "media": "this.panorama_AD957FB8_A086_0806_41D6_27DF784A26C2",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 11, 12)",
   "media": "this.panorama_AD9699C4_A086_080E_41DD_D3820826DAE8",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 12, 13)",
   "media": "this.panorama_AD9693D4_A086_380E_41BB_58D96C8F060C",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD955D6B_A086_081A_41D8_FA70027249BF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 13, 14)",
   "media": "this.panorama_AD955D6B_A086_081A_41D8_FA70027249BF",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD969752_A086_180A_41DD_83A932DB00B6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 14, 15)",
   "media": "this.panorama_AD969752_A086_180A_41DD_83A932DB00B6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD96F0BE_A086_787A_41C0_992129A072C6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 15, 16)",
   "media": "this.panorama_AD96F0BE_A086_787A_41C0_992129A072C6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 16, 17)",
   "media": "this.panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 17, 18)",
   "media": "this.panorama_AD9653E8_A086_1806_41B9_35A47326EDA1",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 18, 19)",
   "media": "this.panorama_AD965DE4_A086_080D_41BE_FBB811476DA6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 19, 20)",
   "media": "this.panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 20, 21)",
   "media": "this.panorama_AD9631BB_A086_187A_41E2_E170654FAAEF",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD961D48_A086_0805_41C0_642843219354_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 21, 22)",
   "media": "this.panorama_AD961D48_A086_0805_41C0_642843219354",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 22, 23)",
   "media": "this.panorama_AD97D93F_A086_087A_41BD_55608A05F8C5",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AD97C591_A086_1806_41DB_579C203C7F01_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 23, 24)",
   "media": "this.panorama_AD97C591_A086_1806_41DB_579C203C7F01",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_9691721A_BF25_DF81_41C4_442816645A7E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 24, 25)",
   "media": "this.panorama_9691721A_BF25_DF81_41C4_442816645A7E",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_28C197E4_2685_138C_41B9_955DB35098B4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 25, 26)",
   "media": "this.panorama_28C197E4_2685_138C_41B9_955DB35098B4",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_2B3107A4_2685_338C_4192_4EEB1C884312_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 26, 27)",
   "media": "this.panorama_2B3107A4_2685_338C_4192_4EEB1C884312",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_2B42F770_2685_1484_419F_5BC519860A98_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 27, 28)",
   "media": "this.panorama_2B42F770_2685_1484_419F_5BC519860A98",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 28, 0)",
   "media": "this.panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063",
   "class": "PanoramaPlayListItem"
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_AD97C591_A086_1806_41DB_579C203C7F01_camera"
},
{
 "shadowBlurRadius": 6,
 "titlePaddingLeft": 5,
 "id": "window_BA79E28A_AB6F_14D1_41DC_A2738CA1E919",
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "modal": true,
 "verticalAlign": "middle",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Simpang Sungai",
 "titlePaddingRight": 5,
 "height": 350,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titleFontColor": "#FFFFFF",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderColor": "#000000",
 "titleFontSize": "3vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BA7DE289_AB6F_14D3_41D2_E25BB24B91E8"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingRight": 10,
 "class": "Window",
 "bodyBorderColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0
 ],
 "contentOpaque": false,
 "footerHeight": 5
},
{
 "shadowBlurRadius": 6,
 "titlePaddingLeft": 5,
 "id": "window_BBEB9A23_AB68_F7D7_41E2_8EC8CA45F995",
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "modal": true,
 "verticalAlign": "middle",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Gazebo Foto",
 "titlePaddingRight": 5,
 "height": 350,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titleFontColor": "#FFFFFF",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderColor": "#000000",
 "titleFontSize": "3vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BBF79A22_AB68_F7D1_41BD_8C611F0572D7"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingRight": 10,
 "class": "Window",
 "bodyBorderColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0
 ],
 "contentOpaque": false,
 "footerHeight": 5
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 8.2,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_34FC4B14_3B5D_0FAF_41C4_E5E3C269AE1B"
},
{
 "shadowBlurRadius": 6,
 "titlePaddingLeft": 5,
 "id": "window_BB816165_AB77_3453_41E2_C0963CEAC7DD",
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "modal": true,
 "verticalAlign": "middle",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Rumah Kuno",
 "titlePaddingRight": 5,
 "height": 350,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titleFontColor": "#FFFFFF",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderColor": "#000000",
 "titleFontSize": "3vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BB8D4164_AB77_3451_41DC_4810A6991E15"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingRight": 10,
 "class": "Window",
 "bodyBorderColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0
 ],
 "contentOpaque": false,
 "footerHeight": 5
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -117.97,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_34E94B1D_3B5D_0FD9_41C8_80E1A3F90AC3"
},
{
 "thumbnailUrl": "media/panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "Gang",
 "id": "panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AD95EFB7_A086_080A_41BA_412178B32C76",
   "backwardYaw": 33.73,
   "class": "AdjacentPanorama",
   "yaw": -171.8,
   "distance": 1
  },
  {
   "panorama": "this.panorama_AD956613_A086_F80A_41BC_1C78232EB052",
   "backwardYaw": -164.9,
   "class": "AdjacentPanorama",
   "yaw": -7.72,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_BA52360D_AB6B_1FD0_41E1_2E2785B5EDB8",
  "this.overlay_A03769B6_BF63_EC81_41E3_81F9D824B46A",
  "this.overlay_A0CE7637_BF63_278F_41C8_F098261CC560"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -174.68,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2BC57B9F_3B5D_0ED9_41BC_2B986CAC3DD5"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -83.74,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_34784A8E_3B5D_0EB8_41B0_C3D0B135C3B6"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 110.23,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2BE38BBB_3B5D_0ED9_41AA_08C396502BD0"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 15.1,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_34B42B36_3B5D_0FEB_41B5_0B28E9079F43"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 38.12,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2B7D8B61_3B5D_0E69_419C_77974EACEE05"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 38.78,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2BB00C1D_3B5D_09D9_41C1_75C6A1DFDC3F"
},
{
 "shadowBlurRadius": 6,
 "titlePaddingLeft": 5,
 "id": "window_BA14232D_AB69_75D0_41E3_F7A0ACE08754",
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "modal": true,
 "verticalAlign": "middle",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Jembatan Utama",
 "titlePaddingRight": 5,
 "height": 350,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titleFontColor": "#FFFFFF",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderColor": "#000000",
 "titleFontSize": "3vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BA19032C_AB69_75D0_41B9_931A873254A4"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingRight": 10,
 "class": "Window",
 "bodyBorderColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0
 ],
 "contentOpaque": false,
 "footerHeight": 5
},
{
 "thumbnailUrl": "media/panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "Center Masjid",
 "id": "panorama_AD9699C4_A086_080E_41DD_D3820826DAE8",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AD956613_A086_F80A_41BC_1C78232EB052",
   "backwardYaw": -26.25,
   "class": "AdjacentPanorama",
   "yaw": -171.28,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_B53326CC_A176_A5DF_41DE_57C6FDADBEBE",
  "this.overlay_BA6B1C15_AB6B_13F3_41C7_6869E5839DEA"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -146.27,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_3486DB2E_3B5D_0FFB_41BA_640937511496"
},
{
 "thumbnailUrl": "media/panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "Gerbang Utama",
 "id": "panorama_AD7EA043_A086_180A_41D5_E2370CE122CC",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AD977A14_A086_080E_41D5_7F553B9ED13B",
   "backwardYaw": 172.45,
   "class": "AdjacentPanorama",
   "yaw": 5.32,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_B5BA495D_A155_6CF8_41BB_F0F8A143B7EA",
  "this.overlay_B925F762_AB69_FC51_41E4_BAEF638334D5"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "shadowBlurRadius": 6,
 "titlePaddingLeft": 5,
 "id": "window_BBF31DE2_AB69_2C50_41C3_5ECE9DF48C79",
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "modal": true,
 "verticalAlign": "middle",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Pasar",
 "titlePaddingRight": 5,
 "height": 350,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titleFontColor": "#FFFFFF",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderColor": "#000000",
 "titleFontSize": "3vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BBFF1DE1_AB69_2C50_41D2_F9EFB42B455F"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingRight": 10,
 "class": "Window",
 "bodyBorderColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0
 ],
 "contentOpaque": false,
 "footerHeight": 5
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -95.2,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_2A5C5C43_3B5D_09A9_4197_A3299BBC4FC6"
},
{
 "progressBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingRight": 6,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "minHeight": 50,
 "toolTipPaddingTop": 4,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 5,
 "borderSize": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "10px",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 4,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "class": "ViewerArea",
 "toolTipFontFamily": "Arial",
 "top": 0,
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "children": [
  "this.Label_0C5F13A8_3BA0_A6FF_41BD_E3D21CFCE151",
  "this.Label_0C5F23A8_3BA0_A6FF_419F_468451E37918"
 ],
 "id": "Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
 "left": 30,
 "layout": "absolute",
 "minHeight": 1,
 "width": 271,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": 20,
 "height": 97,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "--STICKER"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "data": {
  "name": "--BUTTON SET"
 },
 "scrollBarOpacity": 0.5,
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
  "this.Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
  "this.Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "top": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#3E5CB8"
 ]
},
{
 "data": {
  "name": "-button set"
 },
 "scrollBarOpacity": 0.5,
 "id": "Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
 "layout": "vertical",
 "minHeight": 1,
 "width": 60,
 "children": [
  "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
  "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
  "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
  "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
  "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": 15,
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "class": "Container",
 "height": 300,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0.02
 ],
 "top": 62,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "gap": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "backgroundColor": [
  "#3E5CB8"
 ]
},
{
 "children": [
  "this.IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
  "this.IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
  "this.IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
  "this.IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
  "this.IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8",
  "this.IconButton_B6B950D0_A091_D927_41BE_C8B55F476B18",
  "this.IconButton_B74E92BD_A090_3959_41E2_B32C2E223160",
  "this.IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B",
  "this.IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "layout": "horizontal",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "paddingRight": 30,
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "0%",
 "height": 90,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "horizontalAlign": "right",
 "width": "100%",
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set container"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "data": {
  "name": "---INFO photo"
 },
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "0%",
 "paddingRight": 0,
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "---PANORAMA LIST"
 },
 "id": "Container_355D8758_2BA4_E00A_41B5_C70E2F4F8D51",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_355D4758_2BA4_E00A_41A8_E3FF6B431431"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "0%",
 "paddingRight": 0,
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_355D8758_2BA4_E00A_41B5_C70E2F4F8D51, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "---LOCATION"
 },
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "0%",
 "paddingRight": 0,
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "---FLOORPLAN"
 },
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "0%",
 "paddingRight": 0,
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "---PHOTOALBUM"
 },
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "0%",
 "paddingRight": 0,
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "---REALTOR"
 },
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "0%",
 "paddingRight": 0,
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#04A3E1",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "minHeight": 0,
 "backgroundOpacity": 0.55,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "right": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "UIComponent",
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": 0,
 "paddingRight": 0,
 "top": 0,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "UIComponent2982"
 },
 "paddingTop": 0,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "minHeight": 0,
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "right": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "ZoomImage",
 "backgroundColor": [],
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": 0,
 "paddingRight": 0,
 "top": 0,
 "backgroundColorRatios": [],
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "ZoomImage2983"
 },
 "paddingTop": 0,
 "visible": false,
 "scaleMode": "custom"
},
{
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "CloseButton2984"
 },
 "id": "closeButtonPopupPanorama",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "layout": "horizontal",
 "pressedIconColor": "#888888",
 "minHeight": 0,
 "iconWidth": 20,
 "backgroundOpacity": 0.3,
 "shadowSpread": 1,
 "iconHeight": 20,
 "shadow": false,
 "paddingBottom": 5,
 "borderRadius": 0,
 "right": 10,
 "iconColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 0,
 "iconBeforeLabel": true,
 "propagateClick": false,
 "fontStyle": "normal",
 "rollOverIconColor": "#666666",
 "class": "CloseButton",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 5,
 "fontWeight": "normal",
 "mode": "push",
 "paddingRight": 5,
 "top": 10,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "fontSize": "1.29vmin",
 "label": "",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 5,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "iconLineWidth": 5
},
{
 "pressedIconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings Mute"
 },
 "iconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41.png",
 "id": "Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "fontStyle": "normal",
 "layout": "horizontal",
 "pressedIconWidth": 30,
 "minHeight": 1,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#3E5CB8"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "class": "Button",
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "backgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "fontSize": 12,
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#3E5CB8"
 ]
},
{
 "pressedIconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings Fullscreen"
 },
 "iconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A.png",
 "id": "Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "fontStyle": "normal",
 "layout": "horizontal",
 "pressedIconWidth": 30,
 "minHeight": 1,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#3E5CB8"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "class": "Button",
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "backgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "fontSize": 12,
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#3E5CB8"
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C74DAE5C_C808_2D2D_41C1_559D7BCAFDA8",
   "pitch": -23.94,
   "yaw": 99.27,
   "hfov": 17.44,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD961D48_A086_0805_41C0_642843219354, this.camera_2BAE9C39_3B5D_09D9_41C7_5F71B608D3F8); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B48D12FE_A16E_FDB8_41E2_83B57ECCD997",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 99.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.94,
   "hfov": 17.44
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C74D5E5D_C808_2D2F_41D8_8D405A6CD4FA",
   "pitch": -42.43,
   "yaw": 15.68,
   "hfov": 13.88,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BA50E470_AB69_3C31_41BD_1D2A4116BE4D, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_BA410497_AB69_3CF0_41E5_2DDDBFD64567",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 15.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.43,
   "hfov": 13.88
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C74F4E59_C808_2D37_4187_83BDD0AEC865",
   "pitch": -4.5,
   "yaw": 164.76,
   "hfov": 26.41,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD97D93F_A086_087A_41BD_55608A05F8C5, this.camera_346E4AB2_3B5D_0EE8_41BD_6DAA6BC6A020); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B52DDF80_A16D_A448_41D5_9EE0A4461EA2",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 164.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD961D48_A086_0805_41C0_642843219354_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.5,
   "hfov": 26.41
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C74CFE5A_C808_2D35_41C5_715037378432",
   "pitch": -32.83,
   "yaw": 76.43,
   "hfov": 15.8,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BA4B5430_AB69_1C31_41D9_641ED21A4F74, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_BA791457_AB69_1C70_41B7_B98066CB4851",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD961D48_A086_0805_41C0_642843219354_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.83,
   "hfov": 15.8
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C74C1E5B_C808_2D2B_41C7_367B419DBBFC",
   "pitch": 8.73,
   "yaw": -141.22,
   "hfov": 15.61,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B, this.camera_34140ABB_3B5D_0ED8_41C1_8BD81402D26D); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_9922D2FB_BF25_3C87_41E0_40B3B3421968",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -141.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD961D48_A086_0805_41C0_642843219354_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.73,
   "hfov": 15.61
  }
 ]
},
{
 "id": "htmlText_BBC3C710_AB77_1DF1_41DC_1AF5F83A798D",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C7212E24_C808_2D1D_41D0_CCF921B0F16F",
   "pitch": -7.05,
   "yaw": -15.96,
   "hfov": 27.93,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD95E63F_A086_187A_41D6_1A665265E1EA, this.camera_347E0A97_3B5D_0EA8_41C8_5CB6FDBC61D2); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B82E2397_A156_FC48_41D8_F884EC046D0E",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -15.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.05,
   "hfov": 27.93
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_B4CE7971_A155_ECC8_41A2_41AD89532787",
   "pitch": -38.28,
   "yaw": 160.44,
   "hfov": 22.09,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6, this.camera_34784A8E_3B5D_0EB8_41B0_C3D0B135C3B6); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B4614C10_A156_A447_41E1_295D7F4F24CE",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 160.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.28,
   "hfov": 22.09
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C73EAE25_C808_2D1F_41E2_B1B8AB727CE0",
   "pitch": 3.21,
   "yaw": -44.37,
   "hfov": 18.78,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BB9CEE88_AB77_2CD0_41D1_C1C67AAE476A, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_BB8F2EAC_AB77_2CD0_41D3_CE88A0743225",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -44.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.21,
   "hfov": 18.78
  }
 ]
},
{
 "id": "htmlText_BB98EE86_AB77_2CD0_41E1_586E0D52914E",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_BBF24B62_AB77_1451_41C8_B592DEC095C0",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Lokasi penarikan karcis untuk membedakan warga sekitar atau pengunjung.</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_BA4BF1B6_AB6B_7431_41D0_57B9625EAE9F",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C73AEE32_C808_2D75_41DC_11142B0F7B8E",
   "pitch": -6.43,
   "yaw": -128.52,
   "hfov": 21.42,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0, this.camera_2A7CDC56_3B5D_09AB_41CC_AE53D430AF7F); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B4993493_A177_6448_4184_43328686DE70",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -128.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.43,
   "hfov": 21.42
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C73A8E32_C808_2D75_41C4_65FCC5D76CF9",
   "pitch": 4.58,
   "yaw": -56.39,
   "hfov": 18.75,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BBF31DE2_AB69_2C50_41C3_5ECE9DF48C79, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_BBE30E06_AB69_2FD0_41C5_8C20961F8715",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -56.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.58,
   "hfov": 18.75
  }
 ]
},
{
 "id": "htmlText_BBA70A10_AB6B_17F0_41E0_6E093BB5A7E7",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C73F9E2C_C808_2D6D_41E7_360C3A1CD17D",
   "pitch": -6.5,
   "yaw": -141.88,
   "hfov": 19.78,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD95E63F_A086_187A_41D6_1A665265E1EA, this.camera_34C31B03_3B5D_0FA9_41C9_DD1106351F06); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B5484888_A173_AC47_41E0_2D1D76A0DDFB",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -141.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.5,
   "hfov": 19.78
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C73F0E2C_C808_2D6D_41DE_560C87EE46D9",
   "pitch": -7.05,
   "yaw": 110.61,
   "hfov": 12.4,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0, this.camera_34CF4B0C_3B5D_0FBF_41C7_6D01FEA15481); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B4DAD42B_A173_A459_41D4_AD4D67EB8654",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 110.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.05,
   "hfov": 12.4
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_B577A845_A173_6CC8_41D6_7747F863470B",
   "pitch": -6.02,
   "yaw": 33.73,
   "hfov": 12.42,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3, this.camera_34FC4B14_3B5D_0FAF_41C4_E5E3C269AE1B); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B4214A58_A173_6CF8_41C8_034D96E0F0A5",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 33.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.02,
   "hfov": 12.42
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C73C9E2E_C808_2D6D_41E0_708F522DA7C3",
   "pitch": 0.12,
   "yaw": -30.3,
   "hfov": 18.81,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BB816165_AB77_3453_41E2_C0963CEAC7DD, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_BBB42189_AB77_34D2_41D6_426D2C72CF12",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -30.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.12,
   "hfov": 18.81
  }
 ]
},
{
 "id": "htmlText_BA513B03_AB69_15D0_41BD_E0AAC949C945",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C74B8E61_C808_2D17_41D1_A3D7FAC68FB9",
   "pitch": -15.63,
   "yaw": -179.73,
   "hfov": 17.85,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD9631BB_A086_187A_41E2_E170654FAAEF, this.camera_2A5C5C43_3B5D_09A9_4197_A3299BBC4FC6); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_9873DE35_BF2F_2783_41E6_618A3E01682A",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9691721A_BF25_DF81_41C4_442816645A7E_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.63,
   "hfov": 17.85
  }
 ]
},
{
 "id": "htmlText_BBC721F0_AB77_7431_41BE_439667E45203",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "items": [
  {
   "yaw": 167.27,
   "hfov": 16.63,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2B3107A4_2685_338C_4192_4EEB1C884312_1_HS_0_0.png",
      "width": 372,
      "class": "ImageResourceLevel",
      "height": 456
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.99,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6, this.camera_34024ACD_3B5D_0EB8_41C5_9900139F8BB5); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3B419C2E_2A2B_BA20_41C1_B1144E373580",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 167.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2B3107A4_2685_338C_4192_4EEB1C884312_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.99,
   "hfov": 16.63
  }
 ]
},
{
 "id": "htmlText_BA464BF0_AB6B_1430_41D2_EDFCA3AFA77D",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_A23B7B5C_BF63_6D81_41DE_A986E057CB43",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_BA547FCD_AB6F_2C53_41D0_F35375DF8B22",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C74AAE5E_C808_2D2D_41E2_A03D4BF5F701",
   "pitch": -21.33,
   "yaw": 0.02,
   "hfov": 24.68,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B563F900_A16F_AC48_41D4_797A20CFCB22",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD97C591_A086_1806_41DB_579C203C7F01_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.33,
   "hfov": 24.68
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_829942BD_A5BC_B3A0_41DF_CB83CE0BE95C",
   "pitch": -25.45,
   "yaw": -179.11,
   "hfov": 23.92,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B5138033_A16F_BC48_41E0_8DDE2FBE21B7",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD97C591_A086_1806_41DB_579C203C7F01_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.45,
   "hfov": 23.92
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C74A2E60_C808_2D15_41D1_4E1825799D99",
   "pitch": -0.57,
   "yaw": -90.02,
   "hfov": 18.81,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BB81EC3B_AB69_EC37_41B1_FA65C2340EDE, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_BBB61C62_AB69_EC51_41BB_D9369D6E917D",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD97C591_A086_1806_41DB_579C203C7F01_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.57,
   "hfov": 18.81
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_0F115AD3_2BBD_601E_41BA_772CF288974B",
   "pitch": -5.2,
   "yaw": 49.18,
   "hfov": 14.35,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063, this.camera_2AF5FCA3_3B5D_0AE9_41A3_52301A813BD9); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3B373801_2A29_99DE_419D_8E2AF8CD8AB9",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2B42F770_2685_1484_419F_5BC519860A98_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.2,
   "hfov": 14.35
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_0F113AD4_2BBD_601A_4194_045C5F423AE4",
   "pitch": -11.72,
   "yaw": 159.27,
   "hfov": 17.61,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_28C197E4_2685_138C_41B9_955DB35098B4, this.camera_2AC6AC9A_3B5D_0ADB_41C6_D875D351B1B6); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3BA3F790_2A28_F6FF_41AE_4FDB96465412",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 159.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2B42F770_2685_1484_419F_5BC519860A98_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.72,
   "hfov": 17.61
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C723AE1D_C808_2D2F_41D4_0CFA69B6234F",
   "pitch": -18.72,
   "yaw": -2.57,
   "hfov": 26.65,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6, this.camera_2BD6EB96_3B5D_0EAB_41A8_496EA8BC2936); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B28020AB_A155_BC59_41D3_2ED095CCADA0",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.72,
   "hfov": 26.65
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_B7985548_A156_A4C7_41D4_9B0A5910BB7B",
   "pitch": -26.61,
   "yaw": 172.45,
   "hfov": 25.16,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD7EA043_A086_180A_41D5_E2370CE122CC, this.camera_2BC57B9F_3B5D_0ED9_41BC_2B986CAC3DD5); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B6D99C6A_A155_64DB_41DE_CC923AC11312",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.61,
   "hfov": 25.16
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C7232E1F_C808_2D2B_41E3_13B69F72FF05",
   "pitch": -32.83,
   "yaw": 76.43,
   "hfov": 15.8,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BBF61B62_AB77_1451_41E0_BC2655F0455E, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_BB9C9B8B_AB77_14D0_41AC_5E843CE2D56C",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.83,
   "hfov": 15.8
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_0FEFBAD1_2BBD_601A_41BF_452E655BAC00",
   "pitch": -3.59,
   "yaw": 57.33,
   "hfov": 4.17,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2B42F770_2685_1484_419F_5BC519860A98, this.camera_2B93DBDF_3B5D_0E59_41C5_343F85150521); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3A1FF260_2A28_AE5E_41BC_F8679B7E9A0B",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 57.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_28C197E4_2685_138C_41B9_955DB35098B4_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.59,
   "hfov": 4.17
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_0F101AD2_2BBD_601E_41B0_8DE82062DE57",
   "pitch": -0.69,
   "yaw": 62.03,
   "hfov": 3.85,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063, this.camera_2B819BFE_3B5D_0E5B_41B5_F3F5BD40A007); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3AE4CCCB_2A29_9A61_4160_E3F72BA84487",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 62.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_28C197E4_2685_138C_41B9_955DB35098B4_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.69,
   "hfov": 3.85
  }
 ]
},
{
 "id": "htmlText_BA486441_AB69_3C53_41DE_D81F72C44FF1",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_BB850F5A_AB6F_6C71_41D7_45D22D589DA4",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C7337E52_C808_2D35_41C9_7E6F61BB7DEE",
   "pitch": -16.18,
   "yaw": 12.05,
   "hfov": 25.44,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD9631BB_A086_187A_41E2_E170654FAAEF, this.camera_2A269C86_3B5D_0AAB_41CA_E8D6D188DF24); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B41E686F_A173_6CD9_41DA_C15B53D9BB9B",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.18,
   "hfov": 25.44
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_829BE2B6_A5BC_B3A3_41DE_EC624CF46120",
   "pitch": -27.16,
   "yaw": 85.49,
   "hfov": 23.57,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD9653E8_A086_1806_41B9_35A47326EDA1, this.camera_2AD6BC90_3B5D_0AA7_41CA_C550BB2F0C04); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B56D5ADC_A173_6DFF_41C5_3F5A4160A612",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.16,
   "hfov": 23.57
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_0FEB2AC7_2BBD_6006_41B5_925AC7F6BAAC",
   "pitch": -14.12,
   "yaw": -100.86,
   "hfov": 25.69,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_26029F69_29D8_9621_41C4_E61723C61E6F",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -100.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_1_HS_4_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.12,
   "hfov": 25.69
  }
 ]
},
{
 "id": "htmlText_BA54E46F_AB69_3C2F_41D9_C954A62FAB98",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_9F46CEE4_BF62_E481_41DA_58B9E6F5C83B",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C734DE45_C808_2D1F_41DF_FD3A7AD8A39B",
   "pitch": -10.67,
   "yaw": 0.02,
   "hfov": 26.04,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B4582187_A175_FC48_41DD_374A451D7A43",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.67,
   "hfov": 26.04
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_829F22B2_A5BC_B3A3_41E2_8BA6D9207126",
   "pitch": -39.52,
   "yaw": -178.08,
   "hfov": 20.44,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B569C3D8_A175_E3F8_41D8_7CEC6A725883",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -178.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.52,
   "hfov": 20.44
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C7343E47_C808_2D1B_41DF_E7B9C9B6DB7A",
   "pitch": -19.94,
   "yaw": 83.05,
   "hfov": 24.91,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD955D6B_A086_081A_41D8_FA70027249BF, this.camera_34634AA0_3B5D_0EE8_41C2_0B6A0673AA13); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_BCDDDB5F_A4A1_825A_41E2_B4E6C9DEB182",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.94,
   "hfov": 24.91
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C735CE48_C808_2D15_41CE_5A0AC87BDEDC",
   "pitch": -6.9,
   "yaw": 124.58,
   "hfov": 26.3,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD96F0BE_A086_787A_41C0_992129A072C6, this.camera_34693AA9_3B5D_0EF8_41C4_4BEB6FF7B3F4); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_9DF03D61_BF62_E583_41D7_9B265A7DA95A",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 124.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_1_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.9,
   "hfov": 26.3
  }
 ]
},
{
 "id": "htmlText_9F5918FC_BF65_2C82_41D0_0C40D18F290B",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Barang yang di jual:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Terima Pesanan/Ready only:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">rentan harga (nego):</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">CP: </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:21px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:21px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_0F119AD4_2BBD_601A_41BF_BC59E8442859",
   "pitch": -28.4,
   "yaw": -107.79,
   "hfov": 25.24,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_28C197E4_2685_138C_41B9_955DB35098B4, this.camera_34E94B1D_3B5D_0FD9_41C8_80E1A3F90AC3); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_38028442_2A2F_EA62_41C1_278B75D27E3D",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -107.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.4,
   "hfov": 25.24
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_0F121AD5_2BBD_601A_41A1_8F69B34DF151",
   "pitch": 0.63,
   "yaw": -95.37,
   "hfov": 14.96,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2B42F770_2685_1484_419F_5BC519860A98, this.camera_34981B25_3B5D_0FE9_41A3_251537BC0374); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3BFD1B76_2A28_9E22_41C4_4FE2C0C9C240",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -95.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.63,
   "hfov": 14.96
  }
 ]
},
{
 "id": "htmlText_B97A1721_AB69_FDD3_41C9_FF5302C4F822",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_BA598882_AB6B_34D0_41D3_529530AB58CD",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C7390E40_C808_2D15_41DA_C2024FA5FC11",
   "pitch": 6.98,
   "yaw": -34.42,
   "hfov": 18.67,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BA4FF1B7_AB6B_743F_41CA_B0B35C491BB3, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_BA7F01DB_AB6B_7477_41E2_41A9BB99E5C2",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -34.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.98,
   "hfov": 18.67
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C7369E41_C808_2D17_41D6_10284628F8D6",
   "pitch": -6.78,
   "yaw": 9.92,
   "hfov": 27.13,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD955D6B_A086_081A_41D8_FA70027249BF, this.camera_2A38DC7D_3B5D_0A59_41C8_7BFD3F1BD31F); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_9E5C149F_BF6F_24BF_41C5_F5EAA7F3AD5F",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_1_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.78,
   "hfov": 27.13
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C7393E3C_C808_2D6D_41E6_F884E9BB9806",
   "pitch": -42.74,
   "yaw": -152.41,
   "hfov": 14.01,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD956613_A086_F80A_41BC_1C78232EB052, this.camera_2BE38BBB_3B5D_0ED9_41AA_08C396502BD0); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B722BA84_A175_6C48_41CE_32979E1CE39D",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -152.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.74,
   "hfov": 14.01
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C736CE3C_C808_2D6D_41E6_0FF4390560EC",
   "pitch": -32.83,
   "yaw": 76.43,
   "hfov": 15.8,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BA5B0A11_AB6B_17F3_41CA_F16A09C93923, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_BA554A37_AB6B_143F_41BE_F748CA568B6C",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.83,
   "hfov": 15.8
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_829B22B7_A5BC_B3A0_41C1_3A4B9AB21C6B",
   "pitch": -14.79,
   "yaw": -1.36,
   "hfov": 25.62,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD961D48_A086_0805_41C0_642843219354, this.camera_2BB00C1D_3B5D_09D9_41C1_75C6A1DFDC3F); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B431C67A_A172_E4B8_41DA_F1E31E47D39C",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.79,
   "hfov": 25.62
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_829C32B9_A5BC_B3A0_41C0_8C25078A51FB",
   "pitch": -30.23,
   "yaw": -172.91,
   "hfov": 22.89,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD9631BB_A086_187A_41E2_E170654FAAEF, this.camera_2BBE2C2F_3B5D_09F9_41C1_1406B7D17DED); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B4CA7A86_A172_EC48_41E3_23ACBE5B9302",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -172.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.23,
   "hfov": 22.89
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C7318E55_C808_2D3E_41D7_846C7813691E",
   "pitch": -32.83,
   "yaw": 76.43,
   "hfov": 15.8,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BA4D3B04_AB69_15D0_41E0_A31EF7906E8F, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_BA43DB2A_AB69_15D0_41D6_B2CE46183964",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.83,
   "hfov": 15.8
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C7363E42_C808_2D15_41B8_DDC91F97015F",
   "pitch": -13.78,
   "yaw": -1.36,
   "hfov": 25.73,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD969752_A086_180A_41DD_83A932DB00B6, this.camera_2B38AB83_3B5D_0EA9_41B7_AEE258E4F7F5); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B91F7D83_A176_A448_41D5_43D42A54D531",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD955D6B_A086_081A_41D8_FA70027249BF_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.78,
   "hfov": 25.73
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C737DE43_C808_2D1B_41E5_F26B2A816166",
   "pitch": -18.93,
   "yaw": -171.9,
   "hfov": 25.06,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD9693D4_A086_380E_41BB_58D96C8F060C, this.camera_2B273B8C_3B5D_0EBF_418C_5A3EDB3C7D90); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B5317FE1_A176_A3C8_41E0_90AA2805D835",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD955D6B_A086_081A_41D8_FA70027249BF_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.93,
   "hfov": 25.06
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C7374E44_C808_2D1D_41CB_78B8E11A6B47",
   "pitch": 2.87,
   "yaw": 86.04,
   "hfov": 18.78,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BA4C6443_AB69_3C57_41D2_EDDFC9472DA2, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_BA7CC469_AB69_3C53_41BF_0D763032B385",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD955D6B_A086_081A_41D8_FA70027249BF_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.87,
   "hfov": 18.78
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C7354E49_C808_2D17_41D8_6C2E68DF970A",
   "pitch": -26.82,
   "yaw": 150.35,
   "hfov": 23.64,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD969752_A086_180A_41DD_83A932DB00B6, this.camera_2A4C7C4D_3B5D_09B9_41C6_37AB39C77393); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B7260726_A172_A448_41CD_9BFEF7395371",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 150.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD96F0BE_A086_787A_41C0_992129A072C6_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.82,
   "hfov": 23.64
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C7350E49_C808_2D16_41D0_6B0EB294869C",
   "pitch": -32.83,
   "yaw": 76.43,
   "hfov": 15.8,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BA507FCE_AB6F_2C51_41DF_D3BE46A7A5D5, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_BA47DFF8_AB6F_2C31_41DD_6DE5E4577591",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD96F0BE_A086_787A_41C0_992129A072C6_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.83,
   "hfov": 15.8
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_B4CE8971_A155_ECC8_41BB_3FE22527881B",
   "pitch": -18.72,
   "yaw": -178.28,
   "hfov": 26.65,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD977A14_A086_080E_41D5_7F553B9ED13B, this.camera_2B0A7B7A_3B5D_0E5B_41B5_2EC84968A5EC); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B5963020_A156_9C48_41D9_16AF53EBA4E1",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -178.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.72,
   "hfov": 26.65
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_0FFA2AAE_2BBD_6006_41BA_D3FEEDEB0BAE",
   "pitch": 7.4,
   "yaw": 14.04,
   "hfov": 12.66,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BBC7C711_AB77_1DF3_41C9_CE1E671CD1A6, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_BBE91735_AB77_1C33_41CF_CCEE9CBB577B",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.4,
   "hfov": 12.66
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C7200E22_C808_2D15_419C_CB5B8CF8E257",
   "pitch": -1.94,
   "yaw": 48.29,
   "hfov": 18.8,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_A2399B54_BF63_6D81_41A2_9CBC88BCA17D, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A2CA7B94_BF63_6C81_41D7_FF29D694DD21",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 48.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.94,
   "hfov": 18.8
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C7219E23_C808_2D1B_41E8_D58025A36447",
   "pitch": -14.26,
   "yaw": 96.26,
   "hfov": 27.27,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD95CCF9_A086_0806_41C5_95808BCB8200, this.camera_2B6B6B69_3B5D_0E79_41A3_DBB83505D242); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A2E03660_BF65_2782_41DF_E8960600AF1D",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 96.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_1_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.26,
   "hfov": 27.27
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_0FFBCAB0_2BBD_601A_41B4_C8414142AF9D",
   "pitch": 1.73,
   "yaw": -4.63,
   "hfov": 13.04,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2B3107A4_2685_338C_4192_4EEB1C884312, this.camera_2B1A4B71_3B5D_0E69_41C5_B636BB58EB5E); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2732819E_29D8_6AE2_41A8_3A7C58542494",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.73,
   "hfov": 13.04
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_829B72BA_A5BC_B3A0_41D7_08752CBC5144",
   "pitch": -1.15,
   "yaw": 58.38,
   "hfov": 14.96,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B, this.camera_34D94AFB_3B5D_0E59_41C5_E1D8F7431690); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_BFFFFA0C_A4A0_8DBD_41DC_0C092BF725E6",
 "data": {
  "label": "Circle Arrow 04 Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 58.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.15,
   "hfov": 14.96
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C74EDE57_C808_2D3B_41E3_18635FEEEED3",
   "pitch": -24.59,
   "yaw": -14.17,
   "hfov": 17.1,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BA14232D_AB69_75D0_41E3_F7A0ACE08754, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_BA3E6351_AB69_7470_41DB_FAB73166E895",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -14.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.59,
   "hfov": 17.1
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C74E2E58_C808_2D35_41C3_97C7BE6C13FB",
   "pitch": 1.66,
   "yaw": 84.8,
   "hfov": 26.48,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9691721A_BF25_DF81_41C4_442816645A7E, this.camera_34232AE9_3B5D_0E79_41C4_557BD666CAB7); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_9A40D692_BF23_2481_41A7_0D6389AE0509",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 84.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_1_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.66,
   "hfov": 26.48
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C74FAE59_C808_2D37_41C6_35D03700AB6B",
   "pitch": 0.29,
   "yaw": -97.77,
   "hfov": 26.49,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD965DE4_A086_080D_41BE_FBB811476DA6, this.camera_342EDAF2_3B5D_0E6B_4190_07548F5F5482); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B56B069C_A16D_6478_41D3_4C1C634B98CD",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -97.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.29,
   "hfov": 26.49
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_8292C2AD_A5BC_B3A1_41D3_9AFDD22EC6D4",
   "pitch": -12.96,
   "yaw": -26.25,
   "hfov": 18.06,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD9699C4_A086_080E_41DD_D3820826DAE8, this.camera_2A1AFC6A_3B5D_0A7B_4190_6E1B09F6018B); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B51C401D_A172_9C79_41D7_A41EAEDBA521",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -26.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.96,
   "hfov": 18.06
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_8291E2AF_A5BC_B3A1_41C9_81BD242E998B",
   "pitch": 21.64,
   "yaw": -69.77,
   "hfov": 14.67,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD957FB8_A086_0806_41D6_27DF784A26C2, this.camera_2A6A8C60_3B5D_0A67_41C9_D7BB04EBD95B); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B62F00F2_A360_BE6E_41E1_29A5C6E0125F",
 "data": {
  "label": "Circle Arrow 04 Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -69.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.64,
   "hfov": 14.67
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C7387E39_C808_2D77_41C4_9E46BB6C2B5F",
   "pitch": 8.39,
   "yaw": 37.97,
   "hfov": 18.61,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BA527883_AB6B_34D0_41CF_E16F44B19B5F, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_BA78C8A9_AB6B_34D0_41A6_5DE7D819F489",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 37.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.39,
   "hfov": 18.61
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C739EE3A_C808_2D75_41DF_1B9FA437E241",
   "pitch": -15.7,
   "yaw": -164.9,
   "hfov": 17.84,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3, this.camera_2A088C73_3B5D_0A69_41B3_CD846325F3AD); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A195E316_BF67_3D81_41E6_C1F3BB2B9853",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -164.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_1_HS_5_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.7,
   "hfov": 17.84
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C7398E3B_C808_2D6B_41CD_EAAD694B0080",
   "pitch": 2.28,
   "yaw": -40.6,
   "hfov": 10.29,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A097DB19_BF62_ED83_41E0_D6726BD85B55",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -40.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.28,
   "hfov": 10.29
  }
 ]
},
{
 "pressedIconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings HS"
 },
 "iconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA.png",
 "id": "Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "fontStyle": "normal",
 "layout": "horizontal",
 "pressedIconWidth": 30,
 "minHeight": 1,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#3E5CB8"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "class": "Button",
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "backgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "rollOverIconWidth": 30,
 "rollOverIconHeight": 30,
 "paddingRight": 0,
 "fontSize": 12,
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#3E5CB8"
 ]
},
{
 "pressedIconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button settings VR"
 },
 "iconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0.png",
 "id": "Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "fontStyle": "normal",
 "layout": "horizontal",
 "minHeight": 1,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "class": "Button",
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "backgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "fontSize": 12,
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#3E5CB8"
 ]
},
{
 "pressedIconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings Gyro"
 },
 "iconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467.png",
 "id": "Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "fontStyle": "normal",
 "layout": "horizontal",
 "pressedIconWidth": 30,
 "minHeight": 1,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#3E5CB8"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "class": "Button",
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "backgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "rollOverIconWidth": 30,
 "rollOverIconHeight": 30,
 "paddingRight": 0,
 "fontSize": 12,
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#3E5CB8"
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C73E2E27_C808_2D1B_41D3_EC12717116DA",
   "pitch": -10.05,
   "yaw": -45.01,
   "hfov": 17.44,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD95CCF9_A086_0806_41C5_95808BCB8200, this.camera_2B4D0B58_3B5D_0FA7_41CC_8EC1DF10AB46); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B50B6B8E_A16D_AC5B_41E0_CC3D52A69345",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -45.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.05,
   "hfov": 17.44
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C73FDE27_C808_2D1B_41E8_24060D1F6992",
   "pitch": -4.63,
   "yaw": 53.5,
   "hfov": 17.65,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD95EFB7_A086_080A_41BA_412178B32C76, this.camera_2B7D8B61_3B5D_0E69_419C_77974EACEE05); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B2A809E3_A172_AFC8_41D1_9F70527941A6",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 53.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.63,
   "hfov": 17.65
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C73F9E28_C808_2D15_41D6_E1C9DB8F9C25",
   "pitch": -1.6,
   "yaw": 123.44,
   "hfov": 18.8,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BBFB21F1_AB77_7433_41D6_4021ECCEBB26, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_BBED8217_AB77_77FF_41B0_978C9C10A340",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.6,
   "hfov": 18.8
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C73E6E2A_C808_2D15_41D2_8495DFF4D3AB",
   "pitch": 8.01,
   "yaw": -107.18,
   "hfov": 18.62,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_9F5B18F0_BF65_2C81_41DA_6ADE5B55A2F6, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_9F082944_BF65_2D81_41C7_51A22E22E803",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -107.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.01,
   "hfov": 18.62
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C73E1E2B_C808_2D6B_41D9_0CBFA18C9AC8",
   "pitch": -8.46,
   "yaw": -166.89,
   "hfov": 18.6,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_9F4ACEDA_BF62_E481_41E3_721F69379580, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_9F627F47_BF62_E58F_41C0_D9D383BA89B0",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -166.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.46,
   "hfov": 18.6
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_B5707846_A173_6CC8_41DD_C8999B94A85A",
   "pitch": -6.92,
   "yaw": -138.82,
   "hfov": 14.58,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD95EFB7_A086_080A_41BA_412178B32C76, this.camera_340EFAD6_3B5D_0EA8_41C2_92B5252749E0); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B7F94771_A177_64C9_41BF_CD3AE14C798F",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -138.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.92,
   "hfov": 14.58
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C73DDE30_C808_2D75_41D2_56C6BB7B9C33",
   "pitch": 3.55,
   "yaw": 176.29,
   "hfov": 18.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BBEB9A23_AB68_F7D7_41E2_8EC8CA45F995, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_BB9B9A49_AB68_F453_41E1_BECA26006FA1",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 176.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.55,
   "hfov": 18.77
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C73D5E31_C808_2D77_41E2_6CB492C1AA93",
   "pitch": -6.92,
   "yaw": 19.73,
   "hfov": 14.58,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D, this.camera_3438EADE_3B5D_0E58_41B6_96F4A7FDA4A1); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A865C423_BA04_5AAE_41DE_29E689825B63",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 19.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.92,
   "hfov": 14.58
  }
 ]
},
{
 "id": "htmlText_BA4F5430_AB69_1C31_41E1_845EA874B425",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_BB85EC39_AB69_EC30_41C2_B72F0F1EDAB9",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Barang yang di jual:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Terima Pesanan/Ready only:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">rentan harga (nego):</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">CP:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C7336E4E_C808_2D2D_41E5_4963D98C881C",
   "pitch": -10.69,
   "yaw": -8.55,
   "hfov": 26.03,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD965DE4_A086_080D_41BE_FBB811476DA6, this.camera_34A2BB3E_3B5D_0FDB_41CD_1A35AE6C5433); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B696C507_A173_A449_41DD_86F354CB1C12",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.69,
   "hfov": 26.03
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_829CE2B5_A5BC_B3A1_41E4_502F4EF014D5",
   "pitch": -23.39,
   "yaw": 173.34,
   "hfov": 24.32,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5, this.camera_2B51CB47_3B5D_0FA9_417E_C473DCD31896); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B57C0914_A173_AC48_41E1_1A787EF2227B",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.39,
   "hfov": 24.32
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C730DE4F_C808_2D2B_41C9_282C7335CAE5",
   "pitch": -9.66,
   "yaw": -99.49,
   "hfov": 26.12,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B52E7BD4_A173_A3C8_41D3_36CA0C4A164F",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.66,
   "hfov": 26.12
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C7307E50_C808_2D35_41D4_DC5BB661F40F",
   "pitch": -60.28,
   "yaw": -12.46,
   "hfov": 9.32,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BA79E28A_AB6F_14D1_41DC_A2738CA1E919, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_BA6902AE_AB6F_14D1_41B0_AE8273132223",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -60.28,
   "hfov": 9.32
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C7329E4A_C808_2D15_41DE_DF979F652CDC",
   "pitch": -11.72,
   "yaw": 4.48,
   "hfov": 25.94,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD9653E8_A086_1806_41B9_35A47326EDA1, this.camera_2BF34BA8_3B5D_0EE7_41C8_9362A5D7EC25); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B4D11B5F_A172_ECF8_41E1_9F2046C730B6",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.72,
   "hfov": 25.94
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_829DA2B4_A5BC_B3A7_41A6_04BAAF4FF7DB",
   "pitch": -32.31,
   "yaw": -174.65,
   "hfov": 22.39,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B772EE57_A172_E4C8_4174_CB0CA3DC6197",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -174.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.31,
   "hfov": 22.39
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C733EE4C_C808_2D2E_41CF_4678B69A5232",
   "pitch": 27.23,
   "yaw": -85.9,
   "hfov": 16.72,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BB810F5B_AB6F_6C77_41E1_C81E9D5FB1A5, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_BBB04F81_AB6F_6CD0_41C2_350432A8051C",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 27.23,
   "hfov": 16.72
  }
 ]
},
{
 "id": "htmlText_BBAFB5E5_AB6B_1C50_41C6_23C0D9F29352",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_BA7DE289_AB6F_14D3_41D2_E25BB24B91E8",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_BBF79A22_AB68_F7D1_41BD_8C611F0572D7",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_BB8D4164_AB77_3451_41DC_4810A6991E15",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C73A0E34_C808_2D7D_41CE_C76166E88716",
   "pitch": 9.04,
   "yaw": 88.78,
   "hfov": 18.57,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BBA3B5E6_AB6B_1C50_41C0_0C59E672B098, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_BA52360D_AB6B_1FD0_41E1_2E2785B5EDB8",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.04,
   "hfov": 18.57
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C73B8E35_C808_2D7F_41DF_EC01324C7A87",
   "pitch": -20.85,
   "yaw": -171.8,
   "hfov": 20.14,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD95EFB7_A086_080A_41BA_412178B32C76, this.camera_3486DB2E_3B5D_0FFB_41BA_640937511496); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A03769B6_BF63_EC81_41E3_81F9D824B46A",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_1_HS_5_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.85,
   "hfov": 20.14
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C73B2E36_C808_2D7D_41E2_A88C7D6FEDAB",
   "pitch": -13.98,
   "yaw": -7.72,
   "hfov": 20.91,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD956613_A086_F80A_41BC_1C78232EB052, this.camera_34B42B36_3B5D_0FEB_41B5_0B28E9079F43); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A0CE7637_BF63_278F_41C8_F098261CC560",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_1_HS_6_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.98,
   "hfov": 20.91
  }
 ]
},
{
 "id": "htmlText_BA19032C_AB69_75D0_41B9_931A873254A4",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C739CE3E_C808_2D6D_41E8_436355DC4F00",
   "pitch": -23.25,
   "yaw": -171.28,
   "hfov": 25.1,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD956613_A086_F80A_41BC_1C78232EB052, this.camera_34191AC4_3B5D_0EA8_41B8_65C0D404501E); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B53326CC_A176_A5DF_41DE_57C6FDADBEBE",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.25,
   "hfov": 25.1
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C7398E3F_C808_2D6B_41E7_272CCDFFABDB",
   "pitch": 4.58,
   "yaw": -3.19,
   "hfov": 18.75,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BA7A4BF1_AB6B_1430_41D2_EF34DC7A70C5, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_BA6B1C15_AB6B_13F3_41C7_6869E5839DEA",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.58,
   "hfov": 18.75
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C7270E11_C808_2D37_41E6_C8DB2F0EE5F4",
   "pitch": -11.58,
   "yaw": 5.32,
   "hfov": 22.46,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD977A14_A086_080E_41D5_7F553B9ED13B, this.camera_2B40FB50_3B5D_0FA7_41CB_DD83CA04435D); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B5BA495D_A155_6CF8_41BB_F0F8A143B7EA",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.58,
   "hfov": 22.46
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_C724BE14_C808_2D3D_41DB_70C88ED46A91",
   "pitch": 9.25,
   "yaw": 3.81,
   "hfov": 13.41,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_B9767727_AB69_FDDF_41E2_6559CC9739E2, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_B925F762_AB69_FC51_41E4_BAEF638334D5",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.25,
   "hfov": 13.41
  }
 ]
},
{
 "id": "htmlText_BBFF1DE1_AB69_2C50_41D2_F9EFB42B455F",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Barang yang di jual:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Terima Pesanan/Ready only:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">rentan harga (nego):</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">CP: </SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "textShadowColor": "#000000",
 "fontFamily": "Montserrat",
 "fontWeight": "bold",
 "data": {
  "name": "text 1"
 },
 "id": "Label_0C5F13A8_3BA0_A6FF_41BD_E3D21CFCE151",
 "left": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "textShadowVerticalLength": 0,
 "borderRadius": 0,
 "text": "Dewi VTour",
 "verticalAlign": "top",
 "minWidth": 1,
 "maxWidth": 9000,
 "top": 9,
 "class": "Label",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": "69.072%",
 "propagateClick": false,
 "maxHeight": 9000,
 "textShadowHorizontalLength": 0,
 "fontSize": "5vh",
 "horizontalAlign": "left",
 "textShadowOpacity": 1,
 "width": "100%",
 "textShadowBlurRadius": 10,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "paddingTop": 0,
 "textDecoration": "none"
},
{
 "textShadowColor": "#000000",
 "fontFamily": "Montserrat",
 "fontWeight": "normal",
 "data": {
  "name": "text 2"
 },
 "id": "Label_0C5F23A8_3BA0_A6FF_419F_468451E37918",
 "left": 3,
 "minHeight": 1,
 "width": 236,
 "shadow": false,
 "paddingBottom": 0,
 "textShadowVerticalLength": 0,
 "borderRadius": 0,
 "text": "Desa Wisata Virtual Tour",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "textShadowBlurRadius": 10,
 "propagateClick": false,
 "class": "Label",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": 5,
 "height": 32,
 "textShadowHorizontalLength": 0,
 "fontSize": 18,
 "horizontalAlign": "left",
 "textShadowOpacity": 1,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "paddingTop": 0,
 "textDecoration": "none"
},
{
 "fontFamily": "Montserrat",
 "fontWeight": "normal",
 "data": {
  "name": "Label Company Name"
 },
 "id": "Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
 "left": 76,
 "minHeight": 1,
 "width": 450,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "text": "Kampung Kajoetangan",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "class": "Label",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 60,
 "top": "0%",
 "fontSize": 31,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "paddingTop": 0,
 "textDecoration": "none"
},
{
 "id": "Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
 "left": 30,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 40,
 "top": "0%",
 "class": "Image",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "0%",
 "propagateClick": false,
 "maxHeight": 30,
 "width": "5%",
 "url": "skin/Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50.png",
 "horizontalAlign": "center",
 "data": {
  "name": "logo"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "children": [
  "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
  "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
  "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
  "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
  "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
  "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
  "this.Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89"
 ],
 "id": "Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1",
 "layout": "horizontal",
 "minHeight": 1,
 "width": 1199,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "paddingRight": 15,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 60,
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "gap": 3,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set container"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "iconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52.png",
 "id": "IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "click": "this.showPopupImage(this.ImageResource_84B3D86B_A5B5_9EA1_4187_97FB0545BA1D, null, '90%', '90%', this.FadeInEffect_84B2386B_A5B5_9EA1_41E0_65AA0E7005CB, this.FadeOutEffect_84B2086B_A5B5_9EA1_41CF_12E331F8DF6F, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, null, null, false)",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Info"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8.png",
 "id": "IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Thumblist"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA.png",
 "id": "IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Photoalbum"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0.png",
 "id": "IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "click": "this.openLink('https://goo.gl/maps/aN6XeMFv9oT6cKAB9', '_blank')",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Location"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8_pressed.png",
 "iconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8.png",
 "id": "IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Realtor"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_B6B950D0_A091_D927_41BE_C8B55F476B18.png",
 "id": "IconButton_B6B950D0_A091_D927_41BE_C8B55F476B18",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_B6B950D0_A091_D927_41BE_C8B55F476B18_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Floorplan"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_B74E92BD_A090_3959_41E2_B32C2E223160.png",
 "id": "IconButton_B74E92BD_A090_3959_41E2_B32C2E223160",
 "minHeight": 1,
 "width": 36.8,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_B74E92BD_A090_3959_41E2_B32C2E223160_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 39.2,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Floorplan"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B.png",
 "id": "IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B",
 "minHeight": 1,
 "width": 38.4,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44.8,
 "click": "this.openLink('https://www.instagram.com/dewivtour/', '_blank')",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Floorplan"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93.png",
 "id": "IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93",
 "minHeight": 1,
 "width": 36,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 41.6,
 "click": "this.openLink('https://www.youtube.com/@user-gx1gq7me2z', '_blank')",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Video"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowVerticalLength": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "10%",
 "paddingRight": 0,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "right": "15%",
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "10%",
 "class": "Container",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "bottom": "80%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderSize": 0,
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false
},
{
 "shadowBlurRadius": 25,
 "id": "Container_355D4758_2BA4_E00A_41A8_E3FF6B431431",
 "left": "15%",
 "layout": "absolute",
 "shadowColor": "#000000",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "visible",
 "children": [
  "this.Image_355D5758_2BA4_E00A_41B0_1C5E16AF2816",
  "this.HTMLText_355D6758_2BA4_E00A_41A0_CFBDC7A17370",
  "this.Image_355D7758_2BA4_E00A_41A9_39DED51E58A9"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowVerticalLength": 0,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "10%",
 "paddingRight": 0,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "scroll",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowVerticalLength": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "10%",
 "paddingRight": 0,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "right": "15%",
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "10%",
 "class": "Container",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "bottom": "80%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderSize": 0,
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "layout": "absolute",
 "shadowColor": "#000000",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "visible",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowVerticalLength": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "10%",
 "paddingRight": 0,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "layout": "vertical",
 "shadowColor": "#000000",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "visible",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowVerticalLength": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "10%",
 "paddingRight": 0,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowVerticalLength": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "10%",
 "paddingRight": 0,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "right": "15%",
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "10%",
 "class": "Container",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "bottom": "80%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderSize": 0,
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C74DAE5C_C808_2D2D_41C1_559D7BCAFDA8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD97D93F_A086_087A_41BD_55608A05F8C5_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C74D5E5D_C808_2D2F_41D8_8D405A6CD4FA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD961D48_A086_0805_41C0_642843219354_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C74F4E59_C808_2D37_4187_83BDD0AEC865",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD961D48_A086_0805_41C0_642843219354_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C74CFE5A_C808_2D35_41C5_715037378432",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD961D48_A086_0805_41C0_642843219354_1_HS_3_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C74C1E5B_C808_2D2B_41C7_367B419DBBFC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7212E24_C808_2D1D_41D0_CCF921B0F16F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B4CE7971_A155_ECC8_41A2_41AD89532787",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD95CCF9_A086_0806_41C5_95808BCB8200_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C73EAE25_C808_2D1F_41E2_B1B8AB727CE0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C73AEE32_C808_2D75_41DC_11142B0F7B8E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD95D3A5_A086_180E_41C3_2E6F59E3F29D_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C73A8E32_C808_2D75_41C4_65FCC5D76CF9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C73F9E2C_C808_2D6D_41E7_360C3A1CD17D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_1_HS_1_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C73F0E2C_C808_2D6D_41DE_560C87EE46D9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_0_HS_2_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B577A845_A173_6CC8_41D6_7747F863470B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD95EFB7_A086_080A_41BA_412178B32C76_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C73C9E2E_C808_2D6D_41E0_708F522DA7C3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9691721A_BF25_DF81_41C4_442816645A7E_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C74B8E61_C808_2D17_41D1_A3D7FAC68FB9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD97C591_A086_1806_41DB_579C203C7F01_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C74AAE5E_C808_2D2D_41E2_A03D4BF5F701",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD97C591_A086_1806_41DB_579C203C7F01_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_829942BD_A5BC_B3A0_41DF_CB83CE0BE95C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD97C591_A086_1806_41DB_579C203C7F01_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C74A2E60_C808_2D15_41D1_4E1825799D99",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_2B42F770_2685_1484_419F_5BC519860A98_1_HS_0_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0F115AD3_2BBD_601E_41BA_772CF288974B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_2B42F770_2685_1484_419F_5BC519860A98_1_HS_1_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0F113AD4_2BBD_601A_4194_045C5F423AE4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C723AE1D_C808_2D2F_41D4_0CFA69B6234F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B7985548_A156_A4C7_41D4_9B0A5910BB7B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD977A14_A086_080E_41D5_7F553B9ED13B_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7232E1F_C808_2D2B_41E3_13B69F72FF05",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_28C197E4_2685_138C_41B9_955DB35098B4_1_HS_0_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0FEFBAD1_2BBD_601A_41BF_452E655BAC00",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_28C197E4_2685_138C_41B9_955DB35098B4_1_HS_1_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0F101AD2_2BBD_601E_41B0_8DE82062DE57",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7337E52_C808_2D35_41C9_7E6F61BB7DEE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_829BE2B6_A5BC_B3A3_41DE_EC624CF46120",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD965DE4_A086_080D_41BE_FBB811476DA6_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0FEB2AC7_2BBD_6006_41B5_925AC7F6BAAC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C734DE45_C808_2D1F_41DF_FD3A7AD8A39B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_829F22B2_A5BC_B3A3_41E2_8BA6D9207126",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7343E47_C808_2D1B_41DF_E7B9C9B6DB7A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD969752_A086_180A_41DD_83A932DB00B6_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C735CE48_C808_2D15_41CE_5A0AC87BDEDC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0F119AD4_2BBD_601A_41BF_BC59E8442859",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_2B5BC7BC_2685_73FC_41B6_E691216C6063_1_HS_1_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0F121AD5_2BBD_601A_41A1_8F69B34DF151",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7390E40_C808_2D15_41DA_C2024FA5FC11",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD9693D4_A086_380E_41BB_58D96C8F060C_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7369E41_C808_2D17_41D6_10284628F8D6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_1_HS_0_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7393E3C_C808_2D6D_41E6_F884E9BB9806",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD957FB8_A086_0806_41D6_27DF784A26C2_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C736CE3C_C808_2D6D_41E6_0FF4390560EC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_829B22B7_A5BC_B3A0_41C1_3A4B9AB21C6B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_829C32B9_A5BC_B3A0_41C0_8C25078A51FB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD9697C0_A086_3805_41E3_36CF68C7DC8B_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7318E55_C808_2D3E_41D7_846C7813691E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD955D6B_A086_081A_41D8_FA70027249BF_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7363E42_C808_2D15_41B8_DDC91F97015F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD955D6B_A086_081A_41D8_FA70027249BF_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C737DE43_C808_2D1B_41E5_F26B2A816166",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD955D6B_A086_081A_41D8_FA70027249BF_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7374E44_C808_2D1D_41CB_78B8E11A6B47",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD96F0BE_A086_787A_41C0_992129A072C6_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7354E49_C808_2D17_41D8_6C2E68DF970A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD96F0BE_A086_787A_41C0_992129A072C6_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7350E49_C808_2D16_41D0_6B0EB294869C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B4CE8971_A155_ECC8_41BB_3FE22527881B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0FFA2AAE_2BBD_6006_41BA_D3FEEDEB0BAE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7200E22_C808_2D15_419C_CB5B8CF8E257",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7219E23_C808_2D1B_41E8_D58025A36447",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD95E3B0_A086_7806_41DF_2131FF80F8A6_1_HS_4_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0FFBCAB0_2BBD_601A_41B4_C8414142AF9D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_1_HS_1_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_829B72BA_A5BC_B3A0_41D7_08752CBC5144",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C74EDE57_C808_2D3B_41E3_18635FEEEED3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C74E2E58_C808_2D35_41C3_97C7BE6C13FB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD9631BB_A086_187A_41E2_E170654FAAEF_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C74FAE59_C808_2D37_41C6_35D03700AB6B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8292C2AD_A5BC_B3A1_41D3_9AFDD22EC6D4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_1_HS_3_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8291E2AF_A5BC_B3A1_41C9_81BD242E998B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_1_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7387E39_C808_2D77_41C4_9E46BB6C2B5F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_1_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C739EE3A_C808_2D75_41DF_1B9FA437E241",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD956613_A086_F80A_41BC_1C78232EB052_1_HS_6_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7398E3B_C808_2D6B_41CD_EAAD694B0080",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_1_HS_1_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C73E2E27_C808_2D1B_41D3_EC12717116DA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_1_HS_2_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C73FDE27_C808_2D1B_41E8_24060D1F6992",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C73F9E28_C808_2D15_41D6_E1C9DB8F9C25",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_1_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C73E6E2A_C808_2D15_41D2_8495DFF4D3AB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD95E63F_A086_187A_41D6_1A665265E1EA_1_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C73E1E2B_C808_2D6B_41D9_0CBFA18C9AC8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_0_HS_1_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B5707846_A173_6CC8_41DD_C8999B94A85A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C73DDE30_C808_2D75_41D2_56C6BB7B9C33",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD95A95A_A086_083A_41E1_B85865D0A6B0_1_HS_3_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C73D5E31_C808_2D77_41E2_6CB492C1AA93",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7336E4E_C808_2D2D_41E5_4963D98C881C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_829CE2B5_A5BC_B3A1_41E4_502F4EF014D5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C730DE4F_C808_2D2B_41C9_282C7335CAE5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD9653E8_A086_1806_41B9_35A47326EDA1_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7307E50_C808_2D35_41D4_DC5BB661F40F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7329E4A_C808_2D15_41DE_DF979F652CDC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_829DA2B4_A5BC_B3A7_41A6_04BAAF4FF7DB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD964AA0_A086_0806_41E1_8D6940FB42A5_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C733EE4C_C808_2D2E_41CF_4678B69A5232",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_1_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C73A0E34_C808_2D7D_41CE_C76166E88716",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_1_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C73B8E35_C808_2D7F_41DF_EC01324C7A87",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD958D1E_A086_083A_41D2_59D8CD25D5F3_1_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C73B2E36_C808_2D7D_41E2_A88C7D6FEDAB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C739CE3E_C808_2D6D_41E8_436355DC4F00",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD9699C4_A086_080E_41DD_D3820826DAE8_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7398E3F_C808_2D6B_41E7_272CCDFFABDB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7270E11_C808_2D37_41E6_C8DB2F0EE5F4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_AD7EA043_A086_180A_41D5_E2370CE122CC_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C724BE14_C808_2D3D_41DB_70C88ED46A91",
 "frameDuration": 41
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 1"
 },
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": 116,
 "popUpFontColor": "#F0623E",
 "playList": "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist",
 "shadow": false,
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "popUpShadowSpread": 1,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "class": "DropDown",
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 15,
 "popUpGap": 2,
 "popUpBackgroundColor": "#F7931E",
 "backgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "label": "RECEPTION",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "paddingRight": 15,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 2"
 },
 "height": "100%",
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 5,
 "arrowColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": 96,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist",
 "shadow": false,
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "popUpShadowSpread": 1,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "class": "DropDown",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "borderSize": 0,
 "paddingLeft": 15,
 "popUpGap": 2,
 "popUpBackgroundColor": "#F7931E",
 "paddingRight": 15,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "label": "ROOMS",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "backgroundColorRatios": [
  0
 ],
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 3"
 },
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": 114,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist",
 "shadow": false,
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "popUpShadowSpread": 1,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "class": "DropDown",
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 15,
 "popUpGap": 2,
 "popUpBackgroundColor": "#F7931E",
 "backgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "label": "AMENITIES",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "paddingRight": 15,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 4"
 },
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": 130,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist",
 "shadow": false,
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "popUpShadowSpread": 1,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "class": "DropDown",
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 15,
 "popUpGap": 2,
 "popUpBackgroundColor": "#F7931E",
 "backgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "label": "SPORTS AREA",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "paddingRight": 15,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 5"
 },
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": 127.2,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist",
 "shadow": false,
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "minWidth": 1,
 "popUpShadowSpread": 1,
 "pressedBackgroundColor": [
  "#0033CC"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#3E5CB8"
 ],
 "class": "DropDown",
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 15,
 "popUpGap": 2,
 "popUpBackgroundColor": "#3E5CB8",
 "backgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#0033CC",
 "label": "PRODUKSI",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#3E5CB8",
 "paddingRight": 15,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 6"
 },
 "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": 125,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist",
 "shadow": false,
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "popUpShadowSpread": 1,
 "pressedBackgroundColor": [
  "#0033CC"
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "class": "DropDown",
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 8,
 "popUpGap": 2,
 "popUpBackgroundColor": "#3E5CB8",
 "backgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#0033CC",
 "label": "SPOT FOTO",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#3E5CB8",
 "paddingRight": 15,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "textDecoration": "none",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "popUpShadowBlurRadius": 6
},
{
 "pressedIconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings"
 },
 "iconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89.png",
 "id": "Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89",
 "fontStyle": "normal",
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "iconWidth": 17,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 17,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#0033CC"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "class": "Button",
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "backgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "fontSize": 12,
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "click": "if(!this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4.get('visible')){ this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, false, 0, null, null, false) }",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#3E5CB8"
 ]
},
{
 "height": "100%",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "85%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
 "layout": "absolute",
 "minHeight": 1,
 "width": 8,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "orange line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 460,
 "propagateClick": false,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 50,
 "width": "50%",
 "paddingRight": 50,
 "scrollBarColor": "#0069A3",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarOpacity": 0.51
},
{
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "25%",
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "id": "Image_355D5758_2BA4_E00A_41B0_1C5E16AF2816",
 "left": "34.99%",
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "right": "47.03%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 512,
 "url": "skin/Image_355D5758_2BA4_E00A_41B0_1C5E16AF2816.png",
 "top": "30.94%",
 "class": "Image",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": "21.638%",
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_355D8758_2BA4_E00A_41B5_C70E2F4F8D51, false, 0, null, null, false); this.playGlobalAudio(this.audio_350CE34E_3B47_3FBB_41BF_4B7FEE3E28FD)",
 "maxHeight": 512,
 "horizontalAlign": "center",
 "data": {
  "name": "Image7656"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "id": "HTMLText_355D6758_2BA4_E00A_41A0_CFBDC7A17370",
 "left": "27.16%",
 "minHeight": 1,
 "shadow": false,
 "scrollBarWidth": 5,
 "paddingBottom": 20,
 "borderRadius": 0,
 "right": "22.83%",
 "backgroundOpacity": 0,
 "minWidth": 1,
 "top": "5.47%",
 "class": "HTMLText",
 "paddingRight": 10,
 "borderSize": 0,
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "height": "24.678%",
 "scrollBarColor": "#FFFFFF",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:7.44vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.58vh;font-family:'Montserrat';\"><B>Pilih Bahasa Audio</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.86vh;font-family:'Montserrat';\"><B>Chose audio language</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:2.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "id": "Image_355D7758_2BA4_E00A_41A9_39DED51E58A9",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "right": "30.97%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 512,
 "top": "31.09%",
 "class": "Image",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "17.588%",
 "height": "20.923%",
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_355D8758_2BA4_E00A_41B5_C70E2F4F8D51, false, 0, null, null, false); this.playGlobalAudio(this.audio_38D09C28_3681_80B8_4190_F1E907A5069C)",
 "maxHeight": 512,
 "url": "skin/Image_355D7758_2BA4_E00A_41A9_39DED51E58A9.png",
 "horizontalAlign": "center",
 "data": {
  "name": "Image8713"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "class": "WebFrame",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 },
 "paddingTop": 0,
 "insetBorder": false,
 "height": "100%"
},
{
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "25%",
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "progressBorderSize": 0,
 "id": "MapViewer",
 "toolTipPaddingRight": 6,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "minHeight": 1,
 "toolTipPaddingTop": 4,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 0,
 "borderSize": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "10px",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 4,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "ViewerArea",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Floor Plan"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "layout": "absolute",
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "width": "100%",
 "height": 140,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "height": "100%",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container photo"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "55%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
 "layout": "absolute",
 "minHeight": 1,
 "width": 8,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "orange line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 460,
 "propagateClick": false,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 60,
 "width": "45%",
 "paddingRight": 60,
 "scrollBarColor": "#0069A3",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarOpacity": 0.51
},
{
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "25%",
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 2000,
 "top": "0%",
 "class": "Image",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "height": "100%",
 "propagateClick": false,
 "maxHeight": 1000,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "horizontalAlign": "center",
 "data": {
  "name": "photo"
 },
 "paddingTop": 0,
 "scaleMode": "fit_outside"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "layout": "horizontal",
 "minHeight": 0,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "class": "Container",
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "height": "100%",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "layout": "vertical",
 "minHeight": 520,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 30,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 100,
 "propagateClick": false,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarColor": "#E73B2C",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.79
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "layout": "horizontal",
 "minHeight": 1,
 "width": 370,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "class": "Container",
 "height": 40,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "borderRadius": 0,
 "right": 20,
 "verticalAlign": "top",
 "minWidth": 50,
 "maxWidth": 60,
 "top": 20,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "mode": "push",
 "height": "36.14%",
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "progressBorderSize": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipPaddingRight": 6,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "minHeight": 1,
 "toolTipPaddingTop": 4,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 0,
 "borderSize": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "10px",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 4,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "ViewerArea",
 "toolTipFontFamily": "Arial",
 "top": "0%",
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "maxWidth": 60,
 "top": "20%",
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "20%",
 "mode": "push",
 "propagateClick": false,
 "maxHeight": 60,
 "width": "14.22%",
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton <"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "borderRadius": 0,
 "right": 10,
 "verticalAlign": "middle",
 "minWidth": 50,
 "maxWidth": 60,
 "top": "20%",
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "20%",
 "mode": "push",
 "propagateClick": false,
 "maxHeight": 60,
 "width": "14.22%",
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton >"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "borderRadius": 0,
 "right": 20,
 "verticalAlign": "top",
 "minWidth": 50,
 "maxWidth": 60,
 "top": 20,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "10%",
 "mode": "push",
 "height": "10%",
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "maxWidth": 2000,
 "top": "0%",
 "class": "Image",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "height": "100%",
 "propagateClick": false,
 "maxHeight": 1000,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "horizontalAlign": "center",
 "data": {
  "name": "Image"
 },
 "paddingTop": 0,
 "scaleMode": "fit_outside"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "layout": "horizontal",
 "minHeight": 0,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "class": "Container",
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "height": "100%",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "layout": "vertical",
 "minHeight": 520,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 30,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 100,
 "propagateClick": false,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarColor": "#E73B2C",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.79
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "layout": "horizontal",
 "minHeight": 1,
 "width": 370,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "class": "Container",
 "height": 40,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#F7931E",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.44vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.15vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.15vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.72vh;font-family:'Montserrat';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Montserrat';\"><B>DONEC FEUGIAT:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.29vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Montserrat';\"><B>LOREM IPSUM:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:2.58vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0
},
{
 "fontFamily": "Montserrat",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Lorem Ipsum"
 },
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "fontStyle": "normal",
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "iconWidth": 32,
 "width": 180,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "bold",
 "backgroundOpacity": 0.8,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": false,
 "class": "Button",
 "height": 50,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "backgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "fontSize": "1.96vh",
 "label": "LOREM IPSUM",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#F7931E"
 ]
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 0,
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 0,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "45%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.87vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.15vh;font-family:'Montserrat';\"><B>Kampung Wisata </B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.15vh;font-family:'Montserrat';\"><B>Kesenian</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText18899"
 },
 "paddingTop": 0
},
{
 "height": "80%",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "layout": "horizontal",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "- content"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "maxWidth": 200,
 "propagateClick": false,
 "class": "Image",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "25%",
 "height": "100%",
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "maxHeight": 200,
 "horizontalAlign": "left",
 "data": {
  "name": "agent photo"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "class": "HTMLText",
 "paddingRight": 10,
 "scrollBarColor": "#F7931E",
 "paddingLeft": 10,
 "width": "75%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.86vh;font-family:'Montserrat';\"><B>Bapak Agus</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.29vh;font-family:'Montserrat';\">PENGELOLA DESA</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText19460"
 },
 "paddingTop": 0
}],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.59,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "mouseWheelEnabled": true,
 "scripts": {
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "unregisterKey": function(key){  delete window[key]; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getKey": function(key){  return window[key]; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "width": "100%",
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
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
