import { createContext } from "react";
import { CollectionMint } from ".";

import { ContextValues } from "./types";

const Context = createContext<ContextValues>({
    isFetchingOwned: false,
    mints: [],
    refresh: () => new Promise(() => {}),
    createAssociatedAccount: () => new Promise(() => {}),
    createAccount: () => new Promise(() => {}),
    claimToken: () => new Promise(() => {}),
    spendTokens: () => new Promise(() => {}),
    fetchMint: (mint: CollectionMint) => mint
});

export default Context;
