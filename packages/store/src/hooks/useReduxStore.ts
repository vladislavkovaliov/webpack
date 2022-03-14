import {useSelector} from "react-redux";
import {RootState} from "../store";

export function useReduxStore(name: keyof RootState) {
    const extractedStore = useSelector<RootState>((state) => state[name]);

    return {
        [name]: extractedStore,
    };
}