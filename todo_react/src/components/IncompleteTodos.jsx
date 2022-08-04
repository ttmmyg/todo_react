import React from "react";

export const IncompleteTodos = (props) => {
    const { incomplete, onClickComplete, onClickDelete} = props;
    return (
        <div className="incomplete-area">
        <p className="ttl">未完了のTODO</p>
        <ul>
            {incomplete.map((todo, index) => {
                return (
                    <div key={ todo } className="list-low">
                        <li>{ todo }</li>
                        <button onClick={() => onClickComplete(index)}>完了</button>
                        <button onClick={() => onClickDelete(index)}>削除</button>
                    </div>
                );
            })}
        </ul>
        </div>
    );
};