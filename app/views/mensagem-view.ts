import { View } from "./view.js";

export class MensagemView extends View<String> {
	template(model: String): string {
		return `
           <p class="alert alert-info">${model}</p>
        `;
	}
}
