### 该文件为路由配置文件

1. 文件的引入采用动态引入的方式；自动寻找 modules 文件夹下的 '*.router.ts' 文件
2. 文件的引入不会再向下查找子文件夹
3. component 支持懒加载配置 例： React.lazy(() => import('@/src/pages/home'))
4. 路由配置的导出方式请使用默认导出 export default RouterConfigItem[]
5. Auth 组件用于控制菜单权限，权限项根据情况增减
