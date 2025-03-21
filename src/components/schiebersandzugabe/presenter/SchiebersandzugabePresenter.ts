import {SchiebersandzugabeModel} from "../model/SchiebersandzugabeModel"
import {SchiebersandInfo} from "../model/data/SchiebersandInfo";
import {SchiebersandzugabeView} from "../view/SchiebersandzugabeView";

class SchiebersandzugabePresenter
{
    private schiebersandZugabeModel : SchiebersandzugabeModel;
    private schiebersandZugabeView : SchiebersandzugabeView;

    constructor(schiebersandZugabeModel : SchiebersandzugabeModel, schiebersandZugabeView : SchiebersandzugabeView)
    {
        this.schiebersandZugabeModel = schiebersandZugabeModel;
        this.schiebersandZugabeView = schiebersandZugabeView;
    }

    public async ladeAktuellCharge() : Promise<void>
    {
        let chargennummer : number | null = await this.schiebersandZugabeModel.getAktuelleChargennummer();
        if (chargennummer != null)
        {
            this.ladeSchiebersandInfo(chargennummer);
        }
    }

    private async ladeSchiebersandInfo(chargennummer : number) : Promise<void>
    {
        if (chargennummer != null)
        {
            let schiebersandInfo: SchiebersandInfo = await this.schiebersandZugabeModel.ladeSchiebersandInformationen(chargennummer);
            this.schiebersandZugabeView.zeigeAn(schiebersandInfo);
        }
    }

    public async ladeVorherigeCharge() : Promise<void>
    {
        let aktuelleChargennummer = this.schiebersandZugabeView.getChargennummer();
        if (aktuelleChargennummer != null)
        {
            let chargennummer: number | null = await this.schiebersandZugabeModel.getVorherigeChargennummer(aktuelleChargennummer);
            if (chargennummer != null)
            {
                this.ladeSchiebersandInfo(chargennummer);
            }
        }
    }

    public async ladeNaechsteCharge() : Promise<void>
    {
        let aktuelleChargennummer = this.schiebersandZugabeView.getChargennummer();
        if (aktuelleChargennummer != null)
        {
            let chargennummer: number | null = await this.schiebersandZugabeModel.getNaechsteChargennummer(aktuelleChargennummer);
            if (chargennummer != null)
            this.ladeSchiebersandInfo(chargennummer);
        }
    }

    public async zugebenWieVorgegeben() : Promise<void>
    {
        let schiebersandInfo: SchiebersandInfo | null = this.schiebersandZugabeView.getSchiebersandInfo();
        if (schiebersandInfo != null)
        {
            if (await this.schiebersandZugabeModel.zugebenWieVorgegebenMoeglich())
            {
                schiebersandInfo.schiebersandIstSaecke = schiebersandInfo.schiebersandSollSaecke;
                return this.schiebersandZugabeView.zeigeAn(schiebersandInfo);
            }
            else
            {
                this.schiebersandZugabeView.zeigeFehlermeldung("Zugabe wie vorgegeben nicht möglich.<br/>Lade Zugaben neu.");
                return this.ladeSchiebersandInfo(schiebersandInfo.chargennummer);
            }
        }
    }

    public async uebernehmen() : Promise<void>
    {
        await this.schiebersandZugabeView.uebernehmen();
    }

    public async aktualisieren() : Promise<void>
    {
        console.log("aktualisieren");
        let chargennummer  : number | null = this.schiebersandZugabeView.getChargennummer();
        if (chargennummer != null)
        {
            let schiebersandInfo: SchiebersandInfo = await this.schiebersandZugabeModel.ladeSchiebersandInformationen(chargennummer);
            let aktuelleSchiebersandInfo = this.schiebersandZugabeView.getSchiebersandInfo();
            if (aktuelleSchiebersandInfo != null)
            {
                schiebersandInfo.schiebersandIstSaecke = aktuelleSchiebersandInfo.schiebersandIstSaecke;
            }
            this.schiebersandZugabeView.zeigeAn(schiebersandInfo);
        }
    }

    public async abbrechen() : Promise<void>
    {
        let chargennummer : number | null = this.schiebersandZugabeView.getChargennummer();
        if (chargennummer != null)
        {
            await this.ladeSchiebersandInfo(chargennummer);
        }
        this.schiebersandZugabeView.loescheErfassung();
    }

    public async speichern() : Promise<void>
    {
        let schiebersandInfo : SchiebersandInfo | null = this.schiebersandZugabeView.getSchiebersandInfo();
        if (schiebersandInfo != null)
        {
            this.schiebersandZugabeModel.speichern(schiebersandInfo);
        }
    }
}

export {SchiebersandzugabePresenter}