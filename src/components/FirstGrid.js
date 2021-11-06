import "./FirstGrid.css"

function FirstGrid() {
    return (
        <div className="grid-container">
            <div className="image-container">
                <img src="/images/grid1.svg" alt="" />
            </div>
            <div className="grid-text-container1">
                <div className="grid-text">
                    <h1>Put the human back in HR.</h1>
                    <p>Your employees are the real stars. Show the love 
                        and help them perform!</p>
                </div>
            </div>
            <div className="grid-text-container2">
                <div className="grid-text">
                    <h1>You don’t have to play all the parts.</h1>
                    <p>Sales, accounting, HR— Oh My! You can’t do it all - let Clerksy help.</p>
                </div>
            </div>
            <div className="image-container1">
                <img src="/images/grid2.svg" alt="" />
            </div>
        </div>
    );
}

export default FirstGrid;