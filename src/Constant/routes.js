const BASE_URL = import.meta.env.VITE_BASE_URL;

console.log(BASE_URL)
const ROUTES = {
    HOME: "/",
    PROJECTS: "/projects",
    ADD_PROJECTS: "/projects/add",
    SETTINGS: "/settings"
}

export default ROUTES