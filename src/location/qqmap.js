/* eslint-disable */
import loadScript from 'load-script';

let callbacks = [];
let mapKey = 'ZVQBZ-2UBWW-3G3RS-OA4ZH-6AHSQ-7BFZF';
const defaultZoomOfMap = 15;

function QqMap(params) {
  this.container = params.el;
  this.initCenter = params.center;
  if (params.dragHandle) this.dragHandle = params.dragHandle;
  this.init();
}

/**
 * 初始化
 */
QqMap.prototype.init = function() {
  let center = this.initCenter;
  this.load(() => {
    this.drawMap(center.lat, center.lng);
  });
};

/**
 * 加载js
 * @param callback
 * @param key
 * @returns {*}
 */
QqMap.prototype.load = function(callback, key = mapKey) {
  callbacks.push(callback);

  if (typeof window.qq !== 'undefined' && typeof window.qq.maps !== 'undefined')
    return done(null, window.qq.maps);
  if (callbacks.length > 1) return null;

  let qqmapCallback = 'qqmapCallback' + Date.now();
  window[qqmapCallback] = function() {
    done(null, window.qq.maps);
    delete window[qqmapCallback];
  };
  let src = `https://map.qq.com/api/js?v=2.exp&key=${key}&libraries=convertor&callback=${qqmapCallback}`;
  loadScript(src, function(err) {
    if (err) console.log('load map js error.');
  });
};

/**
 * 绘制地图
 * @param lat
 * @param lng
 */
QqMap.prototype.drawMap = function(lat, lng) {
  this.map = new qq.maps.Map(this.container, {
    center: new qq.maps.LatLng(lat, lng),
    zoom: defaultZoomOfMap,
    zoomControl: false,
    mapTypeControl: false,
    minZoom: 1,
    maxZoom: 99999999999999,
    draggable: this.draggable,
  });
  if (this.dragHandle) this.listenDrag();
};

QqMap.prototype.markMap = function() {
  let map = this.map;
  new qq.maps.Marker({
    position: new qq.maps.LatLng(39.982163, 116.30607),
    map,
  });
};

/**
 * 监听拖拽
 */
QqMap.prototype.listenDrag = function() {
  // 地址解析
  this.geocoderDragend = new qq.maps.Geocoder({
    complete: (result) => {
      this.dragHandle &&
        typeof this.dragHandle === 'function' &&
        this.dragHandle({
          center: this.center,
          address: packageResultAddress(result),
        });
    },
    error: (err) => {
      this.dragHandle &&
        typeof this.dragHandle === 'function' &&
        this.dragHandle({
          center: this.center,
          address: '',
        });
    },
  });

  // 监听拖拽事件
  qq.maps.event.addListener(this.map, 'dragend', () => {
    this.dragendhandle();
  });
  this.dragendhandle();
};

/**
 * 拖拽处理
 */
QqMap.prototype.dragendhandle = function() {
  this.center = this.map.getCenter();
  this.geocoderDragend.getAddress(
    new qq.maps.LatLng(this.center.lat, this.center.lng)
  );
};

/**
 * 处理地址解析数据
 * @param result
 */
function packageResultAddress(result) {
  let address = result.detail.addressComponents;
  if (!address) return ''; //无数据返回

  let addressInfo = address.district + address.street;

  if (address.streetNumber.indexOf(address.street) === 0) {
    addressInfo += address.streetNumber.replace(address.street, '');
  } else {
    addressInfo += address.streetNumber;
  }
  return addressInfo;
}

function done(err, map) {
  callbacks.forEach(function(fn) {
    fn(err, map);
  });
  callbacks.length = 0;
}

export default QqMap;
