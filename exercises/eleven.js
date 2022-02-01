import {exerciseEleven, tocEleven} from "../db/exerciseEleven.js";
import {defaultExerciseClasses} from "../util/classes.js";
import {renderComponentExercise} from "../ui/Exercise/Exercise.js";

renderComponentExercise(
    {
        query: "cEleven",
        givenId: "exEleven",
        givenClass: "exerciseEleven"
    },
    exerciseEleven,
    defaultExerciseClasses,
    tocEleven,
)