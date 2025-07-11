var renderer, scene, camera, controls, light;

var jack, box, mainBox, lid, head, body, leftHand, rightHand, crank;

var boxClosed = true;
var crankSpeed = 0.1;
var controls = $('#controls');

var boxOpenAnimation = new TimelineMax();
var jackOpenAnimation = new TimelineMax();
var lidOpenAnimation = new TimelineMax();
var jackCloseAnimation = new TimelineMax();

// https://coolors.co/4281a4-48a9a6-e4dfda-d4b483-c1666b
var colors = {
    blue: '#4281A4',
    green: '#48A9A6',
    white: '#E4DFDA',
    yellow: '#D4B483',
    red: '#C1666B',
    skin: '#F5D6BA',
    face: '#f6eee6'
}

var cameraPositions = {
    open: {x: 20, y: 12, z: -5},
    closed: {x: 40, y: 20, z: -20}
}

var lookAt = new THREE.Vector3(0, 5, 0);

THREE.ImageUtils.crossOrigin = '';
var loader = THREE.TextureLoader;
var face = THREE.ImageUtils.loadTexture('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtAAAAEACAYAAACagUEuAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABV0RVh0Q3JlYXRpb24gVGltZQAxMy80LzE2VqbobgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAA9LSURBVHic7d1diJV1HsDx33Ne5oyjzoyao07DZI0ppr3Q5q7NhLAv7GIUXRRtS0Et3iQFJd0s1LJEsUXUxlbQTSzsRQlLu8su7G53UoZ2ERFmEBm0ma69aNOWk6bjnL0ol7AX5+885zznnPl8QATl/P4/Fc58fXjmOVm9Xq8HAAAwLaWiFwAAgHYioAEAIIGABgCABAIaAAASCGgAAEggoAEAIIGABgCABAIaAAASCGgAAEggoAEAIIGABgCABAIaAAASCGgAAEggoAEAIIGABgCABAIaAAASCGgAAEggoAEAIIGABgCABAIaAAASCGgAAEggoAEAIIGABgCABAIaAAASCGgAAEggoAEAIIGABgCABAIaAAASCGgAAEggoAEAIIGABgCABAIaAAASCGgAAEggoAEAIIGABgCABAIaAAASCGgAAEggoAEAIIGABgCABAIaAAASCGgAAEggoAEAIIGABgCABAIaAAASCGgAAEggoAEAIIGABgCABAIaAAASCGgAAEggoAEAIIGABgCABAIaAAASCGgAAEggoAEAIIGABgCABAIaAAASCGgAAEggoAEAIIGABgCABAIaAAASCGgAAEggoAEAIIGABgCABAIaAAASCGgAAEggoAEAIIGABgCABAIaAAASCGgAAEggoAEAIIGABgCABAIaAAASCGgAAEggoAEAIIGABgCABAIaAAASCGgAAEggoAEAIEGl6AUAWt3k5GTs3LkzduzYEbt27Yp9+/bFxMRERET09PTE0NBQrF27NsbGxmJ0dDSq1WrBG3/h6NGj8cILL8SOHTvijTfeiH379sXRo0cjIqK3tzeGh4fjwgsvjA0bNsT3vve9KJVcUwGYjqxer9eLXgKgFR07diy2bt0azzzzTBw6dGhar+nv74+bbropbrjhhuju7m7wht/sk08+iT/+8Y/x7LPP/j/0T2fZsmXxy1/+Mq655pool8sN3hCgvQlogG/w6quvxm9+85vYv3//Gb1+2bJlce+998all16a82bfbdu2bfHb3/42xsfHz+j1K1eujPvuuy9GRkZy3gygcwhogFP89a9/jQceeCCmpqZmNKdUKsVdd90VP//5z3Pa7NvV6/V48skn4w9/+MOMZ9Vqtbj//vvjhz/8YQ6bAXQeAQ3wFX/605/ioYceynXmli1b4sYbb8x15ql+97vfxTPPPJPbvFKpFA8++GD86Ec/ym0mQKfwHSMAX3rppZfi4Ycfzn3uo48+Gi+88ELuc0/685//nGs8R0RMTU3FPffcE2+++WaucwE6gSvQAPHFN95dd9118dFHHzVkfm9vb/zlL3+J/v7+XOfu3bs3brjhhjh27Fiuc09avnx5bN26tWWeLALQClyBBoiIp556qmHxHPFFoD/55JO5z3300UcbFs8REf/+979j69atDZsP0I4ENDDrjY+Px7PPPtvwc/72t7/Fhx9+mNu8N998M7Zv357bvG/z9NNPNzTSAdqNgAZmveeee64pgTg5ORn/+te/cpv397//PbdZ3+XQoUPx4osvNuUsgHYgoIFZrxlXcU96/vnnW3LW6TTymyAB2o2ABma1er0er732WtPOe/311+PEiRMznnPw4ME4cOBADhtNz65du5p2FkCrE9DArHbw4ME4cuRI086bnJw84083/Kp33nknh22mb9++fTE5OdnUMwFalYAGZrUz/cjrmfj0009nPOOTTz7JYZPpm5qais8++6ypZwK0KgEN0GR53MIx048ZPxN57A3QCQQ0MKvNnTu36WfOmzdvxjN6enpy2KT1zwRoRQIamNWWLFkS5XK5aedlWRZnn332jOcMDw/nsM30DQwMRK1Wa+qZAK1KQAOzWqVSiZUrVzbtvJGRkVxCdNmyZdHX15fDRtOzevXqpp0F0OoENDDrXXHFFU07a3R0NJc5pVIp1q9fn8us6RgbG2vaWQCtTkADs97GjRsjy7KmnHXVVVe15Kzv0tXVFT/5yU+achZAOxDQwKw3PDwcGzZsaPg5o6Ojcd555+U2b/369U25/eTaa6+N3t7ehp8D0C4ENEBE3HHHHdHV1dWw+eVyOe68885cZ2ZZFlu2bMl15ql6e3tj06ZNDT0DoN0IaID44ir07bff3rD5mzdvzvXq80nr1q2L66+/Pve5J919993R39/fsPkA7UhAA3zpF7/4RVx99dW5z/3pT38aN998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');

var sceneSettings = {
    cameraZ: 0
}

var degToRad = function(degrees) {
    return degrees * Math.PI / 180;
};

var checkLoaded = setInterval(function()
{
    if(face.image && face.image.width !== 0)
    {
        clearInterval(checkLoaded);
        init();
    }
}, 250);

function init() {
    // renderer

    controls.hide();

    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(colors.white, 1);
    renderer.shadowMap.enabled = true;
    //renderer.shadowMap.type = THREE.BasicShadowMap;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.body.appendChild(renderer.domElement);

    // scene

    scene = new THREE.Scene();
    scene.fog = new THREE.Fog( colors.white, 50, 100);

    // camera

    var aspect = window.innerWidth / window.innerHeight;
    var d = 10;
    camera = new THREE.PerspectiveCamera(45, aspect, 1, 300);
    camera.position.x = cameraPositions.closed.x; //30; //(20, 10, -10 + sceneSettings.cameraZ);
    camera.position.y = cameraPositions.closed.y; //10; //(20, 10, -10 + sceneSettings.cameraZ);
    camera.position.z = cameraPositions.closed.z; //-10; //(20, 10, -10 + sceneSettings.cameraZ);
    camera.lookAt(new THREE.Vector3(0, 5, 0));
    //camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);
    //camera.lookAt(new THREE.Vector3(0, 1, 0));

    //light

    var light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.castShadow = true;

    light.position.set(8, 15, -5);
    scene.add(light);

    var softLight = new THREE.AmbientLight( 0xffffff, 0.5 );
    scene.add(softLight)

    // floor

    var geometry = new THREE.PlaneGeometry(1000, 1000, 32);
    var material = new THREE.MeshToonMaterial({
        color: colors.white,
        shading: THREE.FlatShading
    });

    var plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -degToRad(90); //1.57079633;
    plane.position.y = 0;
    plane.receiveShadow = true;
    scene.add(plane);

    //box

    box = new THREE.Group();

    var material = new THREE.MeshToonMaterial({
        color: colors.red
    });

    var geometry = new THREE.BoxGeometry(4, 1, 4);
    var boxBottom = new THREE.Mesh(geometry, material);
    boxBottom.position.y = 0.5;
    boxBottom.castShadow = true;
    boxBottom.receiveShadow = true;

    var geometry = new THREE.BoxGeometry(6, 1, 6);
    var boxBack = new THREE.Mesh(geometry, material);
    boxBack.position.y = 2.5;
    boxBack.position.x = -2.5;
    boxBack.rotation.z = degToRad(90);
    boxBack.castShadow = true;
    boxBack.receiveShadow = true;

    var geometry = new THREE.BoxGeometry(6, 1, 6);
    var boxFront = new THREE.Mesh(geometry, material);
    boxFront.position.y = 2.5;
    boxFront.position.x = 2.5;
    boxFront.rotation.z = degToRad(90);
    boxFront.castShadow = true;
    boxFront.receiveShadow = true;

    var geometry = new THREE.BoxGeometry(4, 1, 6);
    var boxLeft = new THREE.Mesh(geometry, material);
    boxLeft.position.y = 2.5;
    boxLeft.position.z = 2.5;
    boxLeft.rotation.x = degToRad(90);
    boxLeft.castShadow = true;
    boxLeft.receiveShadow = true;

    var geometry = new THREE.BoxGeometry(4, 1, 6);
    var boxRight = new THREE.Mesh(geometry, material);
    boxRight.position.y = 2.5;
    boxRight.position.z = -2.5;
    boxRight.rotation.x = degToRad(90);
    boxRight.castShadow = true;
    boxRight.receiveShadow = true;

    var geometry = new THREE.BoxGeometry(6, 1.75, 6);
    geometry.applyMatrix(new THREE.Matrix4().makeTranslation(3, 1, 0));
    var material = new THREE.MeshLambertMaterial({
        color: colors.red
    });
    lid = new THREE.Mesh(geometry, material);
    lid.position.y = 5.4;
    lid.position.x = -3;
    lid.castShadow = true;
    lid.receiveShadow = true;

    box.add(lid);
    box.add(boxBottom);
    box.add(boxBack);
    box.add(boxLeft);
    box.add(boxRight);
    box.add(boxFront);

    // crank

    crank = new THREE.Group();

    var geometry = new THREE.CylinderGeometry(0.3, 0.3, 0.6, 8);
    var material = new THREE.MeshLambertMaterial({
        color: colors.yellow
    });
    var axel = new THREE.Mesh(geometry, material);

    axel.rotation.x = degToRad(90);
    axel.castShadow = true;
    axel.receiveShadow = true;

    var geometry = new THREE.BoxGeometry(1, 0.3, 3, 8);
    var material = new THREE.MeshLambertMaterial({
        color: colors.yellow
    });
    var shaft = new THREE.Mesh(geometry, material);
    shaft.position.y = 1;
    shaft.rotation.x = degToRad(90);
    shaft.castShadow = true;
    shaft.receiveShadow = true;

    var geometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 8);
    var material = new THREE.MeshLambertMaterial({
        color: colors.yellow
    });
    var handle = new THREE.Mesh(geometry, material);
    handle.position.z = -0.6;
    handle.position.y = 2;
    handle.rotation.x = degToRad(90);
    handle.castShadow = true;
    handle.receiveShadow = true;

    crank.add(axel);
    crank.add(shaft);
    crank.add(handle);

    crank.position.z = -3.5;
    crank.position.y = 3.5;

    box.add(crank);

    // jack

    jack = new THREE.Group();

    var geometry = new THREE.CylinderGeometry(1.1, 1.3, 2.5, 15);
    var material = new THREE.MeshLambertMaterial({
        color: colors.green
    });
    body = new THREE.Mesh(geometry, material);
    body.position.y = 2.5;
    body.castShadow = true;
    body.receiveShadow = true;

    var material = new THREE.MeshLambertMaterial({
        color: colors.face,
        map: face
        //map: THREE.ImageUtils.loadTexture( '')
    });
    var geometry = new THREE.SphereGeometry(1.7, 32, 32);
    head = new THREE.Mesh(geometry, material);
    head.position.y = 4;
    head.castShadow = true;
    head.receiveShadow = true;

    var material = new THREE.MeshLambertMaterial({
        color: colors.skin
    });
    var geometry = new THREE.SphereGeometry(0.5, 32, 32);
    leftHand = new THREE.Mesh(geometry, material);
    leftHand.position.z = -1.5;
    leftHand.position.y = 2;
    leftHand.castShadow = true;
    leftHand.receiveShadow = true;

    var geometry = new THREE.SphereGeometry(0.5, 32, 32);
    rightHand = new THREE.Mesh(geometry, material);
    rightHand.position.z = 1.5;
    rightHand.position.y = 2;
    rightHand.castShadow = true;
    rightHand.receiveShadow = true;

    jack.add(body);
    jack.add(head);
    jack.add(leftHand);
    jack.add(rightHand);

    box.add(jack);
    scene.add(box);

    render();
    animate();
}

function render() {
    renderer.render(scene, camera);
}

function animate() {
    camera.lookAt(lookAt);
    requestAnimationFrame(animate);
    if (boxClosed) {
        crank.rotation.z = crank.rotation.z > degToRad(360) ? 0 : crank.rotation.z + crankSpeed;
    }
    if (crankSpeed < 0.1) crankSpeed += 0.001;

    render();
}

//init();

setTimeout(open, 2000);

function open() {
    TweenMax.killAll(false, true, false);
    boxClosed = false;
    var speed = 0.8;

    TweenMax.to(camera.position, speed, {
        y: cameraPositions.open.y,
        z: cameraPositions.open.z,
        x: cameraPositions.open.x,
        ease: Power3.easeOut
    })

    TweenMax.to(lookAt, speed, {
        y: 7,
        ease: Power3.easeOut
    })

    var jackDelay = 0.15;
    TweenMax.to(jack.position, speed * 2, {
        y: 5,
        delay: jackDelay,
        ease: Elastic.easeOut,
        onComplete: function() {
            controls.show();
        }
    });

    TweenMax.to(leftHand.position, speed * 2, {
        delay: jackDelay,
        z: -2.1,
        y: 3.8,
        ease: Elastic.easeOut
    })

    TweenMax.to(rightHand.position, speed * 2, {
        delay: jackDelay,
        z: 2.1,
        y: 3.8,
        ease: Elastic.easeOut
    })

    jackOpenAnimation.clear()
    jackOpenAnimation.append(TweenMax.to(jack.rotation, speed / 3, {
        x: Math.random() - 0.5,
        z: Math.random() - 0.5,
        delay: jackDelay,
        ease: Power3.easeInOut
    }));
    jackOpenAnimation.append(TweenMax.to(jack.rotation, speed * 4, {
        x: (Math.random() / 10) - 0.1,
        z: (Math.random() / 10) - 0.1,
        ease: Elastic.easeOut
    }));
    jackOpenAnimation.restart();

    boxOpenAnimation.clear()
    var boxBounceSpeed = speed / 3;
    boxOpenAnimation.append(TweenMax.to(box.position, boxBounceSpeed, {
        y: 4,
        delay: 0,
        ease: Power2.easeInOut
    }));
    boxOpenAnimation.append(TweenMax.to(box.rotation, boxBounceSpeed, {
        //z: Math.random()/2 - 0.25,
        //x: Math.random()/2 - 0.25,
        //y: Math.random() - 0.5,
        delay: -boxBounceSpeed,
        ease: Power2.easeOut
    }));
    boxOpenAnimation.append(TweenMax.to(box.position, boxBounceSpeed * 2, {
        y: 0,
        x: 0,
        z: 0,
        ease: Bounce.easeOut
    }));
    boxOpenAnimation.append(TweenMax.to(box.rotation, boxBounceSpeed * 2, {
        y: 0,
        x: 0,
        z: 0,
        delay: -boxBounceSpeed,
        ease: Bounce.easeOut
    }));
    boxOpenAnimation.restart();

    TweenMax.to(lid.rotation, speed, {
        z: 2,
        ease: Bounce.easeOut
    })
    TweenMax.to(head.position, speed * 3, {
        y: 6,
        delay: jackDelay,
        ease: Elastic.easeOut
    })

    TweenMax.to(crank.rotation, speed * 3, {
        z: degToRad(180),
        ease: Elastic.easeOut
    })
}

function close() {
    TweenMax.killAll(false, true, false);
    TweenMax.to(camera.position, 2, {
        y: cameraPositions.closed.y,
        z: cameraPositions.closed.z,
        x: cameraPositions.closed.x,
        ease: Power3.easeOut
    })

    TweenMax.to(leftHand.position, 0.5, {
        z: -1.5,
        y: 2,
        ease: Power3.easeIn
    })

    TweenMax.to(rightHand.position, 0.5, {
        z: 1.5,
        y: 2,
        ease: Power3.easeIn
    })

    TweenMax.to(lookAt, 2, {
        y: 5,
        ease: Power3.easeOut
    })

    TweenMax.to(jack.position, 0.5, {
        y: 0,
        ease: Power3.easeIn
    });
    var jackCloseAnimation = new TimelineMax();
    jackCloseAnimation.clear()
    jackCloseAnimation.append(TweenMax.to(jack.rotation, 0.5, {
        x: -0.2,
        ease: Power3.easeIn
    }));
    jackCloseAnimation.append(TweenMax.to(jack.rotation, 0.8, {
        x: 0,
        z: 0,
        ease: Elastic.easeOut
    }));
    jackCloseAnimation.restart();

    TweenMax.to(head.position, 1, {
        y: 4,
        ease: Back.easeIn
    })
    TweenMax.to(lid.rotation, 1, {
        z: 0,
        delay: 0.5,
        ease: Bounce.easeOut,
        onComplete: function() {
            crankSpeed = 0.003;
            boxClosed = true;
        }
    })
}

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}, false);