import React, { useState, useEffect, useRef } from "react";
import data from "./vocabData";

const Vocabulary = () => {
  const synthRef = useRef(window.speechSynthesis);
  const [choices, setChoices] = useState([]);
  const [current, setCurrent] = useState(null);
  const [selected, setSelected] = useState({});
  const [voices1, setVoices1] = useState([]);
  const [voice1, setVoice1] = useState(null);

  const random = (array) => array[Math.floor(Math.random() * array.length)];

  useEffect(() => {
    setTimeout(() => {
      const voices = synthRef.current
        .getVoices()
        .filter((voice) => !voice.name.includes("Google"));

      const voiceA = voices.filter(
        (voice) => voice.lang.substring(0, 2) === "en"
      );
      setVoices1(voiceA);
      setVoice1(random(voiceA));
    }, 100);
  }, []);

  useEffect(() => {
    const all = data.pairs.flatMap(([valueA, valueB]) => {
      return [
        { word: data.word.code, value: valueA },
        { word: data.definition.code, value: valueB },
      ];
    });
    const sorted = all.sort(() => Math.random() - 0.5);
    setChoices(sorted);
  }, []);

  const matching = (valueA, valueB) =>
    data.pairs.some(
      ([pairA, pairB]) =>
        (valueA === pairA && valueB === pairB) ||
        (valueA === pairB && valueB === pairA)
    );

  const glow = () => {
    const phrases = ["You did that", "Yessir", "Say What Now", "Keep it up", "Don't stop now"];
    const utter = new SpeechSynthesisUtterance(random(phrases));
    utter.voice = voice1;
    setTimeout(() => {
      synthRef.current.speak(utter)
    }, 1000)
    
  }

  const grow = () => {
    const phrases = ["Try again", "It's a no for me dawg", "Nah bruh", "oof"];
    const utter = new SpeechSynthesisUtterance(random(phrases));
    utter.voice = voice1;
    setTimeout(() => {
      synthRef.current.speak(utter)
    }, 1000)
  }

  const choose = (choice) => {
    const utter = new SpeechSynthesisUtterance(choice.value);
    utter.voice = voice1;
    synthRef.current.speak(utter);

    if (current) {
      if (matching(current.value, choice.value)) {
        //match
        glow();
        setSelected({ ...selected, [choice.value]: true });
      } else {
        //mismatch
        grow()
        setSelected({ ...selected, [current.value]: false });
      }
      setCurrent(null);
    } else {
      setSelected({ ...selected, [choice.value]: true });
      setCurrent(choice);
    }
  };

  const reset = () => {
    setCurrent(null);
    setSelected({});
  };

  return (
    <div name="vocab" className="bg-[#555B6E] pt-16">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full">
        <div>
          <p className="text-2xl text-[#FAF9F9] py-4 font-bold text-left">
            Choose your voice
          </p>
          <ul className="flex w-100 my-2 mx-2">
            {voices1.map((voice) => (
              <li className="pr-2 pb-2" key={`${voice.name}`}>
                <button
                  onClick={() => setVoice1(voice)}
                  className={
                    voice1 && voice1.name === voice.name ? "selected" : ""
                  }
                  className="bg-seagreen hover:bg-[#FFD6BA] text-white font-bold py-2 px-4 rounded"
                >
                  {voice.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[#FAF9F9] text-2xl text-center py-4">
            Match the word with its definition
          </p>
        </div>

        <div>
          <ul className="choices flex flex-wrap w-100 my-2 mx-2">
            {choices.map((choice) => (
              <li className="pr-2 pb-2" key={`${choice.word}-${choice.value}`}>
                <button
                  onClick={() => choose(choice)}
                  className={
                    current && current.value === choice.value ? "selected" : ""
                  }
                  className={
                    !!selected[choice.value]
                      ? "bg-seagreen text-white opacity-50 cursor-not-allowed py-2 px-4 rounded"
                      : "bg-seagreen hover:bg-[#FFD6BA] text-white font-bold py-2 px-4 rounded"
                  }
                >
                  {choice.value}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
      <div className="flex justify-center">
      <button
          onClick={() => reset()}
          className="bg-[#FFD6BA] hover:bg-seagreen text-white font-bold py-2 px-4 mb-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Vocabulary;
