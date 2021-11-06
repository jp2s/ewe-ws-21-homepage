import {exerciseOne} from "../db/exerciseOne.js";
import {renderComponentExercise} from "../ui/Exercise/Exercise.js";

renderComponentExercise(
    {
        query: "cOne",
        givenId: "exOne",
        givenClass: "exerciseOne"
    },
    exerciseOne,
    {
        exerciseWrapperClass: "oneExerciseWrapperClass",
        exerciseClass: "oneExerciseTitle",
        taskWrapperClass: "oneTaskWrapperClass",
        titleClass: "oneTaskTitle",
        requestClass: "oneTaskRequest",
        replyClass: "oneTaskReply"
    },
)