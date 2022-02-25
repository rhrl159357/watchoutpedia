import React from 'react'
import usePagenation from '../hooks/usePagenation';
import styled from '@emotion/styled/macro'
import {GrFormPrevious,GrFormNext} from 'react-icons/gr'
import {AiOutlineEllipsis} from 'react-icons/ai'

interface Props{
    count: number;
    page: number;
    onPageChange: (page:number) => void;
    disabled?: boolean;
    siblingCount?: number;
    bounderyCount?: number;
 
}

const Navigation = styled.nav``;

const Button = styled.button<{selected?: boolean}>`
    color: ${({selected}) => selected ? '#fff' : '#000'};
    border :0;
    margin: 0;
    padding:0;
    font-size:16px;
    font-weight: normal;
    background-color : ${({selected}) => selected ? '#36dafa':'#fff'};
    cursor : pointer;
    border-radius: 100%;
    width: 48px;
    height:48px;
    &:horver{
        background-color:#ccc;
        color:#fff
    }
    &:active {
        opacity: 0.8;
    }
`;

const Item = styled.li``;

const ItemList = styled.ul`
    margin: 0;
    padding: 0;
    display:flex;
    list-style:none;
    ${Item} + ${Item} {
        margin-left: 8px;
    }
`;


const Pageination: React.FC<Props> = ({
    count,
    page,
    onPageChange,
    disabled,
    siblingCount,
    bounderyCount
}) => {

    const getLabel = (item: number | string) => {
        if(typeof item === 'number') return item;
        else if (item.indexOf('ellipsis') > -1) return <AiOutlineEllipsis />
        else if (item.indexOf('prev') > -1) return <GrFormPrevious />
        else if (item.indexOf('next') > -1) return <GrFormNext />

    }

    const {items} = usePagenation({
        count,
        page,
        onPageChange,
        disabled,
        siblingCount,
        bounderyCount
    });

    return (
        <Navigation>
            <ItemList>
                {
                    items.map(({key,disabled,selected,onClick,item}) => (
                        <Item key={key}>
                            <Button disabled={disabled} selected={selected} onClick={onClick}>{getLabel(item)}</Button>
                        </Item>
                    ))
                }
            </ItemList>
        </Navigation>
    );
}

export default Pageination