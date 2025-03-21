import {SchiebersandzugabePresenter} from "./SchiebersandzugabePresenter"
import {SchiebersandzugabeView} from "../view/SchiebersandzugabeView";
import {SchiebersandzugabeModel} from "../model/SchiebersandzugabeModel";
import {MockSchiebersandzugabeModel} from "../model/MockSchiebersandzugabeModel";

// TODO: console.log einbauen
// TODO: alle TODOs implementieren

const schiebersandzugabeView = new SchiebersandzugabeView();
const schiebersandzugabeModel = new MockSchiebersandzugabeModel(); // TODO: durch produktives Modell ersetzen
const schiebersandzugabePresenter = new SchiebersandzugabePresenter(schiebersandzugabeModel, schiebersandzugabeView);

window.onload = async function () {
    console.log("SchiebersanzugabeInitializer.onload: Start");

    const type = "click";

    const aktuelleChargeLadenBt = schiebersandzugabeView.getAktuelleChargeLadenBt();
    aktuelleChargeLadenBt.addEventListener(type, () => schiebersandzugabePresenter.ladeAktuellCharge());

    const vorherigeChargeLadenBt = schiebersandzugabeView.getVorherigeChargeLadenBt();
    vorherigeChargeLadenBt.addEventListener(type, () => schiebersandzugabePresenter.ladeVorherigeCharge());

    const naechsteChargeLadenBt = schiebersandzugabeView.getNaechsteChargeLadenBt();
    naechsteChargeLadenBt.addEventListener(type, () => schiebersandzugabePresenter.ladeNaechsteCharge());

    const zugebenWieVorgegebenBt = schiebersandzugabeView.getZugebenWieVorgegebenBt();
    zugebenWieVorgegebenBt.addEventListener(type, () => schiebersandzugabePresenter.zugebenWieVorgegeben());

    const uebernehmenBt = schiebersandzugabeView.getUebernehmenBt();
    uebernehmenBt.addEventListener(type, () => schiebersandzugabePresenter.uebernehmen());

    const aktualisierenBt = schiebersandzugabeView.getAktualisierenBt();
    aktualisierenBt.addEventListener(type, () => schiebersandzugabePresenter.aktualisieren());

    const speichernBt = schiebersandzugabeView.getSpeichernBt();
    speichernBt.addEventListener(type, () => schiebersandzugabePresenter.speichern());

    const abbrechenBt = schiebersandzugabeView.getAbbrechenBt();
    abbrechenBt.addEventListener(type, () => schiebersandzugabePresenter.abbrechen());

    await schiebersandzugabePresenter.ladeAktuellCharge();
    console.log("SchiebersanzugabeInitializer.onload: Ende");
};

window.onbeforeunload = async function () {
    console.log("SchiebersanzugabeInitializer.onbeforeload");
};

// noinspection JSDeprecatedSymbols
window.onunload = async function () {
    console.log("SchiebersanzugabeInitializer.onunload");
};