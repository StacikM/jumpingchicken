gdjs.GiftcardCode = {};
gdjs.GiftcardCode.localVariables = [];
gdjs.GiftcardCode.GDintroductionObjects1= [];
gdjs.GiftcardCode.GDintroductionObjects2= [];
gdjs.GiftcardCode.GDgiftcardCodeObjects1= [];
gdjs.GiftcardCode.GDgiftcardCodeObjects2= [];
gdjs.GiftcardCode.GDredeemGiftcardObjects1= [];
gdjs.GiftcardCode.GDredeemGiftcardObjects2= [];
gdjs.GiftcardCode.GDredeemGiftcardButtonObjects1= [];
gdjs.GiftcardCode.GDredeemGiftcardButtonObjects2= [];
gdjs.GiftcardCode.GDbackObjects1= [];
gdjs.GiftcardCode.GDbackObjects2= [];
gdjs.GiftcardCode.GDChicken3Objects1= [];
gdjs.GiftcardCode.GDChicken3Objects2= [];
gdjs.GiftcardCode.GDChicken4Objects1= [];
gdjs.GiftcardCode.GDChicken4Objects2= [];


gdjs.GiftcardCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("redeemGiftcardButton"), gdjs.GiftcardCode.GDredeemGiftcardButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GiftcardCode.GDredeemGiftcardButtonObjects1.length;i<l;++i) {
    if ( gdjs.GiftcardCode.GDredeemGiftcardButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GiftcardCode.GDredeemGiftcardButtonObjects1[k] = gdjs.GiftcardCode.GDredeemGiftcardButtonObjects1[i];
        ++k;
    }
}
gdjs.GiftcardCode.GDredeemGiftcardButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("giftcardCode"), gdjs.GiftcardCode.GDgiftcardCodeObjects1);
{gdjs.evtTools.firebaseTools.database.getVariable("jumpingchicken/giftcards/" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("giftcardCode")), runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.hasField("jumpingchicken/giftcards/" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("giftcardCode")), "jumpingchicken/giftcards/" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("giftcardCode")), runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getVariable("jumpingchicken/giftcards/" + (( gdjs.GiftcardCode.GDgiftcardCodeObjects1.length === 0 ) ? "" :gdjs.GiftcardCode.GDgiftcardCodeObjects1[0].getBehavior("Text").getText()) + "/redeemed", runtimeScene.getScene().getVariables().getFromIndex(2), runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.getVariable("jumpingchicken/giftcards/" + (( gdjs.GiftcardCode.GDgiftcardCodeObjects1.length === 0 ) ? "" :gdjs.GiftcardCode.GDgiftcardCodeObjects1[0].getBehavior("Text").getText()) + "/rewardid", runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "100coins");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("giftcardCode"), gdjs.GiftcardCode.GDgiftcardCodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("redeemGiftcard"), gdjs.GiftcardCode.GDredeemGiftcardObjects1);
{for(var i = 0, len = gdjs.GiftcardCode.GDredeemGiftcardObjects1.length ;i < len;++i) {
    gdjs.GiftcardCode.GDredeemGiftcardObjects1[i].getBehavior("Text").setText("Successfully added 110 coins to your account");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(110);
}{gdjs.evtTools.storage.writeNumberInJSONFile("coinsVariable", "coinsVar", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}{gdjs.evtTools.firebaseTools.database.updateField("jumpingchicken/giftcards/" + (( gdjs.GiftcardCode.GDgiftcardCodeObjects1.length === 0 ) ? "" :gdjs.GiftcardCode.GDgiftcardCodeObjects1[0].getBehavior("Text").getText()) + "/rewardid", "rewardid", "true", gdjs.VariablesContainer.badVariable);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "true");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("redeemGiftcard"), gdjs.GiftcardCode.GDredeemGiftcardObjects1);
{for(var i = 0, len = gdjs.GiftcardCode.GDredeemGiftcardObjects1.length ;i < len;++i) {
    gdjs.GiftcardCode.GDredeemGiftcardObjects1[i].getBehavior("Text").setText("This has been already redeemed");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() == "error");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("redeemGiftcard"), gdjs.GiftcardCode.GDredeemGiftcardObjects1);
{for(var i = 0, len = gdjs.GiftcardCode.GDredeemGiftcardObjects1.length ;i < len;++i) {
    gdjs.GiftcardCode.GDredeemGiftcardObjects1[i].getBehavior("Text").setText("Invalid giftcard.");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.GiftcardCode.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GiftcardCode.GDbackObjects1.length;i<l;++i) {
    if ( gdjs.GiftcardCode.GDbackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GiftcardCode.GDbackObjects1[k] = gdjs.GiftcardCode.GDbackObjects1[i];
        ++k;
    }
}
gdjs.GiftcardCode.GDbackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.GiftcardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GiftcardCode.GDintroductionObjects1.length = 0;
gdjs.GiftcardCode.GDintroductionObjects2.length = 0;
gdjs.GiftcardCode.GDgiftcardCodeObjects1.length = 0;
gdjs.GiftcardCode.GDgiftcardCodeObjects2.length = 0;
gdjs.GiftcardCode.GDredeemGiftcardObjects1.length = 0;
gdjs.GiftcardCode.GDredeemGiftcardObjects2.length = 0;
gdjs.GiftcardCode.GDredeemGiftcardButtonObjects1.length = 0;
gdjs.GiftcardCode.GDredeemGiftcardButtonObjects2.length = 0;
gdjs.GiftcardCode.GDbackObjects1.length = 0;
gdjs.GiftcardCode.GDbackObjects2.length = 0;
gdjs.GiftcardCode.GDChicken3Objects1.length = 0;
gdjs.GiftcardCode.GDChicken3Objects2.length = 0;
gdjs.GiftcardCode.GDChicken4Objects1.length = 0;
gdjs.GiftcardCode.GDChicken4Objects2.length = 0;

gdjs.GiftcardCode.eventsList0(runtimeScene);
gdjs.GiftcardCode.GDintroductionObjects1.length = 0;
gdjs.GiftcardCode.GDintroductionObjects2.length = 0;
gdjs.GiftcardCode.GDgiftcardCodeObjects1.length = 0;
gdjs.GiftcardCode.GDgiftcardCodeObjects2.length = 0;
gdjs.GiftcardCode.GDredeemGiftcardObjects1.length = 0;
gdjs.GiftcardCode.GDredeemGiftcardObjects2.length = 0;
gdjs.GiftcardCode.GDredeemGiftcardButtonObjects1.length = 0;
gdjs.GiftcardCode.GDredeemGiftcardButtonObjects2.length = 0;
gdjs.GiftcardCode.GDbackObjects1.length = 0;
gdjs.GiftcardCode.GDbackObjects2.length = 0;
gdjs.GiftcardCode.GDChicken3Objects1.length = 0;
gdjs.GiftcardCode.GDChicken3Objects2.length = 0;
gdjs.GiftcardCode.GDChicken4Objects1.length = 0;
gdjs.GiftcardCode.GDChicken4Objects2.length = 0;


return;

}

gdjs['GiftcardCode'] = gdjs.GiftcardCode;
