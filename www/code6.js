gdjs.warningCode = {};
gdjs.warningCode.localVariables = [];
gdjs.warningCode.GDexplanationObjects1= [];
gdjs.warningCode.GDexplanationObjects2= [];
gdjs.warningCode.GDBlueButtonObjects1= [];
gdjs.warningCode.GDBlueButtonObjects2= [];
gdjs.warningCode.GDRedButtonObjects1= [];
gdjs.warningCode.GDRedButtonObjects2= [];
gdjs.warningCode.GDChicken3Objects1= [];
gdjs.warningCode.GDChicken3Objects2= [];
gdjs.warningCode.GDChicken4Objects1= [];
gdjs.warningCode.GDChicken4Objects2= [];


gdjs.warningCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.warningCode.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.warningCode.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.warningCode.GDBlueButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.warningCode.GDBlueButtonObjects1[k] = gdjs.warningCode.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.warningCode.GDBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mainMenu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButton"), gdjs.warningCode.GDRedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.warningCode.GDRedButtonObjects1.length;i<l;++i) {
    if ( gdjs.warningCode.GDRedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.warningCode.GDRedButtonObjects1[k] = gdjs.warningCode.GDRedButtonObjects1[i];
        ++k;
    }
}
gdjs.warningCode.GDRedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "support", "https://tawk.to/chat/6576e0a070c9f2407f7e7fff/default", 500, 500, 0, 0, false, false, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.warningCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.warningCode.GDexplanationObjects1.length = 0;
gdjs.warningCode.GDexplanationObjects2.length = 0;
gdjs.warningCode.GDBlueButtonObjects1.length = 0;
gdjs.warningCode.GDBlueButtonObjects2.length = 0;
gdjs.warningCode.GDRedButtonObjects1.length = 0;
gdjs.warningCode.GDRedButtonObjects2.length = 0;
gdjs.warningCode.GDChicken3Objects1.length = 0;
gdjs.warningCode.GDChicken3Objects2.length = 0;
gdjs.warningCode.GDChicken4Objects1.length = 0;
gdjs.warningCode.GDChicken4Objects2.length = 0;

gdjs.warningCode.eventsList0(runtimeScene);
gdjs.warningCode.GDexplanationObjects1.length = 0;
gdjs.warningCode.GDexplanationObjects2.length = 0;
gdjs.warningCode.GDBlueButtonObjects1.length = 0;
gdjs.warningCode.GDBlueButtonObjects2.length = 0;
gdjs.warningCode.GDRedButtonObjects1.length = 0;
gdjs.warningCode.GDRedButtonObjects2.length = 0;
gdjs.warningCode.GDChicken3Objects1.length = 0;
gdjs.warningCode.GDChicken3Objects2.length = 0;
gdjs.warningCode.GDChicken4Objects1.length = 0;
gdjs.warningCode.GDChicken4Objects2.length = 0;


return;

}

gdjs['warningCode'] = gdjs.warningCode;
