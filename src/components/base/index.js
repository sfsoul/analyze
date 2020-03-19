import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import Vue from 'vue';

export default function () {
    // 基础组件的自动化全局注册
    const requireComponent = require.context('./', false, /Base[A-Z]\w+\.(vue|js)$/);
    console.log(requireComponent, requireComponent.keys());
    requireComponent.keys().forEach((fileName) => {
        // 获取组件配置
        const componentConfig = requireComponent(fileName);
        console.log('componentConfig===>', componentConfig);
        const componentName = upperFirst(
            camelCase(
                // 获取和目录深度无关的文件名
                fileName
                    .split('/')
                    .pop()
                    .replace(/\.\w+$/, '')
            )
        );
        console.log('componentName===>', componentName);
        // 全局注册组件
        Vue.component(
            componentName,
            // 若该组件选项通过 export default 导出，则会优先使用 .default，否则回退到使用模块的根
            componentConfig.default || componentConfig
        );
    });
}
