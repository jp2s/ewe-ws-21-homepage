import {exerciseTwelve, tocTwelve} from "../db/exerciseTwelve.js";
import {defaultExerciseClasses} from "../util/classes.js";
import {renderComponentExercise} from "../ui/Exercise/Exercise.js";

renderComponentExercise(
    {
        query: "cTwelve",
        givenId: "exTwelve",
        givenClass: "exerciseTwelve"
    },
    exerciseTwelve,
    defaultExerciseClasses,
    tocTwelve,
)