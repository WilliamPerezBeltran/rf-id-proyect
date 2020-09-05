const ipcRenderer = window.require("electron").ipcRenderer

export const example = async () => {
  try {
         // Async message sender
         ipcRenderer.send('example', 'oleeee  dfkadfl async ping')
         return new Promise((resolve, reject) => {
           ipcRenderer.once('asynReply',(event, xml) => {
             resolve(xml);
           });
         });
       } catch (error) {
         console.log(error);
         alert("faile at example ");
       }
     };

     