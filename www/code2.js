gdjs.StoreCode = {};
gdjs.StoreCode.localVariables = [];
gdjs.StoreCode.GDNewTiledSpriteObjects1= [];
gdjs.StoreCode.GDNewTiledSpriteObjects2= [];
gdjs.StoreCode.GDpresentationObjects1= [];
gdjs.StoreCode.GDpresentationObjects2= [];
gdjs.StoreCode.GDsupportTextObjects1= [];
gdjs.StoreCode.GDsupportTextObjects2= [];
gdjs.StoreCode.GDsupportBuyObjects1= [];
gdjs.StoreCode.GDsupportBuyObjects2= [];
gdjs.StoreCode.GDRedButtonWithGoldFrameObjects1= [];
gdjs.StoreCode.GDRedButtonWithGoldFrameObjects2= [];
gdjs.StoreCode.GDshopStatusObjects1= [];
gdjs.StoreCode.GDshopStatusObjects2= [];
gdjs.StoreCode.GDpurchasestxtObjects1= [];
gdjs.StoreCode.GDpurchasestxtObjects2= [];
gdjs.StoreCode.GDPurpleButtonWithStoneFrameObjects1= [];
gdjs.StoreCode.GDPurpleButtonWithStoneFrameObjects2= [];
gdjs.StoreCode.GDtableObjects1= [];
gdjs.StoreCode.GDtableObjects2= [];
gdjs.StoreCode.GDcoinIMGObjects1= [];
gdjs.StoreCode.GDcoinIMGObjects2= [];
gdjs.StoreCode.GDcoinstxtObjects1= [];
gdjs.StoreCode.GDcoinstxtObjects2= [];
gdjs.StoreCode.GDpurchase50coinsTXTObjects1= [];
gdjs.StoreCode.GDpurchase50coinsTXTObjects2= [];
gdjs.StoreCode.GDpurchase50coinsBtnObjects1= [];
gdjs.StoreCode.GDpurchase50coinsBtnObjects2= [];
gdjs.StoreCode.GDpurchase100coinsObjects1= [];
gdjs.StoreCode.GDpurchase100coinsObjects2= [];
gdjs.StoreCode.GDpurchase100coinsBTNObjects1= [];
gdjs.StoreCode.GDpurchase100coinsBTNObjects2= [];
gdjs.StoreCode.GDgiftcardObjects1= [];
gdjs.StoreCode.GDgiftcardObjects2= [];
gdjs.StoreCode.GDGoldenChickentxtObjects1= [];
gdjs.StoreCode.GDGoldenChickentxtObjects2= [];
gdjs.StoreCode.GDgoldenchickenbuyObjects1= [];
gdjs.StoreCode.GDgoldenchickenbuyObjects2= [];
gdjs.StoreCode.GDNewTextObjects1= [];
gdjs.StoreCode.GDNewTextObjects2= [];
gdjs.StoreCode.GDnoAdsBuyLifetimeObjects1= [];
gdjs.StoreCode.GDnoAdsBuyLifetimeObjects2= [];
gdjs.StoreCode.GDnoAdsSubscriptionObjects1= [];
gdjs.StoreCode.GDnoAdsSubscriptionObjects2= [];
gdjs.StoreCode.GDnoAdstxtObjects1= [];
gdjs.StoreCode.GDnoAdstxtObjects2= [];
gdjs.StoreCode.GDChicken3Objects1= [];
gdjs.StoreCode.GDChicken3Objects2= [];
gdjs.StoreCode.GDChicken4Objects1= [];
gdjs.StoreCode.GDChicken4Objects2= [];


gdjs.StoreCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("supportBuy"), gdjs.StoreCode.GDsupportBuyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StoreCode.GDsupportBuyObjects1.length;i<l;++i) {
    if ( gdjs.StoreCode.GDsupportBuyObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StoreCode.GDsupportBuyObjects1[k] = gdjs.StoreCode.GDsupportBuyObjects1[i];
        ++k;
    }
}
gdjs.StoreCode.GDsupportBuyObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__InAppPurchase__OrderItem.func(runtimeScene, "donation3euro", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithGoldFrame"), gdjs.StoreCode.GDRedButtonWithGoldFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StoreCode.GDRedButtonWithGoldFrameObjects1.length;i<l;++i) {
    if ( gdjs.StoreCode.GDRedButtonWithGoldFrameObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StoreCode.GDRedButtonWithGoldFrameObjects1[k] = gdjs.StoreCode.GDRedButtonWithGoldFrameObjects1[i];
        ++k;
    }
}
gdjs.StoreCode.GDRedButtonWithGoldFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__InAppPurchase__StoreReady.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("shopStatus"), gdjs.StoreCode.GDshopStatusObjects1);
{for(var i = 0, len = gdjs.StoreCode.GDshopStatusObjects1.length ;i < len;++i) {
    gdjs.StoreCode.GDshopStatusObjects1[i].getBehavior("Text").setText("Shop doesn't reply to App Store");
}
}{for(var i = 0, len = gdjs.StoreCode.GDshopStatusObjects1.length ;i < len;++i) {
    gdjs.StoreCode.GDshopStatusObjects1[i].setColor("255;0;0");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__InAppPurchase__StoreReady.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("shopStatus"), gdjs.StoreCode.GDshopStatusObjects1);
{for(var i = 0, len = gdjs.StoreCode.GDshopStatusObjects1.length ;i < len;++i) {
    gdjs.StoreCode.GDshopStatusObjects1[i].getBehavior("Text").setText("Shop loaded properly");
}
}{for(var i = 0, len = gdjs.StoreCode.GDshopStatusObjects1.length ;i < len;++i) {
    gdjs.StoreCode.GDshopStatusObjects1[i].setColor("255;255;255");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("purchasestxt"), gdjs.StoreCode.GDpurchasestxtObjects1);
{for(var i = 0, len = gdjs.StoreCode.GDpurchasestxtObjects1.length ;i < len;++i) {
    gdjs.StoreCode.GDpurchasestxtObjects1[i].getBehavior("Text").setText("Purchases: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("store", "purchasesvar", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("store", "purchasesvar", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{gdjs.evtsExt__InAppPurchase__FinalizePurchase.func(runtimeScene, "donation3euro", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame"), gdjs.StoreCode.GDPurpleButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StoreCode.GDPurpleButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.StoreCode.GDPurpleButtonWithStoneFrameObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StoreCode.GDPurpleButtonWithStoneFrameObjects1[k] = gdjs.StoreCode.GDPurpleButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.StoreCode.GDPurpleButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StoreCode.GDPurpleButtonWithStoneFrameObjects1 */
{for(var i = 0, len = gdjs.StoreCode.GDPurpleButtonWithStoneFrameObjects1.length ;i < len;++i) {
    gdjs.StoreCode.GDPurpleButtonWithStoneFrameObjects1[i].SetLabelText("Please revisit the shop.", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtsExt__InAppPurchase__FinalizePurchase.func(runtimeScene, "goldenchicken", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__InAppPurchase__FinalizePurchase.func(runtimeScene, "100coins", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__InAppPurchase__FinalizePurchase.func(runtimeScene, "50coins", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__InAppPurchase__FinalizePurchase.func(runtimeScene, "donation3euro", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("coinstxt"), gdjs.StoreCode.GDcoinstxtObjects1);
{gdjs.evtsExt__InAppPurchase__RegisterItem.func(runtimeScene, "50coins", "consumable", "ios-appstore", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__InAppPurchase__RegisterItem.func(runtimeScene, "100coins", "consumable", "ios-appstore", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__InAppPurchase__RegisterItem.func(runtimeScene, "goldenchicken", "non consumable", "ios-appstore", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__InAppPurchase__RegisterItem.func(runtimeScene, "noadssubscription", "paid subscription", "ios-appstore", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__InAppPurchase__RegisterItem.func(runtimeScene, "noadslifetime", "non consumable", "ios-appstore", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__InAppPurchase__FinalizeRegistration.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__InAppPurchase__WatchItemEvent.func(runtimeScene, "100coins", runtimeScene.getScene().getVariables().getFromIndex(2).getAsString(), "approved", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__InAppPurchase__WatchItemEvent.func(runtimeScene, "50coins", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), "approved", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__InAppPurchase__WatchItemEvent.func(runtimeScene, "donation3euro", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), "approved", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__InAppPurchase__WatchItemEvent.func(runtimeScene, "noadslifetime", runtimeScene.getScene().getVariables().getFromIndex(3).getAsString(), "approved", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__InAppPurchase__WatchItemEvent.func(runtimeScene, "noadssubscription", runtimeScene.getScene().getVariables().getFromIndex(3).getAsString(), "approved", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.StoreCode.GDcoinstxtObjects1.length ;i < len;++i) {
    gdjs.StoreCode.GDcoinstxtObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("purchase50coinsBtn"), gdjs.StoreCode.GDpurchase50coinsBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StoreCode.GDpurchase50coinsBtnObjects1.length;i<l;++i) {
    if ( gdjs.StoreCode.GDpurchase50coinsBtnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StoreCode.GDpurchase50coinsBtnObjects1[k] = gdjs.StoreCode.GDpurchase50coinsBtnObjects1[i];
        ++k;
    }
}
gdjs.StoreCode.GDpurchase50coinsBtnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__InAppPurchase__OrderItem.func(runtimeScene, "50coins", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(50);
}{gdjs.evtTools.storage.writeNumberInJSONFile("coinsVariable", "coinsVar", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}{gdjs.evtsExt__InAppPurchase__FinalizePurchase.func(runtimeScene, "50coins", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("store", "purchasesvar", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("purchase100coinsBTN"), gdjs.StoreCode.GDpurchase100coinsBTNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StoreCode.GDpurchase100coinsBTNObjects1.length;i<l;++i) {
    if ( gdjs.StoreCode.GDpurchase100coinsBTNObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StoreCode.GDpurchase100coinsBTNObjects1[k] = gdjs.StoreCode.GDpurchase100coinsBTNObjects1[i];
        ++k;
    }
}
gdjs.StoreCode.GDpurchase100coinsBTNObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__InAppPurchase__OrderItem.func(runtimeScene, "100coins", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(115);
}{gdjs.evtTools.storage.writeNumberInJSONFile("coinsVariable", "coinsVar", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}{gdjs.evtsExt__InAppPurchase__FinalizePurchase.func(runtimeScene, "100coins", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("store", "purchasesvar", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{gdjs.evtsExt__PopUp__Alert.func(runtimeScene, "Successfully bought and saved the purchase: 100 coins", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("goldenchickenbuy"), gdjs.StoreCode.GDgoldenchickenbuyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StoreCode.GDgoldenchickenbuyObjects1.length;i<l;++i) {
    if ( gdjs.StoreCode.GDgoldenchickenbuyObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StoreCode.GDgoldenchickenbuyObjects1[k] = gdjs.StoreCode.GDgoldenchickenbuyObjects1[i];
        ++k;
    }
}
gdjs.StoreCode.GDgoldenchickenbuyObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__InAppPurchase__WatchItemEvent.func(runtimeScene, "goldenchicken", runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), "finished", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__InAppPurchase__OrderItem.func(runtimeScene, "goldenchicken", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("shopStatus"), gdjs.StoreCode.GDshopStatusObjects1);
{for(var i = 0, len = gdjs.StoreCode.GDshopStatusObjects1.length ;i < len;++i) {
    gdjs.StoreCode.GDshopStatusObjects1[i].getBehavior("Text").setText("Not connected to WiFi");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.debuggerTools.log("Achievement granted: P2W", "info", "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("noAdstxt"), gdjs.StoreCode.GDnoAdstxtObjects1);
{gdjs.evtsExt__InAppPurchase__FinalizePurchase.func(runtimeScene, "noadssubscription", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(true);
}{for(var i = 0, len = gdjs.StoreCode.GDnoAdstxtObjects1.length ;i < len;++i) {
    gdjs.StoreCode.GDnoAdstxtObjects1[i].getBehavior("Text").setText("No Ads (bought)");
}
}{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(false);
}{gdjs.evtTools.storage.writeStringInJSONFile("store", "noads", "true");
}}

}


};

gdjs.StoreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StoreCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.StoreCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.StoreCode.GDpresentationObjects1.length = 0;
gdjs.StoreCode.GDpresentationObjects2.length = 0;
gdjs.StoreCode.GDsupportTextObjects1.length = 0;
gdjs.StoreCode.GDsupportTextObjects2.length = 0;
gdjs.StoreCode.GDsupportBuyObjects1.length = 0;
gdjs.StoreCode.GDsupportBuyObjects2.length = 0;
gdjs.StoreCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.StoreCode.GDRedButtonWithGoldFrameObjects2.length = 0;
gdjs.StoreCode.GDshopStatusObjects1.length = 0;
gdjs.StoreCode.GDshopStatusObjects2.length = 0;
gdjs.StoreCode.GDpurchasestxtObjects1.length = 0;
gdjs.StoreCode.GDpurchasestxtObjects2.length = 0;
gdjs.StoreCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.StoreCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.StoreCode.GDtableObjects1.length = 0;
gdjs.StoreCode.GDtableObjects2.length = 0;
gdjs.StoreCode.GDcoinIMGObjects1.length = 0;
gdjs.StoreCode.GDcoinIMGObjects2.length = 0;
gdjs.StoreCode.GDcoinstxtObjects1.length = 0;
gdjs.StoreCode.GDcoinstxtObjects2.length = 0;
gdjs.StoreCode.GDpurchase50coinsTXTObjects1.length = 0;
gdjs.StoreCode.GDpurchase50coinsTXTObjects2.length = 0;
gdjs.StoreCode.GDpurchase50coinsBtnObjects1.length = 0;
gdjs.StoreCode.GDpurchase50coinsBtnObjects2.length = 0;
gdjs.StoreCode.GDpurchase100coinsObjects1.length = 0;
gdjs.StoreCode.GDpurchase100coinsObjects2.length = 0;
gdjs.StoreCode.GDpurchase100coinsBTNObjects1.length = 0;
gdjs.StoreCode.GDpurchase100coinsBTNObjects2.length = 0;
gdjs.StoreCode.GDgiftcardObjects1.length = 0;
gdjs.StoreCode.GDgiftcardObjects2.length = 0;
gdjs.StoreCode.GDGoldenChickentxtObjects1.length = 0;
gdjs.StoreCode.GDGoldenChickentxtObjects2.length = 0;
gdjs.StoreCode.GDgoldenchickenbuyObjects1.length = 0;
gdjs.StoreCode.GDgoldenchickenbuyObjects2.length = 0;
gdjs.StoreCode.GDNewTextObjects1.length = 0;
gdjs.StoreCode.GDNewTextObjects2.length = 0;
gdjs.StoreCode.GDnoAdsBuyLifetimeObjects1.length = 0;
gdjs.StoreCode.GDnoAdsBuyLifetimeObjects2.length = 0;
gdjs.StoreCode.GDnoAdsSubscriptionObjects1.length = 0;
gdjs.StoreCode.GDnoAdsSubscriptionObjects2.length = 0;
gdjs.StoreCode.GDnoAdstxtObjects1.length = 0;
gdjs.StoreCode.GDnoAdstxtObjects2.length = 0;
gdjs.StoreCode.GDChicken3Objects1.length = 0;
gdjs.StoreCode.GDChicken3Objects2.length = 0;
gdjs.StoreCode.GDChicken4Objects1.length = 0;
gdjs.StoreCode.GDChicken4Objects2.length = 0;

gdjs.StoreCode.eventsList0(runtimeScene);
gdjs.StoreCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.StoreCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.StoreCode.GDpresentationObjects1.length = 0;
gdjs.StoreCode.GDpresentationObjects2.length = 0;
gdjs.StoreCode.GDsupportTextObjects1.length = 0;
gdjs.StoreCode.GDsupportTextObjects2.length = 0;
gdjs.StoreCode.GDsupportBuyObjects1.length = 0;
gdjs.StoreCode.GDsupportBuyObjects2.length = 0;
gdjs.StoreCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.StoreCode.GDRedButtonWithGoldFrameObjects2.length = 0;
gdjs.StoreCode.GDshopStatusObjects1.length = 0;
gdjs.StoreCode.GDshopStatusObjects2.length = 0;
gdjs.StoreCode.GDpurchasestxtObjects1.length = 0;
gdjs.StoreCode.GDpurchasestxtObjects2.length = 0;
gdjs.StoreCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.StoreCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.StoreCode.GDtableObjects1.length = 0;
gdjs.StoreCode.GDtableObjects2.length = 0;
gdjs.StoreCode.GDcoinIMGObjects1.length = 0;
gdjs.StoreCode.GDcoinIMGObjects2.length = 0;
gdjs.StoreCode.GDcoinstxtObjects1.length = 0;
gdjs.StoreCode.GDcoinstxtObjects2.length = 0;
gdjs.StoreCode.GDpurchase50coinsTXTObjects1.length = 0;
gdjs.StoreCode.GDpurchase50coinsTXTObjects2.length = 0;
gdjs.StoreCode.GDpurchase50coinsBtnObjects1.length = 0;
gdjs.StoreCode.GDpurchase50coinsBtnObjects2.length = 0;
gdjs.StoreCode.GDpurchase100coinsObjects1.length = 0;
gdjs.StoreCode.GDpurchase100coinsObjects2.length = 0;
gdjs.StoreCode.GDpurchase100coinsBTNObjects1.length = 0;
gdjs.StoreCode.GDpurchase100coinsBTNObjects2.length = 0;
gdjs.StoreCode.GDgiftcardObjects1.length = 0;
gdjs.StoreCode.GDgiftcardObjects2.length = 0;
gdjs.StoreCode.GDGoldenChickentxtObjects1.length = 0;
gdjs.StoreCode.GDGoldenChickentxtObjects2.length = 0;
gdjs.StoreCode.GDgoldenchickenbuyObjects1.length = 0;
gdjs.StoreCode.GDgoldenchickenbuyObjects2.length = 0;
gdjs.StoreCode.GDNewTextObjects1.length = 0;
gdjs.StoreCode.GDNewTextObjects2.length = 0;
gdjs.StoreCode.GDnoAdsBuyLifetimeObjects1.length = 0;
gdjs.StoreCode.GDnoAdsBuyLifetimeObjects2.length = 0;
gdjs.StoreCode.GDnoAdsSubscriptionObjects1.length = 0;
gdjs.StoreCode.GDnoAdsSubscriptionObjects2.length = 0;
gdjs.StoreCode.GDnoAdstxtObjects1.length = 0;
gdjs.StoreCode.GDnoAdstxtObjects2.length = 0;
gdjs.StoreCode.GDChicken3Objects1.length = 0;
gdjs.StoreCode.GDChicken3Objects2.length = 0;
gdjs.StoreCode.GDChicken4Objects1.length = 0;
gdjs.StoreCode.GDChicken4Objects2.length = 0;


return;

}

gdjs['StoreCode'] = gdjs.StoreCode;
