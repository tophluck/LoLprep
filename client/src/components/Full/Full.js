import React from "react";
import "./Full.css";

export const Full = (props) => (
    <div class="container">
        <div className="row imageContainer">
            <div className="col">
                {/*<img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.name}_0.jpg`} />*/}
                <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg`} />
            </div>
        </div>
        <div className="row buttonContainer">
            <div className="col">
                <button type="button" class="btn btn-primary bg=primary">Create New Build</button>
            </div>
        </div>
    </div>
);