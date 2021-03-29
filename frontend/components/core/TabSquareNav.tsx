import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex; 
    position: relative;
`;

const SquareOption = styled.div<{ selected: boolean }>`
    padding: 12px;
    border-radius: 3px;
    margin-right: 12px;
    &:hover {
        cursor: pointer;
        background-color: ${({ theme, selected }) => !selected ? theme.colors.highlight : ""};
    }
`;

const TabSquare = styled.div`
    position: absolute;
    border-radius: 3px;
    z-index: 2;
    transition: all 0.1s ease-out;
    box-shadow: ${({ theme }) => theme.colors.boxShadow};
`;

interface PropTypes<T> {
    items: { label: string, value: T }[],
    selected?: T,
    onChange: (value: T) => void,
    style?: object,
};

export const TabSquareNav = ({ items, selected, onChange, }: PropTypes<string | number>) => {
    const [internalSelected, setInternalSelected] = useState(items[0].value);
    const [mounted, setMounted] = useState(false);
    const [coords, setCoords] = useState<undefined | { 
        width: number | undefined, 
        height: number | undefined, 
        left: number | undefined 
    }>();
    const optionRefs = useRef<{ [k:string]: HTMLElement | null }>({});

    const _selected = selected ?? internalSelected;

    useLayoutEffect(() => {
        setCoords({ 
            width: optionRefs.current[_selected]?.offsetWidth,
            height: optionRefs.current[_selected]?.offsetHeight,
            left: optionRefs.current[_selected]?.offsetLeft,
        });
    }, [_selected, mounted]);

    return (
        <Container onLoad={() => setMounted(true)}>
            {
                items.map(({ label, value }) =>
                    <SquareOption
                        selected={value === _selected}
                        ref={e => optionRefs.current[value] = e}
                        onClick={() => {
                            setInternalSelected(value);
                            onChange(value);
                        }}
                    >
                        {label}
                    </SquareOption>
                )
            }

            <TabSquare
                style={{ 
                    ...coords,
                    bottom: 0,
                }}
            />
        </Container>
    );
};