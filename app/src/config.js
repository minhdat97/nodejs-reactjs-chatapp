export const production = true; // set it to true when deploy to the server

const domain = production ? '35.226.138.71:3001' : '127.0.0.1:3001'; // if you have domain pointed to digitalOcean Cloud server let use your domain.eg: tabvn.comi
export const websocketUrl = `ws://${domain}`
export const apiUrl = `http://${domain}`
