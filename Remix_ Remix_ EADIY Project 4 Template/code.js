var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["12660252-cb05-4a44-8078-8537998a9e79","f8221832-dea5-4b25-bc22-920365e27421","45f03334-b138-4a68-a991-cdf4f8f315df"],"propsByKey":{"12660252-cb05-4a44-8078-8537998a9e79":{"name":"ufo_1","sourceUrl":"assets/api/v1/animation-library/gamelab/1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw/category_icons/ufo.png","frameSize":{"x":386,"y":267},"frameCount":1,"looping":true,"frameDelay":2,"version":"1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":267},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw/category_icons/ufo.png"},"f8221832-dea5-4b25-bc22-920365e27421":{"name":"star2_1","sourceUrl":null,"frameSize":{"x":5,"y":5},"frameCount":1,"looping":true,"frameDelay":12,"version":"9aVmH3lpp04iIZ6zZl0_qkP2TbIxOIHw","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":5,"y":5},"rootRelativePath":"assets/f8221832-dea5-4b25-bc22-920365e27421.png"},"45f03334-b138-4a68-a991-cdf4f8f315df":{"name":"ufo_2","sourceUrl":"assets/api/v1/animation-library/gamelab/QrXSuy9Lst0RVUF7O1QEbrfGQLjzvxzy/category_vehicles/ufo_02.png","frameSize":{"x":398,"y":332},"frameCount":1,"looping":true,"frameDelay":2,"version":"QrXSuy9Lst0RVUF7O1QEbrfGQLjzvxzy","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":332},"rootRelativePath":"assets/api/v1/animation-library/gamelab/QrXSuy9Lst0RVUF7O1QEbrfGQLjzvxzy/category_vehicles/ufo_02.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//create a ufo sprite
var sprite = createSprite(50, 350);
sprite.setAnimation("ufo_1");
sprite.scale = 0.2;
sprite.velocityY = -4;

var nave1 = createSprite(150, 350);
nave1.setAnimation("ufo_1");
nave1.scale = 0.2;
nave1.velocityY = -4;

var nave2 = createSprite(250, 350);
nave2.setAnimation("ufo_1");
nave2.scale = 0.2;
nave2.velocityY = -4;

var nave3 = createSprite(350, 350);
nave3.setAnimation("ufo_1");
nave3.scale = 0.2;
nave3.velocityY = -4;

var star1 = createSprite(322,41,10,10);
star1.shapeColor = "white";
var star2 = createSprite(117,185,10,10);
star2.shapeColor = "white";
var star3 = createSprite(267,142,10,10);
star3.shapeColor = "white";
var star4 = createSprite(125,341,10,10);
star4.shapeColor = "white";
var star5 = createSprite(61,74,10,10);
star5.shapeColor = "white";

function draw() {
  background("black");
  
  createEdgeSprites();
  sprite.bounceOff(edges);
  nave3.bounceOff(edges);
  nave2.bounceOff(edges);
  nave1.bounceOff(edges);
  
  if (keyDown("UP_ARROW")){
    sprite.y=sprite.y-10;
    nave1.y=nave1.y-10;
    nave2.y=nave2.y-10;
    nave3.y=nave3.y-10;
  }
if (keyDown("DOWN_ARROW")){
  sprite.y=sprite.y+10;
  nave1.y=nave1.y+10;
  nave2.y=nave2.y+10;
  nave3.y=nave3.y+10;
}
  
  //draw the sprites on canvas
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
