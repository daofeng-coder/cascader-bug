import {
  Tabs,
  TabPane,
  Cascader,
  Popup,
  OverLay,
  Icon,
} from "@nutui/nutui-taro";

const components = [Tabs, TabPane, Cascader, Popup, OverLay, Icon];

export default {
  /**
   * @param {import('vue').App} app
   */
  install(app) {
    components.forEach(app.use);
  },
};
