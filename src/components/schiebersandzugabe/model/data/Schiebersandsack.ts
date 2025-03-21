import {Sacktyp} from "./Sacktyp";

class Schiebersandsack
{
    public sacktyp : Sacktyp;
    public bezeichner : string;
    public lieferangaben : string;
    public farbe : string;
    public gewicht : number;

    constructor(sacktyp : Sacktyp, bezeichner : string, lieferangaben : string, farbe : string, gewicht : number)
    {
        this.sacktyp = sacktyp;
        this.bezeichner = bezeichner;
        this.lieferangaben = lieferangaben;
        this.farbe = farbe;
        this.gewicht = gewicht;
    }
}

export {Schiebersandsack}