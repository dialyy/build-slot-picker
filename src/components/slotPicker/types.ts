
export type TimeDataType = {
    morning: string[];
    afternoon: string[];
    evening: string[];
};


export type Slot = {
    day: string | null,
    partOfDay: string,
    hour: string | null
};