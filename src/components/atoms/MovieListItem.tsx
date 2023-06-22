import React, { FC, useState } from "react";

export type MovieListItemProps  = {
    title: string,
    id: string,
    selected: boolean,
    onItemSelected: Function
}

const MovieListItem: FC<MovieListItemProps> = ({
    title, 
    id,
    selected,
    onItemSelected
}) => {

    let bgColor = 'white';

    if(selected) bgColor = 'gray';

    const selectItem = () => {
        onItemSelected(id, title);
    }

    return (
        <li onClick={selectItem} style={{backgroundColor: bgColor}} >
            { title }
        </li>
    );

}

export default MovieListItem;