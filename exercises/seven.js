import {exerciseSeven, tocSeven} from "../db/exerciseSeven.js";
import {renderComponentExercise} from "../ui/Exercise/Exercise.js";

renderComponentExercise(
    {
        query: "cSeven",
        givenId: "exSeven",
        givenClass: "exerciseSeven"
    },
    exerciseSeven,
    {
        exerciseWrapperClass: "sevenExerciseWrapperClass",
        exerciseClass: "sevenExerciseTitle",
        taskWrapperClass: "sevenTaskWrapperClass",
        titleClass: "sevenTaskTitle",
        requestClass: "sevenTaskRequest",
        replyClass: "sevenTaskReply",
        tocWrapperClass: "sevenTocWrapperClass",
        tocListWrapper: "sevenTocListWrapper",
        tocDescription: "sevenTocDescription",
        tocContentWrapper: "sevenTocContentWrapper",
        tocTitle: "sevenTocTitle",
        goToToWrapper: "sevenGoToToWrapper",
        goToTopArrow: "sevenGoToTopArrow"
    },
    tocSeven,
)