import {baseUrl} from "./url.js";

export const goToHome = `{window.location.href = '${baseUrl}';}`
export const goToPage = (page) => `{window.location.href = '${baseUrl}/pages/${page}.html';}`
export const goToTask = (index) => `{window.location.href = '#task${index}';}`
