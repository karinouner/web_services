var dataShoes = require('./shoes.json');

exports.getAllShoes = function() 
{
	return dataShoes;
};

exports.getShoesBySize = function(size) 
{
    var k =0;
    var arrayShoes =[];
    for (var i = 0; i <dataShoes.length; i++) {
        if (dataShoes[i].size == size) {
            arrayShoes[k++] = dataShoes[i];
        }
    }
    if (arrayShoes[0])
    {
        return arrayShoes;    
    }
    else
    {
        return "We don't have this size!";
    }
};

exports.getShoesBySerial = function(serial)
{
    for(var i = 0; i<dataShoes.length; i++){
        if(dataShoes[i].serial == serial){
            return dataShoes[i];
        }
    }
    return "No shoe found for this serial: " + serial ;

}; 