import React, { useState } from 'react';
import { spendSaveConfig } from '../util';
import { motion } from 'framer-motion';



const Item = ({ item, checkAndUpdatePoints, fallingTime }) => {

    const { width, height } = spendSaveConfig.itemSize;
    const startX = Math.floor(Math.random() * Math.floor(window.innerWidth));
    const [currentX, setCurrentX] = useState(startX);
    const [finished, setFinished] = useState(false);

    const onUpdate = (latest) => {
        if (
            latest.y > window.innerHeight - window.innerHeight * 0.25 && finished === false
        ) {
            checkAndUpdatePoints(currentX, item.choice);
            setFinished(true);
        }
    }
    if (finished) return "";

  return (
    <motion.div
        onDragEnd = {(event, info) => {
            setCurrentX(info.point.x);
        }}
        style={{
            backgroundImage: "url(" + item.backgroundImage + ")",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: width + "px",
            height: height + "px",
            originX: 0.5,
            originY: 0.5
        }}
        onUpdate={onUpdate}
        drag='x'
        dragMomentum={false}
        dragConstraints={{ left: 0, right: window.innerWidth - 25 }}
        inital={{ x: startX, y: 0 }}
        animate={{ y: "100vh" }}
        className={"item " + item.slug}
        transition={{ duration: fallingTime, ease: "linear" }}
        ></motion.div>
  )
}

export default Item