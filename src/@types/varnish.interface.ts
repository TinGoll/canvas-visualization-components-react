import { SampleVarnish } from "./sample-varnish";

export interface Varnish {
    id: number;
    value: number;
    /** Название из старой бд */
    previousName?: string;
    note: string;
    sample: SampleVarnish;
}