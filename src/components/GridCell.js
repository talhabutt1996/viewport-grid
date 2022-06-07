import { useRef, useEffect, useState } from "react"
import "./GridCell.scss"
function GridCell() {
    //react hooks
    const divRef = useRef()
    const [dimension, setDimension] = useState({
        width: 0,
        height: 0
    })
    //getting Width and height of current Screen
    useEffect(() => {
        setDimension({
            width: divRef.current.offsetWidth,
            height: divRef.current.offsetHeight
        })
    }, [divRef.current?.offsetWidth, divRef.current?.offsetHeight])
    //updating dimension if screen size change
    useEffect(() => {
        window.addEventListener("resize", () => {
            setDimension({
                width: divRef.current.offsetWidth,
                height: divRef.current.offsetHeight
            })
        })
    }, [])

    return (
        //display Height and Width
        <div
            ref={divRef}
            className="box"
        >{`${dimension.width} X ${dimension.height}`}</div>
    )
}
export default GridCell
