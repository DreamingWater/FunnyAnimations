<template>
  <div class="bg-white flex justify-center items-center min-h-screen px-4
        before:bg-[url('https://images.pexels.com/photos/139366/pexels-photo-139366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]
        before:inset-0
        before:m-auto
        before:fixed
        before:opacity-30
        before:bg-cover
        before:bg-center
        before:-z-10
    " id="plane-container">

  <main class=" text-gray-400 font-thin  w-full max-w-sm sm:max-w-4xl grid sm:grid-cols-[4fr_1fr] ">

    <!-- boarding pass -->
    <div class="py-6 px-6 sm:px-10 space-y-6 sm:space-y-12  relative ">
      <section class="w-full grid grid-cols-3 gap-x-4 sm:px-8 isolate overflow-hidden
                    [&>*]:grid
                    [&>*]:place-content-center
                    [&_h2]:text-4xl
                    [&_h2]:bg-cyan-50
                    sm:[&_h2]:text-6xl
                    [&_h2]:font-bold
                    [&_h2]:z-10
                    [&_h2]:text-cyan-400
                    [&_h2]:uppercase
                    [&_div]:relative
                    [&_div]:flex
                    [&_div]:items-center
                    [&_div]:gap-2
                    before:[&_div]:absolute
                    before:[&_div]:w-full
                    before:[&_div]:h-px
                    before:[&_div]:-z-20
                    before:[&_div]:bg-gray-300
                    [&_span]:text-4xl
                    [&_span]:rotate-90
                    [&>p]:text-gray-400
                    [&>p]:font-thin
                ">
        <h2 class="animate-in" style="--d:500ms">{{ from_city }}</h2>
        <div><span id="plane-1" style="--d:2000ms" class="material-symbols-outlined bg-cyan-50 px-4 -z-10">flight</span></div>
        <h2 class="animate-in" style="--d:1000ms">{{ to_city }}</h2>
        <p class="animate-in" style="--d:500ms">{{from_province}}</p>
        <span></span>
        <p class="animate-in" style="--d:1000ms">{{to_province}}</p>

      </section>

      <section class="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3 px-6 bg-cyan-100 font-thin whitespace-nowrap text-sm sm:text-base
                    [&>*]:border-X
                    [&_time]:font-bold
                    [&_time]:text-cyan-400
                ">
        <div class="animate-in-X" style="--d:1200ms">
          <h3>Departure</h3>
          <time>{{Departure_time}}</time>
        </div>
        <div class="animate-in-X" style="--d:1500ms">
          <h3>Arrival</h3>
          <time>{{Arrival_time}}</time>
        </div>
        <div class="animate-in-X" style="--d:1800ms">
          <h3>Seat</h3>
          <time>14B</time>
        </div>
        <div class="animate-in-X" style="--d:2100ms">
          <h3>Ticket No.</h3>
          <time>FF346Y</time>
        </div>
      </section>

      <p class="text-xs">Lorem ipsum dolor sit amet consectetur <strong>adipisicing elit</strong>. Expedita libero mollitia ipsam corrupti <strong>consequuntur</strong> cum magnam eius officia pariatur esse distinctio deleniti eveniet numquam adipisci quasi natus <strong>neque quos</strong>.</p>
    </div>

    <!-- stub -->
    <div class="grid place-content-center p-0">
      <div class="py-6 sm:py-0 sm:-rotate-90 w-full grid place-content-center gap-4 ">
        <section class="w-full grid grid-cols-3 gap-x-2 px-4
                        [&>*]:grid
                        [&>*]:place-content-center
                        [&_h2]:text-3xl
                        [&_h2]:font-bold
                        [&_h2]:text-cyan-400
                        [&_h2]:uppercase
                        [&_div]:relative
                        [&_div]:flex
                        [&_div]:items-center
                        [&_div]:gap-2
                        before:[&_div]:block
                        before:[&_div]:w-full
                        before:[&_div]:h-px
                        before:[&_div]:bg-gray-300
                        after:[&_div]:block
                        after:[&_div]:w-full
                        after:[&_div]:h-px
                        after:[&_div]:bg-gray-300
                        [&_span]:text-2xl
                        [&_span]:rotate-90
                        [&>p]:text-gray-400
                        [&>p]:font-thin
                        [&>p]:text-xs
                    ">
          <h2>{{ from_city }}</h2>
          <div><span class="material-symbols-outlined">flight</span></div>
          <h2>{{ to_city }}</h2>
          <p>{{from_province}}</p>
          <span></span>
          <p>{{to_province}}</p>
        </section>

        <section class="flex justify-between gap-4 font-thin text-xs sm:text-sm whitespace-nowrap
                        [&>div]:text-center
                        [&_time]:font-bold
                        [&_time]:text-cyan-400
                    ">
          <div>
            <h3>Departure</h3>
            <time>{{Departure_time}}</time>
          </div>
          <div>
            <h3>Arrival</h3>
            <time>{{Arrival_time}}</time>
          </div>
          <div>
            <h3>Seat</h3>
            <time>14B</time>
          </div>
          <div>
            <h3>Ticket No.</h3>
            <time>FF346Y</time>
          </div>
        </section>

        <!-- bar code -->
        <svg class="max-w-xs w-60" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink"
             viewBox="0 0 92 25" stroke="#164E63">
                        <line fill="none" style="stroke-width:1;" x1="0.5" y1="0" x2="0.5" y2="30" />
          <line fill="none" style="stroke-width:2;" x1="3" y1="0" x2="3" y2="30" />
          <line fill="none" style="stroke-width:1;" x1="6.5" y1="0" x2="6.5" y2="30" />
          <line fill="none" style="stroke-width:1;" x1="9.5" y1="0" x2="9.5" y2="30" />
          <line fill="none" style="stroke-width:1;" x1="11.5" y1="0" x2="11.5" y2="30" />
          <line fill="none" style="stroke-width:2;" x1="14" y1="0" x2="14" y2="30" />
          <line fill="none" style="stroke-width:1;" x1="16.5" y1="0" x2="16.5" y2="30" />
          <line fill="none" style="stroke-width:1;" x1="19.5" y1="0" x2="19.5" y2="30" />
          <line fill="none" style="stroke-width:1;" x1="21.5" y1="0" x2="21.5" y2="30" />
          <line fill="none" style="stroke-width:1;" x1="23.5" y1="0" x2="23.5" y2="30" />
          <line fill="none" style="stroke-width:1;" x1="26.5" y1="0" x2="26.5" y2="30" />
          <line fill="none" style="stroke-width:2;" x1="29" y1="0" x2="29" y2="30" />
          <line fill="none" style="stroke-width:1;" x1="31.5" y1="0" x2="31.5" y2="30" />
          <line fill="none" style="stroke-width:2;" x1="35" y1="0" x2="35" y2="30" />
          <line fill="none" style="stroke-width:1;" x1="37.5" y1="0" x2="37.5" y2="30" />
          <line fill="none" style="stroke-width:1;" x1="39.5" y1="0" x2="39.5" y2="30" />
          <line fill="none" style="stroke-width:2;" x1="42" y1="0" x2="42" y2="30" />
          <line fill="none" style="stroke-width:1;" x1="44.5" y1="0" x2="44.5" y2="30" />
          <line fill="none" style="stroke-width:1;" x1="47.5" y1="0" x2="47.5" y2="30" />
          <line fill="none" style="stroke-width:1;" x1="49.5" y1="0" x2="49.5" y2="30" />
          <line fill="none" style="stroke-width:1;" x1="51.5" y1="0" x2="51.5" y2="30" />
          <line fill="none" style="stroke-width:1;" x1="54.5" y1="0" x2="54.5" y2="30" />
          <line fill="none" style="stroke-width:2;" x1="57" y1="0" x2="57" y2="30" />
          <line fill="none" style="stroke-width:1;" x1="59.5" y1="0" x2="59.5" y2="30" />
          <line fill="none" style="stroke-width:1;" x1="61.5" y1="0" x2="61.5" y2="30" />
          <line fill="none" style="stroke-width:1;" x1="64.5" y1="0" x2="64.5" y2="30" />
          <line fill="none" style="stroke-width:2;" x1="67" y1="0" x2="67" y2="30" />
          <line fill="none" style="stroke-width:1;" x1="69.5" y1="0" x2="69.5" y2="30" />
          <line fill="none" style="stroke-width:1;" x1="71.5" y1="0" x2="71.5" y2="30" />
          <line fill="none" style="stroke-width:2;" x1="75" y1="0" x2="75" y2="30" />
          <line fill="none" style="stroke-width:1;" x1="77.5" y1="0" x2="77.5" y2="30" />
          <line fill="none" style="stroke-width:1;" x1="79.5" y1="0" x2="79.5" y2="30" />
          <line fill="none" style="stroke-width:1;" x1="81.5" y1="0" x2="81.5" y2="30" />
          <line fill="none" style="stroke-width:1;" x1="83.5" y1="0" x2="83.5" y2="30" />
          <line fill="none" style="stroke-width:2;" x1="87" y1="0" x2="87" y2="30" />
          <line fill="none" style="stroke-width:1;" x1="90.5" y1="0" x2="90.5" y2="30" />
                    </svg>
      </div>

    </div>

  </main>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted,onBeforeMount } from 'vue';
  import { add_script ,add_css_style} from '@/utils/AppendCSSJS';
  const from_city = ref('上海');
  const to_city = ref('北京');
  const from_province = ref('ShangHai');
  const to_province = ref('BeiJing');
  const Departure_time = ref('10:00 AM');
  const Arrival_time = ref('12:00 PM');

  onMounted(() => {
    setTimeout(()=>{
      add_css_style('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0');
    },1000)
    });
</script>

<style scoped lang="css">
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0');

#plane-container::before{
  /* create a movie effect with the background image by moving it around "randomly" */
  animation: movie 120s linear infinite;
}

@keyframes movie {
  0%,100%{
    scale: 2;
    transform: translateX(0);
  }
  30%{
    transform: translate(100px,100px);
  }
  60%{
    transform: translate(40px,150px);
  }
  80%{
    transform: translateX(-100px,-50px);
  }
}

.animate-in {
  font-size: 36px;
  --speed: 500ms;
  opacity: 0;
  transform-origin: center;
  animation: bounceIn var(--speed,300ms) forwards;
  animation-delay: var(--d, 0ms);
}
@keyframes bounceIn {
  0% { opacity: 0;}
  100% {  opacity: 1;}
}

#plane-1{
  translate: -180px 0;
  opacity: 0;
  animation: fly-in 1000ms  ease-out forwards;
  animation-delay: var(--d, 0ms);

}
@keyframes fly-in {
  0%{ translate: -180px 0; opacity:1;}
  100%{ translate: 0; opacity:1;}
}

main{
  --r: 10px;
  --bg: #ECFEFF;
}

/* cutouts between boarding pass and stub */
main>div:first-child {
  background:
      radial-gradient(circle var(--r) at bottom left, #0000 98%, var(--bg)) bottom left,
      radial-gradient(circle var(--r) at bottom right, #0000 98%, var(--bg)) bottom right;
  background-size: 51% 100%;
  background-repeat: no-repeat;

}

main>div:last-child {
  background:
      radial-gradient(circle var(--r) at top left, #0000 98%, var(--bg)) top left,
      radial-gradient(circle var(--r) at top right, #0000 98%, var(--bg)) top right;
  background-size: 51% 100%;
  background-repeat: no-repeat;
}

main>div:first-child::before {
  content: '';
  position: absolute;
  border: 2px dashed #DDD;
  bottom: -1px;
  left: calc( var(--r) * 3) ;
  width: calc(100% - var(--r) * 6);
  height: 0;
}

/* 640px is the Tailwind breakpoint for "sm" */
@media (min-width: 640px) {
  main>div:first-child {
    background:
        radial-gradient(circle var(--r) at top right, #0000 98%, var(--bg)) top right,
        radial-gradient(circle var(--r) at bottom right, #0000 98%, var(--bg)) bottom right;
    background-size: 100% 51%;
    background-repeat: no-repeat;
  }

  main>div:last-child {
    background:
        radial-gradient(circle var(--r) at top left, #0000 98%, var(--bg)) top left,
        radial-gradient(circle var(--r) at bottom left, #0000 98%, var(--bg)) bottom left;
    background-size: 100% 51%;
    background-repeat: no-repeat;
  }

  main>div:first-child::before{
    top: calc(var(--r) * 3);
    right: -1px;
    bottom: auto;
    left: auto;
    height: calc(100% - var(--r) * 6);
    width:0;
  }
}
</style>