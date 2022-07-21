import Letter from "./Letter"
import LetterModel from "../model/letter"

interface WordProps {
   onClick?:(e:string) => void
}

export default function Word(props: WordProps) {
    const stringAllLetters = 'qwertyuiopasdfghjklçzxcvbnm'
    const allLetters = [...stringAllLetters]
    return (
        <div className={'flex flex-wrap justify-center'}>
            {allLetters.map((letter, i) => {
                const printValue = new LetterModel(`${letter}` )
                return (
                    <Letter onClick={()=>props.onClick(printValue.value)} className="cursor-pointer" key={letter} letter={printValue} />
                )
            })}

        </div>
    )
}