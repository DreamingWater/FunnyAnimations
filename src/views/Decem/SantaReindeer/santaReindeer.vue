<template lang="pug">
.title
  h1 Santa's Reindeer
  ul.socials
    li
      a(href="https://ivan.odintsov.me", target="_blank")
        img(src="https://img.icons8.com/material/48/000000/link--v1.png", alt="Link icon")
    li
      a(href="https://twitter.com/odintsov_design", target="_blank")
        img(src="https://img.icons8.com/color/48/000000/twitter.png", alt="Twitter icon")

.container
  .artboard
    .deer
      .rocking
        .head
          .horns
            .horn.horn-left
              .line.line-one
              .line
              .line.line-three
            .horn.horn-right
              .line.line-one
              .line
              .line.line-three
          .ears
            .ear.ear-left
            .ear.ear-right
          .eyes
            .eye.eye-left
            .eye.eye-right
          .nose
        .body
          .shadow
          .hooves
            .hoof-one
              .line
              .anim-part
                .circle
                  .circle
                    .circle
                      .circle
                        .circle.circle-last
            .hoof-two
              .line-one
              .line-two
        .tail
          .circle
            .circle
              .circle
                .circle
                  .circle
      .legs
        .leg-left
          .anim-part
            .line
        .leg-right
          .anim-part
            .circle
              .circle
                .circle
                  .circle
                    .circle
                      .circle
                        .circle
                          .circle
                            .circle.circle-last
    .presents
      .present.present-one
      .present.present-two
      .present.present-two.present-two-right
      .present.present-three
    .snow
    - for (var i = 1; i < 100; i++)
    .snowflake

.credits.
  Created with <span class="love"></span> by <a href="https://codepen.io/ivanodintsov">Ivan Odintsov</a>  &nbsp;&nbsp;&middot;&nbsp;&nbsp;	Original by <a href="https://dribbble.com/shots/2421804-Merry-Christmas">Artua</a>
</template>


<script setup>

</script>


<style scoped lang="scss">

@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600);
.container {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  height: 300px;
  margin: 40px auto 50px auto;
  position: relative;
  width: 450px;
}

.artboard {
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.deer {
  width: 50px;
  margin: 0 auto;
  position: relative;
}

.rocking {
  animation: rocking 0.4s ease-in-out infinite alternate-reverse;
  transform-origin: bottom left;
  position: relative;
  z-index: 1;
}

.head {
  position: relative;
  width: 50px;
}

.horns {
  animation: rocking 0.4s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate-reverse;
  height: 55px;
  position: relative;
  top: 21px;
  width: 50px;
}

.horn {
  position: relative;
}
.horn:before {
  background-color: #91655d;
  border-radius: 7px 7px 0 0;
  content: "";
  display: block;
  height: 55px;
  position: absolute;
  width: 7px;
  z-index: 1;
}
.horn .line {
  background-color: #91655d;
  border-radius: 7px 0 0 7px;
  height: 7px;
  width: 20px;
  margin-bottom: 15px;
  position: relative;
  top: 10px;
}
.horn .line-one {
  width: 15px;
}
.horn .line-three {
  top: -22px;
  width: 17px;
}
.horn-left {
  top: -7px;
  transform: rotate(-25deg);
}
.horn-left:before {
  box-shadow: inset 2px 0 0 0 #9c7169;
}
.horn-left .line {
  box-shadow: inset 0 2px 0 0 #9c7169;
  right: 15px;
  transform: rotate(30deg);
}
.horn-left .line-one {
  right: 10px;
}
.horn-left .line-three {
  box-shadow: inset 0 -2px 0 0 #9c7169;
  right: -3px;
  transform: rotate(160deg);
}
.horn-right {
  bottom: 55px;
  left: 40px;
  transform: rotate(25deg);
}
.horn-right:before {
  box-shadow: inset -2px 0 0 0 #835f5a;
}
.horn-right .line {
  box-shadow: inset 0 2px 0 0 #835f5a;
  right: -2px;
  transform: rotate(150deg);
}
.horn-right .line-three {
  right: 13px;
  transform: rotate(20deg);
}

.ears {
  position: absolute;
  top: 70px;
}

.ear {
  background-color: #91655d;
  border-radius: 100% 50% 50% 50%;
  height: 18px;
  position: relative;
  right: 20px;
  top: 10px;
  transform: rotate(30deg);
  transform-origin: 100%;
  width: 30px;
}
.ear:before {
  background-color: #e7beb2;
  border-radius: 100% 50% 50% 50%;
  height: 9px;
  content: "";
  display: block;
  left: 5px;
  position: relative;
  top: 5px;
  width: 15px;
}
.ear-left {
  animation: ear-left 2s cubic-bezier(0.6, -0.28, 0.74, 0.05) infinite alternate-reverse;
  transform: rotate(30deg);
}
.ear-right {
  animation: ear-right 2s cubic-bezier(0.6, -0.28, 0.74, 0.05) 2s infinite alternate-reverse;
  left: 10px;
  right: 0;
  top: -8px;
  transform: rotate(160deg);
}

.eyes {
  position: absolute;
  top: 90px;
  right: -5px;
  width: 32px;
  z-index: 2;
}
.eyes .eye {
  background: linear-gradient(0deg, white 50%, #aa8275 50%);
  border-radius: 15px;
  height: 15px;
  width: 15px;
}
.eyes .eye:before {
  animation: eaves 3s infinite alternate-reverse;
  background-color: #aa8275;
  border-radius: 9px 9px 0 0;
  height: 9px;
  content: "";
  display: block;
  position: relative;
  width: 15px;
  top: -1px;
  z-index: 1;
}
.eyes .eye:after {
  animation: eyes 3s infinite alternate-reverse;
  background-color: #495169;
  border-radius: 5px;
  height: 5px;
  content: "";
  display: block;
  left: 5px;
  position: relative;
  top: -3px;
  transform: translate(3px, 2px);
  width: 5px;
}
.eyes .eye-left {
  float: left;
}
.eyes .eye-right {
  float: right;
}

.nose {
  background-color: #91655d;
  border-radius: 0 7px 15px;
  top: 47px;
  height: 18px;
  left: 40px;
  position: relative;
  width: 20px;
  z-index: 2;
}
.nose:before {
  background-color: #fb5d5d;
  border-radius: 15px;
  content: "";
  display: block;
  height: 14px;
  position: absolute;
  right: -0.5px;
  top: -0.5px;
  width: 16px;
}
.nose:after {
  background-color: white;
  border-radius: 5px;
  content: "";
  display: block;
  height: 2px;
  position: absolute;
  right: 4px;
  top: 2px;
  width: 5px;
}

.body {
  background-color: #91655d;
  border-radius: 50px 50px 0;
  box-shadow: inset 7px 0 0 0 #9c7169;
  height: 140px;
  position: relative;
  width: 50px;
  z-index: 1;
}
.body:before {
  background-color: #e7beb2;
  border-radius: 20px 0 0 20px;
  bottom: 20px;
  box-shadow: inset -7px 0 0 0 #c39e9a;
  content: "";
  display: block;
  height: 65px;
  position: absolute;
  right: 0;
  width: 20px;
}

.hooves {
  position: relative;
  bottom: 40px;
  right: 34px;
}

.hoof-one {
  animation: jump 0.3s ease-in-out infinite alternate-reverse;
  left: 10px;
  position: relative;
  top: 70px;
  transform: rotate(25deg);
  transform-origin: 100% 50%;
}
.hoof-one .line {
  height: 30px;
  border: 20px solid;
  border-radius: 40px;
  border-color: transparent transparent #91655d transparent;
  left: 25px;
  width: 30px;
  position: relative;
  top: 5px;
  transform: rotate(-30deg);
}
.hoof-one .anim-part {
  position: relative;
  bottom: 23px;
  left: 81px;
  transform: rotate(-75deg);
  transform-origin: left;
}
.hoof-one .circle {
  animation: hoof-one 0.3s ease-in-out infinite alternate-reverse;
  background-color: #91655d;
  height: 20px;
  width: 20px;
  border-radius: 30px;
  transform: translateX(3px) rotate(0deg);
}
.hoof-one .circle-last {
  border-radius: 20px 0 0 20px;
  transform: translateX(2px) rotate(0deg);
}
.hoof-one .circle-last:before {
  content: "";
  display: block;
  border-top: 20px solid #674a4a;
  border-left: 7px solid transparent;
  height: 0;
  left: 10px;
  width: 7px;
  position: relative;
  z-index: 1;
}
.hoof-one .circle-last:after {
  background-color: #ffb63c;
  border-radius: 10px;
  bottom: 30px;
  content: "";
  display: block;
  height: 40px;
  left: 19px;
  position: relative;
  width: 9px;
}
.hoof-two {
  animation: jump-two 0.3s ease-in-out infinite alternate-reverse;
  left: 55px;
  position: relative;
  top: 10px;
  z-index: -1;
}
.hoof-two .line-one, .hoof-two .line-two {
  height: 10px;
  border: 20px solid;
  border-radius: 40px;
  border-color: transparent transparent #91655d transparent;
  width: 10px;
  position: absolute;
}
.hoof-two .line-one {
  transform: rotate(-45deg);
}
.hoof-two .line-two {
  left: 30px;
  transform: rotate(135deg);
}

.tail {
  background-color: #9c7169;
  bottom: 0;
  left: 4px;
  position: absolute;
  width: 20px;
  z-index: 0;
}
.tail .circle {
  -webkit-animation: tail 2s cubic-bezier(0, 0.02, 0.9, 2) infinite;
  animation: tail 2s cubic-bezier(0, 0.02, 0.9, 2) infinite;
  background-color: #9c7169;
  border-radius: 11px;
  height: 12px;
  position: relative;
  right: 2px;
  transform: rotate(-5deg);
  width: 12px;
}

.legs {
  position: relative;
}
.legs:before {
  background: linear-gradient(to left, #91655d 50%, #9c7169 50%);
  bottom: 0;
  content: "";
  display: block;
  height: 10px;
  left: 7px;
  position: absolute;
  width: 30px;
  z-index: 0;
}

.leg-left:before, .leg-left:after, .leg-right:before, .leg-right:after {
  content: "";
  display: block;
  position: absolute;
  z-index: 1;
}
.leg-left .anim-part {
  animation: leg-left 0.4s ease-out infinite alternate-reverse;
  position: relative;
  top: 1px;
  transform: rotate(5deg) translateX(3px);
  transform-origin: right;
  z-index: 2;
}
.leg-left .anim-part:before, .leg-left .anim-part:after {
  content: "";
  display: block;
  position: absolute;
  z-index: 1;
}
.leg-left .anim-part:before {
  height: 16px;
  width: 16px;
  border: 20px solid;
  border-radius: 30px;
  border-color: transparent #835f5b transparent transparent;
  transform: rotate(-45deg);
  top: -17px;
  left: 17px;
}
.leg-left .anim-part .line {
  background-color: #835f5b;
  height: 25px;
  position: absolute;
  width: 20px;
  left: 51px;
  top: 7px;
  z-index: 2;
  transform: skew(-9deg);
}
.leg-left .anim-part:after {
  background-color: #835f5b;
  height: 20px;
  left: 33px;
  top: -20px;
  width: 24px;
}
.leg-left:after {
  background-color: #674a4a;
  height: 13px;
  left: 48px;
  top: 32px;
  transform: skew(-8deg);
  width: 20px;
  z-index: 2;
}
.leg-right {
  position: relative;
  right: 10px;
}
.leg-right:before {
  height: 30px;
  width: 38px;
  border: 20px solid;
  border-radius: 40px;
  border-color: #91655d transparent transparent transparent;
  transform: rotate(-15deg);
  z-index: 3;
  top: -29px;
  left: 21px;
}
.leg-right .anim-part {
  position: absolute;
  left: 64px;
  bottom: 9px;
  transform: rotate(43deg);
  z-index: 2;
}
.leg-right .anim-part .circle {
  animation: leg-right 0.4s ease-out infinite alternate-reverse;
  width: 20px;
  height: 20px;
  background-color: #91655d;
  border-radius: 20px;
  transform: translateX(4px) rotate(4deg);
}
.leg-right .anim-part .circle-last {
  border-radius: 20px 0 0 20px;
}
.leg-right .anim-part .circle-last:before {
  content: "";
  display: block;
  border-bottom: 20px solid #674a4a;
  border-right: 2px solid transparent;
  height: 0;
  left: 15px;
  width: 11px;
  position: relative;
  z-index: 1;
}

.presents {
  top: 3px;
  height: 45px;
  margin: 0 auto;
  position: relative;
  width: 110px;
}
.presents:after {
  animation: shadow 0.4s ease-out infinite alternate-reverse;
  background-color: #e7eff7;
  bottom: 0;
  border-radius: 7px;
  content: "";
  display: block;
  height: 7px;
  left: -22px;
  position: absolute;
  width: 170px;
}

.present {
  border-radius: 4px;
  bottom: 3px;
  position: absolute;
  z-index: 1;
}
.present:before, .present:after {
  content: "";
  display: block;
  position: relative;
}
.present:before {
  border-radius: 4px 4px 2px 2px;
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.04);
  right: 1px;
}
.present-one {
  background-color: #fb5d5d;
  height: 45px;
  right: 32px;
  width: 45px;
  z-index: 2;
}
.present-one:before {
  background-color: #fc7676;
  height: 12px;
  width: 47px;
}
.present-two {
  background-color: #82dfe3;
  height: 30px;
  width: 30px;
}
.present-two:before {
  background-color: #97e4e8;
  height: 10px;
  width: 32px;
}
.present-two:after {
  background-color: #69b2cb;
  bottom: 10px;
  height: 100%;
  left: 7px;
  width: 5px;
}
.present-two-right {
  right: 5px;
}
.present-three {
  background-color: #ffb63c;
  height: 25px;
  left: 25px;
  margin: auto;
  width: 25px;
  z-index: 2;
}
.present-three:before {
  background-color: #ffc056;
  height: 8px;
  width: 27px;
}
.present-three:after {
  background-color: #fb5353;
  bottom: 8px;
  height: 100%;
  left: 13px;
  width: 5px;
}

.snowflake {
  background-color: #e4e4e4;
  border-radius: 3px;
  height: 3px;
  position: absolute;
  top: 0;
  width: 3px;
  z-index: 3;
}

.snowflake:nth-child(0) {
  -webkit-animation: snow-0 6s infinite;
  animation: snow-0 6s infinite;
}

@-webkit-keyframes snow-0 {
  from {
    transform: translate(111px, -280px);
  }
  to {
    transform: translate(111px, 414px);
  }
}

@keyframes snow-0 {
  from {
    transform: translate(111px, -280px);
  }
  to {
    transform: translate(111px, 414px);
  }
}
.snowflake:nth-child(1) {
  -webkit-animation: snow-1 11s infinite;
  animation: snow-1 11s infinite;
}

@-webkit-keyframes snow-1 {
  from {
    transform: translate(335px, -138px);
  }
  to {
    transform: translate(335px, 531px);
  }
}

@keyframes snow-1 {
  from {
    transform: translate(335px, -138px);
  }
  to {
    transform: translate(335px, 531px);
  }
}
.snowflake:nth-child(2) {
  -webkit-animation: snow-2 9s infinite;
  animation: snow-2 9s infinite;
}

@-webkit-keyframes snow-2 {
  from {
    transform: translate(325px, -164px);
  }
  to {
    transform: translate(325px, 420px);
  }
}

@keyframes snow-2 {
  from {
    transform: translate(325px, -164px);
  }
  to {
    transform: translate(325px, 420px);
  }
}
.snowflake:nth-child(3) {
  -webkit-animation: snow-3 7s infinite;
  animation: snow-3 7s infinite;
}

@-webkit-keyframes snow-3 {
  from {
    transform: translate(214px, -196px);
  }
  to {
    transform: translate(214px, 522px);
  }
}

@keyframes snow-3 {
  from {
    transform: translate(214px, -196px);
  }
  to {
    transform: translate(214px, 522px);
  }
}
.snowflake:nth-child(4) {
  -webkit-animation: snow-4 9s infinite;
  animation: snow-4 9s infinite;
}

@-webkit-keyframes snow-4 {
  from {
    transform: translate(144px, -209px);
  }
  to {
    transform: translate(144px, 617px);
  }
}

@keyframes snow-4 {
  from {
    transform: translate(144px, -209px);
  }
  to {
    transform: translate(144px, 617px);
  }
}
.snowflake:nth-child(5) {
  -webkit-animation: snow-5 12s infinite;
  animation: snow-5 12s infinite;
}

@-webkit-keyframes snow-5 {
  from {
    transform: translate(238px, -17px);
  }
  to {
    transform: translate(238px, 688px);
  }
}

@keyframes snow-5 {
  from {
    transform: translate(238px, -17px);
  }
  to {
    transform: translate(238px, 688px);
  }
}
.snowflake:nth-child(6) {
  -webkit-animation: snow-6 8s infinite;
  animation: snow-6 8s infinite;
}

@-webkit-keyframes snow-6 {
  from {
    transform: translate(212px, -15px);
  }
  to {
    transform: translate(212px, 595px);
  }
}

@keyframes snow-6 {
  from {
    transform: translate(212px, -15px);
  }
  to {
    transform: translate(212px, 595px);
  }
}
.snowflake:nth-child(7) {
  -webkit-animation: snow-7 11s infinite;
  animation: snow-7 11s infinite;
}

@-webkit-keyframes snow-7 {
  from {
    transform: translate(322px, -137px);
  }
  to {
    transform: translate(322px, 414px);
  }
}

@keyframes snow-7 {
  from {
    transform: translate(322px, -137px);
  }
  to {
    transform: translate(322px, 414px);
  }
}
.snowflake:nth-child(8) {
  -webkit-animation: snow-8 14s infinite;
  animation: snow-8 14s infinite;
}

@-webkit-keyframes snow-8 {
  from {
    transform: translate(287px, -198px);
  }
  to {
    transform: translate(287px, 660px);
  }
}

@keyframes snow-8 {
  from {
    transform: translate(287px, -198px);
  }
  to {
    transform: translate(287px, 660px);
  }
}
.snowflake:nth-child(9) {
  -webkit-animation: snow-9 6s infinite;
  animation: snow-9 6s infinite;
}

@-webkit-keyframes snow-9 {
  from {
    transform: translate(403px, -66px);
  }
  to {
    transform: translate(403px, 515px);
  }
}

@keyframes snow-9 {
  from {
    transform: translate(403px, -66px);
  }
  to {
    transform: translate(403px, 515px);
  }
}
.snowflake:nth-child(10) {
  -webkit-animation: snow-10 11s infinite;
  animation: snow-10 11s infinite;
}

@-webkit-keyframes snow-10 {
  from {
    transform: translate(445px, -242px);
  }
  to {
    transform: translate(445px, 679px);
  }
}

@keyframes snow-10 {
  from {
    transform: translate(445px, -242px);
  }
  to {
    transform: translate(445px, 679px);
  }
}
.snowflake:nth-child(11) {
  -webkit-animation: snow-11 13s infinite;
  animation: snow-11 13s infinite;
}

@-webkit-keyframes snow-11 {
  from {
    transform: translate(347px, -272px);
  }
  to {
    transform: translate(347px, 600px);
  }
}

@keyframes snow-11 {
  from {
    transform: translate(347px, -272px);
  }
  to {
    transform: translate(347px, 600px);
  }
}
.snowflake:nth-child(12) {
  -webkit-animation: snow-12 15s infinite;
  animation: snow-12 15s infinite;
}

@-webkit-keyframes snow-12 {
  from {
    transform: translate(298px, -212px);
  }
  to {
    transform: translate(298px, 640px);
  }
}

@keyframes snow-12 {
  from {
    transform: translate(298px, -212px);
  }
  to {
    transform: translate(298px, 640px);
  }
}
.snowflake:nth-child(13) {
  -webkit-animation: snow-13 7s infinite;
  animation: snow-13 7s infinite;
}

@-webkit-keyframes snow-13 {
  from {
    transform: translate(70px, -23px);
  }
  to {
    transform: translate(70px, 548px);
  }
}

@keyframes snow-13 {
  from {
    transform: translate(70px, -23px);
  }
  to {
    transform: translate(70px, 548px);
  }
}
.snowflake:nth-child(14) {
  -webkit-animation: snow-14 15s infinite;
  animation: snow-14 15s infinite;
}

@-webkit-keyframes snow-14 {
  from {
    transform: translate(362px, -71px);
  }
  to {
    transform: translate(362px, 457px);
  }
}

@keyframes snow-14 {
  from {
    transform: translate(362px, -71px);
  }
  to {
    transform: translate(362px, 457px);
  }
}
.snowflake:nth-child(15) {
  -webkit-animation: snow-15 14s infinite;
  animation: snow-15 14s infinite;
}

@-webkit-keyframes snow-15 {
  from {
    transform: translate(211px, -132px);
  }
  to {
    transform: translate(211px, 405px);
  }
}

@keyframes snow-15 {
  from {
    transform: translate(211px, -132px);
  }
  to {
    transform: translate(211px, 405px);
  }
}
.snowflake:nth-child(16) {
  -webkit-animation: snow-16 15s infinite;
  animation: snow-16 15s infinite;
}

@-webkit-keyframes snow-16 {
  from {
    transform: translate(289px, -80px);
  }
  to {
    transform: translate(289px, 520px);
  }
}

@keyframes snow-16 {
  from {
    transform: translate(289px, -80px);
  }
  to {
    transform: translate(289px, 520px);
  }
}
.snowflake:nth-child(17) {
  -webkit-animation: snow-17 8s infinite;
  animation: snow-17 8s infinite;
}

@-webkit-keyframes snow-17 {
  from {
    transform: translate(332px, -134px);
  }
  to {
    transform: translate(332px, 496px);
  }
}

@keyframes snow-17 {
  from {
    transform: translate(332px, -134px);
  }
  to {
    transform: translate(332px, 496px);
  }
}
.snowflake:nth-child(18) {
  -webkit-animation: snow-18 12s infinite;
  animation: snow-18 12s infinite;
}

@-webkit-keyframes snow-18 {
  from {
    transform: translate(176px, -218px);
  }
  to {
    transform: translate(176px, 586px);
  }
}

@keyframes snow-18 {
  from {
    transform: translate(176px, -218px);
  }
  to {
    transform: translate(176px, 586px);
  }
}
.snowflake:nth-child(19) {
  -webkit-animation: snow-19 13s infinite;
  animation: snow-19 13s infinite;
}

@-webkit-keyframes snow-19 {
  from {
    transform: translate(207px, -29px);
  }
  to {
    transform: translate(207px, 639px);
  }
}

@keyframes snow-19 {
  from {
    transform: translate(207px, -29px);
  }
  to {
    transform: translate(207px, 639px);
  }
}
.snowflake:nth-child(20) {
  -webkit-animation: snow-20 7s infinite;
  animation: snow-20 7s infinite;
}

@-webkit-keyframes snow-20 {
  from {
    transform: translate(145px, -88px);
  }
  to {
    transform: translate(145px, 677px);
  }
}

@keyframes snow-20 {
  from {
    transform: translate(145px, -88px);
  }
  to {
    transform: translate(145px, 677px);
  }
}
.snowflake:nth-child(21) {
  -webkit-animation: snow-21 6s infinite;
  animation: snow-21 6s infinite;
}

@-webkit-keyframes snow-21 {
  from {
    transform: translate(352px, -150px);
  }
  to {
    transform: translate(352px, 536px);
  }
}

@keyframes snow-21 {
  from {
    transform: translate(352px, -150px);
  }
  to {
    transform: translate(352px, 536px);
  }
}
.snowflake:nth-child(22) {
  -webkit-animation: snow-22 15s infinite;
  animation: snow-22 15s infinite;
}

@-webkit-keyframes snow-22 {
  from {
    transform: translate(325px, -217px);
  }
  to {
    transform: translate(325px, 553px);
  }
}

@keyframes snow-22 {
  from {
    transform: translate(325px, -217px);
  }
  to {
    transform: translate(325px, 553px);
  }
}
.snowflake:nth-child(23) {
  -webkit-animation: snow-23 13s infinite;
  animation: snow-23 13s infinite;
}

@-webkit-keyframes snow-23 {
  from {
    transform: translate(229px, -75px);
  }
  to {
    transform: translate(229px, 470px);
  }
}

@keyframes snow-23 {
  from {
    transform: translate(229px, -75px);
  }
  to {
    transform: translate(229px, 470px);
  }
}
.snowflake:nth-child(24) {
  -webkit-animation: snow-24 7s infinite;
  animation: snow-24 7s infinite;
}

@-webkit-keyframes snow-24 {
  from {
    transform: translate(435px, -231px);
  }
  to {
    transform: translate(435px, 696px);
  }
}

@keyframes snow-24 {
  from {
    transform: translate(435px, -231px);
  }
  to {
    transform: translate(435px, 696px);
  }
}
.snowflake:nth-child(25) {
  -webkit-animation: snow-25 12s infinite;
  animation: snow-25 12s infinite;
}

@-webkit-keyframes snow-25 {
  from {
    transform: translate(125px, -169px);
  }
  to {
    transform: translate(125px, 412px);
  }
}

@keyframes snow-25 {
  from {
    transform: translate(125px, -169px);
  }
  to {
    transform: translate(125px, 412px);
  }
}
.snowflake:nth-child(26) {
  -webkit-animation: snow-26 13s infinite;
  animation: snow-26 13s infinite;
}

@-webkit-keyframes snow-26 {
  from {
    transform: translate(67px, -164px);
  }
  to {
    transform: translate(67px, 603px);
  }
}

@keyframes snow-26 {
  from {
    transform: translate(67px, -164px);
  }
  to {
    transform: translate(67px, 603px);
  }
}
.snowflake:nth-child(27) {
  -webkit-animation: snow-27 7s infinite;
  animation: snow-27 7s infinite;
}

@-webkit-keyframes snow-27 {
  from {
    transform: translate(421px, -226px);
  }
  to {
    transform: translate(421px, 442px);
  }
}

@keyframes snow-27 {
  from {
    transform: translate(421px, -226px);
  }
  to {
    transform: translate(421px, 442px);
  }
}
.snowflake:nth-child(28) {
  -webkit-animation: snow-28 15s infinite;
  animation: snow-28 15s infinite;
}

@-webkit-keyframes snow-28 {
  from {
    transform: translate(432px, -86px);
  }
  to {
    transform: translate(432px, 552px);
  }
}

@keyframes snow-28 {
  from {
    transform: translate(432px, -86px);
  }
  to {
    transform: translate(432px, 552px);
  }
}
.snowflake:nth-child(29) {
  -webkit-animation: snow-29 12s infinite;
  animation: snow-29 12s infinite;
}

@-webkit-keyframes snow-29 {
  from {
    transform: translate(312px, -195px);
  }
  to {
    transform: translate(312px, 563px);
  }
}

@keyframes snow-29 {
  from {
    transform: translate(312px, -195px);
  }
  to {
    transform: translate(312px, 563px);
  }
}
.snowflake:nth-child(30) {
  -webkit-animation: snow-30 14s infinite;
  animation: snow-30 14s infinite;
}

@-webkit-keyframes snow-30 {
  from {
    transform: translate(238px, -196px);
  }
  to {
    transform: translate(238px, 443px);
  }
}

@keyframes snow-30 {
  from {
    transform: translate(238px, -196px);
  }
  to {
    transform: translate(238px, 443px);
  }
}
.snowflake:nth-child(31) {
  -webkit-animation: snow-31 6s infinite;
  animation: snow-31 6s infinite;
}

@-webkit-keyframes snow-31 {
  from {
    transform: translate(51px, -288px);
  }
  to {
    transform: translate(51px, 428px);
  }
}

@keyframes snow-31 {
  from {
    transform: translate(51px, -288px);
  }
  to {
    transform: translate(51px, 428px);
  }
}
.snowflake:nth-child(32) {
  -webkit-animation: snow-32 13s infinite;
  animation: snow-32 13s infinite;
}

@-webkit-keyframes snow-32 {
  from {
    transform: translate(325px, -164px);
  }
  to {
    transform: translate(325px, 666px);
  }
}

@keyframes snow-32 {
  from {
    transform: translate(325px, -164px);
  }
  to {
    transform: translate(325px, 666px);
  }
}
.snowflake:nth-child(33) {
  -webkit-animation: snow-33 15s infinite;
  animation: snow-33 15s infinite;
}

@-webkit-keyframes snow-33 {
  from {
    transform: translate(368px, -97px);
  }
  to {
    transform: translate(368px, 512px);
  }
}

@keyframes snow-33 {
  from {
    transform: translate(368px, -97px);
  }
  to {
    transform: translate(368px, 512px);
  }
}
.snowflake:nth-child(34) {
  -webkit-animation: snow-34 7s infinite;
  animation: snow-34 7s infinite;
}

@-webkit-keyframes snow-34 {
  from {
    transform: translate(442px, -27px);
  }
  to {
    transform: translate(442px, 519px);
  }
}

@keyframes snow-34 {
  from {
    transform: translate(442px, -27px);
  }
  to {
    transform: translate(442px, 519px);
  }
}
.snowflake:nth-child(35) {
  -webkit-animation: snow-35 8s infinite;
  animation: snow-35 8s infinite;
}

@-webkit-keyframes snow-35 {
  from {
    transform: translate(417px, -68px);
  }
  to {
    transform: translate(417px, 470px);
  }
}

@keyframes snow-35 {
  from {
    transform: translate(417px, -68px);
  }
  to {
    transform: translate(417px, 470px);
  }
}
.snowflake:nth-child(36) {
  -webkit-animation: snow-36 12s infinite;
  animation: snow-36 12s infinite;
}

@-webkit-keyframes snow-36 {
  from {
    transform: translate(122px, -189px);
  }
  to {
    transform: translate(122px, 463px);
  }
}

@keyframes snow-36 {
  from {
    transform: translate(122px, -189px);
  }
  to {
    transform: translate(122px, 463px);
  }
}
.snowflake:nth-child(37) {
  -webkit-animation: snow-37 7s infinite;
  animation: snow-37 7s infinite;
}

@-webkit-keyframes snow-37 {
  from {
    transform: translate(423px, -177px);
  }
  to {
    transform: translate(423px, 440px);
  }
}

@keyframes snow-37 {
  from {
    transform: translate(423px, -177px);
  }
  to {
    transform: translate(423px, 440px);
  }
}
.snowflake:nth-child(38) {
  -webkit-animation: snow-38 10s infinite;
  animation: snow-38 10s infinite;
}

@-webkit-keyframes snow-38 {
  from {
    transform: translate(302px, -267px);
  }
  to {
    transform: translate(302px, 436px);
  }
}

@keyframes snow-38 {
  from {
    transform: translate(302px, -267px);
  }
  to {
    transform: translate(302px, 436px);
  }
}
.snowflake:nth-child(39) {
  -webkit-animation: snow-39 9s infinite;
  animation: snow-39 9s infinite;
}

@-webkit-keyframes snow-39 {
  from {
    transform: translate(179px, -237px);
  }
  to {
    transform: translate(179px, 674px);
  }
}

@keyframes snow-39 {
  from {
    transform: translate(179px, -237px);
  }
  to {
    transform: translate(179px, 674px);
  }
}
.snowflake:nth-child(40) {
  -webkit-animation: snow-40 13s infinite;
  animation: snow-40 13s infinite;
}

@-webkit-keyframes snow-40 {
  from {
    transform: translate(265px, -96px);
  }
  to {
    transform: translate(265px, 665px);
  }
}

@keyframes snow-40 {
  from {
    transform: translate(265px, -96px);
  }
  to {
    transform: translate(265px, 665px);
  }
}
.snowflake:nth-child(41) {
  -webkit-animation: snow-41 10s infinite;
  animation: snow-41 10s infinite;
}

@-webkit-keyframes snow-41 {
  from {
    transform: translate(83px, -185px);
  }
  to {
    transform: translate(83px, 618px);
  }
}

@keyframes snow-41 {
  from {
    transform: translate(83px, -185px);
  }
  to {
    transform: translate(83px, 618px);
  }
}
.snowflake:nth-child(42) {
  -webkit-animation: snow-42 14s infinite;
  animation: snow-42 14s infinite;
}

@-webkit-keyframes snow-42 {
  from {
    transform: translate(332px, -275px);
  }
  to {
    transform: translate(332px, 493px);
  }
}

@keyframes snow-42 {
  from {
    transform: translate(332px, -275px);
  }
  to {
    transform: translate(332px, 493px);
  }
}
.snowflake:nth-child(43) {
  -webkit-animation: snow-43 10s infinite;
  animation: snow-43 10s infinite;
}

@-webkit-keyframes snow-43 {
  from {
    transform: translate(339px, -229px);
  }
  to {
    transform: translate(339px, 628px);
  }
}

@keyframes snow-43 {
  from {
    transform: translate(339px, -229px);
  }
  to {
    transform: translate(339px, 628px);
  }
}
.snowflake:nth-child(44) {
  -webkit-animation: snow-44 11s infinite;
  animation: snow-44 11s infinite;
}

@-webkit-keyframes snow-44 {
  from {
    transform: translate(32px, -245px);
  }
  to {
    transform: translate(32px, 483px);
  }
}

@keyframes snow-44 {
  from {
    transform: translate(32px, -245px);
  }
  to {
    transform: translate(32px, 483px);
  }
}
.snowflake:nth-child(45) {
  -webkit-animation: snow-45 8s infinite;
  animation: snow-45 8s infinite;
}

@-webkit-keyframes snow-45 {
  from {
    transform: translate(265px, -182px);
  }
  to {
    transform: translate(265px, 450px);
  }
}

@keyframes snow-45 {
  from {
    transform: translate(265px, -182px);
  }
  to {
    transform: translate(265px, 450px);
  }
}
.snowflake:nth-child(46) {
  -webkit-animation: snow-46 10s infinite;
  animation: snow-46 10s infinite;
}

@-webkit-keyframes snow-46 {
  from {
    transform: translate(63px, -49px);
  }
  to {
    transform: translate(63px, 541px);
  }
}

@keyframes snow-46 {
  from {
    transform: translate(63px, -49px);
  }
  to {
    transform: translate(63px, 541px);
  }
}
.snowflake:nth-child(47) {
  -webkit-animation: snow-47 15s infinite;
  animation: snow-47 15s infinite;
}

@-webkit-keyframes snow-47 {
  from {
    transform: translate(68px, -8px);
  }
  to {
    transform: translate(68px, 592px);
  }
}

@keyframes snow-47 {
  from {
    transform: translate(68px, -8px);
  }
  to {
    transform: translate(68px, 592px);
  }
}
.snowflake:nth-child(48) {
  -webkit-animation: snow-48 14s infinite;
  animation: snow-48 14s infinite;
}

@-webkit-keyframes snow-48 {
  from {
    transform: translate(102px, -208px);
  }
  to {
    transform: translate(102px, 532px);
  }
}

@keyframes snow-48 {
  from {
    transform: translate(102px, -208px);
  }
  to {
    transform: translate(102px, 532px);
  }
}
.snowflake:nth-child(49) {
  -webkit-animation: snow-49 14s infinite;
  animation: snow-49 14s infinite;
}

@-webkit-keyframes snow-49 {
  from {
    transform: translate(250px, -91px);
  }
  to {
    transform: translate(250px, 562px);
  }
}

@keyframes snow-49 {
  from {
    transform: translate(250px, -91px);
  }
  to {
    transform: translate(250px, 562px);
  }
}
.snowflake:nth-child(50) {
  -webkit-animation: snow-50 9s infinite;
  animation: snow-50 9s infinite;
}

@-webkit-keyframes snow-50 {
  from {
    transform: translate(294px, -5px);
  }
  to {
    transform: translate(294px, 555px);
  }
}

@keyframes snow-50 {
  from {
    transform: translate(294px, -5px);
  }
  to {
    transform: translate(294px, 555px);
  }
}
.snowflake:nth-child(51) {
  -webkit-animation: snow-51 7s infinite;
  animation: snow-51 7s infinite;
}

@-webkit-keyframes snow-51 {
  from {
    transform: translate(165px, -158px);
  }
  to {
    transform: translate(165px, 557px);
  }
}

@keyframes snow-51 {
  from {
    transform: translate(165px, -158px);
  }
  to {
    transform: translate(165px, 557px);
  }
}
.snowflake:nth-child(52) {
  -webkit-animation: snow-52 13s infinite;
  animation: snow-52 13s infinite;
}

@-webkit-keyframes snow-52 {
  from {
    transform: translate(148px, -187px);
  }
  to {
    transform: translate(148px, 440px);
  }
}

@keyframes snow-52 {
  from {
    transform: translate(148px, -187px);
  }
  to {
    transform: translate(148px, 440px);
  }
}
.snowflake:nth-child(53) {
  -webkit-animation: snow-53 13s infinite;
  animation: snow-53 13s infinite;
}

@-webkit-keyframes snow-53 {
  from {
    transform: translate(211px, -85px);
  }
  to {
    transform: translate(211px, 508px);
  }
}

@keyframes snow-53 {
  from {
    transform: translate(211px, -85px);
  }
  to {
    transform: translate(211px, 508px);
  }
}
.snowflake:nth-child(54) {
  -webkit-animation: snow-54 12s infinite;
  animation: snow-54 12s infinite;
}

@-webkit-keyframes snow-54 {
  from {
    transform: translate(188px, -58px);
  }
  to {
    transform: translate(188px, 678px);
  }
}

@keyframes snow-54 {
  from {
    transform: translate(188px, -58px);
  }
  to {
    transform: translate(188px, 678px);
  }
}
.snowflake:nth-child(55) {
  -webkit-animation: snow-55 12s infinite;
  animation: snow-55 12s infinite;
}

@-webkit-keyframes snow-55 {
  from {
    transform: translate(347px, -167px);
  }
  to {
    transform: translate(347px, 433px);
  }
}

@keyframes snow-55 {
  from {
    transform: translate(347px, -167px);
  }
  to {
    transform: translate(347px, 433px);
  }
}
.snowflake:nth-child(56) {
  -webkit-animation: snow-56 12s infinite;
  animation: snow-56 12s infinite;
}

@-webkit-keyframes snow-56 {
  from {
    transform: translate(371px, -83px);
  }
  to {
    transform: translate(371px, 692px);
  }
}

@keyframes snow-56 {
  from {
    transform: translate(371px, -83px);
  }
  to {
    transform: translate(371px, 692px);
  }
}
.snowflake:nth-child(57) {
  -webkit-animation: snow-57 14s infinite;
  animation: snow-57 14s infinite;
}

@-webkit-keyframes snow-57 {
  from {
    transform: translate(197px, -203px);
  }
  to {
    transform: translate(197px, 652px);
  }
}

@keyframes snow-57 {
  from {
    transform: translate(197px, -203px);
  }
  to {
    transform: translate(197px, 652px);
  }
}
.snowflake:nth-child(58) {
  -webkit-animation: snow-58 8s infinite;
  animation: snow-58 8s infinite;
}

@-webkit-keyframes snow-58 {
  from {
    transform: translate(116px, -232px);
  }
  to {
    transform: translate(116px, 537px);
  }
}

@keyframes snow-58 {
  from {
    transform: translate(116px, -232px);
  }
  to {
    transform: translate(116px, 537px);
  }
}
.snowflake:nth-child(59) {
  -webkit-animation: snow-59 11s infinite;
  animation: snow-59 11s infinite;
}

@-webkit-keyframes snow-59 {
  from {
    transform: translate(371px, -212px);
  }
  to {
    transform: translate(371px, 403px);
  }
}

@keyframes snow-59 {
  from {
    transform: translate(371px, -212px);
  }
  to {
    transform: translate(371px, 403px);
  }
}
.snowflake:nth-child(60) {
  -webkit-animation: snow-60 10s infinite;
  animation: snow-60 10s infinite;
}

@-webkit-keyframes snow-60 {
  from {
    transform: translate(33px, -164px);
  }
  to {
    transform: translate(33px, 556px);
  }
}

@keyframes snow-60 {
  from {
    transform: translate(33px, -164px);
  }
  to {
    transform: translate(33px, 556px);
  }
}
.snowflake:nth-child(61) {
  -webkit-animation: snow-61 14s infinite;
  animation: snow-61 14s infinite;
}

@-webkit-keyframes snow-61 {
  from {
    transform: translate(218px, -121px);
  }
  to {
    transform: translate(218px, 597px);
  }
}

@keyframes snow-61 {
  from {
    transform: translate(218px, -121px);
  }
  to {
    transform: translate(218px, 597px);
  }
}
.snowflake:nth-child(62) {
  -webkit-animation: snow-62 9s infinite;
  animation: snow-62 9s infinite;
}

@-webkit-keyframes snow-62 {
  from {
    transform: translate(78px, -115px);
  }
  to {
    transform: translate(78px, 533px);
  }
}

@keyframes snow-62 {
  from {
    transform: translate(78px, -115px);
  }
  to {
    transform: translate(78px, 533px);
  }
}
.snowflake:nth-child(63) {
  -webkit-animation: snow-63 10s infinite;
  animation: snow-63 10s infinite;
}

@-webkit-keyframes snow-63 {
  from {
    transform: translate(67px, -246px);
  }
  to {
    transform: translate(67px, 675px);
  }
}

@keyframes snow-63 {
  from {
    transform: translate(67px, -246px);
  }
  to {
    transform: translate(67px, 675px);
  }
}
.snowflake:nth-child(64) {
  -webkit-animation: snow-64 7s infinite;
  animation: snow-64 7s infinite;
}

@-webkit-keyframes snow-64 {
  from {
    transform: translate(317px, -61px);
  }
  to {
    transform: translate(317px, 637px);
  }
}

@keyframes snow-64 {
  from {
    transform: translate(317px, -61px);
  }
  to {
    transform: translate(317px, 637px);
  }
}
.snowflake:nth-child(65) {
  -webkit-animation: snow-65 13s infinite;
  animation: snow-65 13s infinite;
}

@-webkit-keyframes snow-65 {
  from {
    transform: translate(48px, -9px);
  }
  to {
    transform: translate(48px, 487px);
  }
}

@keyframes snow-65 {
  from {
    transform: translate(48px, -9px);
  }
  to {
    transform: translate(48px, 487px);
  }
}
.snowflake:nth-child(66) {
  -webkit-animation: snow-66 9s infinite;
  animation: snow-66 9s infinite;
}

@-webkit-keyframes snow-66 {
  from {
    transform: translate(26px, -124px);
  }
  to {
    transform: translate(26px, 522px);
  }
}

@keyframes snow-66 {
  from {
    transform: translate(26px, -124px);
  }
  to {
    transform: translate(26px, 522px);
  }
}
.snowflake:nth-child(67) {
  -webkit-animation: snow-67 8s infinite;
  animation: snow-67 8s infinite;
}

@-webkit-keyframes snow-67 {
  from {
    transform: translate(376px, -227px);
  }
  to {
    transform: translate(376px, 592px);
  }
}

@keyframes snow-67 {
  from {
    transform: translate(376px, -227px);
  }
  to {
    transform: translate(376px, 592px);
  }
}
.snowflake:nth-child(68) {
  -webkit-animation: snow-68 14s infinite;
  animation: snow-68 14s infinite;
}

@-webkit-keyframes snow-68 {
  from {
    transform: translate(103px, -132px);
  }
  to {
    transform: translate(103px, 433px);
  }
}

@keyframes snow-68 {
  from {
    transform: translate(103px, -132px);
  }
  to {
    transform: translate(103px, 433px);
  }
}
.snowflake:nth-child(69) {
  -webkit-animation: snow-69 12s infinite;
  animation: snow-69 12s infinite;
}

@-webkit-keyframes snow-69 {
  from {
    transform: translate(122px, -286px);
  }
  to {
    transform: translate(122px, 550px);
  }
}

@keyframes snow-69 {
  from {
    transform: translate(122px, -286px);
  }
  to {
    transform: translate(122px, 550px);
  }
}
.snowflake:nth-child(70) {
  -webkit-animation: snow-70 7s infinite;
  animation: snow-70 7s infinite;
}

@-webkit-keyframes snow-70 {
  from {
    transform: translate(415px, -7px);
  }
  to {
    transform: translate(415px, 528px);
  }
}

@keyframes snow-70 {
  from {
    transform: translate(415px, -7px);
  }
  to {
    transform: translate(415px, 528px);
  }
}
.snowflake:nth-child(71) {
  -webkit-animation: snow-71 14s infinite;
  animation: snow-71 14s infinite;
}

@-webkit-keyframes snow-71 {
  from {
    transform: translate(9px, -109px);
  }
  to {
    transform: translate(9px, 489px);
  }
}

@keyframes snow-71 {
  from {
    transform: translate(9px, -109px);
  }
  to {
    transform: translate(9px, 489px);
  }
}
.snowflake:nth-child(72) {
  -webkit-animation: snow-72 10s infinite;
  animation: snow-72 10s infinite;
}

@-webkit-keyframes snow-72 {
  from {
    transform: translate(390px, -34px);
  }
  to {
    transform: translate(390px, 572px);
  }
}

@keyframes snow-72 {
  from {
    transform: translate(390px, -34px);
  }
  to {
    transform: translate(390px, 572px);
  }
}
.snowflake:nth-child(73) {
  -webkit-animation: snow-73 15s infinite;
  animation: snow-73 15s infinite;
}

@-webkit-keyframes snow-73 {
  from {
    transform: translate(213px, -291px);
  }
  to {
    transform: translate(213px, 683px);
  }
}

@keyframes snow-73 {
  from {
    transform: translate(213px, -291px);
  }
  to {
    transform: translate(213px, 683px);
  }
}
.snowflake:nth-child(74) {
  -webkit-animation: snow-74 15s infinite;
  animation: snow-74 15s infinite;
}

@-webkit-keyframes snow-74 {
  from {
    transform: translate(289px, -131px);
  }
  to {
    transform: translate(289px, 698px);
  }
}

@keyframes snow-74 {
  from {
    transform: translate(289px, -131px);
  }
  to {
    transform: translate(289px, 698px);
  }
}
.snowflake:nth-child(75) {
  -webkit-animation: snow-75 8s infinite;
  animation: snow-75 8s infinite;
}

@-webkit-keyframes snow-75 {
  from {
    transform: translate(103px, -246px);
  }
  to {
    transform: translate(103px, 686px);
  }
}

@keyframes snow-75 {
  from {
    transform: translate(103px, -246px);
  }
  to {
    transform: translate(103px, 686px);
  }
}
.snowflake:nth-child(76) {
  -webkit-animation: snow-76 13s infinite;
  animation: snow-76 13s infinite;
}

@-webkit-keyframes snow-76 {
  from {
    transform: translate(50px, -265px);
  }
  to {
    transform: translate(50px, 508px);
  }
}

@keyframes snow-76 {
  from {
    transform: translate(50px, -265px);
  }
  to {
    transform: translate(50px, 508px);
  }
}
.snowflake:nth-child(77) {
  -webkit-animation: snow-77 7s infinite;
  animation: snow-77 7s infinite;
}

@-webkit-keyframes snow-77 {
  from {
    transform: translate(87px, -297px);
  }
  to {
    transform: translate(87px, 629px);
  }
}

@keyframes snow-77 {
  from {
    transform: translate(87px, -297px);
  }
  to {
    transform: translate(87px, 629px);
  }
}
.snowflake:nth-child(78) {
  -webkit-animation: snow-78 10s infinite;
  animation: snow-78 10s infinite;
}

@-webkit-keyframes snow-78 {
  from {
    transform: translate(244px, -291px);
  }
  to {
    transform: translate(244px, 632px);
  }
}

@keyframes snow-78 {
  from {
    transform: translate(244px, -291px);
  }
  to {
    transform: translate(244px, 632px);
  }
}
.snowflake:nth-child(79) {
  -webkit-animation: snow-79 11s infinite;
  animation: snow-79 11s infinite;
}

@-webkit-keyframes snow-79 {
  from {
    transform: translate(403px, -8px);
  }
  to {
    transform: translate(403px, 430px);
  }
}

@keyframes snow-79 {
  from {
    transform: translate(403px, -8px);
  }
  to {
    transform: translate(403px, 430px);
  }
}
.snowflake:nth-child(80) {
  -webkit-animation: snow-80 11s infinite;
  animation: snow-80 11s infinite;
}

@-webkit-keyframes snow-80 {
  from {
    transform: translate(37px, -97px);
  }
  to {
    transform: translate(37px, 489px);
  }
}

@keyframes snow-80 {
  from {
    transform: translate(37px, -97px);
  }
  to {
    transform: translate(37px, 489px);
  }
}
.snowflake:nth-child(81) {
  -webkit-animation: snow-81 13s infinite;
  animation: snow-81 13s infinite;
}

@-webkit-keyframes snow-81 {
  from {
    transform: translate(424px, -101px);
  }
  to {
    transform: translate(424px, 532px);
  }
}

@keyframes snow-81 {
  from {
    transform: translate(424px, -101px);
  }
  to {
    transform: translate(424px, 532px);
  }
}
.snowflake:nth-child(82) {
  -webkit-animation: snow-82 12s infinite;
  animation: snow-82 12s infinite;
}

@-webkit-keyframes snow-82 {
  from {
    transform: translate(244px, -62px);
  }
  to {
    transform: translate(244px, 498px);
  }
}

@keyframes snow-82 {
  from {
    transform: translate(244px, -62px);
  }
  to {
    transform: translate(244px, 498px);
  }
}
.snowflake:nth-child(83) {
  -webkit-animation: snow-83 12s infinite;
  animation: snow-83 12s infinite;
}

@-webkit-keyframes snow-83 {
  from {
    transform: translate(48px, -83px);
  }
  to {
    transform: translate(48px, 622px);
  }
}

@keyframes snow-83 {
  from {
    transform: translate(48px, -83px);
  }
  to {
    transform: translate(48px, 622px);
  }
}
.snowflake:nth-child(84) {
  -webkit-animation: snow-84 12s infinite;
  animation: snow-84 12s infinite;
}

@-webkit-keyframes snow-84 {
  from {
    transform: translate(130px, -261px);
  }
  to {
    transform: translate(130px, 563px);
  }
}

@keyframes snow-84 {
  from {
    transform: translate(130px, -261px);
  }
  to {
    transform: translate(130px, 563px);
  }
}
.snowflake:nth-child(85) {
  -webkit-animation: snow-85 15s infinite;
  animation: snow-85 15s infinite;
}

@-webkit-keyframes snow-85 {
  from {
    transform: translate(403px, -252px);
  }
  to {
    transform: translate(403px, 479px);
  }
}

@keyframes snow-85 {
  from {
    transform: translate(403px, -252px);
  }
  to {
    transform: translate(403px, 479px);
  }
}
.snowflake:nth-child(86) {
  -webkit-animation: snow-86 7s infinite;
  animation: snow-86 7s infinite;
}

@-webkit-keyframes snow-86 {
  from {
    transform: translate(285px, -71px);
  }
  to {
    transform: translate(285px, 491px);
  }
}

@keyframes snow-86 {
  from {
    transform: translate(285px, -71px);
  }
  to {
    transform: translate(285px, 491px);
  }
}
.snowflake:nth-child(87) {
  -webkit-animation: snow-87 11s infinite;
  animation: snow-87 11s infinite;
}

@-webkit-keyframes snow-87 {
  from {
    transform: translate(43px, -149px);
  }
  to {
    transform: translate(43px, 408px);
  }
}

@keyframes snow-87 {
  from {
    transform: translate(43px, -149px);
  }
  to {
    transform: translate(43px, 408px);
  }
}
.snowflake:nth-child(88) {
  -webkit-animation: snow-88 11s infinite;
  animation: snow-88 11s infinite;
}

@-webkit-keyframes snow-88 {
  from {
    transform: translate(344px, -43px);
  }
  to {
    transform: translate(344px, 680px);
  }
}

@keyframes snow-88 {
  from {
    transform: translate(344px, -43px);
  }
  to {
    transform: translate(344px, 680px);
  }
}
.snowflake:nth-child(89) {
  -webkit-animation: snow-89 6s infinite;
  animation: snow-89 6s infinite;
}

@-webkit-keyframes snow-89 {
  from {
    transform: translate(322px, -76px);
  }
  to {
    transform: translate(322px, 674px);
  }
}

@keyframes snow-89 {
  from {
    transform: translate(322px, -76px);
  }
  to {
    transform: translate(322px, 674px);
  }
}
.snowflake:nth-child(90) {
  -webkit-animation: snow-90 14s infinite;
  animation: snow-90 14s infinite;
}

@-webkit-keyframes snow-90 {
  from {
    transform: translate(407px, -293px);
  }
  to {
    transform: translate(407px, 576px);
  }
}

@keyframes snow-90 {
  from {
    transform: translate(407px, -293px);
  }
  to {
    transform: translate(407px, 576px);
  }
}
.snowflake:nth-child(91) {
  -webkit-animation: snow-91 14s infinite;
  animation: snow-91 14s infinite;
}

@-webkit-keyframes snow-91 {
  from {
    transform: translate(397px, -205px);
  }
  to {
    transform: translate(397px, 414px);
  }
}

@keyframes snow-91 {
  from {
    transform: translate(397px, -205px);
  }
  to {
    transform: translate(397px, 414px);
  }
}
.snowflake:nth-child(92) {
  -webkit-animation: snow-92 10s infinite;
  animation: snow-92 10s infinite;
}

@-webkit-keyframes snow-92 {
  from {
    transform: translate(199px, -101px);
  }
  to {
    transform: translate(199px, 409px);
  }
}

@keyframes snow-92 {
  from {
    transform: translate(199px, -101px);
  }
  to {
    transform: translate(199px, 409px);
  }
}
.snowflake:nth-child(93) {
  -webkit-animation: snow-93 13s infinite;
  animation: snow-93 13s infinite;
}

@-webkit-keyframes snow-93 {
  from {
    transform: translate(393px, -211px);
  }
  to {
    transform: translate(393px, 515px);
  }
}

@keyframes snow-93 {
  from {
    transform: translate(393px, -211px);
  }
  to {
    transform: translate(393px, 515px);
  }
}
.snowflake:nth-child(94) {
  -webkit-animation: snow-94 11s infinite;
  animation: snow-94 11s infinite;
}

@-webkit-keyframes snow-94 {
  from {
    transform: translate(295px, -184px);
  }
  to {
    transform: translate(295px, 626px);
  }
}

@keyframes snow-94 {
  from {
    transform: translate(295px, -184px);
  }
  to {
    transform: translate(295px, 626px);
  }
}
.snowflake:nth-child(95) {
  -webkit-animation: snow-95 10s infinite;
  animation: snow-95 10s infinite;
}

@-webkit-keyframes snow-95 {
  from {
    transform: translate(367px, -138px);
  }
  to {
    transform: translate(367px, 656px);
  }
}

@keyframes snow-95 {
  from {
    transform: translate(367px, -138px);
  }
  to {
    transform: translate(367px, 656px);
  }
}
.snowflake:nth-child(96) {
  -webkit-animation: snow-96 15s infinite;
  animation: snow-96 15s infinite;
}

@-webkit-keyframes snow-96 {
  from {
    transform: translate(316px, -243px);
  }
  to {
    transform: translate(316px, 680px);
  }
}

@keyframes snow-96 {
  from {
    transform: translate(316px, -243px);
  }
  to {
    transform: translate(316px, 680px);
  }
}
.snowflake:nth-child(97) {
  -webkit-animation: snow-97 11s infinite;
  animation: snow-97 11s infinite;
}

@-webkit-keyframes snow-97 {
  from {
    transform: translate(312px, -15px);
  }
  to {
    transform: translate(312px, 677px);
  }
}

@keyframes snow-97 {
  from {
    transform: translate(312px, -15px);
  }
  to {
    transform: translate(312px, 677px);
  }
}
.snowflake:nth-child(98) {
  -webkit-animation: snow-98 13s infinite;
  animation: snow-98 13s infinite;
}

@-webkit-keyframes snow-98 {
  from {
    transform: translate(355px, -115px);
  }
  to {
    transform: translate(355px, 477px);
  }
}

@keyframes snow-98 {
  from {
    transform: translate(355px, -115px);
  }
  to {
    transform: translate(355px, 477px);
  }
}
.snowflake:nth-child(99) {
  -webkit-animation: snow-99 9s infinite;
  animation: snow-99 9s infinite;
}

@-webkit-keyframes snow-99 {
  from {
    transform: translate(304px, -104px);
  }
  to {
    transform: translate(304px, 607px);
  }
}

@keyframes snow-99 {
  from {
    transform: translate(304px, -104px);
  }
  to {
    transform: translate(304px, 607px);
  }
}
.snowflake:nth-child(100) {
  -webkit-animation: snow-100 7s infinite;
  animation: snow-100 7s infinite;
}

@-webkit-keyframes snow-100 {
  from {
    transform: translate(176px, -246px);
  }
  to {
    transform: translate(176px, 596px);
  }
}

@keyframes snow-100 {
  from {
    transform: translate(176px, -246px);
  }
  to {
    transform: translate(176px, 596px);
  }
}
@-webkit-keyframes tail {
  10% {
    transform: rotate(2deg);
  }
  20% {
    transform: rotate(-5deg);
  }
}
@keyframes tail {
  10% {
    transform: rotate(2deg);
  }
  20% {
    transform: rotate(-5deg);
  }
}
@-webkit-keyframes shadow {
  to {
    width: 185px;
  }
}
@keyframes shadow {
  to {
    width: 185px;
  }
}
@-webkit-keyframes eyes {
  50% {
    transform: translate(3px, 2px);
  }
  60% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes eyes {
  50% {
    transform: translate(3px, 2px);
  }
  60% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
@-webkit-keyframes eaves {
  50% {
    transform: translateY(0);
  }
  60% {
    transform: translateY(-1px);
  }
  100% {
    transform: translateY(-1px);
  }
}
@keyframes eaves {
  50% {
    transform: translateY(0);
  }
  60% {
    transform: translateY(-1px);
  }
  100% {
    transform: translateY(-1px);
  }
}
@-webkit-keyframes hoof-one {
  to {
    transform: translateX(2px) rotate(5deg);
  }
}
@keyframes hoof-one {
  to {
    transform: translateX(2px) rotate(5deg);
  }
}
@-webkit-keyframes jump {
  to {
    transform: translateY(-2px) rotate(25deg);
  }
}
@keyframes jump {
  to {
    transform: translateY(-2px) rotate(25deg);
  }
}
@-webkit-keyframes jump-two {
  to {
    transform: translateY(2px);
  }
}
@keyframes jump-two {
  to {
    transform: translateY(2px);
  }
}
@-webkit-keyframes rocking {
  to {
    transform: rotate(-1deg);
  }
}
@keyframes rocking {
  to {
    transform: rotate(-1deg);
  }
}
@-webkit-keyframes ear-left {
  85% {
    transform: rotate(30deg);
  }
  100% {
    transform: rotate(-10deg);
  }
}
@keyframes ear-left {
  85% {
    transform: rotate(30deg);
  }
  100% {
    transform: rotate(-10deg);
  }
}
@-webkit-keyframes ear-right {
  85% {
    transform: rotate(160deg);
  }
  100% {
    transform: rotate(170deg);
  }
}
@keyframes ear-right {
  85% {
    transform: rotate(160deg);
  }
  100% {
    transform: rotate(170deg);
  }
}
@-webkit-keyframes leg-right {
  to {
    transform: translateX(4px) rotate(2deg);
  }
}
@keyframes leg-right {
  to {
    transform: translateX(4px) rotate(2deg);
  }
}
@-webkit-keyframes leg-left {
  0% {
    transform: rotate(0deg) translateX(0px);
  }
  50% {
    transform: rotate(5deg) translateX(3px);
  }
}
@keyframes leg-left {
  0% {
    transform: rotate(0deg) translateX(0px);
  }
  50% {
    transform: rotate(5deg) translateX(3px);
  }
}
a {
  font-weight: 600;
  color: #91a7ff;
  text-decoration: none;
}
a:hover {
  color: #5c7cfa;
  text-decoration: underline;
}

html,
body {
  font-family: "Open Sans";
}

body {
  background-color: #f8f9fa;
  color: #adb5bd;
}

.title {
  text-align: center;
}
.title h1 {
  font-size: 1.5em;
  margin: 100px 0 10px 0;
}

.socials {
  display: block;
  font-size: 14px;
  margin: 0;
  padding: 0;
}
.socials li {
  display: inline;
}
.socials li:not(:last-child) {
  margin-right: 0.75em;
}
.socials li a {
  vertical-align: middle;
}
.socials li a:hover img {
  -webkit-animation: link 0.5s;
  animation: link 0.5s;
}
.socials li a img {
  width: 1.3em;
}

.credits {
  font-size: 0.8em;
  text-align: center;
}

.love {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/42764/heart-smil.svg);
  display: inline-block;
  height: 16px;
  vertical-align: middle;
  width: 16px;
}

.container {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px #dee2e6;
  height: 300px;
  margin: 40px auto 50px auto;
  position: relative;
  width: 450px;
}

.artboard {
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
}

@-webkit-keyframes link {
  25% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(-10deg);
  }
}

@keyframes link {
  25% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(-10deg);
  }
}

</style>