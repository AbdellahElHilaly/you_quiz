class Question{
    #question;
    #repons;
    #corectRepons
    #R_C_Indis;
    #deficulty;
    

    constructor(question , repons , reponsIndex , corectRepons , deficulty){
        this.#question = question;
        this.#repons = repons;
        this.#R_C_Indis = reponsIndex;
        this.#corectRepons = corectRepons;
        this.#deficulty = deficulty ; //Math.ceil(Math.random() * (5 - 1) + 1);
        
    }

    get question(){
        return this.#question;
    }
    get repons(){
        return this.#repons;
    }
    get correctRepons(){
        return this.#corectRepons;
    }
    get deficulty(){
        return this.#deficulty;
    }
    get R_C_Indis(){
        return this.#R_C_Indis;
    }

    


}

