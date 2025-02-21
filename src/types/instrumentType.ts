//instrument state - getting fancy loooool

import { GuitarSixStandard } from "./guitarSixStandard";

export interface InstrumentType {
    key: number;
    image: string;
    title: string;
    description: string;
    id: string;
    standardTuning: Array<GuitarSixStandard>;
}