var katzDeliLine = []

function currentLine(line){

    if(!line.length){
        return "The line is currently empty."
    }
    var namesAndNums = []

    for (var i = 0; i < line.length; i += 1 ){
        var name = line[i];
        namesAndNums.push((i + 1) + '. ' + name);
    }
    console.log('The line is currently: ' + namesAndNums)
    return 'The line is currently: ' + namesAndNums.join(', ');
}

function nowServing(line){
    if(line.length > 0){
        return 'Currently serving ' + line.shift() + '.'
    }else{
        return 'There is nobody waiting to be served!'
    }

}

function takeANumber(line, name){
    line.push(name)
    var welcomeMessage = 'Welcome, ' + name + '. You are number ' + line.length + ' in line.'
    return welcomeMessage
}