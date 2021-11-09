import {exerciseTwo, tocTwo} from "../db/exerciseTwo.js";
import {renderComponentExercise} from "../ui/Exercise/Exercise.js";

renderComponentExercise(
    {
        query: "cTwo",
        givenId: "exTwo",
        givenClass: "exerciseTwo"
    },
    exerciseTwo,
    {
        exerciseWrapperClass: "twoExerciseWrapperClass",
        exerciseClass: "twoExerciseTitle",
        taskWrapperClass: "twoTaskWrapperClass",
        titleClass: "twoTaskTitle",
        requestClass: "twoTaskRequest",
        replyClass: "twoTaskReply",
        tocWrapperClass: "twoTocWrapperClass",
        tocListWrapper: "twoTocListWrapper",
        tocDescription: "twoTocDescription",
        tocContentWrapper: "twoTocContentWrapper",
        tocTitle: "twoTocTitle",
    },
    tocTwo
)