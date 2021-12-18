import { useState, useCallback, ChangeEvent } from 'react';

type onChangType = (e: ChangeEvent<HTMLInputElement>) => void;
type onResetType = () => void;
type useInputType = (
    initialState?: string,
) => [string, onChangType, onResetType];

const useInput: useInputType = (initialState = '') => {
    const [value, setValue] = useState(initialState);

    const handler = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onReset = () => {
        setValue('');
    };
    return [value, handler, onReset];
};

export default useInput;
