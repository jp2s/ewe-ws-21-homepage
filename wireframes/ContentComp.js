import ContentMenu from "./ContentMenu.js";
import ContentFrameComp from "./ContentFrameComp.js";

export default {
    template:
        `
        <div>
            <div :style="contentWrapper"
            >
                <content-menu 
                    :items="Object.keys(contentItem)"
                    @set-index="setContentIndex"
                ></content-menu>
                
                <content-frame-comp
                    v-for="(contentDesc, index) in Object.entries(contentItem)
                        .map(item => item[1])
                    "
                    :style="index === contentIndex ? show : hide"
                    :data="contentDesc"
                ></content-frame-comp>
            </div>
        </div>
        `,
    data() {
        return {
            hover: false,
            contentIndex: 0
        }
    },
    methods: {
        setContentIndex: function(index) {
            this.contentIndex = index
        },
    },
    computed: {
        contentWrapper() {
            return `
                font-family: Helvetica Neue, serif;
                font-size: 20px;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: flex-start;
                column-gap: 40px;
            `
        },
        hide() {
            return "display: none;"
        },
        show() {
            return "";
        }
    },
    props: [
        'content-item',
    ],
    components: {
        ContentMenu,
        ContentFrameComp
    }
}