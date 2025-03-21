import {SchiebersandInfo} from "../model/data/SchiebersandInfo";
import {Sacktyp} from "../model/data/Sacktyp";
import {Schiebersandsack} from "../model/data/Schiebersandsack";

class SchiebersandzugabeView
{
    private schiebersandInfo : SchiebersandInfo | null = null;

    public getChargennummer() : number | null
    {
        return this.schiebersandInfo?.chargennummer ?? null;
    }

    public getAktuelleChargeLadenBt() : HTMLButtonElement
    {
        return document.getElementById("aktuelleChargeLadenBt") as HTMLButtonElement;
    }

    public getVorherigeChargeLadenBt() : HTMLButtonElement
    {
        return document.getElementById("vorherigeChargeLadenBt") as HTMLButtonElement;
    }

    public getNaechsteChargeLadenBt() : HTMLButtonElement
    {
        return document.getElementById("naechsteChargeLadenBt") as HTMLButtonElement;
    }

    public getZugebenWieVorgegebenBt() : HTMLButtonElement
    {
        return document.getElementById("zugebenWieVorgegebenBt") as HTMLButtonElement;
    }

    public getUebernehmenBt() : HTMLButtonElement
    {
        return document.getElementById("uebernehmenBt") as HTMLButtonElement;
    }

    public getAktualisierenBt() : HTMLButtonElement
    {
        return document.getElementById("aktualisierenBt") as HTMLButtonElement;
    }

    public getSpeichernBt() : HTMLButtonElement
    {
        return document.getElementById("speichernBt") as HTMLButtonElement;
    }

    public getAbbrechenBt() : HTMLButtonElement
    {
        return document.getElementById("abbrechenBt") as HTMLButtonElement;
    }

    public zeigeFehlermeldung(fehlermeldung: string): void
    {
        const modalFehlerMeldung = document.getElementById("modalFehlerMeldung") as HTMLDivElement;
        let ausgabeFeldFehlerMeldung = document.getElementById("ausgabeFeldFehlerMeldung") as HTMLTextAreaElement;
        ausgabeFeldFehlerMeldung.value = fehlermeldung;
        modalFehlerMeldung.style.display = 'block';
    }

    public getSchiebersandInfo() : SchiebersandInfo | null
    {
        return this.schiebersandInfo
    }

    public zeigeAn(schiebersandInfo : SchiebersandInfo) : void
    {
        this.zeigeAnKopfdaten(schiebersandInfo);
        this.zeigeAnSollzugaben(schiebersandInfo);
        this.zeigeAnIstzugaben(schiebersandInfo);
    }

    private zeigeAnKopfdaten(schiebersandInfo: SchiebersandInfo) : void
    {
        const chargennummer : HTMLInputElement = document.getElementById("chargennummerEingabe") as HTMLInputElement;
        chargennummer.value = schiebersandInfo == null ? "" : schiebersandInfo.chargennummer.toString();

        const bestellnummer : HTMLInputElement = document.getElementById("bestellnummerEingabe") as HTMLInputElement;
        bestellnummer.value = schiebersandInfo == null ? "" : schiebersandInfo.kopfdaten.bestellnummer.toString();

        const qualitaet : HTMLInputElement = document.getElementById("qualitaetEingabe") as HTMLInputElement;
        qualitaet.value = schiebersandInfo == null ? "" : schiebersandInfo.kopfdaten.qualitaet;

        const giessartSeqnr : HTMLInputElement = document.getElementById("giessartSeqnrEingabe") as HTMLInputElement;
        giessartSeqnr.value = schiebersandInfo == null ? ""
            : `$${(schiebersandInfo.kopfdaten.giessart ?? "") + "/" + schiebersandInfo.kopfdaten.sequenznummer}`;

        const formatEingabe : HTMLInputElement = document.getElementById("formatEingabe") as HTMLInputElement;
        formatEingabe.value = schiebersandInfo == null ? "" : schiebersandInfo.kopfdaten.format.toString();

        const t0mEingabe : HTMLInputElement = document.getElementById("t0mEingabe") as HTMLInputElement;
        t0mEingabe.value = schiebersandInfo == null ? "" : schiebersandInfo.kopfdaten.t0m.toString();

        const chargenbeginnEingabe : HTMLInputElement = document.getElementById("chargenbeginnEingabe") as HTMLInputElement;
        chargenbeginnEingabe.value = schiebersandInfo == null ? "" : schiebersandInfo.kopfdaten.chargenbeginn;

        const pfanneEingabe : HTMLInputElement = document.getElementById("pfanneEingabe") as HTMLInputElement;
        pfanneEingabe.value = schiebersandInfo == null ? "" : (schiebersandInfo.kopfdaten.pfannennummer ?? "").toString();

        const zustandEingabe : HTMLInputElement = document.getElementById("zustandEingabe") as HTMLInputElement;
        zustandEingabe.value = schiebersandInfo == null ? "" : (schiebersandInfo.kopfdaten.pfannenzustand ?? "");
    }

    private zeigeAnSollzugaben(schiebersandInfo : SchiebersandInfo) : void
    {
        const sollvorgabeLinks : HTMLInputElement = document.getElementById("sollvorgabeLinks") as HTMLInputElement;
        const sollvorgabeRechts : HTMLInputElement = document.getElementById("sollvorgabeRechts") as HTMLInputElement;
        const lieferangabenLinks : HTMLInputElement = document.getElementById("lieferangabenLinks") as HTMLInputElement;
        const lieferangabenRechts : HTMLInputElement = document.getElementById("lieferangabenRechts") as HTMLInputElement;

        if (schiebersandInfo == null || schiebersandInfo.schiebersandSollSaecke.length == 0)
        {
            sollvorgabeLinks.value = sollvorgabeRechts.value = "";
            sollvorgabeLinks.style.background = sollvorgabeRechts.style.background = "white";
            lieferangabenLinks.value = lieferangabenRechts.value = "";
        }
        else
        {
            let anzahlLinks : number = 0;
            let anzahlRechts : number = 0;
            let gewichtLinks : number = 0;
            let gewichtRechts : number = 0;

            for (let sack of schiebersandInfo.schiebersandSollSaecke)
            {
                if (sack.sacktyp == Sacktyp.Zirkon)
                {
                    anzahlLinks += 1
                    gewichtLinks += sack.gewicht;
                    sollvorgabeLinks.value = sack.bezeichner + " " + gewichtLinks + " kg (" + anzahlLinks + " Sack)"
                    sollvorgabeLinks.style.background = sack.farbe;
                    lieferangabenLinks.value = sack.lieferangaben;
                }
                else
                {
                    anzahlRechts += 1;
                    gewichtRechts += sack.gewicht;
                    sollvorgabeRechts.value = sack.bezeichner + " " + gewichtRechts + " kg (" + anzahlLinks + " Sack)"
                    sollvorgabeRechts.style.background = sack.farbe;
                    lieferangabenRechts.value = sack.lieferangaben;
                }
            }
        }
    }

    private zeigeAnIstzugaben(schiebersandInfo : SchiebersandInfo) : void
    {
        const sack1linksEingabe : HTMLInputElement = document.getElementById("sack1linksEingabe") as HTMLInputElement;
        const sack2linksEingabe : HTMLInputElement = document.getElementById("sack2linksEingabe") as HTMLInputElement;
        const sack1rechtsEingabe : HTMLInputElement = document.getElementById("sack1rechtsEingabe") as HTMLInputElement;
        const sack2rechtsEingabe : HTMLInputElement = document.getElementById("sack2rechtsEingabe") as HTMLInputElement;

        sack1linksEingabe.value = sack2linksEingabe.value = sack1rechtsEingabe.value = sack2rechtsEingabe.value = "";
        sack2rechtsEingabe.style.background = sack2linksEingabe.style.background =
            sack1rechtsEingabe.style.background = sack1rechtsEingabe.style.background = "#f1f1f1";

        if (schiebersandInfo != null && schiebersandInfo.schiebersandIstSaecke.length > 0)
        {
            let input : HTMLInputElement;

            for (let sack of schiebersandInfo.schiebersandIstSaecke)
            {
                if (sack.sacktyp == Sacktyp.Zirkon)
                {
                    input = sack1linksEingabe.value === "" ? sack1linksEingabe : sack2linksEingabe;
                }
                else
                {
                    input = sack1rechtsEingabe.value === "" ? sack1rechtsEingabe : sack2rechtsEingabe;
                }
                input.value = sack.bezeichner + " (" + sack.gewicht + " kg  " + sack.lieferangaben.substring(0, 20) + ")";
                input.style.background = sack.farbe;
            }
        }
    }

    public loescheErfassung() : void
    {
        const input = document.getElementById("lieferangabenEingabe") as HTMLInputElement;
        input.value = "";
    }

    public uebernehmen() : void
    {
        throw new Error("TODO: implement");
    }
}

export {SchiebersandzugabeView}