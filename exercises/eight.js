import {exerciseEight, tocEight} from "../db/exerciseEight.js";
import {defaultExerciseClasses} from "../util/classes.js";
import {renderComponentExercise} from "../ui/Exercise/Exercise.js";

renderComponentExercise(
    {
        query: "cEight",
        givenId: "exEight",
        givenClass: "exerciseEight"
    },
    exerciseEight,
    defaultExerciseClasses,
    tocEight,
)