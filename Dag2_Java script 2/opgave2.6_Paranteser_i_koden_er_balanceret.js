
function balanceretStreng (tekstreng){
let hukommelse = [];
let i = 0;
let balanceret = true;

while (balanceret && i < tekstreng.length){
    let char = tekstreng.charAt(i);

    if (char == "{" || char == "(" || char == "["){
        hukommelse.push(char);
    }
    else if (char == "}" && hukommelse[hukommelse.length - 1] == "{"){
        hukommelse.pop();
        }
    else if (char == ")" && hukommelse[hukommelse.length - 1] == "("){
        hukommelse.pop();
    }
    else if (char == "]" && hukommelse[hukommelse.length - 1] == "["){
        hukommelse.pop();
    }
    else if (char == "}" ||char == ")"||char == "]"){
        balanceret = false;
    }
    i++;
}
        return balanceret;
  }

let tekstreng1 = "{33((4[55]5))666}"
let tekstreng2 = "{}()[]"

console.log(balanceretStreng(tekstreng1));
