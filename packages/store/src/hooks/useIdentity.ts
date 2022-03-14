import {useDispatch, useSelector} from "react-redux";
import {signInThunk} from "../stores/identity/slice";
import {RootState} from "../store";

export function useIdentity() {
    const identity = useSelector<RootState>((state) => state.identity);
    const dispatch = useDispatch();

    return {
        identity,
        signIn: (email: string, password: string) => dispatch(signInThunk(email, password)),
    };
}