import {SchiebersandInfo} from "./data/SchiebersandInfo";

class SchiebersandzugabeModel
{
    public async getAktuelleChargennummer() : Promise<number | null>
    {
        throw new Error("TODO: implement");
    }

    public async getVorherigeChargennummer(aktuelleChargennummer : number) : Promise<number | null>
    {
        throw new Error("TODO: implement");
    }

    public async getNaechsteChargennummer(aktuelleChargennummer : number) : Promise<number | null>
    {
        throw new Error("TODO: implement");
    }

    public async ladeSchiebersandInformationen(chargennummer: number) : Promise<SchiebersandInfo>
    {
        throw new Error("TODO: implement");
    }

    public async zugebenWieVorgegebenMoeglich() : Promise<boolean>
    {
        throw new Error("TODO: implement");
    }

    async speichern(schiebersandInfo: SchiebersandInfo) : Promise<void>
    {
        throw new Error("TODO: implement");
    }
}

export {SchiebersandzugabeModel}