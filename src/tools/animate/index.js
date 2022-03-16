/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-16 00:14:19
 * @LastEditors: your name
 * @Description: 
 */
import Vue from 'vue';
import com from './index.vue'

const Animate = Vue.extend(com)

export default function ({
  startX, startY, endX, endY, src, width, height, opacity
}) {
  const app = new Animate({
    el: document.createElement('div'),
    data() {
      return {
        moveX: startX,
        moveY: startY,
        sx: 1,
        sy: 1,
        opacity: opacity,
        exist: true,
        src,
        width,
        height
      }
    }
  })

  document.body.appendChild(app.$el)
  setTimeout(() => {
    app.moveX = endX;
    app.moveY = endY;
    app.sx = 0.1;
    app.sy = 0.1;
    app.opacity = 0
  }, 0)
  setTimeout(() => {
    app.exist = false
  }, 1100)

}