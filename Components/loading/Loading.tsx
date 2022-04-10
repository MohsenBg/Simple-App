import React, { useEffect, useState } from "react";
import { Image } from "react-native";

const Loading = () => {
  const [frame, setFrame] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((oldFrame) => (oldFrame === 30 ? 1 : oldFrame + 1));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {frame === 1 && (
        <Image
          source={require("../../assets/Images/Loading/frame-1.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 2 && (
        <Image
          source={require("../../assets/Images/Loading/frame-2.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 3 && (
        <Image
          source={require("../../assets/Images/Loading/frame-3.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 4 && (
        <Image
          source={require("../../assets/Images/Loading/frame-4.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 5 && (
        <Image
          source={require("../../assets/Images/Loading/frame-5.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 6 && (
        <Image
          source={require("../../assets/Images/Loading/frame-6.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 7 && (
        <Image
          source={require("../../assets/Images/Loading/frame-7.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 8 && (
        <Image
          source={require("../../assets/Images/Loading/frame-8.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 9 && (
        <Image
          source={require("../../assets/Images/Loading/frame-9.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 10 && (
        <Image
          source={require("../../assets/Images/Loading/frame-10.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 11 && (
        <Image
          source={require("../../assets/Images/Loading/frame-11.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 12 && (
        <Image
          source={require("../../assets/Images/Loading/frame-12.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 13 && (
        <Image
          source={require("../../assets/Images/Loading/frame-13.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 14 && (
        <Image
          source={require("../../assets/Images/Loading/frame-14.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 15 && (
        <Image
          source={require("../../assets/Images/Loading/frame-15.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 16 && (
        <Image
          source={require("../../assets/Images/Loading/frame-16.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 17 && (
        <Image
          source={require("../../assets/Images/Loading/frame-17.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 18 && (
        <Image
          source={require("../../assets/Images/Loading/frame-18.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 19 && (
        <Image
          source={require("../../assets/Images/Loading/frame-19.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 20 && (
        <Image
          source={require("../../assets/Images/Loading/frame-20.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 21 && (
        <Image
          source={require("../../assets/Images/Loading/frame-21.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 22 && (
        <Image
          source={require("../../assets/Images/Loading/frame-22.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 23 && (
        <Image
          source={require("../../assets/Images/Loading/frame-23.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 24 && (
        <Image
          source={require("../../assets/Images/Loading/frame-24.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 25 && (
        <Image
          source={require("../../assets/Images/Loading/frame-25.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 26 && (
        <Image
          source={require("../../assets/Images/Loading/frame-26.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 27 && (
        <Image
          source={require("../../assets/Images/Loading/frame-27.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 28 && (
        <Image
          source={require("../../assets/Images/Loading/frame-28.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 29 && (
        <Image
          source={require("../../assets/Images/Loading/frame-29.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
      {frame === 30 && (
        <Image
          source={require("../../assets/Images/Loading/frame-30.png")}
          style={{ width: 60, height: 60 }}
        />
      )}
    </>
  );
};

export default Loading;
