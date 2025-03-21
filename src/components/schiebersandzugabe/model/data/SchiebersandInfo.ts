import {Schiebersandsack} from "./Schiebersandsack";
import {Kopfdaten} from "./Kopfdaten";

class SchiebersandInfo
{
    public chargennummer : number;
    public kopfdaten : Kopfdaten;
    public schiebersandSollSaecke : Schiebersandsack[];
    public schiebersandIstSaecke : Schiebersandsack[];

    constructor(chargennummer : number, kopfdaten : Kopfdaten, schiebersandSollSaecke : Schiebersandsack[], schiebersandIstSaecke : Schiebersandsack[])
    {
        this.chargennummer = chargennummer;
        this.kopfdaten = kopfdaten;
        this.schiebersandSollSaecke = schiebersandSollSaecke;
        this.schiebersandIstSaecke = schiebersandIstSaecke;
    }
}

export {SchiebersandInfo}