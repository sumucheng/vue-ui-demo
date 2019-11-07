import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);

new Vue({
    el: "#app",
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message: 'hi',
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value)
        }
    }

});
import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies);

const expect = chai.expect;


// 单元测试
// {
//     const Constructor = Vue.extend(Button);
//     const vm = new Constructor({
//         propsData: {
//             icon: 'setting'
//         }
//     });
//     vm.$mount();
//     let useElement = vm.$el.querySelector('use');
//     let href = useElement.getAttribute('xlink:href');
//     expect(href).to.eq('#i-setting');
//     vm.$el.remove();
//     vm.$destroy()
// }
// {
//     const Constructor = Vue.extend(Button);
//     const button = new Constructor({
//         propsData: {
//             icon: 'setting',
//             loading: true
//         }
//     });
//     button.$mount();
//     let useElement = button.$el.querySelector('use');
//     let href = useElement.getAttribute('xlink:href');
//     expect(href).to.eq('#i-loading');
//     button.$el.remove();
//     button.$destroy()
// }
// {
//     const div = document.createElement('div');
//     document.body.appendChild(div);
//     const Constructor = Vue.extend(Button);
//     const button = new Constructor({
//         propsData: {
//             icon: 'setting',
//         }
//     });
//     button.$mount(div);
//     let svg = button.$el.querySelector('svg');
//     let {order} = window.getComputedStyle(svg);
//     expect(order).to.eq('1');
//     button.$el.remove();
//     button.$destroy()
// }
// {
//     const div = document.createElement('div');
//     document.body.appendChild(div);
//     const Constructor = Vue.extend(Button);
//     const button = new Constructor({
//         propsData: {
//             icon: 'setting',
//             iconPosition: 'right'
//         }
//     });
//     button.$mount(div);
//     let svg = button.$el.querySelector('svg');
//     let {order} = window.getComputedStyle(svg);
//     expect(order).to.eq('2');
//     button.$el.remove();
//     button.$destroy()
// }
// {
//     //mock
//     const Constructor = Vue.extend(Button);
//     const vm = new Constructor({
//         propsData: {
//             icon: 'setting',
//         }
//     });
//     vm.$mount();
//     let spy = chai.spy(function () {
//     });
//
//     vm.$on('click', spy);
//
//     let button = vm.$el;
//     button.click();
//     expect(spy).to.have.been.called()
// }
