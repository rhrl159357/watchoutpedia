interface Props{
    count: number;
    page: number;
    onPageChange: (page:number) => void;
    disabled?: boolean;
    siblingCount?: number;
    bounderyCount?: number;
 
}

const usePagenation = ({
    count,
    page,
    onPageChange,
    disabled,
    siblingCount = 1,
    bounderyCount = 1
}: Props) => {
    const range = (start: number, end: number) => {
        const length = end - start +1;
        return Array.from({length}).map(((_,index) => index + start));
    }
    const startPage = 1;
    const endPage = count;

    const startPages = range(startPage, Math.min(bounderyCount,count));
    const endPages = range(Math.max(count - bounderyCount +1,bounderyCount +1), count);

    const siblingStart = Math.max(
        Math.min(
            page +1 - siblingCount *2 -1
        ),
        bounderyCount +2
    );
    const siblingEnd = Math.min(
        Math.max(
            page + 1 +siblingCount,
            bounderyCount + siblingCount *2 +2
        ),
        endPages.length > 0 ? endPages[0] -2 : endPage -1
    );
    const itemList  = [
        'prev',
        ...startPages,
        ...(siblingStart > bounderyCount +2 ? ['start-ellipsis'] : bounderyCount +1 < count - bounderyCount ? [bounderyCount +1] : []),
        ...range(siblingStart, siblingEnd),
        ...(siblingCount < count - bounderyCount -1 ? ['end-ellipsis'] : count - bounderyCount > bounderyCount ? [count - bounderyCount] : []),
        ...endPages,
        'next'
    ]

    const items = itemList.map((item,index) => (
        typeof item === 'number' ? {
            key : index,
            onClick: () => onPageChange(item -1),
            disabled,
            selected : item -1 ===page,
            item
        } : {
            key: index,
            onClick: () => onPageChange(item === 'next' ? page+1 : page - 1),
            disabled: disabled || item.indexOf('ellipsis') > -1 || (item === 'next' ? page>= count -1 : page<1),
            selected :false,
            item
        }
    ))

    return {items};
}

export default usePagenation;