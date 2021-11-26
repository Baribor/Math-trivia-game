import './leaderBoard.css';


export default function LeaderBoard() {

    const testPlayers = ['Yinka', 'Grace', 'Tobi', 'Peter','Yinka', 'Grace', 'Tobi', 'Peter'];
    return (
        <div className='leader-board'>
            <h4>Leader Board</h4>
            <ol>
                {
                    testPlayers.map((x, index) => <li key={index}>{x} (100)</li>)
                }
            </ol>
        </div>
    );
}