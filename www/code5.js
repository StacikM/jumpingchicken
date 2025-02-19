gdjs.multiplayerSceneCode = {};
gdjs.multiplayerSceneCode.localVariables = [];
gdjs.multiplayerSceneCode.forEachIndex2 = 0;

gdjs.multiplayerSceneCode.forEachIndex3 = 0;

gdjs.multiplayerSceneCode.forEachObjects2 = [];

gdjs.multiplayerSceneCode.forEachObjects3 = [];

gdjs.multiplayerSceneCode.forEachTemporary2 = null;

gdjs.multiplayerSceneCode.forEachTemporary3 = null;

gdjs.multiplayerSceneCode.forEachTotalCount2 = 0;

gdjs.multiplayerSceneCode.forEachTotalCount3 = 0;

gdjs.multiplayerSceneCode.GDSkyObjects1= [];
gdjs.multiplayerSceneCode.GDSkyObjects2= [];
gdjs.multiplayerSceneCode.GDSkyObjects3= [];
gdjs.multiplayerSceneCode.GDSkyObjects4= [];
gdjs.multiplayerSceneCode.GDSkyObjects5= [];
gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects1= [];
gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects2= [];
gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects3= [];
gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects4= [];
gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects5= [];
gdjs.multiplayerSceneCode.GDnotificationObjects1= [];
gdjs.multiplayerSceneCode.GDnotificationObjects2= [];
gdjs.multiplayerSceneCode.GDnotificationObjects3= [];
gdjs.multiplayerSceneCode.GDnotificationObjects4= [];
gdjs.multiplayerSceneCode.GDnotificationObjects5= [];
gdjs.multiplayerSceneCode.GDplayersAliveObjects1= [];
gdjs.multiplayerSceneCode.GDplayersAliveObjects2= [];
gdjs.multiplayerSceneCode.GDplayersAliveObjects3= [];
gdjs.multiplayerSceneCode.GDplayersAliveObjects4= [];
gdjs.multiplayerSceneCode.GDplayersAliveObjects5= [];
gdjs.multiplayerSceneCode.GDanti_9595fall_9595protection_9595TMObjects1= [];
gdjs.multiplayerSceneCode.GDanti_9595fall_9595protection_9595TMObjects2= [];
gdjs.multiplayerSceneCode.GDanti_9595fall_9595protection_9595TMObjects3= [];
gdjs.multiplayerSceneCode.GDanti_9595fall_9595protection_9595TMObjects4= [];
gdjs.multiplayerSceneCode.GDanti_9595fall_9595protection_9595TMObjects5= [];
gdjs.multiplayerSceneCode.GDNewTextObjects1= [];
gdjs.multiplayerSceneCode.GDNewTextObjects2= [];
gdjs.multiplayerSceneCode.GDNewTextObjects3= [];
gdjs.multiplayerSceneCode.GDNewTextObjects4= [];
gdjs.multiplayerSceneCode.GDNewTextObjects5= [];
gdjs.multiplayerSceneCode.GDcountdownObjects1= [];
gdjs.multiplayerSceneCode.GDcountdownObjects2= [];
gdjs.multiplayerSceneCode.GDcountdownObjects3= [];
gdjs.multiplayerSceneCode.GDcountdownObjects4= [];
gdjs.multiplayerSceneCode.GDcountdownObjects5= [];
gdjs.multiplayerSceneCode.GDBlueButtonObjects1= [];
gdjs.multiplayerSceneCode.GDBlueButtonObjects2= [];
gdjs.multiplayerSceneCode.GDBlueButtonObjects3= [];
gdjs.multiplayerSceneCode.GDBlueButtonObjects4= [];
gdjs.multiplayerSceneCode.GDBlueButtonObjects5= [];
gdjs.multiplayerSceneCode.GDNameObjects1= [];
gdjs.multiplayerSceneCode.GDNameObjects2= [];
gdjs.multiplayerSceneCode.GDNameObjects3= [];
gdjs.multiplayerSceneCode.GDNameObjects4= [];
gdjs.multiplayerSceneCode.GDNameObjects5= [];
gdjs.multiplayerSceneCode.GDChicken3Objects1= [];
gdjs.multiplayerSceneCode.GDChicken3Objects2= [];
gdjs.multiplayerSceneCode.GDChicken3Objects3= [];
gdjs.multiplayerSceneCode.GDChicken3Objects4= [];
gdjs.multiplayerSceneCode.GDChicken3Objects5= [];
gdjs.multiplayerSceneCode.GDChicken4Objects1= [];
gdjs.multiplayerSceneCode.GDChicken4Objects2= [];
gdjs.multiplayerSceneCode.GDChicken4Objects3= [];
gdjs.multiplayerSceneCode.GDChicken4Objects4= [];
gdjs.multiplayerSceneCode.GDChicken4Objects5= [];


gdjs.multiplayerSceneCode.mapOfGDgdjs_9546multiplayerSceneCode_9546GDNameObjects3Objects = Hashtable.newFrom({"Name": gdjs.multiplayerSceneCode.GDNameObjects3});
gdjs.multiplayerSceneCode.eventsList0 = function(runtimeScene) {

};gdjs.multiplayerSceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MultiplayerChicken"), gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects2);

for (gdjs.multiplayerSceneCode.forEachIndex3 = 0;gdjs.multiplayerSceneCode.forEachIndex3 < gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects2.length;++gdjs.multiplayerSceneCode.forEachIndex3) {
gdjs.multiplayerSceneCode.GDNameObjects3.length = 0;

gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects3.length = 0;


gdjs.multiplayerSceneCode.forEachTemporary3 = gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects2[gdjs.multiplayerSceneCode.forEachIndex3];
gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects3.push(gdjs.multiplayerSceneCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects3.length ;i < len;++i) {
    gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects3[i].getBehavior("MultiplayerObject").setPlayerObjectOwnership(gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects3[i].getVariables().getFromIndex(0).getAsNumber());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.multiplayerSceneCode.mapOfGDgdjs_9546multiplayerSceneCode_9546GDNameObjects3Objects, (( gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects3.length === 0 ) ? 0 :gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects3[0].getCenterXInScene()) - (( gdjs.multiplayerSceneCode.GDNameObjects3.length === 0 ) ? 0 :gdjs.multiplayerSceneCode.GDNameObjects3[0].getWidth()) / 2, (( gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects3.length === 0 ) ? 0 :gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects3[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.multiplayerSceneCode.GDNameObjects3.length ;i < len;++i) {
    gdjs.multiplayerSceneCode.GDNameObjects3[i].getBehavior("MultiplayerObject").setPlayerObjectOwnership(((gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects3[0].getVariables()).getFromIndex(0).getAsNumber());
}
}}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.multiplayerSceneCode.mapOfGDgdjs_9546multiplayerSceneCode_9546GDMultiplayerChickenObjects2Objects = Hashtable.newFrom({"MultiplayerChicken": gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects2});
gdjs.multiplayerSceneCode.mapOfGDgdjs_9546multiplayerSceneCode_9546GDSkyObjects2Objects = Hashtable.newFrom({"Sky": gdjs.multiplayerSceneCode.GDSkyObjects2});
gdjs.multiplayerSceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects1, gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects2);

{for(var i = 0, len = gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects2.length ;i < len;++i) {
    gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx_wing.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects2.length ;i < len;++i) {
    gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}}

}


{

gdjs.copyArray(gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects1, gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects2);

gdjs.copyArray(runtimeScene.getObjects("Sky"), gdjs.multiplayerSceneCode.GDSkyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.multiplayerSceneCode.mapOfGDgdjs_9546multiplayerSceneCode_9546GDMultiplayerChickenObjects2Objects, gdjs.multiplayerSceneCode.mapOfGDgdjs_9546multiplayerSceneCode_9546GDSkyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.multiplayerSceneCode.GDBlueButtonObjects2);
/* Reuse gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects2 */
gdjs.copyArray(runtimeScene.getObjects("countdown"), gdjs.multiplayerSceneCode.GDcountdownObjects2);
gdjs.copyArray(runtimeScene.getObjects("notification"), gdjs.multiplayerSceneCode.GDnotificationObjects2);
gdjs.copyArray(runtimeScene.getObjects("playersAlive"), gdjs.multiplayerSceneCode.GDplayersAliveObjects2);
{for(var i = 0, len = gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects2.length ;i < len;++i) {
    gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.multiplayerSceneCode.GDnotificationObjects2.length ;i < len;++i) {
    gdjs.multiplayerSceneCode.GDnotificationObjects2[i].getBehavior("Text").setText(gdjs.playerAuthentication.getUsername() + " has been eliminated");
}
}{for(var i = 0, len = gdjs.multiplayerSceneCode.GDplayersAliveObjects2.length ;i < len;++i) {
    gdjs.multiplayerSceneCode.GDplayersAliveObjects2[i].getBehavior("Text").setText("Players Alive: " + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx_hit.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.multiplayerSceneCode.GDBlueButtonObjects2.length ;i < len;++i) {
    gdjs.multiplayerSceneCode.GDBlueButtonObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.multiplayerSceneCode.GDcountdownObjects2.length ;i < len;++i) {
    gdjs.multiplayerSceneCode.GDcountdownObjects2[i].getBehavior("Text").setText("You lost! Wait for the other players to finish or leave lobby");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.multiplayerSceneCode.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.multiplayerSceneCode.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.multiplayerSceneCode.GDBlueButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.multiplayerSceneCode.GDBlueButtonObjects1[k] = gdjs.multiplayerSceneCode.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.multiplayerSceneCode.GDBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.multiplayer.leaveGameLobby();
}}

}


};gdjs.multiplayerSceneCode.asyncCallback14706732 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.multiplayerSceneCode.localVariables);
{gdjs.multiplayer.endLobbyGame();
}gdjs.multiplayerSceneCode.localVariables.length = 0;
}
gdjs.multiplayerSceneCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.multiplayerSceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.multiplayerSceneCode.asyncCallback14706732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.multiplayerSceneCode.mapOfGDgdjs_9546multiplayerSceneCode_9546GDMultiplayerChickenObjects1Objects = Hashtable.newFrom({"MultiplayerChicken": gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects1});
gdjs.multiplayerSceneCode.mapOfGDgdjs_9546multiplayerSceneCode_9546GDSkyObjects1Objects = Hashtable.newFrom({"Sky": gdjs.multiplayerSceneCode.GDSkyObjects1});
gdjs.multiplayerSceneCode.asyncCallback14709988 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.multiplayerSceneCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.multiplayerSceneCode.GDNewTextObjects5);
gdjs.copyArray(runtimeScene.getObjects("anti_fall_protection_TM"), gdjs.multiplayerSceneCode.GDanti_9595fall_9595protection_9595TMObjects5);
gdjs.copyArray(asyncObjectsList.getObjects("countdown"), gdjs.multiplayerSceneCode.GDcountdownObjects5);

{for(var i = 0, len = gdjs.multiplayerSceneCode.GDcountdownObjects5.length ;i < len;++i) {
    gdjs.multiplayerSceneCode.GDcountdownObjects5[i].getBehavior("Text").setText("GO!");
}
}{for(var i = 0, len = gdjs.multiplayerSceneCode.GDanti_9595fall_9595protection_9595TMObjects5.length ;i < len;++i) {
    gdjs.multiplayerSceneCode.GDanti_9595fall_9595protection_9595TMObjects5[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.multiplayerSceneCode.GDNewTextObjects5.length ;i < len;++i) {
    gdjs.multiplayerSceneCode.GDNewTextObjects5[i].deleteFromScene(runtimeScene);
}
}gdjs.multiplayerSceneCode.localVariables.length = 0;
}
gdjs.multiplayerSceneCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.multiplayerSceneCode.localVariables);
for (const obj of gdjs.multiplayerSceneCode.GDcountdownObjects4) asyncObjectsList.addObject("countdown", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.multiplayerSceneCode.asyncCallback14709988(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.multiplayerSceneCode.asyncCallback14709540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.multiplayerSceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("countdown"), gdjs.multiplayerSceneCode.GDcountdownObjects4);

{for(var i = 0, len = gdjs.multiplayerSceneCode.GDcountdownObjects4.length ;i < len;++i) {
    gdjs.multiplayerSceneCode.GDcountdownObjects4[i].getBehavior("Text").setText("1");
}
}
{ //Subevents
gdjs.multiplayerSceneCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.multiplayerSceneCode.localVariables.length = 0;
}
gdjs.multiplayerSceneCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.multiplayerSceneCode.localVariables);
for (const obj of gdjs.multiplayerSceneCode.GDcountdownObjects3) asyncObjectsList.addObject("countdown", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.multiplayerSceneCode.asyncCallback14709540(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.multiplayerSceneCode.asyncCallback14709116 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.multiplayerSceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("countdown"), gdjs.multiplayerSceneCode.GDcountdownObjects3);

{for(var i = 0, len = gdjs.multiplayerSceneCode.GDcountdownObjects3.length ;i < len;++i) {
    gdjs.multiplayerSceneCode.GDcountdownObjects3[i].getBehavior("Text").setText("2");
}
}
{ //Subevents
gdjs.multiplayerSceneCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.multiplayerSceneCode.localVariables.length = 0;
}
gdjs.multiplayerSceneCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.multiplayerSceneCode.localVariables);
for (const obj of gdjs.multiplayerSceneCode.GDcountdownObjects2) asyncObjectsList.addObject("countdown", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.multiplayerSceneCode.asyncCallback14709116(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.multiplayerSceneCode.asyncCallback14708996 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.multiplayerSceneCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("countdown"), gdjs.multiplayerSceneCode.GDcountdownObjects2);
{for(var i = 0, len = gdjs.multiplayerSceneCode.GDcountdownObjects2.length ;i < len;++i) {
    gdjs.multiplayerSceneCode.GDcountdownObjects2[i].getBehavior("Text").setText("3");
}
}
{ //Subevents
gdjs.multiplayerSceneCode.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.multiplayerSceneCode.localVariables.length = 0;
}
gdjs.multiplayerSceneCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.multiplayerSceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.multiplayerSceneCode.asyncCallback14708996(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.multiplayerSceneCode.eventsList8 = function(runtimeScene) {

};gdjs.multiplayerSceneCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.multiplayerSceneCode.GDBlueButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("playersAlive"), gdjs.multiplayerSceneCode.GDplayersAliveObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.multiplayer.getPlayersInLobbyCount());
}{for(var i = 0, len = gdjs.multiplayerSceneCode.GDplayersAliveObjects1.length ;i < len;++i) {
    gdjs.multiplayerSceneCode.GDplayersAliveObjects1[i].getBehavior("Text").setText("Players Alive: " + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.multiplayerSceneCode.GDBlueButtonObjects1.length ;i < len;++i) {
    gdjs.multiplayerSceneCode.GDBlueButtonObjects1[i].hide();
}
}{gdjs.multiplayer.endLobbyWhenHostLeaves(false);
}
{ //Subevents
gdjs.multiplayerSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mainMenu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MultiplayerChicken"), gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects1.length;i<l;++i) {
    if ( gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects1[k] = gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects1[i];
        ++k;
    }
}
gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.multiplayerSceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("notification"), gdjs.multiplayerSceneCode.GDnotificationObjects1);
{for(var i = 0, len = gdjs.multiplayerSceneCode.GDnotificationObjects1.length ;i < len;++i) {
    gdjs.multiplayerSceneCode.GDnotificationObjects1[i].getBehavior("Text").setText("Game over!");
}
}
{ //Subevents
gdjs.multiplayerSceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MultiplayerChicken"), gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sky"), gdjs.multiplayerSceneCode.GDSkyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.multiplayerSceneCode.mapOfGDgdjs_9546multiplayerSceneCode_9546GDMultiplayerChickenObjects1Objects, gdjs.multiplayerSceneCode.mapOfGDgdjs_9546multiplayerSceneCode_9546GDSkyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("notification"), gdjs.multiplayerSceneCode.GDnotificationObjects1);
gdjs.copyArray(runtimeScene.getObjects("playersAlive"), gdjs.multiplayerSceneCode.GDplayersAliveObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.multiplayerSceneCode.GDnotificationObjects1.length ;i < len;++i) {
    gdjs.multiplayerSceneCode.GDnotificationObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.multiplayer.getCurrentPlayerNumber()) + " has been eliminated");
}
}{for(var i = 0, len = gdjs.multiplayerSceneCode.GDplayersAliveObjects1.length ;i < len;++i) {
    gdjs.multiplayerSceneCode.GDplayersAliveObjects1[i].getBehavior("Text").setText("Players Alive: " + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.multiplayerSceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayerMessageManager.hasAnyPlayerJustLeft();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("notification"), gdjs.multiplayerSceneCode.GDnotificationObjects1);
{for(var i = 0, len = gdjs.multiplayerSceneCode.GDnotificationObjects1.length ;i < len;++i) {
    gdjs.multiplayerSceneCode.GDnotificationObjects1[i].getBehavior("Text").setText("A player left, they got eliminated");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MultiplayerChicken"), gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects1);

for (gdjs.multiplayerSceneCode.forEachIndex2 = 0;gdjs.multiplayerSceneCode.forEachIndex2 < gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects1.length;++gdjs.multiplayerSceneCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.multiplayerSceneCode.GDNameObjects2);
gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects2.length = 0;


gdjs.multiplayerSceneCode.forEachTemporary2 = gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects1[gdjs.multiplayerSceneCode.forEachIndex2];
gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects2.push(gdjs.multiplayerSceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.multiplayerSceneCode.GDNameObjects2.length;i<l;++i) {
    if ( gdjs.multiplayerSceneCode.GDNameObjects2[i].getBehavior("MultiplayerObject").getPlayerObjectOwnership() == ((gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects2[0].getVariables()).getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.multiplayerSceneCode.GDNameObjects2[k] = gdjs.multiplayerSceneCode.GDNameObjects2[i];
        ++k;
    }
}
gdjs.multiplayerSceneCode.GDNameObjects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.multiplayerSceneCode.GDNameObjects2.length ;i < len;++i) {
    gdjs.multiplayerSceneCode.GDNameObjects2[i].setPosition((( gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects2.length === 0 ) ? 0 :gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects2[0].getCenterXInScene()) / (gdjs.multiplayerSceneCode.GDNameObjects2[i].getWidth()) / 2,(( gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects2.length === 0 ) ? 0 :gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects2[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.multiplayerSceneCode.GDNameObjects2.length ;i < len;++i) {
    gdjs.multiplayerSceneCode.GDNameObjects2[i].getBehavior("Text").setText(gdjs.multiplayer.getPlayerUsername(gdjs.multiplayer.getCurrentPlayerNumber()));
}
}}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.multiplayerSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.multiplayerSceneCode.GDSkyObjects1.length = 0;
gdjs.multiplayerSceneCode.GDSkyObjects2.length = 0;
gdjs.multiplayerSceneCode.GDSkyObjects3.length = 0;
gdjs.multiplayerSceneCode.GDSkyObjects4.length = 0;
gdjs.multiplayerSceneCode.GDSkyObjects5.length = 0;
gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects1.length = 0;
gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects2.length = 0;
gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects3.length = 0;
gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects4.length = 0;
gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects5.length = 0;
gdjs.multiplayerSceneCode.GDnotificationObjects1.length = 0;
gdjs.multiplayerSceneCode.GDnotificationObjects2.length = 0;
gdjs.multiplayerSceneCode.GDnotificationObjects3.length = 0;
gdjs.multiplayerSceneCode.GDnotificationObjects4.length = 0;
gdjs.multiplayerSceneCode.GDnotificationObjects5.length = 0;
gdjs.multiplayerSceneCode.GDplayersAliveObjects1.length = 0;
gdjs.multiplayerSceneCode.GDplayersAliveObjects2.length = 0;
gdjs.multiplayerSceneCode.GDplayersAliveObjects3.length = 0;
gdjs.multiplayerSceneCode.GDplayersAliveObjects4.length = 0;
gdjs.multiplayerSceneCode.GDplayersAliveObjects5.length = 0;
gdjs.multiplayerSceneCode.GDanti_9595fall_9595protection_9595TMObjects1.length = 0;
gdjs.multiplayerSceneCode.GDanti_9595fall_9595protection_9595TMObjects2.length = 0;
gdjs.multiplayerSceneCode.GDanti_9595fall_9595protection_9595TMObjects3.length = 0;
gdjs.multiplayerSceneCode.GDanti_9595fall_9595protection_9595TMObjects4.length = 0;
gdjs.multiplayerSceneCode.GDanti_9595fall_9595protection_9595TMObjects5.length = 0;
gdjs.multiplayerSceneCode.GDNewTextObjects1.length = 0;
gdjs.multiplayerSceneCode.GDNewTextObjects2.length = 0;
gdjs.multiplayerSceneCode.GDNewTextObjects3.length = 0;
gdjs.multiplayerSceneCode.GDNewTextObjects4.length = 0;
gdjs.multiplayerSceneCode.GDNewTextObjects5.length = 0;
gdjs.multiplayerSceneCode.GDcountdownObjects1.length = 0;
gdjs.multiplayerSceneCode.GDcountdownObjects2.length = 0;
gdjs.multiplayerSceneCode.GDcountdownObjects3.length = 0;
gdjs.multiplayerSceneCode.GDcountdownObjects4.length = 0;
gdjs.multiplayerSceneCode.GDcountdownObjects5.length = 0;
gdjs.multiplayerSceneCode.GDBlueButtonObjects1.length = 0;
gdjs.multiplayerSceneCode.GDBlueButtonObjects2.length = 0;
gdjs.multiplayerSceneCode.GDBlueButtonObjects3.length = 0;
gdjs.multiplayerSceneCode.GDBlueButtonObjects4.length = 0;
gdjs.multiplayerSceneCode.GDBlueButtonObjects5.length = 0;
gdjs.multiplayerSceneCode.GDNameObjects1.length = 0;
gdjs.multiplayerSceneCode.GDNameObjects2.length = 0;
gdjs.multiplayerSceneCode.GDNameObjects3.length = 0;
gdjs.multiplayerSceneCode.GDNameObjects4.length = 0;
gdjs.multiplayerSceneCode.GDNameObjects5.length = 0;
gdjs.multiplayerSceneCode.GDChicken3Objects1.length = 0;
gdjs.multiplayerSceneCode.GDChicken3Objects2.length = 0;
gdjs.multiplayerSceneCode.GDChicken3Objects3.length = 0;
gdjs.multiplayerSceneCode.GDChicken3Objects4.length = 0;
gdjs.multiplayerSceneCode.GDChicken3Objects5.length = 0;
gdjs.multiplayerSceneCode.GDChicken4Objects1.length = 0;
gdjs.multiplayerSceneCode.GDChicken4Objects2.length = 0;
gdjs.multiplayerSceneCode.GDChicken4Objects3.length = 0;
gdjs.multiplayerSceneCode.GDChicken4Objects4.length = 0;
gdjs.multiplayerSceneCode.GDChicken4Objects5.length = 0;

gdjs.multiplayerSceneCode.eventsList9(runtimeScene);
gdjs.multiplayerSceneCode.GDSkyObjects1.length = 0;
gdjs.multiplayerSceneCode.GDSkyObjects2.length = 0;
gdjs.multiplayerSceneCode.GDSkyObjects3.length = 0;
gdjs.multiplayerSceneCode.GDSkyObjects4.length = 0;
gdjs.multiplayerSceneCode.GDSkyObjects5.length = 0;
gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects1.length = 0;
gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects2.length = 0;
gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects3.length = 0;
gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects4.length = 0;
gdjs.multiplayerSceneCode.GDMultiplayerChickenObjects5.length = 0;
gdjs.multiplayerSceneCode.GDnotificationObjects1.length = 0;
gdjs.multiplayerSceneCode.GDnotificationObjects2.length = 0;
gdjs.multiplayerSceneCode.GDnotificationObjects3.length = 0;
gdjs.multiplayerSceneCode.GDnotificationObjects4.length = 0;
gdjs.multiplayerSceneCode.GDnotificationObjects5.length = 0;
gdjs.multiplayerSceneCode.GDplayersAliveObjects1.length = 0;
gdjs.multiplayerSceneCode.GDplayersAliveObjects2.length = 0;
gdjs.multiplayerSceneCode.GDplayersAliveObjects3.length = 0;
gdjs.multiplayerSceneCode.GDplayersAliveObjects4.length = 0;
gdjs.multiplayerSceneCode.GDplayersAliveObjects5.length = 0;
gdjs.multiplayerSceneCode.GDanti_9595fall_9595protection_9595TMObjects1.length = 0;
gdjs.multiplayerSceneCode.GDanti_9595fall_9595protection_9595TMObjects2.length = 0;
gdjs.multiplayerSceneCode.GDanti_9595fall_9595protection_9595TMObjects3.length = 0;
gdjs.multiplayerSceneCode.GDanti_9595fall_9595protection_9595TMObjects4.length = 0;
gdjs.multiplayerSceneCode.GDanti_9595fall_9595protection_9595TMObjects5.length = 0;
gdjs.multiplayerSceneCode.GDNewTextObjects1.length = 0;
gdjs.multiplayerSceneCode.GDNewTextObjects2.length = 0;
gdjs.multiplayerSceneCode.GDNewTextObjects3.length = 0;
gdjs.multiplayerSceneCode.GDNewTextObjects4.length = 0;
gdjs.multiplayerSceneCode.GDNewTextObjects5.length = 0;
gdjs.multiplayerSceneCode.GDcountdownObjects1.length = 0;
gdjs.multiplayerSceneCode.GDcountdownObjects2.length = 0;
gdjs.multiplayerSceneCode.GDcountdownObjects3.length = 0;
gdjs.multiplayerSceneCode.GDcountdownObjects4.length = 0;
gdjs.multiplayerSceneCode.GDcountdownObjects5.length = 0;
gdjs.multiplayerSceneCode.GDBlueButtonObjects1.length = 0;
gdjs.multiplayerSceneCode.GDBlueButtonObjects2.length = 0;
gdjs.multiplayerSceneCode.GDBlueButtonObjects3.length = 0;
gdjs.multiplayerSceneCode.GDBlueButtonObjects4.length = 0;
gdjs.multiplayerSceneCode.GDBlueButtonObjects5.length = 0;
gdjs.multiplayerSceneCode.GDNameObjects1.length = 0;
gdjs.multiplayerSceneCode.GDNameObjects2.length = 0;
gdjs.multiplayerSceneCode.GDNameObjects3.length = 0;
gdjs.multiplayerSceneCode.GDNameObjects4.length = 0;
gdjs.multiplayerSceneCode.GDNameObjects5.length = 0;
gdjs.multiplayerSceneCode.GDChicken3Objects1.length = 0;
gdjs.multiplayerSceneCode.GDChicken3Objects2.length = 0;
gdjs.multiplayerSceneCode.GDChicken3Objects3.length = 0;
gdjs.multiplayerSceneCode.GDChicken3Objects4.length = 0;
gdjs.multiplayerSceneCode.GDChicken3Objects5.length = 0;
gdjs.multiplayerSceneCode.GDChicken4Objects1.length = 0;
gdjs.multiplayerSceneCode.GDChicken4Objects2.length = 0;
gdjs.multiplayerSceneCode.GDChicken4Objects3.length = 0;
gdjs.multiplayerSceneCode.GDChicken4Objects4.length = 0;
gdjs.multiplayerSceneCode.GDChicken4Objects5.length = 0;


return;

}

gdjs['multiplayerSceneCode'] = gdjs.multiplayerSceneCode;
