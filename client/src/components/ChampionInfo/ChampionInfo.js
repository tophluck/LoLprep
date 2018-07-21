import React from "react";
import "./ChampionInfo.css";

export const ChampionInfo = (props) => (
    <div className="card championInfo">
        <div className="card-header myHeader">
            {props.champion.name}Aatrox - {props.champion.title}The Darkin Blade
        </div>
        <div className="card-body">
            <div className="row">
                <div className="col md-6">
                    <p>Base HP: {props.champion.hp}537.8</p>
                    <p>Base Mana: {props.champion.mp}105.6</p>
                    <p>Base Movespeed: {props.champion.movespeed}345</p>
                    <p>Base Armor: {props.champion.armor}24.348</p>
                    <p>Base Magic Resist: {props.champion.spellblock}32.1</p>
                    <p>Attack Range: {props.champion.attackrange}150</p>
                    <p>Base HP Regen: {props.champion.hpregen}6.59</p>
                    <p>Base Mana Regen: {props.champion.mpregen}0</p>
                    <p>Base Attack Damage: {props.champion.attackdamage}60.376</p>
                </div>
                <div className="col md-6">
                    <p>HP Per Level: {props.champion.hpperlevel}85</p>
                    <p>Mana Per level: {props.champion.mpperlevel}45</p>
                    <p>&nbsp;</p>
                    <p>Armor Per Level: {props.champion.armorperlevel}3.8</p>
                    <p>Magic Resist Per Level: {props.champion.spellblockperlevel}1.25</p>
                    <p>Attack Speed Per Level: {props.champion.attackspeedperlevel}3</p>
                    <p>HP Regen Per Level: {props.champion.hpregenperlevel}0.5</p>
                    <p>Mana Regen Per Level: {props.champion.mpregenperlevel}0</p>
                    <p>Attack Damage Per Level: {props.champion.attackdamageperlevel}3.2</p>
                </div>
            </div>
        </div>
        <div className="card-body">
            <div className="row">
                <div className="col md-6">
                    <h5 className="card-title">Is Countered By</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><img className="icon" src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/MonkeyKing.png"/> Wukong</li>
                        <li className="list-group-item"><img className="icon" src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Illaoi.png"/> Illaoi</li>
                        <li className="list-group-item"><img className="icon" src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Garen.png"/> Garen</li>
                        <li className="list-group-item"><img className="icon" src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Camille.png"/> Camille</li>
                        <li className="list-group-item"><img className="icon" src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Urgot.png"/> Urgot</li>
                    </ul>
                </div>
                <div className="col md-6">
                    <h5 className="card-title">Counters</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><img className="icon" src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Vladimir.png"/> Vladimir</li>
                        <li className="list-group-item"><img className="icon" src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Shen.png"/> Shen</li>
                        <li className="list-group-item"><img className="icon" src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Irelia.png"/> Irelia</li>
                        <li className="list-group-item"><img className="icon" src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Kled.png"/> Kled</li>
                        <li className="list-group-item"><img className="icon" src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Darius.png"/> Darius</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);