import React, { useState, useEffect } from "react"
import "./Sidebar.scss"
import GridCell from "./GridCell"
// import Burger from "../icons/Burger"
function Viewport() {
    //states
    const [columns, setColumns] = useState(2)
    const [rows, setRows] = useState(2)
    const [totalDivs, setTotalDivs] = useState(1)
    const [active, setActive] = useState("")

    //generating Divs
    useEffect(() => {
        setTotalDivs(rows * columns)
    }, [rows, columns])

    //openBurgerMenu
    const openSideBar = () => {
        setActive(active === "" ? "active" : "")
    }

    //burgerMenu Show if Active
    function menu() {
        if (active === "active") {
            return <div className="input">
                <label className="LabelRow"> Rows</label>
                <input
                    className="row"
                    type="number"
                    onChange={(e) => setRows(parseInt(e.target.value) || 1)}
                />
                <label className="LabelCol"> Columns</label>
                <input
                    className="column"
                    type="number"
                    onChange={(e) => setColumns(parseInt(e.target.value) || 1)}
                />
            </div>
        }
    }
    return (
        <div className="Maindiv">
            <div className={`inputSection ${active}`}>
                <svg className="Icon" viewBox="0 0 100 80" width="20" height="20" onClick={openSideBar} >
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>
                {menu()}
            </div>
            <div
                className="grid-class"
                style={{
                    gridTemplateColumns: `repeat(${columns}, 1fr)`,
                    gridTemplateRows: `repeat(${rows}, 1fr)`
                }}
            >

                {new Array(totalDivs).fill(0).map(() => (
                    <GridCell />
                ))}
            </div>
        </div>
    )
}
export default Viewport
