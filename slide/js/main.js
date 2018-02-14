Vue.component('slide',{
    template: `
    <div class="slide">
        <div class="viewport">
            <ul class="wrapper">
                <li v-for="list in lists" 
                v-text="list.index"
                v-bind:style="{backgroundColor: list.bgc, width: widthJS + 'px', transform: translate }"></li>
            </ul>
        </div>
        <div class="indexWrapper">
            <ul>
                <li class="index" 
                v-for="list in lists" 
                v-text="list.index"
                v-on:click="change(list)"
                v-bind:style="{backgroundColor: list.bgc}"></li>
            </ul>
        </div>
    </div>
    `,
    data(){
        return{
            lists: [
                {index: 0, bgc:'#A0FF2D'},
                {index: 1, bgc:'#E7404D'},
                {index: 2, bgc:'#52FFBD'},
                {index: 3, bgc:'#29BAFF'},
            ],
            widthJS: 510,
            translate: '',
        }
    },
    methods: {
        change(list) {
            this.translate = `translate(-${list.index * this.widthJS}px)`
        }
    }

})
new Vue({
    el: '#app',
    data: {
        
    },
    template: `
    <div class="window">
        <slide></slide>
    </div>
    `,
    methods: {
        
    }
})