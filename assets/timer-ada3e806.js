import{b as o,r}from"./player-4e6c0bd5.js";import"./preload-helper-8235fac6.js";import"./util-159a5f05.js";let n=Date.now();o.on("start",e=>{n=Date.now()});o.on("tick",e=>{e>=0&&e<=5&&(r("这个谱子长度为1小时，没有音符，不要尝试通关，会导致游戏崩溃",1600,900,"center",50,e<1?e:e>4?5-e:1),r("该铺子唯一用途为测试设备性能",1600,950,"center",50,e<1?e:e>4?5-e:1)),r(`实际运行时长：${((Date.now()-n)/1e3).toFixed(3)}秒`,1600,1e3,"center",50,1),r(`程序运行时长：${e.toFixed(3)}秒`,1600,1050,"center",50,1)});
