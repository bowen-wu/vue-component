Vue.component('popover',{
    template: `
    <div class="window-inner">
        <div class="wrapper">
            <svg class="icon" v-on:click.stop="todo">
                <use xlink:href="#icon-todo1"></use>
            </svg>
            <div>
                <svg class="icon" v-on:click.stop="wife">
                    <use xlink:href="#icon-wife"></use>
                </svg>
                <div class="wife" v-show="wifeDialog" v-bind:style="{top: top + 'px'}" v-on:click.stop="">

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

        <div class="todo" v-show="todoStatus" v-on:click.stop="">
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
    </div>
    `,
    props: ['isReset'],
    data(){
        return{
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
        },
    },
    computed: {
        dialogStatus() {
            return this.todoStatus === this.wifeDialog ? false : true
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
            this.todoStatus = !this.todoStatus
            this.$emit("ready",this.dialogStatus)
        },
        wife() {
            this.todoStatus = false
            this.wifeDialog = !this.wifeDialog 
            this.$emit("ready",this.dialogStatus)
        },
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