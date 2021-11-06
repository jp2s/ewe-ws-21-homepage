const isLocal = window.location.hostname === "localhost"

const localUrl = "/ewe-2021-homepage"
const serverUrl = "//www2.inf.h-brs.de/~jplein2s"

export const baseUrl = isLocal ? localUrl : serverUrl