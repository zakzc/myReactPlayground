import React, { useEffect, useLayoutEffect } from "react";

export default function Tests() {
  ///
  useEffect(() => {
    console.log("rendered 2nd, effect plain");
  });
  useEffect(() => {
    console.log("rendered 3rd, effect with []");
  }, []);
  useLayoutEffect(() => {
    console.log("rendered 1st - layout effect");
  }, []);
  ///
  return (
    <>
      <h1>Tests</h1>
      <p>and trials</p>
    </>
  );
}
