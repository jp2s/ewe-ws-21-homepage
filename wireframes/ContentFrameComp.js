export default {
    template:
        `
        <div :style="contentStyle">
            <div>{{data.desc}}</div>
            <div>
                <a 
                    style="
                        text-decoration: none; 
                        color: teal;
                        font-weight: 800;
                    "
                    class="refLink" 
                    :href="data.ref" 
                    target="_blank" 
                    rel="noopener noreferrer">
                Reference
                </a>
            </div>
        </div>
        `,
    data() {
        return {
            hover: false
        }
    },
    computed: {
        contentStyle() {
            return `
                font-family: Helvetica Neue, serif;
                font-size: 20px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                text-align: justify;
                row-gap: 20px;
                border: 4px dotted teal;
                padding: 24px;
            `
        },
    },
    props: [
        'data'
    ],
}