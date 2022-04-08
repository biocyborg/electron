declare module "react-dom";

declare module "*.js";
declare module "*.tsx";
declare module "*.less";

declare module "classnames";

declare module "*.module.sass" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

interface Window {
  stranger: {
    ipcRenderer: {
      send: Function;
      sendSync: Function;
      invoke: Function;
      on: Function;
      once: Function;
      removeListener: Function;
    };
  };
}
