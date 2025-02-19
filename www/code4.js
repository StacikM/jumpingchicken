gdjs.mainMenuCode = {};
gdjs.mainMenuCode.localVariables = [];
gdjs.mainMenuCode.GDbgObjects1= [];
gdjs.mainMenuCode.GDbgObjects2= [];
gdjs.mainMenuCode.GDwelcomeObjects1= [];
gdjs.mainMenuCode.GDwelcomeObjects2= [];
gdjs.mainMenuCode.GDnormalModeObjects1= [];
gdjs.mainMenuCode.GDnormalModeObjects2= [];
gdjs.mainMenuCode.GDmultiplayerModeObjects1= [];
gdjs.mainMenuCode.GDmultiplayerModeObjects2= [];
gdjs.mainMenuCode.GDNewTextObjects1= [];
gdjs.mainMenuCode.GDNewTextObjects2= [];
gdjs.mainMenuCode.GDNewText2Objects1= [];
gdjs.mainMenuCode.GDNewText2Objects2= [];
gdjs.mainMenuCode.GDloggedInAsObjects1= [];
gdjs.mainMenuCode.GDloggedInAsObjects2= [];
gdjs.mainMenuCode.GDPurpleButtonWithStoneFrameObjects1= [];
gdjs.mainMenuCode.GDPurpleButtonWithStoneFrameObjects2= [];
gdjs.mainMenuCode.GDredObjects1= [];
gdjs.mainMenuCode.GDredObjects2= [];
gdjs.mainMenuCode.GDmaintenancetxtObjects1= [];
gdjs.mainMenuCode.GDmaintenancetxtObjects2= [];
gdjs.mainMenuCode.GD_95953livesGamemodeObjects1= [];
gdjs.mainMenuCode.GD_95953livesGamemodeObjects2= [];
gdjs.mainMenuCode.GDChicken3Objects1= [];
gdjs.mainMenuCode.GDChicken3Objects2= [];
gdjs.mainMenuCode.GDChicken4Objects1= [];
gdjs.mainMenuCode.GDChicken4Objects2= [];


gdjs.mainMenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("normalMode"), gdjs.mainMenuCode.GDnormalModeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainMenuCode.GDnormalModeObjects1.length;i<l;++i) {
    if ( gdjs.mainMenuCode.GDnormalModeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.mainMenuCode.GDnormalModeObjects1[k] = gdjs.mainMenuCode.GDnormalModeObjects1[i];
        ++k;
    }
}
gdjs.mainMenuCode.GDnormalModeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("multiplayerMode"), gdjs.mainMenuCode.GDmultiplayerModeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainMenuCode.GDmultiplayerModeObjects1.length;i<l;++i) {
    if ( gdjs.mainMenuCode.GDmultiplayerModeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.mainMenuCode.GDmultiplayerModeObjects1[k] = gdjs.mainMenuCode.GDmultiplayerModeObjects1[i];
        ++k;
    }
}
gdjs.mainMenuCode.GDmultiplayerModeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
}
if (isConditionTrue_0) {
{gdjs.multiplayer.openLobbiesWindow(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.hasLobbyGameJustStarted();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "multiplayerScene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("loggedInAs"), gdjs.mainMenuCode.GDloggedInAsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainMenuCode.GDloggedInAsObjects1.length;i<l;++i) {
    if ( gdjs.mainMenuCode.GDloggedInAsObjects1[i].getBehavior("Text").getText() == "Logged in as: " + gdjs.playerAuthentication.getUsername() ) {
        isConditionTrue_0 = true;
        gdjs.mainMenuCode.GDloggedInAsObjects1[k] = gdjs.mainMenuCode.GDloggedInAsObjects1[i];
        ++k;
    }
}
gdjs.mainMenuCode.GDloggedInAsObjects1.length = k;
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("maintenancetxt"), gdjs.mainMenuCode.GDmaintenancetxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("red"), gdjs.mainMenuCode.GDredObjects1);
{for(var i = 0, len = gdjs.mainMenuCode.GDredObjects1.length ;i < len;++i) {
    gdjs.mainMenuCode.GDredObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mainMenuCode.GDmaintenancetxtObjects1.length ;i < len;++i) {
    gdjs.mainMenuCode.GDmaintenancetxtObjects1[i].hide();
}
}{gdjs.evtTools.firebaseTools.database.getField("jumpingchicken/serverSettings", "maintenance", runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("maintenancetxt"), gdjs.mainMenuCode.GDmaintenancetxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("red"), gdjs.mainMenuCode.GDredObjects1);
{for(var i = 0, len = gdjs.mainMenuCode.GDredObjects1.length ;i < len;++i) {
    gdjs.mainMenuCode.GDredObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.mainMenuCode.GDmaintenancetxtObjects1.length ;i < len;++i) {
    gdjs.mainMenuCode.GDmaintenancetxtObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("_3livesGamemode"), gdjs.mainMenuCode.GD_95953livesGamemodeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainMenuCode.GD_95953livesGamemodeObjects1.length;i<l;++i) {
    if ( gdjs.mainMenuCode.GD_95953livesGamemodeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.mainMenuCode.GD_95953livesGamemodeObjects1[k] = gdjs.mainMenuCode.GD_95953livesGamemodeObjects1[i];
        ++k;
    }
}
gdjs.mainMenuCode.GD_95953livesGamemodeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gamemode1", false);
}}

}


};

gdjs.mainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mainMenuCode.GDbgObjects1.length = 0;
gdjs.mainMenuCode.GDbgObjects2.length = 0;
gdjs.mainMenuCode.GDwelcomeObjects1.length = 0;
gdjs.mainMenuCode.GDwelcomeObjects2.length = 0;
gdjs.mainMenuCode.GDnormalModeObjects1.length = 0;
gdjs.mainMenuCode.GDnormalModeObjects2.length = 0;
gdjs.mainMenuCode.GDmultiplayerModeObjects1.length = 0;
gdjs.mainMenuCode.GDmultiplayerModeObjects2.length = 0;
gdjs.mainMenuCode.GDNewTextObjects1.length = 0;
gdjs.mainMenuCode.GDNewTextObjects2.length = 0;
gdjs.mainMenuCode.GDNewText2Objects1.length = 0;
gdjs.mainMenuCode.GDNewText2Objects2.length = 0;
gdjs.mainMenuCode.GDloggedInAsObjects1.length = 0;
gdjs.mainMenuCode.GDloggedInAsObjects2.length = 0;
gdjs.mainMenuCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.mainMenuCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.mainMenuCode.GDredObjects1.length = 0;
gdjs.mainMenuCode.GDredObjects2.length = 0;
gdjs.mainMenuCode.GDmaintenancetxtObjects1.length = 0;
gdjs.mainMenuCode.GDmaintenancetxtObjects2.length = 0;
gdjs.mainMenuCode.GD_95953livesGamemodeObjects1.length = 0;
gdjs.mainMenuCode.GD_95953livesGamemodeObjects2.length = 0;
gdjs.mainMenuCode.GDChicken3Objects1.length = 0;
gdjs.mainMenuCode.GDChicken3Objects2.length = 0;
gdjs.mainMenuCode.GDChicken4Objects1.length = 0;
gdjs.mainMenuCode.GDChicken4Objects2.length = 0;

gdjs.mainMenuCode.eventsList0(runtimeScene);
gdjs.mainMenuCode.GDbgObjects1.length = 0;
gdjs.mainMenuCode.GDbgObjects2.length = 0;
gdjs.mainMenuCode.GDwelcomeObjects1.length = 0;
gdjs.mainMenuCode.GDwelcomeObjects2.length = 0;
gdjs.mainMenuCode.GDnormalModeObjects1.length = 0;
gdjs.mainMenuCode.GDnormalModeObjects2.length = 0;
gdjs.mainMenuCode.GDmultiplayerModeObjects1.length = 0;
gdjs.mainMenuCode.GDmultiplayerModeObjects2.length = 0;
gdjs.mainMenuCode.GDNewTextObjects1.length = 0;
gdjs.mainMenuCode.GDNewTextObjects2.length = 0;
gdjs.mainMenuCode.GDNewText2Objects1.length = 0;
gdjs.mainMenuCode.GDNewText2Objects2.length = 0;
gdjs.mainMenuCode.GDloggedInAsObjects1.length = 0;
gdjs.mainMenuCode.GDloggedInAsObjects2.length = 0;
gdjs.mainMenuCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.mainMenuCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.mainMenuCode.GDredObjects1.length = 0;
gdjs.mainMenuCode.GDredObjects2.length = 0;
gdjs.mainMenuCode.GDmaintenancetxtObjects1.length = 0;
gdjs.mainMenuCode.GDmaintenancetxtObjects2.length = 0;
gdjs.mainMenuCode.GD_95953livesGamemodeObjects1.length = 0;
gdjs.mainMenuCode.GD_95953livesGamemodeObjects2.length = 0;
gdjs.mainMenuCode.GDChicken3Objects1.length = 0;
gdjs.mainMenuCode.GDChicken3Objects2.length = 0;
gdjs.mainMenuCode.GDChicken4Objects1.length = 0;
gdjs.mainMenuCode.GDChicken4Objects2.length = 0;


return;

}

gdjs['mainMenuCode'] = gdjs.mainMenuCode;
