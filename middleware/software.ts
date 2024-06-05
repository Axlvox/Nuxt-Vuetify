export default defineNuxtRouteMiddleware((to, from) => {
    const valorParametro = +to.params.id;
    if (!isNaN(valorParametro))
    return navigateTo("/")
});

