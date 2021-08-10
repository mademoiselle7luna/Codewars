function DNAStrand(dna) {
    let string = "";

    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === "T") {
            string += "A";
        }
        else if (dna[i] === "A") {
            string += "T";
        }
        else if (dna[i] === "C") {
            string += "G";
        }
        else if (dna[i] === "G") {
            string += "C";
        }
    }
    return string;

}