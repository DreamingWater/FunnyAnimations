import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component:() =>  import('@/views/Home/home.vue') },
    {
        path:'/home', name:'home', component: () => import('@/views/Home/home.vue')
    },
    {
        path:'/test', name:'test', component: () => import('@/views/test.vue')
    },
    {
        path:'/swiper', name:'swiper', component: () => import('@/views/Lottery/winter/slider/index.vue')
    },
    {
        path:'/spring', name:'spring', component: () => import('@/views/Lottery/spring/index.vue')
    },
    {
        path:'/winter', name:'winter', component: () => import('@/views/Lottery/winter/snowTorsion.vue')
    },
    {
        path:'/playing', name:'playing', component: () => import('@/views/Lottery/playing/index.vue')
    },
    {
        path:'/ballresult', name:'ballresult', component: () => import('@/views/Lottery/playing/ballResult/index.vue')
    },
    {
        path:'/dragon', name:'dragon', component: () => import('@/components/Dragon/Dragon.vue')
    },
    {
        path:'/music', name:'music', component: () => import('@/views/Music/music_back.vue')
    },

    // September
    {  path:'/camera', name:'camera', component: () => import('@/views/Sept/Camera/camara.vue')},
    {  path:'/3d', name:'3dCa', component: () => import('@/components/Animations/3dCarousel/3dCarousel.vue')},
    {  path:'/motionbird', name:'motionbird', component: () => import('@/views/Sept/MotionBird/motionBird.vue')},
    {  path:'/hellobear', name:'hellobear', component: () => import('@/views/Sept/HelloBear/helloBear.vue')},
    {  path:'/cactus', name:'cactus', component: () => import('@/views/Sept/Cactus/cactus.vue')},
    {  path:'/whitecactus', name:'whitecactus', component: () => import('@/views/Sept/WhiteCatus/whiteCatus.vue')},
    {  path:'/colorunicorn', name:'colorunicorn', component: () => import('@/views/Sept/ColorUnicorn/colorUnicorn.vue')},
    {  path:'/doghearts', name:'doghearts', component: () => import('@/views/Sept/DogWithHearts/dogWithHearts.vue')},
    {  path:'/jumpingheart', name:'jumpingheart', component: () => import('@/components/Animations/JumpingHeart/jumpingHeart.vue')},
    {  path:'/handwrite', name:'handwrite', component: () => import('@/components/Animations/Handsign/handsign.vue')},
    {  path:'/marmot', name:'marmot', component: () => import('@/views/Sept/Marmot/marmot.vue')},
    {  path:'/snowcard', name:'snowcard', component: () => import('@/views/Decem/SnowCard/snowCard.vue')},
    {  path:'/codeTalk', name:'codeTalk', component: () => import('@/views/Octo/CodeTalking/codeTalking.vue')},
    {  path:'/breakegg', name:'breakegg', component: () => import('@/views/Octo/BreakEgg/breakEgg.vue')},
    {  path:'/crystalannon', name:'crystalannon', component: () => import('@/views/Octo/CrystalCannon/crystalCannon.vue')},
    {  path:'/funnyhome', name:'funnyhome', component: () => import('@/views/Octo/FunnyHome/funnyHome.vue')},
    {  path:'/followcamera', name:'followcamera', component: () => import('@/views/Octo/FollowingCamera/followingCamera.vue')},
    {  path:'/taichi', name:'taichi', component: () => import('@/views/Octo/Taichi/taiChi.vue')},
    {  path:'/bounceToy', name:'bounceToy', component: () => import('@/views/Octo/BounceToy/bounceToy.vue')},
    {  path:'/batghost', name:'batghost', component: () => import('@/views/Decem/BatGhost/batGhost.vue')},
    {  path:'/ghosthead', name:'ghosthead', component: () => import('@/views/Decem/GhostHead/ghostHead.vue')},
    {  path:'/runpumpkin', name:'runpumpkin', component: () => import('@/views/Decem/RunPumpkin/runPumpkin.vue')},
    {  path:'/flowertext', name:'flowertext', component: () => import('@/views/Decem/FlowerText/flowerText.vue')},
    {  path:'/tearphoto', name:'tearphoto', component: () => import('@/views/Decem/TearPhotos/tearPhotos.vue')},
    {  path:'/runbikes', name:'runbikes', component: () => import('@/views/Decem/RunBikes/runBikes.vue')},
    {  path:'/coloreggs', name:'coloreggs', component: () => import('@/views/Decem/ColorEggs/colorEggs.vue')},
    {  path:'/stopwatch', name:'stopwatch', component: () => import('@/views/Decem/StopWatch/stopWatch.vue')},
    {  path:'/sign', name:'sign', component: () => import('@/components/Animations/XiaoTeng/xiaoTeng.vue')},
    {  path:'/trefoiknot', name:'trefoiknot', component: () => import('@/views/Octo/TrefoilKnot/trefoilKnot.vue')},
    {  path:'/mobiusstrip', name:'mobiusstrip', component: () => import('@/views/Octo/MobiusStrip/mobiusStrip.vue')},
    {  path:'/santareindeer', name:'santareindeer', component: () => import('@/views/Decem/SantaReindeer/santaReindeer.vue')},
    {  path:'/bongocat', name:'bongocat', component: () => import('@/components/Animations/BongoCat/bongoCat.vue')},
    {  path:'/fakecode', name:'fakecode', component: () => import('@/components/Animations/FakeCode/fakeCode.vue')},
    {  path:'/colorcodepic', name:'colorcodepic', component: () => import('@/components/Animations/ColorCodePic/colorCodePic.vue')},
    {  path:'/phonograph', name:'phonograph', component: () => import('@/views/May/Phonograph/phonograph.vue')},
    {  path:'/svgparticles', name:'svgparticles', component: () => import('@/views/May/SvgParticles/svgParticles.vue')},
    {  path:'/tvleftright', name:'tvleftright', component: () => import('@/views/May/TvLeftRight/tvLeftRight.vue')},
    {  path:'/coloraudioplayer', name:'coloraudioplayer', component: () => import('@/views/May/ColorAudioPlayer/colorAudioPlayer.vue')},
    {  path:'/planeticket', name:'planeticket', component: () => import('@/views/May/PlaneTicket/planeTicket.vue')},
    {  path:'/evilPumpkin', name:'evilpumpkin', component: () => import('@/views/Decem/EvilPumpkin/evilPumpkin.vue')},
    {  path:'/circlesea', name:'circlesea', component: () => import('@/views/May/CircleSea/cricleSea.vue')},
    {  path:'/myneighbortotoro', name:'myneighbortotoro', component: () => import('@/views/May/MyNeighborTotoro/myNeighborTotoro.vue')},
    {  path:'/halloweencostume', name:'halloweencostume', component: () => import('@/views/Decem/HalloweenCostume/halloweenCostume.vue')},
    {  path:'/shyghost', name:'shyghost', component: () => import('@/views/Decem/ShyGhost/shyGhost.vue')},
    {  path:'/glitcheffect', name:'glitcheffect', component: () => import('@/Components/Animations/GlitchEffect/glitchEffect.vue')},
    {  path:'/cssloading', name:'cssloading', component: () => import('@/Components/Animations/Loading/CssLoading.vue')},
    {  path:'/runcode', name:'runcode', component: () => import('@/views/Decem/RunCode/runCode.vue')},
    {  path:'/grayscaleambient', name:'grayscaleambient', component: () => import('@/views/Decem/GrayscaleAmbient/grayscaleAmbient.vue')},
    {  path:'/hellohand', name:'hellohand', component: () => import('@/views/May/HelloHand/helloHand.vue')},
    {  path:'/wordpicture', name:'wordpicture', component: () => import('@/views/May/WordPicture/wordPicture.vue')},
    {  path:'/whiteyellowdog', name:'whiteyellowdog', component: () => import('@/views/May/WhiteYellowDog/whiteYellowDog.vue')},
    {  path:'/flyblackdog', name:'flyblackdog', component: () => import('@/views/May/FlyBlackDog/flyBlackDog.vue')},
    {  path:'/lovelybees', name:'lovelybees', component: () => import('@/views/May/LovelyBees/lovelyBees.vue')},
    {  path:'/hanhandogs', name:'hanhandogs', component: () => import('@/views/Cutes/HanhanDog/hanhanDog.vue')},
    {  path:'/pigeoncat', name:'pigeoncat', component: () => import('@/views/Cutes/PigeonCat/pigeonCat.vue')},
    {  path:'/loadingwhitecat', name:'loadingwhitecat', component: () => import('@/components/Animations/Loading/LoadingWhiteCat/loadingCat.vue')},
    {  path:'/waitingcat', name:'waitingcat', component: () => import('@/views/May/LoadCatAnimaiton/loadCatAnimation.vue')},
    {  path:'/t1winner', name:'t1winner', component: () => import('@/views/Decem/T1Winner/t1Winner.vue')},
    {  path:'/swipercube', name:'swipercube', component: () => import('@/components/Animations/swiper/SwiperCube/SwiperCube.vue')},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router