import { BaseComponent } from '../../helpers/base-component';
import styles from './component2.module.css';

export default class ComponentTwo extends BaseComponent {
  constructor(parentNode: HTMLElement) {
    super({ classNames: [styles.component], parentNode });
  }
}
