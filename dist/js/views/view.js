export class View {
    constructor(selector) {
        this.elemento = document.querySelector(selector);
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
    template(model) {
        throw Error("Classe filha deve implementar metodo template");
    }
}
