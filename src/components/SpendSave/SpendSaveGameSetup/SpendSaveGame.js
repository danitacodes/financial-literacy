import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { spendSaveData, spendSaveConfig } from '../util/index';
import Item from '../SpendSaveGameSetup/Item';

const Game = () => {
    const navigate = useNavigate();
    const { buckets, items } = spendSaveData;
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

        setFallingTime(prevTime => prevTime * 0.95);
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
    <div id="Game">
        {error && <div className='error'></div>}
        {success && <div className='success'></div>}

        <div className='counter'>{points}</div>
        <div className='items'>
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
        <div className='buckets'>
            {buckets && buckets.map((bucket, idx) => (
                <div key={bucket.slug} className={"bucket " + bucket.slug}>
                    {bucket.name}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Game