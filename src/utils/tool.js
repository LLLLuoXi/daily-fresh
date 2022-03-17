/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-16 23:17:39
 * @LastEditors: your name
 * @Description: 
 */
/* eslint-disable no-param-reassign */
function moveTo(start, end, dom, prop) {
  console.log(start, end, dom, prop);
  let dis = 0;
  let speed = 5;
  if (end < 0) {
    speed *= -1;
  }
  const t = setInterval(() => {
    dis += speed;
    dom[prop] = start + dis;
    if (Math.abs(dis) > Math.abs(end)) {
      dom[prop] = start + end;
      clearInterval(t);
    }
  }, 2);
}

function debounce(fn, duration = 100) {
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, duration)
  }
}

export default { moveTo, debounce }