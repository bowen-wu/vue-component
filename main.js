Vue.component('popover',{
    template: `
    <div class="window-inner">
        <div class=wrapper>
            <svg class="icon" v-on:click.stop="slide">
                <use xlink:href="#icon-slide"></use>
            </svg>
            <svg class="icon" v-on:click.stop="tabChange">
                <use xlink:href="#icon-table"></use>
            </svg>

            <svg class="icon" v-on:click.stop="todo">
                <use xlink:href="#icon-todo1"></use>
            </svg>
            <div>
                <svg class="icon" v-on:click.stop="wife">
                    <use xlink:href="#icon-wife"></use>
                </svg>
                <div class="wife" v-show="wifeDialog" v-bind:style="{top: top + 'px'}" v-on:click.stop>

                    <header>
                        <div>无线网络</div>
                        <div class="wifeStatus">
                            <div class="offWrapper" v-show="!wifeStatus" v-on:click.stop="wifeList">
                                <svg class="icon">
                                    <use xlink:href="#icon-switch-OFF"></use>
                                </svg>
                                <div class="circle off"></div>
                            </div>

                            <div class="onWrapper" v-show="wifeStatus">
                                <svg class="icon">
                                    <use xlink:href="#icon-refresh"></use>
                                </svg>
                                <div v-on:click.stop="wifeList">
                                    <svg class="icon">
                                        <use xlink:href="#icon-switch-ON"></use>
                                    </svg>
                                    <div class="circle on"></div>
                                </div>
                            </div>
                        </div>
                    </header>
                    
                    <div class="wifeScroll-outer">
                        <ul v-show="wifeStatus" v-bind:class="{wifeScroll: isWifeScroll}">
                            <li v-for="wife in wifes" v-on:click.stop="connect(wife)">
                                <div>
                                    <svg class="icon">
                                        <use xlink:href="#icon-lock"></use>
                                    </svg>
                                    <svg class="icon">
                                        <use xlink:href="#icon-wife"></use>
                                    </svg>
                                    {{wife.name}}
                                </div>
                                <svg class="icon" v-if="wife.isConnect">
                                    <use xlink:href="#icon-success01"></use>
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="todo" v-show="todoStatus" v-on:click.stop>
            <header>
                <div class="title">
                    Everything
                </div>
                <div class="icons">
                    <svg class="icon" >
                        <use xlink:href="#icon-home"></use>
                    </svg>
                    <svg class="icon" >
                        <use xlink:href="#icon-briefcase"></use>
                    </svg>
                    <svg class="icon" >
                        <use xlink:href="#icon-earth"></use>
                    </svg>
                </div>
            </header>
            <div class="container"></div>
            <footer>
                <div>
                    <div class="left">
                        <svg class="icon" >
                            <use xlink:href="#icon-success01"></use>
                        </svg>
                        Up to data
                    </div>
                    <div class="set">
                        <svg class="icon" >
                            <use xlink:href="#icon-set03"></use>
                        </svg>
                        <svg class="icon" >
                            <use xlink:href="#icon-triangleDown03"></use>
                        </svg> 
                    </div>
                </div>
            </footer>
        </div>
        <tab-change v-show="tabChangeStatus"></tab-change>
        <slide v-show="slideStatus"></slide>
    </div>
    `,
    props: ['isReset'],
    data(){
        return{
            slideStatus: false,
            tabChangeStatus: false,
            todoStatus: false,
            wifeDialog: false,
            wifeStatus: false,
            wifes: [
                {
                    name: 'name1',
                    isConnect: false,
                },
                {
                    name: 'name2',
                    isConnect: false,
                }, {
                    name: 'name3',
                    isConnect: false,
                }, {
                    name: 'name4',
                    isConnect: false,
                }, {
                    name: 'name5',
                    isConnect: false,
                }, {
                    name: 'name6',
                    isConnect: false,
                }, {
                    name: 'name7',
                    isConnect: false,
                }, {
                    name: 'name8',
                    isConnect: false,
                }],
            top: -56,
            isWifeScroll: false,
        }
    },
    watch: {
        isReset() {
            this.todoStatus = false
            this.wifeDialog = false
            this.tabChangeStatus = false
            this.slideStatus = false
        },
    },
    computed: {
        dialogStatus() {
            // return this.todoStatus === this.wifeDialog ? false : true
            if(this.slideStatus || this.tabChangeStatus || this.todoStatus || this.wifeDialog){
                return true
            }else{
                return false
            }
        }
    },
    methods: {
        wifeList() {
            this.wifeStatus = !this.wifeStatus
            if(this.wifeStatus){
                let len = this.wifes.length
                if(len <= 4){
                    this.top += -len*32
                }else if(len > 4){
                    this.top = -184
                    this.isWifeScroll = true
                }
            }else{
                this.top = -56
            } 
        },
        connect(wife){
            this.wifes.map((item) => {
                item.isConnect = false
            })
            wife.isConnect = true
        },
        todo: function() {
            this.wifeDialog = false
            this.tabChangeStatus = false
            this.slideStatus = false
            this.todoStatus = !this.todoStatus
            this.$emit("ready",this.dialogStatus)
        },
        wife() {
            this.todoStatus = false
            this.tabChangeStatus = false
            this.slideStatus = false
            this.wifeDialog = !this.wifeDialog 
            this.$emit("ready",this.dialogStatus)
        },
        tabChange() {
            this.todoStatus = false
            this.wifeDialog = false
            this.slideStatus = false
            this.tabChangeStatus = !this.tabChangeStatus
            this.$emit("ready",this.dialogStatus)
        },
        slide() {
            this.todoStatus = false
            this.wifeDialog = false
            this.tabChangeStatus = false
            this.slideStatus = !this.slideStatus
            this.$emit("ready",this.dialogStatus)
        }
    }

})

Vue.component('tab-change',{
    template: `
    <div class="dialog clearfix"
    v-on:click.stop>
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

Vue.component('slide',{
    template: `
    <div class="slide"
    v-on:click.stop>
        <div class="viewport">
            <ul>
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
                v-on:click.stop="change(list)"
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
        readyClick: false,
        isPopoverReset: false,
    },
    template: `
    <div class="window" v-on:click="closeDialog">
        <popover v-bind:is-reset="isPopoverReset" v-on:ready="xxx"></popover>
    </div>
    `,
    methods: {
        xxx(){
            if(arguments[0]){
                this.readyClick = !this.readyClick
            }
        },
        closeDialog(){
            this.isPopoverReset = !this.isPopoverReset
        }
    }
})