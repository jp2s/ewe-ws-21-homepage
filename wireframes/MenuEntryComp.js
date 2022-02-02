export default {
    template:
        `
        <div 
            :style="hover ? itemStyleHover : itemStyle"
            @mouseover="hover = true"
            @mouseleave="hover = false"
        >
            {{item}}
        </div>
        `,
    data() {
        return {
            hover: false
        }
    },
    props: [
        'item',
        'primary',
        'secondary'
    ],
    computed: {
        itemStyle() {
            return `
                color: ${this.primary};
                transition: all 0.3s;
            `
        },
        itemStyleHover() {
            return `
                cursor: pointer;
                color: ${this.secondary};
                transition: all 0.3s;
            `
        }
    }
}