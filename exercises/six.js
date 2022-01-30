import {exerciseSix, tocSix} from "../db/exerciseSix.js";
import {renderComponentExercise} from "../ui/Exercise/Exercise.js";

renderComponentExercise(
    {
        query: "cSix",
        givenId: "exSix",
        givenClass: "exerciseSix"
    },
    exerciseSix,
    {
        exerciseWrapperClass: "sixExerciseWrapperClass",
        exerciseClass: "sixExerciseTitle",
        taskWrapperClass: "sixTaskWrapperClass",
        titleClass: "sixTaskTitle",
        requestClass: "sixTaskRequest",
        replyClass: "sixTaskReply",
        tocWrapperClass: "sixTocWrapperClass",
        tocListWrapper: "sixTocListWrapper",
        tocDescription: "sixTocDescription",
        tocContentWrapper: "sixTocContentWrapper",
        tocTitle: "sixTocTitle",
        goToToWrapper: "sixGoToToWrapper",
        goToTopArrow: "sixGoToTopArrow"
    },
    tocSix,
)