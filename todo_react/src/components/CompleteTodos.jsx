import React from "react";

export const CompleteTodos = (props) => {
    const {complete, onClickBack} = props;
    return (
        <div className="complete-area">
        <p className="ttl">完了のTODO</p>
        <ul>
            {complete.map((todo, index) => {
                return (
                    <div key={ todo } className="list-low">
                        <li>{ todo }</li>
                        <button onClick={() => onClickBack(index)}>戻す</button>
                    </div>
                );
            })}
        </ul>
        </div>
    );
};