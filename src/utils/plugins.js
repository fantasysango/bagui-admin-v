import Vue from 'vue';
// import VeLine from 'v-charts/lib/line.common';
// import VeMap from 'v-charts/lib/map.common';
// // 下面的依赖可以按照需求选择性加载
// // The following dependencies can be selectively loaded on demand
// import 'echarts/lib/component/markLine';
// import 'echarts/lib/component/markPoint';
// import 'echarts/lib/component/markArea';
// import 'echarts/lib/component/visualMap';
// import 'echarts/lib/component/dataZoom';
// import 'echarts/lib/component/toolbox';
// import 'echarts/lib/component/title';
// import 'zrender/lib/svg/svg';
// import 'v-charts/lib/style.css';

// [VeLine, VeMap].forEach(comp => {
//     Vue.component(comp.name, comp);
// });

import VeCharts from 'v-charts'
import 'v-charts/lib/style.css';

Vue.use(VeCharts)