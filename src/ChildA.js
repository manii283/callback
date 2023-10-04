import React, {memo} from 'react'

const ChildA = (Learing, count) => {
    console.log("Child Component")
  return (
    <></>
  )
}

export default memo(ChildA);