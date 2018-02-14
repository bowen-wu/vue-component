Vue.component('tab-change',{
    template: `
    <div class="dialog">
        <nav>
            <ul>
                <li v-for="list in lists" v-text='list.title'></li>
            </ul>
        </nav>
        <div class="content">
            <ul>
                <li v-for="list in lists">
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
                    isShow: false,
                },
                {
                    title: 'title2',
                    content: 'content2',
                    isShow: false,
                },
                {
                    title: 'title3',
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
            ]
        }
    },
    watch: {
        
    },
    methods: {
        
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