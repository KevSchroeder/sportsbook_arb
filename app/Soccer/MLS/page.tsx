import React from 'react';

const buttonClass = 'bg-zinc-700 px-3 py-1 rounded';
const cardClass = 'bg-zinc-700 p-2 rounded';
const sgpClass = 'bg-green-600 px-2 py-1 text-xs rounded mr-2';
const oddsClass = 'flex space-x-4';
const teamOddsClass = 'text-green-500';

const SoccerOddsComponent = () => {
    return (
        <div className="bg-zinc-800 text-white p-4">
            <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-bold">Sportsbook / Soccer Odds / USA - MLS Odds</div>
                <div className="flex space-x-2">
                    <button className={buttonClass}>Game Lines</button>
                    <button className={buttonClass}>Quick SGP</button>
                    <button className={buttonClass}>Goalscorer Props</button>
                    <button className={buttonClass}>Shots/Assists Props</button>
                    <button className={buttonClass}>Player Parlays</button>
                    <button className={buttonClass}>Game Props</button>
                    <button className={buttonClass}>Team Props</button>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <div className={cardClass}>
                        <div className="font-bold">MONEYLINE (REGULAR TIME)</div>
                        <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center">
                                <div className={sgpClass}>SGP</div>
                                <div>Inter Miami vs Nashville SC</div>
                            </div>
                            <div className={oddsClass}>
                                <div>Inter Miami <span className={teamOddsClass}>-230</span></div>
                                <div>Draw <span className={teamOddsClass}>+350</span></div>
                                <div>Nashville SC <span className={teamOddsClass}>+550</span></div>
                            </div>
                        </div>
                    </div>
                    {/* Additional similar card components */}
                </div>
                <div className="space-y-2">
                    <div className={cardClass}>
                        <div className="font-bold">SPREAD (REGULAR TIME)</div>
                        {/* Add spread content here */}
                    </div>
                    {/* Additional similar card components */}
                </div>
            </div>
        </div>
    );
};

export default SoccerOddsComponent;