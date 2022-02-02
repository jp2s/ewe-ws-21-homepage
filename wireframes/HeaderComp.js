import MenuEntryComp from "./MenuEntryComp.js";

export default {
    template:
        `
        <div :style="headerWrapper">
            <div :style="titleStyle">{{title}}</div>
            
            <div :style="entryWrapper">
                <menu-entry-comp 
                    v-for="(entry, index) in entries"
                    :item="entry"
                    primary="hotpink"
                    secondary="teal"
                    @click.native="$emit('set-index', index)"
                    >
                </menu-entry-comp>
            </div>
        </div>
        `,
    props: [
        'title',
        'entries',
        'set-index'
    ],
    computed: {
        headerWrapper() {
            return `
                font-family: Helvetica Neue, serif;
                font-weight: 800;
                display: flex;
                flex-direction: column;
                justify-content: stretch;
                align-items: center;
                width: 100%;
                row-gap: 20px;
            `
        },
        entryWrapper() {
            return `
                font-size: 50px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                width: 100%;
            `
        },
        titleStyle() {
            return `
                font-weight: 800;
                font-size: 80px;
                text-align: justify;
            `
        },
    },
    components: {
        MenuEntryComp
    }
}