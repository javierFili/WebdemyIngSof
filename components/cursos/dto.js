//Capa Data Transfer Object para sacar datos de API
//Controlador ayuda a sacar datos y dto filtra de manera satiisfactoria

const single = (resource, curso) => ({
    name: resource.name,
    description: resource.description,
    requirements: resource.requirements,
    state: resource.state,
    duration: resource.duration,
});

module.exports = {
    single
};