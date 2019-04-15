import {action, observable} from 'mobx';
import {toastDuration} from '../appConfig';

class ToasterStore {
  @observable toasts = [];

  @action addToast(message, level='success') {
    let newToast = {message,level};
    this.toasts.push(newToast);
    window.setTimeout(() => {
      let toastIndex = this.toasts.find((toast) => {return toast === newToast});
      this.toasts.splice(toastIndex, 1);
    },toastDuration)
  }
}

export default ToasterStore;
