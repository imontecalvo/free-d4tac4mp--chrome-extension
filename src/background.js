// // Escucha eventos de instalación del Service Worker.
// chrome.runtime.onInstalled.addListener(function () {
//     console.log("entra oninstalled")
//     console.log('Service Worker instalado correctamente.');
//   });
  
//   // Escucha mensajes desde el contenido del sitio web.
//   chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     console.log("entra msg")
//     console.log(request)
//     if (request.message === "contentLoaded") {
//       // Envia un mensaje al contenido para que elimine el div.
//       chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, { action: "removeDiv" }, function (response) {
//           console.log(response.message);
//         });
//       });
//     }
//   });
  

// document.addEventListener("DOMContentLoaded", function () {
//     console.log("entra")
//     // Llama a la función para eliminar el div una vez que la página está completamente cargada.
//     // removeDiv();
// });

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     if (changeInfo.status == 'complete') {
//         chrome.tabs.executeScript(tabId, {code:"alert('Loaded');"});
//     }
// });