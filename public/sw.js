importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js'
);

importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js'
);

// // This is your Service Worker, you can put any of your custom Service Worker
// // code in this file, above the `precacheAndRoute` line.

// // When widget is installed/pinned, push initial state.
// self.addEventListener('widgetinstall', (event) => {
//     event.waitUntil(updateWidget(event));
// });

// // When widget is shown, update content to ensure it is up-to-date.
// self.addEventListener('widgetresume', (event) => {
//     event.waitUntil(updateWidget(event));
// });

// // When the user clicks an element with an associated Action.Execute,
// // handle according to the 'verb' in event.action.
// self.addEventListener('widgetclick', (event) => {
// if (event.action == "updateName") {
//     event.waitUntil(updateName(event));
// }
// });

// // When the widget is uninstalled/unpinned, clean up any unnecessary
// // periodic sync or widget-related state.
// self.addEventListener('widgetuninstall', (event) => {});

// const updateWidget = async (event) => {
// // The widget definition represents the fields specified in the manifest.
//     const widgetDefinition = event.widget.definition;

//     // Fetch the template and data defined in the manifest to generate the payload.
//     const payload = {
//         template: JSON.stringify(await (await fetch(widgetDefinition.msAcTemplate)).json()),
//         data: JSON.stringify(await (await fetch(widgetDefinition.data)).json()),
//     };

//     // Push payload to widget.
//     await self.widgets.updateByInstanceId(event.instanceId, payload);
// }

// const updateName = async (event) => {
//     const name = event.data.json().name;

//     // The widget definition represents the fields specified in the manifest.
//     const widgetDefinition = event.widget.definition;

//     // Fetch the template and data defined in the manifest to generate the payload.
//     const payload = {
//         template: JSON.stringify(await (await fetch(widgetDefinition.msAcTemplate)).json()),
//         data: JSON.stringify({name}),
//     };

//     // Push payload to widget.
//     await self.widgets.updateByInstanceId(event.instanceId, payload);
// }

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);



const randomCache = "random"

const matchCb = ({url, request, event}) => {
    console.log(url.origin)
    
    return url.origin === "https://api.quotable.io"
}
workbox.routing.registerRoute(
    matchCb,
    new workbox.strategies.StaleWhileRevalidate({
        randomCache,
    })
)

// Establish a cache name
// const cacheName = 'query';

// self.addEventListener('install', (event) => {
    // event.waitUntil(caches.open(cacheName))
// })

// self.addEventListener('fetch', (event) => {
//     console.log(event)
//   });