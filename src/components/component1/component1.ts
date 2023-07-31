import { BaseComponent } from '../../helpers/base-component';
import styles from './component1.module.css';

export default class ComponentOne extends BaseComponent {
  constructor(parentNode: HTMLElement) {
    super({ classNames: [styles.component, 'semi-transparent'], parentNode });
  }
}
