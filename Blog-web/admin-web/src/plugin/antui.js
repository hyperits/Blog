import { Button, Form, Icon, Input } from 'ant-design-vue';
export default {
  install: function (app) {
        app.use(Button);
        app.use(Form);
        app.use(Input);
        app.use(Icon);
    }
  }