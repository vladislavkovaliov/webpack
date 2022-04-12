import { useDispatch, useSelector } from "react-redux";
import { fetchAttackChains } from "../stores/attackChains/slice";
import { RootState } from "../store";

export function useAttackChains() {
    const attackChains = useSelector<RootState>((state) => state.attackChains);
    const dispatch = useDispatch();

    return {
        attackChains,
        // TODO: implement passing params
        fetchAttackChains: () => dispatch(fetchAttackChains()),
    };
}
