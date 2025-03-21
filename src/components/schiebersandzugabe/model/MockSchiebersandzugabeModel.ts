import {SchiebersandInfo} from "./data/SchiebersandInfo";
import {SchiebersandzugabeModel} from "./SchiebersandzugabeModel";
import {Schiebersandsack} from "./data/Schiebersandsack";
import {Kopfdaten} from "./data/Kopfdaten";
import {Sacktyp} from "./data/Sacktyp";

class MockSchiebersandzugabeModel extends SchiebersandzugabeModel
{
    public async getAktuelleChargennummer() : Promise<number | null>
    {
        return 444888;
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
        let zz = (v: number) => (100 + v).toString().substring(1, 3); // erweitert Minute, Stunde, Tag etc. auf 2 Ziffern
        let now = new Date();
        let kopfdaten = new Kopfdaten(45678, "S4X", "ST51", 1, 2210, 1514.0, 33, "NEU",
            `${zz(now.getDate()) + "." + zz(now.getMonth() + 1) + "." + now.getFullYear() + " " + zz(now.getHours()) + ":" + zz(now.getMinutes())}`);
        let sackZrInt = new Schiebersandsack(Sacktyp.Zirkon, "ZrInt", "31.07.2023 L01834", "#aaaaaa", 13.5);
        let sackCrJac = new Schiebersandsack(Sacktyp.Chrom, "CrJac", "26.06.2023 L01822", "#88ff88", 7);
        let sollsaecke : Schiebersandsack[] = [ sackZrInt, sackZrInt, sackCrJac, sackCrJac ];
        let istsaecke : Schiebersandsack[] = [ sackZrInt, sackCrJac, sackCrJac ];
        return new SchiebersandInfo(chargennummer, kopfdaten, sollsaecke, istsaecke);
    }

    private zweiZiffern(v: number) : string
    {
        return (100 + v).toString().substring(1, 2);
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

export {MockSchiebersandzugabeModel}