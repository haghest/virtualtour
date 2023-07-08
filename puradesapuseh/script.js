(function(){
    var script = {
 "borderSize": 0,
 "children": [
  "this.MainViewer",
  "this.Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_14F80305_1BED_F1EE_4193_B39F49D6928C",
  "this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06D48689_2C0F_E3CE_41AC_C32EFC463518",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "verticalAlign": "top",
 "id": "rootPlayer",
 "gap": 10,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": "100%",
 "shadow": false,
 "defaultVRPointer": "laser",
 "downloadEnabled": false,
 "scripts": {
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getKey": function(key){  return window[key]; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "registerKey": function(key, value){  window[key] = value; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "unregisterKey": function(key){  delete window[key]; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "existsKey": function(key){  return key in window; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); }
 },
 "scrollBarMargin": 2,
 "class": "Player",
 "layout": "absolute",
 "horizontalAlign": "left",
 "overflow": "visible",
 "start": "this.playAudioList([this.audio_0FAF81E6_2C02_6145_41A1_95C3C55BEF10]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "scrollBarWidth": 10,
 "backgroundPreloadEnabled": true,
 "borderRadius": 0,
 "desktopMipmappingEnabled": false,
 "paddingRight": 0,
 "definitions": [{
 "class": "FadeOutEffect",
 "easing": "quad_in",
 "duration": 200,
 "id": "effect_7A652532_5098_6E2E_41AB_7AEE2555397F"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_1B49F4BD_2C07_E7C7_41AE_38AE9CC985D5",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 97.29,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_21A03FED_2A88_C442_41A9_0C2301298780_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "buttonCardboardView": [
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "id": "MainViewerPanoramaPlayer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration"
},
{
 "partial": false,
 "label": "area masak",
 "id": "panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_24B77C0F_2A98_4BDE_41B4_264CFC3DA11E",
  "this.overlay_3FFB6415_2A8B_BBCD_41B8_030DBF5CDE60",
  "this.overlay_3F31CBBD_2A88_4C3D_41BA_9BBE19939CD6",
  "this.popup_3C2098DB_2A88_CC46_41BF_39FB27726913",
  "this.popup_3DFCC23E_2A8F_FC3E_41C0_561180486585"
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20948DAA_2A88_44C6_41B6_795CC44C0821",
   "yaw": -82.71,
   "backwardYaw": -152.17,
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_t.jpg",
 "hfovMin": "135%"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "partial": false,
 "label": "area pura persembahyangan 5",
 "id": "panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_2486EFA0_2A98_44C2_41C2_E607113C2CF2",
  "this.overlay_24CCCA7D_2A98_CC42_4180_B649891CBC53",
  "this.overlay_3FEB6F4D_2A88_4442_41C3_5DF3A32FB0EC",
  "this.overlay_3F9A27A5_2A88_C4CD_41C1_955F88957366",
  "this.overlay_3C2F5A79_2A88_4C42_41B9_BA950908EF16",
  "this.overlay_3E7B09A0_2A88_4CC2_41BC_DF2FB8968737",
  "this.overlay_3F38F8C2_2A88_4C46_41B7_D68061425814",
  "this.overlay_3C9E9B0C_2A8B_CDC2_419A_C2CD1BA9F877",
  "this.popup_3DDB54DA_2A98_4446_4167_13A9833568FA",
  "this.popup_3DDA9013_2A98_7BC6_4178_95D963FFFB09",
  "this.popup_3DF603FA_2A98_DC46_418D_14ACB04E42F0",
  "this.popup_3DE4D923_2A98_4DC6_41A9_11201FE64CE3",
  "this.popup_3C06029F_2A88_5CFD_41BC_76B6D161EA56",
  "this.popup_3DC79F44_2A88_4443_419D_618A735C6E26"
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20959DCB_2A89_C445_41A0_18E24388B9F8",
   "yaw": 165.14,
   "backwardYaw": -174.96,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39",
   "yaw": -113.51,
   "backwardYaw": -172.79,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878",
   "yaw": -158.89,
   "backwardYaw": -23.89,
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_t.jpg",
 "hfovMin": "135%"
},
{
 "partial": false,
 "label": "halaman area pura 1",
 "id": "panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_27E50307_2A88_FDCE_4182_C49205288CC6",
  "this.overlay_27EF3829_2A88_4BC2_41C2_BD38E5143888",
  "this.overlay_3FB755E8_2A88_C442_41B1_E019F7E61075",
  "this.popup_3C972901_2AB8_CDC2_4191_817870F34296"
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2097E957_2A88_4C4D_414F_340791750382",
   "yaw": 5.29,
   "backwardYaw": 170.29,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39",
   "yaw": -173.15,
   "backwardYaw": 104.74,
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_t.jpg",
 "hfovMin": "135%"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_1C097319_2C07_E2CF_41C1_D926C14BD8B5",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 171.08,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_3232DDBD_2A89_C4C2_41C4_7949E770BE57",
 "levels": [
  {
   "url": "media/popup_3223A4A0_2A88_44C2_41C0_00DC83AB0FD2_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3223A4A0_2A88_44C2_41C0_00DC83AB0FD2_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3223A4A0_2A88_44C2_41C0_00DC83AB0FD2_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3223A4A0_2A88_44C2_41C0_00DC83AB0FD2_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "label": "Bale Agung",
 "id": "photo_0E6607D0_2BF8_4442_419C_54F73AF38132",
 "width": 4032,
 "class": "Photo",
 "duration": 5000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_0E6607D0_2BF8_4442_419C_54F73AF38132.JPG",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_0E6607D0_2BF8_4442_419C_54F73AF38132_t.jpg",
 "height": 3024
},
{
 "class": "ImageResource",
 "id": "ImageResource_32339DBC_2A89_C4C2_41C0_572E8926EBAC",
 "levels": [
  {
   "url": "media/popup_3D53B1A5_2A88_DCC2_41C3_4E39DBFD5198_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3D53B1A5_2A88_DCC2_41C3_4E39DBFD5198_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3D53B1A5_2A88_DCC2_41C3_4E39DBFD5198_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3D53B1A5_2A88_DCC2_41C3_4E39DBFD5198_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3DCE5DB0_2A88_44C2_41B7_8C7CFF433737",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.6,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3DCE5DB0_2A88_44C2_41B7_8C7CFF433737_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 6.33,
 "hideDuration": 500,
 "yaw": -107.38,
 "hideEasing": "cubic_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3C661015_2A98_7BC2_41C0_37A1F7E2DC38",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.29,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3C661015_2A98_7BC2_41C0_37A1F7E2DC38_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 16.63,
 "hideDuration": 500,
 "yaw": 157.21,
 "hideEasing": "cubic_out"
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3DEAA6EF_2A98_445E_41C1_BB7C27C5E87B",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.5,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3DEAA6EF_2A98_445E_41C1_BB7C27C5E87B_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 10.79,
 "hideDuration": 500,
 "yaw": 37.1,
 "hideEasing": "cubic_out"
},
{
 "label": "2023_06_20_13_01_IMG_7803",
 "id": "photo_0E0A8BA5_2BF8_4CC2_41C0_1B0121D65DB0",
 "width": 3024,
 "class": "Photo",
 "duration": 5000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_0E0A8BA5_2BF8_4CC2_41C0_1B0121D65DB0.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_0E0A8BA5_2BF8_4CC2_41C0_1B0121D65DB0_t.jpg",
 "height": 4032
},
{
 "class": "ImageResource",
 "id": "ImageResource_32309DBB_2A89_C4C6_419F_3E49634C1ECA",
 "levels": [
  {
   "url": "media/popup_3DCE5DB0_2A88_44C2_41B7_8C7CFF433737_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3DCE5DB0_2A88_44C2_41B7_8C7CFF433737_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3DCE5DB0_2A88_44C2_41B7_8C7CFF433737_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3DCE5DB0_2A88_44C2_41B7_8C7CFF433737_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3C8DD070_2A99_BC42_41B7_7BC44113F443",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.5,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3C8DD070_2A99_BC42_41B7_7BC44113F443_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 10.79,
 "hideDuration": 500,
 "yaw": 59.06,
 "hideEasing": "cubic_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_1CEF0368_2C07_E14D_4197_9F5DDC093558",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -9.78,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_32239DCB_2A89_C446_41C0_214506A0C4F1",
 "levels": [
  {
   "url": "media/popup_3DB92809_2A99_CBC2_41B9_146965A4433F_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3DB92809_2A99_CBC2_41B9_146965A4433F_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3DB92809_2A99_CBC2_41B9_146965A4433F_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3DB92809_2A99_CBC2_41B9_146965A4433F_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "partial": false,
 "label": "area menaruh barang\" pura",
 "id": "panorama_20959DCB_2A89_C445_41A0_18E24388B9F8",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_24AAD31D_2A9B_BDFD_41B1_51306F4F5A5D",
  "this.overlay_24E5C2C8_2A98_5C42_418A_2C95FCEF63A1",
  "this.overlay_3F35D206_2A89_DFCE_4160_203E47A0BA5C",
  "this.overlay_3E5B43AA_2A89_BCC7_41C2_4A5F79B3828A",
  "this.popup_3C22FE0D_2A98_47C2_41B9_216F18679DDF",
  "this.popup_3C008645_2B79_C442_418B_7091AD081956"
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552",
   "yaw": -174.96,
   "backwardYaw": 165.14,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20A713E2_2A88_5C46_4196_1A2305C176EA",
   "yaw": 4.14,
   "backwardYaw": 60.4,
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_t.jpg",
 "hfovMin": "135%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_322EEDC0_2A89_C442_4198_231154046602",
 "levels": [
  {
   "url": "media/popup_3D75EC05_2A88_4BCD_41B1_DC517A3F9137_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3D75EC05_2A88_4BCD_41B1_DC517A3F9137_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3D75EC05_2A88_4BCD_41B1_DC517A3F9137_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3D75EC05_2A88_4BCD_41B1_DC517A3F9137_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_1CF9C342_2C07_E2BD_41B0_AE26117ECA58",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 87.68,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_321CADCF_2A89_C45E_419E_BFEBA4E033D0",
 "levels": [
  {
   "url": "media/popup_3DDA9013_2A98_7BC6_4178_95D963FFFB09_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3DDA9013_2A98_7BC6_4178_95D963FFFB09_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3DDA9013_2A98_7BC6_4178_95D963FFFB09_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3DDA9013_2A98_7BC6_4178_95D963FFFB09_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_32A52746_2B78_C44E_41BC_9B00008FED9A",
 "levels": [
  {
   "url": "media/popup_3C008645_2B79_C442_418B_7091AD081956_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3C008645_2B79_C442_418B_7091AD081956_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3C008645_2B79_C442_418B_7091AD081956_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3C008645_2B79_C442_418B_7091AD081956_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3CC8DA98_2ABF_CCC3_41A1_E851C646BCA5",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.63,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3CC8DA98_2ABF_CCC3_41A1_E851C646BCA5_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 3.59,
 "hideDuration": 500,
 "yaw": 124.95,
 "hideEasing": "cubic_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_1CD5537D_2C07_E147_41C0_8280011383E9",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -14.86,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3C788A02_2AB8_4FC6_41A1_09F5E599D512",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 7.24,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3C788A02_2AB8_4FC6_41A1_09F5E599D512_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 5.78,
 "hideDuration": 500,
 "yaw": -140.67,
 "hideEasing": "cubic_out"
},
{
 "partial": false,
 "label": "area pura persembahyangan 1",
 "id": "panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_27FC72B0_2A88_5CC2_41B0_5042BAF52639",
  "this.overlay_27462998_2A8B_CCC2_4199_1321DC3996C9",
  "this.overlay_241654F7_2A97_C44E_41C2_3FF0925700A8",
  "this.overlay_3E5FD914_2A88_4DC3_41C2_8AB8EE2028E8",
  "this.overlay_3FC744DD_2A88_4442_41BB_027E8ABA3CC5",
  "this.overlay_3F38C1ED_2A88_5C42_4192_5FA81E7B76A8",
  "this.overlay_3C8D489A_2A88_CCC6_41A3_67D6FD53B66D",
  "this.popup_3223A4A0_2A88_44C2_41C0_00DC83AB0FD2",
  "this.popup_3D53B1A5_2A88_DCC2_41C3_4E39DBFD5198",
  "this.popup_3DCE5DB0_2A88_44C2_41B7_8C7CFF433737",
  "this.popup_3C156708_2A8B_C5C2_41C3_25D18D458032"
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20948DAA_2A88_44C6_41B6_795CC44C0821",
   "yaw": -167.23,
   "backwardYaw": -8.92,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878",
   "yaw": 6.52,
   "backwardYaw": 140.91,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20A713E2_2A88_5C46_4196_1A2305C176EA",
   "yaw": 98.03,
   "backwardYaw": -92.32,
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_t.jpg",
 "hfovMin": "135%"
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_0DA50013_2C7F_9EC3_41A1_19AD20D62EB8",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.61,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_0DA50013_2C7F_9EC3_41A1_19AD20D62EB8_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 5.3,
 "hideDuration": 500,
 "yaw": -143.07,
 "hideEasing": "cubic_out"
},
{
 "class": "ImageResource",
 "id": "ImageResource_0A63A96B_2C02_6143_41B2_478831DB4347",
 "levels": [
  {
   "url": "media/popup_0DA50013_2C7F_9EC3_41A1_19AD20D62EB8_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_0DA50013_2C7F_9EC3_41A1_19AD20D62EB8_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_0DA50013_2C7F_9EC3_41A1_19AD20D62EB8_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_0DA50013_2C7F_9EC3_41A1_19AD20D62EB8_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "partial": false,
 "label": "area pura persembahyangan 3",
 "id": "panorama_20948DAA_2A88_44C6_41B6_795CC44C0821",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_27401FA7_2A98_44CE_41BA_310CDA22FB64",
  "this.overlay_24D9E8A2_2A98_CCC6_41A0_10278418B640",
  "this.overlay_24266524_2A9F_C5C2_41C2_6F943F021E4C",
  "this.overlay_3FF95C59_2A88_4442_41BE_48D4923554C7",
  "this.overlay_3F1BC428_2A88_7BC3_41AF_955F2621D2CE",
  "this.overlay_3F418409_2A88_5BC5_41BA_13A1F991ADF6",
  "this.popup_3221838A_2A98_5CC6_41B3_CEE5C5ABC37D",
  "this.popup_3C8DD070_2A99_BC42_41B7_7BC44113F443",
  "this.popup_3DC2301A_2A98_BBC6_41AB_28F905A33EFB",
  "this.overlay_3C23CE9C_2A98_44C2_41AB_1A7D8C2A2BF3",
  "this.popup_3C661015_2A98_7BC2_41C0_37A1F7E2DC38",
  "this.overlay_3DD111D4_2B78_BC43_41C5_59D46EB17735",
  "this.popup_0DA50013_2C7F_9EC3_41A1_19AD20D62EB8"
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20A785B6_2A89_C4CF_4185_464B122500CE",
   "yaw": 88.47,
   "backwardYaw": -58.89,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747",
   "yaw": -152.17,
   "backwardYaw": -82.71,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A",
   "yaw": -8.92,
   "backwardYaw": -167.23,
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_t.jpg",
 "hfovMin": "135%"
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3C05B2FA_2A98_FC46_41BE_226EF3DD8C47",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.5,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3C05B2FA_2A98_FC46_41BE_226EF3DD8C47_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 10.45,
 "hideDuration": 500,
 "yaw": 67.3,
 "hideEasing": "cubic_out"
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3C004530_2A8F_C5C2_41B7_08192C473AC0",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 10.72,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3C004530_2A8F_C5C2_41B7_08192C473AC0_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 8.8,
 "hideDuration": 500,
 "yaw": 35.79,
 "hideEasing": "cubic_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_1CB613C5_2C07_E147_41BE_D6CD3D30EAB6",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -175.86,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_1B7F6469_2C07_E74F_41AD_3CF1034AFF85",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 6.85,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_0FAF81E6_2C02_6145_41A1_95C3C55BEF10.ogg",
  "mp3Url": "media/audio_0FAF81E6_2C02_6145_41A1_95C3C55BEF10.mp3"
 },
 "id": "audio_0FAF81E6_2C02_6145_41A1_95C3C55BEF10",
 "data": {
  "label": "BALINESE RELAXING MUSIC-BALI SPA MUSIC-GAMELAN BALI MEDITATION"
 },
 "autoplay": true
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_2097E957_2A88_4C4D_414F_340791750382_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3CC12876_2A88_4C4E_41A5_F6C8EDB7E92C",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.41,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3CC12876_2A88_4C4E_41A5_F6C8EDB7E92C_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 13.54,
 "hideDuration": 500,
 "yaw": 76.22,
 "hideEasing": "cubic_out"
},
{
 "class": "ImageResource",
 "id": "ImageResource_321B1DD3_2A89_C446_41B9_D87639853DF8",
 "levels": [
  {
   "url": "media/popup_3DC79F44_2A88_4443_419D_618A735C6E26_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3DC79F44_2A88_4443_419D_618A735C6E26_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3DC79F44_2A88_4443_419D_618A735C6E26_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3DC79F44_2A88_4443_419D_618A735C6E26_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3DD47D33_2A9B_C5C6_41A2_980B96A72CAE",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.41,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3DD47D33_2A9B_C5C6_41A2_980B96A72CAE_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 13.54,
 "hideDuration": 500,
 "yaw": 129.76,
 "hideEasing": "cubic_out"
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3C0261F3_2A98_7C45_41B6_885578EF15C2",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.27,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3C0261F3_2A98_7C45_41B6_885578EF15C2_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 16.97,
 "hideDuration": 500,
 "yaw": 149.66,
 "hideEasing": "cubic_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_1CC9C3A4_2C07_E1C5_41BA_74FF1F59D4A6",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -165.36,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_3219DDD2_2A89_C446_41BD_2E802074AC54",
 "levels": [
  {
   "url": "media/popup_3DE4D923_2A98_4DC6_41A9_11201FE64CE3_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3DE4D923_2A98_4DC6_41A9_11201FE64CE3_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3DE4D923_2A98_4DC6_41A9_11201FE64CE3_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3DE4D923_2A98_4DC6_41A9_11201FE64CE3_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_32312DB9_2A89_C4C2_41B2_7079FC0BD028",
 "levels": [
  {
   "url": "media/popup_3C004530_2A8F_C5C2_41B7_08192C473AC0_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3C004530_2A8F_C5C2_41B7_08192C473AC0_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3C004530_2A8F_C5C2_41B7_08192C473AC0_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3C004530_2A8F_C5C2_41B7_08192C473AC0_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3DDA9013_2A98_7BC6_4178_95D963FFFB09",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 6.99,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3DDA9013_2A98_7BC6_4178_95D963FFFB09_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 3.8,
 "hideDuration": 500,
 "yaw": -6.6,
 "hideEasing": "cubic_out"
},
{
 "class": "ImageResource",
 "id": "ImageResource_322A7DC5_2A89_C442_41C3_986B13DCF4D4",
 "levels": [
  {
   "url": "media/popup_3C8DD070_2A99_BC42_41B7_7BC44113F443_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3C8DD070_2A99_BC42_41B7_7BC44113F443_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3C8DD070_2A99_BC42_41B7_7BC44113F443_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3C8DD070_2A99_BC42_41B7_7BC44113F443_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "thumbnailUrl": "media/album_0E63C359_2B88_5C42_41BE_390E8ABBE344_t.png",
 "playList": "this.album_0E63C359_2B88_5C42_41BE_390E8ABBE344_AlbumPlayList",
 "label": "Photo Album Apit Lawa Kiwa",
 "id": "album_0E63C359_2B88_5C42_41BE_390E8ABBE344",
 "class": "PhotoAlbum"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_1B5CD4AC_2C07_E7C5_41C4_F4C6036631FB",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 121.11,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3C156708_2A8B_C5C2_41C3_25D18D458032",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.62,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3C156708_2A8B_C5C2_41C3_25D18D458032_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 4.62,
 "hideDuration": 500,
 "yaw": -152.68,
 "hideEasing": "cubic_out"
},
{
 "class": "ImageResource",
 "id": "ImageResource_3229ADC2_2A89_C446_41B4_8EA306190586",
 "levels": [
  {
   "url": "media/popup_3C0261F3_2A98_7C45_41B6_885578EF15C2_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3C0261F3_2A98_7C45_41B6_885578EF15C2_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3C0261F3_2A98_7C45_41B6_885578EF15C2_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3C0261F3_2A98_7C45_41B6_885578EF15C2_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "label": "Bale Pewedaan",
 "id": "photo_0E69E220_2BF8_5FC3_41BD_2A6EFB737409",
 "width": 4032,
 "class": "Photo",
 "duration": 5000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_0E69E220_2BF8_5FC3_41BD_2A6EFB737409.JPG",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_0E69E220_2BF8_5FC3_41BD_2A6EFB737409_t.jpg",
 "height": 3024
},
{
 "class": "ImageResource",
 "id": "ImageResource_330FEB6A_2AB8_4C46_41A9_550BC9DB33EF",
 "levels": [
  {
   "url": "media/popup_3C788A02_2AB8_4FC6_41A1_09F5E599D512_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3C788A02_2AB8_4FC6_41A1_09F5E599D512_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3C788A02_2AB8_4FC6_41A1_09F5E599D512_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3C788A02_2AB8_4FC6_41A1_09F5E599D512_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_1C8CC44E_2C07_E745_41C4_3C8E4B73E22B",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 66.49,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_1C1AF2DE_2C07_E345_41C3_4A286FCEDE9E",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -174.71,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3DC2301A_2A98_BBC6_41AB_28F905A33EFB",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.3,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3DC2301A_2A98_BBC6_41AB_28F905A33EFB_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 16.28,
 "hideDuration": 500,
 "yaw": 122.55,
 "hideEasing": "cubic_out"
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_1B2D64FD_2C07_E746_41A4_27757DA3179F",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -173.48,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3DE4D923_2A98_4DC6_41A9_11201FE64CE3",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.34,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3DE4D923_2A98_4DC6_41A9_11201FE64CE3_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 15.25,
 "hideDuration": 500,
 "yaw": 110.88,
 "hideEasing": "cubic_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_20A785B6_2A89_C4CF_4185_464B122500CE_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_3224BDC7_2A89_C44E_4198_DCF4A1FF7615",
 "levels": [
  {
   "url": "media/popup_3C661015_2A98_7BC2_41C0_37A1F7E2DC38_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3C661015_2A98_7BC2_41C0_37A1F7E2DC38_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3C661015_2A98_7BC2_41C0_37A1F7E2DC38_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3C661015_2A98_7BC2_41C0_37A1F7E2DC38_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_32237DCC_2A89_C442_41A6_C638D8B893A2",
 "levels": [
  {
   "url": "media/popup_3DC22810_2A98_4BC2_41A9_197C70818C70_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3DC22810_2A98_4BC2_41A9_197C70818C70_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3DC22810_2A98_4BC2_41A9_197C70818C70_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3DC22810_2A98_4BC2_41A9_197C70818C70_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_32261DC8_2A89_C442_41C4_4802362C0019",
 "levels": [
  {
   "url": "media/popup_3DEAA6EF_2A98_445E_41C1_BB7C27C5E87B_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3DEAA6EF_2A98_445E_41C1_BB7C27C5E87B_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3DEAA6EF_2A98_445E_41C1_BB7C27C5E87B_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3DEAA6EF_2A98_445E_41C1_BB7C27C5E87B_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_3300EB69_2AB8_4C42_41A3_524DE1B7539A",
 "levels": [
  {
   "url": "media/popup_3F1CCC86_2AB8_44CF_41AF_83DB53A551F3_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3F1CCC86_2AB8_44CF_41AF_83DB53A551F3_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3F1CCC86_2AB8_44CF_41AF_83DB53A551F3_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3F1CCC86_2AB8_44CF_41AF_83DB53A551F3_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3DF603FA_2A98_DC46_418D_14ACB04E42F0",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.54,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3DF603FA_2A98_DC46_418D_14ACB04E42F0_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 9.08,
 "hideDuration": 500,
 "yaw": 28.52,
 "hideEasing": "cubic_out"
},
{
 "class": "ImageResource",
 "id": "ImageResource_322B1DC4_2A89_C442_417B_8F620D3CAE3A",
 "levels": [
  {
   "url": "media/popup_3DC2301A_2A98_BBC6_41AB_28F905A33EFB_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3DC2301A_2A98_BBC6_41AB_28F905A33EFB_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3DC2301A_2A98_BBC6_41AB_28F905A33EFB_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3DC2301A_2A98_BBC6_41AB_28F905A33EFB_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3DC22810_2A98_4BC2_41A9_197C70818C70",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.65,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3DC22810_2A98_4BC2_41A9_197C70818C70_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 0.15,
 "hideDuration": 500,
 "yaw": -134.49,
 "hideEasing": "cubic_out"
},
{
 "class": "ImageResource",
 "id": "ImageResource_32148DD6_2A89_C44E_4182_0369E60377A9",
 "levels": [
  {
   "url": "media/popup_3DFCC23E_2A8F_FC3E_41C0_561180486585_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3DFCC23E_2A8F_FC3E_41C0_561180486585_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3DFCC23E_2A8F_FC3E_41C0_561180486585_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3DFCC23E_2A8F_FC3E_41C0_561180486585_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "partial": false,
 "label": "halaman depan pura",
 "id": "panorama_21A03FED_2A88_C442_41A9_0C2301298780",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_24BA1BEF_2A88_CC5E_41BF_6A3E6A3D66F3"
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2097E957_2A88_4C4D_414F_340791750382",
   "yaw": -173.45,
   "backwardYaw": -5.23,
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_t.jpg",
 "hfovMin": "135%"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_1CE76355_2C07_E147_41A8_59065B10C340",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -91.53,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3C008645_2B79_C442_418B_7091AD081956",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.3,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3C008645_2B79_C442_418B_7091AD081956_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 16.28,
 "hideDuration": 500,
 "yaw": -30.51,
 "hideEasing": "cubic_out"
},
{
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_3A6A14CD_2C03_E747_41B6_F51C4323F58A.ogg",
  "mp3Url": "media/audio_3A6A14CD_2C03_E747_41B6_F51C4323F58A.mp3"
 },
 "id": "audio_3A6A14CD_2C03_E747_41B6_F51C4323F58A",
 "data": {
  "label": "BALINESE RELAXING MUSIC-BALI SPA MUSIC-GAMELAN BALI MEDITATION"
 },
 "autoplay": true
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3DDB54DA_2A98_4446_4167_13A9833568FA",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.52,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3DDB54DA_2A98_4446_4167_13A9833568FA_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 9.76,
 "hideDuration": 500,
 "yaw": -69.98,
 "hideEasing": "cubic_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_1C1202C5_2C07_E347_41C1_1D3AD85BEF42",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 6.55,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "label": "bale pesanekan",
 "id": "photo_0E4B1E13_2BF8_C7C6_419D_7E64F4C69CFF",
 "width": 4032,
 "class": "Photo",
 "duration": 5000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_0E4B1E13_2BF8_C7C6_419D_7E64F4C69CFF.JPG",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_0E4B1E13_2BF8_C7C6_419D_7E64F4C69CFF_t.jpg",
 "height": 3024
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3C52E597_2AB9_C4CE_4197_097485FCE033",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.55,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3C52E597_2AB9_C4CE_4197_097485FCE033_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 8.73,
 "hideDuration": 500,
 "yaw": -74.09,
 "hideEasing": "cubic_out"
},
{
 "class": "ImageResource",
 "id": "ImageResource_321EFDD1_2A89_C442_41B8_D8F297093722",
 "levels": [
  {
   "url": "media/popup_3C06029F_2A88_5CFD_41BC_76B6D161EA56_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3C06029F_2A88_5CFD_41BC_76B6D161EA56_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3C06029F_2A88_5CFD_41BC_76B6D161EA56_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3C06029F_2A88_5CFD_41BC_76B6D161EA56_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_3222DDCD_2A89_C442_41B6_953B0B69F0EA",
 "levels": [
  {
   "url": "media/popup_3C22FE0D_2A98_47C2_41B9_216F18679DDF_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3C22FE0D_2A98_47C2_41B9_216F18679DDF_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3C22FE0D_2A98_47C2_41B9_216F18679DDF_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3C22FE0D_2A98_47C2_41B9_216F18679DDF_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_1C78D261_2C07_E37F_41C3_A2A7134957FD, 0)",
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_0E63C359_2B88_5C42_41BE_390E8ABBE344",
   "player": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer"
  }
 ],
 "id": "playList_1C78D261_2C07_E37F_41C3_A2A7134957FD"
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3223A4A0_2A88_44C2_41C0_00DC83AB0FD2",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.59,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3223A4A0_2A88_44C2_41C0_00DC83AB0FD2_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 6.67,
 "hideDuration": 500,
 "yaw": 60.43,
 "hideEasing": "cubic_out"
},
{
 "class": "ImageResource",
 "id": "ImageResource_333C4B56_2AB8_4C4E_41BC_38DA628E374F",
 "levels": [
  {
   "url": "media/popup_3CC8DA98_2ABF_CCC3_41A1_E851C646BCA5_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3CC8DA98_2ABF_CCC3_41A1_E851C646BCA5_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3CC8DA98_2ABF_CCC3_41A1_E851C646BCA5_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3CC8DA98_2ABF_CCC3_41A1_E851C646BCA5_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3C06029F_2A88_5CFD_41BC_76B6D161EA56",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.34,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3C06029F_2A88_5CFD_41BC_76B6D161EA56_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 15.25,
 "hideDuration": 500,
 "yaw": 110.88,
 "hideEasing": "cubic_out"
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3DC79F44_2A88_4443_419D_618A735C6E26",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.55,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3DC79F44_2A88_4443_419D_618A735C6E26_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 8.73,
 "hideDuration": 500,
 "yaw": 137.65,
 "hideEasing": "cubic_out"
},
{
 "partial": false,
 "label": "halaman setelah memasuki pura area 1",
 "id": "panorama_2097E957_2A88_4C4D_414F_340791750382",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_270E4034_2A8F_BBC2_419A_2B924ED4375A",
  "this.overlay_24B2771C_2A88_45C3_41C5_03E64F93894F",
  "this.overlay_3F3BFBEC_2A88_4C42_41A2_8179419E17DA",
  "this.overlay_3FDE0CB6_2A88_C4CF_419E_1EB75E2749BB",
  "this.popup_3C52E597_2AB9_C4CE_4197_097485FCE033",
  "this.popup_3CC8DA98_2ABF_CCC3_41A1_E851C646BCA5"
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_21A03FED_2A88_C442_41A9_0C2301298780",
   "yaw": -5.23,
   "backwardYaw": -173.45,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58",
   "yaw": 170.29,
   "backwardYaw": 5.29,
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_t.jpg",
 "hfovMin": "135%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_321F9DD0_2A89_C442_41B8_CD0BC573D31D",
 "levels": [
  {
   "url": "media/popup_3DF603FA_2A98_DC46_418D_14ACB04E42F0_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3DF603FA_2A98_DC46_418D_14ACB04E42F0_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3DF603FA_2A98_DC46_418D_14ACB04E42F0_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3DF603FA_2A98_DC46_418D_14ACB04E42F0_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_3220ADCA_2A89_C446_41B7_F8CA28D05FEE",
 "levels": [
  {
   "url": "media/popup_3DF8C45E_2A9B_C47E_41BA_DBA78E94CF86_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3DF8C45E_2A9B_C47E_41BA_DBA78E94CF86_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3DF8C45E_2A9B_C47E_41BA_DBA78E94CF86_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3DF8C45E_2A9B_C47E_41BA_DBA78E94CF86_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3F1CCC86_2AB8_44CF_41AF_83DB53A551F3",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.6,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3F1CCC86_2AB8_44CF_41AF_83DB53A551F3_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 6.33,
 "hideDuration": 500,
 "yaw": -107.38,
 "hideEasing": "cubic_out"
},
{
 "label": "Bale belik atau pengaruman",
 "id": "photo_0E548EAB_2BF8_44C6_41A9_ABB4C1EB4B6D",
 "width": 4032,
 "class": "Photo",
 "duration": 5000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_0E548EAB_2BF8_44C6_41A9_ABB4C1EB4B6D.JPG",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_0E548EAB_2BF8_44C6_41A9_ABB4C1EB4B6D_t.jpg",
 "height": 3024
},
{
 "label": "bale piasan",
 "id": "photo_0E5C2D32_2BF8_45C6_41C3_57362F08E71D",
 "width": 4032,
 "class": "Photo",
 "duration": 5000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_0E5C2D32_2BF8_45C6_41C3_57362F08E71D.JPG",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_0E5C2D32_2BF8_45C6_41C3_57362F08E71D_t.jpg",
 "height": 3024
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_1CF2F32B_2C07_E2C2_41B8_1D6B05988CD2",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -39.09,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_322FBDBF_2A89_C43E_417E_13B2D3D1C95F",
 "levels": [
  {
   "url": "media/popup_3CC12876_2A88_4C4E_41A5_F6C8EDB7E92C_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3CC12876_2A88_4C4E_41A5_F6C8EDB7E92C_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3CC12876_2A88_4C4E_41A5_F6C8EDB7E92C_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3CC12876_2A88_4C4E_41A5_F6C8EDB7E92C_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3D75EC05_2A88_4BCD_41B1_DC517A3F9137",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.44,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3D75EC05_2A88_4BCD_41B1_DC517A3F9137_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 12.51,
 "hideDuration": 500,
 "yaw": 105.05,
 "hideEasing": "cubic_out"
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_21A03FED_2A88_C442_41A9_0C2301298780",
   "camera": "this.panorama_21A03FED_2A88_C442_41A9_0C2301298780_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2097E957_2A88_4C4D_414F_340791750382",
   "camera": "this.panorama_2097E957_2A88_4C4D_414F_340791750382_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58",
   "camera": "this.panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39",
   "camera": "this.panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878",
   "camera": "this.panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A",
   "camera": "this.panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_20A713E2_2A88_5C46_4196_1A2305C176EA",
   "camera": "this.panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_20948DAA_2A88_44C6_41B6_795CC44C0821",
   "camera": "this.panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_20A785B6_2A89_C4CF_4185_464B122500CE",
   "camera": "this.panorama_20A785B6_2A89_C4CF_4185_464B122500CE_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_20959DCB_2A89_C445_41A0_18E24388B9F8",
   "camera": "this.panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552",
   "camera": "this.panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747",
   "camera": "this.panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "label": "Apit Lawang Tengen",
 "id": "photo_0E70A495_2BF7_C4C2_41C3_CF1B3F5DDDD2",
 "width": 3024,
 "class": "Photo",
 "duration": 5000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_0E70A495_2BF7_C4C2_41C3_CF1B3F5DDDD2.JPG",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_0E70A495_2BF7_C4C2_41C3_CF1B3F5DDDD2_t.jpg",
 "height": 4032
},
{
 "partial": false,
 "label": "area pura persembahyangan",
 "id": "panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_27D870EF_2A88_BC5E_41B9_C1CE035A6260",
  "this.overlay_27364CCF_2A88_C45E_41BA_208EEE5174F8",
  "this.overlay_3FB3D104_2A88_DDC2_418C_8A838491358E",
  "this.popup_3C004530_2A8F_C5C2_41B7_08192C473AC0"
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A",
   "yaw": 140.91,
   "backwardYaw": 6.52,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552",
   "yaw": -23.89,
   "backwardYaw": -158.89,
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_t.jpg",
 "hfovMin": "135%"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_1C86343A_2C07_E6CD_41C2_4C89B7A20656",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 156.11,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_3225ADC6_2A89_C44E_41C5_44B30438DABD",
 "levels": [
  {
   "url": "media/popup_3221838A_2A98_5CC6_41B3_CEE5C5ABC37D_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3221838A_2A98_5CC6_41B3_CEE5C5ABC37D_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3221838A_2A98_5CC6_41B3_CEE5C5ABC37D_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3221838A_2A98_5CC6_41B3_CEE5C5ABC37D_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3221838A_2A98_5CC6_41B3_CEE5C5ABC37D",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.6,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3221838A_2A98_5CC6_41B3_CEE5C5ABC37D_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 5.99,
 "hideDuration": 500,
 "yaw": -101.55,
 "hideEasing": "cubic_out"
},
{
 "class": "ImageResource",
 "id": "ImageResource_322E4DC1_2A89_C442_41C0_328A07A4E6F9",
 "levels": [
  {
   "url": "media/popup_3DD47D33_2A9B_C5C6_41A2_980B96A72CAE_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3DD47D33_2A9B_C5C6_41A2_980B96A72CAE_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3DD47D33_2A9B_C5C6_41A2_980B96A72CAE_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3DD47D33_2A9B_C5C6_41A2_980B96A72CAE_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3C22FE0D_2A98_47C2_41B9_216F18679DDF",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.54,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3C22FE0D_2A98_47C2_41B9_216F18679DDF_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 9.08,
 "hideDuration": 500,
 "yaw": -103.26,
 "hideEasing": "cubic_out"
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3DFCC23E_2A8F_FC3E_41C0_561180486585",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.62,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3DFCC23E_2A8F_FC3E_41C0_561180486585_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": -4.99,
 "hideDuration": 500,
 "yaw": 171.28,
 "hideEasing": "cubic_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_1B19F519_2C07_E6CE_41B3_6835B9E80628",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 21.11,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_1CAE93F8_2C07_E14E_41C1_27E5E51BCBF4",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 5.04,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3C2098DB_2A88_CC46_41BF_39FB27726913",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.65,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3C2098DB_2A88_CC46_41BF_39FB27726913_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": -0.53,
 "hideDuration": 500,
 "yaw": 5.18,
 "hideEasing": "cubic_out"
},
{
 "label": "gedong ratu desa",
 "id": "photo_0E789558_2BF8_C442_4176_7AC799AFC9C3",
 "width": 3024,
 "class": "Photo",
 "duration": 5000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_0E789558_2BF8_C442_4176_7AC799AFC9C3.JPG",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_0E789558_2BF8_C442_4176_7AC799AFC9C3_t.jpg",
 "height": 4032
},
{
 "class": "ImageResource",
 "id": "ImageResource_32214DC9_2A89_C442_41C2_11CC3B116C93",
 "levels": [
  {
   "url": "media/popup_3C05B2FA_2A98_FC46_41BE_226EF3DD8C47_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3C05B2FA_2A98_FC46_41BE_226EF3DD8C47_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3C05B2FA_2A98_FC46_41BE_226EF3DD8C47_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3C05B2FA_2A98_FC46_41BE_226EF3DD8C47_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_1CDCE391_2C07_E1DF_41A8_5523FA54AC81",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -119.6,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_1B50549D_2C07_E7C7_41AE_0D2612ED3814",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -75.26,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3DF8C45E_2A9B_C47E_41BA_DBA78E94CF86",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.6,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3DF8C45E_2A9B_C47E_41BA_DBA78E94CF86_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 6.33,
 "hideDuration": 500,
 "yaw": 113.29,
 "hideEasing": "cubic_out"
},
{
 "label": "Bale Tetangguran",
 "id": "photo_0E5823B5_2BF9_FCC2_41C0_512D1AF2AB13",
 "width": 4032,
 "class": "Photo",
 "duration": 5000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_0E5823B5_2BF9_FCC2_41C0_512D1AF2AB13.JPG",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_0E5823B5_2BF9_FCC2_41C0_512D1AF2AB13_t.jpg",
 "height": 3024
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_1B22E4E9_2C07_E74E_41B2_A624773DC297",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 27.83,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3DB92809_2A99_CBC2_41B9_146965A4433F",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.54,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3DB92809_2A99_CBC2_41B9_146965A4433F_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 9.08,
 "hideDuration": 500,
 "yaw": -103.26,
 "hideEasing": "cubic_out"
},
{
 "label": "Apit Lawa Kiwa",
 "id": "photo_0ECFED71_2B88_C445_41B3_B138501F8858",
 "width": 3024,
 "class": "Photo",
 "duration": 5000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_0ECFED71_2B88_C445_41B3_B138501F8858.JPG",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_0ECFED71_2B88_C445_41B3_B138501F8858_t.jpg",
 "height": 4032
},
{
 "partial": false,
 "label": "halaman area memasuki tempat persembahyangan",
 "id": "panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_27D4C22D_2A89_FFDD_41BA_3B0F4867DB2B",
  "this.overlay_2747BC52_2A88_4446_41C1_FCBFC5DD130E",
  "this.overlay_3F899D00_2A8B_C5C2_419A_CFE87B3126D0",
  "this.overlay_3F0D0B08_2A88_4DC2_416E_5417B9DF85F2",
  "this.overlay_3CA26AC6_2A88_4C4E_41A0_C304242FBA58",
  "this.popup_327B948C_2ABB_C4C2_41B9_46D70F088927",
  "this.popup_3F1CCC86_2AB8_44CF_41AF_83DB53A551F3",
  "this.popup_3C788A02_2AB8_4FC6_41A1_09F5E599D512"
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552",
   "yaw": -172.79,
   "backwardYaw": -113.51,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58",
   "yaw": 104.74,
   "backwardYaw": -173.15,
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_t.jpg",
 "hfovMin": "135%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_33036B67_2AB8_4C4E_41C0_7888677E2151",
 "levels": [
  {
   "url": "media/popup_3C972901_2AB8_CDC2_4191_817870F34296_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3C972901_2AB8_CDC2_4191_817870F34296_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3C972901_2AB8_CDC2_4191_817870F34296_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3C972901_2AB8_CDC2_4191_817870F34296_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "partial": false,
 "label": "area pura persembahyangan 4",
 "id": "panorama_20A785B6_2A89_C4CF_4185_464B122500CE",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_276CF41A_2A98_DBC6_41C2_4AD34B4EFB97",
  "this.overlay_243502FC_2A98_FC42_41B9_B2482BD5FD97",
  "this.overlay_3FF9AD13_2A88_C5C6_4189_1E338735114F",
  "this.overlay_3F3E8D04_2A88_C5C3_41A8_14A9325158B3",
  "this.overlay_3F18B98E_2A88_CCDE_41BD_9840ADB70442",
  "this.overlay_3F32A214_2A88_5FC2_41AA_7D10D44A82A5",
  "this.overlay_3F47B3E5_2A89_BC42_4182_994DD11A1D92",
  "this.popup_3DC22810_2A98_4BC2_41A9_197C70818C70",
  "this.popup_3DB92809_2A99_CBC2_41B9_146965A4433F",
  "this.popup_3DEAA6EF_2A98_445E_41C1_BB7C27C5E87B",
  "this.popup_3C05B2FA_2A98_FC46_41BE_226EF3DD8C47",
  "this.popup_3DF8C45E_2A9B_C47E_41BA_DBA78E94CF86"
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20948DAA_2A88_44C6_41B6_795CC44C0821",
   "yaw": -58.89,
   "backwardYaw": 88.47,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20A713E2_2A88_5C46_4196_1A2305C176EA",
   "yaw": 14.64,
   "backwardYaw": 170.22,
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_t.jpg",
 "hfovMin": "135%"
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3D53B1A5_2A88_DCC2_41C3_4E39DBFD5198",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.65,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3D53B1A5_2A88_DCC2_41C3_4E39DBFD5198_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": -1.22,
 "hideDuration": 500,
 "yaw": -37.03,
 "hideEasing": "cubic_out"
},
{
 "label": "Apit Lawa Kiwa",
 "id": "album_0E63C359_2B88_5C42_41BE_390E8ABBE344_0",
 "width": 3024,
 "class": "Photo",
 "duration": 5000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_0E63C359_2B88_5C42_41BE_390E8ABBE344_0.JPG",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/album_0E63C359_2B88_5C42_41BE_390E8ABBE344_0_t.jpg",
 "height": 4032
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_3C972901_2AB8_CDC2_4191_817870F34296",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 8.64,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3C972901_2AB8_CDC2_4191_817870F34296_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 2.21,
 "hideDuration": 500,
 "yaw": 99.9,
 "hideEasing": "cubic_out"
},
{
 "class": "ImageResource",
 "id": "ImageResource_322C3DBE_2A89_C43E_4194_274075E9EF49",
 "levels": [
  {
   "url": "media/popup_3C156708_2A8B_C5C2_41C3_25D18D458032_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3C156708_2A8B_C5C2_41C3_25D18D458032_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3C156708_2A8B_C5C2_41C3_25D18D458032_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3C156708_2A8B_C5C2_41C3_25D18D458032_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_1C0222FB_2C07_E343_41B7_9D20C78C38C9",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 174.77,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_1CA213DD_2C07_E147_41C5_ABC7E473FFFB",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -81.97,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_1B6BE48B_2C07_E7C3_41BF_FC22506779F8",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -9.71,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "label": "bale peselang",
 "id": "photo_0E48987A_2BF8_CC46_41BD_35BEF5C638EC",
 "width": 4032,
 "class": "Photo",
 "duration": 5000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_0E48987A_2BF8_CC46_41BD_35BEF5C638EC.JPG",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_0E48987A_2BF8_CC46_41BD_35BEF5C638EC_t.jpg",
 "height": 3024
},
{
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "id": "popup_327B948C_2ABB_C4C2_41B9_46D70F088927",
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "hfov": 7.8,
 "popupDistance": 100,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_327B948C_2ABB_C4C2_41B9_46D70F088927_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 724
   }
  ]
 },
 "pitch": 25.55,
 "hideDuration": 500,
 "yaw": 48.08,
 "hideEasing": "cubic_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_1B3424D3_2C07_E742_41C1_854D36D1F763",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 12.77,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "partial": false,
 "label": "area pura persembahyangan 2",
 "id": "panorama_20A713E2_2A88_5C46_4196_1A2305C176EA",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_3B41094F_2A88_CC5E_41B4_F8E7C94654B0",
  "this.overlay_38B35C9F_2A88_C4FE_41A8_5E98FFC3DF13",
  "this.overlay_3817AE03_2A88_47C5_41C4_E69A8012E8CC",
  "this.overlay_3FEF95E1_2A88_4445_41C3_896396CACF0B",
  "this.overlay_3F194DF5_2A88_4442_41C4_179A69EEC3F0",
  "this.overlay_3CEE6807_2A88_4BCE_41BE_37D6C0A921C1",
  "this.overlay_3C616871_2A8F_CC42_41B5_91B6A67DFE5F",
  "this.popup_3CC12876_2A88_4C4E_41A5_F6C8EDB7E92C",
  "this.popup_3D75EC05_2A88_4BCD_41B1_DC517A3F9137",
  "this.popup_3DD47D33_2A9B_C5C6_41A2_980B96A72CAE",
  "this.popup_3C0261F3_2A98_7C45_41B6_885578EF15C2"
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20A785B6_2A89_C4CF_4185_464B122500CE",
   "yaw": 170.22,
   "backwardYaw": 14.64,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20959DCB_2A89_C445_41A0_18E24388B9F8",
   "yaw": 60.4,
   "backwardYaw": 4.14,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A",
   "yaw": -92.32,
   "backwardYaw": 98.03,
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_t.jpg",
 "hfovMin": "135%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_33022B68_2AB8_4C42_41A5_82906357DC30",
 "levels": [
  {
   "url": "media/popup_327B948C_2ABB_C4C2_41B9_46D70F088927_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_327B948C_2ABB_C4C2_41B9_46D70F088927_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_327B948C_2ABB_C4C2_41B9_46D70F088927_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_327B948C_2ABB_C4C2_41B9_46D70F088927_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_21A03FED_2A88_C442_41A9_0C2301298780",
   "camera": "this.panorama_21A03FED_2A88_C442_41A9_0C2301298780_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2097E957_2A88_4C4D_414F_340791750382",
   "camera": "this.panorama_2097E957_2A88_4C4D_414F_340791750382_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58",
   "camera": "this.panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39",
   "camera": "this.panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878",
   "camera": "this.panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A",
   "camera": "this.panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_20A713E2_2A88_5C46_4196_1A2305C176EA",
   "camera": "this.panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_20948DAA_2A88_44C6_41B6_795CC44C0821",
   "camera": "this.panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_20A785B6_2A89_C4CF_4185_464B122500CE",
   "camera": "this.panorama_20A785B6_2A89_C4CF_4185_464B122500CE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_20959DCB_2A89_C445_41A0_18E24388B9F8",
   "camera": "this.panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552",
   "camera": "this.panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747",
   "camera": "this.panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 0)",
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_1C9BB41E_2C07_E6C5_41BC_06197634DD4A",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 7.21,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_3215BDD5_2A89_C442_41C4_72D333C6CC89",
 "levels": [
  {
   "url": "media/popup_3C2098DB_2A88_CC46_41BF_39FB27726913_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3C2098DB_2A88_CC46_41BF_39FB27726913_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3C2098DB_2A88_CC46_41BF_39FB27726913_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3C2098DB_2A88_CC46_41BF_39FB27726913_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_3304FB65_2AB8_4C42_41A9_F1CFADEA551B",
 "levels": [
  {
   "url": "media/popup_3C52E597_2AB9_C4CE_4197_097485FCE033_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3C52E597_2AB9_C4CE_4197_097485FCE033_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3C52E597_2AB9_C4CE_4197_097485FCE033_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3C52E597_2AB9_C4CE_4197_097485FCE033_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_321A7DD4_2A89_C442_41B7_C4C60F4F6BF4",
 "levels": [
  {
   "url": "media/popup_3DDB54DA_2A98_4446_4167_13A9833568FA_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3508,
   "height": 2482
  },
  {
   "url": "media/popup_3DDB54DA_2A98_4446_4167_13A9833568FA_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1449
  },
  {
   "url": "media/popup_3DDB54DA_2A98_4446_4167_13A9833568FA_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 724
  },
  {
   "url": "media/popup_3DDB54DA_2A98_4446_4167_13A9833568FA_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 362
  }
 ]
},
{
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "paddingTop": 0,
 "left": 0,
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "width": "100%",
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial Black",
 "toolTipFontStyle": "normal",
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "minHeight": 50,
 "progressLeft": 0,
 "propagateClick": true,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontColor": "#606060",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "minWidth": 100,
 "paddingLeft": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "toolTipPaddingRight": 6,
 "vrPointerSelectionTime": 2000,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "shadow": false,
 "playbackBarOpacity": 1,
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "class": "ViewerArea",
 "progressBarOpacity": 1,
 "top": 0,
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "50px",
 "progressBorderColor": "#000000",
 "progressBackgroundColor": [
  "#FFFFFF"
 ]
},
{
 "borderSize": 0,
 "children": [
  "this.Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
  "this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA"
 ],
 "paddingTop": 0,
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "verticalAlign": "top",
 "id": "Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
 "right": "0%",
 "backgroundImageUrl": "skin/Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7.png",
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "layout": "absolute",
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "bottom": "0%",
 "overflow": "visible",
 "height": "12.832%",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "data": {
  "name": "MENU"
 },
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "contentOpaque": false
},
{
 "borderSize": 0,
 "verticalAlign": "top",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "gap": 10,
 "right": "0%",
 "width": 115.05,
 "shadow": false,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "class": "Container",
 "horizontalAlign": "left",
 "top": "0%",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "height": 641,
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "contentOpaque": false
},
{
 "borderSize": 0,
 "verticalAlign": "top",
 "children": [
  "this.Container_14FBF305_1BED_F1EE_419A_A9F069FE2B28",
  "this.Label_14FBC305_1BED_F1EE_41B3_DAC14B1EE44E",
  "this.Label_14F82305_1BED_F1EE_41AD_7A6E6AD00A22"
 ],
 "paddingTop": 0,
 "left": 25,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "id": "Container_14F80305_1BED_F1EE_4193_B39F49D6928C",
 "width": 573,
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "class": "Container",
 "layout": "absolute",
 "horizontalAlign": "left",
 "top": 10,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "height": 116,
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "data": {
  "name": "--STICKER"
 },
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "contentOpaque": false
},
{
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "id": "Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95",
 "right": "0%",
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "layout": "absolute",
 "horizontalAlign": "left",
 "top": "0%",
 "scrollBarWidth": 10,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderRadius": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, false, 0, null, null, false)",
 "paddingLeft": 0,
 "data": {
  "name": "BERANDA"
 },
 "scrollBarOpacity": 0.5,
 "visible": false,
 "scrollBarColor": "#04A3E1",
 "contentOpaque": false
},
{
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "right": "0%",
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "layout": "absolute",
 "horizontalAlign": "left",
 "top": "0%",
 "scrollBarWidth": 10,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderRadius": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingLeft": 0,
 "data": {
  "name": "VIRTUAL TOUR"
 },
 "scrollBarOpacity": 0.5,
 "visible": false,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "creationPolicy": "inAdvance"
},
{
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "right": "0%",
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "layout": "absolute",
 "horizontalAlign": "left",
 "top": "0%",
 "scrollBarWidth": 10,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderRadius": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "paddingLeft": 0,
 "data": {
  "name": "DENAH"
 },
 "scrollBarOpacity": 0.5,
 "visible": false,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "creationPolicy": "inAdvance"
},
{
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "right": "0%",
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "layout": "absolute",
 "horizontalAlign": "left",
 "top": "0%",
 "scrollBarWidth": 10,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderRadius": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingLeft": 0,
 "data": {
  "name": "GALERI"
 },
 "scrollBarOpacity": 0.5,
 "visible": false,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "creationPolicy": "inAdvance"
},
{
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "children": [
  "this.Container_06D58689_2C0F_E3CE_41AA_39F9F5E8E666",
  "this.Container_06D4A689_2C0F_E3CE_41C4_0F8430167925"
 ],
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "id": "Container_06D48689_2C0F_E3CE_41AC_C32EFC463518",
 "right": "0%",
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "layout": "absolute",
 "horizontalAlign": "left",
 "top": "0%",
 "scrollBarWidth": 10,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderRadius": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_06D48689_2C0F_E3CE_41AC_C32EFC463518, false, 0, this.effect_7A652532_5098_6E2E_41AB_7AEE2555397F, 'hideEffect', false)",
 "paddingLeft": 0,
 "data": {
  "name": "LOKASI"
 },
 "scrollBarOpacity": 0.5,
 "visible": false,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "creationPolicy": "inAdvance"
},
{
 "minWidth": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "left": 0,
 "paddingBottom": 0,
 "id": "veilPopupPanorama",
 "right": 0,
 "shadow": false,
 "backgroundOpacity": 0.55,
 "class": "UIComponent",
 "top": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderRadius": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "paddingLeft": 0,
 "data": {
  "name": "UIComponent38235"
 },
 "visible": false
},
{
 "minWidth": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "left": 0,
 "paddingBottom": 0,
 "id": "zoomImagePopupPanorama",
 "right": 0,
 "shadow": false,
 "backgroundOpacity": 1,
 "class": "ZoomImage",
 "top": 0,
 "bottom": 0,
 "backgroundColor": [],
 "borderRadius": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 0,
 "paddingLeft": 0,
 "data": {
  "name": "ZoomImage38236"
 },
 "visible": false,
 "scaleMode": "custom"
},
{
 "minWidth": 0,
 "borderSize": 0,
 "iconLineWidth": 5,
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "paddingTop": 5,
 "paddingBottom": 5,
 "id": "closeButtonPopupPanorama",
 "fontFamily": "Arial",
 "right": 10,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "shadow": false,
 "shadowBlurRadius": 6,
 "textDecoration": "none",
 "shadowSpread": 1,
 "borderColor": "#000000",
 "backgroundOpacity": 0.3,
 "class": "CloseButton",
 "gap": 5,
 "horizontalAlign": "center",
 "top": 10,
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
 "borderRadius": 0,
 "mode": "push",
 "iconWidth": 20,
 "fontSize": "1.29vmin",
 "paddingRight": 5,
 "layout": "horizontal",
 "pressedIconColor": "#888888",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "iconHeight": 20,
 "label": "",
 "fontStyle": "normal",
 "iconColor": "#000000",
 "paddingLeft": 5,
 "data": {
  "name": "CloseButton38237"
 },
 "rollOverIconColor": "#666666",
 "visible": false,
 "fontWeight": "normal",
 "cursor": "hand",
 "fontColor": "#FFFFFF"
},
{
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "transparencyActive": true,
 "paddingBottom": 0,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "shadow": false,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "horizontalAlign": "center",
 "maxHeight": 58,
 "height": 58,
 "borderRadius": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "cursor": "hand",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png"
},
{
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "transparencyActive": true,
 "paddingBottom": 0,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "shadow": false,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "horizontalAlign": "center",
 "maxHeight": 58,
 "height": 58,
 "borderRadius": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 1,
 "click": "if(this.getGlobalAudio(this.audio_3A6A14CD_2C03_E747_41B6_F51C4323F58A).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_3A6A14CD_2C03_E747_41B6_F51C4323F58A); } else { var src = this.playGlobalAudio(this.audio_3A6A14CD_2C03_E747_41B6_F51C4323F58A); }",
 "paddingLeft": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "cursor": "hand",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png"
},
{
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "transparencyActive": true,
 "paddingBottom": 0,
 "id": "IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
 "right": 30,
 "width": 49,
 "shadow": false,
 "iconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA.png",
 "maxWidth": 49,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "horizontalAlign": "center",
 "maxHeight": 37,
 "bottom": 8,
 "height": 37,
 "borderRadius": 0,
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA_rollover.png",
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand"
},
{
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "transparencyActive": true,
 "paddingBottom": 0,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "shadow": false,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "horizontalAlign": "center",
 "maxHeight": 58,
 "height": 58,
 "borderRadius": 0,
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton VR"
 },
 "visible": false,
 "cursor": "hand"
},
{
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "transparencyActive": true,
 "paddingBottom": 0,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "shadow": false,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "horizontalAlign": "center",
 "maxHeight": 58,
 "height": 58,
 "borderRadius": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton HS "
 },
 "cursor": "hand",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png"
},
{
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "transparencyActive": true,
 "paddingBottom": 0,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "shadow": false,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "horizontalAlign": "center",
 "maxHeight": 58,
 "height": 58,
 "borderRadius": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "cursor": "hand",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_20948DAA_2A88_44C6_41B6_795CC44C0821, this.camera_1B22E4E9_2C07_E74E_41B2_A624773DC297); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.89,
   "image": "this.AnimatedImageResource_3FC4A9AD_2A97_CCC2_41C1_3B51683A7494",
   "pitch": -46.93,
   "yaw": -82.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_24B77C0F_2A98_4BDE_41B4_264CFC3DA11E",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.89,
   "yaw": -82.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -46.93
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3C2098DB_2A88_CC46_41BF_39FB27726913, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_3215BDD5_2A89_C442_41C4_72D333C6CC89, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.65,
   "image": "this.AnimatedImageResource_3FC4C9AE_2A97_CCDE_41C4_AA8EE27E8E5D",
   "pitch": -0.53,
   "yaw": 5.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3FFB6415_2A8B_BBCD_41B8_030DBF5CDE60",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.65,
   "yaw": 5.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.53
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3DFCC23E_2A8F_FC3E_41C0_561180486585, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_32148DD6_2A89_C44E_4182_0369E60377A9, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.62,
   "image": "this.AnimatedImageResource_3FC4F9AE_2A97_CCDE_41C4_EDA35AAB867A",
   "pitch": -4.99,
   "yaw": 171.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3F31CBBD_2A88_4C3D_41BA_9BBE19939CD6",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.62,
   "yaw": 171.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.99
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39, this.camera_1C9BB41E_2C07_E6C5_41BC_06197634DD4A); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.61,
   "image": "this.AnimatedImageResource_3FC369AC_2A97_CCC2_41C3_8688D120E0D1",
   "pitch": -22.22,
   "yaw": -113.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2486EFA0_2A98_44C2_41C2_E607113C2CF2",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.61,
   "yaw": -113.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -22.22
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878, this.camera_1C86343A_2C07_E6CD_41C2_4C89B7A20656); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.51,
   "image": "this.AnimatedImageResource_3FC389AC_2A97_CCC2_41C4_41BB224D0642",
   "pitch": -23.59,
   "yaw": -158.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_24CCCA7D_2A98_CC42_4180_B649891CBC53",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.51,
   "yaw": -158.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -23.59
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_20959DCB_2A89_C445_41A0_18E24388B9F8, this.camera_1CAE93F8_2C07_E14E_41C1_27E5E51BCBF4); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.97,
   "image": "this.AnimatedImageResource_3FC3A9AC_2A97_CCC2_4180_D8D3814E4DE7",
   "pitch": -20.85,
   "yaw": 165.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3FEB6F4D_2A88_4442_41C3_5DF3A32FB0EC",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.97,
   "yaw": 165.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -20.85
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3DDA9013_2A98_7BC6_4178_95D963FFFB09, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_321CADCF_2A89_C45E_419E_BFEBA4E033D0, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.99,
   "image": "this.AnimatedImageResource_3FC3D9AC_2A97_CCC2_41A3_61DBBC13467B",
   "pitch": 3.8,
   "yaw": -6.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3F9A27A5_2A88_C4CD_41C1_955F88957366",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.99,
   "yaw": -6.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.8
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3DF603FA_2A98_DC46_418D_14ACB04E42F0, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_321F9DD0_2A89_C442_41B8_CD0BC573D31D, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.54,
   "image": "this.AnimatedImageResource_3FC409AD_2A97_CCC2_41C4_D86D05370CFD",
   "pitch": 9.08,
   "yaw": 28.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3C2F5A79_2A88_4C42_41B9_BA950908EF16",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.54,
   "yaw": 28.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 9.08
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3DE4D923_2A98_4DC6_41A9_11201FE64CE3, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_3219DDD2_2A89_C446_41BD_2E802074AC54, null, null, null, null, false); this.showPopupPanoramaOverlay(this.popup_3C06029F_2A88_5CFD_41BC_76B6D161EA56, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_321EFDD1_2A89_C442_41B8_D8F297093722, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.34,
   "image": "this.AnimatedImageResource_3FC429AD_2A97_CCC2_41BC_E691D51AB51E",
   "pitch": 15.25,
   "yaw": 110.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3E7B09A0_2A88_4CC2_41BC_DF2FB8968737",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.34,
   "yaw": 110.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 15.25
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3DC79F44_2A88_4443_419D_618A735C6E26, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_321B1DD3_2A89_C446_41B9_D87639853DF8, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.55,
   "image": "this.AnimatedImageResource_3FC449AD_2A97_CCC2_41C3_2904BECFCB49",
   "pitch": 8.73,
   "yaw": 137.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3F38F8C2_2A88_4C46_41B7_D68061425814",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.55,
   "yaw": 137.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 8.73
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3DDB54DA_2A98_4446_4167_13A9833568FA, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_321A7DD4_2A89_C442_41B7_C4C60F4F6BF4, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.52,
   "image": "this.AnimatedImageResource_3FC489AD_2A97_CCC2_41A1_6F76A16C2B0F",
   "pitch": 9.76,
   "yaw": -69.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3C9E9B0C_2A8B_CDC2_419A_C2CD1BA9F877",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.52,
   "yaw": -69.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 9.76
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2097E957_2A88_4C4D_414F_340791750382, this.camera_1B6BE48B_2C07_E7C3_41BF_FC22506779F8); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.41,
   "image": "this.AnimatedImageResource_3FDF79A1_2A97_CCC2_41B0_1EBED029338F",
   "pitch": -18.79,
   "yaw": 5.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_27E50307_2A88_FDCE_4182_C49205288CC6",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.41,
   "yaw": 5.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -18.79
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39, this.camera_1B50549D_2C07_E7C7_41AE_0D2612ED3814); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.23,
   "image": "this.AnimatedImageResource_3FDF99A1_2A97_CCC2_41C5_2844E093240A",
   "pitch": -14.33,
   "yaw": -173.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_27EF3829_2A88_4BC2_41C2_BD38E5143888",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.23,
   "yaw": -173.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -14.33
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3C972901_2AB8_CDC2_4191_817870F34296, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_33036B67_2AB8_4C4E_41C0_7888677E2151, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.64,
   "image": "this.AnimatedImageResource_3FDFB9A2_2A97_CCC6_41C4_46E189BF6835",
   "pitch": 2.21,
   "yaw": 99.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3FB755E8_2A88_C442_41B1_E019F7E61075",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.64,
   "yaw": 99.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 2.21
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_20A713E2_2A88_5C46_4196_1A2305C176EA, this.camera_1CDCE391_2C07_E1DF_41A8_5523FA54AC81); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.7,
   "image": "this.AnimatedImageResource_3FC2D9AB_2A97_CCC6_41B6_9F677E4FF20A",
   "pitch": -26.34,
   "yaw": 4.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_24AAD31D_2A9B_BDFD_41B1_51306F4F5A5D",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.7,
   "yaw": 4.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -26.34
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552, this.camera_1CD5537D_2C07_E147_41C0_8280011383E9); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.07,
   "image": "this.AnimatedImageResource_3FC2F9AB_2A97_CCC6_41A7_3E7379E6F1CF",
   "pitch": -31.83,
   "yaw": -174.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_24E5C2C8_2A98_5C42_418A_2C95FCEF63A1",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.07,
   "yaw": -174.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -31.83
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3C22FE0D_2A98_47C2_41B9_216F18679DDF, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_3222DDCD_2A89_C442_41B6_953B0B69F0EA, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.54,
   "image": "this.AnimatedImageResource_3FC319AB_2A97_CCC6_41B6_5C59A4996BE2",
   "pitch": 9.08,
   "yaw": -103.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3F35D206_2A89_DFCE_4160_203E47A0BA5C",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.54,
   "yaw": -103.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 9.08
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3C008645_2B79_C442_418B_7091AD081956, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_32A52746_2B78_C44E_41BC_9B00008FED9A, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.3,
   "image": "this.AnimatedImageResource_3FC339AB_2A97_CCC6_41A5_5587055C822D",
   "pitch": 16.28,
   "yaw": -30.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3E5B43AA_2A89_BCC7_41C2_4A5F79B3828A",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.3,
   "yaw": -30.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 16.28
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878, this.camera_1CF2F32B_2C07_E2C2_41B8_1D6B05988CD2); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.42,
   "image": "this.AnimatedImageResource_3FC089A4_2A97_CCC2_41C1_D47F5E7FB2CE",
   "pitch": -24.62,
   "yaw": 6.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_27FC72B0_2A88_5CC2_41B0_5042BAF52639",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.42,
   "yaw": 6.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -24.62
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_20A713E2_2A88_5C46_4196_1A2305C176EA, this.camera_1CF9C342_2C07_E2BD_41B0_AE26117ECA58); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.85,
   "image": "this.AnimatedImageResource_3FC0A9A5_2A97_CCC2_4171_607F0392373A",
   "pitch": -12.96,
   "yaw": 98.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_27462998_2A8B_CCC2_4199_1321DC3996C9",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.85,
   "yaw": 98.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -12.96
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_20948DAA_2A88_44C6_41B6_795CC44C0821, this.camera_1C097319_2C07_E2CF_41C1_D926C14BD8B5); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.44,
   "image": "this.AnimatedImageResource_3FC0C9A5_2A97_CCC2_41C0_6F94156925B8",
   "pitch": -14.33,
   "yaw": -167.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_241654F7_2A97_C44E_41C2_3FF0925700A8",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.44,
   "yaw": -167.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -14.33
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3DCE5DB0_2A88_44C2_41B7_8C7CFF433737, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_32309DBB_2A89_C4C6_419F_3E49634C1ECA, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.6,
   "image": "this.AnimatedImageResource_3FC0F9A5_2A97_CCC2_41B5_FDE050DB61DF",
   "pitch": 6.33,
   "yaw": -107.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3E5FD914_2A88_4DC3_41C2_8AB8EE2028E8",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.6,
   "yaw": -107.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 6.33
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3D53B1A5_2A88_DCC2_41C3_4E39DBFD5198, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_32339DBC_2A89_C4C2_41C0_572E8926EBAC, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.65,
   "image": "this.AnimatedImageResource_3FC119A5_2A97_CCC2_41A5_2A29B56B46FB",
   "pitch": -1.22,
   "yaw": -37.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3FC744DD_2A88_4442_41BB_027E8ABA3CC5",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.65,
   "yaw": -37.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.22
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3223A4A0_2A88_44C2_41C0_00DC83AB0FD2, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_3232DDBD_2A89_C4C2_41C4_7949E770BE57, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.59,
   "image": "this.AnimatedImageResource_3FC139A6_2A97_CCCE_41C4_3D64F8143423",
   "pitch": 6.67,
   "yaw": 60.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3F38C1ED_2A88_5C42_4192_5FA81E7B76A8",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.59,
   "yaw": 60.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 6.67
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3C156708_2A8B_C5C2_41C3_25D18D458032, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_322C3DBE_2A89_C43E_4194_274075E9EF49, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.62,
   "image": "this.AnimatedImageResource_3FC169A6_2A97_CCCE_41BD_7C8E856882E3",
   "pitch": 4.62,
   "yaw": -152.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3C8D489A_2A88_CCC6_41A3_67D6FD53B66D",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.62,
   "yaw": -152.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.62
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_20A785B6_2A89_C4CF_4185_464B122500CE, this.camera_1B5CD4AC_2C07_E7C5_41C4_F4C6036631FB); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.7,
   "image": "this.AnimatedImageResource_3FC269A8_2A97_CCC2_419B_DB692AF448C2",
   "pitch": -17.76,
   "yaw": 88.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_27401FA7_2A98_44CE_41BA_310CDA22FB64",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.7,
   "yaw": 88.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -17.76
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A, this.camera_1B3424D3_2C07_E742_41C1_854D36D1F763); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.61,
   "image": "this.AnimatedImageResource_3FC289A8_2A97_CCC2_41A7_69F7F61D2E4C",
   "pitch": -22.7,
   "yaw": -8.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_24D9E8A2_2A98_CCC6_41A0_10278418B640",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.61,
   "yaw": -8.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -22.7
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747, this.camera_1B49F4BD_2C07_E7C7_41AE_38AE9CC985D5); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.82,
   "image": "this.AnimatedImageResource_3FC2A9A8_2A97_CCC2_4179_F03A47A2650A",
   "pitch": -25.65,
   "yaw": -152.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_24266524_2A9F_C5C2_41C2_6F943F021E4C",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.82,
   "yaw": -152.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -25.65
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3DC2301A_2A98_BBC6_41AB_28F905A33EFB, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_322B1DC4_2A89_C442_417B_8F620D3CAE3A, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.3,
   "image": "this.AnimatedImageResource_3FC2D9A8_2A97_CCC2_41C0_434DD5C124B6",
   "pitch": 16.28,
   "yaw": 122.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3FF95C59_2A88_4442_41BE_48D4923554C7",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.3,
   "yaw": 122.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 16.28
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3C8DD070_2A99_BC42_41B7_7BC44113F443, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_322A7DC5_2A89_C442_41C3_986B13DCF4D4, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.5,
   "image": "this.AnimatedImageResource_3FC2F9A9_2A97_CCC2_4171_A5BD66839565",
   "pitch": 10.79,
   "yaw": 59.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3F1BC428_2A88_7BC3_41AF_955F2621D2CE",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.5,
   "yaw": 59.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 10.79
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3221838A_2A98_5CC6_41B3_CEE5C5ABC37D, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_3225ADC6_2A89_C44E_41C5_44B30438DABD, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.6,
   "image": "this.AnimatedImageResource_3FC329A9_2A97_CCC2_41A9_A64E16043A72",
   "pitch": 5.99,
   "yaw": -101.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3F418409_2A88_5BC5_41BA_13A1F991ADF6",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.6,
   "yaw": -101.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 5.99
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3C661015_2A98_7BC2_41C0_37A1F7E2DC38, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_3224BDC7_2A89_C44E_4198_DCF4A1FF7615, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.29,
   "image": "this.AnimatedImageResource_324A9DA7_2A89_C4CE_41BC_6C985E87A576",
   "pitch": 16.63,
   "yaw": 157.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3C23CE9C_2A98_44C2_41AB_1A7D8C2A2BF3",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.29,
   "yaw": 157.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 16.63
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_0DA50013_2C7F_9EC3_41A1_19AD20D62EB8, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_0A63A96B_2C02_6143_41B2_478831DB4347, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.61,
   "image": "this.AnimatedImageResource_32826711_2B78_C5C2_41B0_949DD6B92DDB",
   "pitch": 5.3,
   "yaw": -143.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3DD111D4_2B78_BC43_41C5_59D46EB17735",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.61,
   "yaw": -143.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 5.3
  }
 ]
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_0E63C359_2B88_5C42_41BE_390E8ABBE344_0",
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "duration": 5000,
    "scaleMode": "fit_to_height",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.55",
     "y": "0.31",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.photo_0E70A495_2BF7_C4C2_41C3_CF1B3F5DDDD2",
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "duration": 5000,
    "scaleMode": "fit_to_height",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.42",
     "y": "0.29",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.photo_0E6607D0_2BF8_4442_419C_54F73AF38132",
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "duration": 5000,
    "scaleMode": "fit_to_width",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.65",
     "y": "0.36",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.photo_0E548EAB_2BF8_44C6_41A9_ABB4C1EB4B6D",
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "duration": 5000,
    "scaleMode": "fit_to_width",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.48",
     "y": "0.27",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.photo_0E4B1E13_2BF8_C7C6_419D_7E64F4C69CFF",
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "duration": 5000,
    "scaleMode": "fit_to_width",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.73",
     "y": "0.39",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.photo_0E48987A_2BF8_CC46_41BD_35BEF5C638EC",
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "duration": 5000,
    "scaleMode": "fit_to_width",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.72",
     "y": "0.40",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.photo_0E69E220_2BF8_5FC3_41BD_2A6EFB737409",
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "duration": 5000,
    "scaleMode": "fit_to_width",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.26",
     "y": "0.51",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.photo_0E5C2D32_2BF8_45C6_41C3_57362F08E71D",
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "duration": 5000,
    "scaleMode": "fit_to_width",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.30",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.photo_0E5823B5_2BF9_FCC2_41C0_512D1AF2AB13",
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "duration": 5000,
    "scaleMode": "fit_to_width",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.45",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.photo_0E0A8BA5_2BF8_4CC2_41C0_1B0121D65DB0",
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "duration": 5000,
    "scaleMode": "fit_to_height",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.68",
     "y": "0.41",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.photo_0E789558_2BF8_C442_4176_7AC799AFC9C3",
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "duration": 5000,
    "scaleMode": "fit_to_height",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.72",
     "y": "0.40",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  }
 ],
 "id": "album_0E63C359_2B88_5C42_41BE_390E8ABBE344_AlbumPlayList"
},
{
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "paddingTop": 0,
 "left": "0%",
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "width": "100%",
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial Black",
 "toolTipFontStyle": "normal",
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "minHeight": 1,
 "progressLeft": 0,
 "propagateClick": true,
 "playbackBarProgressOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "minWidth": 1,
 "paddingLeft": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "toolTipPaddingRight": 6,
 "vrPointerSelectionTime": 2000,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "show": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_1C78D261_2C07_E37F_41C3_A2A7134957FD.set('selectedIndex', -1); }, this); this.playList_1C78D261_2C07_E37F_41C3_A2A7134957FD.set('selectedIndex', 0)",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "shadow": false,
 "playbackBarOpacity": 1,
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "class": "ViewerArea",
 "progressBarOpacity": 1,
 "top": "0%",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "50px",
 "progressBorderColor": "#000000",
 "progressBackgroundColor": [
  "#FFFFFF"
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2097E957_2A88_4C4D_414F_340791750382, this.camera_1C0222FB_2C07_E343_41B7_9D20C78C38C9); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.14,
   "image": "this.AnimatedImageResource_3FDE29A0_2A97_CCC2_41A4_C7B903673712",
   "pitch": -30.25,
   "yaw": -173.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_24BA1BEF_2A88_CC5E_41BF_6A3E6A3D66F3",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.14,
   "yaw": -173.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -30.25
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_21A03FED_2A88_C442_41A9_0C2301298780, this.camera_1C1202C5_2C07_E347_41C1_1D3AD85BEF42); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.3,
   "image": "this.AnimatedImageResource_3FDEE9A0_2A97_CCC2_4167_3E9772AEEAC8",
   "pitch": -36.63,
   "yaw": -5.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_270E4034_2A8F_BBC2_419A_2B924ED4375A",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.3,
   "yaw": -5.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -36.63
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58, this.camera_1C1AF2DE_2C07_E345_41C3_4A286FCEDE9E); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.88,
   "image": "this.AnimatedImageResource_3FDF09A0_2A97_CCC2_41B9_760F0924C725",
   "pitch": -31.49,
   "yaw": 170.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_24B2771C_2A88_45C3_41C5_03E64F93894F",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.88,
   "yaw": 170.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -31.49
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3CC8DA98_2ABF_CCC3_41A1_E851C646BCA5, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_333C4B56_2AB8_4C4E_41BC_38DA628E374F, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.63,
   "image": "this.AnimatedImageResource_3FDF29A1_2A97_CCC2_41C5_2A89A25911F5",
   "pitch": 3.59,
   "yaw": 124.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3F3BFBEC_2A88_4C42_41A2_8179419E17DA",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.63,
   "yaw": 124.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.59
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3C52E597_2AB9_C4CE_4197_097485FCE033, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_3304FB65_2AB8_4C42_41A9_F1CFADEA551B, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.55,
   "image": "this.AnimatedImageResource_3FDF49A1_2A97_CCC2_41C3_E6E60EC946BF",
   "pitch": 8.73,
   "yaw": -74.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3FDE0CB6_2A88_C4CF_419E_1EB75E2749BB",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.55,
   "yaw": -74.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 8.73
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552, this.camera_1B19F519_2C07_E6CE_41B3_6835B9E80628); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.81,
   "image": "this.AnimatedImageResource_3FC009A3_2A97_CCC6_41B6_50954E4FF888",
   "pitch": -23.25,
   "yaw": -23.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_27D870EF_2A88_BC5E_41B9_C1CE035A6260",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.81,
   "yaw": -23.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -23.25
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A, this.camera_1B2D64FD_2C07_E746_41A4_27757DA3179F); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.43,
   "image": "this.AnimatedImageResource_3FC039A4_2A97_CCC2_4195_C1948781E693",
   "pitch": -38.35,
   "yaw": 140.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_27364CCF_2A88_C45E_41BA_208EEE5174F8",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.43,
   "yaw": 140.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -38.35
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3C004530_2A8F_C5C2_41B7_08192C473AC0, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_32312DB9_2A89_C4C2_41B2_7079FC0BD028, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.72,
   "image": "this.AnimatedImageResource_3FC069A4_2A97_CCC2_41BF_8C94B60E82A8",
   "pitch": 8.8,
   "yaw": 35.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3FB3D104_2A88_DDC2_418C_8A838491358E",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.72,
   "yaw": 35.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 8.8
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58, this.camera_1B7F6469_2C07_E74F_41AD_3CF1034AFF85); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.87,
   "image": "this.AnimatedImageResource_3FDFE9A2_2A97_CCC6_41C1_68B85393412F",
   "pitch": -18.45,
   "yaw": 104.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_27D4C22D_2A89_FFDD_41BA_3B0F4867DB2B",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.87,
   "yaw": 104.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -18.45
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552, this.camera_1C8CC44E_2C07_E745_41C4_3C8E4B73E22B); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.18,
   "image": "this.AnimatedImageResource_3FC009A2_2A97_CCC6_41C1_6423C8915EF0",
   "pitch": -36.63,
   "yaw": -172.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2747BC52_2A88_4446_41C1_FCBFC5DD130E",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.18,
   "yaw": -172.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -36.63
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_327B948C_2ABB_C4C2_41B9_46D70F088927, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_33022B68_2AB8_4C42_41A5_82906357DC30, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.8,
   "image": "this.AnimatedImageResource_3FC029A2_2A97_CCC6_41B6_6A8EB2AEE5B1",
   "pitch": 25.55,
   "yaw": 48.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3F899D00_2A8B_C5C2_419A_CFE87B3126D0",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.8,
   "yaw": 48.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 25.55
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3F1CCC86_2AB8_44CF_41AF_83DB53A551F3, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_3300EB69_2AB8_4C42_41A3_524DE1B7539A, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.6,
   "image": "this.AnimatedImageResource_3FC049A3_2A97_CCC6_41C0_4A40A3BD403C",
   "pitch": 6.33,
   "yaw": -107.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3F0D0B08_2A88_4DC2_416E_5417B9DF85F2",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.6,
   "yaw": -107.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 6.33
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3C788A02_2AB8_4FC6_41A1_09F5E599D512, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_330FEB6A_2AB8_4C46_41A9_550BC9DB33EF, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.24,
   "image": "this.AnimatedImageResource_3320CB34_2AB8_4DC2_41A0_54737EEDE5FE",
   "pitch": 5.78,
   "yaw": -140.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3CA26AC6_2A88_4C4E_41A0_C304242FBA58",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.24,
   "yaw": -140.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 5.78
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_20A713E2_2A88_5C46_4196_1A2305C176EA, this.camera_1CEF0368_2C07_E14D_4197_9F5DDC093558); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.11,
   "image": "this.AnimatedImageResource_3FC359A9_2A97_CCC2_41C0_0CE500AF63E3",
   "pitch": -25.31,
   "yaw": 14.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_276CF41A_2A98_DBC6_41C2_4AD34B4EFB97",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.11,
   "yaw": 14.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -25.31
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_20948DAA_2A88_44C6_41B6_795CC44C0821, this.camera_1CE76355_2C07_E147_41A8_59065B10C340); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.29,
   "image": "this.AnimatedImageResource_3FC379A9_2A97_CCC2_41AC_B591E72D72B2",
   "pitch": -22.91,
   "yaw": -58.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_243502FC_2A98_FC42_41B9_B2482BD5FD97",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.29,
   "yaw": -58.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -22.91
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3DEAA6EF_2A98_445E_41C1_BB7C27C5E87B, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_32261DC8_2A89_C442_41C4_4802362C0019, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.5,
   "image": "this.AnimatedImageResource_3FC399AA_2A97_CCC6_41B8_93DB92BFF4DA",
   "pitch": 10.79,
   "yaw": 37.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3FF9AD13_2A88_C5C6_4189_1E338735114F",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.5,
   "yaw": 37.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 10.79
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3C05B2FA_2A98_FC46_41BE_226EF3DD8C47, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_32214DC9_2A89_C442_41C2_11CC3B116C93, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.5,
   "image": "this.AnimatedImageResource_3FC3C9AA_2A97_CCC6_41A1_77A49CB45325",
   "pitch": 10.45,
   "yaw": 67.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3F3E8D04_2A88_C5C3_41A8_14A9325158B3",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.5,
   "yaw": 67.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 10.45
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3DF8C45E_2A9B_C47E_41BA_DBA78E94CF86, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_3220ADCA_2A89_C446_41B7_F8CA28D05FEE, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.6,
   "image": "this.AnimatedImageResource_3FC3F9AA_2A97_CCC6_41B7_145BDA011595",
   "pitch": 6.33,
   "yaw": 113.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3F18B98E_2A88_CCDE_41BD_9840ADB70442",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.6,
   "yaw": 113.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 6.33
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3DB92809_2A99_CBC2_41B9_146965A4433F, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_32239DCB_2A89_C446_41C0_214506A0C4F1, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.54,
   "image": "this.AnimatedImageResource_3FC419AA_2A97_CCC6_41B8_25C470131386",
   "pitch": 9.08,
   "yaw": -103.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3F32A214_2A88_5FC2_41AA_7D10D44A82A5",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.54,
   "yaw": -103.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 9.08
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3DC22810_2A98_4BC2_41A9_197C70818C70, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_32237DCC_2A89_C442_41A6_C638D8B893A2, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.65,
   "image": "this.AnimatedImageResource_3FC2A9AA_2A97_CCC6_41C1_14619DD33286",
   "pitch": 0.15,
   "yaw": -134.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3F47B3E5_2A89_BC42_4182_994DD11A1D92",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.65,
   "yaw": -134.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.15
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A, this.camera_1CA213DD_2C07_E147_41C5_ABC7E473FFFB); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 16.55,
   "image": "this.AnimatedImageResource_3C29A948_2AB9_CC42_41C0_9F4D0B0C4309",
   "pitch": -28.74,
   "yaw": -92.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3B41094F_2A88_CC5E_41B4_F8E7C94654B0",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.55,
   "yaw": -92.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -28.74
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_20959DCB_2A89_C445_41A0_18E24388B9F8, this.camera_1CB613C5_2C07_E147_41BE_D6CD3D30EAB6); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 16.1,
   "image": "this.AnimatedImageResource_3C280948_2AB9_CC42_41AE_19CAA2BB3EC5",
   "pitch": -31.49,
   "yaw": 60.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_38B35C9F_2A88_C4FE_41A8_5E98FFC3DF13",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.1,
   "yaw": 60.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -31.49
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_20A785B6_2A89_C4CF_4185_464B122500CE, this.camera_1CC9C3A4_2C07_E1C5_41BA_74FF1F59D4A6); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 16.33,
   "image": "this.AnimatedImageResource_3C285948_2AB9_CC42_41A8_20D864FC8619",
   "pitch": -30.11,
   "yaw": 170.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3817AE03_2A88_47C5_41C4_E69A8012E8CC",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.33,
   "yaw": 170.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -30.11
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3CC12876_2A88_4C4E_41A5_F6C8EDB7E92C, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_322FBDBF_2A89_C43E_417E_13B2D3D1C95F, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.41,
   "image": "this.AnimatedImageResource_3FC1C9A7_2A97_CCCE_41A7_406CF4F8750C",
   "pitch": 13.54,
   "yaw": 76.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3FEF95E1_2A88_4445_41C3_896396CACF0B",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.41,
   "yaw": 76.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 13.54
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3D75EC05_2A88_4BCD_41B1_DC517A3F9137, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_322EEDC0_2A89_C442_4198_231154046602, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.44,
   "image": "this.AnimatedImageResource_3FC1F9A7_2A97_CCCE_41BB_83BBF59D3175",
   "pitch": 12.51,
   "yaw": 105.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3F194DF5_2A88_4442_41C4_179A69EEC3F0",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.44,
   "yaw": 105.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 12.51
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3DD47D33_2A9B_C5C6_41A2_980B96A72CAE, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_322E4DC1_2A89_C442_41C0_328A07A4E6F9, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.41,
   "image": "this.AnimatedImageResource_3FC219A7_2A97_CCCE_41B6_785CD993A202",
   "pitch": 13.54,
   "yaw": 129.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3CEE6807_2A88_4BCE_41BE_37D6C0A921C1",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.41,
   "yaw": 129.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 13.54
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3C0261F3_2A98_7C45_41B6_885578EF15C2, {'rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingTop':5,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'borderColor':'#000000','backgroundOpacity':0.3,'iconWidth':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0}, this.ImageResource_3229ADC2_2A89_C446_41B4_8EA306190586, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.27,
   "image": "this.AnimatedImageResource_3FC249A7_2A97_CCCE_41C4_15A6335B6575",
   "pitch": 16.97,
   "yaw": 149.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3C616871_2A8F_CC42_41B5_91B6A67DFE5F",
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.27,
   "yaw": 149.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 16.97
  }
 ]
},
{
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "left": "0%",
 "paddingBottom": 0,
 "id": "Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
 "right": "0%",
 "shadow": false,
 "url": "skin/Image_9511127C_9B79_D2C1_41D8_D080B87BFD84.png",
 "maxWidth": 3000,
 "backgroundOpacity": 0,
 "class": "Image",
 "horizontalAlign": "center",
 "maxHeight": 2,
 "bottom": 53,
 "height": 2,
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "data": {
  "name": "white line"
 },
 "scaleMode": "fit_outside"
},
{
 "borderSize": 0,
 "verticalAlign": "middle",
 "children": [
  "this.Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
  "this.Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
  "this.Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
  "this.Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
  "this.Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5"
 ],
 "paddingTop": 0,
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "id": "Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
 "width": 1199,
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "class": "Container",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "bottom": "0%",
 "overflow": "scroll",
 "height": 51,
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 30,
 "data": {
  "name": "-button set container"
 },
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "contentOpaque": false
},
{
 "borderSize": 0,
 "verticalAlign": "middle",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "gap": 10,
 "right": "0%",
 "width": 110,
 "shadow": false,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "class": "Container",
 "horizontalAlign": "center",
 "overflow": "visible",
 "top": "0%",
 "scrollBarWidth": 10,
 "height": 110,
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "data": {
  "name": "button menu sup"
 },
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "contentOpaque": false
},
{
 "borderSize": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "verticalAlign": "top",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "gap": 3,
 "right": "0%",
 "width": "91.304%",
 "shadow": false,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "class": "Container",
 "horizontalAlign": "center",
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "bottom": "0%",
 "height": "85.959%",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "data": {
  "name": "-button set"
 },
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "contentOpaque": false
},
{
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "left": 5,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "id": "Container_14FBF305_1BED_F1EE_419A_A9F069FE2B28",
 "width": 10,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "shadow": true,
 "shadowBlurRadius": 10,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "class": "Container",
 "gap": 10,
 "horizontalAlign": "left",
 "overflow": "scroll",
 "top": 24,
 "scrollBarWidth": 10,
 "height": 90,
 "borderRadius": 0,
 "backgroundColor": [
  "#A67C52"
 ],
 "shadowOpacity": 0.5,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "layout": "absolute",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "data": {
  "name": "color block"
 },
 "scrollBarOpacity": 0.5,
 "visible": false,
 "scrollBarColor": "#000000",
 "contentOpaque": false
},
{
 "borderSize": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "left": 0,
 "textShadowBlurRadius": 10,
 "textShadowVerticalLength": 0,
 "paddingBottom": 0,
 "id": "Label_14FBC305_1BED_F1EE_41B3_DAC14B1EE44E",
 "width": 800,
 "shadow": false,
 "fontFamily": "Cinzel Bold",
 "textDecoration": "none",
 "text": "PURA DESA PUSEH",
 "class": "Label",
 "horizontalAlign": "left",
 "top": 5,
 "textShadowHorizontalLength": 0,
 "backgroundOpacity": 0,
 "height": 80,
 "borderRadius": 0,
 "textShadowColor": "#000000",
 "fontSize": 75,
 "paddingRight": 0,
 "propagateClick": true,
 "textShadowOpacity": 1,
 "minHeight": 1,
 "fontStyle": "normal",
 "paddingLeft": 0,
 "data": {
  "name": "text 1"
 },
 "minWidth": 1,
 "fontWeight": "bold",
 "fontColor": "#FFFFFF"
},
{
 "borderSize": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "left": 4,
 "textShadowBlurRadius": 10,
 "textShadowVerticalLength": 0,
 "paddingBottom": 0,
 "id": "Label_14F82305_1BED_F1EE_41AD_7A6E6AD00A22",
 "width": 330,
 "shadow": false,
 "fontFamily": "Cinzel Bold",
 "textDecoration": "none",
 "text": "DESA ADAT LAPLAPAN",
 "class": "Label",
 "horizontalAlign": "left",
 "top": 88,
 "textShadowHorizontalLength": 0,
 "backgroundOpacity": 0,
 "height": 37,
 "borderRadius": 0,
 "textShadowColor": "#000000",
 "fontSize": 26,
 "paddingRight": 0,
 "propagateClick": true,
 "textShadowOpacity": 1,
 "minHeight": 1,
 "fontStyle": "normal",
 "paddingLeft": 0,
 "data": {
  "name": "text 2"
 },
 "minWidth": 1,
 "fontWeight": "normal",
 "fontColor": "#FFFFFF"
},
{
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "right": "15%",
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "shadow": true,
 "shadowBlurRadius": 25,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "class": "Container",
 "gap": 10,
 "horizontalAlign": "center",
 "overflow": "visible",
 "top": "7%",
 "scrollBarWidth": 10,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "layout": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "data": {
  "name": "Global"
 },
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "contentOpaque": false
},
{
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.Image_0840F7A1_2B9B_C4C2_41B4_0DF6A8D1D378",
  "this.MapViewer"
 ],
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "right": "15%",
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "shadow": true,
 "shadowBlurRadius": 25,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "class": "Container",
 "gap": 10,
 "horizontalAlign": "center",
 "overflow": "visible",
 "top": "7%",
 "scrollBarWidth": 10,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "layout": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "data": {
  "name": "Global"
 },
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "contentOpaque": false
},
{
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "backgroundColorDirection": "vertical",
 "paddingTop": 10,
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 10,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "right": "15%",
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "shadow": true,
 "shadowBlurRadius": 25,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "class": "Container",
 "gap": 10,
 "horizontalAlign": "center",
 "overflow": "visible",
 "top": "7%",
 "scrollBarWidth": 10,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "paddingRight": 10,
 "layout": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "paddingLeft": 10,
 "data": {
  "name": "Global"
 },
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "contentOpaque": false
},
{
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "children": [
  "this.Container_06D59689_2C0F_E3CE_41BB_39E3F98FD45D",
  "this.Container_06D5F689_2C0F_E3CE_41C2_4069331C3B60"
 ],
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "left": "10%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "id": "Container_06D58689_2C0F_E3CE_41AA_39F9F5E8E666",
 "right": "10%",
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "shadow": true,
 "shadowBlurRadius": 25,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "class": "Container",
 "gap": 10,
 "horizontalAlign": "left",
 "overflow": "scroll",
 "top": "5%",
 "scrollBarWidth": 10,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "data": {
  "name": "Global"
 },
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "contentOpaque": false
},
{
 "borderSize": 0,
 "verticalAlign": "top",
 "children": [
  "this.IconButton_06D4B689_2C0F_E3CE_41C4_D9C4B94DB063"
 ],
 "paddingTop": 20,
 "left": "10%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "id": "Container_06D4A689_2C0F_E3CE_41C4_0F8430167925",
 "right": "10%",
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "class": "Container",
 "layout": "vertical",
 "horizontalAlign": "right",
 "overflow": "visible",
 "top": "5%",
 "scrollBarWidth": 10,
 "bottom": "80%",
 "borderRadius": 0,
 "paddingRight": 20,
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "data": {
  "name": "Container X global"
 },
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "contentOpaque": false
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_3FC4A9AD_2A97_CCC2_41C1_3B51683A7494",
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC4C9AE_2A97_CCDE_41C4_AA8EE27E8E5D",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_2095AFAB_2A89_C4C6_41B4_9D6F992B6747_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC4F9AE_2A97_CCDE_41C4_EDA35AAB867A",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_3FC369AC_2A97_CCC2_41C3_8688D120E0D1",
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_3FC389AC_2A97_CCC2_41C4_41BB224D0642",
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_3FC3A9AC_2A97_CCC2_4180_D8D3814E4DE7",
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC3D9AC_2A97_CCC2_41A3_61DBBC13467B",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC409AD_2A97_CCC2_41C4_D86D05370CFD",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC429AD_2A97_CCC2_41BC_E691D51AB51E",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC449AD_2A97_CCC2_41C3_2904BECFCB49",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20B107A3_2A89_C4C5_41C1_C19EE476A552_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC489AD_2A97_CCC2_41A1_6F76A16C2B0F",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_3FDF79A1_2A97_CCC2_41B0_1EBED029338F",
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_3FDF99A1_2A97_CCC2_41C5_2844E093240A",
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20A5F1FF_2A88_5C3E_4190_F7414DDD4F58_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FDFB9A2_2A97_CCC6_41C4_46E189BF6835",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_3FC2D9AB_2A97_CCC6_41B6_9F677E4FF20A",
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_3FC2F9AB_2A97_CCC6_41A7_3E7379E6F1CF",
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC319AB_2A97_CCC6_41B6_5C59A4996BE2",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20959DCB_2A89_C445_41A0_18E24388B9F8_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC339AB_2A97_CCC6_41A5_5587055C822D",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_3FC089A4_2A97_CCC2_41C1_D47F5E7FB2CE",
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_3FC0A9A5_2A97_CCC2_4171_607F0392373A",
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_3FC0C9A5_2A97_CCC2_41C0_6F94156925B8",
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC0F9A5_2A97_CCC2_41B5_FDE050DB61DF",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC119A5_2A97_CCC2_41A5_2A29B56B46FB",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC139A6_2A97_CCCE_41C4_3D64F8143423",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20948B97_2A88_4CCE_41B6_F6EA62B7693A_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC169A6_2A97_CCCE_41BD_7C8E856882E3",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_3FC269A8_2A97_CCC2_419B_DB692AF448C2",
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_3FC289A8_2A97_CCC2_41A7_69F7F61D2E4C",
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_3FC2A9A8_2A97_CCC2_4179_F03A47A2650A",
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC2D9A8_2A97_CCC2_41C0_434DD5C124B6",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC2F9A9_2A97_CCC2_4171_A5BD66839565",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC329A9_2A97_CCC2_41A9_A64E16043A72",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_324A9DA7_2A89_C4CE_41BC_6C985E87A576",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20948DAA_2A88_44C6_41B6_795CC44C0821_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_32826711_2B78_C5C2_41B0_949DD6B92DDB",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_21A03FED_2A88_C442_41A9_0C2301298780_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_3FDE29A0_2A97_CCC2_41A4_C7B903673712",
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_3FDEE9A0_2A97_CCC2_4167_3E9772AEEAC8",
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_3FDF09A0_2A97_CCC2_41B9_760F0924C725",
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FDF29A1_2A97_CCC2_41C5_2A89A25911F5",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_2097E957_2A88_4C4D_414F_340791750382_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FDF49A1_2A97_CCC2_41C3_E6E60EC946BF",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_3FC009A3_2A97_CCC6_41B6_50954E4FF888",
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_3FC039A4_2A97_CCC2_4195_C1948781E693",
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20B9F2CE_2A88_7C5E_41C3_CD2FCB2B0878_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC069A4_2A97_CCC2_41BF_8C94B60E82A8",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_3FDFE9A2_2A97_CCC6_41C1_68B85393412F",
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_3FC009A2_2A97_CCC6_41C1_6423C8915EF0",
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC029A2_2A97_CCC6_41B6_6A8EB2AEE5B1",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC049A3_2A97_CCC6_41C0_4A40A3BD403C",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_209489EF_2A88_4C5D_41C2_2CA255DEFA39_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3320CB34_2AB8_4DC2_41A0_54737EEDE5FE",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_3FC359A9_2A97_CCC2_41C0_0CE500AF63E3",
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_3FC379A9_2A97_CCC2_41AC_B591E72D72B2",
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC399AA_2A97_CCC6_41B8_93DB92BFF4DA",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC3C9AA_2A97_CCC6_41A1_77A49CB45325",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC3F9AA_2A97_CCC6_41B7_145BDA011595",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC419AA_2A97_CCC6_41B8_25C470131386",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20A785B6_2A89_C4CF_4185_464B122500CE_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC2A9AA_2A97_CCC6_41C1_14619DD33286",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_3C29A948_2AB9_CC42_41C0_9F4D0B0C4309",
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_3C280948_2AB9_CC42_41AE_19CAA2BB3EC5",
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "rowCount": 3,
 "id": "AnimatedImageResource_3C285948_2AB9_CC42_41A8_20D864FC8619",
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC1C9A7_2A97_CCCE_41A7_406CF4F8750C",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC1F9A7_2A97_CCCE_41BB_83BBF59D3175",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC219A7_2A97_CCCE_41B6_785CD993A202",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_20A713E2_2A88_5C46_4196_1A2305C176EA_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_3FC249A7_2A97_CCCE_41C4_15A6335B6575",
 "frameDuration": 41
},
{
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "pressedFontColor": "#000000",
 "paddingBottom": 0,
 "id": "Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
 "backgroundColorDirection": "vertical",
 "width": 120,
 "shadowColor": "#000000",
 "shadow": false,
 "shadowBlurRadius": 15,
 "fontFamily": "Cinzel Bold",
 "textDecoration": "none",
 "shadowSpread": 1,
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "backgroundOpacity": 0,
 "class": "Button",
 "gap": 5,
 "horizontalAlign": "center",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 0,
 "height": 40,
 "borderRadius": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": 14,
 "paddingRight": 0,
 "layout": "horizontal",
 "pressedBackgroundOpacity": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "iconHeight": 0,
 "label": "BERANDA",
 "fontStyle": "normal",
 "rollOverBackgroundOpacity": 0,
 "click": "this.openLink('https://virtualtour.haga.my.id/', '_blank')",
 "rollOverShadow": false,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "rollOverFontColor": "#DB9B4D",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "minWidth": 1,
 "data": {
  "name": "Button house info"
 },
 "fontWeight": "bold",
 "cursor": "hand",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "fontColor": "#FFFFFF"
},
{
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "pressedFontColor": "#000000",
 "paddingBottom": 0,
 "id": "Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
 "backgroundColorDirection": "vertical",
 "width": 140,
 "shadowColor": "#000000",
 "shadow": false,
 "shadowBlurRadius": 15,
 "fontFamily": "Cinzel Bold",
 "textDecoration": "none",
 "shadowSpread": 1,
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "backgroundOpacity": 0,
 "class": "Button",
 "gap": 5,
 "horizontalAlign": "center",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "height": 40,
 "borderRadius": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 14,
 "paddingRight": 0,
 "layout": "horizontal",
 "pressedBackgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "iconHeight": 32,
 "label": "VIRTUAL TOUR",
 "fontStyle": "normal",
 "rollOverBackgroundOpacity": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "rollOverFontColor": "#DB9B4D",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "minWidth": 1,
 "data": {
  "name": "Button panorama list"
 },
 "fontWeight": "bold",
 "cursor": "hand",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "fontColor": "#FFFFFF"
},
{
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "pressedFontColor": "#000000",
 "paddingBottom": 0,
 "id": "Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
 "backgroundColorDirection": "vertical",
 "width": 100,
 "shadowColor": "#000000",
 "shadow": false,
 "shadowBlurRadius": 15,
 "fontFamily": "Cinzel Bold",
 "textDecoration": "none",
 "shadowSpread": 1,
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "backgroundOpacity": 0,
 "class": "Button",
 "gap": 5,
 "horizontalAlign": "center",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "height": 40,
 "borderRadius": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 14,
 "paddingRight": 0,
 "layout": "horizontal",
 "pressedBackgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "iconHeight": 32,
 "label": "LOKASI",
 "fontStyle": "normal",
 "rollOverBackgroundOpacity": 0,
 "click": "this.setComponentVisibility(this.Container_06D48689_2C0F_E3CE_41AC_C32EFC463518, true, 0, null, null, false)",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "rollOverFontColor": "#DB9B4D",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "minWidth": 1,
 "data": {
  "name": "Button location"
 },
 "fontWeight": "bold",
 "cursor": "hand",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "fontColor": "#FFFFFF"
},
{
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "pressedFontColor": "#000000",
 "paddingBottom": 0,
 "id": "Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
 "backgroundColorDirection": "vertical",
 "width": 113,
 "shadowColor": "#000000",
 "shadow": false,
 "shadowBlurRadius": 15,
 "fontFamily": "Cinzel Bold",
 "textDecoration": "none",
 "shadowSpread": 1,
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "backgroundOpacity": 0,
 "class": "Button",
 "gap": 5,
 "horizontalAlign": "center",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "height": 40,
 "borderRadius": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 14,
 "paddingRight": 0,
 "layout": "horizontal",
 "pressedBackgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "iconHeight": 32,
 "label": "DENAH",
 "fontStyle": "normal",
 "rollOverBackgroundOpacity": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "rollOverFontColor": "#DB9B4D",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "minWidth": 1,
 "data": {
  "name": "Button floorplan"
 },
 "fontWeight": "bold",
 "cursor": "hand",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "fontColor": "#FFFFFF"
},
{
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "pressedFontColor": "#000000",
 "paddingBottom": 0,
 "id": "Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5",
 "backgroundColorDirection": "vertical",
 "width": 122,
 "shadowColor": "#000000",
 "shadow": false,
 "shadowBlurRadius": 15,
 "fontFamily": "Cinzel Bold",
 "textDecoration": "none",
 "shadowSpread": 1,
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "backgroundOpacity": 0,
 "class": "Button",
 "gap": 5,
 "horizontalAlign": "center",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "height": 40,
 "borderRadius": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 14,
 "paddingRight": 0,
 "layout": "horizontal",
 "pressedBackgroundOpacity": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "iconHeight": 32,
 "label": "GALERI",
 "fontStyle": "normal",
 "rollOverBackgroundOpacity": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "rollOverFontColor": "#DB9B4D",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "minWidth": 1,
 "data": {
  "name": "Button photoalbum"
 },
 "fontWeight": "bold",
 "cursor": "hand",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "fontColor": "#FFFFFF"
},
{
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "transparencyActive": true,
 "paddingBottom": 0,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "shadow": false,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "horizontalAlign": "center",
 "maxHeight": 60,
 "height": 60,
 "borderRadius": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 1,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "paddingLeft": 0,
 "data": {
  "name": "image button menu"
 },
 "cursor": "hand",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png"
},
{
 "borderSize": 0,
 "verticalAlign": "top",
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "gap": 10,
 "width": "100%",
 "shadow": false,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "horizontalAlign": "left",
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": 90,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "data": {
  "name": "header"
 },
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "contentOpaque": false
},
{
 "paddingTop": 10,
 "paddingBottom": 70,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "gap": 26,
 "itemThumbnailBorderRadius": 0,
 "width": "100%",
 "selectedItemLabelFontWeight": "bold",
 "itemMode": "normal",
 "itemLabelFontStyle": "normal",
 "itemOpacity": 1,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontFamily": "Times New Roman",
 "rollOverItemThumbnailShadowColor": "#987B55",
 "scrollBarMargin": 2,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "backgroundOpacity": 0,
 "selectedItemLabelFontColor": "#987B55",
 "horizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "scrollBarWidth": 10,
 "itemVerticalAlign": "top",
 "height": "100%",
 "itemMinHeight": 50,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "itemPaddingLeft": 3,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "propagateClick": true,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "minHeight": 1,
 "selectedItemThumbnailShadow": true,
 "itemMinWidth": 50,
 "itemBackgroundOpacity": 0,
 "paddingLeft": 70,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "middle",
 "itemPaddingTop": 3,
 "scrollBarColor": "#987B55",
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "itemThumbnailShadow": false,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "itemLabelGap": 7,
 "itemThumbnailHeight": 125,
 "shadow": false,
 "itemHeight": 156,
 "itemLabelTextDecoration": "none",
 "itemLabelFontWeight": "bold",
 "itemThumbnailWidth": 220,
 "class": "ThumbnailGrid",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "borderRadius": 5,
 "rollOverItemThumbnailShadow": true,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "paddingRight": 70,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemLabelFontColor": "#666666",
 "itemBackgroundColorDirection": "vertical",
 "rollOverItemLabelFontColor": "#987B55",
 "itemHorizontalAlign": "center",
 "data": {
  "name": "ThumbnailList5161"
 },
 "itemPaddingRight": 3,
 "itemPaddingBottom": 3,
 "itemThumbnailOpacity": 1,
 "itemMaxHeight": 1000,
 "itemWidth": 220,
 "itemMaxWidth": 1000
},
{
 "borderSize": 0,
 "verticalAlign": "top",
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
  "this.Label_3CBFDADE_2C02_E345_41C1_F76EFBA1CF7D"
 ],
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "gap": 10,
 "width": "100%",
 "shadow": false,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "horizontalAlign": "left",
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": 78,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "data": {
  "name": "header"
 },
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "contentOpaque": false
},
{
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "id": "Image_0840F7A1_2B9B_C4C2_41B4_0DF6A8D1D378",
 "width": "99.91%",
 "shadow": false,
 "url": "skin/Image_0840F7A1_2B9B_C4C2_41B4_0DF6A8D1D378.jpg",
 "maxWidth": 1464,
 "backgroundOpacity": 0,
 "class": "Image",
 "horizontalAlign": "center",
 "maxHeight": 819,
 "height": "83.263%",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "minHeight": 1,
 "data": {
  "name": "Image57658"
 },
 "minWidth": 1,
 "scaleMode": "fit_inside"
},
{
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "paddingTop": 0,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "id": "MapViewer",
 "toolTipFontWeight": "normal",
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "width": "100%",
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial Black",
 "toolTipFontStyle": "normal",
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "minHeight": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "paddingLeft": 0,
 "toolTipFontColor": "#606060",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "minWidth": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "toolTipPaddingRight": 6,
 "vrPointerSelectionTime": 2000,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "shadow": false,
 "playbackBarOpacity": 1,
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "class": "ViewerArea",
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "data": {
  "name": "Floor Plan"
 },
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "50px",
 "visible": false,
 "progressBorderColor": "#000000",
 "progressBackgroundColor": [
  "#FFFFFF"
 ]
},
{
 "borderSize": 0,
 "paddingLeft": 0,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "verticalAlign": "top",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "gap": 10,
 "width": "100%",
 "shadow": false,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "horizontalAlign": "left",
 "overflow": "visible",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "height": "100%",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "data": {
  "name": "Container photo"
 },
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "contentOpaque": false
},
{
 "borderSize": 0,
 "paddingLeft": 10,
 "children": [
  "this.WebFrame_06D5E689_2C0F_E3CE_41C5_5FDBE7C560AD"
 ],
 "backgroundColorDirection": "vertical",
 "paddingTop": 10,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 10,
 "verticalAlign": "middle",
 "id": "Container_06D59689_2C0F_E3CE_41BB_39E3F98FD45D",
 "gap": 10,
 "width": "70%",
 "shadow": false,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "class": "Container",
 "horizontalAlign": "center",
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "height": "100%",
 "paddingRight": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "data": {
  "name": "-left"
 },
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "contentOpaque": false
},
{
 "borderSize": 0,
 "paddingLeft": 40,
 "children": [
  "this.Container_06D5D689_2C0F_E3CE_418C_8020AAEAB21D",
  "this.Container_06D42689_2C0F_E3CE_41C0_73FBD0E3D3D8",
  "this.Container_06D45689_2C0F_E3CE_41C2_6B92C9264BC3"
 ],
 "backgroundColorDirection": "vertical",
 "paddingTop": 40,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 20,
 "verticalAlign": "top",
 "id": "Container_06D5F689_2C0F_E3CE_41C2_4069331C3B60",
 "gap": 0,
 "width": "30%",
 "shadow": false,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "class": "Container",
 "horizontalAlign": "left",
 "overflow": "visible",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "height": "100%",
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "data": {
  "name": "-right"
 },
 "minWidth": 400,
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "contentOpaque": false
},
{
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "transparencyActive": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "id": "IconButton_06D4B689_2C0F_E3CE_41C4_D9C4B94DB063",
 "width": "25%",
 "shadow": false,
 "iconURL": "skin/IconButton_06D4B689_2C0F_E3CE_41C4_D9C4B94DB063.png",
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "horizontalAlign": "center",
 "maxHeight": 60,
 "height": "75%",
 "borderRadius": 0,
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_06D4B689_2C0F_E3CE_41C4_D9C4B94DB063_rollover.png",
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 50,
 "click": "this.setComponentVisibility(this.Container_06D48689_2C0F_E3CE_41AC_C32EFC463518, false, 0, null, null, false)",
 "data": {
  "name": "X"
 },
 "minWidth": 50,
 "cursor": "hand",
 "pressedIconURL": "skin/IconButton_06D4B689_2C0F_E3CE_41C4_D9C4B94DB063_pressed.png"
},
{
 "borderSize": 0,
 "paddingTop": 36,
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "width": "77.115%",
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "top": "0%",
 "scrollBarWidth": 10,
 "height": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 100,
 "paddingLeft": 80,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:3.62vh;font-family:'Otama.ep';\"><B>PANORAMA LIST:</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000"
},
{
 "minWidth": 50,
 "borderSize": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "transparencyActive": true,
 "paddingBottom": 0,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "right": 20,
 "width": 60,
 "shadow": false,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.png",
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "horizontalAlign": "right",
 "top": 20,
 "maxHeight": 60,
 "borderRadius": 0,
 "mode": "push",
 "height": 60,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.png",
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 50,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingLeft": 0,
 "data": {
  "name": "X"
 },
 "cursor": "hand",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.png"
},
{
 "borderSize": 0,
 "paddingTop": 36,
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "width": "77.115%",
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "top": "0%",
 "scrollBarWidth": 10,
 "height": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 100,
 "paddingLeft": 80,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:3.62vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "visible": false,
 "scrollBarColor": "#000000"
},
{
 "minWidth": 50,
 "borderSize": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "transparencyActive": true,
 "paddingBottom": 0,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "right": 20,
 "width": 60,
 "shadow": false,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.png",
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "horizontalAlign": "right",
 "top": 20,
 "maxHeight": 60,
 "borderRadius": 0,
 "mode": "push",
 "height": 60,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.png",
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 50,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "paddingLeft": 0,
 "data": {
  "name": "IconButton54739"
 },
 "cursor": "hand",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.png"
},
{
 "borderSize": 0,
 "paddingTop": 0,
 "left": "29%",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "id": "Label_3CBFDADE_2C02_E345_41C1_F76EFBA1CF7D",
 "right": "27.49%",
 "shadow": false,
 "fontFamily": "Arial CE",
 "textDecoration": "none",
 "text": "DENAH PURA",
 "class": "Label",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "bottom": "0%",
 "borderRadius": 0,
 "height": "73.141%",
 "fontSize": "7.3vmin",
 "paddingRight": 0,
 "propagateClick": false,
 "minHeight": 40,
 "fontStyle": "normal",
 "paddingLeft": 0,
 "data": {
  "name": "Label4344"
 },
 "minWidth": 40,
 "fontWeight": "normal",
 "fontColor": "#000000"
},
{
 "minWidth": 50,
 "borderSize": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "transparencyActive": true,
 "paddingBottom": 0,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "right": 20,
 "width": 60,
 "shadow": false,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.png",
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "horizontalAlign": "right",
 "top": 20,
 "maxHeight": 60,
 "borderRadius": 0,
 "mode": "push",
 "height": 60,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.png",
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 50,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingLeft": 0,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.png"
},
{
 "minWidth": 1,
 "borderSize": 0,
 "scrollEnabled": true,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "left": "0%",
 "paddingBottom": 0,
 "id": "WebFrame_06D5E689_2C0F_E3CE_41C5_5FDBE7C560AD",
 "right": "0%",
 "shadow": false,
 "url": "https://maps.google.com/maps?output=embed&center=-8.5017407,115.2788926&z=16&q=F7XH%2B8H2+Pura+Desa+Puseh+Laplapan,+Jalan+Laplapan,+Ubud,+Petulu,+Kecamatan+Ubud,+Kabupaten+Gianyar,+Bali+80552",
 "backgroundOpacity": 1,
 "class": "WebFrame",
 "insetBorder": false,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "data": {
  "name": "WebFrame5113"
 }
},
{
 "borderSize": 0,
 "verticalAlign": "top",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "id": "Container_06D5D689_2C0F_E3CE_418C_8020AAEAB21D",
 "gap": 0,
 "width": "100%",
 "shadow": false,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "horizontalAlign": "right",
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": 60,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 0,
 "paddingLeft": 0,
 "data": {
  "name": "Container space"
 },
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "contentOpaque": false
},
{
 "borderSize": 0,
 "paddingLeft": 0,
 "children": [
  "this.Container_06D43689_2C0F_E3CE_41B5_4C34369DF9D3",
  "this.Container_06D46689_2C0F_E3CE_41A2_1ED101B2775A",
  "this.HTMLText_06D47689_2C0F_E3CE_41A1_C65CA76DCEDD",
  "this.Button_06D44689_2C0F_E3CE_417D_B1D89A2DC791"
 ],
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 30,
 "verticalAlign": "top",
 "id": "Container_06D42689_2C0F_E3CE_41C0_73FBD0E3D3D8",
 "gap": 10,
 "width": "100%",
 "shadow": false,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "horizontalAlign": "left",
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "height": "100%",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 520,
 "data": {
  "name": "Container text"
 },
 "minWidth": 100,
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "contentOpaque": false
},
{
 "borderSize": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "id": "Container_06D45689_2C0F_E3CE_41C2_6B92C9264BC3",
 "gap": 10,
 "width": 370,
 "shadow": false,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "horizontalAlign": "left",
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": 40,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "data": {
  "name": "Container space"
 },
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical"
},
{
 "borderSize": 0,
 "verticalAlign": "top",
 "children": [
  "this.HTMLText_06D40689_2C0F_E3CE_41B4_DFB7B37E0094",
  "this.HTMLText_06D41689_2C0F_E3CE_41BC_F7EA552B645E"
 ],
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "id": "Container_06D43689_2C0F_E3CE_41B5_4C34369DF9D3",
 "gap": 10,
 "width": "100%",
 "shadow": false,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "horizontalAlign": "left",
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": 130,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "data": {
  "name": "Container header location"
 },
 "minWidth": 1,
 "scrollBarOpacity": 0,
 "scrollBarColor": "#000000",
 "contentOpaque": false
},
{
 "borderSize": 0,
 "verticalAlign": "top",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "id": "Container_06D46689_2C0F_E3CE_41A2_1ED101B2775A",
 "gap": 10,
 "width": "100%",
 "shadow": false,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "class": "Container",
 "horizontalAlign": "left",
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": 7,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "data": {
  "name": "line"
 },
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "contentOpaque": false
},
{
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 20,
 "id": "HTMLText_06D47689_2C0F_E3CE_41A1_C65CA76DCEDD",
 "width": "100%",
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "height": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 1,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:2.6vh;font-family:'Antonio';\"><B>F7XH+8H2, Jalan Laplapan, Ubud, Petulu, Kecamatan Ubud, Kabupaten Gianyar, Bali 80552</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText"
 },
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#987B55"
},
{
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "id": "Button_06D44689_2C0F_E3CE_417D_B1D89A2DC791",
 "fontFamily": "Antonio",
 "width": 207,
 "shadowColor": "#000000",
 "shadow": false,
 "shadowBlurRadius": 6,
 "textDecoration": "none",
 "shadowSpread": 1,
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "backgroundOpacity": 0.7,
 "class": "Button",
 "gap": 5,
 "horizontalAlign": "center",
 "iconWidth": 32,
 "height": 59,
 "borderRadius": 0,
 "mode": "push",
 "backgroundColor": [
  "#987B55"
 ],
 "fontSize": 30,
 "paddingRight": 0,
 "layout": "horizontal",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "iconHeight": 32,
 "label": "BOOK NOW",
 "fontStyle": "normal",
 "rollOverBackgroundOpacity": 1,
 "click": "this.openLink('http://www.loremipsum.com', '_blank')",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "data": {
  "name": "Button31015"
 },
 "minWidth": 1,
 "visible": false,
 "fontWeight": "bold",
 "backgroundColorDirection": "vertical",
 "cursor": "hand",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontColor": "#FFFFFF"
},
{
 "borderSize": 0,
 "paddingTop": 0,
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "id": "HTMLText_06D40689_2C0F_E3CE_41B4_DFB7B37E0094",
 "right": "0%",
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "top": "0%",
 "scrollBarWidth": 10,
 "height": 85,
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:5.21vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText23803"
 },
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#BBD149"
},
{
 "borderSize": 0,
 "paddingTop": 0,
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "id": "HTMLText_06D41689_2C0F_E3CE_41BC_F7EA552B645E",
 "width": "100%",
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "bottom": 0,
 "height": 81.15,
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:33px;font-family:'Cinzel Bold';\"><B>PURA DESA PUSEH</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText24905"
 },
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#BBD149"
}],
 "height": "100%",
 "propagateClick": true,
 "minHeight": 20,
 "mobileMipmappingEnabled": false,
 "mouseWheelEnabled": true,
 "paddingLeft": 0,
 "vrPolyfillScale": 0.5,
 "data": {
  "name": "Player468"
 },
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "contentOpaque": false
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
