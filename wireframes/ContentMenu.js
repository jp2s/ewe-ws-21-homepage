import MenuEntryComp from "./MenuEntryComp.js";

export default {
    template:
        `
        <div :style="menuStyle">
            <menu-entry-comp v-for="(item, index) in items"
                :item="item"
                primary="black"
                secondary="hotpink"
                @click.native="$emit('set-index', index)"
            ></menu-entry-comp>
        </div>
        `,
    data() {
        return {
            hover: false
        }
    },
    computed: {
        menuStyle() {
            return `
                font-family: Helvetica Neue, serif;
                font-weight: 800;
                font-size: 30px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                row-gap: 20px;
            `
        },
    },
    props: [
        'items',
        'set-index'
    ],
    components: {
        MenuEntryComp
    }
}