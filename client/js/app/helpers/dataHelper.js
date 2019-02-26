class DateHelper {

    //caso o constructor não for declarado, o navegador irá interpretar um contructor vazio.

    constructor () {
        throw new Error ('Esta classe não pode ser instanciada');
    }

    dataParaTexto(data) {

        return 
        
        `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;

    }

    textoParaData(texto) {

        if(!/\d{4}-\d{2}-\{2}/.test(texto)) {
            throw new Error('Deve estar no formato yyyy-mm-dd');
        }

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));

    }

}