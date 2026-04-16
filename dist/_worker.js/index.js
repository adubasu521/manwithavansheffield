globalThis.process ??= {}; globalThis.process.env ??= {};
import { r as renderers } from './chunks/_@astro-renderers_D5-NmAgA.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DTGovPlQ.mjs';
import { manifest } from './manifest_-eLgh_20.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/about.astro.mjs');
const _page1 = () => import('./pages/blog/_slug_.astro.mjs');
const _page2 = () => import('./pages/blog.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/locations/_location_.astro.mjs');
const _page5 = () => import('./pages/locations.astro.mjs');
const _page6 = () => import('./pages/routes/_route_.astro.mjs');
const _page7 = () => import('./pages/routes.astro.mjs');
const _page8 = () => import('./pages/services/_service_.astro.mjs');
const _page9 = () => import('./pages/services.astro.mjs');
const _page10 = () => import('./pages/_location_/_service_.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/about.astro", _page0],
    ["src/pages/blog/[slug].astro", _page1],
    ["src/pages/blog/index.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/locations/[location].astro", _page4],
    ["src/pages/locations/index.astro", _page5],
    ["src/pages/routes/[route].astro", _page6],
    ["src/pages/routes/index.astro", _page7],
    ["src/pages/services/[service].astro", _page8],
    ["src/pages/services/index.astro", _page9],
    ["src/pages/[location]/[service].astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
