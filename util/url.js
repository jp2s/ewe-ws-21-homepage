const isLocal = window.location.hostname === "localhost"

const localUrl = "/ewe-2021-homepage"
const serverUrl = "https://jp2s.github.io/ewe-ws-21-homepage"

export const baseUrl = isLocal ? localUrl : serverUrl