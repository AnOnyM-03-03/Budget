import Vue from 'vue';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import 'element-ui/packages/theme-chalk/lib/index.css';
import {
   Button,
   Card,
   Form,
   FormItem,
   Input,
   Select,
   Option,
} from 'element-ui';

const elements = [Button, Card, Form, FormItem, Input, Select, Option];

// configure language

locale.use(lang);

// import components

elements.forEach((element) => Vue.use(element, { locale }));
