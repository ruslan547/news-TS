import { ISources } from '../../../models/source';
import './sources.css';

class Sources {
    private stateSource: ISources<string>[];

    constructor() {
        this.stateSource = [];
    }

    draw(data: ISources<string>[]): void {
        this.stateSource = data;

        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources').append(fragment);
    }
}

export default Sources;
