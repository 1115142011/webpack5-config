/**
 * @author painter
 * @filename index.ts
 * @date 2022-05-13 Friday
 * @description 路由配置
 */

export interface RouterConfigItem {
  /** 页面标题 */
  title?: string;
  path: string;
  /** 忽略登录 */
  ignoreLogin?: boolean;
  /** 路由组件 */
  component?:
    | React.LazyExoticComponent<React.ComponentType<any>>
    | React.ComponentType;
  /** 子路由配置 */
  children?: RouterConfigItem[];
}

const routerConfigList: RouterConfigItem[] = [];

const getALLRouter = (modules: any) => {
  modules
    .keys()
    .forEach((key: string) => routerConfigList.push(...modules(key).default));
};
getALLRouter(require.context("./modules", false, /\.router\.ts$/));

export default routerConfigList;
