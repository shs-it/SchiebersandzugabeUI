class Kopfdaten
{
    public bestellnummer: number;
    public qualitaet: string;
    public giessart: string;
    public sequenznummer: number;
    public format: number;
    public t0m: number;
    public pfannennummer: number;
    public pfannenzustand: string;
    public chargenbeginn: string;

    constructor(bestellnummer: number, qualitaet: string, giessart: string, sequenznummer: number, format: number, t0m: number,
                pfannennummer: number, pfannenzustand: string, chargenbeginn: string)
    {
        this.bestellnummer = bestellnummer;
        this.qualitaet = qualitaet;
        this.giessart = giessart;
        this.sequenznummer = sequenznummer;
        this.format = format;
        this.t0m = t0m;
        this.pfannennummer = pfannennummer;
        this.pfannenzustand = pfannenzustand;
        this.chargenbeginn = chargenbeginn;
    }
}

export {Kopfdaten}