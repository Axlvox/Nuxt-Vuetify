interface Rotas {
    nome: string;
    path: string;
}

export default () => {
    const rotas: Rotas[] = [
        { nome: "Home", path: "/" },
        { nome: "Software", path: "/software" },
        { nome: "Pedrada", path: "/pedrada" },
        { nome: "Sobre", path: "/sobre" },
    ];
    return rotas;
}