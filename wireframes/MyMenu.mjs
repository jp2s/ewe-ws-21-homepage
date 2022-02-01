export default {
    template:
        `
        <div :style="mainStyle">
            <div class="menuItem" v-for="entry in entries"
                :style="itemStyle"
            >{{entry}}</div>
        </div>
        `,
    props: ['entries'],
    data: function() {
        return {
            vert: this.$attrs.vert
        }
    },
    computed: {
        mainStyle: function() {
            return `
                display: flex;
                flex-direction: ${this.vert ? 'column' : 'row'};
            `;
        },
        itemStyle: function() {
            return `
                padding: 8px;
                ${this.vert ?
                    `border-top: 4px solid black;
                    border-bottom: 4px solid black;
                    border-left: 8px solid black;
                    border-right: 8px solid black;`
                :   `border-top: 8px solid black;
                    border-bottom: 8px solid black;
                    border-left: 4px solid black;
                    border-right: 4px solid black;`
                }
            `;
        }
    },
    methods: {
        handleFoo: function() {
            console.log(this.$slots);
        }
    }
}