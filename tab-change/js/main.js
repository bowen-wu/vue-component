Vue.component('tab-change',{
    template: `
    <div class="dialog clearfix">
        <nav>
            <ul>
                <li class="clearfix" v-for="list in lists" 
                v-bind:class="{active: list.isShow}" 
                v-on:click.stop="active(list)">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-user"></use>
                    </svg>
                    <main v-text='list.title'></main>
                </li>
            </ul>
        </nav>
        <div class="content">
            <ul>
                <li v-for="list in lists" v-if="list.isShow">
                    <header v-text='list.title'></header>
                    <main v-text='list.content'></main>
                </li>
            </ul>
        </div>
    </div>
    `,
    data(){
        return{
            lists:[
                {
                    title: 'title1',
                    content: 'content1',
                    isShow: true,
                },
                {
                    title: 'title2',
                    content: 'content2',
                    isShow: false,
                },
                {
                    title: 'title3：超出部分隐藏',
                    content: 'content3',
                    isShow: false,
                },
                {
                    title: 'title4',
                    content: 'content4',
                    isShow: false,
                },
                {
                    title: 'title5',
                    content: 'content5',
                    isShow: false,
                },
                {
                    title: 'title6',
                    content: 'content6',
                    isShow: false,
                },
                {
                    title: 'title7',
                    content: 'content7',
                    isShow: false,
                },
                {
                    title: 'title8',
                    content: 'content8',
                    isShow: false,
                },
                {
                    title: 'title9',
                    content: 'content9',
                    isShow: false,
                },
            ]
        }
    },
    watch: {
        
    },
    methods: {
        active(active) {
            this.lists.map((item) => {
                item.isShow = false
            })
            active.isShow = true
        }
    }

})

new Vue({
    el: '#app',
    data: {

    },
    template: `
    <div class="window" >
        <tab-change></tab-change>
    </div>
    `,
    methods: {
        
    }
})