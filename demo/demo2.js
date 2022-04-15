
const ap11 = new APlayer({
  element: document.getElementById('player11'),
  // mini: false,
  autoplay: true,
  lrcType: true,
  mutex: true,
  fixed:true,
  preload: 'metadata',
  siwtchBefore:loadFetchmeata,
  audio:[{
      id:123,
      type: "normal",
      theme: "rgb(22,18,18)",
      name:"123232"
  }]
});


function sleep(time){
return new Promise(sucess=>setTimeout(sucess,time))
}


async function loadLrc(){
 await sleep(5000);
 return "[00:00.000] 作词 : 方文山\n[00:00.750] 作曲 : 周杰伦\n[00:01.500] 编曲 : 林迈可\n[00:02.250] 制作人 : 周杰伦\n[00:03.000]\n[00:31.492]古巴比伦王颁布了汉谟拉比法典\n[00:35.018]刻在黑色的玄武岩\n[00:36.926]距今已经三千七百多年\n[00:39.350]你在橱窗前 凝视碑文的字眼\n[00:42.840]我却在旁静静欣赏你那张我深爱的脸\n[00:47.095]祭司 神殿 征战 弓箭 是谁的从前\n[00:50.899]喜欢在人潮中你只属于我的那画面\n[00:54.667]经过苏美女神身边 我以女神之名许愿\n[00:58.914]思念像底格里斯河般的蔓延\n[01:02.663]当古文明只剩下难解的语言\n[01:09.111]传说就成了永垂不朽的诗篇\n[01:17.855]我给你的爱写在西元前\n[01:20.428]深埋在美索不达米亚平原\n[01:25.409]几十个世纪后出土发现\n[01:28.009]泥板上的字迹依然清晰可见\n[01:32.990]我给你的爱写在西元前\n[01:35.619]深埋在美索不达米亚平原\n[01:40.554]用楔形文字刻下了永远\n[01:43.170]那已风化千年的誓言\n[01:46.491]一切又重演\n[01:50.929]祭司 神殿 征战 弓箭 是谁的从前\n[01:55.260]喜欢在人潮中你只属于我的那画面\n[01:59.029]经过苏美女神身边 我以女神之名许愿\n[02:03.278]思念像底格里斯河般的蔓延\n[02:07.074]当古文明只剩下难解的语言\n[02:13.412]传说就成了永垂不朽的诗篇\n[02:22.166]我给你的爱写在西元前\n[02:24.739]深埋在美索不达米亚平原\n[02:29.704]几十个世纪后出土发现\n[02:32.308]泥板上的字迹依然清晰可见\n[02:37.306]我给你的爱写在西元前\n[02:39.907]深埋在美索不达米亚平原\n[02:44.876]用楔形文字刻下了永远\n[02:47.453]那已风化千年的誓言\n[02:50.807]一切又重演\n[02:52.197]我感到很疲倦 离家乡还是很远\n[02:58.883]害怕再也不能回到你身边\n[03:07.634]我给你的爱写在西元前\n[03:10.230]深埋在美索不达米亚平原\n[03:15.186]几十个世纪后出土发现\n[03:17.760]泥板上的字迹依然清晰可见\n[03:22.774]我给你的爱写在西元前\n[03:25.371]深埋在美索不达米亚平原\n[03:30.347]用楔形文字刻下了永远\n[03:32.913]那已风化千年的誓言\n[03:36.279]一切又重演\n[03:36.954]爱在西元前\n[03:44.513]爱在西元前\n[03:46.884] 和声编写 : 周杰伦\n[03:49.255] 合声 : 周杰伦\n[03:51.626] 录音工程 : 杨瑞代 (J&A STUDIO)\n[03:53.997] 混音 : 杨大纬 (杨大纬录音工作室)\n"
}


async function loadCover(){
  await sleep(3000);
  return "https://p1.music.126.net/7R4UhE4MBErGHvI-dB3Rzg==/109951165606034156.jpg"
}

async function loadUrl(){
  await sleep(6000);
  return {
      name: "爱在西元前",
      url: "http://m7.music.126.net/20220415121121/ea5bc42161e0bc346c2810c87103f3e8/ymusic/uchWF2Sp79gjm3nP8iv5bw==/509951163211371585",
      artist: "周杰伦"
  }
}


async function  loadFetchmeata(audio,update){
   console.log('"audio',audio);
     if (audio.id===123) {
         console.time("加载耗时")
          const lrc= await loadLrc();
          const cover=await loadCover();
          const info=await loadUrl()
          console.log(cover,info);
          console.timeEnd("加载耗时")
          audio.lrc=lrc;
          audio.cover=cover;
          audio.name=info.name;
          audio.url=info.url;
          audio.artist=info.artist;
          update()
     }
}

