export default {
    template:
        `
        <div
            style="
                row-gap: 32px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            "
        >
            <div 
                style="
                    row-gap: 8px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                "
            >
                <label for="textField" 
                    style="
                        font-family: Helvetica Neue, serif;
                        font-size: 30px;
                    "
                >please enter your text here:</label>
    
                <textarea 
                    v-on:keyup="handleChange()"
                    v-model="text"
                    style="
                        width: 500px;
                        border: 4px solid black;
                        font-size: 30px;
                        font-family: monospace;
                        transition: background-color 0.3s;
                        padding: 8px;
                    "
                ></textarea>
            </div>
            
            <div 
                style="
                    row-gap: 16px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                "
            >
                <div style="margin-bottom: 8px">
                    You have entered:
                </div>
                <div><ins :style="{'color': this.$attrs.color, 'text-decoration': 'none'}">{{letterCount}}</ins> {{letterCount === 1 ? "Letter" : "Letters"}}</div>
                <div><ins :style="{'color': this.$attrs.color, 'text-decoration': 'none'}">{{spaceCount}}</ins> {{spaceCount === 1 ? "Space" : "Spaces"}}</div>
                <div><ins :style="{'color': this.$attrs.color, 'text-decoration': 'none'}">{{wordCount}}</ins> {{wordCount === 1 ? "Word" : "Words"}}</div>
            </div>
        </div>
        `,
    data: function() {
        return {
            text: "",
            letterCount: 0,
            spaceCount: 0,
            wordCount: 0
        }
    },
    methods: {
        handleChange: function() {
            if (this.text === "") {
                this.letterCount = 0;
                this.spaceCount = 0;
                this.wordCount = 0;
                return;
            }

            this.letterCount = this.text
                .split("")
                .filter(char => char !== " ")
                .length
            this.spaceCount = this.text
                .split("")
                .filter(char => char === " ")
                .length;
            this.wordCount = this.text
                .split(" ")
                .filter(char => char !== "")
                .length;
        }
    }
}