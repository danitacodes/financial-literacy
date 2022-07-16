import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { spendSaveData, spendSaveConfig } from '../util/index';
import Item from '../SpendSaveGameSetup/Item';

const Game = () => {
    const navigate = useNavigate();
    const { buckets, items } = spendSaveData;
    const { width, height, margin } = spendSaveConfig.bucketSize;
    const [liveItems, setLiveItems] = useState([]);
    const [points, setPoints] = useState(0);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState(0);
    const [fallingTime, setFallingTime] = useState(spendSaveConfig.fallingTime);

    useEffect(() => {
        addRandomItem();
        setInterval(function() {
            addRandomItem();
        }, spendSaveConfig.interval * 1000);
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addRandomItem = () => {
        const len = items.length;
        const randomNumber = Math.floor(Math.random() * Math.floor(len));
        const randomItem = items[randomNumber];
        setLiveItems(prevItems => [...prevItems, randomItem]);
    }

    const checkAndUpdatePoints = (x, bucket) => {
        const bucketIndex = buckets.findIndex(b => b.slug === bucket);
        const bucketSize = window.innerWidth / buckets.length;
        const maxX = (bucketIndex + 1) * bucketSize;
        const minX = bucketIndex * bucketSize;

        setFallingTime(prevTime => prevTime * 1);
        if (x <= maxX && x >= minX) {
            setPoints(points + 1);
            showSuccess();
        } else {
            const newErrorCount = errors + 1;
            if (newErrorCount > spendSaveConfig.maxErrors) {
                navigate("/spendsave/lost");
            }
            setErrors(newErrorCount);
            showError();
        }
    }

    const showError = () => {
        setError(true);
        setTimeout(function() {
            setError(false);
        }, 500)
    }

    const showSuccess = () => {
        setSuccess(true);
        setTimeout(function() {
            setSuccess(false);
        }, 500)
    }


  return (
    <div name="game" className='bg-[#555B6E] pt-16 w-100 h-screen top-0 bottom-0 right-0 left-0'>
        <div className='fixed'>
            <div className='fixed'>
            {error && <div className='fixed h-100 w-100 z-[99]'></div>}
        {success && <div className='fixed h-100 w-100 z-[99]'></div>}

        <div className='absolute top-6 right-10 text-4xl text-white font-Lato'>{points}</div>
        <div className='absolute bg-cover'>
            {liveItems && 
            liveItems.map((item, idx) => {
                return (
                    <Item
                    fallingTime={fallingTime}
                    checkAndUpdatePoints={checkAndUpdatePoints}
                    item={item}
                    key={idx}
                    />
                );
            })}
        </div>
        <div className='flex self-end grow absolute h-1/4 z-[99]'>
            {buckets && buckets.map((bucket, idx) => (
                <div key={bucket.slug} className={"flex justify-center items-center bucket " + bucket.slug} style={{
                    backgroundImage: "url(" + bucket.backgroundImage + ")",
                    backgroundRepeat: 'no-repeat',
                    width: width + "px",
                    height: height + "px",
                    margin: margin + "px",
                    backgroundPosition: 'center',
                }}>
                    
                </div>
            ))}
        </div>
        </div>
            </div>
        
    </div>
  )
}

export default Game