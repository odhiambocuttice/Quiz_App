import React from 'react'
import { AnswerObject } from '../App';
import { ButtonWrapper, Wrapper } from './QuestionCard.style';


type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNo: number;
    totalQuestions: number;
}
const QuestionCard: React.FC<Props> = ({ question, answers, callback, questionNo, totalQuestions, userAnswer }) => {
    return (
        <Wrapper >
            <p className='number'>
                Question: {questionNo} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div >
                {answers.map(answer => (
                    <ButtonWrapper
                        key={answer}
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer}


                    >
                        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </ButtonWrapper>
                ))}
            </div>

        </Wrapper>
    )
}

export default QuestionCard
