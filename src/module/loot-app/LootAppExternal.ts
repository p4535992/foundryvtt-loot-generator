type ItemPlaceholder = any;

interface Coins {
    pp: number;
    gp: number;
    sp: number;
    cp: number;
}

function toCoins(denomination: string, value: number): Coins {
    return {
        pp: denomination === 'pp' ? value : 0,
        gp: denomination === 'gp' ? value : 0,
        sp: denomination === 'sp' ? value : 0,
        cp: denomination === 'cp' ? value : 0,
    };
}

function noCoins(): Coins {
    return {
        pp: 0,
        gp: 0,
        sp: 0,
        cp: 0,
    };
}

function combineCoins(first: Coins, second: Coins): Coins {
    return {
        pp: first.pp + second.pp,
        gp: first.gp + second.gp,
        sp: first.sp + second.sp,
        cp: first.cp + second.cp,
    };
}

export function calculateWealth(items: ItemPlaceholder[]): Coins {
    return items
        .filter((item) => item.type === 'treasure' && item?.data?.denomination?.value !== undefined && item?.data?.denomination?.value !== null)
        .map((item) => {
            const value = (item.data?.value?.value ?? 1) * (item.data?.quantity?.value ?? 1);
            return toCoins(item.data.denomination.value, value);
        })
        .reduce(combineCoins, noCoins());
}
