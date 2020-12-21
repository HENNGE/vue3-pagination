import { DefineComponent, Plugin } from 'vue';

declare const VPagination: DefineComponent & { install: Exclude<Plugin['install'], undefined> };
export default VPagination;
