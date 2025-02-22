
if (typeof gdjs.evtsExt__InAppPurchase__OrderItem !== "undefined") {
  gdjs.evtsExt__InAppPurchase__OrderItem.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InAppPurchase__OrderItem = {};


gdjs.evtsExt__InAppPurchase__OrderItem.userFunc0xb2f350 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if(!window.CdvPurchase || !window.CdvPurchase.store) return;
const store = window.CdvPurchase.store;

const product = store.get(eventsFunctionContext.getArgument("id"));
const offer = product.getOffer();
offer.order();

};
gdjs.evtsExt__InAppPurchase__OrderItem.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InAppPurchase__OrderItem.userFunc0xb2f350(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InAppPurchase__OrderItem.func = function(runtimeScene, id, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("InAppPurchase"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("InAppPurchase"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "id") return id;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InAppPurchase__OrderItem.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__InAppPurchase__OrderItem.registeredGdjsCallbacks = [];