import {imprint, tocImprint} from "../db/imprint.js";
import {defaultExerciseClasses} from "../util/classes.js";
import {renderComponentExercise} from "../ui/Exercise/Exercise.js";

renderComponentExercise(
    {
        query: "cImprint",
        givenId: "imprint",
        givenClass: "imprint"
    },
    imprint,
    defaultExerciseClasses,
    tocImprint,
)