import {exerciseNine, tocNine} from "../db/exerciseNine.js";
import {defaultExerciseClasses} from "../util/classes.js";
import {renderComponentExercise} from "../ui/Exercise/Exercise.js";

renderComponentExercise(
    {
        query: "cNine",
        givenId: "exNine",
        givenClass: "exerciseNine"
    },
    exerciseNine,
    defaultExerciseClasses,
    tocNine,
)